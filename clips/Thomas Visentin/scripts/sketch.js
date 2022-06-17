/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-06-17 08:19:37
\*----------------------------------------*/
let audioPath = "";
let sequencer; 

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

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
	sequencer.update();
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

