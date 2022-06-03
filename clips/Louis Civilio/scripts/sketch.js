/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

/* regarder YT : MandelBulb 3D Fractal (Coding Challenge 168) 
	Coding Challenge #77: Recursion
	Coding Challenge #76: 10PRINT in p5.js
	I.3: noise() vs random() - Perlin Noise and p5.js Tutorial
*/

let audioPath = "./assets/audio/KindEyes_FuckAPrideBoy.mp3";
let sequencer;

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 145);
	
	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});

	sequencer.registerSequence({
		name : "changeBPM",
		start:244,
		stop:290,
		onStart : (event) => {
			sequencer.BPM = 89;
		},
		onStop : (event) => {
			sequencer.BPM = 145;
		},
		
	});

	}

function draw(){
	sequencer.update();
	console.log("bonjour")
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

