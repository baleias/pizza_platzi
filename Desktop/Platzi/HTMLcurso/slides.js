$(document).ready(function() {

    $('.sliding').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 400,
    autoplay: true,  
    autoplaySpeed: 5000,
    easing: 'linear',
    arrows: true,
    fade: false,
    pauseOnHover: true, 
    swipe: true,
    });
  });