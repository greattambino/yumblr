(function(root) {
  'use strict';

  var FilterActions = root.FilterActions = {
    receiveRadius: function(radius) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.RADIUS_RECEIVED,
        radius: radius
      });
    },

    receiveLocation: function(location) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.LOCATION_RECEIVED,
        location: location
      });
    },

    receiveQueryResults: function(queryResults) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.QUERY_RECEIVED,
        queryResults: queryResults
      });
    },

    receiveFilteredFoodItems: function(filteredFoodItems) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.FILTERED_FOOD_ITEMS_RECEIVED,
        filteredFoodItems: filteredFoodItems
      });
    },

    receiveFilteredFoodItem: function(filteredFoodItem) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.FILTERED_FOOD_ITEM_RECEIVED,
        filteredFoodItem: filteredFoodItem
      });
    }
  };
}(this));
