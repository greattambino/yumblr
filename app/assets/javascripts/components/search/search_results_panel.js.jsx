(function(root) {
  'use strict';

  var SearchResultsPanel = root.SearchResultsPanel = React.createClass({
    mixins: [ReactRouter.History],

    categorySearchHeader: function() {
      if (this.props.categoryResults.length > 0) {
        return (
          <li key="category-header" className="list-header">Categories: </li>
        );
      }
    },

    foodSearchHeader: function() {
      if (this.props.foodResults.length > 0) {
        return (
          <li key="food-header" className="list-header">Food Items: </li>
        );
      }
    },

    handleCategoryClick: function(id, e){
      e.preventDefault();
      this.history.pushState(null, "/food_items/" + id.toString());
    },

    handleFoodClick: function(id, e){
      e.preventDefault();
      this.history.pushState(null, "/food_items/" + id.toString());
    },

    noResults: function() {
      if (this.props.foodResults.length === 0 &&
          this.props.categoryResults.length === 0) {
        return (
          <li key="no-result" className="no-result">No results found</li>
        );
      }
    },

    render: function () {
      // var idName = "";
      // if (this.props.foodResults.length !== 0 &&
      //     this.props.categoryResults.length !== 0 &&
      //     this.props.searching) {
      //   idName = "search-results-panel";
      // }

      return(
        <div id="search-results-panel">
          <ul>
            {this.categorySearchHeader()}
            {this.props.categoryResults.map(function(result) {
              return(
                <li key={result.id}
                    onClick={this.handleCategoryClick.bind(null, result.id)}
                    id="search-result">
                  {result.name}
                </li>
              );
            }.bind(this))}
            {this.foodSearchHeader()}
            {this.props.foodResults.map(function(result) {
              return(
                <li key={result.id}
                    onClick={this.handleFoodClick.bind(null, result.id)}
                    id="search-result">
                  {result.name}
                </li>
              );
            }.bind(this))}
            {this.noResults()}
          </ul>
        </div>
      );
    }
  });
}(this));
