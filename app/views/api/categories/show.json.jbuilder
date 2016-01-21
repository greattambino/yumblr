json.extract!(@category, :id, :name)

json.food_items do
  json.partial! 'api/food_items/food_item', collection: @category.food_items, as: :f
end
