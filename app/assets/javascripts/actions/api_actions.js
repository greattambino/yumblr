(function(root) {
  'use strict';

  var ApiActions = root.ApiActions = {
    receiveAllFoodItems: function(foodItems) {
      AppDispatcher.dispatch({
        actionType: FoodItemConstants.FOOD_ITEMS_RECEIVED,
        foodItems: foodItems
      });
    },

    receiveAllRestaurants: function(restaurants) {
      AppDispatcher.dispatch({
        actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
        restaurants: restaurants
      });
    },

    receiveCuisines: function(cuisines) {
      AppDispatcher.dispatch({
        actionType: CuisineConstants.CUISINES_RECEIVED,
        cuisines: cuisines
      });
    },

    receiveCurrentUser: function (user) {
      AppDispatcher.dispatch({
        actionType: UserConstants.CURRENT_USER_RECEIVED,
        user: user
      });
    },

    receiveSingleRestaurant: function (restaurant) {
      AppDispatcher.dispatch({
        actionType: RestaurantConstants.RESTAURANT_RECEIVED,
        restaurant: restaurant
      });
    },

    receiveSingleUser: function (user) {
      AppDispatcher.dispatch({
        actionType: UserConstants.USER_RECEIVED,
        user: user
      });
    },

    updateUserShow: function (user) {
      AppDispatcher.dispatch({
        actionType: UserConstants.SET_USER_SHOW,
        user: user
      });
    }
  };
}(this));
