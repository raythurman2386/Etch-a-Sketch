const button = document
  .querySelector(".button")
  .addEventListener("click", resetGrid);

function createGrid() {
  const gridSize = 32;
  let div = document.querySelector(".container");
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let x = 1; x <= gridSize; x++) {
      let cell = document.createElement("div");
      cell.className = "gridSquare";
      row.appendChild(cell);
    }
    div.appendChild(row);
  }
}

function fillBlack() {
  const squares = document.querySelectorAll(".gridSquare");
  squares.forEach(square => {
    square.addEventListener("mouseover", function(e) {
      e.target.setAttribute("style", "background: black");
    });
  });
}

function resetGrid() {
  const squares = document.querySelectorAll(".gridSquare");
  squares.forEach(square => {
    square.setAttribute("style", "background: white");
  });
}

createGrid();
fillBlack();
