/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2023-04-03 20:46:34
\*----------------------------------------*/
let audioPath = "./assets/audio/2-14 Lots of Lights.mp3";
let sequencer;

let mesAnims = [];

function preload(){
	/*
		Un Object est comme un Array, 
		Dans un Array les cases sont nommées par des chiffres à partir de 0
		Dans un Object les cases sont sont nommé par nous même au moyen de nom.
		Toute fonction peut recevoir comme parametre un objet.
		Cela nous permet de ne pas confondre les différents paramètres entre eux,
		lorsque nous souhaitons envoyer plusieurs valeurs à une function. 
	*/
	mesAnims.push(
		new Animator({
			imgPatternAddress : "./assets/images/accel[IMG_NUM].png",
			imgCount : 8,
			firstImageNum : 1,
			numberLength : 4
		})
	);
}

function setup() {	
	createCanvas(window.innerWidth, window.innerHeight);
	sequencer = new Sequencer(audioPath, 132, false);
	sequencer.registerSequence({
		name : "intro",
		start : 1,
		stop : 8,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
	});
}

function draw(){
	background(255);
	sequencer.update();

	for(let anim of mesAnims){
		if(anim.isDrawable()){
			anim.draw();		
		}
	}

}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

