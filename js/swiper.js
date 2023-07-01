var swiper = new Swiper(".myVisual", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  loop: true

});

var swiper = new Swiper(".myBestSellers", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  breakpoints: {
    0: {
        slidesPerView: 2, //화면에 보이는 이미지 갯수
        spaceBetween: 30, //이미지사이의 여백
    },
    500: {
        slidesPerView: 2.5,
        spaceBetween: 30,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".myMainCollect", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myMainReview", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  breakpoints: {
    0: {
        slidesPerView: 2, //화면에 보이는 이미지 갯수
        spaceBetween: 30, //이미지사이의 여백
    },
    500: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 30,
    },
  },
});