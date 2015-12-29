(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;

  var Review = root.Review = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getInitialState: function() {
      return {
        reviews: ReviewStore.reviews(this.props.foodItemId),
        reviewBody: "",
        rating: 0
      };
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
      this.setState({ reviewBody: "", rating: 0 });
    },

    renderReviewForm: function () {
      var focus = "";
      if (this.state.reviewBody.length > 0) {
        focus = " focus";
      }

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
                  <Errors />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    },

    renderUserReviews: function () {
      var currentUser = UserStore.currentUser(),
          currentUserId = currentUser.id,
          currentUserUsername = currentUser.username,
          currentUserReviews = currentUser.reviews,
          foodItemId = this.props.foodItem.id,
          foodItemName = this.props.foodItem.name;

      return(
        <UserReviewIndex
          currentUserUsername={currentUserUsername}
          currentUserId={currentUserId}
          currentUserReviews={currentUserReviews}
          foodItemId={foodItemId}
          foodItemName={foodItemName} />
      );
    },

    render: function () {
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
