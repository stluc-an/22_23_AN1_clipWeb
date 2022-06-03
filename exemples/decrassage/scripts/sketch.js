/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;
let R;
let G;
let B;


function setup() {	
	colorMode(RGB);
    
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);
    
	
    sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "first",
        start : 1,
        stop : 10,
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            if(R == 255){
               R = 0;
               G = 100;
               B = 50;
            }else{
                R = 255;
                G = 50;
                B = 100;
            }
		},
		onStop : (event) => {
			console.log(event)
		},
        
        
	});
    
    
    
    sequencer.registerSequence({
        name : "secundo",
        start : 10,
        stop :20 ,
        steps : [ 1, 1+1/2 ],
        onStep : () => {
            if(bgColor == 0){
                bgColor = 255;
            }else{
                bgColor = 0;
            }
        }
    });
    
    sequencer.registerSequence({
        name : "tertio",
        start :20,
        stop :30,
        measure : 4,
        steps : [1,3],
        onStep : () => {
            if(bgColor == 0){
                bgColor = 255;
            }else{
                bgColor = 0;
            }
        }
    })
    
	}

function draw(){
	sequencer.update();
   background (R,G,B);
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

