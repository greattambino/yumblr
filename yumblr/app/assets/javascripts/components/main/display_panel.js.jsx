window.DisplayPanel = React.createClass({
  render: function() {
    return(
      <div>
        <FilterIndex />
        <FoodItemDetails />
        <Likes />
      </div>
    );
  },
});
