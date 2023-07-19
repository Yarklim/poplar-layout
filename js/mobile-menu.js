const hamburger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header__nav-menu');
const navBtn = document.querySelector('.header__button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');
  navMenu.classList.toggle('is-open');
  navBtn.classList.toggle('is-open');
});

document.querySelector('.active').addEventListener('click', (e) => {
  e.preventDefault();
  hamburger.classList.remove('is-open');
  navMenu.classList.remove('is-open');
  navBtn.classList.remove('is-open');
});
