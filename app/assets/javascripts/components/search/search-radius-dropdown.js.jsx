(function(root) {
  'use strict';

  var RadiusDropdown = root.RadiusDropdown = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({ selectedRadius: 5 });
    },

    updateRadius: function(e){
      // var searchStr = this.state.searchString,
      //     cuisine = this.state.selectedCuisine,
      //     location = this.state.location,
      //     radius = this.state.selectedRadius;
      e.preventDefault();
      this.setState({ selectedRadius: e.currentTarget.value });
      ApiUtil.fetchFilteredFoodItems(this.props.searchString, this.props.selectedCuisine, this.props.location, this.state.selectedRadius);
    },

    render: function () {
      var radius = ["0.1", "0.5", "1", "2", "5"];
      return(
        <ul className="dropdown-menu dropdown-menu-location" role="menu" name="radius">
          <li value="99999999999" onClick={this.updateRadius}>All</li>
          {radius.map(function(r){
            return <li key={r} onClick={this.updateRadius} value={r}>{r}</li>;
          }.bind(this))}
        </ul>

      );
    }
  });
}(this));
