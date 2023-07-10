class Ambassador < ApplicationRecord
    has_secure_password
    has_one :app
    has_many :sales
    has_many :payment_reports, through: :sales
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :coupon_code, uniqueness: true, :allow_nil => true
end
