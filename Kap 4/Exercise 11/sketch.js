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
  if (x > 512) {
    x = 0
  }
  if (x < 0) {
    x = 512
  }
  if (y > 512) {
    y = 0
  }
  if (y < 0) {
    y = 512
  }
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
    x1 -= 5;
  }

  if (keyIsDown('68')) {
    x1 += 5;
  }

  if (keyIsDown('87')) {
    y1 -= 5;
  }

  if (keyIsDown('83')) {
    y1 += 5;
  } 
  rect(x1-25, y1-25, 25, 25)
  fill(255, 255, 0);
  if (x1 > 512) {
    x1 = 0
  }
  if (x1 < 0) {
    x1 = 512
  }
  if (y1 > 512) {
    y1 = 0
  }
  if (y1 < 0) {
    y1 = 512
  }

  ellipse(x2, y2, 5, 5);
  fill(0, 0, 255)
  
  distance1 = ((x-x2)**2+(y-y2)**2)**0.5;
  distance2 = ((x1-x2)**2+(y1-y2)**2)**0.5;
  //collision check
  if(distance1<25){
  x2 = random(20,490)
  y2 = random(20,490)
  fill(200, 200, 30)
  circle(x2, y2, 7)
  }
  if(distance2<25){
    x2 = random(20,490)
    y2 = random(20,490)
    fill(200, 200, 30)
    circle(x2, y2, 7)
  }

}