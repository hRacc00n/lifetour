import { burgerButton, navigationList } from './variables';


const onBurgerSwitchDisplay = () => {
  burgerButton.classList.toggle('toggle-burger--open');
  navigationList.classList.toggle('header__navigation--close');
  if (burgerButton.classList.contains('toggle-burger--open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.removeProperty('overflow');
  }
};

export {onBurgerSwitchDisplay};
