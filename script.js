// Display range slider value

const slider = document.querySelector('#slider');
const divSliderValue = document.querySelector('#sliderValue');
divSliderValue.textContent = `${slider.value} x ${slider.value}`;
const container = document.querySelector('#container');


slider.addEventListener('input', (e) => {
  divSliderValue.textContent = `${e.target.value} x ${e.target.value}`;
  container.replaceChildren();
  createGrid(slider.value);
});





function createGrid(num) {

  

  // Creates grid column and gives each column a class of 'column'
  for (let index = 0; index < num; index++) {
    const gridColum = document.createElement('div');
    gridColum.classList.add('column')
    
    //Populates columns with gridElements and gives each gridElement a class of 'gridElement'
    for (let i = 0; i < num; i++) {
      const columnChild = document.createElement('div');
      columnChild.classList.add('gridElement')
      gridColum.appendChild(columnChild);

      
    }

    container.appendChild(gridColum);
  }


}

createGrid(slider.value);

