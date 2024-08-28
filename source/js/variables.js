const burgerButton = document.querySelector('.toggle-burger');
const navigationList = document.querySelector('.header__navigation');
const phoneInput = document.querySelector('#phone');
const phoneText = document.querySelector('.form__phone');
const emailInput = document.querySelector('#email');
const emailText = document.querySelector('.form__email');
const form = document.querySelector('.form__content');
const currentPhone = /^\d{10}$/;
const currentEmail = /^[a-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.(com|net|org|ru|рф)$/;

export {burgerButton, navigationList, phoneInput, phoneText, emailInput, emailText, form, currentPhone, currentEmail};
