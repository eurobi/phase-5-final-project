class Sale < ApplicationRecord
    belongs_to :ambassador
    belongs_to :payment_report
    validates :date, presence: true
    validates :amount, presence: true
    # validates :coupon_code, presence: true
end


