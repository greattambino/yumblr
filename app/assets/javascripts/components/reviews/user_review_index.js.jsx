(function (root) {
  'use strict';

  var UserReviewIndex = root.UserReviewIndex = React.createClass({
    getInitialState: function() {
      return { reviews: ReviewStore.reviews(this.props.foodItemId) };
    },

    componentDidMount: function() {
      ReviewStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      ReviewStore.removeChangeListener(this._onChange);
    },

    // componentWillReceiveProps: function(newProps) {
    //   if (this.props !== newProps) {
    //     this.setState({ reviews: ReviewStore.reviews(newProps.foodItemId) });
    //   }
    // },

    _onChange: function() {
      this.setState({ reviews: ReviewStore.reviews(this.props.foodItemId) });
    },

    render: function() {
      return(
        <div className="user-review-container">
          <div className="user-review-food-item-header">{this.props.foodItemName}</div>
          <div className="user-review-food-item-sub-header">Your recent reviews</div>
          <div className="row">
            <div className="span12">
              <ul id="sortable" className="list-unstyled ui-sortable">
                {this.state.reviews.map(function(review) {
                  if (review.user_id === this.props.currentUserId) {
                    return(
                      <ReviewIndexItem
                        key={"user-reviews-" + review.id}
                        readOnly={false}
                        author={this.props.currentUserUsername}
                        review={review} />
                    );
                  }
                }.bind(this))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  });
})(this);
// {this.props.currentUserReviews.map(function(review) {
//   if (review.food_item_id === this.props.foodItemId) {
//     return(
//       <ReviewIndexItem
//         key={"user-reviews-" + review.id}
//         readOnly={false}
//         author={this.props.currentUserUsername}
//         review={review} />
//     );
//   }
