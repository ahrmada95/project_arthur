class SellersController < ApplicationController

    def index 
        render json: Seller.all
    end

    def show
        render json: Seller.find_by(id: get_seller_id)
    end

    def create 
        new_seller = Seller.create(seller_params)
        if new_seller.valid?
            render json: new_seller, status: :created
        else  
            render json: {error: 'Validation Error'}
        end
    end

    def destroy 
        destroy_me = Seller.find_by(id: get_seller_id)
        if destroy_me.valid?
            destroy_me.destroy
            render json: destroy_me
        else 
            render json: {error: 'Seller not found'}, status: 404
        end
    end

   private

    def seller_params 
        params.permit(:seller_id, :user_id, :rating, :bio)
    end

    def get_seller_id
        curr_user = User.find_by(id: session[:user_id])
        return curr_user.sellers.id
    end
end
