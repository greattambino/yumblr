json.array! @food_items do |f|
  json.extract!(f, :id, :name, :price, :image_url, :restaurant_id)

  json.restaurant (f.restaurant)
end
  # distance = f.restaurant.distance(@location, 1)
  # json.distance distance
