class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.integer :food_item_id, null: false

      t.timestamps null: false
    end
    add_index :reviews, [:user_id, :food_item_id], unique: true
    add_index :reviews, :food_item_id
  end
end
