/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/Sordid Pink - Killer [Mpgun.com].mp3";
let sequencer;
let img1;
let img1Display = false;
let mainCamera;
function preload(){
	img1 = loadImage( "./assets/images/pose1.png"); //add other images as wel
	img2 = loadImage( "./assets/images/pose1_1.png");
	img3 = loadImage( "./assets/images/pose1.png");
	img4 = loadImage( "./assets/images/pose1.png");
	img5 = loadImage( "./assets/images/pose1.png");
	img6 = loadImage( "./assets/images/pose1.png");
	img7 = loadImage( "./assets/images/pose1.png");
	img8 = loadImage( "./assets/images/pose1.png");
	img9 = loadImage( "./assets/images/pose1.png");
	img10 = loadImage( "./assets/images/pose1.png");
	img11 = loadImage( "./assets/images/pose1.png");
	img12 = loadImage( "./assets/images/pose1.png");

}

function setup() {	
	colorMode(RGB);
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	mainCamera = createCamera();
	sequencer = new Sequencer(audioPath, 90);
	
	
	sequencer.registerSequence({
		name : "all",
		start:2,stop:25,
		onStart : (event) => {
		 	img1Display = true;

			camX = -width/2;
			camY = 0;
			camZ = 800; //zoom dans la profondeur
			camXSpeed = 1;
			camYSpeed = -1; //ça sert a changer la vitesse de cam + lui dire ou aller et a quelle speed
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
			img1Display = false;
			camXSpeed = 0; 
			camX = 0;
			camZ = 400; //ça sert à lui dire "on va skip a cet endroit une fois que c'est finit" et donc faire un cut
		},
		
	});
}

let camX=0, camXSpeed=0;
let camY=0, camYSpeed=0;
let camZ=0, camZSpeed=0;

function draw(){
	clear();
	camX += camXSpeed;
	camY += camYSpeed;
	camZ += camZSpeed;
	mainCamera.setPosition(camX, camY, camZ)
	mainCamera.lookAt(camX, camY, 0);

	sequencer.update();
	if(img1Display){
		image(img1, -width/2, -height/2, width, height);
	}
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

// function putImage(filename){
// 	var x = document.createElement("IMG");	
//   x.setAttribute("src", filename);
//   document.body.appendChild(x);
// }

 function fill_canvas(img) {
            // CREATE CANVAS CONTEXT.
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);       // DRAW THE IMAGE TO THE CANVAS.
}

