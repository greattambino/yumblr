# == Schema Information
#
# Table name: food_items
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  price         :integer          not null
#  image_url     :string           not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class FoodItem < ActiveRecord::Base
  validates :name, :price, :image_url, presence: true

  belongs_to :restaurant
  has_many :cuisines, through: :restaurant, source: :cuisines

  def self.find_by_substring(str)
    FoodItem.where("LOWER(name) LIKE '%#{str.downcase}%'")
  end

  def self.find_by_substring_and_cuisine(str, cuisine_id)
    Cuisine.find(cuisine_id).food_items.where("LOWER(food_items.name) LIKE '%#{str.downcase}%'")
  end
end
