(function (root) {
  'use strict';

  var ReviewIndex = root.ReviewIndex = React.createClass({
    getInitialState: function () {
      return ({ reviews: ReviewStore.reviews(this.props.foodItemId) });
    },

    componentDidMount: function () {
      ReviewStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      ReviewStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({ reviews: ReviewStore.reviews(this.props.foodItemId) });
    },

    render: function () {
      var length = this.state.reviews.length;
      return(
        <ul id="sortable" className="list-unstyled ui-sortable">
          {this.state.reviews.map(function (review, i) {
            return(
              <ReviewIndexItem
                key={"ror-" + review.id}
                readOnly={true}
                review={this.state.reviews[length - i - 1]} />
            );
          }.bind(this))}
        </ul>
      );
    }
  });
})(this);
