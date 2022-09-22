function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(154);
  if (mouseX < 200){
    ellipse(200,200,200,200)
  }
  else if(mouseX > 200){
    rect(100,100,200,200)
}
}