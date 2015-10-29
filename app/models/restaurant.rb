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

    # 'Haversine' formula to calculate distance between 2 points since Geokit was too slow

    # a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)    // φ is latitude
    # c = 2 ⋅ atan2( √a, √(1−a) )                      // λ is longitude
    # d = R ⋅ c                                        // R is earth’s radius ~6,371km


    user_lat       = location[:lat].to_f
    user_lng       = location[:lng].to_f
    restaurant_lat = self.lat
    restaurant_lng = self.lng

    return haversine(user_lat, user_lng, restaurant_lat, restaurant_lng)
  end

  def haversine(lat1, lng1, lat2, lng2)
    degrees_to_radians = Math::PI/180
    earths_radius = 3958.756  #in miles

    # convert lat/lng degrees to radians
    rlat1  = lat1 * degrees_to_radians
    rlng1  = lng1 * degrees_to_radians
    rlat2  = lat2 * degrees_to_radians
    rlng2  = lng2 * degrees_to_radians

    #calculate distance btw lat/lng points
    lng_distance = rlng1 - rlng2
    lat_distance = rlat1 - rlat2

    a = (Math::sin(lat_distance/2) ** 2) +
        Math::cos(rlat1) * Math::cos(rlat2) *
        (Math::sin(lng_distance/2) ** 2)
    c = 2 * Math::atan2(Math::sqrt(a), Math::sqrt(1-a))
    distance = earths_radius * c

    return distance
  end
end
