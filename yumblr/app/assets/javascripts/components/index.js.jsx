window.Index = React.createClass({
  render: function () {
    return(
      <div>
        <div className="restaurant-index">
          <RestaurantIndex />
        </div>

        {this.props.children}
      </div>
    );
  }
});
