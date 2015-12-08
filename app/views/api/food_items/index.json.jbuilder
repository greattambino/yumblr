json.array! @food_items do |f|
  json.extract!(f, :id, :name, :price, :image_url, :restaurant_id)

  json.restaurant (f.restaurant)
  # json.likes (f.likes)
  # json.num_likes (f.num_likes)
end

# json.partial! 'food_item', collection: @food_items, as: :f
