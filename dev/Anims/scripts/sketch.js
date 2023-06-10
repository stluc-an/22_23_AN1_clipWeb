/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal_Life_audio_test.mp3";
let sequencer; /*va compter les step de la musique exemple: le premier couplet arrive et un évènement se passe*/

let maPremiereSuperAnim;
let maSecondeSuperAnim;
let mesAnims = [];


function setup() {	
	createCanvas(window.innerWidth, window.innerHeight);

	maPremiereSuperAnim = new Anim1(200, 200);
	maSecondeSuperAnim = new Anim1(300, 100);

	mesAnims.push(new Anim1 (300, 400))
	mesAnims.push(new Anim1 (100 , 350))
	mesAnims.push(new Anim1 (250 , 400))
	mesAnims.push(new Anim1 (150 , 300))
	mesAnims.push(new Anim1 (300 , 100))
	mesAnims.push(new Anim1 (100 , 250))

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "intro", /*par défaut c'est une séquence */
		start:1,
		stop:30,
		onStart : (event) => { /*function (nom)=>description*/
			console.log(event)
			mesAnims[0].setDrawable(true)
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
		mesAnims[0].setDrawable(false)
		},		
	});

}

function draw(){
	background(255);
	sequencer.update();
	for (let anim of mesAnims){
		if(anim.isDrawable()){
			anim.draw();
		}

	}
	maPremiereSuperAnim.draw();
	maSecondeSuperAnim.draw();
}
function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}