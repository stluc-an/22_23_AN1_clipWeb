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
	
	mesAnims.push(new anim1(200, 300),
				 new anim1(100, 200));
	
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

