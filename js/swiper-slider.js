const swiper = new Swiper('.swiper', {
  speed: 1300,
  loop: true,
  slidesPerView: 5,
  // slidesPerGroup: 1.5,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});