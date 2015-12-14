(function (root) {
  'use strict';

  var ReviewActions = root.ReviewActions = {
    addReview: function (review) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEW_RECEIVED,
        review: review
      });
    },
    
    receiveReviews: function (reviews) {
      AppDispatcher.dispatch({
        actionType: ReviewConstants.REVIEWS_RECEIVED,
        reviews: reviews
      });
    }
  };
})(this);
