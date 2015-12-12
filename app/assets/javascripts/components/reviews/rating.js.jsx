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
    },

    handleHover: function (e) {
      this.setState({ rate: e.currentTarget.value });
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
              onMouseOver={this.handleHover}
              className="star on" />
          );
        } else {
          this.stars.push(
            <li key={i}
              value={i}
              onClick={handleClick}
              onMouseOver={this.handleHover}
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

      var reviews = "reviews";
      if (this.props.rating === 1) {
        reviews = "review";
      }

      return(
        <ul className="rating-container">
          {this.stars}
          <span className="review-count">
            {this.props.rating} {reviews}
          </span>
        </ul>
      );
    }
  });
})(this);
