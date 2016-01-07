(function (root) {
  'use strict';

  var UserReviewOptions = root.UserReviewOptions = React.createClass({
    deleteReview: function() {
      var confirmed = confirm("Are you sure you want to delete me? =(");
      if (confirmed) {
        ReviewApiUtil.deleteReview(
          this.props.reviewId,
          this.props.foodItemId,
          this.props.oldRating
        );
      }
    },

    editReview: function() {
      this.props.enableEdit();
    },

    render: function() {
      return(
        <div className="user-review-options">
          <div className="group edit-glyph glyphicon glyphicon-pencil"
             onClick={this.editReview}/>
           <div className="group delete-glyph glyphicon glyphicon-trash"
             onClick={this.deleteReview}/>
        </div>
      );
    }
  });
})(this);
