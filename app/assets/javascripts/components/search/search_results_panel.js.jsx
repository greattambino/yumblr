(function(root) {
  'use strict';

  function _getQueryResults(){
    return FilteredFoodItemStore.queryResults();
  }

  var SearchResultsPanel = root.SearchResultsPanel = React.createClass({
    mixins: [ReactRouter.History],

    handleClick: function(id, e){
      e.preventDefault();
      this.history.pushState(null, "/food_items/" + id.toString());
    },

    render: function () {
      var idName = "";

      if (this.props.results.length !== 0) {
        idName = "search-results-panel";
      }

      return(
        <div id={idName}>
          <ul>
            {this.props.results.map(function(result) {
              return(
                <li key={result.id}
                    onClick={this.handleClick.bind(null, result.id)}
                    id="search-result">
                  {result.name}
                </li>
              );
            }.bind(this))}
          </ul>
        </div>
      );
    }
  });
}(this));
