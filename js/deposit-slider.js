const outputUpdate = (vol) => {
  const output = document.querySelector('#volume');
  output.value = vol;
  output.style.left = vol - 20 + 'px';
};
