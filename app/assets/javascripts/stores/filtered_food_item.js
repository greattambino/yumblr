(function(root){
  'use strict';

  var _filteredFoodItems = [];
  // var _searchQueryResults = [];
  //
  // var _params = { radius: "99999999999",
  //                 location: { lat: 37.77493,
  //                             lng: -122.419416,
  //                             address: "San Francisco, CA 94103, USA"
  //                           }
  //               };

  var INITIALIZE_EVENT = "initialize";
  // var QUERY_CHANGE_EVENT = "query_change";
  // var PARAMS_CHANGE_EVENT = "params_change";
  var CHANGE_EVENT = "change";
  var i = 0;

  var resetFilteredFoodItems = function(foodItems) {
    _filteredFoodItems = foodItems.slice();
    i = 0;
  };

  // var resetQueryResults = function(foodItems) {
  //   _searchQueryResults = foodItems.slice();
  // };

  var FilteredFoodItemStore = root.FilteredFoodItemStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _filteredFoodItems.slice();
    },

    // queryResults: function() {
    //   return _searchQueryResults.slice();
    // },
    //
    // params: function(){
    //   return $.extend({}, _params);
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

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    // addQueryListener: function(callback) {
    //   this.on(QUERY_CHANGE_EVENT, callback);
    // },
    //
    // addParamsListener: function(callback) {
    //   this.on(PARAMS_CHANGE_EVENT, callback);
    // },
    //
    // removeParamsListener: function(callback){
    //   this.removeListener(PARAMS_CHANGE_EVENT, callback);
    // },
    //
    // removeQueryListener: function(callback) {
    //   this.removeListener(QUERY_CHANGE_EVENT, callback);
    // },

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
        // case FilterConstants.RADIUS_RECEIVED:
        //   _params.radius = payload.radius;
        //   // FilteredFoodItemStore.emit(CHANGE_EVENT);
        //   break;
        // case FilterConstants.LOCATION_RECEIVED:
        //   _params.location = payload.location;
        //   FilteredFoodItemStore.emit(PARAMS_CHANGE_EVENT);
        //   break;
        // case FilterConstants.QUERY_RECEIVED:
        //   resetQueryResults(payload.queryResults);
        //   FilteredFoodItemStore.emit(QUERY_CHANGE_EVENT);
        //   break;
      }
        // case FilteredFoodItemConstants.FILTERED_FOOD_ITEM_RECEIVED:
        //   resetFilteredFoodItems(payload.filteredFoodItem);
        //   FilteredFoodItemStore.emit(QUERY_CHANGE_EVENT);
        //   break;
    })
  });
})(this);
