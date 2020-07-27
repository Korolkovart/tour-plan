var hotelSlider = new Swiper('.hotel-slider', {
  // keyboard control
  keyboard: {
    enabled: true,
  },
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});

var reviewsSlider = new Swiper('.reviews-slider', {
  // keyboard control
  keyboard: {
    enabled: true,
  },
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});

$('.newsletter').parallax({imageSrc: '../img/newsletter-bg.jpeg'});