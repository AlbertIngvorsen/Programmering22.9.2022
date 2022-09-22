function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0);
}

function draw() {
  background(204);
  if (mouseIsPressed == true) {
    if (mouseButton == RIGHT) {
    rect(mouseX, mouseY, 50, 50);
}
    else if (mouseButton == LEFT) {
      ellipse(mouseX, mouseY, 50, 50)
    }
}
}
