(function(root){
  'use strict';

  var _filteredFoodItems = [];
  var _filteredFoodItem;
  var _foodIds = [];
  var INITIALIZE_EVENT = "initialize";
  var CHANGE_EVENT = "change";
  var REFRESH_EVENT = "refresh";
  var i = 0;

  var addRecommendedFoodItems = function(foodItems) {
    for (var i = 0; i < foodItems.length; i++) {
      if (_foodIds.indexOf(foodItems[i].id) === -1) {
        _foodIds.push(foodItems[i].id);
        _filteredFoodItems.push(foodItems[i]);
      }
    }
  };

  var resetFilteredFoodItems = function(foodItems) {
    _filteredFoodItems = foodItems;
    i = 0;
  };

  var resetFilteredFoodItem = function(foodItem) {
    _filteredFoodItem = foodItem;
    _filteredFoodItems = [foodItem];
    _foodIds = [foodItem.id];
  };

  var FilteredFoodItemStore = root.FilteredFoodItemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _filteredFoodItems.slice();
    },

    current: function() {
      return _filteredFoodItem;
    },

    fillPercentage: function (id) {
      for (var i = 0; i < _filteredFoodItems.length; i++) {
        if (_filteredFoodItems[i].id === id) {
          return ((i + 1) / _filteredFoodItems.length)*100;
        }
      }
    },

    find: function (id) {
      var foodItem;
      _filteredFoodItems.forEach(function(f) {
        if(f.id === id) { foodItem = f; }
      });

      return foodItem;
    },

    next: function () {
      var currentFoodId = parseInt(window.location.hash.match(/\d+/)[0]);
      if (_filteredFoodItems.length > 1 && currentFoodId === _foodIds[0]) {
        i = 1;
      }
      if (i + 1 > _filteredFoodItems.length) {
        i = 0;
      }
      var result = _filteredFoodItems[i];
      _filteredFoodItem = _filteredFoodItems[i];
      i++;

      return result;
    },

    numResults: function () {
      return _filteredFoodItems.size;
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
        case FilterConstants.RECOMMENDED_FOOD_ITEMS_RECEIVED:
          addRecommendedFoodItems(payload.recommendedFoodItems);
          break;
      }
    })
  });
})(this);
