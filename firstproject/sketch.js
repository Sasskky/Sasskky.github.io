// First Project
// Brophy
// 10/4/22
//
// Extra for Experts:
// [I created my own shape (the apple)
let img;
let Fruit;
let x2;
let y2;
let state = "start";
let x;
let y;
let hit;
let img2;
 
// calls the image and loads it into the functions
function preload() {
  img = loadImage("snakebackground.jpg");
  img2 = loadImage("gameover.webp");
}
 
function setup() {
  x2 = random(40, 550);
  y2 = random(45, 350);
  x = 550;
  y = 350;
  createCanvas(windowWidth, windowHeight);
}
// sets image as background and runs the apple and circlefunction
function draw() {
  background("white");
  if (state === "start") {
    startScreen();
  }
  if (state === "main") {
    image(img, 0, 0, 600, 400);
    createApple();
    createCircle();
    text("Go get the apple!", 100, 450);
    point(x, y);
  
    hit = collidePointCircle(x, y, x2, y2, 30);
    stroke(hit ? color("red") : 0);
    print("colliding?", hit);

    if (hit === true) {
      "state" === "end";
      if (state === "end") {
        image(img2, 0, 0, 600, 400);
      }
    }
  }
}
// creates moused pressed function
function mousePressed() {
  if (state === "start" && mouseInsideRect(400, 700, 400, 550)) {
    state = "main";
  }
}
//creates text box and turns it gray if mouse hovers over it
function startScreen() {
  if (mouseInsideRect(400, 700, 400, 550)) {
    fill("gray");
  }
  else {
    fill("black");
  }
  rect(400, 400, 300, 150);
  fill("Pink");
  textSize(50);
  text("Start!", 480, 490);
}
// If mouse is clicked in rect starts game
function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
        mouseY >= top && mouseY <= bottom;
}
 
function createApple() {
  // creates the circle for the apple outlines it in black and makes it red=
  stroke("black");
  strokeWeight(1);
  push();
  translate(x2, y2);
  fill(200, 50, 50);
  ellipseMode(CENTER);
  ellipse(0, 0, 40, 35);
  // turns stem brown
  stroke(85, 40, 0);
  strokeWeight(5);
  //creates stem
  line(-20, -30, 0, -15);   noStroke();
  rotate(radians(-30));
  // creates and leaf and turns leaf green
  fill(40, 165, 20);
  ellipse(5, -25, 15, 25);
  pop();
}
 
function createCircle() {
//draw a circle
  circle(x, y, 30);
  // creates movement functions and blocks circle from going outside the background
  if (keyCode === UP_ARROW) {
    y = y  - 2;
  } 
  else if (keyCode === DOWN_ARROW) {
    y = y + 2;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 2;
  } 
  else if (keyCode === RIGHT_ARROW) {
    x = x + 2;
  }
  if (x > 600 || y > 400) {
    x = 300;
    y = 200;
  } 
  else if (x < 0 || y < 0) {
    x = 300;
    y = 200;
  }
 
}

