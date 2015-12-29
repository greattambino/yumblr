(function (root) {
  'use strict';

  var UserReviewEditForm = root.UserReviewEditForm = React.createClass({
    getInitialState: function() {
      return {
        body: this.props.review.body,
        rating: this.props.review.rating
      };
    },

    // componentDidMount: function() {
    //   ReviewStore.addChangeListener(this._onUpdate);
    // },
    //
    // componentWillUnmount: function() {
    //   ReviewStore.removeChangeListener(this._onUpdate);
    // },

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

    // _onUpdate: function() {
    //   this.props.disableEdit();
    // },

    updateBody: function(e) {
      this.setState({ body: e.currentTarget.value });
    },

    render: function() {
      return(
        <div className="review-form">
          <div className="review-rating-container" >
            <Rating
              rating={this.state.rating}
              readOnly={false}
              onClick={this.handleRatingChange}
            />
          </div>
          <div className="row">
            <div className="span12">
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
            </div>
          </div>
        </div>
      );
    }
  });
})(this);
