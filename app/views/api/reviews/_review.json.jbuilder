json.extract!(
  review, :id, :body, :rating, :user_id, :food_item_id, :created_at
)

json.author review.user
