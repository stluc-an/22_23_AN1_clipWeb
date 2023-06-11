/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2023-04-03 20:46:34
\*----------------------------------------*/
let audioPath = "./assets/audio/y2mate.com - Bleu de locéan 47.mp3";
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
			imgPatternAddress : "./assets/images/frame[IMG_NUM].png",
			imgCount : 370,
			firstImageNum : 0,
			numberLength : 4,
        
		}), 
        //new Animator({
			//imgPatternAddress : "./assets/images/img[IMG_NUM].png",
			//imgCount : 31,
			//firstImageNum : 33,
			//numberLength : 4,
		//})
        
	);
}

function setup() {	
	createCanvas(window.innerWidth, window.innerHeight);
	sequencer = new Sequencer(audioPath, 132, false);
	sequencer.registerSequence({
		name : "intro",
		start : 1,
		stop : 370,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
            console.log(event);
			mesAnims[0].cursor = event.step - event.start;
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
	});
    //sequencer.registerSequence({
		//name : "loop",
		//start : 33,
		//stop : 83,
		//onStart : (event) => {
			//mesAnims[1].setDrawable(true);
		//},
		//onStep : (event) => {
			//mesAnims[1].cursor = (event.step - event.start )% mesAnims[1].imgs.length;
		//},
		//onStop : (event) => {
			//mesAnims[1].setDrawable(false);
		//},
	//});
}

function draw(){
	background(0);
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

