(function (root) {
  'use strict';

  var _reviews = [],
      _totalRating = 0,
      CHANGE_EVENT = "CHANGE_EVENT";

  var _resetReviews = function (reviews) {
        _reviews = reviews.reviews;
        _totalRating = reviews.totalRating;
      },
      _addReview = function (review) {
        _reviews.push(review);
        _totalRating += review.rating;
      };


  var ReviewStore = root.ReviewStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _reviews;
    },

    averageScore: function () {
      return (_totalRating / _reviews.length);
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
          _resetReviews(payload.reviews);
          ReviewStore.emit(CHANGE_EVENT);
          break;
        case ReviewConstants.REVIEW_RECEIVED:
          _addReview(payload.review);
          ReviewStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
