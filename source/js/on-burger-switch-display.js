import { burgerButton, navigationList } from './variables';

const shadowDivProperty = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2D383F;
  opacity: 0.6;
  z-index: 2;
`;

const openList = () => {
  const header = document.querySelector('.header');
  const shadowDiv = document.createElement('div');

  shadowDiv.style.cssText = shadowDivProperty;
  shadowDiv.classList.add('shadowDiv');
  document.body.append(shadowDiv);

  header.style.zIndex = 3;
  header.style.position = 'relative';

  document.body.style.overflow = 'hidden';
};

const closeList = () => {
  if (document.querySelector('.shadowDiv')) {
    document.querySelector('.shadowDiv').remove();
  }
  document.body.style.removeProperty('overflow');
};

window.addEventListener('resize', () => {
  if (window.screen.width >= 1440) {
    closeList();
  }
  if (window.screen.width < 1440 && burgerButton.classList.contains('toggle-burger--open') && !document.querySelector('.shadowDiv')) {
    openList();
  }
});

const onBurgerSwitchDisplay = () => {
  burgerButton.classList.toggle('toggle-burger--open');
  navigationList.classList.toggle('header__navigation--close');

  if (burgerButton.classList.contains('toggle-burger--open')) {
    openList();
  } else {
    closeList();
  }
};

export {onBurgerSwitchDisplay};
