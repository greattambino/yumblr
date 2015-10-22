# == Schema Information
#
# Table name: restaurants
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :string
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip_code     :string           not null
#  phone_number :string
#  url          :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Restaurant < ActiveRecord::Base
  validates :name, :address, :city, :state, :zip_code, presence: true
  validates :address, uniqueness: {scope: [:city, :state, :zip_code]}
  validates :state, length: {is: 2}
  validates :zip_code, length: {is: 5}

  has_many :food_items
  has_many :restaurant_cuisines, dependent: :destroy
  has_many :cuisines, through: :restaurant_cuisines, source: :cuisine

  def distance(location, idx)
    sleep(1) if idx % 10 == 0
    # self.address
    # restaurant_address = Restaurant.find(restaurant_id).address
    Geokit::Geocoders::GoogleGeocoder.api_key = 'AIzaSyBi2gBEKxx4HFVS8X9dB7tYOAGjmKEMIa0'
    restaurant = Geokit::Geocoders::GoogleGeocoder.geocode(self.address)
    user = Geokit::Geocoders::GoogleGeocoder.geocode (location[:address])
    return restaurant.distance_to(user)
  end
end
