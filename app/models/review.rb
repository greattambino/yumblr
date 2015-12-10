class Review < ActiveRecord::Base
    validates :body, :rating, :user_id, :food_item_id, presence: true
    validates :user_id, uniqueness: {scope: :food_item_id}
    validates :rating, inclusion: {in: [1, 2, 3, 4, 5]}

    belongs_to :user
    belongs_to :food_item
end
