class App < ApplicationRecord
    belongs_to :ambassador
    validates :last_name, presence: true
    validates :first_name, presence: true
    validates :ambassador_type, presence: true
    validates :mailing_address, presence: true

end
