class ClientsController < ApplicationController
    skip_before_action :verify_authenticity_token
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Client.all
    end

    def show
        client = Client.find(params[:id])
        render json: client
    end

    def create
        client = Client.create!(permitted_params)
        render json: client
    end
    # Do we need update? 
    # def update
    #     client = Client.find_by(params[:id])
    #     client.update(
    #       user_id: params[:user_id]  
    #     )
    # end

    def destroy
       client = Client.find(params[:id])
       client.destroy 
       head :no_content 
    end

    private

    def permitted_params
        params.permit(:user_id)
    end

    def render_not_found_response
        render json: { error: "Client not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def get_client_id 
        curr_user = User.find_by(id: session[:user_id])
        return curr_user.clients
    end
end
