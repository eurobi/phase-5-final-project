class SaleSerializer < ActiveModel::Serializer
  attributes :id, :date, :amount, :payment_report_id, :ambassador_id, :commission_rate


end
