class PaymentReport < ApplicationRecord
    has_many :sales
    has_many :ambassadors, through: :sales

    def total
        self.sales.sum {|sale| sale[:amount]}
    end
end
