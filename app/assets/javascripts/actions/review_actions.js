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

    deleteReview: function(reviewId, foodItemId, oldRating) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEW_DELETED,
        reviewId: reviewId,
        foodItemId: foodItemId,
        oldRating: oldRating
      });
    },

    receiveReviews: function (foodItemId, reviews) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEWS_RECEIVED,
        reviews: reviews,
        foodItemId: foodItemId
      });
    },

    updateReview: function (reviewId, foodItemId, body, rating, oldRating) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEW_UPDATED,
        reviewId: reviewId,
        foodItemId: foodItemId,
        body: body,
        rating: rating,
        oldRating: oldRating
      });
    }
  };
})(this);
