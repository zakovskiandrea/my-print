if (window.innerWidth >= 768) {
  var swiper = new Swiper(".swiper-container--homepage", {
    slidesPerView: 1,
    direction: "vertical",
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

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
    nextEl: ".similar-products__slider-box .arrow--next",
    prevEl: ".similar-products__slider-box .arrow--prev",
  },
});

var swiper = new Swiper(".swiper-container--locations", {
  loop: true,
  slidesPerView: window.innerWidth < 576 ? 1 : window.innerWidth < 992 ? 2 : 3,
  spaceBetween: 0,
  navigation: {
    nextEl: ".locations-slider .arrow--next",
    prevEl: ".locations-slider .arrow--prev",
  },
});

var swiper = new Swiper(".swiper-container--outsideBranding", {
  slidesPerView: 1.5,
  spaceBetween: 15,
});

var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
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

  $(".input-number-box .minus").click(function () {
    let currentNum = $(this).siblings("input").val() * 1;
    if (currentNum === 1) return;
    $(this)
      .siblings("input")
      .val(currentNum - 1);
  });

  $(".input-number-box .plus").click(function () {
    let currentNum = $(this).siblings("input").val() * 1;
    $(this)
      .siblings("input")
      .val(currentNum + 1);
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

gsap.to(".homepage-branding", {
  scrollTrigger: {
    start: "top +=80",
    pin: ".homepage-branding__img",
    endTrigger: ".container-right",
    end: "bottom +=100%",
  },
});

let sections = gsap.utils.toArray(".homepage-branding__content");

sections.forEach((element) => {
  gsap.to(".homepage-branding__content", {
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom",
      // markers: true,
      onEnter: (progress) => {
        document
          .querySelectorAll(".branding-img")
          .forEach((img) => (img.style.opacity = 0));
        document.querySelector("." + progress.trigger.id).style.opacity = 1;
        document
          .querySelectorAll(".homepage-branding__link")
          .forEach((element) => {
            element.classList.remove("active");
          });

        $(`a[href="#${progress.trigger.id}"]`).addClass("active");
      },
      onLeaveBack: (progress) => {
        const contentString = progress.trigger.id;
        const num = contentString.slice(-1) * 1 - 1;
        if (num === 0) return;
        const newContentString =
          contentString.substring(0, contentString.length - 1) + num;
        document
          .querySelectorAll(".branding-img")
          .forEach((img) => (img.style.opacity = 0));
        document.querySelector("." + newContentString).style.opacity = 1;
        document
          .querySelectorAll(".homepage-branding__link")
          .forEach((element) => {
            element.classList.remove("active");
            $(`a[href="#${newContentString}"]`).addClass("active");
          });
      },
    },
  });
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $(".homepage-branding__link").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1200,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
$(document).ready(() => {
  $("#exampleModal").on("show.bs.modal", function (e) {
    setTimeout(() => {
      galleryTop.update();
      galleryThumbs.update();
    }, 300);
  });
});

$(".select-dropdown-box select").change(function (e) {
  console.log($(this).val());
  if ($(this).val() === "custom") {
    $(".input-dimensions").css("display", "inline-block");
  } else {
    $(".input-dimensions").css("display", "none");
  }
});

// $(".characteristics__btn").click(() => {
//   $(".modal-dialog").modal("show");
// });
