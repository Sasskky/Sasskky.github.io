let myOrnament;

function setup() {
  createCanvas(400, 400);
  myOrnament = new danOrnament(width/2, height/2);
}

function draw() {
  background(220);
  myOrnament.update();
  myOrnament.display();
}

class Ornament {
  constructor(x, y, someColor, width, height) {
    this.x = x;
    this.y = y;
    this.someColor = someColor;
    this.width = width;
    this.height = height;
  }
  
  update() {
    
  }
  
  display() {
    fill(this.someColor);
    ellipse(this.x, this.y, this.width, this.height);
  }
  
}

class danOrnament extends Ornament {
  constructor(x, y) {
    super(x, y, "blue", 30, 30);
  }
  
  update() {
    this.width++;
    this.height++;
  }
  
  
}