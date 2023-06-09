/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/y2mate.com - Bleu de locéan 47.mp3;"

let sequencer;
let mesAnims = [];
let monPremierSuperAnim;
let secondeAnim;

function setup() {	
	colorMode(RGB);
    rectMode(CENTER);
    bgColor = color(170, 79, 40);
    jaune = color(255, 255, 0);
    magenta = color(230, 40, 200)
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);
    
    mesAnims.push(new Anim1(56, 89));
     mesAnims.push(new Anim1(49, 89));
      mesAnims.push(new Anim1(77, 89));
       mesAnims.push(new Anim1(98, 89));
        mesAnims.push(new Anim1(34, 89));
         mesAnims.push(new Anim1(21, 89));
          mesAnims.push(new Anim1(92, 89));
           mesAnims.push(new Anim1(33, 89));
            mesAnims.push(new Anim1(11, 89));
            
    
    monPremierSuperAnim = new Anim1(200, 200);
    secondeAnim = new Anim1(400, 100);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "intro",
        start:1,
    
        stop:2,
		onStart : (event) => {
            mesAnims[0].setDrawable(true);
			
		},
		
		onStop : (event) => {
			console.log(event)
            mesAnims[0].setDrawable(false);
		},
		
	});
    
    
    sequencer.registerSequence({
		name : "tourniquet",
        start:6,
        stop:20,
		onStart : () => {
            
			
		},
		onStep : (event) => {
			
        
		},
		onStop : (event) => {
			
		},
		
	});
    
    
	}

function draw(){
    background(255);
	sequencer.update();
    monPremierSuperAnim.draw();
    secondeAnim.draw();
    for(let anim of mesAnims){
        if(anim.isDrawable()){
            anim.draw();
        }
    }
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

