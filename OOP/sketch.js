// OOP demo
// Brophy
// 11/14/22

class Dog {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }

  bark() {
    console.log("woof! says " + this.name);
  }
}

let myDog = new Dog("Charlie");
let yourDog = new("j");

function setup() {
  createCanvas(windowWidth, windowHeight);
  myDog.bark();
  yourDog.bark();
}

function draw() {
  background(220);
}
