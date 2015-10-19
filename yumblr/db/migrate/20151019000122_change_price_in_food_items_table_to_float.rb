class ChangePriceInFoodItemsTableToFloat < ActiveRecord::Migration
  def change
    change_column :food_items, :price, :float, default: 0
  end
end
