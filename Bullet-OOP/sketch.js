// Bullet-OOP
// Brophy
// 11/16/2022

class Bullet {
  constructor(theImage) {
    this.x = 50;
    this.y = 200;
    this.radius = 2;
    this.dx = 5;
    this.image = someIMG;
  }

  display () {
    image(this.image, this.x, this.y, this.image.width*0.3, this.image.height*0.3);
   
    // fill("White");
    // circle(this.x, this.y, this.radius*2);
  }
  move() {
    this.x += this.dx;
  }

  isDead() {
    return this.x >= width;
  }
}

let bullets = [];
let someIMG;

function preload() {
  someIMG = loadImage("Bullet-Bill.jpg");
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
  for (let someBullet of bullets) {
    someBullet.move();
    someBullet.display();
  }

  // delete
  for (let i = bullets.length-1; i >= 0; i--) {
    if (bullets[i].isDead()) {
      bullets.splice(i, 1);
    }
  }
}

function mousePressed() {
  let someBullet = new Bullet(someIMG);
  bullets.push(someBullet);
}
