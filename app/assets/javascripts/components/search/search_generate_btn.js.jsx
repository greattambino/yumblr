(function(root) {
  'use strict';

  var GenerateBtn = root.GenerateBtn = React.createClass({
    mixins: [ReactRouter.History],

    handleClick: function(){
      var foodItem = FilteredFoodItemStore.next();
      this.history.pushState(null, "/food_items/" + foodItem.id);
    },

    render: function () {
      return(
        <ul className="nav navbar-nav" onClick={this.handleClick}>
          <button className="active myButton">
            <span className="glyphicon glyphicon-cutlery" aria-hidden="true"></span>
          </button>
        </ul>
      );
    }
  });
}(this));
