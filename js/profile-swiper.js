const costume = new Swiper('#costume-swiper', {
  loop:true,
  autoplay:{
    delay:5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const illust = new Swiper('#illust-swiper', {
  slidesPerView: 1,
  spaceBetween:100,
  loop:true,
  autoplay:{
    delay:5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const sdillust = new Swiper('#sdillust-swiper', {
  slidesPerView: 1,
  breakpoints: {
    1024:{
      slidesPerView: 3,
    }
  },
  spaceBetween:30,
  loop:true,
  autoplay:{
    delay:5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});