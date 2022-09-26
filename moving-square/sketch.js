// square around edge
// Brophy
// 09/26/22


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  drawSquare();
}

function drawSquare() {
  strokeWeight(4);
  stroke("black");
  square(30,20,55); 
}


