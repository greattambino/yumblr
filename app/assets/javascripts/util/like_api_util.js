(function(root) {
  'use strict';

  var LikeApiUtil = root.LikeApiUtil = {
    createLike: function (likableType, likableId) {
      $.ajax({
        url: '/api/likes/',
        type: 'POST',
        dataType: 'json',
        data: {
          like: {
            likable_type: likableType,
            likable_id: likableId
          }
        },
        success: function (like) {
          LikeActions.addLike(like);
        }
      });
    },

    destroyLike: function (likableType, likableId) {
      $.ajax({
        url: "/api/likes/" + likableId,
        type: "DELETE",
        dataType: "json",
        data: {
          like: {
            likable_type: likableType,
            likable_id: likableId
          }
        },
        success: function (like) {
          LikeActions.removeLike(like);
        },
        error: function (err) {
          if (err.responseText === "Not logged in error") {
            window.location.assign("/sign_in");
          }
        }
      });
    },

    fetchUserLikes: function (userId) {
      $.ajax({
        url: "/api/user_likes",
        type: "GET",
        dataType: "json",
        data: {user_id: userId},
        success: function (likes) {
          LikeActions.receiveUserLikes(userId, likes);
        }
      });
    }
  };
}(this));
