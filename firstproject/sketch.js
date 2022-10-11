// First Project
// Brophy
// 10/4/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let img;
let x = 600;
let y = 400;
let r;

function preload() {
  img = loadImage("snakebackground.jpg");
}

function setup() {
  createCanvas(x, y);
  // imageMode(CENTER);
}

function draw() {
  image(img, 0, 0, width, height);
  createApple(50,50);
}

function createApple() {
  // creates the circle for the apple outlines it in black and makes it red
  stroke("black");
  strokeWeight(1);
  push();
  fill(200, 50, 50);
  translate(100,100);
  ellipseMode(CENTER);
  ellipse(0, 0, 40, 35);
  // turns stem brown
  stroke(85, 40, 0);
  strokeWeight(5);
  //creates stem
  line(-20, -30, 0, -15);
  noStroke();
  rotate(radians(-30));
  // creates and leaf and turns leaf green
  fill(40, 165, 20);
  ellipse(5, -25, 15, 25);
  pop();
}

