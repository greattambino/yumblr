json.extract!(
  like, :id, :likable_id, :user_id
)

json.likable_type like.likable_type.downcase
json.foodItem like.likable.name
json.foodItemImage like.likable.image_url
json.restaurant like.likable.restaurant.name
