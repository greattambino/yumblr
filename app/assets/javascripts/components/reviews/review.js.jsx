(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;

  var Review = root.Review = React.createClass({
    getInitialState: function() {
      return { reviewBody: "", rating: 3.5 };
    },

    handleRatingChange: function (rating) {
      this.setState({ rating: rating });
    },

    handleReviewChange: function (e) {
      e.preventDefault();
      this.setState({ reviewBody: e.currentTarget.value });
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
      ReviewApiUtil.createReview(review);
      this.setState( { content: "", rating: 3 });

    },

    render: function () {
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
                        className="review-input-text"
                        onChange={this.handleReviewChange}
                        placeholder="Write a review" /><br/>
                      <button type="submit" className="btn-review-save">Submit</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="review-modal-index">
                <ReviewIndex />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  });
})(this);
