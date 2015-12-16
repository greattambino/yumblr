(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;

  var Review = root.Review = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
      return {
        reviews: ReviewStore.reviews(this.props.foodItemId),
        reviewBody: "",
        rating: 0 };
    },

    handleRatingChange: function (rating) {
      this.setState({ rating: rating });
    },

    handleSubmit: function (e) {
      e.preventDefault();
      var foodItemId = this.props.foodItem.id,
          userId = UserStore.currentUser().id,
          body = this.state.reviewBody,
          rating = this.state.rating,
          review = {
            body: body,
            rating: rating,
            food_item_id: foodItemId,
            user_id: userId
          };
      ReviewApiUtil.createReview(foodItemId, review);
      this.setState( { reviewBody: "", rating: 2 });

    },

    renderReviewForm: function () {
      return(
        <div className="review-form">
          <div className="review-rating-container" >
            {this.props.foodItem.name}
            <Rating
              rating={this.state.rating}
              readOnly={false}
              onClick={this.handleRatingChange}
              reviewCount={this.props.reviewCount}
            />
          </div>
          <div className="row">
            <div className="span12">
              <form id="review-input-form"
                className="form-search form-horizontal"
                onSubmit={this.handleSubmit}>
                <div className="input-append span12">
                  <textarea
                    className={"review-input-text" + focus}
                    valueLink={this.linkState("reviewBody")}
                    placeholder="Write a review" /><br/>
                  <input type="submit" className="btn-review-save" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    },

    renderUserReviews: function () {
      var currentUser = UserStore.currentUser(),
          currentUserUsername = currentUser.username,
          currentUserReviews = currentUser.reviews,
          reviewCount = currentUserReviews.length,
          foodItemId = this.props.foodItem.id;

      return(
        <div className="user-review-container">
          <div className="user-review-food-item-header">{this.props.foodItem.name}</div>
          <div className="user-review-food-item-sub-header">Your recent reviews</div>
          <div className="row">
            <div className="span12">
              <ul id="sortable" className="list-unstyled ui-sortable">
                {currentUserReviews.map(function (review) {
                  if (review.food_item_id === foodItemId) {
                    return(
                      <ReviewIndexItem
                        key={"user-reviews-" + review.id}
                        readOnly={false}
                        author={currentUserUsername}
                        review={review} />
                    );
                  }
                }.bind(this))}
              </ul>
            </div>
          </div>
        </div>
      );
    },

    render: function () {
      var focus = "";
      if (this.state.reviewBody.length > 0) {
        focus = " focus";
      }
      var reviewHeader,
          currentUserId = UserStore.currentUser().id,
          foodItemId = this.props.foodItem.id;

      if (UserStore.currentUserHasReviewed(foodItemId)) {
        reviewHeader = this.renderUserReviews();
      } else {
        reviewHeader = this.renderReviewForm();
      }

      return (
        <div id="review-modal-container">
          <Modal
            className="review-modal-dialog"
            show={this.props.show}
            onHide={this.props.onHide}
            container={this}
            aria-labelledby="contained-modal-title">
            <Modal.Header className="review-modal-header" closeButton>
              <Modal.Title id="contained-modal-title">
                <span className="review-modal-name">
                  Recommended Reviews
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body id="review-modal-content">

              {reviewHeader}

              <div className="review-modal-index">
                <ReviewIndex foodItemId={this.props.foodItem.id} />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  });
})(this);
