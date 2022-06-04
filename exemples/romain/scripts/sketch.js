
//et si tu reprends les lignes pour les mettre dans un autres dossier oublis pas d'aller voir dans index.html et mets un majuscule à particule pour le Particule.js

let audioPath = "./assets/audio/sha.mp3";
let sequencer;

let mainCamera;
let particules = [];
let isCameraTurnAround = true;  //ca fait tourné pas hyper vite les formes

let isCameraStraight = true;  // j'ai pas utilisé elle mais enft si tu vas dans la function draw, l'emplacement avec le meme nom tu peux créer tes propres "camera" et donc choisir comment elles bougent
let isCameraTurnLeft = true ;  //ca tourne hyper vite
let isCameraRight = true;     
let isCameraSpinAround = false; //ca pop genre ca fait comme des flashs
let isCameraBounceUpAndDown = false; 
let isCameraforward = false  


function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	mainCamera = createCamera();
	mainCamera.setPosition(0,0,800);
	mainCamera.lookAt(0,0,0);
	

	sequencer = new Sequencer(audioPath, 103); 
	
	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});


	sequencer.registerSequence({
		name : "first", //c'est important que tu changes à chaque fois de nom sinon ton sequencer il va pas savoir executer tes lignes de code
		start:1, //ici c'est quand la function commence
		stop:30, // et là quand elle se termine

		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;  //oublis pas de remettre le nom de la camera que t'utilses

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,40,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;  //ici aussi
		},
		
	});

	// et apres c'est toujours la même chose sauf que tu changes de camera et de temps
	//je t'ai mis que 4 trucs mais c'est en exemple apres tu fais comme c'est le mieux pour ton clip, là t'as le rythme du mien

		sequencer.registerSequence({
		name : "deux",
		start:79, 
		stop:94,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (random,random,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

			sequencer.registerSequence({
		name : "trois",
		start:95, 
		stop:97,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = true;
		},
		
	});
	}  // attention si t'as eu des messages d'erreurs c'est peut etre parce que t'avais oublié de fermer des parentheses


function draw(){

 background(random(255, random,random); // ici ca rejoint le "let blabla" de en haut. en gros c'est ici que tu définis les camera
 	// je suis sûr à 100% que celles là elles fonctionnent mais tu peux en créer d'autres si tu veux
 if(isCameraTurnAround){
	let R = 800;
	let x = R * cos(millis()/1000);
	let z = R * sin(millis()/1000);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}

		sequencer.update();
 if(isCameraStraight){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		
			sequencer.update();
 if(isCameraTurnLeft){
	let R = 800;
	let x = R * cos(millis()/100);
	let z = R * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(5, 0, 5);
	}
	
			sequencer.update();
 if(isCameraRight){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		
			sequencer.update();
 if(isCameraSpinAround){
	let R = 800;
	let x = tan(millis()/100);
	let z = tan(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}

	 if(isCameraBounceUpAndDown){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		

	particules.forEach( (Particule)=> {
		Particule.draw();
	} );
  	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

