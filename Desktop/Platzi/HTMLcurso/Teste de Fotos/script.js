$(document).ready(function() {

    $('.my-class').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 2,
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