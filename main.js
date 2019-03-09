const mainContainer = document.querySelector(".container");
const gridSquare = document.querySelector(".gridSquare");
const button = document.querySelector(".button");
button.addEventListener("click", createGrid);

function createGrid(v) {
  let div = document.mainContainer;
  for (let i = 0; i < v; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let x = 1; x <= v; x++) {
      let cell = document.createElement("div");
      cell.className = "gridSquare";
      cell.innerText = i * v + x;
      row.appendChild(cell);
    }
    div.appendChild(row);
  }
}
