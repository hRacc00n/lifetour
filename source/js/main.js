// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { onBurgerSwitchDisplay } from './on-burger-switch-display';
import { burgerButton } from './variables';
// Swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

burgerButton.addEventListener('click', onBurgerSwitchDisplay);

const swiper = new Swiper('.hero__swiper', {
  modules: [Pagination],
  pagination: {
    el: '.hero__paginations',
    clickable: true,
  },
  breakpoints: {
    320: {
      loop: true,
    },
  }
});
