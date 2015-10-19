var ApiUtil = {
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
  fetchFilteredFoodItems: function(query) {
    if(query !== '') {
      $.ajax({
        url: "api/food_items",
        data: {search: query},
        success: function(filteredFoodItems) {
          ApiActions.receiveFilteredFoodItems(filteredFoodItems);
        }
      });
    } else {
      ApiActions.receiveFilteredFoodItems([]);
    }
  },
  fetchFilteredFoodItem: function(id) {
    $.ajax({
      url: "api/food_items/" + id,
      success: function(foodItem) {
        ApiActions.receiveFilteredFoodItem(foodItem);
      }
    });
  }
};
