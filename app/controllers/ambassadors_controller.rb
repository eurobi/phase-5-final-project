class AmbassadorsController < ApplicationController
    def index
        ambassadors = Ambassador.all
        render json: ambassadors
    end
end
