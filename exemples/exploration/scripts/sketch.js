/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/Hip Hip Chin Chin (New Edit).m4a";
let sequencer;

let particules = [];
let mainCamera;

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight,WEBGL);
	mainCamera = createCamera();

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule(0, 0, 0) );
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
	sequencer.update();
  let R = 800;
	let x = R * cos(millis()/1000);
	let z = R * sin(millis()/1000);
	mainCamera.setPosition(x,0,z);
	mainCamera.lookAt(0, 0, 0);

	//mainCamera.setPosition(0, 0, mouseX);

	particules.forEach( (particule)=>{
		particule.draw();
	});
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

