var ApiUtil = {
  fetchAllFoodItems: function() {
    $.ajax({
      url: "api/food_items",
      success: function(foodItems) {
        ApiActions.receiveAllFoodItems(foodItems);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchAllRestaurants: function() {
    $.ajax({
      url: "api/restaurants",
      success: function(restaurants) {
        ApiActions.receiveAllRestaurants(restaurants);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchCategorySearchResults: function(query) {
    $.ajax({
      url: "api/categories",
      data: {search: query},
      success: function(categorySearchResults) {
        FilterActions.receiveCategorySearchResults(categorySearchResults);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchCuisines: function() {
    $.ajax({
      url: "api/cuisines",
      success: function(cuisines) {
        ApiActions.receiveCuisines(cuisines);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchCurrentUser: function(userId) {
    $.ajax({
      url: '/api/users/' + userId,
      type: 'get',
      dataType: 'json',
      success: function(user) {
        ApiActions.receiveCurrentUser(user);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchFilteredFoodItem: function(id) {
    $.ajax({
      url: "api/food_items/" + id,
      success: function(foodItem) {
        FilterActions.receiveFilteredFoodItem(foodItem);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchFilteredFoodItems: function(query, cuisine_id, location, radius) {
    $.ajax({
      url: "api/food_items",
      data: {search: query, cuisine: cuisine_id, location: location, radius: radius},
      success: function(filteredFoodItems) {
        FilterActions.receiveFilteredFoodItems(filteredFoodItems);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchFoodSearchResults: function(query, cuisine_id) {
    $.ajax({
      url: "api/food_items",
      data: {search: query, cuisine: cuisine_id},
      success: function(foodSearchResults) {
        FilterActions.receiveQueryResults(foodSearchResults);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchLocation: function() {
    navigator.geolocation.getCurrentPosition(this.setLocation);
  },

  fetchSingleAndRecommendedFoodItems: function(id) {
    $.ajax({
      url: "api/food_items/" + id,
      success: function(foodItem) {
        FilterActions.receiveFilteredFoodItem(foodItem);
        foodItem.categories.map(function(category) {
          $.ajax({
            url: "api/categories/" + category.id,
            success: function(categoryResult) {
              FilterActions.receiveRecommendedFoodItems(categoryResult.food_items);
            },
            error: function(errors) {
              ApiActions.receiveErrors(errors.responseJSON);
            }
          });
        });
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchSingleCategory: function(id) {
    $.ajax({
      url: "api/categories/" + id,
      success: function(categorySearchResults) {
        // FilterActions.receiveCategorySearchResults([categorySearchResults]);
        FilterActions.receiveFilteredFoodItems(categorySearchResults.food_items);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchSingleRestaurant: function(id) {
    $.ajax({
      url: "api/restaurants/" + id,
      success: function(restaurant) {
        ApiActions.receiveSingleRestaurant(restaurant);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
      }
    });
  },

  fetchSingleUser: function(userId) {
    $.ajax({
      url: '/api/users/' + userId,
      type: 'get',
      dataType: 'json',
      success: function(user) {
        ApiActions.receiveSingleUser(user);
      },
      error: function(errors) {
        ApiActions.receiveErrors(errors.responseJSON);
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
