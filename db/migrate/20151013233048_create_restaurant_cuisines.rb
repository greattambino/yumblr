class CreateRestaurantCuisines < ActiveRecord::Migration
  def change
    create_table :restaurant_cuisines do |t|
      t.integer :cuisine_id, null: false
      t.integer :restaurant_id, null: false
      t.timestamps null: false
    end

    add_index :restaurant_cuisines, :cuisine_id
    add_index :restaurant_cuisines, :restaurant_id
  end
end
