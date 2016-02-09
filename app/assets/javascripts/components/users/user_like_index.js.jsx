(function (root) {
  'use strict';

  var Link = ReactRouter.Link;

  var UserLikeIndex = root.UserLikeIndex = React.createClass({
    getInitialState: function () {
      return {likes: []};
    },

    componentDidMount: function () {
      UserLikeStore.addChangeListener(this.setLikes);
      this.getLikes(this.props.userId);
    },

    componentWillUnmount: function () {
      UserLikeStore.removeChangeListener(this.setLikes);
    },

    componentWillReceiveProps: function (newProps) {
      if (UserLikeStore.hasUserLikes(newProps.userId)) {
        this.setLikes(newProps.userId);
      } else {
        this.getLikes(newProps.userId);
      }
    },

    getLikes: function (userId) {
      if (userId !== -1) {
        LikeApiUtil.fetchUserLikes(userId);
      }
    },

    setLikes: function (userId) {
      if (typeof userId === "undefined") {
        this.setState({likes: UserLikeStore.findLikes(this.props.userId)});
      } else {
        LikeApiUtil.fetchUserLikes(userId);
        this.setState({likes: UserLikeStore.findLikes(userId)});
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
              return <UserLikeIndexItem
                       key={like.id}
                       like={like} />;
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
