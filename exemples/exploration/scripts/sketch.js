let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;

let particules = [];
let mainCamera;

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    
    mainCamera = createCamera();
    mainCamera.setPosition(0,0,800);
    mainCamera.lookAt(0,0,0);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            particules.push( new Particule(0,0,0) );
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
    background(56,70,200);
	sequencer.update();
   
    let R = 800;
    let x = R * cos(millis()/150);
    let z = R * sin(millis()/1000);
    
    mainCamera.setPosition(x,0,z);
    mainCamera.lookAt(0,0,0);
    particules.forEach((particule)=>{
      particule.draw();  
    });
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

