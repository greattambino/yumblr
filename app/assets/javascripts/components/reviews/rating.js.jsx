(function (root) {
  'use strict';

  var Rating = root.Rating = React.createClass({
    getInitialState: function () {
      return { rate: 0 };
    },

    renderReadOnly: function () {
      this.stars = [];
      var fullStars = 0,
          halfStars = 0,
          rating = ((this.props.rating || 0) * 2) / 2;
      if (rating % 1 === 0) {
        fullStars = rating;
      } else {
        fullstars = rating - 0.5;
        halfStars = 1;
      }
      for (var i = 0; i < fullStars; i++) {
        this.stars.push(<li key={i + 'full'} className="star on" />);
      }
      for (var j = 0; j < halfStars; j++) {
        this.stars.push(<li key={j + 'half'} className="half star on" />);
      }
      for (var k = 0; k < (5 - fullStars + halfStars); k++) {
        this.stars.push(<li key={k + 'empty'} className="star" />);
      }

      var reviews = "reviews";
      if (this.props.rating === 1) { reviews = "review"; }

      this.stars.push(
        <span className="review-count" key="review-count">
          {this.props.reviewCount} {reviews}
        </span>
      );
    },

    handleMouseOver: function (e) {
      e.preventDefault();
      this.setState({ rate: e.currentTarget.value });
    },

    handleMouseOut: function (e) {
      e.preventDefault();
      this.setState({ rate: this.props.rating });
    },

    renderClickable: function() {
      this.stars = [];
      for (var i = 1; i <= 5; i++) {
        var handleClick = this.props.onClick.bind(null, i);
        if (this.state.rate >= i) {
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

    render: function () {
      if (this.props.readOnly) {
        this.renderReadOnly();
      } else {
        this.renderClickable();
      }

      return(
        <ul className="rating-container">
          {this.stars}
        </ul>
      );
    }
  });
})(this);
