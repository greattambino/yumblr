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
              &nbsp; &nbsp; &nbsp; ${this.props.item.price}
            </span>
          </div>

      );
    }
  });
})(this);
