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
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});

        // <IndexRoute component={Index}/>
// <Route path="/restaurants/:restaurantId" component={RestaurantIndexItem} />


        // <IndexRoute component={Index}/>
// <Route path="/" component={App}>
//   <IndexRoute component={Search}/>
//   <Route path="restaurants/new" component={RestaurantForm}/>
//   <Route path="restaurants/:restaurantId" component={RestaurantShow}>
//     <Route path="review" components={ReviewForm}/>
//   </Route>
// </Route>
        // <IndexRoute component={FoodItem}/>
        // <Route path="/restaurants/:restaurantId" component={RestaurantShow} />