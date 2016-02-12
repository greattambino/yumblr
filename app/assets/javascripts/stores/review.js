(function (root) {
  'use strict';

  var _reviews = {},
      CHANGE_EVENT = "CHANGE_EVENT",
      CREATE_EVENT = "CREATE_EVENT",
      DESTROY_EVENT = "DESTROY_EVENT";

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
      _deleteReview = function (reviewId, foodItemId, oldRating) {
        var len, i;

        for (i = 0, len = _reviews[foodItemId].length; i < len; i++) {
          if (_reviews[foodItemId][i].id === reviewId) {
            _reviews[foodItemId].splice(i, 1);
            _reviews[foodItemId].totalRating -= oldRating;
            return;
          }
        }
      },
      _updateReview = function (reviewId, foodItemId, body, rating, oldRating) {
        var len, i;

        for (i = 0, len = _reviews[foodItemId].length; i < len; i++) {
          if (_reviews[foodItemId][i].id === reviewId) {
            _reviews[foodItemId][i].body = body;
            _reviews[foodItemId][i].rating = rating;
            _reviews[foodItemId].totalRating += (rating - oldRating);
            return;
          }
        }
      };

  var ReviewStore = root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    reviews: function (foodItemId) {
      return _reviews[foodItemId] ? _reviews[foodItemId].slice() : [];
    },

    averageScore: function (foodItemId) {
      if (typeof foodItemId !== "undefined") {
        if (typeof _reviews[foodItemId] !== "undefined") {
          return (_reviews[foodItemId].totalRating / _reviews[foodItemId].length);
        } else {
          return 0.00;
        }
      }
    },

    currentUserHasReviewed: function (currentUser, foodItemId) {
      var review, len, i;
      if (currentUser.id !== -1) {
        for (i = 0, len = currentUser.reviews.length; i < len; i++) {
          review = currentUser.reviews[i];
          if (review.food_item_id === foodItemId) {
            return true;
          }
        }
        return false;
      }
    },

    reviewCount: function (foodItemId) {
      if (typeof foodItemId !== "undefined") {
        if (typeof _reviews[foodItemId] !== "undefined") {
          return _reviews[foodItemId].length;
        } else {
          return 0;
        }
      }
    },

    addChangeListener: function (callback) {
      this.addListener(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    addCreateListener: function (callback) {
      this.addListener(CREATE_EVENT, callback);
    },

    removeCreateListener: function (callback) {
      this.removeListener(CREATE_EVENT, callback);
    },

    addDestroyListener: function (callback) {
      this.addListener(DESTROY_EVENT, callback);
    },

    removeDestroyListener: function (callback) {
      this.removeListener(DESTROY_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case ReviewConstants.REVIEWS_RECEIVED:
          _updateReviews(payload.foodItemId, payload.reviews);
          ReviewStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.REVIEW_RECEIVED:
          _addReview(payload.foodItemId, payload.review);
          ReviewStore.emit(CREATE_EVENT);
          ReviewStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.REVIEW_DELETED:
          _deleteReview(
            payload.reviewId,
            payload.foodItemId,
            payload.oldRating
          );
          ReviewStore.emit(DESTROY_EVENT);
          ReviewStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.REVIEW_UPDATED:
          _updateReview(
            payload.reviewId,
            payload.foodItemId,
            payload.body,
            payload.rating,
            payload.oldRating
          );
          ReviewStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
