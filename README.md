# FresherNote

[Heroku link][heroku] **NB:** This will be a link to Yumblr

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Can't decide what to eat? Yumblr is like a Stumble Upon for discovering what to
eat based on images of popular food items in your area (or the location you set
  it to). It is built using Ruby on Rails and React.js, and allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Browse through popular food items
- [ ] View details about the item such as (price, rating, location, restaurant, etc.)
- [ ] View details about the food item’s restaurant
- [ ] Utilize Google Map's API for directions to the restaurant
- [ ] Filter by food category, open now, price, etc.
- [ ] Narrow/widen the search radius based on the user’s current location
- [ ] Search by city
- [ ] “Like” a food item and save it to his/her favorites list


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Backend Models, JSON API, and Heroku Setup (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for FoodItems and Restaurants.
Lastly, I will setup Heroku.

[Details][phase-one]

### Phase 2: Flux Architecture and FoodItem CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a FoodItem store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the landing page.

Lastly, while constructing the views I will start using basic bootstrap for
styling.

[Details][phase-two]

### Phase 3: Restaurants, Categories and Likes (2 days)

Phase 3 adds organization to the FoodItems. FoodItems belong to a Restaurant,
which has its own `Index` view. Create JSON API for Restaurants. FoodItems can
also be liked by users. Users can filter notes in a separate `SearchIndex`
view by searching for their filters.

[Details][phase-three]

### Phase 4: Allow Complex Styling in Notes (1 day)

Utilize Google Map's API to allow location based searching. Implement search
filter dropdown so users can narrow the FoodItems being generated based on their
selected filters.

[Details][phase-four]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements.

### Bonus Features (TBD)
- [ ] Search for other users
- [ ] Add/remove users
- [ ] View other users’ favorites list
- [ ] Share FoodItems with friends
- [ ] Create a page for businesses to sign up
- [ ] First generated FoodItem as "Featured" for ad rev
- [ ] Change num likes to ratings
- [ ] User reviews
- [ ] User avatar


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
