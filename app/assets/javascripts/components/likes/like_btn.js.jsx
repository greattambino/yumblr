(function (root) {
  'use strict';

  var LikeBtn = root.LikeBtn = React.createClass({
    getInitialState: function () {
      return {likeState: "", hover: false, disabled: false, status: ""};
    },

    componentDidMount: function () {
      UserStore.addChangeListener(this.setLike);
      this.unlike = <span className="glyphicon glyphicon-heart"/>;
      this.like = <span className="glyphicon glyphicon-heart-empty"/>;
      this.setLike(this.props);
      $('.heart-container').hide(1);
    },

    componentWillReceiveProps: function (nextProps) {
      this.setLike(nextProps);
    },

    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setLike);
    },
    handleMouseOver: function () {
      this.setState({hover: true});
    },

    handleMouseOut: function () {
      this.setState({hover: false});
    },

    setLike: function (props) {
      if (typeof props === "undefined") {
        props = this.props;
      }
      var likableType = props.likableType,
          likableId   = props.likableId;

      if (UserStore.doesCurrentUserLike(likableType, likableId)) {
        this.setState({likeState: this.unlike, disabled: false});
      } else {
        this.setState({likeState: this.like, disabled: false});
      }
    },

    handleLike: function () {
      var likableType = this.props.likableType,
          likableId   = this.props.likableId;
      this.setState({disabled: true});
      if (this.state.likeState === this.like) {
        LikeApiUtil.createLike(likableType, likableId);
        $('.heart-container').fadeIn(800).delay(500).fadeOut(600);
        setTimeout(function() {
          this.setState({likeState: this.unlike});
        }.bind(this), 200);
      } else {
        LikeApiUtil.destroyLike(likableType, likableId);
        setTimeout(function() {
          this.setState({likeState: this.like});
        }.bind(this), 200);
      }
      ApiUtil.fetchCurrentUser(window.CURRENT_USER);
    },

    render: function () {
      var likeState = this.state.likeState,
          numLikes  = this.props.numLikes,
          disabled  = this.state.disabled,
          klass,
          label;
      if (likeState === this.like) {
        klass = "like";
        label = "like";
      } else {
        klass = "liked";
        if (this.state.hover) {
          label = "unlike";
        } else {
          label = "liked";
        }
      }
      return (
        <div className="like-container">
          <div className="heart-container">
            <img src="./assets/heart.png"></img>
          </div>
        <button
          className={"btn " + klass}
          onClick={this.handleLike}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          disabled={disabled} >
            {numLikes} {likeState} {label}
        </button>
        </div>
      );
    }
  });
})(this);
