// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
}

let i = 100;
while (i > 0) {
  line(i, i*2, width, height);
  i -= 10;
}