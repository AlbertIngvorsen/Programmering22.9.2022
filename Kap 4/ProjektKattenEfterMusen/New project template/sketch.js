let justHitRightWall;
let speed = 6;
let yspeed = 0;
let xspeed = 0;
let y1speed = 5;
let x1speed = 5;
let y2speed = 5;
let x2speed = 5;
let c = 0;
let u = "Tid overlevet: ";
let p = " sekunder";
let l = 3;
let t = "Liv: ";
let r = "Du blev skudt!";
let b = "Du overlevede kun ";
let e = "Tryk enter for at blive bedre og prøve igen";

function preload() {
  img = loadImage("mus.png");
  img2 = loadImage("catt.png");
  img3 = loadImage("cobb.jpg");
  img4 = loadImage("ded.png");
}

function setup() {
  createCanvas(612, 612);
  x = random(35, 560);
  y = random(35, 560);
  x1 = random(35, 560);
  y1 = random(35, 560);
  x2 = random(35, 560);
  y2 = random(35, 560);
  d = 1;
  frameRate(60);
}

function draw() {
  c += 1 / 60;
  image(img3, 0, 0, 612, 612);
  rect(0, 0, 612, 30);
  textSize(20);
  text(u + floor(c) + p, width / 35, 20);
  text(t + l, width / 1.1, 20);
  image(img, x - 40, y - 40, 75, 75);
  y += yspeed;
  x += xspeed;
  if (y > height - 70 || y < 0 + 25) {
    yspeed *= -1;
  }
  if (x > width - 55 || x < 0 - 5) {
    xspeed *= -1;
  }
  image(img2, x1 - 80, y1 - 80, 150, 150);
  y1 += y1speed;
  x1 += x1speed;
  if (y1 > height - 70 || y1 < 0 + 25) {
    y1speed *= -1;
  }
  if (x1 > width - 55 || x1 < 0 - 5) {
    x1speed *= -1;
  }
  image(img2, x2 - 80, y2 - 80, 150, 150);
  y2 += y2speed;
  x2 += x2speed;
  if (y2 > height - 70 || y2 < 0 + 25) {
    y2speed *= -1;
  }
  if (x2 > width - 55 || x2 < 0 - 5) {
    x2speed *= -1;
  }
  distance1 = ((x - x1) ** 2 + (y - y1) ** 2) ** 0.5;
  distance2 = ((x - x2) ** 2 + (y - y2) ** 2) ** 0.5;
  if (distance1 < 45) {
    x1 = random(30, 560);
    y1 = random(30, 560);
    l -= 1;
  }
  if (distance2 < 45) {
    x2 = random(30, 560);
    y2 = random(30, 560);
    l -= 1;
  }
  if (l <= 0) {
    background(img4);
    rect(0, 475, 612, 612);
    c -= 1 / 60;
    textSize(40);
    text(r, width / 3, 225);
    textSize(20);
    text(b + floor(c) + p, width / 3, 490);
    text(e, width / 3.5, 515);
  }

  if (c > 10) {
    if (x1speed < 0) {
      x1speed -= 0.005;
    }
    if (x1speed > 0) {
      x1speed += 0.005;
    }
    if (y1speed < 0) {
      y1speed -= 0.005;
    }
    if (y1speed > 0) {
      y1speed += 0.005;
    }
    if (x2speed < 0) {
      x2speed -= 0.005;
    }
    if (x2speed > 0) {
      x2speed += 0.005;
    }
    if (y2speed < 0) {
      y2speed -= 0.005;
    }
    if (y2speed > 0) {
      y2speed += 0.005;
    }
  }
  if (c > 30) {
    if (x1speed < 0) {
      x1speed -= 0.05;
    }
    if (x1speed > 0) {
      x1speed += 0.05;
    }
    if (y1speed < 0) {
      y1speed -= 0.05;
    }
    if (y1speed > 0) {
      y1speed += 0.05;
    }
    if (x2speed < 0) {
      x2speed -= 0.05;
    }
    if (x2speed > 0) {
      x2speed += 0.05;
    }
    if (y2speed < 0) {
      y2speed -= 0.05;
    }
    if (y2speed > 0) {
      y2speed += 0.05;
    }
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    yspeed = speed;
    xspeed = 0;
  }
  if (keyCode === UP_ARROW) {
    yspeed = -speed;
    xspeed = 0;
  }
  if (keyCode === LEFT_ARROW) {
    xspeed = -speed;
    yspeed = 0;
  }
  if (keyCode === RIGHT_ARROW) {
    xspeed = speed;
    yspeed = 0;
  }
  if (keyCode === 13) {
    l = 3;
    c = 0;
    xspeed = 0;
    yspeed = 0;
    x1speed = 5;
    y1speed = 5;
    x2speed = 5;
    y2speed = 5;
    preload();
    setup();
  }
}
