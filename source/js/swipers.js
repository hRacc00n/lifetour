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
  autoHeight: true,
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
  autoHeight: true,
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

const swiperTraining = new Swiper('.training__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.training__button-next',
    prevEl: '.training__button-prev',
  },
  autoHeight: true,
  breakpoints: {
    320: {
      initialSlide: 2,
      slidesPerView: 1,
      simulateTouch: true,
    },
    768: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      simulateTouch: false,
    }
  }
});

const swiperReviews = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      simulateTouch: true,
    },
    768: {
      slidesPerView: 1.265,
      spaceBetween: 30,
      simulateTouch: true,
    },
    1440: {
      slidesPerView: 1.756,
      spaceBetween: 120,
      simulateTouch: false,
    }
  }
});

const swiperAdv = new Swiper('.adv__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.adv__button-next',
    prevEl: '.adv__button-prev',
  },
  enabled: false,
  breakpoints: {
    1440: {
      enabled: true,
      slidesPerView: 'auto',
      initialSlide: 4,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      slidesPerGroup: 2,
      simulateTouch: false,
    }
  }
});

window.addEventListener('resize', () => {
  const advItems = document.querySelectorAll('.adv__item');
  const advList = document.querySelector('.adv__list');

  if (window.screen.width >= 1440) {
    advList.classList.add('swiper-wrapper');
    advItems.forEach((element) => {
      if (!element.classList.contains('swiper-slide')) {
        element.classList.add('swiper-slide');
      }
    });
  } else {
    swiperAdv.disable();
    advList.classList.remove('swiper-wrapper');
    advItems.forEach((element) => {
      if (element.classList.contains('swiper-slide')) {
        element.classList.remove('swiper-slide');
      }
    });
  }
});

export { swiperHero, swiperTours, swiperTraining, swiperReviews, swiperAdv };
