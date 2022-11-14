// Walker-OOP
// Brophy
// 11/14/22

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.raidus = 2;
    this.radius = 10;
  }

  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);

  }

  move() {
    let choice = random(100);

    if (choice < 25) {
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      // right
      this.x += this.speed;
    }
    else {
   //left
    this.x -+ this.speed;      
  }
}

let michael;
let katherine;
let joe;

function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(width/2, height/2);
  katherine = new Walker(200, 300);
  katherine.color = "blue";
  joe = new Walker (400,400);
  joe.color = "green";
}

function draw() {
  michael.move();
  katherine.move();
  joe.move();
 
  katherine.display();
  michael.display();
  joe.display();

}

