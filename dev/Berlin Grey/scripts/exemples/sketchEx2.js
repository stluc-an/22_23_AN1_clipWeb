/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/Berlin Grey - Fat Jon.mp3";
let sequencer;

/*let monSuperSquare;
let mon2SuperSquare;*/

let mesAnims = [];

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);
    mesAnims.push(new Anim1(200, 300, random(5)));
    mesAnims.push(new Anim1(400, 300, random(5)));
    mesAnims.push(new Anim1(250, 30, random(5)));
    mesAnims.push(new Anim1(600, 400, random(5)));
    mesAnims.push(new Anim1(100, 350, random(5)));
    

    /*monSuperSquare = new Anim1(200, 300, 1);
    mon2SuperSquare = new Anim1(600, 100, 2);*/

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "intro",
        start : 1,
        stop : 2,
		onStart : (event) => {
			console.log(event)
            mesAnims[0].setDrawable(true);
		},
		onStop : (event) => {
			console.log(event)
            mesAnims[0].setDrawable(false);
		},
		
	});
    sequencer.registerSequence({
		name : "mid",
        start : 7,
        stop : 11,
		onStart : (event) => {
			console.log(event)
            mesAnims[2].setDrawable(true);
		},
		onStop : (event) => {
			console.log(event)
            mesAnims[2].setDrawable(false);
		},
		
	});
	}

function draw(){
    background(255);
	sequencer.update();
    /*monSuperSquare.draw();
    mon2SuperSquare.draw();*/
    for (let anim of mesAnims){
        if(anim.isDrawable()){
            anim.draw();
        }
    }
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

