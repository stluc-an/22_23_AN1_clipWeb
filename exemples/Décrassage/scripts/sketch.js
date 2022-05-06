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
		stop : 10,
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			if(bgColor==125){
			bgColor = 0;
			}else{
				bgColor = 125;
			}
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});

	sequencer.registerSequence({
		name : "second",
		start : 10,
		stop : 20,
		/* permet de dire d'effectuer l'action sur le temps et sur le prochain demi-temps, les temps peuvent être divisés jusqu'en 24 */
		steps : [ 1, 1 + 1/2 ],
		onStep : (event) => {
			console.log(event)
			if(bgColor==125){
				bgColor = 255;
			}else{
				bgColor = 125;
			}
		}
		
	});

	sequencer.registerSequence({
		name : "inversion",
		start : 20,
		stop : 30,
		/* défénit qu'une mesure dure 4 temps */
		measure : 4,
		/* définit que l'action ne se déclenche que aux temps 1 et 3 de la mesure */
		steps : [1,2,4],
		onStep : (event) => {
			console.log(event)
			if(bgColor==125){
				bgColor = 255;
			}else{
				bgColor = 125;
			}
		}
	})
	}

function draw(){
	sequencer.update();
	background(bgColor);
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

