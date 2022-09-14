class ListingsController < ApplicationController
    
    def index
        listings = Listing.all
        render json: listings
    end

    def search
        # @listing = Listing.where("lower(name) LIKE :search OR lower(description) LIKE :search ", search: "%#{params[:key.downcase]}%")
        listings = []
        param = params[:key].downcase 
        if param == "all"
            listings = Listing.all
        else
            Listing.all.each do |list|
            if list[:name].downcase.include?(param) || list[:description].downcase.include?(param) || list[:tags].include?(param)
               listings << list
            end
        end
        end 
        render json: listings
    end

    def show
        listing = find_listing
        if listing
        render json: listing.to_json(methods: [:seller])
        else 
            render json:{error: 'Listing not Found'}, status: :not_found
        end
    end

    def get_listing_by_user
        token = params[:user_id]
        hmac_secret = 'my$ecretK3y'
        decoded_token = JWT.decode token, hmac_secret, true, { algorithm: 'HS256' }
        this_user = User.find_by(id: decoded_token[0]["data"])
        if this_user
            transactions = Transaction.where(seller_id: this_user.id)
            render json: transactions.to_json(methods: [:listing])
        else
            render json: {error: 'User not found'}
        end

    end

    def create
    listing = Listing.create!(listing_params)
    if listing.valid?
        render json: listing, status: :created
    else 
        render json: {error: 'Validation error'}
    end
    end

    def destroy
        listing = find_listing
        if listing
            listing.destroy
        render json: {}
        else 
            render json: {error: 'Listing Not Found'}
    end
    end

    def update
        listing = find_listing
        if listing
            listing.update(listing_params)
            render json: listing
        else
            render json: {error: 'Listing not found'}, status: :not_found
        end
    end
    private

    def find_listing
        Listing.find_by(id: params[:id])
    end

    def listing_params
        params.permit(:name, :description, :price, :images, :active, :seller_id, :tags)
    end 
end
