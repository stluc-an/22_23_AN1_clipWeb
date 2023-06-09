/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";

let sequencer;

let bgColor;

let isRectDrawable = false;
let isTourniquetDrawable = false;
let rectColor;
let jaune;
let magenta;


function setup() {	
	colorMode(RGB);
    rectMode(CENTER);
    bgColor = color(170, 79, 40);
    jaune = color(255, 255, 0);
    magenta = color(230, 40, 200)
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
        start:3,
        stop:9,
		onStart : (event) => {
			console.log(event)
            isRectDrawable = true;
            bgColor = color(130, 69, 170);
            rectColor = color(jaune)
		},
		onStep : (event) => {
			console.log(event)
            if (rectColor == jaune){
                rectColor = magenta;
            }else if(rectColor == magenta){
                rectColor = jaune;
            }
        
		},
		onStop : (event) => {
			console.log(event)
            bgColor = color(30, 169, 170);
            isRectDrawable = false;
            rectColor = color(170, 40, 130)
		},
		
	});
    
    
    sequencer.registerSequence({
		name : "tourniquet",
        start:6,
        stop:20,
		onStart : () => {
            isTourniquetDrawable = true;
			
		},
		onStep : (event) => {
			
        
		},
		onStop : (event) => {
			isTourniquetDrawable = false;
		},
		
	});
    
    
	}

function draw(){
	sequencer.update();
	background(bgColor);
    
    if(isRectDrawable){
        fill(rectColor);
        rect(width/2, height/2, 300, 300);
    }
    
    if (isTourniquetDrawable){
    push()
    translate(width/2, height/2)
    rotate(millis()*0.002);
     fill (10, 200, 200);
        rect(0, 0, 200, 200);
    pop()
    }
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

