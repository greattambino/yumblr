(function(root){
  'use strict';

  var _filteredFoodItems = [];
  var QUERY_CHANGE_EVENT = "query_change";

  var resetFilteredFoodItems = function(foodItems) {
    _filteredFoodItems = foodItems.slice();
  };

  var FilteredFoodItemStore = root.FilteredFoodItemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _filteredFoodItems.slice();
    },

    next: function () {
      return _filteredFoodItems[0];
    },

    addChangeListener: function(callback) {
      this.on(QUERY_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(QUERY_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType){
        case FilteredFoodItemConstants.FILTERED_FOOD_ITEMS_RECEIVED:
          resetFilteredFoodItems(payload.filteredFoodItems);
          FilteredFoodItemStore.emit(QUERY_CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
