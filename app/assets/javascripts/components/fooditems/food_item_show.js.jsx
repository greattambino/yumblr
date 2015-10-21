(function(root) {
  'use strict';

  var FoodItemShow = root.FoodItemShow = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return ({
        foodItem: this.getFoodItem(this.props.params.foodItemId)
      });
    },

    getFoodItem: function(id){
      // return FilteredFoodItemStore.find(parseInt(this.props.params.foodItemId));
      return FilteredFoodItemStore.find(parseInt(id));
    },

    _fetchFoodItem: function (id) {
      ApiUtil.fetchFilteredFoodItem(id);
    },

    _onChange: function () {
      this.setState({foodItem: this.getFoodItem(this.props.params.foodItemId)});
    },

    componentDidMount: function() {
      FilteredFoodItemStore.addChangeListener(this._onChange);

      // this.setState({foodItem: FilteredFoodItemStore.find(parseInt(this.props.params.foodItemId))});
      this._fetchFoodItem(this.props.params.foodItemId);
    },

    componentWillReceiveProps: function (newProps) {
      // debugger
      // this._fetchFoodItem(newProps.params.foodItemId);
      // this._onChange();
      this.setState({foodItem: this.getFoodItem(newProps.params.foodItemId)});
    },

    componentWillUnmount: function () {
      FilteredFoodItemStore.removeChangeListener(this._onChange);
    },

    render: function() {
      // var foodItem = <img src={this.state.foodItem.image_url} />;
      var foodItem;
      if (typeof this.state.foodItem === "undefined") {
        foodItem = <div>Not Found</div>;
      } else {
        foodItem = <img src={this.state.foodItem.image_url} />;
      }
      return(
        <div className="food_item" id="bg">
          <h2>{foodItem}</h2>
          <FoodItemDetail item={this.state.foodItem} />
        </div>
      );
    }
  });
}(this));
