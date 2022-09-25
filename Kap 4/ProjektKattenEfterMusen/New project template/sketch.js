//Definerer alle mine hastigheder:
let justHitRightWall;
let speed = 6;
let yspeed = 0;
let xspeed = 0;
let y1speed = 2;
let x1speed = 2;
let y2speed = 2;
let x2speed = 2;
//definerer tid og liv
let c = 0;
let l = 3;
//Definerer tekststykker
let u = "Tid overlevet: ";
let p = " sekunder";
let t = "Liv: ";
let r = "Du blev skudt!";
let b = "Du overlevede kun ";
let e = 'Tryk "enter" for at blive bedre og prøve igen';

//Indlæser de forskellige billeder til mus kat og baggrund
function preload() {
  img = loadImage("mus.png");
  img2 = loadImage("catt.png");
  img3 = loadImage("cobb.jpg");
  img4 = loadImage("ded.png");
}

//Indsætter mine figurers positioner til spillet og sætter framerate til 60 for at få sekundtimeren til at virke nemmest.
function setup() {
  createCanvas(612, 612);
  x = random(70, 540);
  y = random(100, 540);
  x1 = random(100, 540);
  y1 = random(100, 540);
  x2 = random(100, 540);
  y2 = random(100, 540);
  frameRate(60);
}

function draw() {
  //Sætter først programmet til at tælle sekunder, ved at lægge en tredsendedel på 0 hver frame, hvilket giver +1 hvert sekund til sekundtimeren.
  c += 1 / 60;
  //Indsætter min baggrund og infobjælke i toppen
  image(img3, 0, 0, 612, 612);
  rect(0, 0, 612, 30);
  textSize(20);
  text(u + floor(c) + p, width / 35, 20);
  text(t + l, width / 1.1, 20);
  //Indsætter så mine figurer og deres hastigheder
  image(img, x - 40, y - 40, 75, 75);
  y += yspeed;
  x += xspeed;
  // følgende if koder, er til at "bounce" figurene tilbage hvis de rammer væggen.
  if (y > height - 15 || y < 0 + 55) {
    yspeed *= -1;
  }
  if (x > width - 10 || x < 0 + 12) {
    xspeed *= -1;
  }
  image(img2, x1 - 80, y1 - 80, 150, 150);
  y1 += y1speed;
  x1 += x1speed;
  if (y1 > height - 55 || y1 < 0 + 95) {
    y1speed *= -1;
  }
  if (x1 > width - 25 || x1 < 0 - 5) {
    x1speed *= -1;
  }
  image(img2, x2 - 80, y2 - 80, 150, 150);
  y2 += y2speed;
  x2 += x2speed;
  if (y2 > height - 55 || y2 < 0 + 95) {
    y2speed *= -1;
  }
  if (x2 > width - 25 || x2 < 0 - 5) {
    x2speed *= -1;
  }
  //Følgende kode tester afstanden mellem musen og hver af kattene
  distance1 = ((x - x1) ** 2 + (y - y1) ** 2) ** 0.5;
  distance2 = ((x - x2) ** 2 + (y - y2) ** 2) ** 0.5;
  //Skade kode for hver kat
  if (distance1 < 45) {
    x1 = random(100, 540);
    y1 = random(100, 540);
    l -= 1;
  }
  if (distance2 < 45) {
    x2 = random(100, 540);
    y2 = random(100, 540);
    l -= 1;
    //Hvis dit liv ryger på 0 (eller under) "dør" du, og spillet er så slut.
  }
  if (l <= 0) {
    //Indsætter en ny baggrund med tekst der fortæller dig hvordan runden er gået.
    background(img4);
    rect(0, 550, 612, 612);
    c -= 1 / 60;
    textSize(40);
    text(r, width / 3, 225);
    textSize(20);
    text(b + floor(c) + p, width / 3.5, 570);
    text(e, width / 5, 595);
  }
  //Følgende koder gør at kattene og musen bevæger sig hurtigere jo længere tid der går.
  if (c > 10) {
    if (x1speed < 0) {
      x1speed -= 0.002;
    }
    if (x1speed > 0) {
      x1speed += 0.002;
    }
    if (y1speed < 0) {
      y1speed -= 0.002;
    }
    if (y1speed > 0) {
      y1speed += 0.002;
    }
    if (x2speed < 0) {
      x2speed -= 0.002;
    }
    if (x2speed > 0) {
      x2speed += 0.002;
    }
    if (y2speed < 0) {
      y2speed -= 0.002;
    }
    if (y2speed > 0) {
      y2speed += 0.002;
    }
    if (xspeed < 0) {
      xspeed -= 0.002;
    }
    if (xspeed > 0) {
      xspeed += 0.002;
    }
    if (yspeed < 0) {
      yspeed -= 0.002;
    }
    if (yspeed > 0) {
      yspeed += 0.002;
    }
  }
  if (c > 30) {
    if (x1speed < 0) {
      x1speed -= 0.02;
    }
    if (x1speed > 0) {
      x1speed += 0.02;
    }
    if (y1speed < 0) {
      y1speed -= 0.02;
    }
    if (y1speed > 0) {
      y1speed += 0.02;
    }
    if (x2speed < 0) {
      x2speed -= 0.02;
    }
    if (x2speed > 0) {
      x2speed += 0.02;
    }
    if (y2speed < 0) {
      y2speed -= 0.02;
    }
    if (y2speed > 0) {
      y2speed += 0.02;
    }
  }
}
//Dette kode er controls for musen så den kan bevæge sig.
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
    //De sidste linjer her gør så når du trykker "enter" starter spillet helt tilbage til dets startpunkt, og du kan spille igen.
  }
  if (keyCode === 13) {
    l = 3;
    c = 0;
    xspeed = 0;
    yspeed = 0;
    x1speed = 2;
    y1speed = 2;
    x2speed = 2;
    y2speed = 2;
    preload();
    setup();
  }
}
