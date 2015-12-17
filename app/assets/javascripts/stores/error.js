(function (root) {
  'use strict';

  var _errors = [],
      ERRORS_CHANGED = "ERRORS_CHANGED";

  var _resetErrors = function(errors) {
    _errors = errors;
  };

  var ErrorStore = root.ErrorStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _errors;
    },

    addChangeListener: function(callback) {
      this.on(ERRORS_CHANGED, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(ERRORS_CHANGED, callback);
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ErrorConstants.ERRORS_RECEIVED:
          _resetErrors(payload.errors);
          ErrorStore.emit(ERRORS_CHANGED);
          break;
      }
    })
  });
})(this);
