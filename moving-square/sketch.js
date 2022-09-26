// square around edge
// Brophy
// 09/26/22
let squareLocation; 
let x = 0;
let y = 0;
let squareSize;
let speed;
let state;

function setup() {
  createCanvas(400, 400);
  squareSize = 60;
  speed = 5;
  state = "right";
}

function draw() {
  background("white");
  moveSquare();
  drawSquare();
}

function drawSquare() {
  strokeWeight(4);
  stroke("black");
  square(x,y,squareSize); 
}

function moveSquare() {
  if (state === "right") {
    x += speed;
    if (x - squareSize >= width) {
  }
  }
}

