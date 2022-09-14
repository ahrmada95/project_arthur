class UsersController < ApplicationController

    def index 
        render json: User.all
    end

    def show
        render json: User.find_by(id: params[:id])
    end

    def check_login 
        this_user = User.find_by(id: session[:user_id])
        if this_user 
            render json: {first_name: this_user.first_name, last_name: this_user.last_name, user_name: this_user.email}
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

    private 
        def user_params 
            params.permit(:first_name, :last_name, :email, :password)
        end
end
