# == Schema Information
#
# Table name: restaurant_cuisines
#
#  id            :integer          not null, primary key
#  cuisine_id    :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantCuisine < ActiveRecord::Base
  validates :cuisine_id, :restaurant_id, presence: true
  validates :cuisine_id, uniqueness: {scope: :restaurant_id}

  belongs_to :cuisine
  belongs_to :restaurant
end
