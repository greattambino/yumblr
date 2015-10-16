(function(root) {

  root.FoodIndexItem = React.createClass({
    render: function() {
      return(
        <div className="food_item">
          <h2>{this.props.item.name}</h2>
        </div>
      );
    }
  });

}(this));
