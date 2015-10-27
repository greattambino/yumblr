(function(root) {
  'use strict';

  var SessionUtil = root.SessionUtil = {
    signOutUser: function() {
      $.ajax({
        url: "session",
        type: "delete",
        success: function(resp) {
          window.location = "/";
        }
      });
    }
  };
}(this));
