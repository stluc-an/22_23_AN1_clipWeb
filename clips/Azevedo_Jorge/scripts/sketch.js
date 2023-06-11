/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

/*----------------------------------------*\
	Des oiseaux qui egayent une ville morose
	
\*----------------------------------------*/
let audioPath = "./assets/audio/Berlin Grey - Fat Jon.mp3";
let sequencer;

		let myBirdCircles = [];
		let myDrops = [];
		let myFeathers = [];
		let myParrots = [];	
		let myNoise = [];
		let myBackgrounds = [];
		let myPapaBackgrounds = [];
		let myBirdCirclesTwinL = [];
		let myBirdCirclesTwinR = [];
		let mySopranos = [];
		let mySpiiins = [];
		let myColors = [];

		let positionFX = [];

		let myParrotImage;
		let myParrotImage2;

		let background1;
		let background2;
		let background3;
		let background4;
		let background5;
		let background6;
		let background7;
		let background8;

		let parrotSing1;
		let parrotSing2;
		let parrotSing3;
		let parrotSing4;
		let parrotSing5;
	
		let myFeatherImage;
		let myParrotFond;
		// { sequenceBase } from './sequenceBase.js';

		let papaCompteur;
		let papaValeur;

		let ParrotSens;
		let parCompteur;

		let diametreBC;
		let compteurBD;

		let diametreBCT;
		let compteurBDT;

		let singCompteur;
		let singValeur;

		let compteurNoise;

		let spinCompteur;

		let coolValeur;
		let coolCompteur;

		let fCompteur;

		mySpiiins.push(new Spinning('1'));
		mySpiiins.push(new Spinning('2'));
		mySpiiins.push(new Spinning('3'));
		mySpiiins.push(new Spinning('4'));


function preload(){
	myParrotImage = loadImage('assets/images/Oiseaux.png');
	myParrotImage2 = loadImage('assets/images/Oiseaux2.png');

	myFeatherImage = loadImage('assets/images/plume.png');

    background1 = loadImage('assets/images/background01.png');
	background2 = loadImage('assets/images/background02.png');
	background3 = loadImage('assets/images/background03.png');
	background4 = loadImage('assets/images/background04.png');
	background5 = loadImage('assets/images/background05.png');
	background6 = loadImage('assets/images/background06.png');
	background7 = loadImage('assets/images/background07.png');
	background8 = loadImage('assets/images/background08.png');

	parrotSing1 = loadImage('assets/images/Sing0000.png');
	parrotSing2 = loadImage('assets/images/Sing0001.png');
	parrotSing3 = loadImage('assets/images/Sing0002.png');
	parrotSing4 = loadImage('assets/images/Sing0003.png');
	parrotSing5 = loadImage('assets/images/Sing0004.png');

	myParrotFond = loadImage('assets/images/parrotFond.png');
		/*
		myParrotImage = loadImage('assets/images/Oiseaux.png');
		myParrotImage = loadImage('assets/images/Oiseaux.png');
		myParrotImage = loadImage('assets/images/Oiseaux.png');
		myParrotImage = loadImage('assets/images/Oiseaux.png');
		myParrotImage = loadImage('assets/images/Oiseaux.png');*/
}

function setup() {	

				colorMode(RGB);
				frameRate(60);
				createCanvas(window.innerWidth, window.innerHeight, /*WEBGL*/);
				//WEBGL --> centre du Canvas au milieu de l'écran
				
				sequencer = new Sequencer(audioPath, 88, false);


				papaCompteur = 0;
				
				sequencer.registerSequence({
					name : "parrotFondDebut",
					start: 1,
					stop: 9,
					onStart : (event) => {
						console.log(event)
						papaValeur = (papaCompteur+1).toString();
						myPapaBackgrounds.push(new BackParrot(papaValeur));
						myPapaBackgrounds[papaCompteur].setDrawable(true);
						papaCompteur ++;
						
					},
					onStep : (event) => {
						console.log(event)
						papaValeur = (papaCompteur+1).toString();
						myPapaBackgrounds.push(new BackParrot(papaValeur));
						myPapaBackgrounds[papaCompteur - 1].setDrawable(false);
						myPapaBackgrounds[papaCompteur].setDrawable(true);
						papaCompteur ++;
						
					},
					onStop : (event) => {
						console.log(event)
						myPapaBackgrounds[papaCompteur - 1].setDrawable(false);
						myPapaBackgrounds.length = 0;
						papaCompteur = 0;
						papaValeur = 0;
					},
					
				});
	
		ParrotSens = true;
		
		parCompteur = 0;
		sequencer.registerSequence({
			
			name : "parrot1",
			start : 9,
			steps : [1, 1+1/2],
			stop : 72,
			onStart : (event) => {
				console.log(event)
				myParrots.push(new Parrot(ParrotSens));
				myParrots[parCompteur].setDrawable(true);
				parCompteur ++;
			},
			onStep : (event) => {
				console.log(event)
				console.log(ParrotSens)
				//chaque step La valeur change
				if (ParrotSens == true) {
					ParrotSens = false;
				}
				else {
					ParrotSens = true;
				}
				myParrots.push(new Parrot(ParrotSens));
				myParrots[parCompteur - 1].setDrawable(false);
				myParrots[parCompteur].setDrawable(true);
				parCompteur ++;
			},
			onStop : (event) => {
				console.log(event)
				myParrots[parCompteur - 1].setDrawable(false);
				/*myBirdCircles.length = 1 
				pour qu'il reste l'image en fond*/
				myParrots.length = 0;
			},	
		});

		
		

		sequenceBase1("1", 9, 16, '1', true, width*0.33);

		sequenceBase1("2", 17, 24, '2', true, width*0.33);

		sequenceBase1("3", 25, 32, '3', false, width*0.66);

		sequenceBase1("4", 33, 40, '4', false, width*0.66);

		sequenceBase1("5", 41, 48, '5', true, width*0.33);

		sequenceBase1("6", 49, 56, '6', true, width*0.66);

		sequenceBase1("7", 57, 64, '7', false, width*0.66);

		sequenceBase1("8", 65, 72, '8', false, width*0.33);


		/*fCompteur = 0;
    sequencer.registerSequence({
        name : "plumes1",
        start: 73,
        steps: [1, 1 + 1/4, 1 + 2/4, 1 + 3/4],
        stop: 104,
        onStart : (event) => {
            console.log(event)
            positionFX.push(random(innerWidth));
			console.log("hello voici:", fCompteur, positionFX[fCompteur]);
            myFeathers.push(new Feathers(positionFX[fCompteur], 0));
            myFeathers[fCompteur].setDrawable(true);
            fCompteur ++;
        },
        onStep : (event) => {
            console.log(event)
            positionFX.push(random(innerWidth));
			console.log("hello voici:", fCompteur, positionFX[fCompteur]);
            myFeathers.push(new Feathers(positionFX[fCompteur], 0));
            myFeathers[fCompteur].setDrawable(true);
            fCompteur ++;
        },
        onStop : (event) => {
            console.log(event)
            myFeathers.forEach(feather => {
                feather.setDrawable(false);
              });
            myFeathers.length = 0;
            positionFX.length = 0;
            fCompteur = 0;
        },
        
    });*/

		sequenceBase2("1", 73, 80, '5', true, false);

		sequenceBase2("2", 81, 88, '2', true, true);

		sequenceBase2("3", 89, 96, '3', false, true);

		sequenceBase2("4", 97, 104, '4', false, false);

		
		coolCompteur = 0;
		sequencer.registerSequence({
			name : "cool1",
			start: 105,
			stop: 136,
			onStart : (event) => {
				console.log(event)
				coolValeur = '1';
				myColors.push(new Colo(coolValeur));
				myColors[coolCompteur].setDrawable(true);
				coolCompteur ++;
			},
			onStep : (event) => {
				console.log(event)
				switch(singValeur){
					case '1':
						coolValeur = '2';
					break;
					case '2':
						coolValeur = '3';
					break;
					case '3':
						coolValeur = '4';
					break;
					case '4':
						coolValeur = '5';
					break;
					case '5':
						coolValeur = '6';
					break;
					case '6':
						coolValeur = '7';
					break;
					case '7':
						coolValeur = '8';
					break;
					case '8':
						coolValeur = '1';
					break;
					default:
						console.log(':)');
				}
				myColors.push(new Colo(coolValeur));
				myColors[coolCompteur - 1].setDrawable(false);
				myColors[coolCompteur].setDrawable(true);
				coolCompteur ++;
			},
			onStop : (event) => {
				console.log(event)
				myColors[coolCompteur - 1].setDrawable(false);
				myColors.length = 0;
				coolCompteur = 0;
				coolValeur = 0;
				
			},
			
		});

		singCompteur = 0;
		sequencer.registerSequence({
			name : "singinParrots1",
			start: 105,
			stop: 136,
			onStart : (event) => {
				console.log(event)
				singValeur = '1'
				mySopranos.push(new Sing(singValeur));
				mySopranos[singCompteur].setDrawable(true);
				singCompteur ++;
				
			},
			onStep : (event) => {
				console.log(event)
				switch(singValeur){
					case '1':
						singValeur = '2';
					break;
					case '2':
						singValeur = '3';
					break;
					case '3':
						singValeur = '4';
					break;
					case '4':
						singValeur = '5';
					break;
					case '5':
						singValeur = '1';
					break;
					default:
						console.log(':)');
				}
				
				mySopranos.push(new Sing(singValeur));
				mySopranos[singCompteur - 1].setDrawable(false);
				mySopranos[singCompteur].setDrawable(true);
				singCompteur ++;
				
			},
			onStop : (event) => {
				console.log(event)
				mySopranos[singCompteur - 1].setDrawable(false);
				mySopranos.length = 0;
				singCompteur = 0;
				singValeur = 0;
			},
			
		});

		spinCompteur = 0;

		sequencer.registerSequence({
			name : "spin2",
			start: 105,
			steps: [1, 1 + 1/2,],
			stop: 144,
			onStart : (event) => {
				console.log(event)
				mySpiiins[spinCompteur].setDrawable(true);
				spinCompteur ++;
			},
			onStep : (event) => {
				console.log(event)
				mySpiiins[spinCompteur - 1].setDrawable(false);
				if (spinCompteur == 4){
					spinCompteur = 0
				}
				mySpiiins[spinCompteur].setDrawable(true);
				spinCompteur ++;
			},
			onStop : (event) => {
				console.log(event)
				mySpiiins[spinCompteur - 1].setDrawable(false);
				spinCompteur = 0;

			},
			
		});

		ParrotSens = true;
		 let paraCompteur = 0;
		
		sequencer.registerSequence({
			
			name : "parrot2",
			start : 137,
			steps : [1, 1+1/2],
			stop : 200,
			onStart : (event) => {
				console.log(event)
				console.log(paraCompteur, ParrotSens)
				myParrots.push(new Parrot(ParrotSens));
				myParrots[paraCompteur].setDrawable(true);
				paraCompteur ++;
			},
			onStep : (event) => {
				console.log(event)
				console.log(ParrotSens)
				//chaque step La valeur change
				if (ParrotSens == true) {
					ParrotSens = false;
				}
				else {
					ParrotSens = true;
				}
				myParrots.push(new Parrot(ParrotSens));
				myParrots[paraCompteur - 1].setDrawable(false);
				myParrots[paraCompteur].setDrawable(true);
				paraCompteur ++;
			},
			onStop : (event) => {
				console.log(event)
				myParrots[paraCompteur - 1].setDrawable(false);
				/*myBirdCircles.length = 1 
				pour qu'il reste l'image en fond*/
				myParrots.length = 0;
			},	
		});
		
		sequenceBase1("9", 137, 144, '1', true, width*0.33);

		sequenceBase1("10", 145, 152, '2', false, width*0.66);

		sequenceBase1("11", 153, 160, '3', false, width*0.66);

		sequenceBase1("12", 161, 168, '4', true, width*0.33);

		sequenceBase1("13", 169, 176, '5', true, width*0.66);

		sequenceBase1("14", 177, 184, '6', false, width*0.66);

		sequenceBase1("15", 185, 192, '7', false, width*0.33);

		sequenceBase1("16", 193, 200, '8', false, width*0.33);


		sequenceBase2("5", 201, 208, '1', true, false);

		sequenceBase2("6", 209, 216, '2', true, true);

		sequenceBase2("7", 217, 224, '3', false, true);

		sequenceBase2("8", 225, 232, '4', false, false);

		coolCompteur = 0;
		sequencer.registerSequence({
			name : "cool2",
			start: 233,
			stop: 272,
			onStart : (event) => {
				console.log(event)
				coolValeur = '1';
				myColors.push(new Colo(coolValeur));
				myColors[coolCompteur].setDrawable(true);
				coolCompteur ++;
			},
			onStep : (event) => {
				console.log(event)
				switch(singValeur){
					case '1':
						coolValeur = '2';
					break;
					case '2':
						coolValeur = '3';
					break;
					case '3':
						coolValeur = '4';
					break;
					case '4':
						coolValeur = '5';
					break;
					case '5':
						coolValeur = '6';
					break;
					case '6':
						coolValeur = '7';
					break;
					case '7':
						coolValeur = '8';
					break;
					case '8':
						coolValeur = '1';
					break;
					default:
						console.log(':)');
				}
				myColors.push(new Colo(coolValeur));
				myColors[coolCompteur - 1].setDrawable(false);
				myColors[coolCompteur].setDrawable(true);
				coolCompteur ++;
			},
			onStop : (event) => {
				console.log(event)
				myColors[coolCompteur - 1].setDrawable(false);
				myColors.length = 0;
				coolCompteur = 0;
				coolValeur = 0;
				
			},
			
		});
		singCompteur = 0;
		sequencer.registerSequence({
			name : "singinParrots2",
			start: 233,
			stop: 272,
			onStart : (event) => {
				console.log(event)
				singValeur = '1'
				mySopranos.push(new Sing(singValeur));
				mySopranos[singCompteur].setDrawable(true);
				singCompteur ++;
				
			},
			onStep : (event) => {
				console.log(event)
				switch(singValeur){
					case '1':
						singValeur = '2';
					break;
					case '2':
						singValeur = '3';
					break;
					case '3':
						singValeur = '4';
					break;
					case '4':
						singValeur = '5';
					break;
					case '5':
						singValeur = '1';
					break;
					default:
						console.log(':)');
				}
				
				mySopranos.push(new Sing(singValeur));
				mySopranos[singCompteur - 1].setDrawable(false);
				mySopranos[singCompteur].setDrawable(true);
				singCompteur ++;
				
			},
			onStop : (event) => {
				console.log(event)
				mySopranos[singCompteur - 1].setDrawable(false);
				mySopranos.length = 0;
				singCompteur = 0;
				singValeur = 0;
			},
			
		});

		spinCompteur = 0;

		sequencer.registerSequence({
			name : "spin1",
			start: 233,
			steps: [1, 1 + 1/2,],
			stop: 272,
			onStart : (event) => {
				console.log(event)
				mySpiiins[spinCompteur].setDrawable(true);
				spinCompteur ++;
			},
			onStep : (event) => {
				console.log(event)
				mySpiiins[spinCompteur - 1].setDrawable(false);
				if (spinCompteur == 4){
					spinCompteur = 0
				}
				mySpiiins[spinCompteur].setDrawable(true);
				spinCompteur ++;
			},
			onStop : (event) => {
				console.log(event)
				mySpiiins[spinCompteur - 1].setDrawable(false);
			},
			
		});

		compteurNoise = 0;

		sequencer.registerSequence({
			name : "noise",
			start: 265,
			step: [1,
				 	1 + 1/24,
					1 + 2/24, 
					1 + 3/24, 
					1 + 4/24, 
					1 + 5/24, 
					1 + 6/24, 
					1 + 7/24, 
					1 + 8/24, 
					1 + 9/24, 
					1 + 10/24, 
					1 + 11/24, 
					1 + 12/24, 
					1 + 13/24, 
					1 + 14/24, 
					1 + 15/24, 
					1 + 16/24, 
					1 + 17/24, 
					1 + 18/24, 
					1 + 19/24, 
					1 + 20/24, 
					1 + 21/24, 
					1 + 22/24, 
					1 + 23/24,
				],
			stop: 304,
			onStart : (event) => {
				console.log(event)
				myNoise.push(new Noise());
				myNoise[compteurNoise].setDrawable(true);
				compteurNoise ++;
			},
			onStep : (event) => {
				console.log(event)
				myNoise.push(new Noise());
				myNoise[compteurNoise - 1].setDrawable(false);
				myNoise[compteurNoise].setDrawable(true);
				compteurNoise ++;
			},
			onStop : (event) => {
				console.log(event)
				myNoise[compteurNoise - 1].setDrawable(false);
				myNoise.length = 0;
			},
			
		});
		sequencer.registerSequence({
			name : "parrotFondFind",
			start: 273,
			stop: 304,
			onStart : (event) => {
				console.log(event)
				papaValeur = '1';
				myPapaBackgrounds.push(new BackParrot(papaValeur));
				myPapaBackgrounds[papaCompteur].setDrawable(true);
				papaCompteur ++;
				
			},
			onStep : (event) => {
				console.log(event)
				switch(papaValeur){
					case '1':
						papaValeur = '2';
					break;
					case '2':
						papaValeur = '3';
					break;
					case '3':
						papaValeur = '4';
					break;
					case '4':
						papaValeur = '5';
					break;
					case '5':
						papaValeur = '6';
					break;
					case '6':
						papaValeur = '7';
					break;
					case '7':
						papaValeur = '8';
					break;
					case '8':
						papaValeur = '9';
					break;
					case '9':
						papaValeur = '1';
					break;
					default:
						console.log(':)');
				}
				myPapaBackgrounds.push(new BackParrot(papaValeur));
				myPapaBackgrounds[papaCompteur - 1].setDrawable(false);
				myPapaBackgrounds[papaCompteur].setDrawable(true);
				papaCompteur ++;
				
			},
			onStop : (event) => {
				console.log(event)
				myPapaBackgrounds[papaCompteur - 1].setDrawable(false);
				myPapaBackgrounds.length = 0;
				papaCompteur = 0;
				papaValeur = 0;
			},
			
		});

	

		
}
function draw(){
	background(255);
	sequencer.update();

	for (let back of myBackgrounds){
		if(back.isDrawable()){
			back.draw();
		}
	}
	for (let cool of myColors){
		if(cool.isDrawable()){
			cool.draw();
		}
	}
	for (let backP of myPapaBackgrounds){
		if(backP.isDrawable()){
			backP.draw();
		}
	}
	for (let oiseau of myParrots){
		if(oiseau.isDrawable()){
			oiseau.draw();
		}
	}
	for (let soap of mySopranos){
		if(soap.isDrawable()){
			soap.draw();
		}
	}
	for (let spin of mySpiiins){
		if(spin.isDrawable()){
			spin.draw();
		}
	}
	for (let Bird of myBirdCircles){
		if(Bird.isDrawable()){
			Bird.draw();
		}
	}
	for (let BirdL of myBirdCirclesTwinL){
		if(BirdL.isDrawable()){
			BirdL.draw();
		}
	}
	for (let BirdR of myBirdCirclesTwinR){
		if(BirdR.isDrawable()){
			BirdR.draw();
		}
	}
	for (let noisy of myNoise){
		if(noisy.isDrawable()){
			noisy.draw();
		}
	}
	for (let feather of myFeathers){
		if(feather.isDrawable()){
			feather.draw();
		}
	}


}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}
/*for (let drop of myDrops){
		if(drop.isDrawable()){
			drop.draw();
		}
	}*/	
	/*for (let feather of myFeathers){
		if(feather.isDrawable()){
			feather.draw();
		}
	}*/
	/*myDrops.push(new drop());
	let compteurR = 0;
	sequencer.registerSequence({
		name : "pluie",
		start:10,
		steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		stop: 20,
		onStart : (event) => {
			console.log(event)
			new camera();
            console.log(position.camera);
			//faire pivoter la camera autour des blocs
			myDrops[compteurR].setDrawable(true);
			compteurR ++;
			
		},
		onStep : (event) => {
			console.log(event)
			myDrops[compteurR].push(new Drop());
			compteurR ++;
		},
		onStop : (event) => {
			console.log(event)
			myDrops[compteurR-1].setDrawable(false);
			myDrops.length = 0;
			compteurR = 0;
		},
		
	});
/*for (let ccp = 0; ccp < 10; ccp++) {
			myFeathers.push(new Feathers(60));  
		  }
		let featherCompteur = 0;*/

/*		sequencer.registerSequence({
			name : "feather",
			start: 20,
			stop: 30,
			onStart : (event) => {
				console.log(event)
				
				myFeathers[featherCompteur].setDrawable(true);
				for (let index = 0; index < myFeathers.length; index++) {
					myFeathers[index].display();
					
				}
				featherCompteur ++;
			},
			onStep : (event) => {
				console.log(event)
				
				myFeathers.push(new Feathers(60));
				myFeathers[featherCompteur].setDrawable(true);
				featherCompteur ++;
			},
			onStop : (event) => {
				console.log(event)

				
			},
			
		});*/
	/*sequencer.registerSequence({
		name : "feather",
		start: 20,
		stop: 30,
		onStart : (event) => {
			console.log(event)
			
		},
		onStep : (event) => {
			console.log(event)
			
		},
		onStop : (event) => {
			console.log(event)
			
		},
		
	});*/
	

/*sequencer.registerSequence({
			name : "background1",
			start: 9,
			stop: 16,
			onStart : (event) => {
				console.log(event)
				myBackgrounds.push(new Back('1'));
				myBackgrounds[0].setDrawable(true);
			},
			onStep : (event) => {
				console.log(event)
				
			},
			onStop : (event) => {
				console.log(event)
				myBackgrounds[0].setDrawable(false);
			},
			
		});*/

		
	
		/*diametreBC = 15;
		compteurBD = 0;
		sequencer.registerSequence({
			
			name : "oeil1",
			start : 9,
			steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
			stop : 16,
			onStart : (event) => {
				console.log(event)
				myBirdCircles.push(new BirdCircle(width*0.33, height*0.5, diametreBC, false));
				myBirdCircles[compteurBD].setDrawable(true);
				compteurBD ++;

			},
			onStep : (event) => {
				console.log(event)

				diametreBC = myBirdCircles[0].s = myBirdCircles[0].s + 0.25;
				myBirdCircles.push(new BirdCircle(width*0.33, height*0.5, diametreBC, false));
				myBirdCircles[compteurBD].setDrawable(true);
				compteurBD ++;
				//chaque step l'oeil grandit
			},
			onStop : (event) => {
				console.log(event)

				myBirdCircles[compteurBD-1].setDrawable(false);
				myBirdCircles.length = 1 
				pour qu'il reste l'image en fond
				myBirdCircles.length = 0;
				compteurBD = 0;
				diametreBC = 15;
			},	
		});*/
/*let compteurNoise = 0;
	myNoise.push(new Noise());

		sequencer.registerSequence({
			name : "noise",
			start: 20,
			step: [1,
				 	1 + 1/24,
					1 + 2/24, 
					1 + 3/24, 
					1 + 4/24, 
					1 + 5/24, 
					1 + 6/24, 
					1 + 7/24, 
					1 + 8/24, 
					1 + 9/24, 
					1 + 10/24, 
					1 + 11/24, 
					1 + 12/24, 
					1 + 13/24, 
					1 + 14/24, 
					1 + 15/24, 
					1 + 16/24, 
					1 + 17/24, 
					1 + 18/24, 
					1 + 19/24, 
					1 + 20/24, 
					1 + 21/24, 
					1 + 22/24, 
					1 + 23/24,
				],
			stop: 30,
			onStart : (event) => {
				console.log(event)
				myNoise[compteurNoise].setDrawable(true);
				compteurNoise ++;
			},
			onStep : (event) => {
				console.log(event)
				myNoise.push(new Noise());
				myNoise[compteurNoise - 1].setDrawable(false);
				myNoise[compteurNoise].setDrawable(true);
				compteurNoise ++;
			},
			onStop : (event) => {
				console.log(event)
				myNoise[compteurNoise - 1].setDrawable(false);
				myNoise.length = 0;
			},
			
		});

	for (let ccp = 0; ccp < 10; ccp++) {
		myFeathers.push(new Feathers(60));  
		}
	let featherCompteur = 0;

		sequencer.registerSequence({
			name : "feather",
			start: 30,
			stop: 40,
			onStart : (event) => {
				console.log(event)
				
				myFeathers[featherCompteur].setDrawable(true);
				for (let index = 0; index < myFeathers.length; index++) {
					myFeathers[index].display();
					
				}
				featherCompteur ++;
			},
			onStep : (event) => {
				console.log(event)
				
				myFeathers.push(new Feathers(60));
				myFeathers[featherCompteur].setDrawable(true);
				featherCompteur ++;
			},
			onStop : (event) => {
				console.log(event)

				
			},
			
		});*/
