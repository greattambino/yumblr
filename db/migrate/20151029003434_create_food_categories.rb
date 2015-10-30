class CreateFoodCategories < ActiveRecord::Migration
  def change
    create_table :food_categories do |t|
      t.integer :category_id, null: false
      t.integer :food_item_id, null: false

      t.timestamps null: false
    end

    add_index :food_categories, :category_id
    add_index :food_categories, :food_item_id
  end
end
