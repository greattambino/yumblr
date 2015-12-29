(function (root) {
  'use strict';

  var _reviews = {},
      CHANGE_EVENT = "CHANGE_EVENT";

  var _updateReviews = function (foodItemId, reviews) {
        _reviews[foodItemId] = reviews;
        var total = 0;
        reviews.map(function(review) {
          total += review.rating;
        });
        _reviews[foodItemId].totalRating = total;
      },
      _addReview = function (foodItemId, review) {
        if (_reviews[foodItemId] && _reviews[foodItemId].length > 0) {
          _reviews[foodItemId].push(review);
          _reviews[foodItemId].totalRating += review.rating;
        } else {
          _reviews[foodItemId] = [review];
          _reviews[foodItemId].totalRating = review.rating;
        }
      },
      _updateReview = function (reviewId, foodItemId, body, rating) {
        for(var i = 0; i < _reviews[foodItemId].length; i++){
          if(_reviews[foodItemId][i].id === reviewId){
            _reviews[foodItemId][i].body = body;
            _reviews[foodItemId][i].rating = rating;
            return;
          }
        }
      };

  var ReviewStore = root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    reviews: function (foodItemId) {
      return _reviews[foodItemId] ? _reviews[foodItemId].slice() : [];
    },

    averageScore: function (foodItemId) {
      return (_reviews[foodItemId].totalRating / _reviews[foodItemId].length) || 0.00;
    },

    reviewCount: function (foodItemId) {
      return _reviews[foodItemId].length || 0;
    },

    addChangeListener: function (callback) {
      this.addListener(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case ReviewConstants.REVIEWS_RECEIVED:
          _updateReviews(payload.foodItemId, payload.reviews);
          ReviewStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.REVIEW_RECEIVED:
          _addReview(payload.foodItemId, payload.review);
          ReviewStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.REVIEW_UPDATED:
          _updateReview(
            payload.reviewId,
            payload.foodItemId,
            payload.body,
            payload.rating
          );
          ReviewStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
