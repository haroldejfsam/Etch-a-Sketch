// Display range slider value

const slider = document.querySelector('#slider');
const divSliderValue = document.querySelector('#sliderValue');
divSliderValue.textContent = slider.value;

slider.addEventListener('input', (e) => {
  divSliderValue.textContent = e.target.value;
});