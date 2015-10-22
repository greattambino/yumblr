(function(root){
  'use strict';

  var FoodItemDetail = root.FoodItemDetail = React.createClass({
    mixins: [ReactRouter.History],

    handleClick: function(e) {
      e.preventDefault();
      // ApiUtil.fetchSingleRestaurant(this.props.item.restaurant.id);
    },

    render: function() {
      return (

          <div className="food-item-detail">
            <span className="food-item-restaurant" onClick={this.handleClick}>
              {this.props.item.restaurant.name}
            </span>
            <br/>
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
              {this.props.item.restaurant.distance}
            </span>
          </div>

      );
    }
  });
})(this);
