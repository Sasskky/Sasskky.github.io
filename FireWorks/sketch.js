// Fireworks
// Brophy
// 11/15/22

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 5;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = 0;
    this.g = 0;
    this.alpha = 255;
    this.b = 255;
    this.color = color(this.r, this.g, this.b, this.alpha);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    
    // makes ot more transparent
    this.alpha --;
    this.color = color(this.r, this.g, this.b, this.alpha);
  }

  display() {
    fill(this.color);
    stroke(this.color);
    circle(this.x, this.y, this.diameter);
  }

  isDead () {
    return this.alpha <= 0;
  }
}

let theFirewokrs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for (let i = 0; i < theFirewokrs.length; i++) {
    theFirewokrs[i].update();
    if (theFirewokrs[i].isDead()) {
      // remove from array
      theFirewokrs.splice(i, 1);
    }
    else {
      theFirewokrs[i].display();
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    let someParticle = new Particle(mouseX, mouseY);
    theFirewokrs.push(someParticle);
  }
}
