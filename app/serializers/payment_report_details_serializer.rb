class PaymentReportDetailsSerializer < ActiveModel::Serializer
  attributes :id, :month, :total, :sent, :ambassador_payments

  def ambassador_payments
    sales = object.sales.select('sales.ambassador_id, SUM(sales.amount) AS total_amount, ambassadors.commission_rate, ambassadors.email, ambassadors.coupon_code')
      .joins(:ambassador)
      .group(:ambassador_id).map do |payment|
         {"ambassador_id" => payment.ambassador_id,
         "coupon_code" => payment.coupon_code,
         "email" => payment.email,
         "commissions earned" => payment.total_amount * 0.15
        }
      end
  end


end
