/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/Hip Hip Chin Chin (New Edit).m4a";
let sequencer;
let mainCamera;
let particules = [];

let isCameraTurnAround = false;
let isCameraStraight = false;
let isCameraTurnLeft = false;
let isCameraRight = false;
let isCameraSpinAround= false;
let isCameraBounceForward = false;
let isCameraStraightandSpinOnHerself =false;
let isCameraRollRight = false;
let isCameraBounceLeftToRight = false;
let isCameraforward = false;
let isCamerastraight = false;
let isCameraBounceUpAndDown =false;
let isCameraMoveLeftToRight =false;

let isCameraBounceDown=false;
let isCameraMoveAroundandBounce =false;

function setup() {	
colorMode(RGB); 
	
frameRate(60);

createCanvas(window.innerWidth, window.innerHeight, WEBGL);

mainCamera = createCamera();

sequencer = new Sequencer(audioPath, 132);





 sequencer.registerSequence({
		name : "first",
		start : 1,
		stop: 11,

		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true;
		},
		
		onStep : (event) => {
			console.log(event)
				particules.push( new SuperParticule (0, 0, 0) );
				particules.push( new Particulei (0, 0, 0) );


		},

		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});

 sequencer.registerSequence({
		name : "secundo",
		start : 12,
		stop: 28,

		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true;
		},

	onStep : (event) => {
			console.log(event)
				particules.push( new Particuleg (0, 0, 0) );
		},

		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

 sequencer.registerSequence({
		name : "tertio",
		start : 29,
		stop: 45,

		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true;
		},
		
		onStep : (event) => {
			console.log(event)
				particules.push( new Particulej (0, 0, 0) );
		},

		onStop : (event) => {
			console.log(event)
			isCameraTurnAround= false;
		},
		
	});

 
sequencer.registerSequence({
		name : "quatro",
		start : 46,
		stop: 70,

		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true;
		},
		onStep : (event) => {
			console.log(event)
				particules.push( new Particule (0, 0, 0) );
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround= false;
		},
		
	});	


sequencer.registerSequence({
		name : "cinqo",
		start : 71,
		stop: 109,

		onStart : (event) => {
			console.log(event)
			isCameraBounceForward = true;
		},
		onStep : (event) => {
			console.log(event)
				particules.push( new Particuleb (0, 0, 0) );
				particules.push( new Particulef (0, 0, 0) );


		},
		onStop : (event) => {
			console.log(event)
			isCameraBounceForward = false;
		},
		
	});	

sequencer.registerSequence({
		name : "six",
		start : 109,
		stop: 115,

		onStart : (event) => {
			console.log(event)
			isCameraTurnAround =true;
		},
		onStep : (event) => {
			console.log(event)
				particules.push( new Particulea (0, 0, 0) );
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;
		},
		
	});	

sequencer.registerSequence({
		name : "sept",
		start : 134,
		stop: 150,

		onStart : (event) => {
			console.log(event)
			isCameraStraightandSpinOnHerself= true;
		},
		onStep : (event) => {
			console.log(event)
				particules.push( new Particuleg (0, 0, 0) );
				particules.push( new Particuleh (0, 0, 0) );


		},
		onStop : (event) => {
			console.log(event)
			isCameraStraightandSpinOnHerself= false;
		},
		
	});	

sequencer.registerSequence({
		name : "huit",
		start : 151,
		stop: 165,

		onStart : (event) => {
			console.log(event)
			isCameraRollRight= true;
		},
		onStep : (event) => {
			console.log(event)
				particules.push( new Particulec (0, 0, 0) );
		},
		onStop : (event) => {
			console.log(event)
		isCameraRollRight= false;
		},
		
	});	

//change with 11
sequencer.registerSequence({
		name : "huit et demi",
		start : 170,
		stop: 235,

		onStart : (event) => {
			console.log(event)
			isCameraforward = true;
		},
		onStep : (event) => {
			console.log(event)
				particules.push( new Particuled (0, 0, 0) );
				particules.push( new Particulej (0, 0, 0) );
		},
		onStop : (event) => {
			console.log(event)
		isCameraforward= false;
		},
		
	});	


sequencer.registerSequence({
		name : "neuf",
		start : 235,
		stop: 327,

		onStart : (event) => {
			console.log(event)
			isCameraMoveAroundandBounce = true;
		},
		
		onStop : (event) => {
			console.log(event)
		isCameraMoveAroundandBounce= false;
		},
		
	});	



sequencer.registerSequence({
		name : "dix",
		start :328 ,
		stop: 400 ,

		onStart : (event) => {
			console.log(event)
			isCameraBounceLeftToRight = true;
		},
		onStep : (event) => {
			console.log(event)
				particules.push( new Particuleo (0, 0, 0) );
				
		},

		onStop : (event) => {
			console.log(event)
		isCameraBounceLeftToRight= false;
		},
		
	});	

sequencer.registerSequence({
		name : "onze",
		start :400 ,
		stop: 480,

		onStart : (event) => {
			console.log(event)
			isCameraforward = true;
		},
		onStep : (event) => {
			console.log(event)
				particules.push( new Particulef (0, 0, 0) );
		},
		
	onStop : (event) => {
			console.log(event)
		isCameraforward= false;
		},
		
	});	


sequencer.registerSequence({
		name : "douze",
		start :460 ,
		stop: 480 ,

		onStart : (event) => {
			console.log(event)
			isCamerastraight = true;
		},
		
	onStep : (event) => {
			console.log(event)
				particules.push( new Particulel (0, 0, 0) );
		},
			
	onStop : (event) => {
			console.log(event)
		isCamerastraight= false;
		},
		
	});	

sequencer.registerSequence({
		name : "douze et demi",
		start :480 ,
		stop: 535 ,

		onStart : (event) => {
			console.log(event)
			isCameraBounceDown = true;
		},
		
	onStep : (event) => {
			console.log(event)
				particules.push( new Particuled (0, 0, 0) );
				particules.push( new Particulej (0, 0, 0) );

		},
			
	onStop : (event) => {
			console.log(event)
		isCameraBounceDown= false;
		},
		
	});	


sequencer.registerSequence({
		name : "douze et demi",
		start :536 ,
		stop: 588 ,

		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true;
		},
		
	
			
	onStop : (event) => {
			console.log(event)
		isCameraTurnAround= false;
		},
		
	});	




sequencer.registerSequence({
		name : "quatorze",
		start :593 ,
		stop: 660,

		onStart : (event) => {
			console.log(event)
			isCameraBounceUpAndDown = true;
		},

	
	onStop : (event) => {
			console.log(event)
		isCameraBounceUpAndDown= false;
		},
		
	});	


sequencer.registerSequence({
		name : "quinze",
		start :660 ,
		stop: 732,

		onStart : (event) => {
			console.log(event)
			isCamerastraight = true;
		},
		
OnStep : (event) => {
			console.log(event)
				particules.push( new Particuleb (0, 0, 0) );
		},

	onStop : (event) => {
			console.log(event)
		isCamerastraight= false;
		},
		
	});	

sequencer.registerSequence({
		name : "quinze",
		start :731 ,
		stop: 750,

		onStart : (event) => {
			console.log(event)
			isCameraForward = true;
		},
		
OnStep : (event) => {
			console.log(event)
				particules.push( new Particulem (0, 0, 0) );
		},

	onStop : (event) => {
			console.log(event)
		isCameraForward= false;
		},
		
	});	



}

function draw(){
let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);

	
	//1
	sequencer.update();
	if(isCameraTurnAround){
		let R = 800 ;
		let x = R/4 * sin(millis()/1000);
		let z = R/4 * cos(millis()/1000);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0, 0, 0);
	}

//2
if(isCameraSpinAround){
		let R = 800 ;
		let x = cos (millis()/100);
		let z = sin (millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0, 0, 0);
	}

//3
if(isCameraBounceForward){
		let R = 800 ;
		let x = tan(millis()/100);
		let z = tan(millis()/100);
		mainCamera.setPosition(x,5,z);
		mainCamera.lookAt(5, 5, 5);
	}

//4
if(isCameraStraightandSpinOnHerself){
		let R = 800 ;
		let x = (millis()/100);
		let z = sin (millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0.5 , 0.5 , 0.5);
	}

//5
if(isCameraRollRight){
		let R = 800 ;
		let x = (millis()/100);
		let z = (millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}

//6
if(isCameraBounceLeftToRight){
		let R = 800 ;
		let x = R/5*tan(millis()/1000);
		let z = R/5*cos(millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}

//7
if(isCameraforward){
		let R = 800 ;
		let x = tan(millis()/10);
		let z = cos(millis()/10);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}


//8
if(isCamerastraight){
		let R = 800 ;
		let x = tan(millis()/1000);
		let z = 1/2*cos(millis()/1000);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}

//9

if(isCameraBounceLeftToRight){
		let R = 800 ;
		let x = R/5*tan(millis()/1000);
		let z = R/5*cos(millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}

if(isCameraBounceUpAndDown){
		let R = 800 ;
		let x = R/5*tan(millis()/1000);
		let z = R/5*cos(millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}

if(isCamerastraight){
		let R = 800 ;
		let x = R*tan(millis()/10);
		let z = R*cos(millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}

if(isCameraBounceDown){
		let R = 800 ;
		let x = R/2*sin(millis()/10);
		let z = R/2*cos(millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}

if(isCameraMoveLeftToRight){
		let R = 800 ;
		let x = sin(millis()/10);
		let z = tan(millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}

if(isCameraMoveAroundandBounce){
		let R = 800 ;
		let x = tan(millis()/100);
		let z = tan(millis()/100);
		mainCamera.setPosition(x,0,z);
		mainCamera.lookAt(0 , 0 , 0);
	}




	//mainCamera.setPosition(0, 0, mouseX);

	particules.forEach( (Particule)=>{
		Particule.draw();


	});





}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}




