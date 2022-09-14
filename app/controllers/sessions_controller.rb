class SessionsController < ApplicationController

    def create 
        this_user = User.find_by(email: params[:username])

        if (this_user && authenticate(this_user, params[:password]))
            session[:user_id] = this_user.id
            render json: {first_name: this_user.first_name, last_name: this_user.last_name, email: this_user.email}, status: 202
        else 
            render json: {error: 'incorrect information'}, status: 418
        end
    end

    def destroy 
        session.delete :user_id
        head :no_content
    end

    private 
        def authenticate (user, password)
            if(user.password == password)
                return true
            else 
                return false
            end 
        end
end
