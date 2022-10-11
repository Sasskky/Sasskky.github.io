// First Project
// Brophy
// 10/4/22
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let backGround;
let x = 600;
let y = 400;

function preload() {
  backGround = loadImage("snakebackground.jpg");
}

function setup() {
  createCanvas(x, y);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(backGround, x, y, 600, 400);
}

