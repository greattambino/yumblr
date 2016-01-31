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

FoodItem.find(11).delete!

# barbeque              = Category.find_or_create_by(name: 'Barbeque')
# bbq                   = Category.find_or_create_by(name: 'BBQ')
beef                  = Category.find_or_create_by(name: 'Beef')
breakfast             = Category.find_or_create_by(name: 'Breakfast')
# burrito               = Category.find_or_create_by(name: 'Burrito')
cheese                = Category.find_or_create_by(name: 'Cheese')
# chicken_wings         = Category.find_or_create_by(name: 'Chicken wings')
chicken               = Category.find_or_create_by(name: 'Chicken')
crab                  = Category.find_or_create_by(name: 'Crab')
curry                 = Category.find_or_create_by(name: 'Curry')
# desert                = Category.find_or_create_by(name: 'Desert')
# duck                  = Category.find_or_create_by(name: 'Duck')
fish                  = Category.find_or_create_by(name: 'Fish')
french_fries          = Category.find_or_create_by(name: 'French fries')
# fruit                 = Category.find_or_create_by(name: 'Fruit')
hamburger             = Category.find_or_create_by(name: 'Hamburger')
# hot_dog               = Category.find_or_create_by(name: 'Hot dog')
macaroni_and_cheese   = Category.find_or_create_by(name: 'Macaroni and cheese')
noodles               = Category.find_or_create_by(name: 'Noodles')
pasta                 = Category.find_or_create_by(name: 'Pasta')
# pastries              = Category.find_or_create_by(name: 'Pastries')
# pie                   = Category.find_or_create_by(name: 'Pie')
pork                  = Category.find_or_create_by(name: 'Pork')
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

r1 = Restaurant.where(phone_number: "(415) 282-6777").first_or_create do |r|
       r.name = "Blue Plate"
       r.description = "New American Comfort"
       r.address = "3218 Mission St"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94110"
       r.lat = 37.745215
       r.lng = -122.420483
       r.url = "http://www.blueplatesf.com"
     end

r2 = Restaurant.where(phone_number: "(415) 999-2509").first_or_create do |r|
       r.name = "Ramen Underground"
       r.description = "Authentic Ramen with no MSG"
       r.address = "356 Kearny St"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94108"
       r.lat = 37.791355
       r.lng = -122.404174
       r.url = "http://www.ramenunderground.com"
     end

r3 = Restaurant.where(phone_number: "(415) 255-8800").first_or_create do |r|
       r.name = "Skool"
       r.description = "Fresh, Sustainable Seafood with International Flair"
       r.address = "1725 Alameda St"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94103"
       r.lat = 37.768521
       r.lng = -122.402286
       r.url = "http://skoolsf.com"
     end

r4 = Restaurant.where(phone_number: "(415) 344-0644").first_or_create do |r|
       r.name = "AG Ferrari Foods - SOMA"
       r.description = "Italy Inspired Market Café"
       r.address = "688 Mission St"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94105"
       r.lat = 37.786617
       r.lng = -122.401855
       r.url = "http://www.agferrari.com/"
     end

r5 = Restaurant.where(phone_number: "(415) 558-8778").first_or_create do |r|
       r.name = "Live Sushi Bistro"
       r.description = "The Sushi is Alive"
       r.address = "1 Gilbert St"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94103"
       r.lat = 37.774651
       r.lng = -122.403977
       r.url = "http://www.livesushibistro.com/"
     end

r6 = Restaurant.where(phone_number: "(415) 981-9376").first_or_create do |r|
       r.name = "Boxed Foods Company"
       r.description = "Fast, Fresh, and Tasty Sandwiches & Salads"
       r.address = "245 Kearny St"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94108"
       r.lat = 37.790441
       r.lng = -122.404192
       r.url = "http://www.boxedfoodscompany.com"
     end
########
r7 = Restaurant.where(phone_number: "(415) 243-0107").first_or_create do |r|
       r.name = "The American Grilled Cheese Kitchen"
       r.description = "Gourmet Comfort"
       r.address = "1 South Park St, Apt 103A"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94107"
       r.lat = 37.782056
       r.lng = -122.392854
       r.url = "http://theamericansf.com"
     end

r8 = Restaurant.where(phone_number: "(415) 379-4505").first_or_create do |r|
       r.name = "Baan Restaurant & Wine Bar"
       r.description = "Thai Kitchen with a Californian Twist"
       r.address = "534 Irving St"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94122"
       r.lat = 37.764342
       r.lng = -122.463716
       r.url = "http://baanthaisf.com"
     end

r9 = Restaurant.where(phone_number: "(415) 648-9199").first_or_create do |r|
       r.name = "Balompie Cafe"
       r.description = "Authentic Salvadoran Food"
       r.address = "3349 18th St"
       r.city = "San Francisco"
       r.state = "CA"
       r.zip_code = "94110"
       r.lat = 37.761812
       r.lng = -122.41816
     end

r10 = Restaurant.where(phone_number: "(415) 955-1919").first_or_create do |r|
        r.name = "Barbacco"
        r.description = "Modern Trattoria"
        r.address = "220 California St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94111"
        r.lat = 37.793682
        r.lng = -122.399179
        r.url = "http://barbaccosf.com"
      end

r11 = Restaurant.where(phone_number: "(415) 550-2388").first_or_create do |r|
        r.name = "Basa Seafood Express"
        r.description = "Best Salmon Burger in Town"
        r.address = "3064 24th St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.752692
        r.lng = -122.413395
        r.url = "http://basaseafood.com"
      end

r12 = Restaurant.where(phone_number: "(415) 576-1966").first_or_create do |r|
        r.name = "Beanstalk Cafe"
        r.description = "Minimalist Cafe Serving Focused Meals"
        r.address = "724 Bush St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94108"
        r.lat = 37.790279
        r.lng = -122.409319
      end

r13 = Restaurant.where(phone_number: "(415) 513-1331").first_or_create do |r|
        r.name = "Big Chef Tom's Belly Burgers"
        r.description = "Fast, Fresh, and Tasty Sandwiches & Salads"
        r.address = "1550 Howard St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94103"
        r.lat = 37.772511
        r.lng = -122.416605
        r.url = "http://www.bctbellyburgers.com"
      end

r14 = Restaurant.where(phone_number: "(415) 931-9663").first_or_create do |r|
        r.name = "Blackwood"
        r.description = "American Thai Fusion"
        r.address = "2150 Chestnut St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94123"
        r.lat = 37.800768
        r.lng = -122.438953
        r.url = "http://blackwoodsf.com"
      end

r15 = Restaurant.where(phone_number: "(415) 982-2622").first_or_create do |r|
        r.name = "Bocadillos"
        r.description = "San Francisco meets San Sebastian - Tapas"
        r.address = "710 Montgomery St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94111"
        r.lat = 37.795955
        r.lng = -122.403246
        r.url = "http://bocasf.com"
      end

r16 = Restaurant.where(phone_number: "(415) 345-8100").first_or_create do |r|
        r.name = "Brenda's French Soul Food"
        r.description = "Kickin' It Creole"
        r.address = "652 Polk St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94102"
        r.lat = 37.782912
        r.lng = -122.419015
        r.url = "http://frenchsoulfood.com"
      end

r17 = Restaurant.where(phone_number: "(415) 926-8657").first_or_create do |r|
        r.name = "Brenda's Meat and Three"
        r.description = "Country Cooking Brenda's Style"
        r.address = "919 Divisadero St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94115"
        r.lat = 37.778173
        r.lng = -122.438702
        r.url = "http://brendasmeatandthree.com"
      end

r18 = Restaurant.where(phone_number: "(415) 642-4822").first_or_create do |r|
        r.name = "Caffe Fiore"
        r.description = "Exquisite Italian"
        r.address = "3599 24th St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.751871
        r.lng = -122.422663
        r.url = "http://caffefioresf.com"
      end

r19 = Restaurant.where(phone_number: "(415) 742-4931").first_or_create do |r|
        r.name = "Calibur"
        r.description = "Like Burgers...... Love Calibur!"
        r.address = "68 W Portal Ave"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94127"
        r.lat = 37.740173
        r.lng = -122.466823
        r.url = "http://calibursf.com"
      end

r20 = Restaurant.where(phone_number: "(415) 986-8998").first_or_create do |r|
        r.name = "Capo's"
        r.description = "Chicago Pizza & Fine Italian Dinners"
        r.address = "641 Vallejo St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94123"
        r.lat = 37.798516
        r.lng = -122.408415
        r.url = "http://sfcapos.com"
      end

r21 = Restaurant.where(phone_number: "(415) 447-6081").first_or_create do |r|
        r.name = "Causwells"
        r.description = "An American Bistro"
        r.address = "2346 Chestnut St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94123"
        r.lat = 37.800250
        r.lng = -122.441998
        r.url = "http://causwells.com"
      end

r22 = Restaurant.where(phone_number: "(415) 614-9411").first_or_create do |r|
        r.name = "Chile Pies Baking Co."
        r.description = "Sweet & Savory Pies, Stews, and Salads"
        r.address = "601 Baker St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94117"
        r.lat = 37.776582
        r.lng = -122.441766
        r.url = "http://greenchilekitchen.com"
      end

r23 = Restaurant.where(phone_number: "(415) 552-2469").first_or_create do |r|
        r.name = "Chow"
        r.description = "Here to Feed You"
        r.address = "215 Church St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94114"
        r.lat = 37.767197
        r.lng = -122.428593
        r.url = "http://chowfoodbar.com"
      end

r24 = Restaurant.where(phone_number: "(415) 655-3335").first_or_create do |r|
        r.name = "Chubby Noodle - Marina"
        r.description = "Happy Inside"
        r.address = "2205 Lombard St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94123"
        r.lat = 37.799420
        r.lng = -122.437986
        r.url = "http://chubbynoodle.com"
      end

r25 = Restaurant.where(phone_number: "(415) 751-9690").first_or_create do |r|
        r.name = "Cinderella Bakery and Cafe"
        r.description = "Authentic Russian"
        r.address = "436 Balboa St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94118"
        r.lat = 37.777400
        r.lng = -122.463638
        r.url = "http://cinderellabakery.com"
      end

r26 = Restaurant.where(phone_number: "(415) 829-7449").first_or_create do |r|
        r.name = "CookieLove"
        r.description = "Flour - Sugar - Soul"
        r.address = "1488 Pine St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94109"
        r.lat = 37.789807
        r.lng = -122.420162
        r.url = "http://cookielovesf.com"
      end

r27 = Restaurant.where(phone_number: "(415) 913-7713").first_or_create do |r|
        r.name = "Craftsman & Wolves"
        r.description = "A Contemporary Patisserie"
        r.address = "746 Valencia St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.760932
        r.lng = -122.421772
        r.url = "http://craftsman-wolves.com"
      end

r28 = Restaurant.where(phone_number: "(415) 795-1331").first_or_create do |r|
        r.name = "Crepe Cone"
        r.description = "Sophie's Crepes Little Sister"
        r.address = "684 King St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94107"
        r.lat = 37.770208
        r.lng = -122.402230
        r.url = "http://crepe-cone.com"
      end

r29 = Restaurant.where(phone_number: "(415) 508-6756").first_or_create do |r|
        r.name = "Crepe La Vie"
        r.description = "Traditional French Crepes Made Gluten Free"
        r.address = "1727 Haight St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94117"
        r.lat = 37.769288
        r.lng = -122.451211
        r.url = "http://crepelavie.com"
      end

r30 = Restaurant.where(phone_number: "(415) 735-3667").first_or_create do |r|
        r.name = "Curry Up Now SF"
        r.description = "Indian Street Food"
        r.address = "225 Bush St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94104"
        r.lat = 37.790841
        r.lng = -122.401280
        r.url = "http://curryupnow.com"
      end

r31 = Restaurant.where(phone_number: "(415) 885-6830").first_or_create do |r|
        r.name = "Cybelle's Pizza & Ice Cream"
        r.description = "New York Style, Homemade Gourmet Pizza"
        r.address = "1000 Bush St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94109"
        r.lat = 37.789682
        r.lng = -122.414021
        r.url = "http://yourcybellespizza.com"
      end

r32 = Restaurant.where(phone_number: "(415) 552-4055").first_or_create do |r|
        r.name = "Delfina"
        r.description = "Bustling Neighborhood Trattoria"
        r.address = "3621 18th St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.761357
        r.lng = -122.424377
        r.url = "http://delfinasf.com/restaurant"
      end

r33 = Restaurant.where(phone_number: "(415) 834-0344").first_or_create do |r|
        r.name = "Delica"
        r.description = "Bento Up Your Life"
        r.address = "1 Ferry Bldg, Shop 45"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94111"
        r.lat = 37.795792
        r.lng = -122.393393
        r.url = "http://delicasf.com"
      end

r34 = Restaurant.where(phone_number: "(415) 552-4451").first_or_create do |r|
        r.name = "Destino"
        r.description = "Latin American Small Plates"
        r.address = "1815 Market St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94103"
        r.lat = 37.771255
        r.lng = -122.423776
        r.url = "http://destinosf.com"
      end

r35 = Restaurant.where(phone_number: "(415) 649-6191").first_or_create do |r|
        r.name = "Doc Ricketts"
        r.description = "Creative, Refined and Approachable Northern California Cuisine"
        r.address = "124 Columbus Ave"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94133"
        r.lat = 37.796786
        r.lng = -122.404800
        r.url = "http://docrickettssf.com"
      end

r36 = Restaurant.where(phone_number: "(415) 395-0939").first_or_create do |r|
        r.name = "Don Pistos"
        r.description = "Amazing!"
        r.address = "510 Union St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94133"
        r.lat = 37.800732
        r.lng = -122.407929
        r.url = "http://donpistos.com"
      end

r37 = Restaurant.where(phone_number: "(415) 441-3672").first_or_create do |r|
        r.name = "DOSA on Fillmore"
        r.description = "South Indian Cuisine"
        r.address = "1700 Fillmore St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94115"
        r.lat = 37.785370
        r.lng = -122.432850
        r.url = "http://dosasf.com"
      end

r38 = Restaurant.where(phone_number: "(415) 206-2086").first_or_create do |r|
        r.name = "Emmy's Spaghetti Shack"
        r.description = "Keep it Simple, Spaghetti"
        r.address = "3230 Mission St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.744997
        r.lng = -122.420401
        r.url = "http://emmysspaghettishack.com"
      end

r39 = Restaurant.where(phone_number: "(415) 814-2920").first_or_create do |r|
        r.name = "Farmhouse Kitchen Thai Cuisine"
        r.description = "Classic Curries & Noodles, Plus Rare Thai Street Foods"
        r.address = "710 Florida St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.760218
        r.lng = -122.411286
        r.url = "http://farmhousesf.com"
      end

r40 = Restaurant.where(phone_number: "(415) 297-3980").first_or_create do |r|
        r.name = "Fine & Rare"
        r.description = "Fresh American Classics"
        r.address = "555 Golden Gate Ave"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94102"
        r.lat = 37.780979
        r.lng = -122.419607
        r.url = "http://fandrsf.com"
      end

r41 = Restaurant.where(phone_number: "(415) 759-8087").first_or_create do |r|
        r.name = "Fresca - West Portal"
        r.description = "Peruvian Kitchen"
        r.address = "24 W Portal Ave"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94127"
        r.lat = 37.740704
        r.lng = -122.466422
        r.url = "http://frescasf.com"
      end

r42 = Restaurant.where(phone_number: "(415) 348-1858").first_or_create do |r|
        r.name = "Freshroll SOMA"
        r.description = "Vietnamese Rolls & Bowls"
        r.address = "157 4th St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94103"
        r.lat = 37.784060
        r.lng = -122.403158
        r.url = "http://eatatfreshroll.com"
      end

r43 = Restaurant.where(phone_number: "(415) 913-7163").first_or_create do |r|
        r.name = "Gilberth's Rotisserie & Grill"
        r.description = "Latin Cuisine meets Urban Chic"
        r.address = "2427 3rd St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94107"
        r.lat = 37.758798
        r.lng = -122.388122
        r.url = "http://gilberths.com"
      end

r44 = Restaurant.where(phone_number: "(415) 590-2199").first_or_create do |r|
        r.name = "Glaze Teriyaki Grill - Fillmore"
        r.description = "Seattle Style Teriyaki"
        r.address = "1946 Fillmore St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94115"
        r.lat = 37.787866
        r.lng = -122.433473
        r.url = "http://glazeteriyaki.com/order"
      end

r45 = Restaurant.where(phone_number: "(415) 683-1346").first_or_create do |r|
        r.name = "Gracias Madre"
        r.description = "Our Mission is Love"
        r.address = "2211 Mission St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.761572
        r.lng = -122.419080
        r.url = "http://gracias-madre.com"
      end

r46 = Restaurant.where(phone_number: "(415) 771-6222").first_or_create do |r|
        r.name = "Greens"
        r.description = "A Vegetarian Institution"
        r.address = "Fort Mason, Bldg A"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94123"
        r.lat = 37.807608
        r.lng = -122.428232
        r.url = "http://greensrestaurant.com"
      end

r47 = Restaurant.where(phone_number: "(415) 221-4746").first_or_create do |r|
        r.name = "Grindz"
        r.description = "Get Your Hawaiian Fix!"
        r.address = "832 Clement St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94118"
        r.lat = 37.782926
        r.lng = -122.468269
        r.url = "http://grindzrestaurant.com"
      end

r48 = Restaurant.where(phone_number: "(415) 648-3770").first_or_create do |r|
        r.name = "Hard Knox Cafe"
        r.description = "SoCo for the Soul"
        r.address = "2526 3rd St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94107"
        r.lat = 37.757529
        r.lng = -122.388523
        r.url = "http://hardknoxcafe.com"
      end

r49 = Restaurant.where(phone_number: "(415) 374-7479").first_or_create do |r|
        r.name = "Hoffmann's Grill and Rotisserie"
        r.description = "Wholesome, Honest Cuisine"
        r.address = "1000 Guerrero St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.755007
        r.lng = -122.423404
        r.url = "http://hoffmannsgrill.com"
      end

r50 = Restaurant.where(phone_number: "(415) 550-6971").first_or_create do |r|
        r.name = "Humphry Slocombe - Mission"
        r.description = "Ice Cream with Attitude"
        r.address = "2790A Harrison St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94110"
        r.lat = 37.752805
        r.lng = -122.411931
        r.url = "http://humphryslocombe.com"
      end

r51 = Restaurant.where(phone_number: "(415) 553-6888").first_or_create do |r|
        r.name = "Ike's Place - Castro"
        r.description = "Everything is Better with Dirty Sauce"
        r.address = "3489 16th St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94114"
        r.lat = 37.764270
        r.lng = -122.430571
        r.url = "http://ilikeikesplace.com"
      end

r52 = Restaurant.where(phone_number: "(415) 391-7599").first_or_create do |r|
        r.name = "il Cane Rosso"
        r.description = "Locavore Focused Artistry"
        r.address = "1 Ferry Bldg Ste 41"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94111"
        r.lat = 37.795580
        r.lng = -122.393411
        r.url = "http://canerossosf.com"
      end

r53 = Restaurant.where(phone_number: "(415) 677-9455").first_or_create do |r|
        r.name = "il Casaro Pizzeria and Mozzarella Bar"
        r.description = "Wood Fired Pizza Perfection"
        r.address = "348 Columbus Ave"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94133"
        r.lat = 37.798495
        r.lng = -122.407321
        r.url = "http://ilcasarosf.com"
      end

r54 = Restaurant.where(phone_number: "(415) 567-9588").first_or_create do |r|
        r.name = "Isa"
        r.description = "California French"
        r.address = "3324 Steiner St"
        r.city = "San Francisco"
        r.state = "CA"
        r.zip_code = "94123"
        r.lat = 37.800097
        r.lng = -122.437570
        r.url = "http://isarestaurant.com"
      end


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


#----The American Grilled Cheese Kitchen---------------------

f26 = FoodItem.find_or_create_by(
        name: "Kale Slaw (Vegetarian)",
        price: 5.41,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809158/American%20Grilled%20Cheese/9312.jpg",
        restaurant_id: r7.id)

f27 = FoodItem.find_or_create_by(
        name: "Bamboo's Sesame Kale Salad (Vegan)",
        price: 9.35,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809158/American%20Grilled%20Cheese/40252.jpg",
        restaurant_id: r7.id)

f28 = FoodItem.find_or_create_by(
        name: "Classic Shoestring Fries",
        price: 4.43,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809157/American%20Grilled%20Cheese/1146.jpg",
        restaurant_id: r7.id)

f29 = FoodItem.find_or_create_by(
        name: "Daily Mac n Cheese",
        price: 8.36,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809157/American%20Grilled%20Cheese/1145.jpg",
        restaurant_id: r7.id)

f30 = FoodItem.find_or_create_by(
        name: "Mac n Cheese Grilled Cheese",
        price: 9.84,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809157/American%20Grilled%20Cheese/1132.jpg",
        restaurant_id: r7.id)

f31 = FoodItem.find_or_create_by(
        name: "Mushroom Gruyere Grilled Cheese",
        price: 10.33,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809157/American%20Grilled%20Cheese/1134.jpg",
        restaurant_id: r7.id)

f32 = FoodItem.find_or_create_by(
        name: "Jalapeno Popper Grilled Cheese",
        price: 8.86,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809157/American%20Grilled%20Cheese/1135.jpg",
        restaurant_id: r7.id)

f33 = FoodItem.find_or_create_by(
        name: "Club Turkey Grilled Cheese",
        price: 9.84,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809157/American%20Grilled%20Cheese/1136.jpg",
        restaurant_id: r7.id)

f34 = FoodItem.find_or_create_by(
        name: "Chicken n Biscuits",
        price: 13.28,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809157/American%20Grilled%20Cheese/6013.jpg",
        restaurant_id: r7.id)

f35 = FoodItem.find_or_create_by(
        name: "Pulled Pork Sandwich",
        price: 14.27,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809157/American%20Grilled%20Cheese/6014.jpg",
        restaurant_id: r7.id)

f36 = FoodItem.find_or_create_by(
        name: "All American Burger",
        price: 13.77,
        image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452809158/American%20Grilled%20Cheese/6015.jpg",
        restaurant_id: r7.id)


#----Baan Restaurant & Wine Bar---------------------

f37 = FoodItem.find_or_create_by(
name: "Avocado Mango Spring Roll",
price: 8.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452845639/Baan%20Restaurant/69200-201508171942.jpg",
restaurant_id: r8.id)

f38 = FoodItem.find_or_create_by(
name: "Exotic Seafood",
price: 16.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452845638/Baan%20Restaurant/69226-201508171942.jpg",
restaurant_id: r8.id)

f39 = FoodItem.find_or_create_by(
name: "Fire Cooked Beef",
price: 15.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452845639/Baan%20Restaurant/69224-201508171942.jpg",
restaurant_id: r8.id)

f40 = FoodItem.find_or_create_by(
name: "Delightful Fried Rice",
price: 12.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452845639/Baan%20Restaurant/72167-201508271816.jpg",
restaurant_id: r8.id)

f41 = FoodItem.find_or_create_by(
name: "Basil Eggplant",
price: 10.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452845639/Baan%20Restaurant/72170-201508271816.jpg",
restaurant_id: r8.id)

f42 = FoodItem.find_or_create_by(
name: "Yellow Curry",
price: 12.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452845639/Baan%20Restaurant/69253-201508171942.jpg",
restaurant_id: r8.id)


#----Balompie Cafe---------------------

f43 = FoodItem.find_or_create_by(
name: "Mariscada",
price: 14.95,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847258/Balompie%20Caf%C3%A9/7277.jpg",
restaurant_id: r9.id)

f44 = FoodItem.find_or_create_by(
name: "Pollo Con Camarones",
price: 15.95,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847258/Balompie%20Caf%C3%A9/7276.jpg",
restaurant_id: r9.id)


#----Barbacco---------------------

f45 = FoodItem.find_or_create_by(
name: "Cheese Selection",
price: 9.30,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847448/Barbacco/1631.jpg",
restaurant_id: r10.id)

f46 = FoodItem.find_or_create_by(
name: "Kale and Roasted Squash Salad",
price: 9.20,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847449/Barbacco/19223.jpg",
restaurant_id: r10.id)

f47 = FoodItem.find_or_create_by(
name: "Poached Tuna Sandwich",
price: 14.95,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847448/Barbacco/1623.jpg",
restaurant_id: r10.id)

f48 = FoodItem.find_or_create_by(
name: "Orecchiette Pasta",
price: 17.25,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847449/Barbacco/1632.jpg",
restaurant_id: r10.id)

f49 = FoodItem.find_or_create_by(
name: "Farrotto",
price: 17.25,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847449/Barbacco/1635.jpg",
restaurant_id: r10.id)

f50 = FoodItem.find_or_create_by(
name: "Braised Chicken Thighs",
price: 17.25,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847449/Barbacco/1639.jpg",
restaurant_id: r10.id)

f51 = FoodItem.find_or_create_by(
name: "Brussel Sprouts",
price: 6.90,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452847449/Barbacco/1644.jpg",
restaurant_id: r10.id)


#----Basa Seafood Express---------------------

f52 = FoodItem.find_or_create_by(
name: "French Fries",
price: 3.99,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848201/Basa%20Seafood%20Express/29392.jpg",
restaurant_id: r11.id)

f53 = FoodItem.find_or_create_by(
name: "Salmon or Shrimp Rice Plate",
price: 9.99,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848202/Basa%20Seafood%20Express/29350.jpg",
restaurant_id: r11.id)

f54 = FoodItem.find_or_create_by(
name: "49ers Roll",
price: 10.95,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848201/Basa%20Seafood%20Express/29332.jpg",
restaurant_id: r11.id)

f55 = FoodItem.find_or_create_by(
name: "Salmon Poke",
price: 7.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848202/Basa%20Seafood%20Express/29352.jpg",
restaurant_id: r11.id)

f56 = FoodItem.find_or_create_by(
name: "Fish Burger",
price: 6.99,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848201/Basa%20Seafood%20Express/29349.jpg",
restaurant_id: r11.id)


#----Beanstalk Cafe---------------------

f57 = FoodItem.find_or_create_by(
name: "Pastrami Sandwich",
price: 10.50,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848765/Beanstalk%20Cafe/32284.jpg",
restaurant_id: r12.id)

f58 = FoodItem.find_or_create_by(
name: "Bul Go Gi Sandwich",
price: 10.50,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848765/Beanstalk%20Cafe/10875.jpg",
restaurant_id: r12.id)

f59 = FoodItem.find_or_create_by(
name: "Bacon and Cheese Bagel ",
price: 5.50,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848765/Beanstalk%20Cafe/32292.jpg",
restaurant_id: r12.id)

f60 = FoodItem.find_or_create_by(
name: "Veggie Sandwich",
price: 10.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452848765/Beanstalk%20Cafe/32290.jpg",
restaurant_id: r12.id)


#----Big Chef Tom's Belly Burgers---------------------

f61 = FoodItem.find_or_create_by(
name: "Cheese Fries",
price: 5.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452849208/Big%20Chef%20Tom's%20Belly%20Burgers/33344.jpg",
restaurant_id: r13.id)

f62 = FoodItem.find_or_create_by(
name: "Classic",
price: 8.95,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452849208/Big%20Chef%20Tom's%20Belly%20Burgers/22492.jpg",
restaurant_id: r13.id)

f63 = FoodItem.find_or_create_by(
name: "Truck Stop",
price: 8.95,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452849207/Big%20Chef%20Tom's%20Belly%20Burgers/22496-2.jpg",
restaurant_id: r13.id)


#----Blackwood---------------------

f64 = FoodItem.find_or_create_by(
name: "Two Eggs with Bacon or Sausage",
price: 10.95,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452852108/Blackwood/53580-201505270028.jpg",
restaurant_id: r14.id)

f65 = FoodItem.find_or_create_by(
name: "Benedict",
price: 13.55,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452852107/Blackwood/53583-201505270028.jpg",
restaurant_id: r14.id)

f66 = FoodItem.find_or_create_by(
name: "Crispy French Toast",
price: 11.05,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452852108/Blackwood/53585-201505270028.jpg",
restaurant_id: r14.id)

f67 = FoodItem.find_or_create_by(
name: "Papaya Salad",
price: 12.05,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452852107/Blackwood/57499-201506180402.jpg",
restaurant_id: r14.id)


#----Bocadillos---------------------

f68 = FoodItem.find_or_create_by(
name: "Bocadillos",
price: 13.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452852643/Bocadillos/4459.jpg",
restaurant_id: r15.id)

f69 = FoodItem.find_or_create_by(
name: "Kale Salad",
price: 11.00,
image_url: "http://res.cloudinary.com/yumblr/image/upload/v1452852643/Bocadillos/6888.jpg",
restaurant_id: r15.id)


#----Brenda's French Soul Food---------------------



#----Brenda's Meat and Three---------------------



#----Caffe Fiore---------------------



#----Calibur---------------------



#----Capo's---------------------



#----Causwells---------------------



#----Chile Pies Baking Co.---------------------



#----Chow---------------------



#----Chubby Noodle - Marina---------------------



#----Cinderella Bakery and Cafe---------------------



#----CookieLove---------------------



#----Craftsman & Wolves---------------------



#----Crepe Cone---------------------



#----Crepe La Vie---------------------



#----Curry Up Now SF---------------------



#----Cybelle's Pizza & Ice Cream---------------------




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

restaurantcuisines.each do |rc|
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
  {food_item_id: f25.id, category_id: vegetarian.id},
  {food_item_id: f26.id, category_id: vegetarian.id},
  {food_item_id: f26.id, category_id: salad.id},
  {food_item_id: f27.id, category_id: vegetarian.id},
  {food_item_id: f27.id, category_id: salad.id},
  {food_item_id: f28.id, category_id: french_fries.id},
  {food_item_id: f29.id, category_id: macaroni_and_cheese.id},
  {food_item_id: f29.id, category_id: vegetarian.id},
  {food_item_id: f30.id, category_id: macaroni_and_cheese.id},
  {food_item_id: f30.id, category_id: vegetarian.id},
  {food_item_id: f30.id, category_id: sandwich.id},
  {food_item_id: f31.id, category_id: vegetarian.id},
  {food_item_id: f31.id, category_id: sandwich.id},
  {food_item_id: f32.id, category_id: sandwich.id},
  {food_item_id: f33.id, category_id: sandwich.id},
  {food_item_id: f34.id, category_id: chicken.id},
  {food_item_id: f35.id, category_id: pork.id},
  {food_item_id: f35.id, category_id: sandwich.id},
  {food_item_id: f36.id, category_id: beef.id},
  {food_item_id: f36.id, category_id: hamburger.id},
  {food_item_id: f37.id, category_id: vegetarian.id},
  {food_item_id: f38.id, category_id: seafood.id},
  {food_item_id: f39.id, category_id: beef.id},
  {food_item_id: f40.id, category_id: vegetarian.id},
  {food_item_id: f41.id, category_id: vegetarian.id},
  {food_item_id: f42.id, category_id: chicken.id},
  {food_item_id: f42.id, category_id: curry.id},
  {food_item_id: f43.id, category_id: seafood.id},
  {food_item_id: f44.id, category_id: seafood.id},
  {food_item_id: f44.id, category_id: chicken.id},
  {food_item_id: f45.id, category_id: cheese.id},
  {food_item_id: f45.id, category_id: vegetarian.id},
  {food_item_id: f46.id, category_id: vegetarian.id},
  {food_item_id: f46.id, category_id: salad.id},
  {food_item_id: f47.id, category_id: sandwich.id},
  {food_item_id: f47.id, category_id: seafood.id},
  {food_item_id: f48.id, category_id: pasta.id},
  {food_item_id: f49.id, category_id: vegetarian.id},
  {food_item_id: f50.id, category_id: chicken.id},
  {food_item_id: f52.id, category_id: french_fries.id},
  {food_item_id: f53.id, category_id: salmon.id},
  {food_item_id: f53.id, category_id: seafood.id},
  {food_item_id: f54.id, category_id: seafood.id},
  {food_item_id: f54.id, category_id: sushi.id},
  {food_item_id: f55.id, category_id: salmon.id},
  {food_item_id: f56.id, category_id: fish.id},
  {food_item_id: f56.id, category_id: hamburger.id},
  {food_item_id: f57.id, category_id: sandwich.id},
  {food_item_id: f57.id, category_id: beef.id},
  {food_item_id: f58.id, category_id: sandwich.id},
  {food_item_id: f58.id, category_id: beef.id},
  {food_item_id: f59.id, category_id: breakfast.id},
  {food_item_id: f60.id, category_id: vegetarian.id},
  {food_item_id: f60.id, category_id: sandwich.id},
  {food_item_id: f61.id, category_id: cheese.id},
  {food_item_id: f61.id, category_id: french_fries.id},
  {food_item_id: f62.id, category_id: hamburger.id},
  {food_item_id: f62.id, category_id: pork.id},
  {food_item_id: f62.id, category_id: chicken.id},
  {food_item_id: f63.id, category_id: hamburger.id},
  {food_item_id: f63.id, category_id: pork.id},
  {food_item_id: f63.id, category_id: chicken.id},
  {food_item_id: f64.id, category_id: breakfast.id},
  {food_item_id: f65.id, category_id: breakfast.id},
  {food_item_id: f66.id, category_id: breakfast.id},
  {food_item_id: f67.id, category_id: salad.id},
  {food_item_id: f67.id, category_id: vegetarian.id},
  {food_item_id: f68.id, category_id: chicken.id},
  {food_item_id: f68.id, category_id: hamburger.id},
  {food_item_id: f68.id, category_id: salmon.id},
  {food_item_id: f68.id, category_id: fish.id},
  {food_item_id: f68.id, category_id: seafood.id},
  {food_item_id: f68.id, category_id: pork.id},
  {food_item_id: f68.id, category_id: beef.id},
  {food_item_id: f69.id, category_id: vegetarian.id},
  {food_item_id: f69.id, category_id: salad.id}
]

foodcategories.each do |fc|
  FoodCategory.find_or_create_by(fc)
end
