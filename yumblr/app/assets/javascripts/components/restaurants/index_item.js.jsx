(function(root) {
  root.RestaurantIndexItem = React.createClass({
    mixins: [ReactRouter.History],

    showDetail: function () {
      this.history.pushState(null, '/restaurants/' + this.props.restaurant.id, {});
    },

    render: function() {
      return(
        <div id="bg">
          <li onClick={this.showDetail} className="restaurant-item">
            <p>{this.props.restaurant}</p>
            <img src="/assets/blue-plate-meatloaf.jpg" alt="" />
          </li>
        </div>
      );
    }
  });
}(this));
