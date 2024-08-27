// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { onBurgerSwitchDisplay } from './on-burger-switch-display';
import { burgerButton } from './variables';
import { swiperAdv, swiperGallery, swiperHero, swiperReviews, swiperTours, swiperTraining } from './swipers';

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

/* формы */

const phoneInput = document.querySelector('#phone');
const phoneText = document.querySelector('.form__phone');
const emailInput = document.querySelector('#email');
const emailText = document.querySelector('.form__email');
const form = document.querySelector('.form__content');

const currentPhone = /^\d{10}$/;
const currentEmail = /^[a-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.(com|net|org|ru|рф)$/;

const chandeDisplayText = (element, textElement, text) => {
  if (element.value === '') {
    textElement.textContent = text;
  } else {
    textElement.textContent = '';
  }
};

const checkInput = (element, currentElement, errorClass, evt) => {
  if (!currentElement.test(element.value) || element.value === '') {
    evt.preventDefault();
    element.classList.add(errorClass);
  }
};

chandeDisplayText(phoneInput, phoneText, 'Телефон');

phoneInput.addEventListener('input', () => {
  chandeDisplayText(phoneInput, phoneText, 'Телефон');
  phoneInput.value = phoneInput.value.replace(/^\s+|\s+$/g, '');
  if (currentPhone.test(phoneInput.value)) {
    phoneInput.classList.remove('form__input--error');
  }
  if (phoneInput.value === '') {
    phoneInput.classList.remove('form__input--error');
  }
});

emailInput.addEventListener('input', () => {
  chandeDisplayText(emailInput, emailText, 'Email');
  emailInput.value = emailInput.value.replace(/^\s+|\s+$/g, '');
  if (currentEmail.test(emailInput.value)) {
    emailInput.classList.remove('form__input--error');
  }
});

form.addEventListener('submit', (evt) => {
  checkInput(phoneInput, currentPhone, 'form__input--error', evt);
  checkInput(emailInput, currentEmail, 'form__input--error', evt);
});
