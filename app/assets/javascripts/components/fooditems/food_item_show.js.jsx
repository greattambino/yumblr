(function(root) {
  'use strict';

  var FoodItemShow = root.FoodItemShow = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return ({
        foodItem: this.getFoodItem(this.props.params.foodItemId),
        fillPercentage: this.getFillPercentage(this.props.params.foodItemId)
      });
    },

    componentDidMount: function() {
      FilteredFoodItemStore.addChangeListener(this._onChange);
    },

    componentWillMount: function () {
      if (FilteredFoodItemStore.all().length === 0) {
        this._fetchFoodItem(this.props.params.foodItemId);
      }
    },

    componentWillReceiveProps: function (newProps) {
      this.setState({
        foodItem: this.getFoodItem(newProps.params.foodItemId),
        fillPercentage: this.getFillPercentage(newProps.params.foodItemId)
      });
    },

    componentWillUnmount: function () {
      FilteredFoodItemStore.removeChangeListener(this._onChange);
    },

    _fetchFoodItem: function (id) {
      ApiUtil.fetchFilteredFoodItem(id);
    },

    getFillPercentage: function(id){
      return FilteredFoodItemStore.fillPercentage(parseInt(id));
    },

    getFoodItem: function(id){
      return FilteredFoodItemStore.find(parseInt(id));
    },

    _onChange: function () {
      this.setState({
        foodItem: this.getFoodItem(this.props.params.foodItemId),
        fillPercentage: this.getFillPercentage(this.props.params.foodItemId)
      });
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
        likeBtn = <LikeBtn
                    likableType="FoodItem"
                    likableId={this.state.foodItem.id}
                    numLikes={this.state.foodItem.num_likes} />;
      }
      return(
        <div className="food_item" id="bg">
          <h2>{foodItem}</h2>
          {foodItemDetail}
          <div className="food-item-like-btn">
            {likeBtn}
          </div>
          <ResultsProgressBar fillPercentage={this.state.fillPercentage} />
        </div>
      );
    }
  });
}(this));
