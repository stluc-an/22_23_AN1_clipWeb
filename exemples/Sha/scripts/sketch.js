/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/sha.mp3";
let sequencer;

let anim1
let AllUV

function preload(){
    anim1 = new Animator (".assets/anim1/_CHIFFRE_.png, 19")
    AllUV = loadModel('assets/AllUV.obj', true);
}

function setup() {	
    createCanvas(100, 100, WEBGL);
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
        start : 1, 
        stop : 19,
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            anim1.update(event.amount);
        },
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
	sequencer.update();
    anim1.draw(150, 100, 1000, 500)
     background(200);
  scale(0.4); // Scaled to make model fit into 
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
     rotateX(frameCount * 0.01);
 
  normalMaterial(); // For effect
  model(teapot);
}

