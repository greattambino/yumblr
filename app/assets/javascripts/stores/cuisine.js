(function(root){
  'use strict';

  var _cuisines = [];
  var CHANGE_EVENT = 'cuisine_change';

  var resetCuisines = function(cuisines) {
    _cuisines = cuisines;
  };

  var CuisineStore = root.CuisineStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _cuisines.slice();
    },

    find: function (id) {
      var cuisine;
      _cuisines.forEach(function(c) {
        if(c.id === id) { cuisine = c; }
      });
      return cuisine;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      if(payload.actionType === CuisineConstants.CUISINES_RECEIVED){
        resetCuisines(payload.cuisines);
        CuisineStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);
