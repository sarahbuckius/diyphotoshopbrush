let brushImages = [];
let currentBrush = 0;

function preload() {
  // Load your brush images
  brushImages[0] = loadImage('brush1.png');
  brushImages[1] = loadImage('brush2.png');
  brushImages[2] = loadImage('brush3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); // white background
  imageMode(CENTER);
}

function draw() {
  if (mouseIsPressed) {
    let img = brushImages[currentBrush];
    let size = random(20, 60);
    image(img, mouseX, mouseY, size, size);
  }
}

function keyPressed() {
  // Switch brush with number keys
  if (key === '1') currentBrush = 0;
  if (key === '2') currentBrush = 1;
  if (key === '3') currentBrush = 2;

  // Save the canvas when 's' is pressed
  if (key === 's' || key === 'S') {
    saveCanvas('myDrawing', 'png');
  }
}
