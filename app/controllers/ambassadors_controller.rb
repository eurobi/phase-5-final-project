class AmbassadorsController < ApplicationController
    skip_before_action :verify_authenticity_token

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
        if ambassador.valid?
            render json: ambassador
        else
            render json: ambassador.errors
        end
    end

    def update
        ambassador = Ambassador.find_by(id: params[:id])
        ambassador.update(ambassador_params)
        if ambassador.valid?
            render json: ambassador
        else
            render json: ambassador.errors
        end
    end

    private
    def ambassador_params
        params.permit(:email, :password, :password_confirmation, :commission_rate, :coupon_code)
    end
end
