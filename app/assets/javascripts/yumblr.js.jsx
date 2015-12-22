$(function(){
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var Link = ReactRouter.Link;
  var RouteHandler = ReactRouter.RouteHandler;

  var root = document.getElementById('content');

  var App = React.createClass({
    render: function() {
      return(
        <div>
          <Navbar currentUser={window.CURRENT_USER_USERNAME} />
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={SplashCarousel}/>
      <Route path="users">
        <Route path=":userId" component={UserShow} />
      </Route>
      <Route path="/food_items/:foodItemId" component={FoodItemShow} />
    </Route>
  );

  var path = window.location.pathname;

  if (path !== "/users"    && path !== "/session" &&
      path !== "/users/new" && path !== "/session/new") {
    React.render(<Router>{routes}</Router>, root);
  }
});
