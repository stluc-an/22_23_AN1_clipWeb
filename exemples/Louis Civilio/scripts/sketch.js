/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

/* regarder YT : MandelBulb 3D Fractal (Coding Challenge 168) 
	Coding Challenge #77: Recursion
	Coding Challenge #76: 10PRINT in p5.js
	I.3: noise() vs random() - Perlin Noise and p5.js Tutorial
*/

let audioPath = "./assets/audio/KindEyes_FuckAPrideBoy.mp3";
let sequencer;

//var pour reset background
let backgroundReset;

//array pour formes blanches
let particles = [];

//modèles 3D
let trumps = [];
let cones = [];
let bats = [];
let trumpsBWArray = [];

//copie du array trumps pour les faire réapparaitre plus tard
let trumpsFull = [];

//var pour activer rotation de cam (0= stop, 1= on )
let rActivate = 0;
//variable pour la rotation (jouer activant ou non des sin/cos pour les déplacements de caméra)
let xCos;
let zSin;
let R;
//var activation position de caméra, (0 = pas de mouvement, 1 + mouvement)
let xCamAct;
//var de position x de caméra
let xCam;


let mainCamera ;

function preload(){
	trump = loadModel('./assets/trump.obj',true);
	trumpUV = loadImage('./assets/trumpcolors.png');
	bat = loadModel('./assets/bat.obj',true);

}

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);

	mainCamera = createCamera();
	mainCamera.setPosition(0, 0, 800);

	xCamAct = 0;
	R = 800

	sequencer = new Sequencer(audioPath, 145);

	for(let i = 0;i<width/10;i++){
		particles.push(new Particle());
	  }
	
	
	sequencer.registerSequence({
		name : "Intro chanson",
		stop:32,
		onStart : (event) => {
			backgroundReset = 1;

			trumps.push(new trumpss(0,0,0));
			// trumps.push(new trumpUVText(-300,0,0));
			// trumps.push(new trumpOnlyUv(300,0,0));
			rotateZT = 0;
			rotateXT = 0;
			rotateYT = 0;
			
			//bloque rotation de caméra sur 0, sur 1 ça active
			rActivate = 0;

			xCamAct = 0;

		},
		onStep : (event) => {
			console.log(rActivate)

		},
		onStop : (event) => {

		},
	});

	sequencer.registerSequence({
		name : "BPM part1, spawn multi Trumps",
		start : 32,
		stop:66,
		onStart : (event) => {
			trumps.length = 0;

			console.log(event)
			rotateZT = 0.05;
			rotateXT = 0.05;
			rotateYT = 0.05;

			backgroundReset = 1;

			//réactive la rotation de caméra (sur 1 elle est active)
			rActivate = 1;

			normalMaterial();
		},
		onStep : (event) => {
			console.log(rActivate)
			
			//cones.push(new coneCcol(0, 0, 0) ); 
			trumps.push(new trumpss(0,0,0));
			trumpsFull = [trumps];
			console.log(trumpsFull)

			background(0,0,0);
		},
		onStop : (event) => {
			console.log(event)
			backgroundReset = 0;
		},
	});

	sequencer.registerSequence({
		name : "66-98",
		start : 66,
		stop: 98,
		onStart : (event) => {
			xCamAct = 1;
		},
		onStep : (event) => {
			trumps.push(new trumpss(0,0,0));
			trumpsBWArray.push(new trumpUVText(0,0,0));

			background(0,0,0);
		},
		onStop : (event) => {

		},
	});

	sequencer.registerSequence({
		name : "98-122",
		start : 98,
		stop: 122,
		onStart : (event) => {

		},
		onStep : (event) => {
			trumps.push(new trumpss(0,0,0));

			background(0,0,0);
		},
		onStop : (event) => {

		},
	});

	sequencer.registerSequence({
		name : "122-142",
		start : 122,
		stop: 142,
		onStart : (event) => {

		},
		onStep : (event) => {
			trumps.push(new trumpss(0,0,0));
		},
		onStop : (event) => {

		},
	});

	sequencer.registerSequence({
		name : "148-156",
		start : 142,
		stop: 158,
		onStart : (event) => {

		},
		onStep : (event) => {
			trumps.push(new trumpss(0,0,0));

			bats.push(new batss(0,0,0));

			background(0,0,0);
		},
		onStop : (event) => {

		},
	});

	sequencer.registerSequence({
		name : "158-174",
		start : 158,
		stop: 174,
		onStart : (event) => {
			backgroundReset = 1;
			trumps.push(new trumpss(0,0,0));
		},
		onStep : (event) => {
			trumpsBWArray.push(new trumpOnlyUv(0,0,0));

		},
		onStop : (event) => {
			backgroundReset = 0;
		},
	});

	sequencer.registerSequence({
		name : "174-192",
		start : 174,
		stop: 192,
		onStart : (event) => {

		},
		onStep : (event) => {
			trumpsBWArray.push(new trumpUVText(0,0,0));

		},
		onStop : (event) => {

		},
	});

	sequencer.registerSequence({
		name : "192-218",
		start : 192,
		stop: 218,
		onStart : (event) => {

		},
		onStep : (event) => {
			trumps.push(new trumpss(0,0,0));

			bats.push(new batss(0,0,0));
		},
		onStop : (event) => {

		},
	});

	sequencer.registerSequence({
		name : "218-244",
		start : 218,
		stop: 244,
		onStart : (event) => {
			backgroundReset = 1;
		},
		onStep : (event) => {
			trumps.push(new trumpss(0,0,0));

			bats.length = 0;

			background(0,0,0);
		},
		onStop : (event) => {

		},
	});
	
	sequencer.registerSequence({
		name : "244-290 , changement BPM à 89",
		start : 240,
		stop: 290,
		onStart : (event) => {
			sequencer.BPM = 89;
			xCamAct = 1;
			rActivate = 0;
		},
		onStep : (event) => {
			cones.push(new coneCcol(0,0,0));
			cones.push(new coneCcol(0,0,0));

		},
		onStop : (event) => {

		},
	});

	sequencer.registerSequence({
		name : "244-290 , changement BPM à 89",
		start : 240,
		stop: 290,
		onStart : (event) => {
			sequencer.BPM = 89;
			xCamAct = 0;
			rActivate = 0;
		},
		onStep : (event) => {
			cones.push(new coneCcol(0,0,0));

		},
		onStop : (event) => {

		},
	});

	// sequencer.registerSequence({
	// 	name : "test clear background",
	// 	measure : 8,
	// 	steps : [6],
	// 	onStart : (event) => {

	// 	},
	// 	onStep : (event) => {
	// 		background(0,0,0);
	// 	},
	// 	onStop : (event) => {

	// 	}
	// })

	}
	

function draw(){
	sequencer.update();

	//reset le background en perma ou non
	if (backgroundReset == 1){
		background(0,0,0);
	}
	//apparitions des particules
	for(let i = 0;i<particles.length;i++) {
		particles[i].createParticle();
		particles[i].moveParticle();
		particles[i].joinParticles(particles.slice(i));
	  }
	 
	console.log(particles.length)

	//sert à dessiner ce qui est dans les arrays
	trumps.forEach( (trumpsN)=>{
		trumpsN.draw()
	});

	bats.forEach( (batsN) => {
		batsN.draw()
	});

	cones.forEach( (conesN)=>{
		conesN.draw()
	});

	trumpsBWArray.forEach( (trumpsB)=>{
		trumpsB.draw()
	});

	//condition activation de la rotation
	if(rActivate == 0){
		xCos = 1;
		zSin = 1;
	} else {
		xCos = cos(millis()/1000);
		zSin = sin(millis()/1000);
	}

	//mouvement avant/arrière de caméra
	if(xCamAct == 0){
		xCam = 0;
	} else {
		xCam = R * xCos;
	}
	

	let z = R * zSin;
	mainCamera.setPosition(xCam,xCam,z);
	mainCamera.lookAt(0,0,0);
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

