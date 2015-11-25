(function(root) {
  'use strict';
  var ButtonToolbar = ReactBootstrap.ButtonToolbar;
  var OverlayTrigger = ReactBootstrap.OverlayTrigger;
  var Popover = ReactBootstrap.Popover;
  var GenerateBtn = root.GenerateBtn = React.createClass({
    mixins: [ReactRouter.History],

    render: function () {
      return(
        <ButtonToolbar>
          <OverlayTrigger
            placement="bottom"
            overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
            <button className="btn btn-default btn-circle btn-lg generate-btn">
              <span><img src="http://res.cloudinary.com/yumblr/image/upload/v1448393942/app/yumblr-icon17.png"/></span>
            </button>
          </OverlayTrigger>
        </ButtonToolbar>
      );
    }
  });
}(this));
