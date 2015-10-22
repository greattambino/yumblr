(function(root){
  'use strict';

  var _filteredFoodItems = [];
  // var _currentFoodItem = {};
  var _params = { radius: "99999999999"
                };

  var CHANGE_EVENT = "change";
  var INITIALIZE_EVENT = "initialize";
  var i = 0;

  var resetFilteredFoodItems = function(foodItems) {
    _filteredFoodItems = foodItems.slice();
    i = 0;
  };

  var FilteredFoodItemStore = root.FilteredFoodItemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _filteredFoodItems.slice();
    },

    params: function(){
      return $.extend({}, _params);
    },

    // getLocation: function(){
    //   return this.params.location;
    // },

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

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
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
        case FilterConstants.RADIUS_RECEIVED:
          _params.radius = payload.radius;
          FilteredFoodItemStore.emit(CHANGE_EVENT);
          break;
      }
        // case FilteredFoodItemConstants.FILTERED_FOOD_ITEM_RECEIVED:
        //   resetFilteredFoodItems(payload.filteredFoodItem);
        //   FilteredFoodItemStore.emit(QUERY_CHANGE_EVENT);
        //   break;
    })
  });
})(this);
