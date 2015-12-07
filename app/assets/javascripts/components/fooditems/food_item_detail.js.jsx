(function(root){
  'use strict';

  function _getLocation(){
    return ParamsStore.params().location;
  }

  var FoodItemDetail = root.FoodItemDetail = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({ location: _getLocation(), showMapModal: false });
    },

    handleClick: function(e) {
      e.preventDefault();
      // ApiUtil.fetchSingleRestaurant(this.props.item.restaurant.id);
    },

    componentDidMount: function() {
      ParamsStore.addParamsListener(this._onChange);
    },

    componentWillUnmount: function() {
      ParamsStore.removeParamsListener(this._onChange);
    },

    _onChange: function(){
      this.setState({ location: _getLocation() });
    },

    calculateDistance: function() {
      var fromLat = this.state.location.lat,
          fromLng = this.state.location.lng,
          toLat   = this.props.item.restaurant.lat,
          toLng   = this.props.item.restaurant.lng;

      var location = new google.maps.LatLng(fromLat, fromLng);
      var destination = new google.maps.LatLng(toLat, toLng);

      var meters = google.maps.geometry.spherical.computeDistanceBetween(location, destination);
      var distance = (meters * 0.000621371192).toFixed(1);

      return distance;
      // ApiUtil.fetchSingleRestaurant(this.props.item.restaurant.id);
    },

    toggleModal: function() {
      this.setState({ showMapModal: !this.state.showMapModal });
    },

    mapModal: function() {
      return (
        <MapModal
          show={this.state.showMapModal}
          onHide={this.toggleModal}
          restaurant={this.props.item.restaurant}
        />
      );
    },

    render: function() {
      return (
          <div className="food-item-detail">
            <span className="food-item-restaurant" onClick={this.toggleModal}>
              {this.props.item.restaurant.name}
            </span>
              {this.mapModal()}
            <span className="food-item-name">
              {this.props.item.name}
            </span>
            <span className="food-item-price">
              ${this.props.item.price}
            </span>
            <br/>
            <span className="food-item-city">
              {this.props.item.restaurant.city}
            </span>
            <span className="food-item-distance">
              {this.calculateDistance()} Miles
            </span>
          </div>
      );
    }
  });
})(this);
              // {this.props.item.restaurant.distance(this.state.location, 1)}
