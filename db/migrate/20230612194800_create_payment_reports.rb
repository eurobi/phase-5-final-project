class CreatePaymentReports < ActiveRecord::Migration[7.0]
  def change
    create_table :payment_reports do |t|
      t.string :month
      t.decimal :total
      t.boolean :sent
      t.timestamps
    end
  end
end
