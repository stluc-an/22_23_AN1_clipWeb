/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2023-04-03 20:46:34
\*----------------------------------------*/

let audioPath = "./assets/audio/everything's worth it/iogi/bliss/bliss.mp4"
let sequencer;
let mesAnims = [];
let mesPoissons = [];
let bg ;
let cam;

function preload(){
	bg = loadImage( "./assets/Fond/Fond.png");
	
	mesAnims.push(
		new Animator({
			imgPatternAddress : "./assets/Avion/AvionOK ([IMG_NUM]).png", 
			imgCount : 54,
			firstImageNum : 1,
			numberLength : 1
		})
	)
	
	mesPoissons.push(
		new Animator({
			imgPatternAddress : "./assets/Poissons OK/PoiPoi ([IMG_NUM]).png",
			imgCount : 60,
			firstImageNum : 1, 
			numberLength : 1
		})
	)
	
}

function setup() {	
	createCanvas(window.innerWidth, window.innerHeight, WEBGL );
	background(255);
	cam = new CustomCamera();
	setCamera(cam.myCam);
	sequencer = new Sequencer(audioPath, 132, false);
	
	sequencer.registerSequence({
		name : "Camera nuages",
		start : 10,
		stop : 101,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(-450, -290, 220);
			cam.lookAt(-450,-290, 0);
			cam.move(100, -10, 0);
		},
		onStep : (event) => {
			cam.setAmount(event.amount );
		}
	});
	
	sequencer.registerSequence({
		name : "Avion test",
		start : 71,
		stop : 98,
		steps:[1, 1+1/2],
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		}
	});
	
	sequencer.registerSequence({
		name : "Camera vagues",
		start : 102,
		stop : 132,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(-380, -20, 180);
			cam.lookAt(-300, -20, 0);
			cam.move(90, 0, 0);
		},
		onStep : (event) => {
			console.log(cam);
			cam.setAmount(event.amount );
		}
	});
	
	sequencer.registerSequence({
		name : "Camera ocean",
		start : 133,
		stop : 193,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(-500, 200, 180);
			cam.lookAt(-500, 200,0);
			cam.move(120, -60, 0);
		},
		onStep : (event) => {
			console.log(cam);
			cam.setAmount(event.amount );
		}
	});
	
	sequencer.registerSequence({
		name : "Poissons",
		start : 146,
		stop : 176,
		steps:[1, 1+1/2],
		onStart : (event) => {
			mesPoissons[0].setDrawable(true);
		},
		onStep : (event) => {
			mesPoissons[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesPoissons[0].setDrawable(false);
		}
	});
	
	sequencer.registerSequence({
		name : "Camera ciel rose",
		start : 194,
		stop : 224,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(325, -250, 160);
			cam.lookAt(325, -250, 0);
			cam.move(0, 80, 0);
		},
		onStep : (event) => {
			console.log(cam);
			cam.setAmount(event.amount );
		}
	});
	
	sequencer.registerSequence({
		name : "Camera ciel bleu",
		start : 225,
		stop : 254,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(100, -250, 180);
			cam.lookAt(100, -250, 0);
			cam.move(0, 80, 0);
		},
		onStep : (event) => {
			console.log(cam);
			cam.setAmount(event.amount );
		}
	});
	
	sequencer.registerSequence({
		name : "Camera sable",
		start : 255,
		stop : 285,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(300, 287, 250);
			cam.lookAt(300, 287, 0);
			cam.move(100, 0, 0);
		},
		onStep : (event) => {
			console.log(cam);
			cam.setAmount(event.amount );
		}
	});
	
	sequencer.registerSequence({
		name : "Camera coucher de soleil",
		start : 286,
		stop : 346,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(-50, 0, 200);
			cam.lookAt(10, 0, 0);
			cam.move(200, 0, 0);
		},
		onStep : (event) => {
			console.log(cam);
			cam.setAmount(event.amount );
		}
	});
	
	sequencer.registerSequence({
		name : "Camera palmier",
		start : 347,
		stop : 407,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(500, 220, 250);
			cam.lookAt(500, 220, 0);
			cam.move(0, -300, 0);
		},
		onStep : (event) => {
			console.log(cam);
			cam.setAmount(event.amount );
		}
	});
	
	sequencer.registerSequence({
		name : "Camera illustration",
		start : 408,
		stop : 465,
		steps : new Array(8).fill(0).map((_, n)=>1+n/8),
		onStart : (event) => {
			cam.setPosition(0, 0, 200);
			cam.lookAt(0, 0, 0);
			cam.move(0, 0, 530);
		},
		onStep : (event) => {
			console.log(cam);
			cam.setAmount(event.amount );
		}
	});
}

function draw(){
	cam.update();
	sequencer.update();
	push();
	translate(-width/2, -height/2);
	image(bg, 0, 0, width, height);
	pop();
	for(let anim of mesAnims){
		if(anim.isDrawable()){
			anim.draw();		
		}
	}
	for(let anim of mesPoissons){
		if(anim.isDrawable()){
			anim.draw();		
		}
	}
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}