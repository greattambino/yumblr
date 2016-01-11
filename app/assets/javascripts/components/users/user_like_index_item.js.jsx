(function (root) {
  'use strict';

  var Link = ReactRouter.Link;

  var UserLikeIndexItem = root.UserLikeIndexItem = React.createClass({
    getInitialState: function() {
      return({ showRestaurantModal: false });
    },

    deleteLike: function () {
      var likableType = "FoodItem",
          likableId = parseInt(this.props.like.likable_id),
          userId = this.props.like.user_id,
          confirmed = confirm(
            "Are you sure you want to remove this item from your Favorites list?"
          );

      if (confirmed) {
        LikeApiUtil.destroyLike(likableType, likableId);
      }
    },

    showRestaurantModal: function () {
      return(
        <RestaurantModal
          show={this.state.showRestaurantModal}
          onHide={this.toggleModal}
          restaurant={this.props.like.restaurant}
        />
      );
    },

    toggleModal: function() {
      this.setState({ showRestaurantModal: !this.state.showRestaurantModal });
    },

    render: function () {
      var image = {
        backgroundImage: 'url(' + this.props.like.foodItemImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100%'
      };

      return (
        <div className="cover-card-container">
          <div className="cover-card col-sm-4"
               style={image}
               onClick={this.toggleModal}>
            <div>
              <div className="cover-card-restaurant">
                {this.props.like.restaurant.name}
              </div>
              {this.props.like.foodItem}
              <div className="user-unlike-btn">
                <div className="glyphicon glyphicon-heart"
                  onClick={this.deleteLike} />
              </div>
            </div>
          </div>
          {this.showRestaurantModal()}
        </div>
      );
    }
  });
})(this);
