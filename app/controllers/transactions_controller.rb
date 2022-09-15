class TransactionsController < ApplicationController
    def index 
        render json: Transaction.all
    end

    def show
        transaction = Transaction.find_by(id: params[:id])
        render json: transaction
    end

    def find_by_user

        token = params[:user_id]
        hmac_secret = 'my$ecretK3y'
        decoded_token = JWT.decode token, hmac_secret, true, { algorithm: 'HS256' }
        this_user = User.find_by(id: decoded_token[0]["data"])
        puts this_user
        client = Client.find_by(user_id: this_user.id)
        puts client
        in_progress_transactions = Transaction.where(client_id: client.id, status: 'in_progress')
        completed_transactions = Transaction.where(client_id: client.id, status: 'completed')
        render json:{ in_progress: in_progress_transactions.as_json(methods: [:listing]), completed: completed_transactions.as_json(methods: [:listing])}
    end

    def edit_listing_status
        transaction = Transaction.find_by(id: params[:id])
        transaction.update(status: params[:status])
        render json: transaction
    end

    def create 

        # t.integer "listing_id"
        # t.integer "seller_id"
        # t.integer "client_id"
        # t.string "status"
        token = params[:user_id]
        hmac_secret = 'my$ecretK3y'
        decoded_token = JWT.decode token, hmac_secret, true, { algorithm: 'HS256' }
        this_user = User.find_by(id: decoded_token[0]["data"])
        client = Client.find_by(user_id: this_user.id)
        new_transaction = Transaction.create(listing_id: params[:listing_id], seller_id: params[:seller_id], status: params[:status], client_id: client.id)
        if new_transaction.valid?
            render json: new_transaction, status: :created
        else  
            render json: {error: 'Validation Error'}
        end
    end

    def destroy 
        destroy_me = Transaction.find_by(id: params[:id])
        if destroy_me.valid?
            destroy_me.destroy
            render json: destroy_me
        else 
            render json: {error: 'Transaction not found'}, status: 404
        end
    end

    private 
        def transaction_params 
            params.permit(:listing_id, :seller_id, :client_id, :status, :user_id)
        end
end
