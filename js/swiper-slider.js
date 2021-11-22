const swiper = new Swiper('.swiper', {
  speed: 1300,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      centeredSlides: true
    },
    1440: {
      slidesPerView: 5
    }
  },

});