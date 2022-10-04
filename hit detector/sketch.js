// Project Title
// Brophy
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let hit = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  circle(200, 200, 100);
  strokeWeight(4);
  stroke("black");
  point(mouseX, mouseY);

  hit = collidePointCircle(mouseX, mouseY, 200, 200, 100);

  // Use vectors as input:
  // const mouse  = createVector(mouseX, mouseY);
  // const circle = createVector(200, 200);
  // const diam   = 100;
  // hit = collidePointCircleVector(mouse, circle, diam);
  strokeWeight(4);
  stroke(hit ? color("red") : 0);
  print("colliding?", hit);
}