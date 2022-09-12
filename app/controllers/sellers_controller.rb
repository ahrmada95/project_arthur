class SellersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Seller.all
    end

    def show
        render json: Seller.find_by(id: params[:id])
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
        destroy_me = Seller.find_by(id: params[:id])
        if destroy_me.valid?
            destroy_me.destroy
            render json: destroy_me
        else 
            render json: {error: 'Seller not found'}, status: 404
        end
    end
end
