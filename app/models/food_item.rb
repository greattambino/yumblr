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
    FoodItem.includes(:restaurant).where("LOWER(name) LIKE '%#{str.downcase}%'")
  end

  def self.find_by_substring_and_location(str, location, radius)
    radius = radius.to_f
    idx = -1
    FoodItem.includes(:restaurant).where("LOWER(name) LIKE '%#{str.downcase}%'").select do |item|
      idx += 1
      item.restaurant.distance(location, idx) <= (radius)
    end
  end

  def self.find_by_substring_and_cuisine(str, cuisine_id)
    Cuisine.find(cuisine_id).food_items.where("LOWER(food_items.name) LIKE '%#{str.downcase}%'")
  end

  def self.find_by_all_params(str, cuisine_id, location, radius)
    radius = radius.to_f
    # restaurants = []
    idx = -1
    Cuisine.find(cuisine_id).food_items.includes(:restaurant).where("LOWER(food_items.name) LIKE '%#{str.downcase}%'").select do |item|
      idx += 1
      item.restaurant.distance(location, idx) <= (radius)
    end
    # food_items = Cuisine.find(cuisine_id).food_items.includes(:restaurant).where("LOWER(food_items.name) LIKE '%#{str.downcase}%'").select do |item, idx|
    #   sleep(1) if idx % 10 == 0
    #   item.restaurant.distance(location) <= (radius)
    # end
  end
end
