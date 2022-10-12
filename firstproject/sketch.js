// First Project
// Brophy
// 10/4/22
//
// Extra for Experts:
// [I created my own shape (the apple)
let img;
let Fruit;
let x = random(width);
let y = random(height);

// calls the image and loads it into the functions
function preload() {
  img = loadImage("snakebackground.jpg");
}

function setup() {
  createCanvas(600, 400);

}
// sets image as background and runs the apple function
function draw() {
  image(img, 0, 0, 600, 400);
  createApple();
}


function createApple() {
  // creates the circle for the apple outlines it in black and makes it red=
  let x = random(height);
  let y = random(width);
  stroke("black");
  strokeWeight(1);
  push();
  //translate(random(height)(width));
  fill(200, 50, 50);
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


