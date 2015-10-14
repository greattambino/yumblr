json.extract!(
  restaurant,
  :id, :name, :description, :address, :city, :state, :zip_code,
  :phone_number, :url, :cuisine_id
)

json.food_items do
  json.partial! 'api/food_items/food_item', collection: restaurant.food_items, as: :food_item
end

# json.food_items do
#   json.array!(restaurant.food_items) do |food_item|
#     json.partial! 'api/food_items/food_item', food_item: food_item
#   end
# end
