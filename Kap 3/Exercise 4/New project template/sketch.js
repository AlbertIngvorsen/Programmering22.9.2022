function setup() {
  createCanvas(500, 500);
  background(125);
}
function draw() {
  if(keyIsPressed){
    if (keyCode == 70) {
    rect(mouseX-25, mouseY-25, 50, 50);
  }
    if (keyCode == 67) {
    ellipse(mouseX, mouseY, 50, 50)
  }
    if (keyCode == 69) {
    ellipse(mouseX, mouseY, 75, 25)
  }
}
}