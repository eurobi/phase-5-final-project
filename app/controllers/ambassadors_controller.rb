class AmbassadorsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        if session[:admin_id]
            ambassadors = Ambassador.all
            render json: ambassadors
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized
        end

    end

    def show
        if session[:admin_id] || session[:user_id] = params[:user_id]
            ambassador = Ambassador.find_by(id: params[:id])
            render json: ambassador
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized
        end
    end

    def index_accepted
        if session[:admin_id]
            ambassadors = Ambassador.joins(:app).where(app: { accepted: true })
            render json: ambassadors
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized
        end
    end


    def auth
        ambassador = Ambassador.find_by(id: session[:ambassador_id])
        render json: ambassador
    end

    def create
        ambassador = Ambassador.create(ambassador_params)
        if ambassador.valid?
            session[:ambassador_id] = ambassador.id
            render json: ambassador
        else
            render json: ambassador.errors
        end
    end

    def accept
        ambassador = Ambassador.find_by(id: params[:id])
        ambassador.update(ambassador_params)
        if ambassador.valid?
            ambassador.app.update(accepted: true)
            render json: ambassador
        else
            render json: ambassador.errors
        end
    end

    def deny
        ambassador = Ambassador.find_by(id: params[:id])
        if ambassador.valid?
            ambassador.app.update(accepted: false)
            render json: ambassador
        else
            render json: ambassador.errors
        end
    end


    private
    def ambassador_params
        params.permit(:email, :password, :password_confirmation, :commission_rate, :coupon_code, :lifetime_commission)
    end
end
