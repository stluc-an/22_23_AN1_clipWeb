/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";

let sequencer;

let bgColor;
let rectColor;
let isRectDrawable = false 
let isTourquetDrawable  = false;
let isTourriquet
let jaune;
let vert; 

function setup() {	
	colorMode(RGB);
	rectMode(CENTER);
	jaune = color(255, 255, 0);
	vert = color(0, 255, 0);
	
	bgColor = color(255);

	rectColor = vert
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		start: 3,
		stop: 50,
		onStart : (event) => {
			console.log(event)
			bgColor = color(255, 0, 0,)
			isRectDrawable =true ;

		},
		onStep : (event) => {
			console.log(event)
			if(rectColor == vert){
				rectColor = jaune;
			}
			else 	if(rectColor == jaune){
				rectColor = vert;
			}
		},
		onStop : (event) => {
			console.log(event)
			bgColor = color (64,0 ,255)
			isRectDrawable =false ;
			
			
		},
		
	});

	sequencer.registerSequence({
		name : "tourniquet",
		start: 7,
		stop: 20,
		onStart : (event) => {
			isTourquetDrawable = true;
		},
		onStop : (event) => {
			isTourquetDrawable = false;

		},

	});


}

function draw(){
	sequencer.update();
	background (bgColor);
	if(isRectDrawable){
		fill(rectColor);
		rect(width/2 , height/2 , 300, 300);
	
	}
	if(isTourquetDrawable){
		push();
		translate(width/2, height/2)
		rotate (millis() * 0.003);
		fill(255,100,0);
		rect(0, 0,150, 150);
		pop();
	}
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

