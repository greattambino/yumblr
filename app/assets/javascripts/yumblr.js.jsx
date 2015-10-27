$(function(){
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var Link = ReactRouter.Link;
  var RouteHandler = ReactRouter.RouteHandler;

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
      <IndexRoute component={RestaurantIndexItem}/>
      <Route path="users">
        <Route path=":userId" component={UserShow} />
      </Route>
      <Route path="/food_items/:foodItemId" component={FoodItemShow} />
    </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
