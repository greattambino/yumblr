# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151209062442) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cuisines", force: :cascade do |t|
    t.string   "cuisine",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "food_categories", force: :cascade do |t|
    t.integer  "category_id",  null: false
    t.integer  "food_item_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "food_categories", ["category_id"], name: "index_food_categories_on_category_id", using: :btree
  add_index "food_categories", ["food_item_id"], name: "index_food_categories_on_food_item_id", using: :btree

  create_table "food_items", force: :cascade do |t|
    t.string   "name",                        null: false
    t.float    "price",         default: 0.0, null: false
    t.string   "image_url",                   null: false
    t.integer  "restaurant_id",               null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "food_items", ["name"], name: "index_food_items_on_name", using: :btree
  add_index "food_items", ["price"], name: "index_food_items_on_price", using: :btree
  add_index "food_items", ["restaurant_id"], name: "index_food_items_on_restaurant_id", using: :btree

  create_table "likings", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.integer  "likable_id",   null: false
    t.string   "likable_type", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "likings", ["likable_id"], name: "index_likings_on_likable_id", using: :btree
  add_index "likings", ["likable_type"], name: "index_likings_on_likable_type", using: :btree
  add_index "likings", ["user_id", "likable_id", "likable_type"], name: "index_likings_on_user_id_and_likable_id_and_likable_type", unique: true, using: :btree
  add_index "likings", ["user_id"], name: "index_likings_on_user_id", using: :btree

  create_table "restaurant_cuisines", force: :cascade do |t|
    t.integer  "cuisine_id",    null: false
    t.integer  "restaurant_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "restaurant_cuisines", ["cuisine_id"], name: "index_restaurant_cuisines_on_cuisine_id", using: :btree
  add_index "restaurant_cuisines", ["restaurant_id"], name: "index_restaurant_cuisines_on_restaurant_id", using: :btree

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",         null: false
    t.string   "description"
    t.string   "address",      null: false
    t.string   "city",         null: false
    t.string   "state",        null: false
    t.string   "zip_code",     null: false
    t.string   "phone_number"
    t.string   "url"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.float    "lat"
    t.float    "lng"
  end

  create_table "reviews", force: :cascade do |t|
    t.text     "body",         null: false
    t.integer  "rating",       null: false
    t.integer  "user_id",      null: false
    t.integer  "food_item_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "reviews", ["food_item_id"], name: "index_reviews_on_food_item_id", using: :btree
  add_index "reviews", ["user_id", "food_item_id"], name: "index_reviews_on_user_id_and_food_item_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
