(function(root) {
  'use strict';

  var SearchResultsPanel = root.SearchResultsPanel = React.createClass({
    mixins: [ReactRouter.History],

    componentDidMount: function () {
      window.addEventListener('click', this.handleOutsideClick, false);
    },

    componentWillUnmount: function () {
      window.removeEventListener('click', this.handleOutsideClick, false);
    },

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
      ApiUtil.fetchSingleCategory(id);
      this.props.onClick();
    },

    handleFoodClick: function(id, e){
      e.preventDefault();
      ApiUtil.fetchSingleAndRecommendedFoodItems(id);
      this.history.pushState(null, "/food_items/" + id.toString());
    },

    handleMouseEnter: function (e) {
      this.props.handleMouseEnter(e.target.value);
    },

    handleOutsideClick: function (e) {
      e.preventDefault();
      if (this.props.searching) {
        this.props.disable();
      }
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
      var i = -1;

      return(
        <div id="search-results-panel">
          <ul>
            {this.categorySearchHeader()}
            {this.props.categoryResults.map(function(result) {
              i++;
              var selected = "";
              if (this.props.selectedResult === i) {
                selected = "selected-result";
              }
              return(
                <li key={result.id}
                    onMouseEnter={this.props.handleMouseEnter}
                    onClick={this.handleCategoryClick.bind(null, result.id)}
                    id="search-result"
                    data-index={i}
                    className={selected}>
                  {result.name}
                </li>
              );
            }.bind(this))}
            {this.foodSearchHeader()}
            {this.props.foodResults.map(function(result) {
              i++;
              var selected = "";
              if (this.props.selectedResult === i) {
                selected = "selected-result";
              }
              return(
                <li key={result.id}
                    onMouseEnter={this.props.handleMouseEnter}
                    onClick={this.handleFoodClick.bind(null, result.id)}
                    id="search-result"
                    data-index={i}
                    className={selected}>
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
