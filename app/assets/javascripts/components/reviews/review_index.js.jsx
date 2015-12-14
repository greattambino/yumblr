(function (root) {
  'use strict';

  var ReviewIndex = root.ReviewIndex = React.createClass({
    getInitialState: function () {
      return ({ reviews: ReviewStore.all() });
    },

    componentDidMount: function () {
      ReviewStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      ReviewStore.removeChangeListener(this._onChange);
    },

    _onChange: function (reviews) {
      this.setState({ reviews: reviews });
    },

    render: function () {
      return(
        <ul id="sortable" className="list-unstyled ui-sortable">
            <strong className="pull-left primary-font">Klaythompson11</strong>
            <small className="pull-right text-muted">
               <span className="glyphicon glyphicon-time"> </span>7 mins ago</small>
            <br/>
            <li className="ui-state-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
            <br/>
             <strong className="pull-left primary-font">Draymondgreen23</strong>
            <small className="pull-right text-muted">
               <span className="glyphicon glyphicon-time"></span>14 mins ago</small>
            <br/>
            <li className="ui-state-default">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
      );
    }
  });
})(this);

// <ul>
//   {this.state.reviews.map(function (review) {
//     return(
//       <li key={review.id}>{review.body}</li>
//     );
//   })}
// </ul>
