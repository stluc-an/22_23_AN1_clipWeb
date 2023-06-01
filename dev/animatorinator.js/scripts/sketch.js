/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";

let sequencer;

//let maPremierSuperAnim;
let maSecondeSuperAnim;
let mesAnims = [];

function setup() {	
	
	createCanvas(window.innerWidth, window.innerHeight);
	
	new Animator("./assets/image/Chronologie 1_{CHIFFRE}.png", 9)
	
	mesAnims.push(new Anim1(200, 400),
				  new Anim1(300, 500),
				  new Anim1(900, 150),
				  new Anim1(450, 500))
	
	//maPremierSuperAnim = new Anim1(200, 300);
	//let maSecondeSuperAnim = new Anim1(300, 100);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "intro",
		start: 2,
		stop: 5,
		onStart : (event) => {
			console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)	
			
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
	//maPremierSuperAnim.draw()
	//maSecondeSuperAnim
}
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

