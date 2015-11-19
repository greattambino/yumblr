json.extract!(f, :id, :name, :price, :image_url, :restaurant_id)

json.restaurant (f.restaurant)

categories = f.categories.pluck(:name)
json.categories categories.empty? ? ["(pending)"] : categories

json.likes(f.likes) do |like|
  json.id like.id
  json.user_id like.user_id
  json.username like.user.username
end
# json.likes f.number_likes
# json.liked f.is_liked?(@id)
