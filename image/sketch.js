// Image proccesing
// Nick Brophy
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fishImage;
let scalee = 1.5;

function preload() {
  fishImage = loadImage("fish.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(fishImage, mouseX, mouseY, fishImage.width*scalee, fishImage.height*scalee);
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    scalee = scalee * 1.5;
  }
  else if (keyCode === DOWN_ARROW) {
    scalee = scalee * 1.5;
  }  
}