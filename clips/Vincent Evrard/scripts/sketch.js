/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-03-11 14:08:58
\*----------------------------------------*/
let audioPath = "./assets/audio/Solar Skeletons Candies in a Jar.mp3";
let sequencer;

function setup() {	
	colorMode(RGB);
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);
	
	sequencer = new Sequencer(audioPath, 126);
	
	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event);
		},
		onStep : (event) => {
			console.log(event);
		},
		onStop : (event) => {
			console.log(event);
		},
	});
}

function draw(){
	sequencer.update();
}


function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}