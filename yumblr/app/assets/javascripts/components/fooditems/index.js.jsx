// (function(root) {
//
//   root.FoodItemIndex = React.createClass({
//     getInitialState: function() {
//       return {food_items: FoodItemStore.all()};
//     },
//
//     componentDidMount: function() {
//       ApiUtil.fetchAllFoodItems();
//       FoodItemStore.addChangeListener(this._updateFoodItems);
//     },
//
//     _updateFoodItems: function() {
//       this.setState({food_items: FoodItemStore.all()});
//     },
//
//     render: function() {
//       return(
//         <div className="container">
//           <div className="food_item-index">
//             <div className="food_items">
//               {this.state.food_items.map(function(food_item) {
//                 return(
//                   <FoodIndexItem key={food_item.id} item={food_item} />
//                 );
//               }) }
//             </div>
//           </div>
//         </div>
//       );
//     }
//   });
//
// }(this));
