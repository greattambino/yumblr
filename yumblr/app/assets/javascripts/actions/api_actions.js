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
    },

    receiveAllFoodItems: function(foodItems) {
      AppDispatcher.dispatch({
        actionType: FoodItemConstants.FOOD_ITEMS_RECEIVED,
        foodItems: foodItems
      });
    },

    receiveFilteredFoodItems: function(filteredFoodItems) {
      AppDispatcher.dispatch({
        actionType: FilteredFoodItemConstants.FILTERED_FOOD_ITEMS_RECEIVED,
        filteredFoodItems: filteredFoodItems
      });
    },

    receiveFilteredFoodItem: function(filteredFoodItem) {
      AppDispatcher.dispatch({
        actionType: FilteredFoodItemConstants.FILTERED_FOOD_ITEM_RECEIVED,
        filteredFoodItem: filteredFoodItem
      });
    },

    receiveCuisines: function(cuisines) {
      AppDispatcher.dispatch({
        actionType: CuisineConstants.CUISINES_RECEIVED,
        cuisines: cuisines
      });
    }

    // receiveFilteredFoodItemId: function(filteredFoodItem) {
    //   AppDispatcher.dispatch({
    //     actionType: FilteredFoodItemConstants.FILTERED_FOOD_ITEM_ID_RECEIVED,
    //     filteredFoodItemId: filteredFoodItemId
    //   });
    // }

  };
}(this));
