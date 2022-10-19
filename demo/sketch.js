// oct 19th demo
// Brophy

let x;
let y;
let radius;
let time = 0;

function keyPressed() {
  let ball = {
    x: random(width),
    y: ramdom(height),
    radius: random(50, 100),
   time: ramdom(5000),
  };
  allCircles.push

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  radius = 75;
}

function draw() {
  background(220);
  fill("black");
  x = noise(time) * width;
  y = noise(time + 5000) * height;

  // increase time along noise
  time += 0.01;
  circle(x, y, radius*2);
}
