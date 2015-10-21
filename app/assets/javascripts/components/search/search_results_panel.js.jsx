(function(root) {
  'use strict';

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

// var SearchBox = React.createClass({
//     doSearch:function(){
//         var query=this.refs.searchInput.getDOMNode().value;
//         this.props.doSearch(query); // make an ajax request instead
//     },
//     render:function(){
//       return(
//         <div className="form-group">
//           <label htmlFor="find-search">Find </label>
//           <input id="find-search"
//                  ref="searchInput"
//                  type="text"
//                  value={this.props.query}
//                  onChange={this.doSearch}
//                  placeholder="Everything"
//                  className="form-control" />
//         </div>
//       );
//     }
// });
