class AppsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        apps = App.where(accepted: nil)
        render json: apps
    end

    def show
        app =  App.find_by(id: params[:id])
        render json: app
    end

    def create
        app = App.create(app_params)
        if app.valid?
            render json: app, status: :created
        else
            render app.errors, status: :unprocessable_entity
        end
    end

    private

    def app_params
        params.permit(:ambassador_id, :last_name, :first_name, :ambassador_type, :mailing_address, :website, :tiktok_handle, :youtube_link, :instagram_handle, :twitter_handle, :other_info)
    end
end

