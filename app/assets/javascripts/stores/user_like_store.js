(function (root) {
  'use strict';

  var _userLikes = {},
      _defaultLike = {
        id: -1,
        likable_type: "FoodItem",
        likable_id: -1
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  var _addUserLike = function (userId, like) {
        if (typeof _userLikes[userId] === "undefined") {
          _userLikes[userId] = [like];
        } else {
          _userLikes[userId].push(like);
        }
      },

      _removeUserLike = function (like) {
        var userId = like.user_id,
            len, i;

        if (typeof _userLikes[userId] !== "undefined") {
          for (i = 0, len = _userLikes[userId].length; i < len; i++) {
            if (_userLikes[userId][i].id === like.id) {
              _userLikes[userId].splice(i, 1);
              UserLikeStore.emit(CHANGE_EVENT);
              return;
            }
          }
        }
      },

      _resetUserLikes = function (userId, likes) {
        _userLikes[userId] = likes;
      };

  var UserLikeStore = root.UserLikeStore = $.extend({}, EventEmitter.prototype,{
    all: function () {
      return _userLikes;
    },

    findLikes: function (userId) {
      if (typeof _userLikes[userId] === "undefined") {
        return [_defaultLike];
      } else {
        return _userLikes[userId];
      }
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    hasUserLikes: function (userId) {
      return typeof _userLikes[userId] !== "undefined";
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case LikeConstants.USER_LIKES_RECEIVED:
          _resetUserLikes(payload.userId, payload.likes);
          UserLikeStore.emit(CHANGE_EVENT);
          break;
        case LikeConstants.LIKE_CREATED:
          _addUserLike(payload.userId, payload.like);
          UserLikeStore.emit(CHANGE_EVENT);
          break;
        case LikeConstants.LIKE_DESTROYED:
          _removeUserLike(payload.like);
          break;
      }
    })
  });
})(this);
