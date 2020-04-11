// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const canvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
const classes = canvas.classList;

let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGrid();
 });

function makeGrid() {
  canvas.innerHTML = null;
  //create table rows
  for (let i = 1; i <= height.value; i++) {
    let rows = document.createElement("tr");

    //create table cells
    for (let i = 1; i <= width.value; i++) {
      let cells = document.createElement("td");

      rows.appendChild(cells);

      //colors cells when clicked
      cells.addEventListener("click", function(event) {
        event.preventDefault();
        cells.style.backgroundColor = colorPicker.value;
      });
    }
    canvas.appendChild(rows);
  }
}
