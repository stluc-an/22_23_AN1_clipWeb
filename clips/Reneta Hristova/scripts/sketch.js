/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/Downside_Emitter.mp3";
let sequencer;
let anim1;
function preload() {
	anim1 = new Animator("./assets/anim1/_CHIFFRE_.jpg", 85); //85 FRAMES total
} 

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 16); //mettre false en + pour faire disparaitre compteur
	
	sequencer.registerSequence({
		name : "all",
		start: 1,
		stop : 85,
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			anim1.update(event.step);
		},
		onStop : (event) => {
			console.log(event)
		}
		
	});
	}

function draw(){
	background(10); //ctrl+shift+R refresh la page
	sequencer.update();
	anim1.draw(0, 0, 1920, 1080);
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

