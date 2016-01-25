json.extract!(@category, :id, :name)

json.food_items @category.food_items do |f|
  json.id f.id
  json.name f.name
  json.price f.price
  json.image_url f.image_url
  json.restaurant_id f. restaurant_id
  json.restaurant f.restaurant
end

# json.restaurant (f.restaurant)
# json.food_items do
#   json.partial! 'api/food_items/food_item', collection: @category.food_items, as: :f
# end
