(function(root) {
  'use strict';

  var Link = ReactRouter.Link;
  var Navbar = root.Navbar = React.createClass({
    getInitialState: function () {
      return {currentUser: UserStore.findUser(window.CURRENT_USER)};
    },

    componentDidMount: function () {
      UserStore.addChangeListener(this.setCurrentUser);

      if (typeof window.CURRENT_USER !== "undefined" &&
          window.CURRENT_USER !== this.state.currentUser.id) {
        this.getCurrentUser();
      }
    },

    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setCurrentUser);
    },

    getCurrentUser: function () {
      ApiUtil.fetchCurrentUser(window.CURRENT_USER);
    },

    setCurrentUser: function () {
      this.setState({ currentUser: UserStore.currentUser() });
    },

    handleSignOut: function() {
      root.SessionUtil.signOutUser();
    },

    render: function() {
      var navbarRight;
      // var userShowUrl = "api/users/" + { this.props.currentUser.id };
      if (this.props.currentUser) {
        navbarRight = (
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <div className="user-icon">
                <img src="./assets/user_icon.png"></img>
              </div>
              <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/users/" + this.state.currentUser.id}>
                    Profile
                  </Link>
                </li>
                <li className="divider"></li>
                <li><a href="/session/new" onClick={this.handleSignOut}>Sign Out</a></li>
              </ul>
            </li>
          </ul>
        );
      } else {
        navbarRight = (
          <ul className="nav navbar-nav navbar-right">
            <p className="navbar-text">
              <a className="nav-login" href="/session/new">Login</a>
              <a className="nav-join" href="/users/new">Join</a>
            </p>
          </ul>
        );
      }

      return(
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a href="/" className="navbar-brand"><img src="http://res.cloudinary.com/yumblr/image/upload/v1446005823/app/logo-smaller.png"/></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <SearchBar />
              { navbarRight }
            </div>
          </div>
        </div>
      );
    }
  });
})(this);

// { window.CURRENT_USER_USERNAME }

// <a href="users/" + <%= current_user.id % <%= current_user.username %></a>
// <% if signed_in? %>
//   <%= current_user.username %>
//   <%= button_to "Sign Out", session_url, :method => :delete %>
// <% else %>
//   <%= link_to "Sign In", new_session_url %>
//   <%= link_to "Sign Up", new_user_url %>
// <% end %><br>
