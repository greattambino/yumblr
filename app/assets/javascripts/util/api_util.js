var ApiUtil = {
  fetchCurrentUser: function (userId) {
    $.ajax({
      url: '/api/users/' + userId,
      type: 'get',
      dataType: 'json',
      success: function (user) {
        ApiActions.receiveCurrentUser(user);
      }
    });
  },

  fetchCuisines: function() {
    $.ajax({
      url: "api/cuisines",
      success: function(cuisines) {
        ApiActions.receiveCuisines(cuisines);
      }
    });
  },

  fetchAllRestaurants: function() {
    $.ajax({
      url: "api/restaurants",
      success: function(restaurants) {
        ApiActions.receiveAllRestaurants(restaurants);
      }
    });
  },
  fetchSingleRestaurant: function(id) {
    $.ajax({
      url: "api/restaurants/" + id,
      success: function(restaurant) {
        ApiActions.receiveSingleRestaurant(restaurant);
      }
    });
  },
  fetchAllFoodItems: function() {
    $.ajax({
      url: "api/food_items",
      success: function(foodItems) {
        ApiActions.receiveAllFoodItems(foodItems);
      }
    });
  },
  fetchFilteredFoodItems: function(query, cuisine_id, location, radius) {
    $.ajax({
      url: "api/food_items",
      data: {search: query, cuisine: cuisine_id, location: location, radius: radius},
      success: function(filteredFoodItems) {
        FilterActions.receiveFilteredFoodItems(filteredFoodItems);
      }
    });
  },

  fetchQueryResults: function(query, cuisine_id) {
    $.ajax({
      url: "api/food_items",
      data: {search: query, cuisine: cuisine_id},
      success: function(queryResults) {
        FilterActions.receiveQueryResults(queryResults);
      }
    });
  },

  fetchLocation: function() {
    navigator.geolocation.getCurrentPosition(this.setLocation);
  },

  setLocation: function(pos) {
    // this.full_address = null;
    geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);

    // this.full_address = geocoder.geocode({'latLng': latlng}, function(results, status) {
    // 	if (status == google.maps.GeocoderStatus.OK) {
    //     var result = results[0];
    //
    //     var street_number = "";
    //     var street_name = "";
    //     var city = "";
    //     var state = "";
    //     for(var i=0, len=result.address_components.length; i<len; i++) {
    //     	var ac = result.address_components[i];
    //     	if(ac.types.indexOf("street_number") >= 0) street_number = ac.long_name;
    //     	if(ac.types.indexOf("route") >= 0) street_name = ac.long_name;
    //     	if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
    //     	if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.short_name;
    //     }
    //     if(city !== '' && state !== '') {
    //       this.full_address = (street_number+" "+street_name+", "+city+", "+state);
    //     }
    // 	}
    // }.bind(this));
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    var location = { lat: lat, lng: lng };
    FilterActions.receiveLocation(location);
  },

  updateLocation: function(location) {
    FilterActions.receiveLocation(location);
  },

  updateRadius: function(radius) {
    FilterActions.receiveRadius(radius);
  },

  // fetchFilteredFoodItems: function(query, cuisine_id) {
  //   debugger;
  //   if(query !== '') {
  //     $.ajax({
  //       url: "api/food_items",
  //       data: {search: query, cuisine: cuisine_id},
  //       success: function(filteredFoodItems) {
  //         ApiActions.receiveFilteredFoodItems(filteredFoodItems);
  //       }
  //     });
  //   } else {
  //     ApiActions.receiveFilteredFoodItems([]);
  //   }
  // },
  fetchFilteredFoodItem: function(id) {
    $.ajax({
      url: "api/food_items/" + id,
      success: function(foodItem) {
        FilterActions.receiveFilteredFoodItem(foodItem);
      }
    });
  }
};
