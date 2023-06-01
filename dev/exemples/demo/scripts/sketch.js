/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-03-04 09:14:30
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;
let bgColor = 0;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	
	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "onTime",
		start : 1,
		stop : 10,
		onStep : (event) => {
			bgColor = 255 - bgColor;
		}
	});

	sequencer.registerSequence({
		name : "onEighthTime",
		start : 10,
		stop : 20,
		steps : [
			1,
			1+1/8,
			1+2/8,
			1+3/8,
			1+4/8,
			1+5/8,
			1+6/8,
			1+7/8,
		],
		onStep : (event) => {
			bgColor = (event.amount * 255);
		}
	});
	
}

function draw(){
	sequencer.update();
	background(bgColor);
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

