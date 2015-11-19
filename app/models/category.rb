class Category < ActiveRecord::Base
  validates :name, presence: true, uniqueness: {case_sensitive: false}
  has_many :food_categories, dependent: :destroy
  has_many :food_items, through: :food_categories, source: :food_item
  before_save :capitalize_category

  def self.find_by_substring(str)
    Category.where("LOWER(name) LIKE '%#{str.downcase}%'")
  end

  private

  def capitalize_category
    self.name.capitalize!
  end
end
