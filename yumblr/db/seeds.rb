# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)

Cuisine.destroy_all
Restaurant.destroy_all
FoodItem.destroy_all
RestaurantCuisine.destroy_all

c1 = Cuisine.create!(cuisine: "American")
c2 = Cuisine.create!(cuisine: "Japanese")
c3 = Cuisine.create!(cuisine: "Seafood")
c4 = Cuisine.create!(cuisine: "Asian Fusion")


r1 = Restaurant.create!(name: "Blue Plate",
                  description: "New American Comfort",
                  address: "3218 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  phone_number: "(415) 282-6777",
                  url: "http://www.blueplatesf.com")

r2 = Restaurant.create!(name: "Ramen Underground",
                  description: "Authentic Ramen with no MSG",
                  address: "22 Peace Plz Ste 530",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94115",
                  phone_number: "(415) 999-2509",
                  url: "http://www.ramenunderground.com")

r3 = Restaurant.create!(name: "Skool",
                  description: "Fresh, Sustainable Seafood with International Flair",
                  address: "1725 Alameda St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  phone_number: "(415) 255-8800",
                  url: "http://skoolsf.com")

f1 = FoodItem.create!(name: "Meatloaf",
                price: 19.57,
                image_url: "/assets/images/blue-plate-meatloaf.jpeg",
                restaurant_id: r1.id)

rc1 = RestaurantCuisine.create!(restaurant_id: r1.id,
                                cuisine_id:    c1.id)

rc2 = RestaurantCuisine.create!(restaurant_id: r2.id,
                                cuisine_id:    c2.id)

rc3 = RestaurantCuisine.create!(restaurant_id: r3.id,
                                cuisine_id:    c2.id)

rc4 = RestaurantCuisine.create!(restaurant_id: r3.id,
                                cuisine_id:    c3.id)

rc5 = RestaurantCuisine.create!(restaurant_id: r3.id,
                                cuisine_id:    c4.id)
