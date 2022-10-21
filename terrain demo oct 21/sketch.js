// Terrain gen
// Brophy
// 10/21/22

let theHeights = [];
let startLoaction = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theHeights = generateHeights(20000);
}


function draw() {
  background(220);
  for (let i = startLoaction; i < startLoaction + width; i++) {
    drawRect(i - startLoaction, theHeights[i], 1);
  }
  // move when key is pressed
  if (keyIsPressed) {
    startLoaction +=5;
  }
}

function drawRect(x, rectHeight, rectWidth) {
  let y = height - rectHeight;
  rect(x, y, rectWidth, rectHeight);
}


function generateHeights(howMany) {
  let tempArray = [];
  let time = random(10000);
  for (let i = 0; i < howMany; i++) {
    tempArray.push(noise(time) * height);
    time += 0.001;
  }
  return tempArray;
}
