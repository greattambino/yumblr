(function(root) {
  'use strict';

  var ReviewApiUtil = root.ReviewApiUtil = {
    createReview: function(foodItemId, review) {
      $.ajax({
        url: '/api/reviews/',
        type: 'POST',
        dataType: 'json',
        data: { review: review },
        success: function(review) {
          ReviewActions.addReview(foodItemId, review);
        },
        error: function(errors) {
          ApiActions.receiveErrors(errors.responseJSON);
        }
      });
    },

    fetchAllReviews: function(foodItemId) {
      $.ajax({
        url: '/api/reviews',
        type: 'GET',
        dataType: 'json',
        data: { food_item_id: foodItemId },
        success: function(reviews) {
          ReviewActions.receiveReviews(foodItemId, reviews);
        },
        error: function(errors) {
          ApiActions.receiveErrors(errors.responseJSON);
        }
      });
    }
  };
}(this));
