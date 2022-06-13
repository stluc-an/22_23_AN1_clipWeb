let audioPath = "./assets/audio/Niko Rubio - Go With You.webm";
let sequencer;
let teapot;

let drawFlowerFlag = false;
let drawFlowerFlagOld = false;

let mainCamera;
let particules = [];
let isCameraTurnAround = false;

let isCameraStraight = false; 
let isCameraTurnLeft = false;
let isCameraRight = false;
let isCameraSpinAround = false;
let isCameraBounceUpAndDown = false;
let isCameraforward = false


function preload() {
   
   teapot = loadModel('assets/img/RomainLeBossMerci.obj', true);
}

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	mainCamera = createCamera();
	mainCamera.setPosition(0,0,800);
	mainCamera.lookAt(0,0,0);
	

			particules.push( new Particule (0,0,0) ) ;
	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		start:1,
		stop:2,
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
		name : "xxx",
		start:2,
		stop:20,
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
		name : "first",
		start:21, 
		stop:78,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

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
			particules.push( new Particule (0,0,0) ) ;
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
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "quatre",
		start: 98, 
		stop:113,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "cinq",
		start:114, 
		stop:115,
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
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "21",
		start:100, 
		stop:113,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "27",
		start:116, 
		stop:132,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});


			sequencer.registerSequence({
		name : "six",
		start:133, 
		stop:135,
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
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "28",
		start:136, 
		stop:143,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

			sequencer.registerSequence({
		name : "sept",
		start:142, 
		stop:144,
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
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "29",
		start:144, 
		stop:156,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

			sequencer.registerSequence({
		name : "huit",
		start:152, 
		stop:156,
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
			isCameraSpinAround = false;
		},
		
	});

			sequencer.registerSequence({
		name : "22",
		start:157, 
		stop:212,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});


sequencer.registerSequence({
		name : "neuf",
		start:228, 
		stop:230,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "23",
		start:231, 
		stop:235,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});


sequencer.registerSequence({
		name : "onze",
		start:248, 
		stop:250,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "24",
		start:251, 
		stop:267,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

sequencer.registerSequence({
	name : "dix",
	start:268, 
	stop:270,
	onStart : (event) => {
		console.log(event)
		isCameraTurnLeft = true ;

	},
	onStep : (event) => {
		console.log(event)
		particules.push( new Particule (0,0,0) ) ;
	},
	onStop : (event) => {
		console.log(event)
		isCameraTurnLeft = false ;
	},
	});


sequencer.registerSequence({
		name : "douze",
		start:277, 
		stop: 279,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "30",
		start:280, 
		stop:286,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "treize",
		start:287, 
		stop:289,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "quatorze",
		start:307, 
		stop:309,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "25",
		start:310, 
		stop:324,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "quinze",
		start:325, 
		stop:327,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "31",
		start:328, 
		stop:335,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "seize",
		start:333, 
		stop:335,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "32",
		start:336, 
		stop:344,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "dixsept",
		start:345, 
		stop:347,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "33",
		start:348, 
		stop:353,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "dixhuit",
		start:354, 
		stop:356,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "34",
		start:357, 
		stop:365,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

sequencer.registerSequence({
		name : "dixneuf",
		start:364, 
		stop:366,
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
			isCameraSpinAround = false;
		},
		
	});

sequencer.registerSequence({
		name : "vingt",
		start:159, 
		stop:212,
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
			isCameraSpinAround = false;
		},
		
	});

	
sequencer.registerSequence({
		name : "26",
		start:367, 
		stop:400,
		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});
	
}


function draw(){

 background(0);
 ambientLight(255);
 directionalLight(250, 0, 0, -1, 1, -1);

		sequencer.update();
 if(isCameraTurnAround){
	let R = 800;
	let x = R * cos(millis()/1000);
	let z = R * sin(millis()/1000);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}

 if(isCameraStraight){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		
			
 if(isCameraTurnLeft){
	let R = 800;
	let x = R * cos(millis()/100);
	let z = R * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(5, 0, 5);
	}
	
			
 if(isCameraRight){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		
			
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

