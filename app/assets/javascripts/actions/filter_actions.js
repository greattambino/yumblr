(function(root) {
  'use strict';

  var FilterActions = root.FilterActions = {

    receiveCategorySearchResults: function(categorySearchResults) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.CATEGORY_SEARCH_RESULTS_RECEIVED,
        categorySearchResults: categorySearchResults
      });
    },

    receiveFilteredFoodItem: function(filteredFoodItem) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.FILTERED_FOOD_ITEM_RECEIVED,
        filteredFoodItem: filteredFoodItem
      });
    },

    receiveFilteredFoodItems: function(filteredFoodItems) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.FILTERED_FOOD_ITEMS_RECEIVED,
        filteredFoodItems: filteredFoodItems
      });
    },

    receiveLocation: function(location) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.LOCATION_RECEIVED,
        location: location
      });
    },

    receiveQueryResults: function(foodSearchResults) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.FOOD_SEARCH_RESULTS_RECEIVED,
        foodSearchResults: foodSearchResults
      });
    },

    receiveRadius: function(radius) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.RADIUS_RECEIVED,
        radius: radius
      });
    },

    receiveRecommendedFoodItems: function (recommendedFoodItems) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.RECOMMENDED_FOOD_ITEMS_RECEIVED,
        recommendedFoodItems: recommendedFoodItems
      });
    },

    receiveSingleFoodItem: function(foodItem) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.SINGLE_FOOD_ITEM_RECEIVED,
        foodItem: foodItem
      });
    }
  };
}(this));
