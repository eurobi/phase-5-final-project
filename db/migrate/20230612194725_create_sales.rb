class CreateSales < ActiveRecord::Migration[7.0]
  def change
    create_table :sales do |t|
      t.string :date
      t.decimal :amount
      t.integer :ambassador_id
      t.integer :payment_report_id
      t.string :coupon_code
      t.timestamps
    end
  end
end
