// Display range slider value

const slider = document.querySelector('#slider');
const divSliderValue = document.querySelector('#sliderValue');
divSliderValue.textContent = `${slider.value} x ${slider.value}`;
const container = document.querySelectorAll('#container');


slider.addEventListener('input', (e) => {
  divSliderValue.textContent = `${e.target.value} x ${e.target.value}`;
});





function createDivs(num) {

  for (let index = 0; index < num; index++) {
    const gridColum = document.createElement('div');
    

    for (let i = 0; i < num; i++) {
      const columnChild = document.createElement('div');
      gridColum.appendChild(columnChild);

      
    }

    container[0].appendChild(gridColum);
  }


}

createDivs(16);
