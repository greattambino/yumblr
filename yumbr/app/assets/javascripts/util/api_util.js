var ApiUtil = {
  fetchAllRestaurants: function() {
    $.ajax({
      url: "api/restaurants",
      success: function(restaurants) {
        ApiActions.receiveAllRestaurants(restaurants);
      }
    });
  },
  fetchSingleRestaurant: function(id) {
    $.ajax({
      url: "api/restaurants/" + id,
      success: function(restaurant) {
        ApiActions.receiveSingleRestaurant(restaurant);
      }
    });
  }
};
