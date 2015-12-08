(function (root) {
  'use strict';

  var Link = ReactRouter.Link;

  var UserLikeIndex = root.UserLikeIndex = React.createClass({
    getInitialState: function () {
      return {likes: []};
    },

    componentDidMount: function () {
      UserLikeStore.addChangeListener(this.setLikes);
      // UserLikeStore.addRefreshListener(this.setLikes);

      var userId = this.props.userId;
      if (UserLikeStore.hasUserLikes(userId)) {
        this.setLikes(userId);
      } else {
        this.getLikes(this.props);
      }
    },

    componentWillUnmount: function () {
      UserLikeStore.removeChangeListener(this.setLikes);
      // UserLikeStore.removeRefreshListener(this.setLikes);
    },

    componentWillReceiveProps: function (newProps) {
      if (UserLikeStore.hasUserLikes(newProps.userId)) {
        this.setLikes(newProps.userId);
      } else {
        this.getLikes(newProps);
      }
    },

    getLikes: function (props) {
      var userId = props.userId;
      LikeApiUtil.fetchUserLikes(userId);
    },

    setLikes: function (optionalUserId) {
      var userId = this.props.userId;
      if (typeof optionalUserId === "undefined") {
        this.setState({likes: UserLikeStore.findLikes(userId)});
      } else {
        this.setState({likes: UserLikeStore.findLikes(optionalUserId)});
      }
    },

    render: function () {
      var likeList,
          userId = this.props.userId;

      if (this.state.likes.length === 0 ) {
        likeList = (
          <p>No liked foods yet...</p>
        );
      } else {
        likeList = (
          <div>
            {this.state.likes.map (function(like) {
              return <UserLikeIndexItem key={like.id} like={like}/>;
            })}
          </div>
        );
      }

      return (
        <div className="like-index">
          {likeList}
        </div>
      );
    }
  });
})(this);
