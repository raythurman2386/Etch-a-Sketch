let gridSize = document.getElementById('pixel-size-list');
let pixel = parseInt(gridSize.value);
let gridRatio = pixel * pixel;
const canvas = document.getElementById('canvas');

document.addEventListener('DOMContentLoaded', () => {
  createGrid();
  draw();
});

function createGrid() {
  for (var i = 1; i < gridRatio; i++) {
    var gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    canvas.appendChild(gridItem);
  }
}

function draw() {
  Array.from(document.querySelectorAll('.grid-item')).forEach(gridItem => {
    gridItem.addEventListener('mouseenter', () => {
      gridItem.classList.add('colored');
    });
  });
}

function clearGrid() {
  Array.from(document.querySelectorAll('.grid-item')).forEach(gridItem => {
    gridItem.remove();
  });
}

function resizeGrid(pixel) {
  gridRatio = pixel * pixel;

  clearGrid();
  createGrid();

  Array.from(document.querySelectorAll('.grid-item')).forEach(gridItem => {
    if (pixel === 16) {
      gridItem.style.width = "30px";
      gridItem.style.height = "30px";
    } else if (pixel === 64) {
      gridItem.style.width = "12px";
      gridItem.style.height = "12px";
    }
    else {
      gridItem.style.width = "5px";
      gridItem.style.height = "5px";
    }
  });

  draw();
}

gridSize.addEventListener('change', () => {
  resizeGrid(parseInt(event.target.value));
});

function rainbowMode() {
  let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  let random = colorArray[Math.floor(Math.random() * colorArray.length)];
  return random;
};

function rainDraw() {
  Array.from(document.querySelectorAll('.grid-item')).forEach(gridItem => {
    gridItem.addEventListener('mouseenter', () => {
      gridItem.style.backgroundColor = rainbowMode();
    });
  });
}

const rainBow = document.getElementById('rainbow');
rainBow.addEventListener('click', () => {
  rainDraw();
});
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', () => {
  resizeGrid(parseInt(gridSize.value));
});