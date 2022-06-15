/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/


let audioPath = "./assets/audio/Once Upon a December {Slowed}.mp3";
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
	 createCanvas(window.innerWidth, window.innerHeight);
    	
    sequencer = new Sequencer(audioPath, 130, false);
  
  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);
  
  const range = 1;
  deltaStartX = random(-10, 10);
  deltaStartY = random(-10, 10);
  deltaEndX = random(-10, 10);
  deltaEndY = random(-10, 10);
  
  r = random(255);
  g = random(255);
  b = random(255);
  
  noFill();
  background(50);
}
function draw(){

    
stroke(r, g, b, 600);
line(startX, startY, endX, endY);
 
  r += random(-5, 5);
  g += random(-5, 5);
  b += random(-5, 5);
  
  r = constrain(r, 10, 255);
  g = constrain(g, 10, 255);
  b = constrain(b,10, 255);
  
  
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

function windowResized(){
	
}

