var ApiUtil = {
  fetchAllFoodItems: function() {
    $.ajax({
      url: "api/food_items",
      success: function(foodItems) {
        ApiActions.receiveAllFoodItems(foodItems);
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

  fetchCategorySearchResults: function(query) {
    $.ajax({
      url: "api/categories",
      data: {search: query},
      success: function(categorySearchResults) {
        FilterActions.receiveCategorySearchResults(categorySearchResults);
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

  fetchFilteredFoodItem: function(id) {
    $.ajax({
      url: "api/food_items/" + id,
      success: function(foodItem) {
        FilterActions.receiveFilteredFoodItem(foodItem);
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

  fetchFoodSearchResults: function(query, cuisine_id) {
    $.ajax({
      url: "api/food_items",
      data: {search: query, cuisine: cuisine_id},
      success: function(foodSearchResults) {
        FilterActions.receiveQueryResults(foodSearchResults);
      }
    });
  },

  fetchLocation: function() {
    navigator.geolocation.getCurrentPosition(this.setLocation);
  },

  fetchSingleRestaurant: function(id) {
    $.ajax({
      url: "api/restaurants/" + id,
      success: function(restaurant) {
        ApiActions.receiveSingleRestaurant(restaurant);
      }
    });
  },

  setLocation: function(pos) {
    geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        lat = pos.coords.latitude,
        lng = pos.coords.longitude,
        location = { lat: lat, lng: lng };
    FilterActions.receiveLocation(location);
  },

  updateLocation: function(location) {
    FilterActions.receiveLocation(location);
  },

  updateRadius: function(radius) {
    FilterActions.receiveRadius(radius);
  }
};
