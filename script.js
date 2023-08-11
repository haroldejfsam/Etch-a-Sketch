const slider = document.querySelector("#slider");
const divSliderValue = document.querySelector("#sliderValue");
divSliderValue.textContent = `${slider.value} x ${slider.value}`;
const container = document.querySelector("#container");
const colorPicker = document.querySelector("#colorPicker");
const btnGrid = document.querySelector("#btnGrid");
const btnClear = document.querySelector("#btnClear");
const btnEraser = document.querySelector("#btnEraser");
const btnPen = document.querySelector("#btnPen");
let gridElements = document.querySelector(".gridElement");
let drawState = false;

slider.addEventListener("input", (e) => {
  divSliderValue.textContent = `${e.target.value} x ${e.target.value}`;
  container.replaceChildren();
  createGrid(slider.value);
});

function createGrid(num) {
  // Creates grid column and gives each column a class of 'column'
  for (let index = 0; index < num; index++) {
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("column");

    //Populates columns with gridElements and gives each gridElement a class of 'gridElement'
    for (let i = 0; i < num; i++) {
      const columnChild = document.createElement("div");
      columnChild.classList.add("gridElement");

      //Prevents element from being dragged. Without it hover effect gets stuck on element being dragged
      columnChild.addEventListener("dragstart", (event) => {
        event.preventDefault();
      });

      gridColumn.appendChild(columnChild);
    }

    container.appendChild(gridColumn);
  }
}

createGrid(slider.value);

//Listens to mouse left button is down and sets the draw state
window.addEventListener("mousedown", function (e) {
  if (e.button === 0) {
    drawState = true;
  }
});

//Listens to mouse left button is up and sets the draw state
window.addEventListener("mouseup", function (e) {
  if (e.button === 0) {
    drawState = false;
  }
});

// Pen button listener
btnPen.addEventListener("click", () => {
  gridElements = document.querySelectorAll(".gridElement");
  for (let index = 0; index < gridElements.length; index++) {
    const element = gridElements[index];
    element.addEventListener("mouseenter", (e) => {
      if (drawState) {
        e.target.style.cssText = `background-color: ${colorPicker.value};`;
      }
    });
  }
  for (let index = 0; index < gridElements.length; index++) {
    const element = gridElements[index];
    element.addEventListener("click", (e) => {
      if (!drawState) {
        e.target.style.cssText = `background-color: ${colorPicker.value};`;
      }
    });
  }
});

// Random colors listener



// Eraser button listener
btnEraser.addEventListener("click", () => {
  gridElements = document.querySelectorAll(".gridElement");
  for (let index = 0; index < gridElements.length; index++) {
    const element = gridElements[index];
    element.addEventListener("mouseenter", (e) => {
      if (drawState) {
        e.target.style.cssText = `background-color: white;`;
      }
    });
    element.addEventListener("click", (e) => {
      if (!drawState) {
        e.target.style.cssText = `background-color: white;`;
      }
    });
  }
});

// Grid button listener
btnGrid.addEventListener("click", () => {
  gridElements = document.querySelectorAll(".gridElement");
  for (let index = 0; index < gridElements.length; index++) {
    const element = gridElements[index];
    element.classList.toggle("gridOn");
  }
});

//Clear button listener
btnClear.addEventListener("click", () => {
  container.replaceChildren();
  createGrid(slider.value);
});
