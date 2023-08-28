class PaymentReportsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        if session[:admin_id]
            reports = PaymentReport.all
            render json: reports
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized
        end
    end

    def show
        if session[:admin_id]
            report = PaymentReport.find_by(id: params[:id])
            render json: report, serializer: PaymentReportDetailsSerializer
        else
            render json: {errors: ["unauthorized"]}, status: :unauthorized
        end
    end

    def update
        report = PaymentReport.find_by(id: params[:id])
        report.update(payment_report_params)
        if report.valid?
            render json: report, serializer: PaymentReportDetailsSerializer
        else
            render json: report.errors
        end
    end

    private
    def payment_report_params
        params.permit(:sent)
    end
end
