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
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".homepage-eshop__slider-box .arrow--next",
    prevEl: ".homepage-eshop__slider-box .arrow--prev",
  },
});

var swiper = new Swiper(".swiper-container--branding", {
  slidesPerView: 1,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        "testing" +
        '">' +
        "Vnatreshno Brendiranje" +
        "</span>"
      );
    },
  },
});
