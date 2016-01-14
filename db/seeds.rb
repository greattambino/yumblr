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
                  description: "New American Comfort",
                  address: "3218 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.745215",
                  lng: "-122.420483",
                  phone_number: "(415) 282-6777",
                  url: "http://www.blueplatesf.com")

r2 = Restaurant.find_or_create_by(name: "Ramen Underground",
                  description: "Authentic Ramen with no MSG",
                  address: "356 Kearny St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94108",
                  lat: "37.791355",
                  lng: "-122.404174",
                  phone_number: "(415) 999-2509",
                  url: "http://www.ramenunderground.com")

r3 = Restaurant.find_or_create_by(name: "Skool",
                  description: "Fresh, Sustainable Seafood with International Flair",
                  address: "1725 Alameda St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.768521",
                  lng: "-122.402286",
                  phone_number: "(415) 255-8800",
                  url: "http://skoolsf.com")

r4 = Restaurant.find_or_create_by(name: "AG Ferrari Foods - SOMA",
                  description: "Italy Inspired Market Café",
                  address: "688 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94105",
                  lat: "37.786617",
                  lng: "-122.401855",
                  phone_number: "(415) 344-0644",
                  url: "http://www.agferrari.com/")

r5 = Restaurant.find_or_create_by(name: "Live Sushi Bistro",
                  description: "The Sushi is Alive",
                  address: "1 Gilbert St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.774651",
                  lng: "-122.403977",
                  phone_number: "(415) 558-8778",
                  url: "http://www.livesushibistro.com/")

r6 = Restaurant.find_or_create_by(name: "Boxed Foods Company",
                  description: "Fast, Fresh, and Tasty Sandwiches & Salads",
                  address: "245 Kearny St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94108",
                  lat: "37.790441",
                  lng: "-122.404192",
                  phone_number: "(415) 981-9376",
                  url: "http://www.boxedfoodscompany.com")
########
r7 = Restaurant.find_or_create_by(name: "The American Grilled Cheese Kitchen",
                  description: "Gourmet Comfort",
                  address: "1 South Park St, Apt 103A",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94107",
                  lat: "37.782056",
                  lng: "-122.392854",
                  phone_number: "(415) 243-0107",
                  url: "http://theamericansf.com")

r8 = Restaurant.find_or_create_by(name: "Baan Restaurant & Wine Bar",
                  description: "Thai Kitchen with a Californian Twist",
                  address: "534 Irving St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94122",
                  lat: "37.764342",
                  lng: "-122.463716",
                  phone_number: "(415) 379-4505",
                  url: "http://baanthaisf.com")

r9 = Restaurant.find_or_create_by(name: "Balompie Cafe",
                  description: "Authentic Salvadoran Food",
                  address: "3349 18th St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.761812",
                  lng: "-122.418168",
                  phone_number: "(415) 648-9199")

r10 = Restaurant.find_or_create_by(name: "Barbacco",
                  description: "Modern Trattoria",
                  address: "220 California St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94111",
                  lat: "37.793682",
                  lng: "-122.399179",
                  phone_number: "(415) 955-1919",
                  url: "http://barbaccosf.com")

r11 = Restaurant.find_or_create_by(name: "Basa Seafood Express",
                  description: "Best Salmon Burger in Town",
                  address: "3064 24th St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.752692",
                  lng: "-122.413395",
                  phone_number: "(415) 550-2388",
                  url: "http://basaseafood.com")

r12 = Restaurant.find_or_create_by(name: "Beanstalk Cafe",
                  description: "Minimalist Cafe Serving Focused Meals",
                  address: "724 Bush St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94108",
                  lat: "37.790279",
                  lng: "-122.409319",
                  phone_number: "(415) 576-1966")

r13 = Restaurant.find_or_create_by(name: "Big Chef Tom's Belly Burgers",
                  description: "Fast, Fresh, and Tasty Sandwiches & Salads",
                  address: "1550 Howard St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.772511",
                  lng: "-122.416605",
                  phone_number: "(415) 513-1331",
                  url: "http://www.bctbellyburgers.com")

r14 = Restaurant.find_or_create_by(name: "Blackwood",
                  description: "American Thai Fusion",
                  address: "2150 Chestnut St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94123",
                  lat: "37.800768",
                  lng: "-122.438953",
                  phone_number: "(415) 931-9663",
                  url: "http://blackwoodsf.com")

r15 = Restaurant.find_or_create_by(name: "Bocadillos",
                  description: "San Francisco meets San Sebastian - Tapas",
                  address: "710 Montgomery St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94111",
                  lat: "37.795955",
                  lng: "-122.403246",
                  phone_number: "(415) 982-2622",
                  url: "http://bocasf.com")

r16 = Restaurant.find_or_create_by(name: "Brenda's French Soul Food",
                  description: "Kickin' It Creole",
                  address: "652 Polk St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94102",
                  lat: "37.782912",
                  lng: "-122.419015",
                  phone_number: "(415) 345-8100",
                  url: "http://frenchsoulfood.com")

r17 = Restaurant.find_or_create_by(name: "Brenda's Meat and Three",
                  description: "Country Cooking Brenda's Style",
                  address: "919 Divisadero St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94115",
                  lat: "37.778173",
                  lng: "-122.438702",
                  phone_number: "(415) 926-8657",
                  url: "http://brendasmeatandthree.com")

r18 = Restaurant.find_or_create_by(name: "Caffe Fiore",
                  description: "Exquisite Italian",
                  address: "3599 24th St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.751871",
                  lng: "-122.422663",
                  phone_number: "(415) 642-4822",
                  url: "http://caffefioresf.com")

r19 = Restaurant.find_or_create_by(name: "Calibur",
                  description: "Like Burgers...... Love Calibur!",
                  address: "68 W Portal Ave",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94127",
                  lat: "37.740173",
                  lng: "-122.466823",
                  phone_number: "(415) 742-4931",
                  url: "http://calibursf.com")

r20 = Restaurant.find_or_create_by(name: "Capo's",
                  description: "Chicago Pizza & Fine Italian Dinners",
                  address: "641 Vallejo St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94123",
                  lat: "37.798516",
                  lng: "-122.408415",
                  phone_number: "(415) 986-8998",
                  url: "http://sfcapos.com")

r21 = Restaurant.find_or_create_by(name: "Causwells",
                  description: "An American Bistro",
                  address: "2346 Chestnut St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94123",
                  lat: "37.800250",
                  lng: "-122.441998",
                  phone_number: "(415) 447-6081",
                  url: "http://causwells.com")

r22 = Restaurant.find_or_create_by(name: "Chile Pies Baking Co.",
                  description: "Sweet & Savory Pies, Stews, and Salads",
                  address: "601 Baker St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94117",
                  lat: "37.776582",
                  lng: "-122.441766",
                  phone_number: "(415) 614-9411",
                  url: "http://greenchilekitchen.com")

r23 = Restaurant.find_or_create_by(name: "Chow",
                  description: "Here to Feed You",
                  address: "215 Church St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94114",
                  lat: "37.767197",
                  lng: "-122.428593",
                  phone_number: "(415) 552-2469",
                  url: "http://chowfoodbar.com")

r24 = Restaurant.find_or_create_by(name: "Chubby Noodle - Marina",
                  description: "Happy Inside",
                  address: "2205 Lombard St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94123",
                  lat: "37.799420",
                  lng: "-122.437986",
                  phone_number: "(415) 655-3335",
                  url: "http://chubbynoodle.com")

r25 = Restaurant.find_or_create_by(name: "Cinderella Bakery and Cafe",
                  description: "Authentic Russian",
                  address: "436 Balboa St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94118",
                  lat: "37.777400",
                  lng: "-122.463638",
                  phone_number: "(415) 751-9690",
                  url: "http://cinderellabakery.com")

r26 = Restaurant.find_or_create_by(name: "CookieLove",
                  description: "Flour - Sugar - Soul",
                  address: "1488 Pine St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94109",
                  lat: "37.789807",
                  lng: "-122.420162",
                  phone_number: "(415) 829-7449",
                  url: "http://cookielovesf.com")

r27 = Restaurant.find_or_create_by(name: "Craftsman & Wolves",
                  description: "A Contemporary Patisserie",
                  address: "746 Valencia St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.760932",
                  lng: "-122.421772",
                  phone_number: "(415) 913-7713",
                  url: "http://craftsman-wolves.com")

r28 = Restaurant.find_or_create_by(name: "Crepe Cone",
                  description: "Sophie's Crepes Little Sister",
                  address: "684 King St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94107",
                  lat: "37.770208",
                  lng: "-122.402230",
                  phone_number: "(415) 795-1331",
                  url: "http://crepe-cone.com")

r29 = Restaurant.find_or_create_by(name: "Crepe La Vie",
                  description: "Traditional French Crepes Made Gluten Free",
                  address: "1727 Haight St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94117",
                  lat: "37.769288",
                  lng: "-122.451211",
                  phone_number: "(415) 508-6756",
                  url: "http://crepelavie.com")

r30 = Restaurant.find_or_create_by(name: "Curry Up Now SF",
                  description: "Indian Street Food",
                  address: "225 Bush St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94104",
                  lat: "37.790841",
                  lng: "-122.401280",
                  phone_number: "(415) 735-3667",
                  url: "http://curryupnow.com")

r31 = Restaurant.find_or_create_by(name: "Cybelle's Pizza & Ice Cream",
                  description: "New York Style, Homemade Gourmet Pizza",
                  address: "1000 Bush St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94109",
                  lat: "37.789682",
                  lng: "-122.414021",
                  phone_number: "(415) 885-6830",
                  url: "http://yourcybellespizza.com")

r32 = Restaurant.find_or_create_by(name: "Delfina",
                  description: "Bustling Neighborhood Trattoria",
                  address: "3621 18th St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.761357",
                  lng: "-122.424377",
                  phone_number: "(415) 552-4055",
                  url: "http://delfinasf.com/restaurant")

r33 = Restaurant.find_or_create_by(name: "Delica",
                  description: "Bento Up Your Life",
                  address: "1 Ferry Bldg, Shop 45",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94111",
                  lat: "37.795792",
                  lng: "-122.393393",
                  phone_number: "(415) 834-0344",
                  url: "http://delicasf.com")

r34 = Restaurant.find_or_create_by(name: "Destino",
                  description: "Latin American Small Plates",
                  address: "1815 Market St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.771255",
                  lng: "-122.423776",
                  phone_number: "(415) 552-4451",
                  url: "http://destinosf.com")

r35 = Restaurant.find_or_create_by(name: "Doc Ricketts",
                  description: "Creative, Refined and Approachable Northern California Cuisine",
                  address: "124 Columbus Ave",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94133",
                  lat: "37.796786",
                  lng: "-122.404800",
                  phone_number: "(415) 649-6191",
                  url: "http://docrickettssf.com")

r36 = Restaurant.find_or_create_by(name: "Don Pistos",
                  description: "Amazing!",
                  address: "510 Union St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94133",
                  lat: "37.800732",
                  lng: "-122.407929",
                  phone_number: "(415) 395-0939",
                  url: "http://donpistos.com")

r37 = Restaurant.find_or_create_by(name: "DOSA on Fillmore",
                  description: "South Indian Cuisine",
                  address: "1700 Fillmore St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94115",
                  lat: "37.785370",
                  lng: "-122.432850",
                  phone_number: "(415) 441-3672",
                  url: "http://dosasf.com")

r38 = Restaurant.find_or_create_by(name: "Emmy's Spaghetti Shack",
                  description: "Keep it Simple, Spaghetti",
                  address: "3230 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.744997",
                  lng: "-122.420401",
                  phone_number: "(415) 206-2086",
                  url: "http://emmysspaghettishack.com")

r39 = Restaurant.find_or_create_by(name: "Farmhouse Kitchen Thai Cuisine",
                  description: "Classic Curries & Noodles, Plus Rare Thai Street Foods",
                  address: "710 Florida St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.760218",
                  lng: "-122.411286",
                  phone_number: "(415) 814-2920",
                  url: "http://farmhousesf.com")

r40 = Restaurant.find_or_create_by(name: "Fine & Rare",
                  description: "Fresh American Classics",
                  address: "555 Golden Gate Ave",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94102",
                  lat: "37.780979",
                  lng: "-122.419607",
                  phone_number: "(415) 297-3980",
                  url: "http://fandrsf.com")

r41 = Restaurant.find_or_create_by(name: "Fresca - West Portal",
                  description: "Peruvian Kitchen",
                  address: "24 W Portal Ave",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94127",
                  lat: "37.740704",
                  lng: "-122.466422",
                  phone_number: "(415) 759-8087",
                  url: "http://frescasf.com")

r42 = Restaurant.find_or_create_by(name: "Freshroll SOMA",
                  description: "Vietnamese Rolls & Bowls",
                  address: "157 4th St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94103",
                  lat: "37.784060",
                  lng: "-122.403158",
                  phone_number: "(415) 348-1858",
                  url: "http://eatatfreshroll.com")

r43 = Restaurant.find_or_create_by(name: "Gilberth's Rotisserie & Grill",
                  description: "Latin Cuisine meets Urban Chic",
                  address: "2427 3rd St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94107",
                  lat: "37.758798",
                  lng: "-122.388122",
                  phone_number: "(415) 913-7163",
                  url: "http://gilberths.com")

r44 = Restaurant.find_or_create_by(name: "Glaze Teriyaki Grill - Fillmore",
                  description: "Seattle Style Teriyaki",
                  address: "1946 Fillmore St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94115",
                  lat: "37.787866",
                  lng: "-122.433473",
                  phone_number: "(415) 590-2199",
                  url: "http://glazeteriyaki.com/order")

r45 = Restaurant.find_or_create_by(name: "Gracias Madre",
                  description: "Our Mission is Love",
                  address: "2211 Mission St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.761572",
                  lng: "-122.419080",
                  phone_number: "(415) 683-1346",
                  url: "http://gracias-madre.com")

r46 = Restaurant.find_or_create_by(name: "Greens",
                  description: "A Vegetarian Institution",
                  address: "Fort Mason, Bldg A",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94123",
                  lat: "37.807608",
                  lng: "-122.428232",
                  phone_number: "(415) 771-6222",
                  url: "http://greensrestaurant.com")

r47 = Restaurant.find_or_create_by(name: "Grindz",
                  description: "Get Your Hawaiian Fix!",
                  address: "832 Clement St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94118",
                  lat: "37.782926",
                  lng: "-122.468269",
                  phone_number: "(415) 221-4746",
                  url: "http://grindzrestaurant.com")

r48 = Restaurant.find_or_create_by(name: "Hard Knox Cafe",
                  description: "SoCo for the Soul",
                  address: "2526 3rd St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94107",
                  lat: "37.757529",
                  lng: "-122.388523",
                  phone_number: "(415) 648-3770",
                  url: "http://hardknoxcafe.com")

r49 = Restaurant.find_or_create_by(name: "Hoffmann's Grill and Rotisserie",
                  description: "Wholesome, Honest Cuisine",
                  address: "1000 Guerrero St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.755007",
                  lng: "-122.423404",
                  phone_number: "(415) 374-7479",
                  url: "http://hoffmannsgrill.com")

r50 = Restaurant.find_or_create_by(name: "Humphry Slocombe - Mission",
                  description: "Ice Cream with Attitude",
                  address: "2790A Harrison St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94110",
                  lat: "37.752805",
                  lng: "-122.411931",
                  phone_number: "(415) 550-6971",
                  url: "http://humphryslocombe.com")

r51 = Restaurant.find_or_create_by(name: "Ike's Place - Castro",
                  description: "Everything is Better with Dirty Sauce",
                  address: "3489 16th St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94114",
                  lat: "37.764270",
                  lng: "-122.430571",
                  phone_number: "(415) 553-6888",
                  url: "http://ilikeikesplace.com")

r52 = Restaurant.find_or_create_by(name: "il Cane Rosso",
                  description: "Locavore Focused Artistry",
                  address: "1 Ferry Bldg Ste 41",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94111",
                  lat: "37.795580",
                  lng: "-122.393411",
                  phone_number: "(415) 391-7599",
                  url: "http://canerossosf.com")

r53 = Restaurant.find_or_create_by(name: "il Casaro Pizzeria and Mozzarella Bar",
                  description: "Wood Fired Pizza Perfection",
                  address: "348 Columbus Ave",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94133",
                  lat: "37.798495",
                  lng: "-122.407321",
                  phone_number: "(415) 677-9455",
                  url: "http://ilcasarosf.com")

r54 = Restaurant.find_or_create_by(name: "Isa",
                  description: "California French",
                  address: "3324 Steiner St",
                  city: "San Francisco",
                  state: "CA",
                  zip_code: "94123",
                  lat: "37.800097",
                  lng: "-122.437570",
                  phone_number: "(415) 567-9588",
                  url: "http://isarestaurant.com")


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




#----Baan Restaurant & Wine Bar---------------------



#----Balompie Cafe---------------------



#----Barbacco---------------------



#----Basa Seafood Express---------------------



#----Beanstalk Cafe---------------------



#----Big Chef Tom's Belly Burgers---------------------



#----Blackwood---------------------



#----Bocadillos---------------------



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
