// Button OOP
// Brophy
// 11/21/22

class Button1 {
  constructor(x,y,width,height) {
    this.x = 725;
    this.y = 200;
    this.width = width;
    this.height = height;
    this.color = "white";
    this.hoverColor = "blue'";
    
  }

  display() {
    if (this.isInside(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.color);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  isInside(x,y) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide &&
           y > topSide && y < bottomSide;
  }
}

let button1 = new Button1(725, 200, 400, 150);
let button2 = new Button1(725, 400, 400, 150);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  button1.display();
  button2.display();
}

