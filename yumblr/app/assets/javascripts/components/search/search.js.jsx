(function(root) {
  'use strict';

  var SearchBar = root.SearchBar = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({ searchString: '',
               searching: false,
               selectedCuisine: -1,
               cuisines: CuisineStore.all(),
               searchResults: FilteredFoodItemStore.all()
             });
    },

    componentWillMount: function() {
      ApiUtil.fetchAllFoodItems();
    },

    componentDidMount: function() {
      FilteredFoodItemStore.addChangeListener(this._onChange);
      CuisineStore.addChangeListener(this._onChange);
      ApiUtil.fetchCuisines();
    },

    componentWillUnmount: function() {
      FilteredFoodItemStore.removeChangeListener(this._onChange);
      CuisineStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
      this.setState({ searchResults: FilteredFoodItemStore.all() });
      this.setState({ cuisines: CuisineStore.all() });
    },

    handleEnter: function(e) {
      if(e.charCode === 13) {
        e.preventDefault();
        var foodItem = FilteredFoodItemStore.next();
        // ApiUtil.fetchNextFilteredFoodItem(foodItem.id);
        console.log(FilteredFoodItemStore.all());
        // console.log(cuisine_id);
        this.history.pushState(null, "/food_items/" + foodItem.id);
        this.setState({ searchString: '', searching: false });
      }
    },

    handleChange: function(e) {
      console.log(e.target.value);
      var cuisine_id = this.state.selectedCuisine;
      ApiUtil.fetchFilteredFoodItems(e.target.value, cuisine_id);
      this.setState({ searchString: e.target.value });
      this.setState({ searching: true });
    },

    updateCuisine: function(e){
      ApiUtil.fetchFilteredFoodItems(this.state.searchString, e.currentTarget.value);
      this.setState({ selectedCuisine: e.target.value });
    },
    // handleSubmit: function(result) {
    //   this.setState({ searchString: '' });
    //   ApiUtil.fetchFilteredFoodItems('');
    //   this.history.pushState(null, "/food_items/" + result.id.toString());
    // },
    render: function() {
      var resultsPanel;
      if (this.state.searching) {
        resultsPanel = <SearchResultsPanel results={this.state.searchResults}/>;
      }
      return(
        <div id="navbar-center">
          <form role="search"
                onKeyPress={this.handleEnter}
                className="navbar-form navbar-left"
                id="find-search-bar">
            <div className="form-group search-form">
              <button type="button" className="btn btn-default dropdown-toggle search-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon-menu-hamburger search-glyphicon"></span>
              </button>

                <ul className="dropdown-menu dropdown-menu-food" role="menu" name="cuisines">
                  <li value="-1" onClick={this.updateCuisine}>All Cuisines</li>
                  {this.state.cuisines.map(function(cuisine){
                    return <li key={cuisine.id} onClick={this.updateCuisine} value={cuisine.id}>{cuisine.cuisine}</li>;
                  }.bind(this))}
                </ul>
                <div className="search-label form-control">
                  Find
                </div>
                <input ref="searchInput"
                       onChange={this.handleChange}
                       type="text"
                       className="search-input form-control"
                       placeholder="Everything"
                       name="searchQuery"
                       value={this.state.searchString} />
            </div>
          </form>
          {resultsPanel}

          <GenerateBtn />

          <form role="search" className="navbar-form navbar-left" id="location-search-bar">
            <div className="form-group search-form">
              <button type="button" className="btn btn-default dropdown-toggle search-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon-menu-hamburger search-glyphicon"></span>
              </button>

                <ul className="dropdown-menu dropdown-menu-location" role="menu">
                  <li><a href="#">All</a></li>
                  <li><a href="#">San Francisco</a></li>
                  <li><a href="#">Oakland</a></li>

                </ul>
                <div className="search-label form-control">
                  Near
                </div>
                <input type="text"
                       placeholder="Nearby"
                       ref="locationSearchInput"
                       className="search-input form-control" />
            </div>
          </form>
        </div>
      );
    }
  });
}(this));


// <li><a href="#">All</a></li>
// <li><a href="#">American</a></li>
// <li><a href="#">Italian</a></li>
// <li><a href="#">Chinese</a></li>
// <li><a href="#">Japanese</a></li>
// <li><a href="#">Vegitarian</a></li>
