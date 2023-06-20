class PaymentReportsController < ApplicationController
    def index
        reports = PaymentReport.all
        render json: reports
    end

    def show
        report = PaymentReport.find_by(id: params[:id])
        render json: report
    end
end
