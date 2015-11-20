(function (root) {
  'use strict';

  var UserShow = root.UserShow = React.createClass({
    getInitialState: function () {
      var userId = this.props.params.userId;
      return ({
        user: UserStore.findUser(userId),
      });
    },

    componentDidMount: function () {
      UserStore.addChangeListener(this.setUser);

      if (parseInt(this.props.params.userId) !== this.state.user.id) {
        this.getUser(this.props);
      } else {
        ApiActions.updateUserShow(this.state.user);
      }
    },

    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setUser);
    },

    componentWillReceiveProps: function (nextProps) {
      var newUser = UserStore.findUser(parseInt(nextProps.params.userId));

      if (parseInt(nextProps.params.userId) === newUser.id) {
        ApiActions.updateUserShow(newUser);
        this.setUser(newUser.id);
      } else {
        this.getUser(nextProps);
      }
    },

    getUser: function (props) {
      ApiUtil.fetchCurrentUser(props.params.userId);
    },

    setUser: function (optionalUserId) {
      if (typeof optionalUserId === "undefined") {
        this.setState({user: UserStore.user()});
      } else {
        this.setState({user: UserStore.findUser(optionalUserId)});
      }
    },

    render: function () {
      var user = this.state.user;
      return (
        <div className="profile-image-container">
          <div className="card hovercard">
            <div className="card-background">
              <img className="card-bkimg" alt="" src="http://lorempixel.com/100/100/people/9/" />
            </div>
            <div className="useravatar">
              <img alt="" src="http://lorempixel.com/100/100/people/9/" />
            </div>
            <div className="card-info">
              <span className="card-title">{window.CURRENT_USER_USERNAME}</span>
            </div>
          </div>
          <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
            <div className="btn-group" role="group">
              <button type="button" id="favorites" className="btn btn-default" href="#tab1" data-toggle="tab">
                <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                <div className="hidden-xs">Favorites</div>
              </button>
            </div>
            <div className="btn-group" role="group">
              <button type="button" id="following" className="btn btn-default" href="#tab2" data-toggle="tab">
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                <div className="hidden-xs">Following</div>
              </button>
            </div>
          </div>

          <div className="well">
            <div className="tab-content">
              <div className="tab-pane fade in active" id="tab1">
                <h3>Recently Favorited Foods</h3>
                <div className="container-fluid">
                	<div className="row text-center">
                	</div>
                	<div className="row">
                    <UserLikeIndex userId={user.id}/>
                	</div>
                </div>
              </div>
              <div className="tab-pane fade in" id="tab2">
                <h3>Following</h3>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
})(this);