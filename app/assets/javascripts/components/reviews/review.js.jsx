(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;

  var Review = root.Review = React.createClass({
    getInitialState: function() {
      return {
        showForm: !UserStore.currentUserHasReviewed(this.props.foodItem.id)
      };
    },

    componentDidMount: function() {
      ReviewStore.addCreateListener(this.disableForm);
      ReviewStore.addDestroyListener(this.enableForm);
      UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      ReviewStore.removeCreateListener(this.disableForm);
      ReviewStore.removeDestroyListener(this.enableForm);
      UserStore.removeChangeListener(this._onChange);
    },

    componentWillReceiveProps: function (newProps) {
      if (this.props.foodItem !== newProps.foodItem) {
        this.setState({
          showForm: !UserStore.currentUserHasReviewed(newProps.foodItem.id)
        });
      }
    },

    disableForm: function() {
      this.setState({ showForm: false });
    },

    enableForm: function() {
      this.setState({ showForm: true });
    },

    _onChange: function () {
      this.setState({
        showForm: !UserStore.currentUserHasReviewed(this.props.foodItem.id)
      });
    },

    renderReviewForm: function () {
      var foodItemId = this.props.foodItem.id;
      return(
        <ReviewEditForm
          foodItemId={foodItemId}
          newReview={true} />
      );
    },

    renderUserReviews: function () {
      var currentUser = UserStore.currentUser(),
          currentUserId = currentUser.id,
          currentUserUsername = currentUser.username,
          currentUserReviews = currentUser.reviews,
          foodItemId = this.props.foodItem.id,
          foodItemName = this.props.foodItem.name;

      return(
        <UserReviewIndex
          currentUserUsername={currentUserUsername}
          currentUserId={currentUserId}
          currentUserReviews={currentUserReviews}
          foodItemId={foodItemId}
          foodItemName={foodItemName} />
      );
    },

    render: function () {
      var reviewHeader,
          currentUser = UserStore.currentUser(),
          currentUserId = currentUser.id,
          foodItemId = this.props.foodItem.id;

      if (this.state.showForm) {
        reviewHeader = this.renderReviewForm();
      } else {
        reviewHeader = this.renderUserReviews();
      }

      return (
        <div id="review-modal-container">
          <Modal
            className="review-modal-dialog"
            show={this.props.show}
            onHide={this.props.onHide}
            container={this}
            aria-labelledby="contained-modal-title">
            <Modal.Header className="review-modal-header" closeButton>
              <Modal.Title id="contained-modal-title">
                <span className="review-modal-name">
                  Recommended Reviews
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body id="review-modal-content">
              <div className="review-container">
                <div className="review-food-item-header">
                  {this.props.foodItem.name}
                </div>
                {reviewHeader}
              </div>
              <div className="review-modal-index">
                <ReviewIndex foodItemId={this.props.foodItem.id} />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  });
})(this);
