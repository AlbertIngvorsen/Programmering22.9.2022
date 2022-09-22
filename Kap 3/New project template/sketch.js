function setup() {
  createCanvas(600, 600);
  noStroke();
}
function draw() {
  background(126);
  ellipse(mouseX, mouseY, 33, 33);
  frameRate(144);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
}

