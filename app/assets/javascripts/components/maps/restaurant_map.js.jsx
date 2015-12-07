(function (root) {
  'use strict';

  var RestaurantMap = root.RestaurantMap = React.createClass({
    componentDidMount: function () {
      var map = React.findDOMNode(this.refs.map),
          mapCenter = new google.maps.LatLng(
            this.props.restaurantLat,
            this.props.restaurantLng
          ),
          mapOptions = {
            center: mapCenter,
            zoom: 15
          };

      this.map = new google.maps.Map(map, mapOptions);
      this.marker = new google.maps.Marker({
        position: mapCenter,
        map: this.map
      });
    },

    componentWillReceiveProps: function(newProps) {
      var mapCenter = new google.maps.LatLng(
        newProps.restaurantLat,
        newProps.restaurantLng
      );
      this.map.setCenter(mapCenter);
      this.marker.setPosition(mapCenter);
    },

    render: function () {
      return(
        <div className="map-container" ref="map">
        </div>
      );
    }
  });
})(this);
