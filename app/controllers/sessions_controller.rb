class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        ambassador = Ambassador.find_by(email: params[:email])
        if ambassador&.authenticate(params[:password])
            session[:ambassador_id] = ambassador.id
            render json: ambassador, status: :created
        else
            render json: {error: 'Invalid Email or password.'}, status: :unauthorized
        end
    end

    def destroy
        if session[:ambassador_id]
            session.delete(:ambassador_id)
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized
        end
    end
end