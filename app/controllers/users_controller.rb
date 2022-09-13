class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: User.all
    end

    def show
        render json: User.find_by(id: params[:id])
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

    private 
        def user_params 
            params.permit(:first_name, :last_name, :email, :password)
        end
end
