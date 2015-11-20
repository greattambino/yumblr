(function(root){
  'use strict';

  var _filteredFoodItems = [];
  var _filteredFoodItem;
  var INITIALIZE_EVENT = "initialize";
  var CHANGE_EVENT = "change";
  var REFRESH_EVENT = "refresh";
  var i = 0;

  var resetFilteredFoodItems = function(foodItems) {
    _filteredFoodItems = foodItems;
    i = 0;
  };

  var resetFilteredFoodItem = function(foodItem) {
    _filteredFoodItem = foodItem;
  };

  var FilteredFoodItemStore = root.FilteredFoodItemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _filteredFoodItems.slice();
    },

    current: function() {
      return _filteredFoodItem;
    },

    next: function () {
      if (i + 1 > _filteredFoodItems.length) { i = 0; }
      // var result = _currentFoodItem;
      var result = _filteredFoodItems[i];
      i++;

      return result;
    },

    find: function (id) {
      var foodItem;
      _filteredFoodItems.forEach(function(f) {
        if(f.id === id) { foodItem = f; }
      });

      return foodItem;
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    addRefreshListener: function(callback) {
      this.on(REFRESH_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    removeRefreshListener: function(callback) {
      this.removeListener(REFRESH_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType){
        case FoodItemConstants.FOOD_ITEMS_RECEIVED:
          resetFilteredFoodItems(payload.foodItems);
          FilteredFoodItemStore.emit(INITIALIZE_EVENT);
          break;
        case FilterConstants.FILTERED_FOOD_ITEMS_RECEIVED:
          resetFilteredFoodItems(payload.filteredFoodItems);
          FilteredFoodItemStore.emit(CHANGE_EVENT);
          break;
        case FilterConstants.FILTERED_FOOD_ITEM_RECEIVED:
          resetFilteredFoodItem(payload.filteredFoodItem);
          FilteredFoodItemStore.emit(REFRESH_EVENT);
          break;
      }
    })
  });
})(this);
