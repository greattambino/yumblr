(function(root) {
  'use strict';

  function _getRadius(){
    return ParamsStore.params().radius;
  }

  function _getLocation(){
    return ParamsStore.params().location;
  }

  var RadiusDropdown = root.RadiusDropdown = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({ selectedRadius: _getRadius(), location: _getLocation() });
    },

    componentDidMount: function(){
      ParamsStore.addParamsListener(this._onChange);
    },

    componentWillUnmount: function(){
      ParamsStore.removeParamsListener(this._onChange);
    },

    _onChange: function() {
      this.setState({ selectedRadius: _getRadius(), location: _getLocation() });
    },

    updateRadius: function(r, e){
      e.preventDefault();
      ApiUtil.updateRadius(r);
    },

    render: function () {
      var radius = ["0.2", "0.5", "1.5", "3", "5", "10"];

      return(
        <ul className="dropdown-menu dropdown-menu-location" role="menu" name="radius">
          <li value="99999999999"
              onClick={this.updateRadius.bind(null, 99999999999)}>
              Filter by distance
          </li>
          {radius.map(function(r){
            return <li id={this.state.selectedRadius === r ? "selected-radius" : ""}
                       key={r}
                       onClick={this.updateRadius.bind(null, r)}
                       value={r}>{r} Miles
                   </li>;
          }.bind(this))}
        </ul>
      );
    }
  });
}(this));
