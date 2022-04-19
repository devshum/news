var swiper = new Swiper(".news-hero__swiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".news-hero-next",
    prevEl: ".news-hero-prev",
  }
});
