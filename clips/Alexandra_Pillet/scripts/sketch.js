/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

let audioPath = "./assets/audio/sousplis2.mp3";
let sequencer;

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
        name : "intro",
        start:1,
        stop:10,
		onStart : (event) => {
            document.querySelector(".circleWrapper").classList.add("anim") 
            circles = true;
			console.log(event)
		},
		onStep : (event) => {
            circles = true
			console.log(event)
		},
		onStop : (event) => {
            
            document.querySelector(".circleWrapper").classList.remove("anim") 
            circles = false;
			console.log(event)
		},
		
	});
    
    	
	sequencer.registerSequence({
        name : "second",
        start:11,
        stop:20,
		onStart : (event) => {
            document.querySelector(".circleWrapper2").classList.add("anim2") 
            circles = true;
			console.log(event)
		},
		onStep : (event) => {
            circles = true
			console.log(event)
		},
		onStop : (event) => {
            
            document.querySelector(".circleWrapper2").classList.remove("anim2") 
            circles = false;
			console.log(event)
		},
		
	});   
}
 
function draw(){
	sequencer.update()}

var snail = function draw(){
    //globalResult = ();
	let circles = [...document.querySelectorAll(".circle")];
    let count = 0;
    
    let rayon = 0;
    let angle = 0;//frameCount *0.1;
    for(let circle of circles){

        circle.style.animationDelay = noise(count, 0)* 500+ "ms";
        
        circle.style.left = width/2 + rayon * cos(angle) + "px";
        circle.style.top = height/2 + rayon * sin(angle) + "px";
        
        rayon += 30;
        angle += 0.8;
        
        };
   // printIn(globalResult);
    /*let circles2 = [...document.querySelectorAll(".circle2")];
    let count = 0;
    for(let circle of circles){
        circle.style.animationDelay = noise(count, 0)* 500+ "ms";
        circle.style.left = noise(frameCount*0.01, count, 1)* width + 'px';
        circle.style.top = noise(frameCount*0.01,count, 2)* height + 'px';
         
        }*/
    count++;
        
}

snail();


function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}
