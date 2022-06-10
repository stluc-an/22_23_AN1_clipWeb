/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/BRAND NEW KIND OF BLUE.mp3";
let sequencer;

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);
	
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
	}

function draw(){
	sequencer.update();
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

