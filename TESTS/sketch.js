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

// Object containing url links to images from Unsplash
const IMAGE_URLS = {
  nature: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80',
  pencils: 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
};
// Sets the background image
const setBackground = (image) => {
  document.body.style.background = "url('"+IMAGE_URLS.[image]+"')";
};
if (isWeekend) {
  setBackground('nature');
} else {
  setBackground('pencils');
}