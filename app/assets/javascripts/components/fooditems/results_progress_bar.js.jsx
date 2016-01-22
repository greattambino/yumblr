(function (root) {
  'use strict';

  var ResultsProgressBar = root.ResultsProgressBar = React.createClass({
    getDefaultProps: function () {
      return { fill: "0%" };
    },

    render: function() {
      var fill = "100%";
      if (typeof this.props.fillPercentage !== "undefined") {
        fill = this.props.fillPercentage.toString() + "%";
      }

      return (
        <div className="results-progress">
    			<div className="results-progressbar">
    				<span style={{ width: fill }}></span>
    			</div>
    		</div>
      );
    }
  });
})(this);
