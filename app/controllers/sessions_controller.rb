class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        ambassador = Ambassador.find_by(email: params[:email])
        if ambassador&.authenticate(params[:password])
            # session[:user_id] = user.id
            render json: ambassador, status: :created
        else
            render json: {error: 'Invalid Email or password.'}, status: :unauthorized
        end
    end
end