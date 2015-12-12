(function (root) {
  'use strict';

  var Modal = ReactBootstrap.Modal;

  var Review = root.Review = React.createClass({
    getInitialState: function() {
      return { content: "", rating: 3.5 };
    },

    handleRatingChange: function (rating) {
      this.setState({ rating: rating });
    },

    render: function () {
      return (
        <div id="review-modal-container">
          <Modal
            show={this.props.show}
            onHide={this.props.onHide}
            container={this}
            aria-labelledby="contained-modal-title">
            <Modal.Header className="review-modal-header" closeButton>
              <Modal.Title id="contained-modal-title">
                <span className="review-modal-name">
                  {this.props.foodItem.name}
                </span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body id="review-modal-content">
              <div id="review-rating-container" >
                <Rating
                  rating={this.props.rating}
                  readOnly={false}
                  onClick={this.handleRatingChange}
                />
              </div>
              <div className="row">
                <div className="span12">
                  <form id="custom-search-form" className="form-search form-horizontal">
                    <div className="input-append span12">
                      <input type="text" className="search-query mac-style" placeholder="Write a review" />
                      <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="review-modal-details">

              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  });
})(this);
