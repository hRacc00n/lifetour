import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperHero = new Swiper('.hero__swiper', {
  modules: [Pagination],
  pagination: {
    el: '.hero__paginations',
    clickable: true,
  },
  breakpoints: {
    320: {
      loop: true,
      simulateTouch: true,
    },
    1440: {
      simulateTouch: false,
    }
  }
});

const swiperTours = new Swiper('.tours__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.tours__button-next',
    prevEl: '.tours__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      simulateTouch: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      simulateTouch: false,
    }
  }
});

export { swiperHero, swiperTours };
