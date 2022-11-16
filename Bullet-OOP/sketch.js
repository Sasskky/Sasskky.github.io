// Bullet-OOP
// Brophy
// 11/16/2022

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.color = "White";
    this.dx += 5;
  }
}

function createMan() {
  rect(50,200, 10, 50);
  this.color;
  strokeWeight(2);
  stroke("Blue");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  createMan();
}
