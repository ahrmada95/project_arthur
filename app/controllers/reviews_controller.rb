class ReviewsController < ApplicationController
    skip_before_action :verify_authenticity_token
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        render json: Review.all
    end

    def show
        review = review.find_by(params[:id])
        render json: review
    end

    def create
        review = Review.create!(permitted_params)
        render json: review
    end

    def destroy
        review = review.find_by(params[:id])
        review.destroy
        head :no_content
    end


    private
    def permitted_params
        params.permit(:seller_id, :client_id, :score)
    end
    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end


end
