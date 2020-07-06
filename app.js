// var swiper = new Swiper(".swiper-container--homepage", {
//   slidesPerView: 1,
//   // loop: true,
//   direction: "vertical",
//   autoplay: {
//     delay: 5000,
//   },
//   speed: 1000,
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: false,
//   },
// });

var swiper = new Swiper(".swiper-container--eshop", {
  loop: true,
  slidesPerView:
    window.innerWidth < 769
      ? 1.5
      : window.innerWidth < 992
      ? 2
      : window.innerWidth < 1441
      ? 3
      : 4,
  spaceBetween: window.innerWidth < 1199 ? 15 : 30,
  navigation: {
    nextEl: ".homepage-eshop__slider-box .arrow--next",
    prevEl: ".homepage-eshop__slider-box .arrow--prev",
  },
});

var swiper = new Swiper(".swiper-container--products", {
  loop: true,
  slidesPerView:
    window.innerWidth < 769
      ? 1.5
      : window.innerWidth < 992
      ? 2
      : window.innerWidth < 1441
      ? 3
      : 4,
  spaceBetween: window.innerWidth < 1199 ? 15 : 30,
  navigation: {
    nextEl: ".homepage-products__slider-box .arrow--next",
    prevEl: ".homepage-products__slider-box .arrow--prev",
  },
});

var swiper = new Swiper(".swiper-container--similar-products", {
  loop: true,
  slidesPerView: window.innerWidth < 1441 ? 3 : 4,
  spaceBetween: window.innerWidth < 1199 ? 15 : 30,
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

  $(".input-number-box .minus").click(() => {
    let currentNum = $(".input-number-box input").val() * 1;
    if (currentNum === 1) return;
    $(".input-number-box input").val(currentNum - 1);
  });

  $(".input-number-box .plus").click(() => {
    let currentNum = $(".input-number-box input").val() * 1;
    $(".input-number-box input").val(currentNum + 1);
  });
});

$(".header-phone__dropbtn").click((e) => {
  console.log("hi");
  $(".header-phone__dropdown-content").toggleClass("show");
  e.stopPropagation();
});

$(document).click(function () {
  $(".header-phone__dropdown-content").removeClass("show");
});
