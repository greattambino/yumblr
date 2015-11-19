(function(root){
  'use strict';

  var _foodSearchResults = [];
  var _categorySearchResults = [];
  var _params = { radius: "99999999999",
                  location: { lat: 37.77493,
                              lng: -122.419416,
                              address: "San Francisco, CA 94103, USA"
                            }
                };
  var INITIALIZE_EVENT = "initialize";
  var QUERY_CHANGE_EVENT = "query_change";
  var PARAMS_CHANGE_EVENT = "params_change";

  var updateFoodResults = function(foodItems) {
    _foodSearchResults = foodItems.slice();
  };
  var updateCategoryResults = function(categories) {
    _categorySearchResults = categories.slice();
  };

  var ParamsStore = root.ParamsStore = $.extend({}, EventEmitter.prototype, {
    params: function(){
      return $.extend({}, _params);
    },

    foodSearchResults: function() {
      return _foodSearchResults.slice();
    },

    categorySearchResults: function() {
      return _categorySearchResults.slice();
    },

    addQueryListener: function(callback) {
      this.on(QUERY_CHANGE_EVENT, callback);
    },

    removeQueryListener: function(callback) {
      this.removeListener(QUERY_CHANGE_EVENT, callback);
    },

    addParamsListener: function(callback) {
      this.on(PARAMS_CHANGE_EVENT, callback);
    },

    removeParamsListener: function(callback){
      this.removeListener(PARAMS_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType){
        case FoodItemConstants.FOOD_ITEMS_RECEIVED:
          updateFoodResults(payload.foodItems);
          ParamsStore.emit(INITIALIZE_EVENT);
          break;
        case FilterConstants.RADIUS_RECEIVED:
          _params.radius = payload.radius;
          ParamsStore.emit(PARAMS_CHANGE_EVENT);
          break;
        case FilterConstants.LOCATION_RECEIVED:
          _params.location = payload.location;
          ParamsStore.emit(PARAMS_CHANGE_EVENT);
          break;
        case FilterConstants.FOOD_SEARCH_RESULTS_RECEIVED:
          updateFoodResults(payload.foodSearchResults);
          ParamsStore.emit(QUERY_CHANGE_EVENT);
          break;
        case FilterConstants.CATEGORY_SEARCH_RESULTS_RECEIVED:
          updateCategoryResults(payload.categorySearchResults);
          ParamsStore.emit(QUERY_CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
