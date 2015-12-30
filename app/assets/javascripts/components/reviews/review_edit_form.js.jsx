(function (root) {
  'use strict';

  var ReviewEditForm = root.ReviewEditForm = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    getDefaultProps: function() {
      return{
        reviewBody: "",
        reviewRating: 0
      };
    },

    getInitialState: function() {
      return {
        body: this.props.reviewBody,
        rating: this.props.reviewRating
      };
    },

    handleRatingChange: function (rating) {
      this.setState({ rating: rating });
    },

    handleUpdate: function (e) {
      e.preventDefault();
      var reviewId = this.props.review.id,
          body = this.state.body,
          rating = this.state.rating,
          foodItemId = this.props.review.food_item_id;
      ReviewApiUtil.updateReview(reviewId, body, rating, foodItemId);
      this.props.disableEdit();
    },

    handleSubmit: function (e) {
      e.preventDefault();
      var foodItemId = this.props.foodItemId,
          userId = UserStore.currentUser().id,
          body = this.state.body,
          rating = this.state.rating,
          review = {
            body: body,
            rating: rating,
            food_item_id: foodItemId,
            user_id: userId
          };
      ReviewApiUtil.createReview(foodItemId, review);
    },

    updateBody: function(e) {
      this.setState({ body: e.currentTarget.value });
    },

    renderUpdateForm: function() {
      return(
        <form id="review-input-form"
          className="form-search form-horizontal"
          onSubmit={this.handleUpdate}>
          <div className="input-append span12">
            <textarea
              className="review-input-text focus"
              onChange={this.updateBody}
              value={this.state.body} /><br/>
            <input type="submit" className="btn-review-save" value="Update" />
            <Errors />
          </div>
        </form>
      );
    },

    renderCreateForm: function() {
      var focus = "";
      if (this.state.body.length > 0) {
        focus = " focus";
      }

      return(
        <form id="review-input-form"
          className="form-search form-horizontal"
          onSubmit={this.handleSubmit}>
          <div className="input-append span12">
            <textarea
              className={"review-input-text" + focus}
              valueLink={this.linkState("body")}
              placeholder="Write a review" /><br/>
            <input type="submit" className="btn-review-save" value="Submit" />
            <Errors />
          </div>
        </form>
      );
    },

    render: function() {
      var reviewForm;
      if (this.props.newReview) {
        reviewForm = this.renderCreateForm();
      } else {
        reviewForm = this.renderUpdateForm();
      }

      return(
        <div className="review-form">
          <div className="review-rating-container" >
            <Rating
              rating={this.state.rating}
              readOnly={false}
              onClick={this.handleRatingChange} />
          </div>
          <div className="row">
            <div className="span12">
              {reviewForm}
            </div>
          </div>
        </div>
      );
    }
  });
})(this);
