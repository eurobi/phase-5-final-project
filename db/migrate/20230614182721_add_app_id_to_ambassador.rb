class AddAppIdToAmbassador < ActiveRecord::Migration[7.0]
  def change
    add_column :ambassadors, :app_id, :integer
  end
end
