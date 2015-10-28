(function (root) {
  'use strict';

  var Carousel = ReactBootstrap.Carousel;
  var CarouselItem = ReactBootstrap.CarouselItem;

  var SplashCarousel = root.SplashCarousel = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    render: function () {
      var imgSrc1 = "http://res.cloudinary.com/yumblr/image/upload/v1445983531/app/1229987_10151863306617980_579903060_n-e1381982434558.jpg";
      var imgSrc2 = "http://res.cloudinary.com/yumblr/image/upload/v1445983532/app/o-FOOD-facebook.jpg";
      var imgSrc3 = "http://res.cloudinary.com/yumblr/image/upload/v1445983531/app/6.jpg";

      return(
        <div id="splash-background">
          <Splash />

        <Carousel style={{
            position: 'absolute',
            top: '0',
            minHeight: '100vh'
          }} >
           <CarouselItem>
             <img src={imgSrc1} style={{
                 objectFit: 'cover',
                 width: '100vw',
                 height: '100vh',
                 position: 'relative'
               }} />
             <div className="carousel-caption">
               <h1>Can't decide what to eat?</h1>
               <p>We'll help you choose something delicious in your area.</p>
             </div>
           </CarouselItem>
           <CarouselItem>
             <img src={imgSrc2} style={{
                 objectFit: 'cover',
                 width: '100vw',
                 height: '100vh',
                 position: 'relative'
               }} />
             <div className="carousel-caption">
               <h1>Browse popular food items</h1>
               <p>Filter by cuisine, category, & location.</p>
             </div>
           </CarouselItem>
           <CarouselItem>
             <img src={imgSrc3} style={{
                 objectFit: 'cover',
                 width: '100vw',
                 height: '100vh',
                 position: 'relative'
               }} />
             <div className="carousel-caption">
               <h1>Create an account!</h1>
               <p>So you can keep track of your favorite food items.</p>
             </div>
           </CarouselItem>
         </Carousel>
       </div>
      );
    }
  });
})(this);


// var imgSrc = "http://res.cloudinary.com/yumblr/image/upload/v1445983532/app/o-FOOD-facebook.jpg";
// return (
//   <div className="modal-container" style={{height: 200}}>
//     <div className="splash-background">
//       <img alt="" src={imgSrc} />
//       <SplashCarousel />
