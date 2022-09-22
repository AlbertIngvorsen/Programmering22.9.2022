let y;
let justHitLeftWall;
let yspeed = 50;
let justHitRightWall;

function setup() {
  createCanvas(400, 400);
  y = height / 2;
}

function draw() {
  background(125);
  if (y > height - 25 || y < 0 + 25) {
    yspeed *= -1.005;
  }

  //move
  y += yspeed;
  ellipse(width/2, y, 50, 50);
}
