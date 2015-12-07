(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;

  var Splash = root.Splash = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
      return { show: true };
    },

    hideModal: function () {
      this.setState({ show: false});
    },

    render: function () {
      return (
        <div className="modal-container" style={{height: 200}}>

          <Modal
            show={this.state.show}
            onHide={this.hideModal}
            onClick={this.hideModal}
            container={this}
            aria-labelledby="contained-modal-title">

            <Modal.Body id="modal-content" onClick={this.hideModal}>
              <div id="splash-logo">
                <img alt="" src="http://res.cloudinary.com/yumblr/image/upload/v1445982745/app/yumblr-full-logo1-white-shadow.png" />
              </div>
            </Modal.Body>

          </Modal>
        </div>
      );
    }
  });
})(this);
