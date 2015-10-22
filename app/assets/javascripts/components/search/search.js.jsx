(function(root) {
  'use strict';

  var SearchBar = root.SearchBar = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({ searchString: '',
               searching: false,
               location: { lat: 37.77493,
                           lng: -122.419416,
                           address: "San Francisco, CA 94103, USA"
                         },
               selectedCuisine: -1,
               cuisines: CuisineStore.all(),
               searchResults: FilteredFoodItemStore.all()
             });
    },
              //  foodItemId: null,

    componentWillMount: function() {
      ApiUtil.fetchAllFoodItems();
    },

    componentDidMount: function() {
      var that = this;
      navigator.geolocation.getCurrentPosition(this.setLocation);
      $("#geocomplete")
        .geocomplete()
        .bind("geocode:result", function(event, results){
          that.setState({ location: {
            lat: results.geometry.location.lat(),
            lng: results.geometry.location.lng(),
            address: results.formatted_address
            // postal_code: results.address_components.postal_code.long_name,
            // city: results.address_components.locality.long_name,
            // state: results.address_components.administrative_area_level_1.long_name
          }});
          ApiUtil.fetchFilteredFoodItems(that.state.searchString, that.state.selectedCuisine, that.state.location, that.state.selectedRadius);
        });
      // $("#geocomplete").geocomplete({location: "#locationDetails"});
      CuisineStore.addChangeListener(this._onChange);
      FilteredFoodItemStore.addChangeListener(this._onChange);
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

    handleSubmit: function(e) {
      e.preventDefault();
      var foodItem = FilteredFoodItemStore.next();
      // this.setState({ foodItemId: foodItem.id });
      // ApiUtil.fetchNextFilteredFoodItem(foodItem.id);
      console.log(FilteredFoodItemStore.all());
      // console.log(cuisine_id);
      this.history.pushState(null, "/food_items/" + foodItem.id);
      this.setState({ searchString: '', searching: false });
    },
    // handleEnter: function(e) {
    //
    //   if(e.charCode === 13) {
    //     e.preventDefault();
    //     var foodItem = FilteredFoodItemStore.next();
    //     // this.setState({ foodItemId: foodItem.id });
    //     // ApiUtil.fetchNextFilteredFoodItem(foodItem.id);
    //     console.log(FilteredFoodItemStore.all());
    //     // console.log(cuisine_id);
    //     this.history.pushState(null, "/food_items/" + foodItem.id);
    //     this.setState({ searchString: '', searching: false });
    //   }
    // },

    handleChange: function(e) {
      console.log(e.target.value);
      var cuisine_id = this.state.selectedCuisine;
      ApiUtil.fetchFilteredFoodItems(e.target.value, cuisine_id);
      // ApiUtil.fetchFilteredFoodItems(e.target.value, cuisine_id, this.state.location, this.state.selectedRadius);
      this.setState({ searchString: e.target.value, searching: true });
    },

    handleGenerate: function(e) {
      var foodItem = FilteredFoodItemStore.next();
      this.history.pushState(null, "/food_items/" + foodItem.id);
      this.setState({ searchString: '', searching: false });
    },

    setLocation: function(pos) {
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      var location = { lat: lat, lng: lng };
      this.setState({ location: location });
    },

    updateCuisine: function(e){
      this.setState({ selectedCuisine: e.target.value });
      ApiUtil.fetchFilteredFoodItems(this.state.searchString, e.currentTarget.value);
      // ApiUtil.fetchFilteredFoodItems(this.state.searchString, e.currentTarget.value, this.state.location, this.state.selectedRadius);
    },

    // updateLocation: function(e){
    //   ApiUtil.fetchFilteredFoodItems(this.state.searchString, e.currentTarget.value);
    //   this.setState({ location: e.target.value });
    // },
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
                onSubmit={this.handleSubmit}
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

          <ul className="nav navbar-nav" onClick={this.handleGenerate}>
            <GenerateBtn />
          </ul>


          <form role="search" className="navbar-form navbar-left" id="location-search-bar">
            <div className="form-group search-form">
              <button type="button" className="btn btn-default dropdown-toggle search-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon-menu-hamburger search-glyphicon"></span>
              </button>
                <RadiusDropdown searchString={this.state.searchString}
                                selectedCuisine={this.state.selectedCuisine}
                                location={this.state.location} />
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

            </div>
          </form>
        </div>
      );
    }
  });
}(this));

// onChange={this.updateLocation}
