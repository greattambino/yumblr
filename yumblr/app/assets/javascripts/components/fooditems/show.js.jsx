(function(root) {
  root.FoodItemShow = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function() {
      return ({
        foodItem: undefined
      });
    },

    componentDidMount: function() {
      this.setState({foodItem: FilteredFoodItemStore.find(parseInt(this.props.params.foodItemId))});
    },

    render: function() {
      var foodItem;
      if (typeof this.state.foodItem === "undefined") {
        foodItem = <div>Not Found</div>;
      } else {
        foodItem = <img src={this.state.foodItem.image_url} />;
      }
      return(
        <div className="food_item" id="bg">
          <h2>{foodItem}</h2>
        </div>
      );
    }
  });

}(this));
