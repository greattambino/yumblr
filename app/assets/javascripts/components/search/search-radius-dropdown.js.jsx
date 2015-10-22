(function(root) {
  'use strict';

  function _getRadius(){
    return FilteredFoodItemStore.params().radius;
  }

  var RadiusDropdown = root.RadiusDropdown = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({ selectedRadius: _getRadius() });
    },

    componentDidMount: function(){
      FilteredFoodItemStore.addChangeListener(this._onRadiusChange);
    },

    componentWillUnmount: function(){
      FilteredFoodItemStore.removeChangeListener(this._onRadiusChange);
    },

    _onRadiusChange: function() {
      this.setState({ selectedRadius: _getRadius() });
    },

    updateRadius: function(r, e){
      e.preventDefault();
      // this.setState({ selectedRadius: e.currentTarget.value });
      FilterActions.updateRadius(r);
      ApiUtil.fetchFilteredFoodItems(this.props.searchString,
                                     this.props.selectedCuisine,
                                     this.props.location,
                                     r);
    },

    render: function () {
      var radius = ["0.1", "0.5", "1", "2", "5"];
      return(
        <ul className="dropdown-menu dropdown-menu-location" role="menu" name="radius">
          <li value="99999999999" onClick={this.updateRadius.bind(null, 99999999999)}>All</li>
          {radius.map(function(r){
            return <li key={r} onClick={this.updateRadius.bind(null, r)} value={r}>{r}</li>;
          }.bind(this))}
        </ul>
      );
    }
  });
}(this));
