let startX;
let startY;
let endX;
let endY;

let deltaStartX;
let deltaStartY;
let deltaEndX;
let deltaEndY;

let r;
let g;
let b;

function setup() {
  createCanvas(300, 300);
  
  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);
  
  const range = 5;
  deltaStartX = random(-range, range);
  deltaStartY = random(-range, range);
  deltaEndX = random(-range, range);
  deltaEndY = random(-range, range);
  
  r = random(255);
  g = random(255);
  b = random(255);
  
  noFill();
  background(32);
}

function draw() {
  
  
  stroke(r, g, b, 100);
  bezier(startX, startY, endX, endY);
 
  r += random(-5, 5);
  g += random(-5, 5);
  b += random(-5, 5);
  
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);
  
  
  startX += deltaStartX;
  startY += deltaStartY;
  endX += deltaEndX;
  endY += deltaEndY;
  
  if(startX < 0 || startX > width){
    deltaStartX *= -1;
  }
  
  if(startY < 0 || startY > height){
    deltaStartY *= -1;
  }
  
  if(endX < 0 || endX > width){
    deltaEndX *= -1;
  }
  
  if(endY < 0 || endY > height){
    deltaEndY *= -1;
  }
}