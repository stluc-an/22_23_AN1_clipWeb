/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

//let audioPath = "./loser.mp4";
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3"
let sequencer; /*va compter les step de la musique exemple: le premier couplet arrive et un évènement se passe*/
/*let maPremiereSuperAnim;
let maSecondeSuperAnim;*/
let mesAnims = [];// On crée une liste vide

function setup() {	
	createCanvas(window.innerWidth, window.innerHeight);
	/*maPremiereSuperAnim = new Anim1(200, 300);
	maSecondeSuperAnim = new Anim1(400, 150);*/

	mesAnims.push(new Anim1(200, 400),
	new Anim1(300, 500),
	new Anim1(900, 150),
	new Anim1(450, 500)) //On remplie la liste (pour remplir une liste on esr oblige d'avoir le format liste.push(new variable))
	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "into", 
		start:1,
		stop:5,
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
	})
	};

function draw(){
	background(255);
	sequencer.update();
	for (let anim of mesAnims){
		if(anim.isDrawable()){
		anim.draw();
		}
	}
	/*maPremiereSuperAnim.draw()
	maSecondeSuperAnim.draw()*/
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}
