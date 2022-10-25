// Basic Grid Demo
// Brophy
// 10/25/22

let grid = [[1, 0, 1],
            [1, 0, 1],
            [0, 1, 0]];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(grid) {
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  for (let y = 0; y<grid.length; y++) {
    for (let x = 0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[x][y] === 1) {
        fill ("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}