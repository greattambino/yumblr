(function (root) {
  'use strict';

  var Rating = root.Rating = React.createClass({
    getInitialState: function () {
      return {
        foodItemId: this.props.foodItemId,
        rating: 0,
        reviewCount: 0,
        hoverRating: 0
      };
    },
    componentDidMount: function () {
      ReviewStore.addChangeListener(this._onChange);
      ReviewApiUtil.fetchAllReviews(this.props.foodItemId);
    },

    componentWillUnmount: function () {
      ReviewStore.removeChangeListener(this._onChange);
    },

    componentWillReceiveProps: function (newProps) {
      if (newProps.foodItemId !== this.props.foodItemId) {
        ReviewApiUtil.fetchAllReviews(newProps.foodItemId);
      }
    },

    _onChange: function () {
      this.setState({
        rating: ReviewStore.averageScore(this.props.foodItemId),
        reviewCount: ReviewStore.reviewCount(this.props.foodItemId)
      });
    },

    renderReadOnly: function () {
      this.stars = [];
      var fullStars = 0,
          halfStars = 0,
          rating = (Math.round(this.state.rating * 2) / 2) || 0;
      if (rating % 1 === 0) {
        fullStars = rating;
      } else {
        fullStars = rating - 0.5;
        halfStars = 1;
      }
      for (var i = 0; i < fullStars; i++) {
        this.stars.push(<li key={i + 'full'} className="star on" />);
      }
      for (var j = 0; j < halfStars; j++) {
        this.stars.push(<li key={j + 'half'} className="half star" />);
      }
      for (var k = 0; k < (5 - (fullStars + halfStars)); k++) {
        this.stars.push(<li key={k + 'empty'} className="star" />);
      }

      var reviews = "reviews";
      if (this.state.reviewCount === 1) { reviews = "review"; }

      this.stars.push(
        <span className="review-count" key="review-count">
          {this.state.reviewCount} {reviews}
        </span>
      );
    },

    handleMouseOver: function (e) {
      e.preventDefault();
      this.setState({ hoverRating: e.currentTarget.value });
    },

    handleMouseOut: function (e) {
      e.preventDefault();
      this.setState({ hoverRating: this.props.rating });
    },

    renderClickable: function() {
      this.stars = [];
      var currentStar;
      if (this.props.rating !== 0 && this.state.hoverRating === 0) {
        currentStar = this.props.rating;
      } else {
        currentStar = this.state.hoverRating;
      }
      for (var i = 1; i <= 5; i++) {
        var handleClick = this.props.onClick.bind(null, i);
        if (this.state.hoverRating >= i) {
          this.stars.push(
            <li key={i}
              value={i}
              onClick={handleClick}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              className="star on" />
          );
        } else {
          this.stars.push(
            <li key={i}
              value={i}
              onClick={handleClick}
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              className="star" />
          );
        }
      }
    },

    renderUserRating: function() {
      this.stars = [];
      for (var i = 1; i <= 5; i++) {
        if (i <= this.props.rating) {
          this.stars.push(
            <li key={i} className="star-user on" />
          );
        } else {
          this.stars.push(
            <li key={i} className="star-user" />
          );
        }
      }
    },

    render: function () {
      var style;
      if (this.props.userRating) {
        this.renderUserRating();
        style = {display: 'inline-block'};
      } else if (this.props.readOnly) {
        this.renderReadOnly();
      } else {
        this.renderClickable();
      }

      return(
        <ul className="rating-container" style={style}>
          {this.stars}
        </ul>
      );
    }
  });
})(this);
