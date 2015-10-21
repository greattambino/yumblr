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
c5 = Cuisine.create!(cuisine: "Specialty Food")
c6 = Cuisine.create!(cuisine: "Delis")
c7 = Cuisine.create!(cuisine: "Cafes")
c8 = Cuisine.create!(cuisine: "Sushi Bars")

r1 = Restaurant.create!(name: "Blue Plate",
                  description: "New American Comfort.",
                  address: "3218 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.745215",
                  lng: "-122.420483",
                  phone_number: "(415) 282-6777",
                  url: "http://www.blueplatesf.com")

r2 = Restaurant.create!(name: "Ramen Underground",
                  description: "Authentic Ramen with no MSG.",
                  address: "356 Kearny St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94108",
                  lat: "37.791355",
                  lng: "-122.404174",
                  phone_number: "(415) 999-2509",
                  url: "http://www.ramenunderground.com")

r3 = Restaurant.create!(name: "Skool",
                  description: "Fresh, Sustainable Seafood with International Flair.",
                  address: "1725 Alameda St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.768521",
                  lng: "-122.402286",
                  phone_number: "(415) 255-8800",
                  url: "http://skoolsf.com")

r4 = Restaurant.create!(name: "AG Ferrari Foods - SOMA",
                  description: "Italy Inspired Market Café.",
                  address: "688 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94105",
                  lat: "37.786617",
                  lng: "-122.401855",
                  phone_number: "(415) 344-0644",
                  url: "http://www.agferrari.com/")

r5 = Restaurant.create!(name: "Live Sushi Bistro",
                  description: "The Sushi is Alive.",
                  address: "1 Gilbert St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.774651",
                  lng: "-122.403977",
                  phone_number: "(415) 558-8778",
                  url: "http://www.livesushibistro.com/")

f1 = FoodItem.create!(name: "Meatloaf",
                price: 19.57,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445039229/Blue%20Plate/Unknown-2.jpg",
                restaurant_id: r1.id)

f2 = FoodItem.create!(name: "Toasted Farro & Slow Egg",
                price: 12.36,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445039229/Blue%20Plate/Unknown.jpg",
                restaurant_id: r1.id)

f3 = FoodItem.create!(name: "Macaroni and Cheese",
                price: 9.27,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445039230/Blue%20Plate/Unknown-1.jpg",
                restaurant_id: r1.id)

f4 = FoodItem.create!(name: "Steak and Frites (Lunch)",
                price: 18.75,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445039500/Skool/Unknown.jpg",
                restaurant_id: r3.id)

f5 = FoodItem.create!(name: "Prosciutto & Burrata Sandwich",
                price: 13.99,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445359772/AG%20Ferrari%20Foods%20-%20SOMA/49000-201504230134.jpg",
                restaurant_id: r4.id)

f6 = FoodItem.create!(name: "Caprese Sandwich",
                price: 10.99,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445359772/AG%20Ferrari%20Foods%20-%20SOMA/49001-201504230134.jpg",
                restaurant_id: r4.id)

f7 = FoodItem.create!(name: "Caesar Salad",
                price: 7.99,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445359772/AG%20Ferrari%20Foods%20-%20SOMA/49029-201504230134.jpg",
                restaurant_id: r4.id)

f8 = FoodItem.create!(name: "Crab Napoleon",
                price: 16.90,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360422/Live%20Sushi%20Bistro/68722-201508120013.jpg",
                restaurant_id: r5.id)

f9 = FoodItem.create!(name: "Hamachi Tartare",
                price: 16.90,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360422/Live%20Sushi%20Bistro/68719-201508120013.jpg",
                restaurant_id: r5.id)

f10 = FoodItem.create!(name: "Hamachi Passion",
                price: 14.80,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360422/Live%20Sushi%20Bistro/68720-201508120013.jpg",
                restaurant_id: r5.id)

f11 = FoodItem.create!(name: "Udon, Soba, and Ramen (Lunch)",
                price: 10.60,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360422/Live%20Sushi%20Bistro/68574-201508120013.jpg",
                restaurant_id: r5.id)

f12 = FoodItem.create!(name: "Spicy Miso Ramen",
                price: 11.15,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360790/Ramen%20Underground/3473.jpg",
                restaurant_id: r2.id)

f13 = FoodItem.create!(name: "Tonkotsu Ramen",
                price: 12.15,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360790/Ramen%20Underground/3474.jpg",
                restaurant_id: r2.id)

f14 = FoodItem.create!(name: "Cold Ramen",
                price: 12.15,
                image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360790/Ramen%20Underground/3475.jpg",
                restaurant_id: r2.id)

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

rc6 = RestaurantCuisine.create!(restaurant_id: r4.id,
                                cuisine_id:    c5.id)

rc7 = RestaurantCuisine.create!(restaurant_id: r4.id,
                                cuisine_id:    c6.id)

rc8 = RestaurantCuisine.create!(restaurant_id: r4.id,
                                cuisine_id:    c7.id)

rc9 = RestaurantCuisine.create!(restaurant_id: r5.id,
                                cuisine_id:    c2.id)

rc10 = RestaurantCuisine.create!(restaurant_id: r5.id,
                                cuisine_id:    c8.id)
