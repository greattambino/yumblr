(function(root) {

  root.RestaurantIndex = React.createClass({
    getInitialState: function() {
      return {restaurants: RestaurantStore.all()};
    },

    _updateRestaurants: function() {
      this.setState({restaurants: RestaurantStore.all()});
    },

    componentDidMount: function() {
      RestaurantStore.addChangeListener(this._updateRestaurants);
      ApiUtil.fetchAllRestaurants();
    },

    compomentWillUnmount: function () {
      RestaurantStore.removeChangeListener(this._updateRestaurants);
    },

    render: function() {
      return(
        <div className="container">
          <div className="restaurant-index">
            <ul className="restaurants">
              {this.state.restaurants.map(function(restaurant) {
                return(
                  <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />
                );
              }) }
            </ul>
          </div>
        </div>
      );
    }
  });

}(this));
