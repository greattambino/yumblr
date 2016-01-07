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

    _onChange: function() {
      this.setState({ reviews: ReviewStore.reviews(this.props.foodItemId) });
    },

    render: function() {
      return(
        <div className="user-review-container">
          <div className="review-food-item-sub-header">
            Your Recent Reviews
          </div>
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
      );
    }
  });
})(this);
