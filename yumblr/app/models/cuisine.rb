# == Schema Information
#
# Table name: cuisines
#
#  id         :integer          not null, primary key
#  cuisine    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ActiveRecord::Base
  validates :cuisine, presence: true, uniqueness: {case_sensitive: false}

  before_save :capitalize_cuisine

  has_many :restaurant_cuisines, dependent: :destroy
  has_many :restaurants, through: :restaurant_cuisines, source: :restaurant

  private

  def capitalize_cuisine
    self.cuisine.capitalize!
  end
end
