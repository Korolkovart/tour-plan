$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // keyboard control
    keyboard: {
      enabled: true,
    },
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });
  
  var reviewsSlider = new Swiper(".reviews-slider", {
    // keyboard control
    keyboard: {
      enabled: true,
    },
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });
  
  let menuButton = $(".menu-button");
  menuButton.on("click", () => {
    $(".navbar-menu").toggleClass("navbar-menu_visible");
  });

  let modalButton = $('[data-toggle=modal]');
  let closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal(){
    let modalOverlay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay_visible');
    modalDialog.addClass('modal__dialog_visible');
    $(document).on('keydown', function(e) {
      if (e.keyCode == 27){
        closeModal(event);
      }
    });
  }

  function closeModal(event){
    event.preventDefault();
    let modalOverlay = $('.modal__overlay');
    let modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay_visible');
    modalDialog.removeClass('modal__dialog_visible');
  }

  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name:{
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters long"
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Please specify your phone",
        }
      },
    });
  });
  $(document).ready(function(){
    $('.phone_us').mask('+7 (000) 000-0000');
  });
  AOS.init();
});