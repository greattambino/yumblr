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
  fetchFilteredFoodItems: function(query, cuisine_id, location, radius) {
      $.ajax({
        url: "api/food_items",
        data: {search: query, cuisine: cuisine_id, location: location, radius: radius},
        success: function(filteredFoodItems) {
          ApiActions.receiveFilteredFoodItems(filteredFoodItems);
        }
      });
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
        ApiActions.receiveFilteredFoodItem(foodItem);
      }
    });
  }
};
