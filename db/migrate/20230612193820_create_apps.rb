class CreateApps < ActiveRecord::Migration[7.0]
  def change
    create_table :apps do |t|
      t.string :ambassador_id
      t.string :last_name
      t.string :first_name
      t.string :type
      t.string :mailing_address
      t.string :website
      t.string :tiktok_handle
      t.string :youtube_link
      t.string :instagram_handle
      t.string :twitter_handle
      t.string :other_info
      t.boolean :accepted
      t.timestamps
    end
  end
end
