(function(root){
  'use strict';

  var _foodItems = [];
  var CHANGE_EVENT = "change";

  var resetFoodItems = function(foodItems){
    _foodItems = foodItems.slice();
  };

  var addFoodItem = function(foodItem){
    for(var i = 0; i < _foodItems.length; i++){
      if(_foodItems[i].id === foodItem.id){
        _foodItems[i] = foodItem;
        return;
      }
    }
    _foodItems.push(foodItem);
  };

  var FoodItemStore = root.FoodItemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _foodItems.slice();
    },

    find: function (id) {
      var foodItem;
      _foodItems.forEach(function(f) {
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
          resetFoodItems(payload.foodItems);
          FoodItemStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
