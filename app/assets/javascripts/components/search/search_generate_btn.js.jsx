(function(root) {
  'use strict';

  var GenerateBtn = root.GenerateBtn = React.createClass({
    mixins: [ReactRouter.History],

    render: function () {
      return(
        <button className="active myButton">
          <span className="glyphicon glyphicon-cutlery" aria-hidden="true"></span>
        </button>
      );
    }
  });
}(this));
