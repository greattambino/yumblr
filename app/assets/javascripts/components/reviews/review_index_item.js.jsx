(function (root) {
  'use strict';

  var ReviewIndexItem = root.ReviewIndexItem = React.createClass({
    getInitialState: function() {
      return { showEditForm: false };
    },

    disableEdit: function() {
      this.setState({ showEditForm: false });
    },

    editReview: function() {
      this.setState({ showEditForm: true });
    },

    timeSince: function(date) {
      if (typeof date !== 'object') {
        date = new Date(date);
      }

      var seconds = Math.floor((new Date() - date) / 1000);
      var intervalType;

      var interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        intervalType = "year";
      } else { interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
         intervalType = "month";
       } else { interval = Math.floor(seconds / 86400);
         if (interval >= 1) {
           intervalType = "day";
         } else { interval = Math.floor(seconds / 3600);
           if (interval >= 1) {
             intervalType = "hour";
           } else { interval = Math.floor(seconds / 60);
             if (interval >= 1) {
               intervalType = "minute";
             } else { interval = seconds;
               if (interval > 1) {
                 intervalType = "second";
               } else {
                 return "just now";
               }
             }
           }
         }
       }
      }
      if (interval > 1 || interval === 0) {
        intervalType += "s";
      }
      return interval + " " + intervalType + " ago";
    },

    renderEditable: function() {
      this.reviewItem = [];
      if (this.state.showEditForm) {
        this.reviewItem.push(
          <ReviewEditForm
            key={"edit-review-form" + this.props.review.id}
            review={this.props.review}
            reviewBody={this.props.review.body}
            reviewRating={this.props.review.rating}
            newReview={false}
            disableEdit={this.disableEdit} />
        );
      } else {
        this.reviewItem.push(
          <div className="review-li-editable" key={"editable-reviews" + this.props.review.id}>
            <strong className="pull-left primary-font user-review-username">
              {this.props.author}
            </strong>
            <Rating
              rating={this.props.review.rating}
              readOnly={true}
              userRating={true} />
            <small className="pull-right text-muted">
              {this.timeSince(this.props.review.created_at)}
            </small>
            <br/>
            <li className="pull-left">{this.props.review.body}</li>
            <UserReviewOptions
              enableEdit={this.editReview} />
            <br/>
          </div>
        );
      }
    },

    renderReadOnly: function() {
      this.reviewItem = [];
      this.reviewItem.push(
        <div className="review-li-read-only" key="read-only-reviews">
          <strong className="pull-left primary-font user-review-username">
            {this.props.review.author.username}
          </strong>
          <Rating
            rating={this.props.review.rating}
            readOnly={true}
            userRating={true} />
          <small className="pull-right text-muted">
            {this.timeSince(this.props.review.created_at)}
          </small>
          <br/>
          <li className="ui-state-default">{this.props.review.body}</li>
          <br/>
        </div>
      );
    },

    render: function() {
      if (this.props.readOnly) {
        this.renderReadOnly();
      } else {
        this.renderEditable();
      }
      return(
        <div className="review-list-items">
          {this.reviewItem}
        </div>
      );
    }
  });
})(this);
