(function(root) {
  'use strict';

  var Link = ReactRouter.Link;
  var Navbar = root.Navbar = React.createClass({
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
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">Notifications <b className="caret"></b></a>
              <ul role="menu" className="dropdown-menu">
                <li><a href="#">Inbox</a></li>
                <li><a href="#">Drafts</a></li>
                <li><a href="#">Sent Items</a></li>
                <li className="divider"></li>
                <li><a href="#">Trash</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              { window.CURRENT_USER_USERNAME }
              <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#">Yeeep</a></li>
                <li><a href="#">Profile</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="/session/new" onClick={this.handleSignOut}>Sign Out</a></li>
              </ul>
            </li>
          </ul>
        );
      } else {
        navbarRight = (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Peep thiss</a></li>
            <p className="navbar-text">
              <a href="/session/new">Sign In</a>
              &nbsp; / &nbsp;
              <a href="/users/new">Sign Up</a>
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

              <a href="/" className="navbar-brand">Yumblr</a>
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


// <a href="users/" + <%= current_user.id % <%= current_user.username %></a>
// <% if signed_in? %>
//   <%= current_user.username %>
//   <%= button_to "Sign Out", session_url, :method => :delete %>
// <% else %>
//   <%= link_to "Sign In", new_session_url %>
//   <%= link_to "Sign Up", new_user_url %>
// <% end %><br>
