# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.find_or_create_by([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.find_or_create_by(name: 'Emanuel', city: cities.first)

# Restaurant.destroy_all
# Cuisine.destroy_all
# RestaurantCuisine.destroy_all
# FoodItem.destroy_all
# Category.destroy_all
# FoodCategory.destroy_all

# barbeque              = Category.find_or_create_by(name: 'Barbeque')
# bbq                   = Category.find_or_create_by(name: 'BBQ')
beef                  = Category.find_or_create_by(name: 'Beef')
# breakfast             = Category.find_or_create_by(name: 'Breakfast')
# burrito               = Category.find_or_create_by(name: 'Burrito')
# chicken_wings         = Category.find_or_create_by(name: 'Chicken Wings')
chicken               = Category.find_or_create_by(name: 'Chicken')
crab                  = Category.find_or_create_by(name: 'Crab')
# curry                 = Category.find_or_create_by(name: 'Curry')
# desert                = Category.find_or_create_by(name: 'Desert')
# duck                  = Category.find_or_create_by(name: 'Duck')
# fish                  = Category.find_or_create_by(name: 'Fish')
french_fries          = Category.find_or_create_by(name: 'French Fries')
# fruit                 = Category.find_or_create_by(name: 'Fruit')
# hamburger             = Category.find_or_create_by(name: 'Hamburger')
# hot_dog               = Category.find_or_create_by(name: 'Hot Dog')
macaroni_and_cheese   = Category.find_or_create_by(name: 'Macaroni and Cheese')
noodles               = Category.find_or_create_by(name: 'Noodles')
# pasta                 = Category.find_or_create_by(name: 'Pasta')
# pastries              = Category.find_or_create_by(name: 'Pastries')
# pie                   = Category.find_or_create_by(name: 'Pie')
# pork                  = Category.find_or_create_by(name: 'Pork')
salad                 = Category.find_or_create_by(name: 'Salad')
salmon                = Category.find_or_create_by(name: 'Salmon')
sandwich              = Category.find_or_create_by(name: 'Sandwich')
sashimi               = Category.find_or_create_by(name: 'Sashimi')
seafood               = Category.find_or_create_by(name: 'Seafood')
soup                  = Category.find_or_create_by(name: 'Soup')
steak                 = Category.find_or_create_by(name: 'Steak')
sushi                 = Category.find_or_create_by(name: 'Sushi')
# taco                  = Category.find_or_create_by(name: 'Taco')
vegetarian            = Category.find_or_create_by(name: 'Vegetarian')


c1 = Cuisine.find_or_create_by(cuisine: "American")
c2 = Cuisine.find_or_create_by(cuisine: "Japanese")
c3 = Cuisine.find_or_create_by(cuisine: "Seafood")
c4 = Cuisine.find_or_create_by(cuisine: "Asian Fusion")
c5 = Cuisine.find_or_create_by(cuisine: "Specialty Food")
c6 = Cuisine.find_or_create_by(cuisine: "Delis")
c7 = Cuisine.find_or_create_by(cuisine: "Cafes")
c8 = Cuisine.find_or_create_by(cuisine: "Sushi Bars")

r1 = Restaurant.find_or_create_by(name: "Blue Plate",
                  description: "New American Comfort.",
                  address: "3218 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.745215",
                  lng: "-122.420483",
                  phone_number: "(415) 282-6777",
                  url: "http://www.blueplatesf.com")

r2 = Restaurant.find_or_create_by(name: "Ramen Underground",
                  description: "Authentic Ramen with no MSG.",
                  address: "356 Kearny St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94108",
                  lat: "37.791355",
                  lng: "-122.404174",
                  phone_number: "(415) 999-2509",
                  url: "http://www.ramenunderground.com")

r3 = Restaurant.find_or_create_by(name: "Skool",
                  description: "Fresh, Sustainable Seafood with International Flair.",
                  address: "1725 Alameda St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.768521",
                  lng: "-122.402286",
                  phone_number: "(415) 255-8800",
                  url: "http://skoolsf.com")

r4 = Restaurant.find_or_create_by(name: "AG Ferrari Foods - SOMA",
                  description: "Italy Inspired Market Café.",
                  address: "688 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94105",
                  lat: "37.786617",
                  lng: "-122.401855",
                  phone_number: "(415) 344-0644",
                  url: "http://www.agferrari.com/")

r5 = Restaurant.find_or_create_by(name: "Live Sushi Bistro",
                  description: "The Sushi is Alive.",
                  address: "1 Gilbert St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.774651",
                  lng: "-122.403977",
                  phone_number: "(415) 558-8778",
                  url: "http://www.livesushibistro.com/")

r6 = Restaurant.find_or_create_by(name: "Boxed Foods Company",
                  description: "Fast, Fresh, and Tasty Sandwiches & Salads.",
                  address: "245 Kearny St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94108",
                  lat: "37.790441",
                  lng: "-122.404192",
                  phone_number: "(415) 981-9376",
                  url: "http://www.boxedfoodscompany.com")


#----Blue Plate---------------------

f1 = FoodItem.find_or_create_by(
        name: "Meatloaf",
        price: 19.57,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445039229/Blue%20Plate/Unknown-2.jpg",
        restaurant_id: r1.id)

f2 = FoodItem.find_or_create_by(
        name: "Toasted Farro & Slow Egg",
        price: 12.36,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445039229/Blue%20Plate/Unknown.jpg",
        restaurant_id: r1.id)

f3 = FoodItem.find_or_create_by(
        name: "Macaroni and Cheese",
        price: 9.27,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445039230/Blue%20Plate/Unknown-1.jpg",
        restaurant_id: r1.id)

f4 = FoodItem.find_or_create_by(
        name: "Smoked Trout Deviled Eggs",
        price: 7.21,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446139883/Blue%20Plate/1370.jpg",
        restaurant_id: r1.id)

f5 = FoodItem.find_or_create_by(
        name: "Brandade Gnocchi",
        price: 13.39,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446140096/Blue%20Plate/40004.jpg",
        restaurant_id: r1.id)

f6 = FoodItem.find_or_create_by(
        name: "Fried Chicken",
        price: 25.75,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446140235/Blue%20Plate/1383.jpg",
        restaurant_id: r1.id)


#----Ramen Underground---------------------

f7 = FoodItem.find_or_create_by(
        name: "Spicy Miso Ramen",
        price: 11.15,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360790/Ramen%20Underground/3473.jpg",
        restaurant_id: r2.id)

f8 = FoodItem.find_or_create_by(
        name: "Tonkotsu Ramen",
        price: 12.15,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360790/Ramen%20Underground/3474.jpg",
        restaurant_id: r2.id)

f9 = FoodItem.find_or_create_by(
        name: "Cold Ramen",
        price: 12.15,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360790/Ramen%20Underground/3475.jpg",
        restaurant_id: r2.id)


#----Skool---------------------

f10 = FoodItem.find_or_create_by(
        name: "Steak and Frites (Lunch)",
        price: 18.75,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445039500/Skool/Unknown.jpg",
        restaurant_id: r3.id)


#----AG Ferrari Foods - SOMA---------------------

f11 = FoodItem.find_or_create_by(
        name: "Prosciutto & Burrata Sandwich",
        price: 13.98,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445359772/AG%20Ferrari%20Foods%20-%20SOMA/49000-201504230134.jpg",
        restaurant_id: r4.id)

f12 = FoodItem.find_or_create_by(
        name: "Caprese Sandwich",
        price: 10.99,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445359772/AG%20Ferrari%20Foods%20-%20SOMA/49001-201504230134.jpg",
        restaurant_id: r4.id)

f13 = FoodItem.find_or_create_by(
        name: "Caesar Salad",
        price: 7.99,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445359772/AG%20Ferrari%20Foods%20-%20SOMA/49029-201504230134.jpg",
        restaurant_id: r4.id)

f14 = FoodItem.find_or_create_by(
        name: "Grilled Chicken, Pear, and Walnut Salad",
        price: 9.99,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446141495/AG%20Ferrari%20Foods%20-%20SOMA/49023-201504230134.jpg",
        restaurant_id: r4.id)

f15 = FoodItem.find_or_create_by(
        name: "Combo Italiano",
        price: 13.99,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446141641/AG%20Ferrari%20Foods%20-%20SOMA/49008-201504230134.jpg",
        restaurant_id: r4.id)

f16 = FoodItem.find_or_create_by(
        name: "Grilled Chicken and Pancetta Sandwich",
        price: 12.99,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446141789/AG%20Ferrari%20Foods%20-%20SOMA/49015-201504230134.jpg",
        restaurant_id: r4.id)

f17 = FoodItem.find_or_create_by(
        name: "Tuna and Olive Sandwich",
        price: 12.99,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446141903/AG%20Ferrari%20Foods%20-%20SOMA/49011-201504230136.jpg",
        restaurant_id: r4.id)


#----Live Sushi Bistro---------------------

f18 = FoodItem.find_or_create_by(
        name: "Crab Napoleon",
        price: 16.90,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360422/Live%20Sushi%20Bistro/68722-201508120013.jpg",
        restaurant_id: r5.id)

f19 = FoodItem.find_or_create_by(
        name: "Hamachi Tartare",
        price: 16.90,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360422/Live%20Sushi%20Bistro/68719-201508120013.jpg",
        restaurant_id: r5.id)

f20 = FoodItem.find_or_create_by(
        name: "Hamachi Passion",
        price: 14.80,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360422/Live%20Sushi%20Bistro/68720-201508120013.jpg",
        restaurant_id: r5.id)

f21 = FoodItem.find_or_create_by(
        name: "Udon, Soba, and Ramen (Lunch)",
        price: 10.60,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1445360422/Live%20Sushi%20Bistro/68574-201508120013.jpg",
        restaurant_id: r5.id)


#----Boxed Foods Company---------------------

f22 = FoodItem.find_or_create_by(
        name: "Pear and Brie Press",
        price: 12.00,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446186824/Boxed%20Foods%20Company/67844-201508130350.jpg",
        restaurant_id: r6.id)

f23 = FoodItem.find_or_create_by(
        name: "B.L.T.A.",
        price: 12.00,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446186828/Boxed%20Foods%20Company/67849-201508130350.jpg",
        restaurant_id: r6.id)

f24 = FoodItem.find_or_create_by(
        name: "Roasted Veggie Salad",
        price: 12.00,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446186845/Boxed%20Foods%20Company/67854-201508130350.jpg",
        restaurant_id: r6.id)

f25 = FoodItem.find_or_create_by(
        name: "Baked Tofu and Noodle Salad",
        price: 12.00,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1446186848/Boxed%20Foods%20Company/67858-201508130350.jpg",
        restaurant_id: r6.id)




restaurantcuisines = [
  {restaurant_id: r1.id, cuisine_id: c1.id},
  {restaurant_id: r2.id, cuisine_id: c2.id},
  {restaurant_id: r3.id, cuisine_id: c2.id},
  {restaurant_id: r3.id, cuisine_id: c3.id},
  {restaurant_id: r3.id, cuisine_id: c4.id},
  {restaurant_id: r4.id, cuisine_id: c5.id},
  {restaurant_id: r4.id, cuisine_id: c6.id},
  {restaurant_id: r4.id, cuisine_id: c7.id},
  {restaurant_id: r5.id, cuisine_id: c2.id},
  {restaurant_id: r5.id, cuisine_id: c8.id},
  {restaurant_id: r6.id, cuisine_id: c1.id},
  {restaurant_id: r6.id, cuisine_id: c6.id},
  {restaurant_id: r6.id, cuisine_id: c7.id}
]

foodcategories.each do |rc|
  RestaurantCuisine.find_or_create_by(rc)
end




foodcategories = [
  {food_item_id: f1.id, category_id: beef.id},
  {food_item_id: f3.id, category_id: macaroni_and_cheese.id},
  {food_item_id: f6.id, category_id: chicken.id},
  {food_item_id: f7.id, category_id: noodles.id},
  {food_item_id: f7.id, category_id: soup.id},
  {food_item_id: f8.id, category_id: noodles.id},
  {food_item_id: f8.id, category_id: soup.id},
  {food_item_id: f9.id, category_id: noodles.id},
  {food_item_id: f9.id, category_id: soup.id},
  {food_item_id: f10.id, category_id: beef.id},
  {food_item_id: f10.id, category_id: french_fries.id},
  {food_item_id: f10.id, category_id: steak.id},
  {food_item_id: f11.id, category_id: sandwich.id},
  {food_item_id: f12.id, category_id: sandwich.id},
  {food_item_id: f13.id, category_id: salad.id},
  {food_item_id: f14.id, category_id: chicken.id},
  {food_item_id: f14.id, category_id: salad.id},
  {food_item_id: f15.id, category_id: sandwich.id},
  {food_item_id: f16.id, category_id: chicken.id},
  {food_item_id: f16.id, category_id: sandwich.id},
  {food_item_id: f17.id, category_id: sandwich.id},
  {food_item_id: f18.id, category_id: crab.id},
  {food_item_id: f18.id, category_id: salmon.id},
  {food_item_id: f18.id, category_id: seafood.id},
  {food_item_id: f18.id, category_id: sushi.id},
  {food_item_id: f19.id, category_id: sashimi.id},
  {food_item_id: f19.id, category_id: seafood.id},
  {food_item_id: f20.id, category_id: sashimi.id},
  {food_item_id: f20.id, category_id: seafood.id},
  {food_item_id: f21.id, category_id: noodles.id},
  {food_item_id: f21.id, category_id: soup.id},
  {food_item_id: f22.id, category_id: sandwich.id},
  {food_item_id: f22.id, category_id: vegetarian.id},
  {food_item_id: f23.id, category_id: sandwich.id},
  {food_item_id: f24.id, category_id: salad.id},
  {food_item_id: f24.id, category_id: vegetarian.id},
  {food_item_id: f25.id, category_id: salad.id},
  {food_item_id: f25.id, category_id: vegetarian.id}
]

foodcategories.each do |fc|
  FoodCategory.find_or_create_by(fc)
end
