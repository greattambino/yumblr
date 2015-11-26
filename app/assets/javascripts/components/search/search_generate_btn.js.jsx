(function(root) {
  'use strict';
  var ButtonToolbar = ReactBootstrap.ButtonToolbar;
  var OverlayTrigger = ReactBootstrap.OverlayTrigger;
  var Tooltip = ReactBootstrap.Tooltip;

  var GenerateBtn = root.GenerateBtn = React.createClass({
    mixins: [ReactRouter.History],

    render: function () {
      var tooltip = (
        <Tooltip>Click to generate the next food item.</Tooltip>
      );
      return(
        <ButtonToolbar>
          <OverlayTrigger
            placement="bottom"
            overlay={tooltip}>
            <button className="btn btn-default btn-circle btn-lg generate-btn">
              <span><img src="http://res.cloudinary.com/yumblr/image/upload/v1448393942/app/yumblr-icon17.png"/></span>
            </button>
          </OverlayTrigger>
        </ButtonToolbar>
      );
    }
  });
}(this));
