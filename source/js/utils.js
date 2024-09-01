document.querySelector('.about__container h2').dataset.name = document.querySelector('.about__container h2').textContent;

const launchUtils = () => {
  const titlesShadow = document.querySelectorAll('.title-shadow');

  titlesShadow.forEach((element) => {
    element.dataset.name = element.textContent;
  });
};

export {launchUtils};
