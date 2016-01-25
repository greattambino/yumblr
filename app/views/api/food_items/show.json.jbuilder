json.partial!('food_item', f: @food_item)

json.categories (@food_item.categories)
