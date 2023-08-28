class PaymentReportSerializer < ActiveModel::Serializer
  attributes :id, :month, :total, :sent, :commission_earned

  def commission_earned
    object.total
  end
end
