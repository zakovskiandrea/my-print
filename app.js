var swiper = new Swiper(".swiper-container--homepage", {
  slidesPerView: 1,
  // loop: true,
  direction: "vertical",
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});

var swiper = new Swiper(".swiper-container--eshop", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".homepage-eshop__slider-box .arrow--next",
    prevEl: ".homepage-eshop__slider-box .arrow--prev",
  },
});

var swiper = new Swiper(".swiper-container--products", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".homepage-products__slider-box .arrow--next",
    prevEl: ".homepage-products__slider-box .arrow--prev",
  },
});

var swiper = new Swiper(".swiper-container--similar-products", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".similar-products__slider-box .arrow--next",
    prevEl: ".similar-products__slider-box .arrow--prev",
  },
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("header--active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("header--active");
  }
});

$(document).ready(function () {
  $(".collapse--category")
    .on("shown.bs.collapse", function () {
      $(this)
        .parent()
        .find(".fa-plus")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hidden.bs.collapse", function () {
      $(this)
        .parent()
        .find(".fa-minus")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
});
