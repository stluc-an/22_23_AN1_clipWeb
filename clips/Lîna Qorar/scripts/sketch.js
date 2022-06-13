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
let img2;
let img2Display = false
let img3;
let img3Display = false
let img4;
let img4Display = false
let img5;
let img5Display = false
let img6;
let img6Display = false
let img7;
let img7Display = false
let img8;
let img8Display = false
let img9;
let img9Display = false
let mainCamera;
function preload(){
	img1 = loadImage( "./assets/images/pose1.png");
	img2 = loadImage( "./assets/images/pose1_1.png");
	img3 = loadImage( "./assets/images/pose1_2.png");
	img4 = loadImage( "./assets/images/pose2.png");
	img5 = loadImage( "./assets/images/pose2_1.png");
	img6 = loadImage( "./assets/images/pose2_2.png");
	img7 = loadImage( "./assets/images/pose3.png");
	img8 = loadImage( "./assets/images/pose3_1.png");
	img9 = loadImage( "./assets/images/pose3_2.png");
}

function setup() {	
	colorMode(RGB);
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	mainCamera = createCamera();
	sequencer = new Sequencer(audioPath, 90 ,false);
	
	
	sequencer.registerSequence({
		name : "all",
		start:18,stop:35,
		onStart : (event) => {
		 	img1Display = true; //charge mon image à ce moment, attention changer le nom de img a chaque nouvelle image pour afficher la bonne.

			camX = -width/3;
			camY = 0;
			camZ = 350; //zoom dans la profondeur
			camXSpeed = 1;
			// camYSpeed = 0; //ça sert a changer la vitesse de cam + lui dire ou aller et a quelle speed
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
			img1Display = false;

			camXSpeed = -width/4; 
			// camX = 0;
			// camZ = 400; //ça sert à lui dire "on va skip a cet endroit une fois que c'est finit" et donc faire un cut
		},

	});

		sequencer.registerSequence({
			name : "deux",
			start:36,stop:52,
			onStart : (event) => {
			 	img4Display = true;

			camX = width/2;
			camY = 0;
			camZ = 350;
			camXSpeed = -1;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img4Display = false;

				camXSpeed = width/2; 
				// camX = 0;
				// camZ = 400;
			},
			
		});

		sequencer.registerSequence({
			name : "trois",
			start:53,stop:69,
			onStart : (event) => {
			 	img7Display = true;

				camX = -width/3;
				camY = 200;
				camZ = 325;
				camXSpeed = 1;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img7Display = false;

				camXSpeed = -width/2;
				// camX = 0;
				// camZ = 400;
			},
			
		});

		sequencer.registerSequence({
			name : "quatre",
			start:70,stop:83,
			onStart : (event) => {
			 	img2Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img2Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "cinq",
			start:84,stop:99,
			onStart : (event) => {
			 	img5Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 325;
				camXSpeed = 2;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img5Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "six",
			start:100,stop:115,
			onStart : (event) => {
			 	img6Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img6Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
			//second part for me--------------------------------------------------------------------
		});
		sequencer.registerSequence({
			name : "sept",
			start:116,stop:132,
			onStart : (event) => {
			 	img8Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img8Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "huit",
			start:133,stop:147,
			onStart : (event) => {
			 	img2Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 2;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img2Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});
		sequencer.registerSequence({
			name : "neuf",
			start:148,stop:162,
			onStart : (event) => {
			 	img9Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img9Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});
		sequencer.registerSequence({
			name : "dix",
			start:163,stop:172,
			onStart : (event) => {
			 	img3Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 2;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img3Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "onze",
			start:173,stop:174,
			onStart : (event) => {
			 	img4Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img4Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "douze",
			start:175,stop:176,
			onStart : (event) => {
			 	img3Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img3Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "treize",
			start:177,stop:180,
			onStart : (event) => {
			 	img7Display = true;

				camX = width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img7Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "quatorze",
			start:181,stop:182,
			onStart : (event) => {
			 	img1Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img1Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "quinze",
			start:183,stop:184,
			onStart : (event) => {
			 	img9Display = true;

				camX = width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img9Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});


		sequencer.registerSequence({
			name : "seize",
			start:185,stop:186,
			onStart : (event) => {
			 	img5Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img5Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "dixsept",
			start:187,stop:204,
			onStart : (event) => {
			 	img2Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img2Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "dixzuite",
			start:205,stop:212,
			onStart : (event) => {
			 	img6Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img6Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "dixneuf",
			start:213,stop:214,
			onStart : (event) => {
			 	img2Display = true;

				camX = width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img2Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "vingt",
			start:215,stop:216,
			onStart : (event) => {
			 	img7Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				imgDisplay = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "vinteain",
			start:217,stop:218,
			onStart : (event) => {
			 	img7Display = true;

				camX = width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img7Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "vingdeux",
			start:219,stop:220,
			onStart : (event) => {
			 	img2Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img2Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "vingtrois",
			start:221,stop:222,
			onStart : (event) => {
			 	img6Display = true;

				camX = width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img6Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "vingquatre",
			start:223,stop:224,
			onStart : (event) => {
			 	img7Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img7Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "vingcinq",
			start:225,stop:226,
			onStart : (event) => {
			 	img1Display = true;

				camX = width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img1Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "vingsix",
			start:227,stop:228,
			onStart : (event) => {
			 	img3Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img3Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		// sequencer.registerSequence({
		// 	name : "vingsept",
		// 	start:229,stop:235,
		// 	onStart : (event) => {
		// 	 	img3Display = true;

		// 		camX = width/3;
		// 		camY = 0;
		// 		camZ = 350;
		// 		camXSpeed = 1;
		// 		camYSpeed = 0;
		// 	},
		// 	onStep : (event) => {
		// 		console.log(event)
		// 	},
		// 	onStop : (event) => {
		// 		console.log(event)
		// 		img3Display = false;
		// 		camXSpeed = 0; 
		// 		// camX = 0;
		// 		// camZ = 100;
		// 	},
			
		// });

		sequencer.registerSequence({
			name : "vinghuit",
			start:229,stop:244,
			onStart : (event) => {
			 	img5Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 2;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img5Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "vingneuf",
			start:245,stop:259,
			onStart : (event) => {
			 	img7Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 2;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img7Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "trente",
			start:260,stop:269,
			onStart : (event) => {
			 	img5Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img5Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "trentéun",
			start:270,stop:283,
			onStart : (event) => {
			 	img9Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img9Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "trentdeux",
			start:284,stop:299,
			onStart : (event) => {
			 	img4Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img4Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "trentretrois",
			start:300,stop:309,
			onStart : (event) => {
			 	img8Display = true;

				camX = -width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 2;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img8Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "trentequatre",
			start:310,stop:316,
			onStart : (event) => {
			 	img2Display = true;

				camX = width/3;
				camY = 0;
				camZ = 350;
				camXSpeed = 1;
				camYSpeed = 0;
			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img2Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
			},
			
		});

		sequencer.registerSequence({
			name : "trentrequatre",
			start:317,stop:400,
			onStart : (event) => {
			 	img4Display = true;

				camX = width/3;
				camY = 0;
				camZ = 0;
				camZSpeed = 4;

			},
			onStep : (event) => {
				console.log(event)
			},
			onStop : (event) => {
				console.log(event)
				img4Display = false;
				camXSpeed = 0; 
				// camX = 0;
				// camZ = 100;
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
	if(img2Display){
		image(img2, -width/2, -height/2, width, height);
	}
	if(img3Display){
		image(img3, -width/2, -height/2, width, height);
	}
	if(img4Display){
		image(img4, -width/2, -height/2, width, height);
	}
	if(img5Display){
		image(img5, -width/2, -height/2, width, height);
	}
	if(img6Display){
		image(img6, -width/2, -height/2, width, height);
	}
	if(img7Display){
		image(img7, -width/2, -height/2, width, height);
	}
	if(img8Display){
		image(img8, -width/2, -height/2, width, height);
	}
	if(img9Display){
		image(img9, -width/2, -height/2, width, height);
	}
}

// function windowResized(){
// 	resizeCanvas(window.innerWidth, window.innerHeight);
// }

// // function putImage(filename){
// // 	var x = document.createElement("IMG");	
// //   x.setAttribute("src", filename);
// //   document.body.appendChild(x);
// // }

//  function fill_canvas(img) {
//             // CREATE CANVAS CONTEXT.
//             var canvas = document.getElementById('canvas');
//             var ctx = canvas.getContext('2d');

//             canvas.width = img.width;
//             canvas.height = img.height;

//             ctx.drawImage(img, 0, 0);       // DRAW THE IMAGE TO THE CANVAS.
// }

