$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    keyboard: { enabled: true },
    loop: true,
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    keyboard: { enabled: true },
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });
  let menuButton = $(".menu-button");
  menuButton.on("click", () => {
    $(".navbar-menu").toggleClass("navbar-menu_visible");
  });
  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    console.log(targetModal)
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
    $(document).on("keydown", function (e) {
      if (e.keyCode == 27) {
        closeModal(event);
      }
    });
  }
  function closeModal(event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }
  $(document).mouseup(function (e) {
    var container = $(".modal__dialog");
    if (container.has(e.target).length === 0) {
      closeModal(event);
    }
  });
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please specify your phone",
          minlength: "Phone must be at least 10 letters long",
        },
      },
    });
  }),
  $(".phone_us").mask("+7 (000) 000-0000")
  // $(document).ready(function () {
  //   $(".phone_us").mask("+7 (000) 000-0000");
  // });
  AOS.init();
});
