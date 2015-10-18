(function(root) {
  'use strict';
              //  cuisines: CuisineStore.all(),
  var ResultsBox = root.ResultsBox = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function() {
      return({ searchString: '',

               searchResults: FilteredFoodItemStore.all()
             });
    },
    componentDidMount: function() {
      FilteredFoodItemStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
      FilteredFoodItemStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
      this.setState({ searchResults: FilteredFoodItemStore.all() });
    },
    handleEnter: function(e) {
      if(e.charCode === 13) {
        e.preventDefault();
        var foodItem = FilteredFoodItemStore.next();
        this.history.pushState(null, "/food_items/" + foodItem.id);
      }
    },
    handleChange: function(e) {
      console.log(e.target.value);
      ApiUtil.fetchFilteredFoodItems(e.target.value);
      this.setState({ searchString: e.target.value });
    },
    // handleSubmit: function(result) {
    //   this.setState({ searchString: '' });
    //   ApiUtil.fetchFilteredFoodItems('');
    //   this.history.pushState(null, "/food_items/" + result.id.toString());
    // },
    render: function() {

      return(
        <div id="navbar-center">
          <form role="search" className="navbar-form navbar-left" id="find-search-box">
            <div className="form-group search-form">
              <button type="button" className="btn btn-default dropdown-toggle search-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon-menu-hamburger search-glyphicon"></span>
              </button>

                <ul className="dropdown-menu dropdown-menu-food" role="menu">
                  <li><a href="#">All</a></li>
                  <li><a href="#">American</a></li>
                  <li><a href="#">Italian</a></li>
                  <li><a href="#">Chinese</a></li>
                  <li><a href="#">Japanese</a></li>
                  <li><a href="#">Vegitarian</a></li>

                </ul>
                <div className="search-label form-control">
                  Find
                </div>
                <input ref="searchInput"
                       onKeyPress={this.handleEnter}
                       onChange={this.handleChange}
                       type="text"
                       className="search-input form-control"
                       placeholder="Everything"
                       value={this.state.searchString} />
            </div>
          </form>

          <ul className="nav navbar-nav">
            <li className="generate-btn active"><a href="#">Y</a></li>
          </ul>

          <form role="search" className="navbar-form navbar-left" id="location-search-box">
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
                <input type="text"
                       placeholder="Nearby"
                       ref="locationSearchInput"
                       className="search-input form-control" />
            </div>
          </form>
        </div>
      );
    }
  });
}(this));
