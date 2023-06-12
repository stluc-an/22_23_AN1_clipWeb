/*----------------------------------------*\
  beakerProject - sketch.js
  @author Delatte Emma
  @Date:   2023-04-10
  @Last Modified time: 2023-06-12 15:54:27
\*----------------------------------------*/

let audioPath = "./assets/audio/Musique/delatte_emma - Gesaffelstein Novo Sonic System.mp3";
let sequencer;
let bgColor;
let isDilateFilterApplied;
let myFont

let mesAnims = [];


//charger les images avant//
function preload(){
	myFont = loadFont('./assets/Reboot Crush.ttf');
	mesAnims.push(
		new Animator({
			imgPatternAddress : "./assets/images/img[IMG_NUM].PNG",
			imgCount : 36,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/images/img[IMG_NUM].PNG",
			imgCount : 36,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/images2/img[IMG_NUM].PNG",
			imgCount : 19,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/images3/img[IMG_NUM].PNG",
			imgCount : 313,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/images4/img[IMG_NUM].PNG",
			imgCount : 1,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 1	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/bugtime/img[IMG_NUM].PNG",
			imgCount : 23,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/bugtime2/img[IMG_NUM].PNG",
			imgCount : 23,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/bugtime3/img[IMG_NUM].PNG",
			imgCount : 23,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/completedistortion/img[IMG_NUM].PNG",
			imgCount : 1,		//Nombre d'images à charger
			firstImageNum : 0,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/bugtime4/img[IMG_NUM].PNG",
			imgCount : 23,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/bugtime5/img[IMG_NUM].PNG",
			imgCount : 45,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
		new Animator({
			imgPatternAddress : "./assets/images/img[IMG_NUM].PNG",
			imgCount : 36,		//Nombre d'images à charger
			firstImageNum : 1,	//Première image de la série d'images
			numberLength : 4	//Nombre de chiffres pour la renumérotation des images
		}),
	);
}



function setup() {
	textFont(myFont); // Définition de la police de caractères
  	textAlign(CENTER, CENTER); // Alignement du texte au centre de chaque caractère
	colorMode(RGB);
	bgColor = color (70,15,160);
	frameRate(90);
	createCanvas(window.innerWidth, window.innerHeight);
	sequencer = new Sequencer(audioPath, 105,false);

	//séquence1//
	sequencer.registerSequence({
		name : "walking1",
		start : 1,
		stop : 36,    //ppur une image sur les deux temps faire stop:50//
		/*steps:[1, 1+1/2],*/      //augmenter le débis, faire une image tout les deux temps//
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
			blendMode(DIFFERENCE);
		},
		onStep : (event) => {
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
	});


	//séquence2//
	sequencer.registerSequence({
		name : "walking2",
		start : 22,
		stop : 30,   
		onStart : (event) => {
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[1].setDrawable(false);
		},
	});


	//séquence3//
	sequencer.registerSequence({
		name : "turning face",
		start : 37,
		stop : 50,   
		onStart : (event) => {
			mesAnims[2].setDrawable(true);
			bgColor = color (70,15,160);
			filter(INVERT);
		},
		onStep : (event) => {
			mesAnims[2].setCursor(event.amount);
			filter(INVERT);
		},
		onStop : (event) => {
			mesAnims[2].setDrawable(false);
		},
	});


	//séquence4//
	sequencer.registerSequence({
		name : "turning men",
		start : 51,
		stop : 83,
		steps: [1, 1 + 1/3],
		onStart : (event) => {
			mesAnims[3].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[3].setCursor(event.amount);

			/*ici on va mettre le filtre en marche aux mmts séléctionnées
			et ensuite le supprimer en réinitialisant le shader, ce qui va donner
			un effet de bug*/

			if (event.step == 55 ||
				event.step == 56 || 
				event.step == 59 || 
				event.step == 60 ||
				event.step == 61 || 
				event.step == 63 || 
				event.step == 67 || 
				event.step == 68 || 
				event.step == 69 || 
				event.step == 64 ||
				event.step == 72 ||
				event.step == 76 || 
				event.step == 80
				) {
					if (!isDilateFilterApplied) {
						filter(DILATE);
						isDilateFilterApplied = true;
					}
				} else {
					if (isDilateFilterApplied) {
						resetShader();
						isDilateFilterApplied = false;
					}
				}
		},
		onStop : (event) => {
			mesAnims[3].setDrawable(false);
			if (isDilateFilterApplied) {
				resetShader();
				isDilateFilterApplied = false
			}
		},
	});



	//séquences5//
	sequencer.registerSequence({
		name : "hyperVitesseEffect",
		start : 83,
		stop : 100,   
		onStart : (event) => {
			mesAnims[4].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[4].setCursor(0);
			/*
			blendMode(ADD);   //ça ne fonctionne pas et honnmetement je vais m'énerver//
			 // Faire tourner l'image sur elle-même en son centre
			 const centerX = width / 2;
			 const centerY = height / 2;
			 const rotationAngle = map(event.progress, 0, 1, 0, TWO_PI);
			 push();
			 translate(centerX, centerY);
			 rotate(rotationAngle);
			 imageMode(CENTER);
			 mesAnims[4].draw();
			 pop();
			 */
		},
		onStop : (event) => {
			mesAnims[4].setDrawable(false);
		},
	});



	//séquence6//
	sequencer.registerSequence({
		name : "Bug time",
		start : 105,
		stop : 110,
		steps: [1, 1 + 1 / 3],
		onStart : (event) => {
			mesAnims[5].setDrawable(true);
			blendMode(DIFFERENCE);
		},
		onStep : (event) => {
			mesAnims[5].setCursor(event.amount);
			blendMode(DIFFERENCE);

			if (event.step == 110
				) {
					if (!isDilateFilterApplied) {
						filter(DILATE);
						isDilateFilterApplied = true;
					}
				} else {
					if (isDilateFilterApplied) {
						resetShader();
						isDilateFilterApplied = false;
					}
				}

		},
		onStop : (event) => {
			mesAnims[5].setDrawable(false);
		},
	});



	//séquence7//
	sequencer.registerSequence({
		name : "Bug time2",
		start : 110,
		stop : 113,
		steps: [1, 1 + 1 / 3],
		onStart : (event) => {
			mesAnims[6].setDrawable(true);
			blendMode(DIFFERENCE);
		},
		onStep : (event) => {
			mesAnims[6].setCursor(event.amount);
			blendMode(DIFFERENCE);

			if (event.step == 113
				) {
					if (!isDilateFilterApplied) {
						filter(DILATE);
						isDilateFilterApplied = true;
					}
				} else {
					if (isDilateFilterApplied) {
						resetShader();
						isDilateFilterApplied = false;
					}
				}

		},
		onStop : (event) => {
			mesAnims[6].setDrawable(false);
		},
	}),


	//séquence8//
	sequencer.registerSequence({
		name : "Bug time3",
		start : 113,
		stop : 117,
		steps: [1, 1 + 1 / 3],
		onStart : (event) => {
			mesAnims[7].setDrawable(true);
			filter(INVERT);
		},
		onStep : (event) => {
			mesAnims[7].setCursor(event.amount);
			filter(INVERT);

			if (event.step == 117
				) {
					if (!isDilateFilterApplied) {
						filter(INVERT);
						isDilateFilterApplied = true;
					}
				} else {
					if (isDilateFilterApplied) {
						resetShader();
						isDilateFilterApplied = false;
					}
				}

		},
		onStop : (event) => {
			mesAnims[7].setDrawable(false);
		},
	});

	
	//séquence9//
	sequencer.registerSequence({
		name : "Bug time4",
		start : 117,
		stop : 121,
		steps: [1, 1 + 1 / 3],
		onStart : (event) => {
			mesAnims[9].setDrawable(true);
			filter(THRESHOLD);
		},
		onStep : (event) => {
			mesAnims[9].setCursor(event.amount);
			filter(THRESHOLD);

			if (event.step == 121
				) {
					if (!isDilateFilterApplied) {
						filter(THRESHOLD);
						isDilateFilterApplied = true;
					}
				} else {
					if (isDilateFilterApplied) {
						resetShader();
						isDilateFilterApplied = false;
					}
				}

		},
		onStop : (event) => {
			mesAnims[9].setDrawable(false);
		},
	});


	//séquence10//
	sequencer.registerSequence({
		name : "Bug time5",
		start : 134,
		stop : 149,
		steps: [1, 1 + 1 / 6],
		onStart : (event) => {
			mesAnims[10].setDrawable(true);
			filter(OPAQUE);
		},
		onStep : (event) => {
			mesAnims[10].setCursor(event.amount);
			filter(OPAQUE);

		},
		onStop : (event) => {
			mesAnims[10].setDrawable(false);
		},
	});

	//séquencejsp combien//
	sequencer.registerSequence({
		name : "completedistortion",
		start : 165,
		stop : 196,
		onStart : (event) => {
			mesAnims[8].setDrawable(true);
			filter(THRESHOLD);
		},
		onStep : (event) => {
			mesAnims[8].setCursor(event.amount);
			filter(THRESHOLD);
			
			 // Affichage du texte "ERROR SYSTEM"
			fill(255); // Couleur du texte (blanc)
			textSize(48); // Taille du texte
			text("ERROR SYSTEM", width/2, height/2); // Position et contenu du texte
		},
		onStop : (event) => {
			mesAnims[8].setDrawable(false);
		},
	});

	
	//séquence de fin//
	sequencer.registerSequence({
		name : "completedistortion2",
		start : 197,
		stop : 261,
		onStart : (event) => {
			mesAnims[11].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[11].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[11].setDrawable(false);
		},
	});
	
}





function draw(){
	background(bgColor);
	/*background(70,15,160);*/
	sequencer.update();

	for(let anim of mesAnims){
		if(anim.isDrawable()){
			anim.draw();		
		}
	}
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}


function drawText(text, x, y) {
	textFont(myFont);
	textSize(fontSize);
	textAlign(CENTER, CENTER);
	fill(255);
	text(text, x, y);
  }

/*
filter(DILATE);     //à mettre à on start, step et stop pour un effet de bug
//sinon ça fait comme si l'image se dilatais peu à peu
filter(THRESHOLD);     //pareil mais donne un effet plus en rythme avec la musique
filter(GRAY);         //filtre gris 
filter(OPAQUE);    //donne une impression plus epileptique et smooth de blendMode
filter(POSTERIZE,3);    //un peu illisible 
filter(BLUR,1);
filter(ERODE);     //un peu cafouilli
filter(INVERT);
*/