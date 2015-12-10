(function (root) {
  'use strict';

  var Rating = root.Rating = React.createClass({
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

    renderClickable: function() {
      this.stars = [];
      for (var i = 1; i <= 5; i++) {
        var handleClick = this.props.handleClick.bind(null, i);
        if (i <= this.props.rating) {
          this.stars.push(
            <li key={i}
              onClick={handleClick}
              className="star on" />
          );
        } else {
          this.stars.push(
            <li key={i}
              onClick={handleClick}
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
        <ul className="rating-container">{this.stars}</ul>
      );
    }
  });
})(this);
