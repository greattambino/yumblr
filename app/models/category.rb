class Category < ActiveRecord::Base
  validates :name, presence: true, uniqueness: {case_sensitive: false}
  has_many :food_categories, dependent: :destroy
  has_many :food_items, through: :food_categories, source: :food_item
  before_save :capitalize_category

  def self.find_by_substring(str)
    Category.includes(:food_items).where("LOWER(name) LIKE '%#{str.downcase}%'")
  end

  def self.any_results?(str)
    FoodItem.joins(:categories).where("LOWER(categories.name) LIKE '%#{str.downcase}%'").any?
  end

  def self.find_by_category(str)
    FoodItem
      .joins(:categories)
      .includes(:restaurant)
      .where("LOWER(categories.name) LIKE '%#{str.downcase}%'")
      .distinct
  end

  def self.find_by_category_and_location(str, location, radius)
    radius = radius.to_f
    idx = -1
    FoodItem
      .joins(:categories)
      .includes(:restaurant)
      .where("LOWER(categories.name) LIKE '%#{str.downcase}%'")
      .distinct.select do |item|
        idx += 1
        item.restaurant.distance(location, idx) <= (radius)
    end
  end

  def self.find_by_category_and_cuisine(str, cuisine_id)
    Cuisine.find(cuisine_id).food_items
      .joins(:categories)
      .includes(:restaurant)
      .where("LOWER(categories.name) LIKE '%#{str.downcase}%'")
      .distinct
  end

  def self.find_by_all_params(str, cuisine_id, location, radius)
    radius = radius.to_f
    idx = -1
    Cuisine.find(cuisine_id).food_items
      .joins(:categories)
      .includes(:restaurant)
      .where("LOWER(categories.name) LIKE '%#{str.downcase}%'")
      .distinct.select do |item|
        idx += 1
        item.restaurant.distance(location, idx) <= (radius)
    end
  end


  private

  def capitalize_category
    self.name.capitalize!
  end
end
#
# categories = Category.includes(:food_items).where("LOWER(categories.name) LIKE '%#{str.downcase}%' AS food_name")
# categories.each do |category|
#   category.food_name
# end
# categories.pluck(:food_items)
#
# Category.where("LOWER(name) LIKE '%#{str.downcase}%'").pluck(:name)
#
# Category.includes(:food_items).find(120).food_items
