/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/lofi-house-type-beat-_napoli_.mp3";
let sequencer;

let anim1 // = new Animator ("./assets/anim1/_CHIFFRE_).png", 12600);

function preload (){
	anim1 = new Animator("./assets/anim1/(_CHIFFRE_).png", 2519);
}

function setup() {	
	colorMode(RGB);
	
	frameRate("12");
	createCanvas(window.innerWidth, window.innerHeight);
	sequencer = new Sequencer(audioPath, 900);
	
	sequencer.registerSequence({
		name : "P1",
		start: 1,
		stop : 2519,
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
	anim1.draw(anim1.imgNumber, 0, 0,  window.innerWidth, window.innerHeight);
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

