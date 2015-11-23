(function (root) {
  'use strict';

  var LikeBtn = root.LikeBtn = React.createClass({
    getInitialState: function () {
      return {likeState: ""};
    },

    componentDidMount: function () {
      UserStore.addChangeListener(this.setLike);
      this.unlike = <span className="glyphicon glyphicon-heart"/>;
      this.like = <span className="glyphicon glyphicon-heart-empty"/>;
      this.setLike(this.props);
    },

    componentWillReceiveProps: function (nextProps) {
      this.setLike(nextProps);
    },

    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setLike);
    },

    setLike: function (props) {
      if (typeof props === "undefined") {
        props = this.props;
      }
      var likableType = props.likableType,
          likableId   = props.likableId;
      if (UserStore.doesCurrentUserLike(likableType, likableId)) {
        this.setState({likeState: this.unlike});
      } else {
        this.setState({likeState: this.like});
      }
    },

    handleLike: function () {
      var likableType = this.props.likableType,
          likableId   = this.props.likableId;
      if (this.state.likeState === this.like) {
        LikeApiUtil.createLike(likableType, likableId);
        this.setState({likeState: this.unlike});
      } else {
        LikeApiUtil.destroyLike(likableType, likableId);
        this.setState({likeState: this.like});
      }
      ApiUtil.fetchCurrentUser(window.CURRENT_USER);
    },

    render: function () {
      var likeState = this.state.likeState,
          klass;
      if (likeState === this.like) {
        klass = "like";
      } else {
        klass = "liked";
      }
      return (
        <button className={"btn " + klass} onClick={this.handleLike} >
          {likeState} {klass}
        </button>
      );
    }
  });
})(this);
