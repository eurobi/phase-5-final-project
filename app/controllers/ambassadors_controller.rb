class AmbassadorsController < ApplicationController
    def index
        ambassadors = Ambassador.all
        render json: ambassadors
    end

    def show
        ambassador = Ambassador.find_by(id: params[:id])
        render json: ambassador
    end

    def create
        ambassador = Ambassador.create(ambassador_params)
    end

    private
    def ambassador_params
        params.permit(:email, :password, :password_confirmation)
    end
end
