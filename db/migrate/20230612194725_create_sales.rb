class CreateSales < ActiveRecord::Migration[7.0]
  def change
    create_table :sales do |t|
      t.string :date
      t.decimal :amount
      t.string :ambassador_id
      t.string :payment_report_id
      t.string :coupon_code
      t.timestamps
    end
  end
end
