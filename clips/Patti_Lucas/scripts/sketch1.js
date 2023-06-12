/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/12-tauro.mp3";

let sequencer;

//let maPremierSuperAnim;
let maSecondeSuperAnim;
let coeur = [];

function preload(){
	sequencer = new Sequencer(audioPath, 132);
	
	
	coeur.push(
		new Animator({
			imgPatternAddress : "./assets/sequenceClip/frame/Chronologie 1_[IMG_NUM].png",
			imgCount : 8,
			firstImageNum : 0,
			numberLength : 4
		})
	);
}

function setup() {	
	
	createCanvas(windowWidth, windowHeight);
	

	sequencer.registerSequence({
		name : "impact",
		start: 28,
		stop: 34,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event)
			coeur[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event)
			coeur[0].setCursor(event.amount);
		},
		onStop : (event) => {
			console.log(event)	
			
			coeur[0].setDrawable(false);
		},
		
	});
	
	
	sequencer.registerSequence({
		name : "fin",
		start: 35,
		stop: 41,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event)
			coeur[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event)
			coeur[0].setCursor(event.amount);
		},
		onStop : (event) => {
			console.log(event)	
			
			coeur[0].setDrawable(false);
		},
		
	});

	
		
	sequencer.registerSequence({
		name : "intro",
		start: 1,
		stop: 6,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event)
			coeur[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event)
			coeur[0].setCursor(event.amount);
		},
		onStop : (event) => {
			console.log(event)	
			
			coeur[0].setDrawable(false);
		},
		
	});

}

function draw(){
	background(255);
	sequencer.update();
	for(let anim of coeur){
		if(anim.isDrawable()){
			anim.draw();
		}
	}
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

