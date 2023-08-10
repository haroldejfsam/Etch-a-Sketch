// Display range slider value

const slider = document.querySelector('#slider');
const divSliderValue = document.querySelector('#sliderValue');
divSliderValue.textContent = `${slider.value} x ${slider.value}`;
const container = document.querySelector('#container');
const colorPicker = document.querySelector('#colorPicker')
let gridElements = document.querySelectorAll('.gridElement');



slider.addEventListener('input', (e) => {
  divSliderValue.textContent = `${e.target.value} x ${e.target.value}`;
  container.replaceChildren();
  createGrid(slider.value);
  
});


function createGrid(num) {

  // Creates grid column and gives each column a class of 'column'
  for (let index = 0; index < num; index++) {
    const gridColumn = document.createElement('div');
    gridColumn.classList.add('column')
    
    //Populates columns with gridElements and gives each gridElement a class of 'gridElement'
    for (let i = 0; i < num; i++) {
      const columnChild = document.createElement('div');
      columnChild.classList.add('gridElement')

      //Prevents element from being dragged. Without it hover effect gets stuck on element being dragged
      columnChild.addEventListener("dragstart", (event) => {
        event.preventDefault();
      });

      gridColumn.appendChild(columnChild);

      
    }

    container.appendChild(gridColumn);
  }

  gridElements = document.querySelectorAll('.gridElement');
  for (let index = 0; index < gridElements.length; index++) {
    const element = gridElements[index];
    element.addEventListener('click', (e)=>{
    e.target.style.cssText = `background-color: ${colorPicker.value};`; //must change to dynamic option, assign color every time pencolor changes. fix this.
    console.log('works')
  })
  
}



}

createGrid(slider.value);

