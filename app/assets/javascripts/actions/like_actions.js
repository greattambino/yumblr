(function (root) {
  'use strict';

  var LikeActions = root.LikeActions = {
    addLike: function (like) {
      AppDispatcher.dispatch({
        actionType: LikeConstants.LIKE_CREATED,
        userId: like.user_id,
        like: like
      });
    },
    removeLike: function (like) {
      AppDispatcher.dispatch({
        actionType: LikeConstants.LIKE_DESTROYED,
        userId: like.user_id,
        like: like
      });
    },
    receiveUserLikes: function (userId, likes) {
      AppDispatcher.dispatch({
        actionType: LikeConstants.USER_LIKES_RECEIVED,
        userId: userId,
        likes: likes
      });
    }
  };
})(this);
