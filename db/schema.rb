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

ActiveRecord::Schema.define(version: 2022_05_25_181550) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "dog_id"
    t.string "dog_name"
    t.string "dog_breed"
    t.string "dog_image"
    t.string "user_name"
    t.bigint "stylist_id"
    t.string "stylist_name"
    t.string "stylist_image"
    t.string "stylist_intelligence"
    t.boolean "is_dumber", default: false
    t.bigint "service_id"
    t.string "service_name"
    t.string "service_price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id"], name: "index_appointments_on_dog_id"
    t.index ["service_id"], name: "index_appointments_on_service_id"
    t.index ["stylist_id"], name: "index_appointments_on_stylist_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "breed"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_dogs_on_user_id"
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "description"
    t.integer "song_count"
    t.float "tempo_avg"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "name"
    t.float "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stylists", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tracks", force: :cascade do |t|
    t.integer "playlist_id"
    t.string "name"
    t.string "artist"
    t.string "album_name"
    t.string "album_image"
    t.float "tempo"
    t.integer "time_signature"
    t.integer "key"
    t.integer "mode"
    t.integer "duration_ms"
    t.string "spotify_id"
    t.string "uri"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "appointments", "dogs"
  add_foreign_key "appointments", "services"
  add_foreign_key "appointments", "stylists"
  add_foreign_key "dogs", "users"
end
