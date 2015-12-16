(function(root) {
  'use strict';

  var _defaultUser = {
        id: -1,
        username: null,
        likes: []
      };

  var _users = _defaultUser,
      _user = _defaultUser,
      _currentUser = _defaultUser,
      _retrievedUsers = {},
      CHANGE_EVENT = "CHANGE_EVENT";

  var resetCurrentUser = function (user) {
    _currentUser = user;
  };

  var resetUser = function (user) {
    _user = user;
  };

  var UserStore = root.UserStore = $.extend({}, EventEmitter.prototype, {
    user: function () {
      return _user;
    },

    currentUser: function () {
      return _currentUser;
    },

    all: function () {
      return _retrievedUsers;
    },

    findUser: function (userId) {
      if (typeof _retrievedUsers[userId] === "undefined") {
        return _defaultUser;
      } else {
        return _retrievedUsers[userId];
      }
    },

    doesCurrentUserLike: function (likableType, likableId) {
      var like;
      for (var i = 0; i < _currentUser.likes.length; i++) {
        like = _currentUser.likes[i];
        if (like.likable_type === likableType &&
            like.likable_id === likableId) {
          return true;
        }
      }
      return false;
    },

    currentUserHasReviewed: function (foodItemId) {
      var review;
      if (_currentUser.id !== -1) {
        for (var i = 0; i < _currentUser.reviews.length; i++) {
          review = _currentUser.reviews[i];
          if (review.food_item_id === foodItemId) {
            return true;
          }
        }
        return false;
      }
    },


    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    storeUser: function (user) {
      _retrievedUsers[user.id] = user;
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch (payload.actionType) {
        case UserConstants.USER_RECEIVED:
          UserStore.storeUser(payload.user);
          resetUser(payload.user);
          UserStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.CURRENT_USER_RECEIVED:
          UserStore.storeUser(payload.user);
          resetCurrentUser(payload.user);
          UserStore.emit(CHANGE_EVENT);
          break;
        case UserConstants.SET_USER_SHOW:
          resetUser(payload.user);
          UserStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
