(function(root){
  'use strict';

  function _getLocation(){
    return ParamsStore.params().location;
  }

  var FoodItemDetail = root.FoodItemDetail = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({
        location: _getLocation(),
        showRestaurantModal: false,
        showReviewModal: false,
        rating: 0,
        reviewCount: 0
      });
    },

    componentDidMount: function() {
      ParamsStore.addParamsListener(this._onChange);
      ReviewStore.addChangeListener(this._onRatingChange);

      ReviewApiUtil.fetchAllReviews(this.props.item.id);
    },

    componentWillUnmount: function() {
      ParamsStore.removeParamsListener(this._onChange);
      ReviewStore.removeChangeListener(this._onRatingChange);
    },

    _onChange: function(){
      this.setState({ location: _getLocation() });
    },

    _onRatingChange: function(){
      this.setState({
        rating: ReviewStore.averageScore(),
        reviewCount: ReviewStore.reviewCount()
      });
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
    },

    toggleRestaurantModal: function() {
      this.setState({ showRestaurantModal: !this.state.showRestaurantModal });
    },

    toggleReviewModal: function() {
      this.setState({ showReviewModal: !this.state.showReviewModal });
    },

    renderRestaurantModal: function() {
      return (
        <RestaurantModal
          show={this.state.showRestaurantModal}
          onHide={this.toggleRestaurantModal}
          restaurant={this.props.item.restaurant}
        />
      );
    },

    renderReviewModal: function() {
      return (
        <Review
          show={this.state.showReviewModal}
          onHide={this.toggleReviewModal}
          foodItem={this.props.item}
          rating={this.state.rating}
        />
      );
    },

    render: function() {
      return (
          <div className="food-item-detail">
            <span className="food-item-restaurant" onClick={this.toggleRestaurantModal}>
              {this.props.item.restaurant.name}
            </span>
              {this.renderRestaurantModal()}
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
            <span className="food-item-rating" onClick={this.toggleReviewModal}>
              <Rating
                rating={this.state.rating}
                readOnly={true}
                reviewCount={this.state.reviewCount}
              />
            </span>
              {this.renderReviewModal()}
          </div>
      );
    }
  });
})(this);
              // {this.props.item.restaurant.distance(this.state.location, 1)}
