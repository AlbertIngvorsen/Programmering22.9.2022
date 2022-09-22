let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  x = random(20, 490)
  y = random(20, 490)
  x1 = random(20, 490)
  y1 = random(20, 490)
  x2 = random(20, 490)
  y2 = random(20, 490)
}

function draw() {
  background(120);
  ellipse(x, y, 25, 25);
  fill(255, 0, 0);
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  } 

  if (keyIsDown('65')) {
    x2 -= 5;
  }

  if (keyIsDown('68')) {
    x2 += 5;
  }

  if (keyIsDown('87')) {
    y2 -= 5;
  }

  if (keyIsDown('83')) {
    y2 += 5;
  } 
  rect(x2-25, y2-25, 25, 25)
  fill(0, 0, 255);
  
}