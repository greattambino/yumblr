(function(root){
  'use strict';

  var _filteredFoodItems = [];
  var _filteredFoodItem;
  var _foodIds = [];
  var INITIALIZE_EVENT = "initialize";
  var CHANGE_EVENT = "change";
  var REFRESH_EVENT = "refresh";
  var index = 0;

  var addRecommendedFoodItems = function(foodItems) {
    for (var i = 0; i < foodItems.length; i++) {
      if (_foodIds.indexOf(foodItems[i].id) === -1) {
        _foodIds.push(foodItems[i].id);
        _filteredFoodItems.push(foodItems[i]);
      }
    }
  };

  var addSingleFoodItem = function(foodItem) {
    _filteredFoodItem = foodItem;
    _filteredFoodItems = [foodItem];
    _foodIds = [foodItem.id];
  };

  var resetFilteredFoodItem = function(foodItem) {
    _filteredFoodItem = foodItem;
    if (_filteredFoodItems.length === 0) {
      _filteredFoodItems = [foodItem];
      _foodIds = [foodItem.id];
    }
  };

  var resetFilteredFoodItems = function(foodItems) {
    _filteredFoodItems = foodItems;
    _foodIds = [];
    for (var i = 0; i < foodItems.length; i++) {
      _foodIds.push(foodItems[i].id);
    }
    index = 0;
  };

  var FilteredFoodItemStore = root.FilteredFoodItemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _filteredFoodItems.slice();
    },

    current: function() {
      return _filteredFoodItem;
    },

    fillPercentage: function (id) {
      for (var j = 0; j < _filteredFoodItems.length; j++) {
        if (_filteredFoodItems[j].id === id) {
          return ((j + 1) / _filteredFoodItems.length)*100;
        }
      }
    },

    find: function (id) {
      var foodItem;
      _filteredFoodItems.forEach(function(f) {
        if (f.id === id) { foodItem = f; }
      });

      return foodItem;
    },

    next: function () {
      var currentFoodId,
          resultsLength = _filteredFoodItems.length;

      if (window.location.hash.match(/food_items/)) {
        currentFoodId = parseInt(window.location.hash.match(/\d+/)[0]);
        if (resultsLength > 1 && currentFoodId === _foodIds[0]) { index = 1; }
      }
      if (index + 1 > resultsLength) { index = 0; }
      var result = _filteredFoodItems[index];
      _filteredFoodItem = result;
      if (resultsLength > 1) { index++; }

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
          FilteredFoodItemStore.emit(CHANGE_EVENT);
          break;
        case FilterConstants.RECOMMENDED_FOOD_ITEMS_RECEIVED:
          addRecommendedFoodItems(payload.recommendedFoodItems);
          break;
        case FilterConstants.SINGLE_FOOD_ITEM_RECEIVED:
          addSingleFoodItem(payload.foodItem);
          FilteredFoodItemStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
