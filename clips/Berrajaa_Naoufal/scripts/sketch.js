/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

//let audioPath = "./loser.mp4";
let audioPath = "./assets/audio/Yabujin - FLASH CASANOVA.mp3"
let sequencer; /*va compter les step de la musique exemple: le premier couplet arrive et un évènement se passe*/
/*let maPremiereSuperAnim;
let maSecondeSuperAnim;*/

let currentX = 0;
let teapot;
let drawcomputer = false;
let drawcomputer01d = false;

let mainCamera;
let particules = [];
let isCameraTurnAround = false;

let isCameraStraight = false; 
let isCameraTurnLeft = false;
let isCameraRight = false;
let isCameraSpinAround = false;
let isCameraBounceUpAndDown = false;
let isCameraforward = false



function preload () {
teapot = loadModel('./assets/images/TvVintageWithKarim110.obj', true);
    
    
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
    // trouver mon bpm 
    
    //Naf salut c'est Karim ca va? moi oui j'espere que tu passe une bonne journée coeur coeur  (j'ai pas trouvé le signe "plus que" pour faire le coeur) bref bisou sur toi :)
    
    
    sequencer.registerSequence({
		name : "un",
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
		name : "deux",
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
		name : "trois",
		start:21, 
		stop:66,
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
		name : "idee",
		start:68, 
		stop:74,
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
		name : "quatre",
		start:75, 
		stop:103,
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
		name : "8",
		start:104, 
		stop:130,
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
		name : "9",
		start:131, 
		stop:135,
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
		name : "lol",
		start:133, 
		stop:137,
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
		name : "11",
		start:138, 
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
		name : "12",
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
		name : "13",
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
		name : "14",
		start:152, 
		stop:162,
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
		start:163, 
		stop:220,
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
		name : "23",
		start:229, 
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
	stop:266,
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
		start:271, 
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
		stop:339,
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
		name : "32",
		start:351, 
		stop:358,
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



	
}
function draw(){

 background(random(15),random(52),random(239));
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


    
    
    









