# Phase 3: Restaurants, Categories and Likes (2 days)

## Rails
### Models
* Category
* Restaurant Category
* Like

### Controllers
* Api::RestaurantsController (create, destroy, index, show, update)

### Views
* restaurants/index.json.jbuilder
* restaurants/show.json.jbuilder
* likes/show.json.jbuilder
* categories/index.json.jbuilder
* categories/show.json.jbuilde

## Flux
### Views (React Components)
* RestaurantsIndex
  - RestaurantIndexItem
* NotebookForm
* SearchBar

### Stores
* RestaurantStore

### Actions
* ApiActions.receiveAllRestaurants
* ApiActions.receiveSingleRestaurant
* ApiActions.deleteRestaurant
* ApiActions.searchRestaurants

### ApiUtil
* ApiUtil.fetchAllRestaurants
* ApiUtil.fetchSingleRestaurant

## Gems/Libraries
