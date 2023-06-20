class ChangeTypeToAmbassadorType < ActiveRecord::Migration[7.0]
  def change
    rename_column :apps, :type, :ambassador_type
  end
end
