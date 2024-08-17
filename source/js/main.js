// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { onBurgerSwitchDisplay } from './on-burger-switch-display';
import { burgerButton } from './variables';
import { swiperHero, swiperTours, swiperTraining } from './swipers';

burgerButton.addEventListener('click', onBurgerSwitchDisplay);

swiperHero.update();
swiperTours.update();
swiperTraining.update();

const titlesShadow = document.querySelectorAll('.title-shadow');

titlesShadow.forEach((element) => {
  element.dataset.name = element.textContent;
});
