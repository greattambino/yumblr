json.extract!(
  r, :id, :name, :description, :address, :city, :state, :zip_code
)

json.phone_number (!!r.phone_number && !r.phone_number.empty?) ? r.phone_number : "none"
json.url (!!r.url && !r.url.empty?) ? r.url : "none"

json.food_items do
  json.partial! 'api/food_items/food_item', collection: r.food_items, as: :food_item
end

cuisines = r.cuisines.pluck(:cuisine)
json.cuisines cuisines.empty? ? ["(pending)"] : cuisines

# json.food_items do
#   json.array!(restaurant.food_items) do |food_item|
#     json.partial! 'api/food_items/food_item', food_item: food_item
#   end
# end
