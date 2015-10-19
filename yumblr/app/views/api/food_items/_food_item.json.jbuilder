json.extract!(f, :id, :name, :price, :image_url, :restaurant_id)

json.restaurant(f.restaurant)
