(function(root) {
  'use strict';

  var GenerateBtn = root.GenerateBtn = React.createClass({
    mixins: [ReactRouter.History],

    render: function () {
      return(
        <button className="btn btn-default btn-circle btn-lg">
          <span><img src="http://res.cloudinary.com/yumblr/image/upload/v1446014758/app/icon-small.png"/></span>
        </button>
      );
    }
  });
}(this));
