class CreateFoodItems < ActiveRecord::Migration
  def change
    create_table :food_items do |t|
      t.string :name, null: false
      t.integer :price, null: false
      t.string :image_url, null: false
      t.integer :restaurant_id, null: false
      t.timestamps null: false
    end

    add_index :food_items, :restaurant_id
    add_index :food_items, :name
    add_index :food_items, :price
  end
end
