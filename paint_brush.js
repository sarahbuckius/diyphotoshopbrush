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
  textFont('Arial');
  textSize(16);
  fill(0);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    let img = brushImages[currentBrush];
    let size = random(20, 60);
    image(img, mouseX, mouseY, size, size);
  }

  // Display instructions
  noStroke();
  fill(255, 255, 255, 180); // semi-transparent background
  rect(10, 10, 320, 70);
  fill(0);
  text("Press 1, 2, or 3 to switch brushes", 20, 35);
  text("Press 'S' to save your drawing", 20, 60);
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
