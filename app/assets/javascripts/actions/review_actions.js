(function (root) {
  'use strict';

  var ReviewActions = root.ReviewActions = {
    addReview: function (foodItemId, review) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEW_RECEIVED,
        review: review,
        foodItemId: foodItemId

      });
    },

    receiveReviews: function (foodItemId, reviews) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEWS_RECEIVED,
        reviews: reviews,
        foodItemId: foodItemId
      });
    },

    updateReview: function (reviewId, foodItemId, body, rating) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEW_UPDATED,
        reviewId: reviewId,
        foodItemId: foodItemId,
        body: body,
        rating: rating
      });
    }
  };
})(this);
