# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Cuisine.create(id: 1, cuisine: "American")
Cuisine.create(id: 2, cuisine: "Japanese")
Cuisine.create(id: 3, cuisine: "Seafood")
Cuisine.create(id: 4, cuisine: "Asian Fusion")

Restaurant.create(id: 1,
                  name: "Blue Plate",
                  description: "New American Comfort",
                  address: "3218 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  phone_number: "(415) 282-6777",
                  url: "http://www.blueplatesf.com")

Restaurant.create(id: 2,
                  name: "Ramen Underground",
                  description: "Authentic Ramen with no MSG",
                  address: "22 Peace Plz Ste 530",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94115",
                  phone_number: "(415) 999-2509",
                  url: "http://www.ramenunderground.com")

Restaurant.create(id: 3,
                  name: "Skool",
                  description: "Fresh, Sustainable Seafood with International Flair",
                  address: "1725 Alameda St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  phone_number: "(415) 255-8800",
                  url: "http://skoolsf.com")

# FoodItem.create(id: 1,
#                 name: "Meatloaf",
#                 price: 19.57,
#                 restaurant_id: 1)
