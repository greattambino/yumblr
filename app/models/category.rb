class Category < ActiveRecord::Base
  validates :name, presence: true, uniqueness: {case_sensitive: false}

  before_save :capitalize_category

  has_many :food_categories, dependent: :destroy
  has_many :food_items, through: :food_categories, source: :food_item

  private

  def capitalize_category
    self.name.capitalize!
  end
end
