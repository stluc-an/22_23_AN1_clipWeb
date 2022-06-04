/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;
let bgColor = 0;

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "first",
		start : 1,
		stop  : 10, 
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)

			if(bgColor == 0)
				bgColor = 255;
			else
				bgColor = 0;
			
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});

	sequencer.registerSequence({
		name : "sgundo"
		start :10,
		stop :20 , 
		steps: [1, 1+1/2],
	onStep : () => {
	if(bgColor == 0){
		bgColor= 255;
	}else{
		bgColor = 0;
	}
}

sequencer.registerSequence()

	});
	}

function draw(){
	background(bgColor);
	sequencer.update();
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

