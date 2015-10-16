var SessionUtil = {
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
