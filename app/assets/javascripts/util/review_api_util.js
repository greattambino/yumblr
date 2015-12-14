(function(root) {
  'use strict';

  var ReviewApiUtil = root.ReviewApiUtil = {
    createReview: function (review) {
      $.ajax({
        url: '/api/reviews/',
        type: 'POST',
        dataType: 'json',
        data: { review: review },
        success: function (review) {
          ReviewActions.addReview(review);
        },
        error: function (err) {
          console.log(err);
        }
      });
    },

    fetchAllReviews: function (foodItemId) {
      $.ajax({
        url: '/api/reviews',
        type: 'GET',
        dataType: 'json',
        data: { food_item_id: foodItemId },
        success: function (reviews) {
          ReviewActions.receiveReviews(reviews);
        },
        error: function (err) {
          console.log(err);
        }
      });
    }
  };
}(this));
