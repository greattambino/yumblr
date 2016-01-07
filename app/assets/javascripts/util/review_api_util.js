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
          if (errors.responseText === "Please log in or sign up first") {
            ApiActions.receiveErrors(["Please log in or sign up to review"]);
          } else {
            ApiActions.receiveErrors(errors.responseJSON);
          }
        }
      });
    },

    deleteReview: function (reviewId, foodItemId, oldRating) {
      $.ajax({
        url: '/api/reviews/' + reviewId,
        type: 'DELETE',
        dataType: 'json',
        data: { review: { id: reviewId } },
        success: function() {
          ReviewActions.deleteReview(reviewId, foodItemId, oldRating);
        },
        error: function(errors) {
          console.log(errors);
        }
      });
    },

    updateReview: function(reviewId, body, rating, foodItemId, oldRating) {
      $.ajax({
        url: '/api/reviews/' + reviewId,
        type: 'PATCH',
        dataType: 'json',
        data: {
          review: {
            id: reviewId,
            body: body,
            rating: rating
          }
        },
        success: function(review) {
          ReviewActions.updateReview(reviewId, foodItemId, body, rating, oldRating);
        },
        error: function(errors) {
          console.log(errors);
          if (errors.responseText === "Please log in or sign up first") {
            ApiActions.receiveErrors(["Please log in or sign up to review"]);
          } else {
            ApiActions.receiveErrors(errors.responseJSON);
          }
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
