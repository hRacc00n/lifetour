import { currentEmail, currentPhone, emailInput, emailText, phoneInput, phoneText } from './variables';


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
    element.classList.add('form__input--show-error');
    setTimeout(() => {
      element.classList.remove('form__input--show-error');
    }, 1000);
  }
};

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
  if (emailInput.value === '') {
    emailInput.classList.remove('form__input--error');
  }
});

const onSubmitCheckForm = (evt) => {
  checkInput(phoneInput, currentPhone, 'form__input--error', evt);
  checkInput(emailInput, currentEmail, 'form__input--error', evt);
};

export { onSubmitCheckForm };
