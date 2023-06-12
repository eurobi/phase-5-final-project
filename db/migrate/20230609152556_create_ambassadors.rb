class CreateAmbassadors < ActiveRecord::Migration[7.0]
  def change
    create_table :ambassadors do |t|
      t.string :email
      t.string :password_digest
      t.string :coupon_code
      t.decimal :commission_rate
      t.boolean :lifetime_commission
      t.timestamps
    end
  end
end
