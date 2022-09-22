function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
  background(220);
}

function draw() {
  frameRate(60)
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
    line(mouseX, mouseY, pmouseX, pmouseY);
}
}
}