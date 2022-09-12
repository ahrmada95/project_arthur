class TransactionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Transaction.all
    end

    def show
        render json: Transaction.find_by(id: params[:id])
    end

    def create 
        new_transaction = Transaction.create(transaction_params)
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
end
