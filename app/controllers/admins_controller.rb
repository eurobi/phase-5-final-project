class AdminsController < ApplicationController
    def auth
        admin = Admin.find_by(id: session[:admin_id])
        render json: admin
    end
end
