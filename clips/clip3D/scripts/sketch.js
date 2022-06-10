/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/good-habits-and-bad.mp3";
let sequencer;

let img;
let img2;
let img3;
let img4;

let particules = []

let marc;

let marce;

let mainCamera; 

let teletubies;

let octahedron;
function preload() {
    
  octahedron = loadModel('assets/mesh.obj', true);
     img = loadImage("assets/textura.jpeg")
   teletubies = loadModel('assets/meshpo.obj', true); 
    img2 = loadImage ("assets/textura2.jpeg")
    marce = loadModel("assets/doucre.obj", true)
    img4 = loadImage("assets/textura4.jpeg")
   marc = loadModel("assets/marcc.obj", true)
    img3 = loadImage("assets/textura3.jpeg")
}


function setup() {	
    
    createCanvas(100,100, WEBGL);
    
    
    
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight,WEBGL);

    mainCamera = createCamera(); 
    mainCamera.setPosition(0,0,800); 
    mainCamera.lookAt(0,0,0)
	sequencer = new Sequencer(audioPath, 132);
	
	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            
       
         particules.push(new Particule(0,0,0, octahedron));
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
   
    background(200,200,150);
    push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);

        scale(2);
        noStroke();
        texture(img);    
        model(octahedron);
    pop();
    
    push();
        rotateZ(frameCount * 0.03);
        rotateX(frameCount * 0.03);
        rotateY(frameCount * 0.03);

        noStroke();
        scale(5)
        texture(img2);
        translate(100,130,210)
        model(teletubies);    
    pop();
    push();
        rotateZ(frameCount * 0.02);
        rotateX(frameCount * 0.02);
        rotateY(frameCount * 0.02);

        noStroke();
        texture(img3);
        translate(700,260,250)
        scale(2)
        model(marc);
    pop();
    
    push();
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);

        scale(3);  
        translate(200,50,100)
        texture(img4);
        noStroke();
        model(marce);

    pop();
    
   

    let R = 800; 
   let x = R * cos(millis()/1000);
    let z = R * sin(millis()/1000); 
    
    mainCamera.setPosition(x,mouseX,z); 
    mainCamera.lookAt(0,0,mouseX);
    
    
    
    particules.forEach( (particule)=>{
        particule.draw();
    });
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

