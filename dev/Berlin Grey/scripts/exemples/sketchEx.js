/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

/*Ce que je veux  */
let audioPath = "./assets/audio/Berlin Grey - Fat Jon.mp3";
let sequencer;
let BackColor;
let isRectDrawable = false;
let isTourniquetDrawable = false;
let rectColor;
let jaune;
let vert;


function setup() {	
	colorMode(RGB);
	jaune = color(255, 255, 0);
	vert = color(0, 255, 0);
	rectMode(CENTER);
	BackColor = color(255);
	rectColor = color(vert);

	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 88); /*88 bpm */
	
	sequencer.registerSequence({
		name : "all",
		start: 3,
		stop: 200,
		onStart : (event) => {
			console.log(event)
			BackColor = color (255, 0, 200);
			isRectDrawable = true;
		},
		onStep : (event) => {
			console.log(event)
			if (rectColor == vert){
				rectColor = jaune;
			}
			else if(rectColor == jaune){
				rectColor = vert;
			}
		},
		onStop : (event) => {
			console.log(event)
			BackColor = color(0);
			isRectDrawable = false;
		},
		
	});
	sequencer.registerSequence({
		name : "tourniquet",
		start: 7,
		stop: 50,
		onStart : (event) => {
			console.log(event)
			isTourniquetDrawable = true;
		},
		
		onStop : (event) => {
			console.log(event)
			isTourniquetDrawable = false;
		},
		
	});
}

function draw(){
	sequencer.update();
	background(BackColor);
	if(isRectDrawable){
		rect(width/2, height/2, 300, 300);
	}
	fill (rectColor);


	if(isTourniquetDrawable){
	push();

	translate(width/2, height/2);
	rotate(millis()* 0.008);
	fill (200, 200, 200);
	rect (0, 0, 150, 150);

	pop();
	}
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

/*sequencer.registerSequence({
		name : "all",
		start:,
		stop: ,
		onStart : (event) => {
			console.log(event)
			
		},
		onStep : (event) => {
			console.log(event)
			
		},
		onStop : (event) => {
			console.log(event)
			
		},
		
	}); */