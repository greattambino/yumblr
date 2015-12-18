(function (root) {
  'use strict';

  function _getErrors() {
    return ErrorStore.all();
  }

  var Errors = root.Errors = React.createClass({
    getInitialState: function () {
      return({ errors: _getErrors() });
    },

    componentDidMount: function () {
      ErrorStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      ErrorStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({ errors: _getErrors() });
    },

    render: function() {
      var errors;
      if (this.state.errors.length > 0) {
        errors = (
            <ul>
              {this.state.errors.map(function(error, i) {
                return(<li key={"error-" + i}>{error}</li>);
              }.bind(this))}
            </ul>
        );
      }
      return(
        <div className="errors-container">
          <FadeOut delay={5000}>{errors}</FadeOut>
        </div>
      );
    }
  });
})(this);
