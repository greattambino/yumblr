class FoodCategory < ActiveRecord::Base
  validates :category_id, :food_item_id, presence: true
  validates :category_id, uniqueness: {scope: :food_item_id}

  belongs_to :category
  belongs_to :food_item
end
