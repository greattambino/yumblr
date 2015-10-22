(function(root) {
  'use strict';

  var FilterActions = root.FilterActions = {
    updateRadius: function(radius) {
      AppDispatcher.dispatch({
        actionType: FilterConstants.RADIUS_RECEIVED,
        radius: radius
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
