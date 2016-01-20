(function (root) {
  'use strict';

  var ResultsProgressBar = root.ResultsProgressBar = React.createClass({
    getDefaultProps: function () {
      return { fill: "0%" };
    },

    render: function() {
      var fill = this.props.fillPercentage.toString() + "%";
      return (
        <div className="tile-progress">
    			<div className="tile-progressbar">
    				<span data-fill="65.5%" style={{ width: fill }}></span>
    			</div>
    		</div>
      );
    }
  });
})(this);
