(function(root){
  'use strict';

  var _restaurants = [];
  var CHANGE_EVENT = "change";

  var resetRestaurants = function(restaurants){
    _restaurants = restaurants.slice();
  };

  var addRestaurant = function(restaurant){
    for(var i = 0; i < _restaurants.length; i++){
      if(_restaurants[i].id === restaurant.id){
        _restaurants[i] = restaurant;
        return;
      }
    }
    _restaurants.push(restaurant);
  };

  var RestaurantStore = root.RestaurantStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _restaurants.slice();
    },

    find: function (id) {
      var restaurant;
      _restaurants.forEach(function(r) {
        if(r.id === id) { restaurant = r; }
      });

      return restaurant;
    },

    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType){
        case RestaurantConstants.RESTAURANTS_RECEIVED:
          resetRestaurants(payload.restaurants);
          RestaurantStore.emit(CHANGE_EVENT);
          break;
        case RestaurantConstants.RESTAURANT_RECEIVED:
          addRestaurant(payload.restaurant);
          RestaurantStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
