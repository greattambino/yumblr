(function(root) {
  'use strict';

  var SearchBar = root.SearchBar = React.createClass({
    mixins: [ReactRouter.History],

    getInitialState: function() {
      return({ searchString: '',
               searching: false,
               location: { lat: 37.77493,
                           lng: -122.419416,
                           postal_code: "94103",
                           city: "San Francisco",
                           state: "CA"
                         },
               selectedCuisine: -1,
               cuisines: CuisineStore.all(),
               searchResults: FilteredFoodItemStore.all()
             });
    },

    componentWillMount: function() {
      ApiUtil.fetchAllFoodItems();
    },

    componentDidMount: function() {
      // $("#geocomplete")
      //   .geocomplete()
      //   .bind("geocode:result", function(event, results){
      //     debugger
      //     this.setState({ location: {
      //       lat: event.currentTarget.lat.value,
      //       lng: event.target.lng.value,
      //       postal_code: event.target.postal_code.value,
      //       city: event.currentTarget.city.value,
      //       state: event.target.state.value
      //     }});
      //   })
      $("#geocomplete").geocomplete({location: "#locationDetails"});
      navigator.geolocation.getCurrentPosition(this.setLocation);
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
      this.setState({ searchString: e.target.value, searching: true });
    },

    setLocation: function(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var location = { lat: lat, lng: lng };
      this.setState({ location: location });
    },

    updateCuisine: function(e){
      ApiUtil.fetchFilteredFoodItems(this.state.searchString, e.currentTarget.value);
      this.setState({ selectedCuisine: e.target.value });
    },

    // updateLocation: function(event){

    // },

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
