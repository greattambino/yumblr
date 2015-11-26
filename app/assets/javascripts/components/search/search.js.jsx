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
              //  foodSearchResults: ParamsStore.foodSearchResults()
               foodSearchResults: [],
               categorySearchResults: []
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
      this.setState({ foodSearchResults: ParamsStore.foodSearchResults(),
                      categorySearchResults: ParamsStore.categorySearchResults() });
    },

    _onCuisinesChange: function() {
      this.setState({ cuisines: CuisineStore.all() });
    },

    handleChange: function(e) {
      ApiUtil.fetchFoodSearchResults(e.target.value, this.state.selectedCuisine);
      ApiUtil.fetchCategorySearchResults(e.target.value);
      if (e.target.value !== "") {
        this.setState({ searchString: e.target.value, searching: true });
      } else {
        this.setState({ searchString: e.target.value, searching: false });
      }
    },

    updateCuisine: function(e){
      this.setState({ selectedCuisine: e.target.value });
      ApiUtil.fetchFilteredFoodItems(this.state.searchString, e.currentTarget.value);
    },

    handleSubmit: function(e) {
      e.preventDefault();
      // this.setState({ foodItemId: foodItem.id });
      ApiUtil.fetchFilteredFoodItems(this.state.searchString,
                                     this.state.selectedCuisine,
                                     ParamsStore.params().location,
                                     ParamsStore.params().radius);
      this.setState({ searchString: '', searching: false });
    },

    handleGenerate: function(e) {
      var foodItem = FilteredFoodItemStore.next();
      this.history.pushState(null, "/food_items/" + foodItem.id);
      this.setState({ searchString: '', searching: false });
    },

    tooltipEntered: function() {
      setTimeout(function(){
        $('.tooltip').tooltip('hide');
      }, 2000);
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
        />;
      }

      return(
        <div id="center">
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
                         value={this.state.searchString} />
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
