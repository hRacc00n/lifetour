// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { onBurgerSwitchDisplay } from './on-burger-switch-display';
import { burgerButton, form } from './variables';
import { swiperAdv, swiperGallery, swiperHero, swiperReviews, swiperTours, swiperTraining } from './swipers';
import { onSubmitCheckForm } from './on-submit-check-form';

burgerButton.addEventListener('click', onBurgerSwitchDisplay);

swiperHero.update();
swiperTours.update();
swiperTraining.update();
swiperReviews.update();
swiperAdv.update();
swiperGallery.update();

document.querySelector('.about__container h2').classList.add('title-shadow');
const titlesShadow = document.querySelectorAll('.title-shadow');

titlesShadow.forEach((element) => {
  element.dataset.name = element.textContent;
});

form.addEventListener('submit', onSubmitCheckForm);
