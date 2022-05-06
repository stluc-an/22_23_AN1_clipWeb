/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;

let particules = [];
let mainCamera ; 

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	/* ajouter WEBGL permet de passer le canevas en 3D */
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	
	mainCamera = createCamera();
	mainCamera.setPosition(0, 0, 800);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			/* on ajoute une particule dans le tableau "Particules" grâce à la fonction qu'on a créé dans le script "Particules" */
			particules.push(new Particule(0, 0, 0) ); 
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
	sequencer.update();
/*mettre un background permet d'effacer les trainées que les formes 3d laissent*/
	background(0,0,0);
	
	/* permet de tourner autour du centre
	R = distance du centre */
	let R = 800;
	let x = R * cos(millis()/1000);
	let z = R * sin(millis()/1000);
	mainCamera.setPosition(x,0,z);

	mainCamera.lookAt(0,0,0);

	particules.forEach( (particule)=>{
		particule.draw()
	} );
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

