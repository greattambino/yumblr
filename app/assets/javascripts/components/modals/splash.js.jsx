
(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;
  var Button = ReactBootstrap.Button;

  var Splash = root.Splash = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
      return { show: true };
    },

    render: function () {
      let close = () => this.setState({ show: false});

      return (
        <div className="modal-container" style={{height: 200}}>

          <Modal
            show={this.state.show}
            onHide={close}
            onClick={close}
            container={this}
            aria-labelledby="contained-modal-title">

            <Modal.Body id="modal-content" onClick={close}>
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

// <Modal.Header closeButton>
//   <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
// </Modal.Header>
// <Modal.Footer>
//   <Button onClick={close}>Close</Button>
// </Modal.Footer>
// <Button
//   bsStyle="primary"
//   bsSize="large"
//   onClick={() => this.setState({ show: true})}
// >
//   Launch contained modal
// </Button>
