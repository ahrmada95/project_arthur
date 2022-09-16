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
        # user = User.find_by(id: listing.sller_id)
        seller = Seller.find_by(id: listing.seller_id)
        user = User.find_by(id: seller.user_id)
        if listing
        render json: {listing: listing, bio: seller.bio, seller_id: seller.id, rating: seller.rating, first_name: user.first_name, last_name: user.last_name}
        else 
            render json:{error: 'Listing not Found'}, status: :not_found
        end
    end

    def get_listing_by_user
        token = params[:user_id]
        hmac_secret = 'my$ecretK3y'
        decoded_token = JWT.decode token, hmac_secret, true, { algorithm: 'HS256' }
        this_user = User.find_by(id: decoded_token[0]["data"])
        puts this_user.id
        seller = Seller.find_by(user_id: this_user.id)
        puts seller.id
        if seller
            transactions = Transaction.where(seller_id: seller.id)
            puts transactions
            render json: transactions.to_json(methods: [:listing])
        else
            render json: {error: 'User not found'}, status: 404
        end

    end

    def create
        puts params
    listing = Listing.create!(seller_id: params[:seller_id], description: params[:description], name: params[:name], price: params[:price].to_i, images: params[:images])
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
