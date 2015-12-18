(function (root) {
  'use strict';

  var FadeOut = root.FadeOut = React.createClass({
    getDefaultProps: function () {
      return { delay: 1000 };
    },

    getInitialState: function () {
      return { visible: true };
    },

    componentDidMount: function () {
      this.setTimer();
    },

    componentWillReceiveProps: function (nextProps) {
      if (nextProps.children !== this.props.children) {
        this.setTimer();
        this.setState({ visible: true });
      }
    },

    setTimer: function () {
      // clear any existing timers
      if (this._timer !== null) {
        clearTimeout(this._timer);
      }

      // hide after delay
      this._timer = setTimeout(function() {
        this.setState({ visible: false });
        this._timer = null;
      }.bind(this), this.props.delay);
    },

    render: function () {
      return(
        this.state.visible ?
        <div>{this.props.children}</div> : <span />
      );
    }
  });
})(this);
