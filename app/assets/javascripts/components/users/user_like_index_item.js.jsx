(function (root) {
  'use strict';

  var Link = ReactRouter.Link;

  var UserLikeIndexItem = root.UserLikeIndexItem = React.createClass({
    getInitialState: function() {
      return({ showRestaurantModal: false });
    },

    toggleModal: function() {
      this.setState({ showRestaurantModal: !this.state.showRestaurantModal });
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
            <p>
              <span className="cover-card-restaurant">
                {this.props.like.restaurant.name}
              </span><br></br>
              {this.props.like.foodItem}
            </p>
          </div>
          {this.showRestaurantModal()}
        </div>
      );
    }
  });
})(this);
