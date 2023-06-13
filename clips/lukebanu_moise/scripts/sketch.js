/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/POP.mp3";
let sequencer;

let anim1;

function preload(){
	anim1 = new Animator("./assets/anim 1/clip/_CHIFFRE_.jpg", 5112)
}

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 185);
	
	sequencer.registerSequence({
		name : "intro",
		start: 1,
		stop : 5112,
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			anim1.update(event.amount);
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
	sequencer.update();
	animIntro.draw(0, 0, 1920, 1080); 
} 

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

