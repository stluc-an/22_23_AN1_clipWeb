/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:43:32
\*----------------------------------------*/
let BPM = 132;

let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;

function setup() {
	
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, BPM);
	

	sequencer.registerSequence({
		name : "each",				// nom de la sequence ( requis & unique )
		onStart : (event) => {// action de début de sequence ( default : ()=>{} )
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)  // action pour chaque step ( default : ()=>{} )
		},
		onStop : (event) => { // action de fin de sequence ( default : ()=>{} )
			console.log(event)
		}
	});

	sequencer.registerSequence({
		name : "oneOnTwo", 		
		measure : 4,					// longueur de la mesure ( default :  1 ) 
		steps : [2, 4],				// selectionner les step dans la mesure qui déclenchent onStep ( default : [1] )
		onStep : (event) => { // action pour chaque step ( default : ()=>{} )
			console.log(event)
		}
	});

	sequencer.registerSequence({
		name : "each.subStep",
		start : 10,						// numéro du step de début de sequence ( default : 1 )
		stop : 11,						// numéro du step de fin de sequence ( default : 1000 )
		steps : [
			1+ 0/24, 1+ 1/24, 1+ 2/24, 1+ 3/24, 1+ 4/24, 1+ 5/24, // marquer le pas tous les sous-temps correspondant
			1+ 6/24, 1+ 7/24, 1+ 8/24, 1+ 9/24, 1+10/24, 1+11/24, // chaque temps peut être sous diviser par les diviseur de 24
			1+12/24, 1+13/24, 1+14/24, 1+15/24, 1+16/24, 1+17/24, // 1, 2, 3, 4, 6, 8, 12, 24 
			1+18/24, 1+19/24, 1+20/24, 1+21/24, 1+22/24, 1+23/24,
		],	
		onStep : (event) => {
			console.log(event)
		}
	});
}

function draw(){
	sequencer.update();
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

