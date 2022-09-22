function setup() 
{ 
 createCanvas(400, 400); 
} 
function draw() 
{ 
 background(204); 
 if (keyIsPressed) {  //hvad er denne variable for en størrelse? 
  if ((key == 'a') || (key == 'A')) { line(125, 100, 275, 100); } 
  if ((key == 'a') || (key == 'A')) { line(125, 100, 125, 300); } 
  if ((key == 'a') || (key == 'A')) { line(275, 100, 275, 300); } 
  if ((key == 'a') || (key == 'A')) { line(125, 200, 275, 200); }
 } 
 if (keyIsPressed == false){
  if ((key == 'a') || (key == 'A'))
  { background (204); }
 }
 if (keyIsPressed){
  if ((key == 'v') || (key == 'V')) { line( 100, 100, 200, 300); } 
  if ((key == 'v') || (key == 'V')) { line( 200, 300, 300, 100); }
 }
 if (keyIsPressed == false){ 
  if ((key == 'a') || (key == 'A'))
  { background (204); }
 }
}