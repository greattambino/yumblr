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

    _onRefresh: function () {
      this.setState({foodItem: FilteredFoodItemStore.current() });
    },

    componentDidMount: function() {
      FilteredFoodItemStore.addChangeListener(this._onChange);
      FilteredFoodItemStore.addRefreshListener(this._onChange);
      this._fetchFoodItem(this.props.params.foodItemId);
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({foodItem: this.getFoodItem(newProps.params.foodItemId)});
    },

    componentWillUnmount: function () {
      FilteredFoodItemStore.removeChangeListener(this._onChange);
      FilteredFoodItemStore.removeRefreshListener(this._onChange);
    },

    render: function() {
      var foodItem;
      var foodItemDetail;
      var likeBtn;
      if (typeof this.state.foodItem === "undefined") {
        foodItem = <div>Not Found</div>;
      } else {
        foodItem = <img src={this.state.foodItem.image_url} />;
        foodItemDetail = <FoodItemDetail item={this.state.foodItem} />;
        likeBtn = <LikeBtn likableType="FoodItem" likableId={this.state.foodItem.id} />;
      }
      return(
        <div className="food_item" id="bg">
          <h2>{foodItem}</h2>
          {foodItemDetail}
          <div className="food-item-like-btn">
            {likeBtn}
          </div>
        </div>
      );
    }
  });
}(this));
