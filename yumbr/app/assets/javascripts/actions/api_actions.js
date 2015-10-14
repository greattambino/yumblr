(function(root) {
  'use strict';

  var ApiActions = root.ApiActions = {
    receiveAllRestaurants: function(restaurants) {
      AppDispatcher.dispatch({
        actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
        restaurants: restaurants
      });
    },

    receiveSingleRestaurant: function (restaurant) {
      AppDispatcher.dispatch({
        actionType: RestaurantConstants.RESTAURANT_RECEIVED,
        restaurant: restaurant
      });
    }
  };
}(this));
