class PaymentReportSerializer < ActiveModel::Serializer
  attributes :id, :month, :total, :sent
end
