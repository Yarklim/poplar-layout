const activeBtn = document.querySelectorAll('.carousel__item');
const rangeAmount = document.getElementById('my-slider');
const api = document.querySelectorAll('.api');
const depositPeriod = document.querySelectorAll('.calculate-box__item-period');
const depositResult = document.querySelectorAll(
  '.calculate-box__deposit-amount'
);

let periodNumber = 12;
let depositAmount = parseInt(rangeAmount.value);

document.addEventListener('click', function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;

  periodNumber = parseInt(targetElement.textContent);

  // ============ Toggle class Activ, change text content ==========
  if (targetElement.closest('.carousel__item')) {
    activeBtn.forEach((el, index) => {
      if (el.classList.contains('active-btn')) {
        currentActiveIndex = index;
        el.classList.remove('active-btn');
      }
      if (el === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active-btn');
  }

  if (periodNumber) {
    depositPeriod.forEach((el) =>
      periodNumber === 1
        ? (el.textContent = `in ${periodNumber} month you will have`)
        : (el.textContent = `in ${periodNumber} months you will have`)
    );

    //  ================ Calculate deposit amount ===============
    depositResult.forEach((el) => {
      if (el.classList.contains('poplar-amount')) {
        el.textContent = `$${periodNumber * depositAmount * 100}`;
      } else {
        el.textContent = `$${periodNumber * depositAmount * 3}`;
      }
    });
  }
});

function toCalcApy(apy, sum, period) {
  return 100 * (1 + apy / sum) * (365 / period) - 1;
}
