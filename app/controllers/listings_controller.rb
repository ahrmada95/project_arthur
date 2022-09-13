class ListingsController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        listings = Listing.all
        render json: listings
    end

    def search
        # @listing = Listing.where("lower(name) LIKE :search OR lower(description) LIKE :search ", search: "%#{params[:key.downcase]}%")
        listings = []
        param = params[:key].downcase 
        Listing.all.each do |list|
            if list[:name].downcase.include?(param) || list[:description].downcase.include?(param) || list[:tags].include?(param)
               listings << list
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
