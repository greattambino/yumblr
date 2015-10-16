(function(root) {
  'use strict';

  var ResultsBox = root.ResultsBox = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function() {
      return({ searchString: '', searchResults: FilteredFoodItemStore.all() });
    },
    componentDidMount: function() {
      FilteredFoodItemStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
      FilteredFoodItemStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
      this.setState({ searchResults: FilteredFoodItemStore.all() });
    },
    handleEnter: function(e) {
      if(e.charCode === 13) {
        this.history.pushState(null, "/food_items/" + FilteredFoodItemStore.next().id);
      }
    },

    handleChange: function(e) {
      ApiUtil.fetchFilteredFoodItems(e.target.value);
      this.setState({ searchString: e.target.value });
    },
    // handleSubmit: function(result) {
    //   this.setState({ searchString: '' });
    //   ApiUtil.fetchFilteredFoodItems('');
    //   this.history.pushState(null, "/food_items/" + result.id.toString());
    // },
    render: function() {

      return(
        <form role="search" className="navbar-form navbar-left" id="find-search-box">
          <div className="form-group">
            <label htmlFor="find-search">Find &nbsp;</label>
            <input id="find-search"
                   ref="searchInput"
                   onKeyPress={this.handleEnter}
                   onChange={this.handleChange}
                   type="text"
                   className="form-control"
                   placeholder="Everything"
                   value={this.state.searchString} />
          </div>
          <div className="display-find-results">
            <ul>
              {this.state.searchResults.map(function(result) {
                return <li key={result.id}>
                         {result.name}
                       </li>;
              }.bind(this))}
            </ul>
          </div>
        </form>
      );
    }
  });
}(this));














//
//
//
// return(
//   <div className="navbar-form navbar-left" role="search">
//     <div className="form-group">
//       <input onChange={this.handleChange}
//              type="text"
//              className="form-control"
//              placeholder="Everything"
//              value={this.state.searchString}/>
//     </div>
//     <div>
//       <ul>
//         {this.state.searchResults.map(function(result) {
//           return <li key={result.id} onSubmit={this.handleSubmit.bind(null, result)}>
//                    {result.name}
//                  </li>;
//         }.bind(this))}
//       </ul>
//     </div>
//   </div>
// );
//
//
//
//
//  onSubmit={this.handleSubmit.bind(null, result)}
// .bind(this)
//
//
//     doSearch:function(queryText){
//       FilteredFoodItemStore.addChangeListener(this._updateFilteredData(queryText));
//
//
//           updateFoodItems: function(queryText) {
//             console.log(queryText);
//
//             var queryResult=[];
//             this.state.filteredData.forEach(function(food_item){
//               if(food_item.name.toLowerCase().indexOf(queryText) != -1) {
//                 queryResult.push(food_item);
//               }
//             });
//
//             this.setState({
//               query:queryText,
//               filteredData: queryResult
//             });
//           },
//     },
//
//     render:function(){
//       return (
//         <div className="ResultsBox">
//           <SearchBox query={this.state.query} doSearch={this.doSearch}/>
//           <DisplayPanel data={this.state.filteredData}/>
//         </div>
//       );
//     }
// });
