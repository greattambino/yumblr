(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;

  var RestaurantModal = root.RestaurantModal = React.createClass({
    render: function () {
      var address      = this.props.restaurant.address,
          city         = this.props.restaurant.city,
          state        = this.props.restaurant.state,
          zip_code     = this.props.restaurant.zip_code,
          phone_number = this.props.restaurant.phone_number,
          url          = this.props.restaurant.url,
          description  = this.props.restaurant.description;
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
              <div className="restaurant-modal-details">
                <span className="glyphicon glyphicon-map-marker"></span>
                  &nbsp; {address}, {city}, {state} {zip_code}<br/>
                <span className="glyphicon glyphicon-earphone"></span>
                  &nbsp;&nbsp; {phone_number}<br/>
                <span className="glyphicon glyphicon-link"></span>
                  &nbsp;&nbsp; <a href={url} target="_blank">{url}</a>
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
