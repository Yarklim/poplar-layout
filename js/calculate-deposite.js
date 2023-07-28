const depositTabs = document.querySelector('.deposit__calc');
const inputRange = document.querySelector('.my-slider');
const periodBtn = document.querySelector('.carousel__item');
const periodBtnList = document.querySelectorAll('.carousel__item');
const depositPeriod = document.querySelectorAll('.calculate-box__item-period');
const depositResult = document.querySelectorAll(
  '.calculate-box__deposit-result'
);

depositTabs.addEventListener('click', onChangeTextContent);
depositTabs.addEventListener('click', toggleActivBtn);
depositTabs.addEventListener('change', onChangeTextContent);

let period = parseInt(periodBtn.textContent);
let amount = parseInt(inputRange.value);

function onChangeTextContent(e) {
  if (e.target.classList.contains('carousel__item')) {
    period = parseInt(e.target.textContent);
  }
  if (e.target.classList.contains('my-slider')) {
    amount = parseInt(e.target.value);
  }

  depositResult.forEach((el) => {
    if (el.classList.contains('poplar-result')) {
      el.textContent = `$${Number(
        toReinvestApi(80, period, amount).toFixed(2)
      ).toLocaleString('en')}`;
    }
    if (el.classList.contains('payment')) {
      el.textContent = `$${Math.round(
        toCalculateDeposit(1, period, amount)
      ).toLocaleString('en')}`;
    }
    if (el.classList.contains('traditional')) {
      el.textContent = `$${Math.round(
        toCalculateDeposit(3, period, amount)
      ).toLocaleString('en')}`;
    }
  });

  if (period) {
    depositPeriod.forEach((el) =>
      period === 1
        ? (el.textContent = `in ${period} month you will have`)
        : (el.textContent = `in ${period} months you will have`)
    );
  }
}

function toCalculateDeposit(api, period, amount) {
  amount *= 1000;
  return (amount / 100) * api * (period / 12) + amount;
}

function toReinvestApi(api, period, amount) {
  amount *= 1000;
  let dayApi = api / 360;
  let countPeriod = period * 30;
  let result = 0;

  while (countPeriod > 0) {
    result += ((amount + result) / 100) * dayApi;
    countPeriod -= 1;
  }

  return result + amount;
}

function toggleActivBtn(e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;

  targetElement.classList.add('active-btn');

  if (targetElement.closest('.carousel__item')) {
    periodBtnList.forEach((el, index) => {
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
}
