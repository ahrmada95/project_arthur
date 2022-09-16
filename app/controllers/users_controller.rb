class UsersController < ApplicationController

    def index 
        render json: User.all
    end

    def show
        render json: User.find_by(id: params[:id])
    end

    def check_login 
        token = params[:user_id]
        hmac_secret = 'my$ecretK3y'
        decoded_token = JWT.decode token, hmac_secret, true, { algorithm: 'HS256' }
        puts decoded_token[0]["data"]
        this_user = User.find_by(id: decoded_token[0]["data"])
        seller = Seller.find_by(user_id: this_user.id)
        if this_user 
            render json: {first_name: this_user.first_name, last_name: this_user.last_name, user_name: this_user.email, seller_id: seller.id}
        else 
            render json: {error: "Invalid login"}, status: 418
        end
    end
    def create 
        new_user = User.create(user_params)
        if new_user.valid?
            render json: new_user, status: :created
        else  
            render json: {error: 'Validation Error'}
        end
    end

    def destroy 
        destroy_me = User.find_by(id: params[:id])
        if destroy_me.valid?
            destroy_me.destroy
            render json: destroy_me
        else 
            render json: {error: 'User not found'}, status: 404
        end
    end


    def make_seller 
        token = params[:user_id]
        hmac_secret = 'my$ecretK3y'
        decoded_token = JWT.decode token, hmac_secret, true, { algorithm: 'HS256' }
        this_user = User.find_by(id: decoded_token[0]["data"])
        if this_user 
            seller = Seller.create(user_id: this_user.id, bio: params[:bio], rating: 0)
            render json: {message: 'success'}, status: 204
        else 
            render json: {error: "Invalid login"}, status: 418
        end
    end

    def get_suggested_listings
        suggested_listing_ids = []
        curr_tags = Listing.find_by(id: params[:listing_id]).tags
        Listing.all.each do |listing|
            intersection = curr_tags & listing.tags
            if (intersection.size != 0) #you can change this to determine how specific you want it to be
                suggested_listing_ids.push(listing)
            end
        end
        return render json: suggested_listing_ids 
    end


    private 
        def user_params 
            params.permit(:first_name, :last_name, :email, :password)
        end
end



