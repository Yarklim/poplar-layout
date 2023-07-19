// const onScrollLock = () => {
//   const isOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//   openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//   mobileMenu.classList.toggle('is-open');

//   const scrollLockMethod = !isOpen ? 'disableBodyScroll' : 'enableBodyScroll';
//   bodyScrollLock[scrollLockMethod](document.body);
// };

// openMenuBtn.addEventListener('click', toggleMenu);
// closeMenuBtn.addEventListener('click', toggleMenu);

// // Close the mobile menu on wider screens if the device orientation changes
// window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
//   if (!e.matches) return;
//   mobileMenu.classList.remove('is-open');
//   openMenuBtn.setAttribute('aria-expanded', false);
//   bodyScrollLock.enableBodyScroll(document.body);
// });

const scrollController = {
  disabledScroll() {
    document.body.style.cssText = `overflow: hidden;`;
  },
};
