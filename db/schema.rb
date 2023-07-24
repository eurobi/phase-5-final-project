# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_24_224652) do
  create_table "admins", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ambassadors", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "coupon_code"
    t.decimal "commission_rate"
    t.boolean "lifetime_commission"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "app_id"
  end

  create_table "apps", force: :cascade do |t|
    t.integer "ambassador_id"
    t.string "last_name"
    t.string "first_name"
    t.string "ambassador_type"
    t.string "mailing_address"
    t.string "website"
    t.string "tiktok_handle"
    t.string "youtube_link"
    t.string "instagram_handle"
    t.string "twitter_handle"
    t.string "other_info"
    t.boolean "accepted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "payment_reports", force: :cascade do |t|
    t.string "month"
    t.decimal "total"
    t.boolean "sent"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sales", force: :cascade do |t|
    t.string "date"
    t.decimal "amount"
    t.integer "ambassador_id"
    t.integer "payment_report_id"
    t.string "coupon_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
