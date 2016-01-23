(function(root) {
  'use strict';

  var ButtonToolbar = ReactBootstrap.ButtonToolbar;
  var OverlayTrigger = ReactBootstrap.OverlayTrigger;
  var Tooltip = ReactBootstrap.Tooltip;

  var SearchBar = root.SearchBar = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({ searchString: '',
               searching: false,
               selectedCuisine: -1,
               cuisines: CuisineStore.all(),
               foodSearchResults: [],
               categorySearchResults: [],
               selectedResult: 0
             });
    },

    componentWillMount: function() {
      ApiUtil.fetchLocation();
    },

    componentDidMount: function() {
      $("#geocomplete")
        .geocomplete()
        .bind("geocode:result", function(event, results){
          ApiUtil.updateLocation({
            lat: results.geometry.location.lat(),
            lng: results.geometry.location.lng(),
            address: results.formatted_address
          });
        });

      FilteredFoodItemStore.addChangeListener(this._onChange);
      ParamsStore.addQueryListener(this._onQueryChange);
      CuisineStore.addChangeListener(this._onCuisinesChange);
      ApiUtil.fetchCuisines();
      ApiUtil.fetchAllFoodItems();
    },

    componentWillUnmount: function() {
      FilteredFoodItemStore.removeChangeListener(this._onChange);
      ParamsStore.removeQueryListener(this._onQueryChange);
      CuisineStore.removeChangeListener(this._onCuisinesChange);
    },

    _onChange: function() {
      var foodItem = FilteredFoodItemStore.next();
      this.history.pushState(null, "/food_items/" + foodItem.id);
    },

    _onQueryChange: function() {
      this.setState({
        foodSearchResults: ParamsStore.foodSearchResults(),
        categorySearchResults: ParamsStore.categorySearchResults()
      });
    },

    _onCuisinesChange: function() {
      this.setState({ cuisines: CuisineStore.all() });
    },

    handleChange: function(e) {
      var query = e.target.value;

      ApiUtil.fetchFoodSearchResults(query, this.state.selectedCuisine);
      ApiUtil.fetchCategorySearchResults(query);
      if (query !== "") {
        this.setState({ searchString: query, searching: true });
      } else {
        this.setState({ searchString: query, searching: false });
      }
      this.setState({ selectedResult: 0 });
    },

    handleClick: function(e) {
      this.setState({ searchString: '', searching: false });
    },

    handleOutsideClick: function(e) {
      this.setState({ searching: false });
    },

    updateCuisine: function(e){
      this.setState({ selectedCuisine: e.target.value });
      ApiUtil.fetchFilteredFoodItems(
        this.state.searchString,
        e.currentTarget.value
      );
    },

    handleSubmit: function(e) {
      e.preventDefault();

      var searchString = this.state.searchString,
          cuisine      = this.state.selectedCuisine,
          location     = ParamsStore.params().location,
          radius       = ParamsStore.params().radius,
          results      = this.state.categorySearchResults.
                           concat(this.state.foodSearchResults),
          selected     = results[this.state.selectedResult].name;

      ApiUtil.fetchFilteredFoodItems(
        selected,
        cuisine,
        location,
        radius
      );

      this.setState({
        searchString: '',
        searching: false,
        selectedResult: 0
      });
    },

    handleGenerate: function(e) {
      var foodItem = FilteredFoodItemStore.next();
      this.history.pushState(null, "/food_items/" + foodItem.id);
      this.setState({ searchString: '', searching: false });
    },

    handleKeyDown: function (e) {
      var selected = this.state.selectedResult,
          index;

      if (this.state.searching) {
        switch (e.which) {
          case 38:
            if (selected !== 0) {
              index = selected - 1;
              document.getElementById("search-results-panel").
                scrollTop = index * 36;
              this.setState({ selectedResult: index });
            }
            break;
          case 40:
            var foodLength = this.state.foodSearchResults.length,
            categoryLength = this.state.categorySearchResults.length,
            searchResultsLength = foodLength + categoryLength;

            if (selected + 1 < searchResultsLength) {
              index = selected + 1;
              document.getElementById("search-results-panel").
                scrollTop = index * 36;
              this.setState({ selectedResult: index });
            }
            break;
        }
      }
    },

    tooltipEntered: function() {
      setTimeout(function(){
        $('.tooltip').tooltip('hide');
      }, 2000);
    },

    updateSelectedResult: function (e) {
      var results = this.state.categorySearchResults.
            concat(this.state.foodSearchResults),
          selected = results[this.state.selectedResult].name;

      for (var i = 0; i < results.length; i++) {
        if (e.target.innerHTML === results[i].name) {
          this.setState({ selectedResult: i });
        }
      }
    },

    render: function() {
      var findInputTooltip = (
        <Tooltip>Search by name or category (i.e. sandwich, sushi, salad).</Tooltip>
      );
      var cuisineDropdownTooltip = (
        <Tooltip>Filter by cuisine.</Tooltip>
      );
      var radiusDropdownTooltip = (
        <Tooltip>Filter by distance.</Tooltip>
      );
      var locationInputTooltip = (
        <Tooltip>Filter by location.</Tooltip>
      );

      var resultsPanel;
      if (this.state.searching) {
        resultsPanel = <SearchResultsPanel
          foodResults={this.state.foodSearchResults}
          categoryResults={this.state.categorySearchResults}
          searching={this.state.searching}
          onClick={this.handleClick}
          disable={this.handleOutsideClick}
          selectedResult={this.state.selectedResult}
          handleMouseEnter={this.updateSelectedResult} />;
      }

      return(
        <div id="center" style={this.props.style}>
          <form role="search"
                onSubmit={this.handleSubmit}
                className="navbar-form navbar-left"
                id="find-search-bar">
            <div className="form-group search-form">
              <OverlayTrigger
                placement="bottom"
                overlay={cuisineDropdownTooltip}>
                <button type="button"
                        className="btn btn-default dropdown-toggle search-btn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                  <span className="glyphicon glyphicon-menu-hamburger search-glyphicon"></span>
                </button>
              </OverlayTrigger>
              <ul className="dropdown-menu dropdown-menu-food" role="menu" name="cuisines">
                <li value="-1" onClick={this.updateCuisine}>All Cuisines</li>
                {this.state.cuisines.map(function(cuisine){
                  return <li key={cuisine.id}
                             onClick={this.updateCuisine}
                             value={cuisine.id}>
                             {cuisine.cuisine}
                         </li>;
                }.bind(this))}
              </ul>

              <OverlayTrigger
                placement="bottom"
                id="findInputTooltip"
                onEnter={this.tooltipEntered}
                dataToggle="tooltip"
                overlay={findInputTooltip}>
                <span className="findInputTooltip">
                  <div className="search-label form-control">
                    Find
                  </div>
                  <input ref="searchInput"
                         onChange={this.handleChange}
                         type="text"
                         className="search-input form-control"
                         placeholder="Everything"
                         name="searchQuery"
                         value={this.state.searchString}
                         onKeyDown={this.handleKeyDown} />
                 </span>
               </OverlayTrigger>
            </div>
          </form>


          {resultsPanel}

          <ul className="nav navbar-nav" onClick={this.handleGenerate}>
            <GenerateBtn />
          </ul>

          <form role="search" className="navbar-form navbar-left" id="location-search-bar">
            <div className="form-group search-form">
              <OverlayTrigger
                placement="bottom"
                overlay={radiusDropdownTooltip}>
                <button type="button"
                        className="btn btn-default dropdown-toggle search-btn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                  <span className="glyphicon glyphicon-menu-hamburger search-glyphicon"></span>
                </button>
              </OverlayTrigger>
              <RadiusDropdown
                searchString={this.state.searchString}
                selectedCuisine={this.state.selectedCuisine}
              />

              <OverlayTrigger
                placement="bottom"
                overlay={locationInputTooltip}>
                <span>
                  <div className="search-label form-control">
                    Near
                  </div>
                  <input className="search-input form-control"
                         id="geocomplete"
                         type="text"
                         name="location"
                         placeholder="Nearby" />

                  <div id="locationDetails" className="hide">
                    <input name="lat" type="hidden" value="" />
                    <input name="lng" type="hidden" value="" />
                    <input name="postal_code" type="hidden" value="" />
                    <input name="city" type="hidden" value="" />
                    <input name="state" type="hidden" value="" />
                  </div>
                </span>
              </OverlayTrigger>
            </div>
          </form>
        </div>
      );
    }
  });
}(this));
