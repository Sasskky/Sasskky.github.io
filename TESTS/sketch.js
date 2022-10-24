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

let people = ["Ali", "Samin", "Blake", "Athiela", "Monica"];
let otherPeople = [...people];
otherPeople[0] = "Vrajesh";
otherPeople[2] = "Hannah";
console.log(people[2]);