(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;

  var MapModal = root.MapModal = React.createClass({
    render: function () {
      return (
        <div id="restaurant-modal-container">
          <Modal
            show={this.props.show}
            onHide={this.props.onHide}
            container={this}
            aria-labelledby="contained-modal-title">
            <Modal.Header className="restaurant-modal-header" closeButton>
              <Modal.Title id="contained-modal-title">
                <span className="restaurant-modal-name">
                  {this.props.restaurant.name}
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body id="map-modal-content">
              <div id="map-container" >
                <RestaurantMap
                  restaurantLat={this.props.restaurant.lat}
                  restaurantLng={this.props.restaurant.lng}
                />
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
