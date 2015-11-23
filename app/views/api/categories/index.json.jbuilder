json.array! @categories do |category|
  json.extract!(category, :id, :name)

  json.food_items category.food_items do |food|
    json.id food.id
    json.name food.name
    json.price food.price
  end
end
