(function (root) {
  'use strict';

  var Link = ReactRouter.Link;

  var UserLikeIndexItem = root.UserLikeIndexItem = React.createClass({
    render: function () {
      return (
        <div className="cover-card col-sm-4"
             style={{
               backgroundImage: 'url(' + this.props.like.foodItemImage + ')',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               backgroundSize: '100%'
             }}>
          <p>
            <span className="cover-card-restaurant">
              {this.props.like.restaurant}
            </span><br></br>
            {this.props.like.foodItem}
          </p>
        </div>

      );
    }
  });
})(this);
