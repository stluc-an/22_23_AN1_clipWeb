//si t'as des questions en plus envois moi un message 
//et si tu reprends les lignes pour les mettre dans un autres dossier oublis pas d'aller voir dans index.html et mets un majuscule à particule pour le Particule.js
let anim1;
let audioPath = "./assets/audio/sha.mp3";
let sequencer;
let bgColor = 0;
let pepe;
 


let mainCamera;
let particules = [];
let isCameraTurnAround = false;  //ca fait tourné pas hyper vite les formes

let isCameraStraight = false;  // j'ai pas utilisé elle mais enft si tu vas dans la function draw, l'emplacement avec le meme nom tu peux créer tes propres "camera" et donc choisir comment elles bougent
let isCameraTurnLeft = false;  //ca tourne hyper vite
let isCameraRight = false;     
let isCameraSpinAround = false; //ca pop genre ca fait comme des flashs
let isCameraBounceUpAndDown = false; 
let isCameraforward = false  


function preload(){
	//anim1 = new Anim("./image/G__CHIFFRE_.PNG", 19);
    
  pepe = loadModel('assets/pepe.obj', true);
  
}


function setup() {	
	colorMode(RGB);
     
    createCanvas(100, 100, WEBGL);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	mainCamera = createCamera();
  
	mainCamera.setPosition(0,0,800);
	mainCamera.lookAt(0,0,0);
	
	
   
	

	sequencer = new Sequencer(audioPath, 103);  //cherches le bpm de ton son et tu le mets à la place du 130
	
   // sequencer.registerSequence({
	//	name : "introduction",
	//	start : 1,
	//	onStart : (event) => {
	//		anim1.isPlaying = true;
//
	//	},
	//	stop : 10,
	//	onStop : () => {
	//		console.log("stop");
	//		anim1.isPlaying = false;
	//	},
	//	steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],	
	//	onStep : (event)=>{
	//		anim1.setCursor(event.amount);
	//	}	
//	});
    
    sequencer.registerSequence({
		name : "onTime",
		start : 1,
		stop : 10,
        steps : [
			1,
			1+1/8,
			1+2/8,
			1+3/8,
			1+4/8,
			1+5/8,
			1+6/8,
			1+7/8,
		],
		onStep : (event) => {
			bgColor = 255 - random(bgColor) * bgColor;
		},
        onStart : (event) => {
			console.log(event)
            camZ = 800
		},
        onStop : (event) => {
			console.log(event)
            camZ = 0;
		},
	});
    
	sequencer.registerSequence({
		name : "all",
		
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (random(0),0,0) ) ;
		},
		
		
	});
    
  sequencer.registerSequence({
		name : "onEighthTime",
		start : 10,
		stop : 20,
		steps : [
			1,
			1+1/8,
			1+2/8,
			1+3/8,
			1+4/8,
			1+5/8,
			1+6/8,
			1+7/8,
		],
		onStep : (event) => {
			bgColor = (event.amount * 255);
            speedcamZ = 0.1;
            
		}, 
		onStop : (event) => {
			console.log(event)
			camZ = 0
		},
      
      
	});
	
    
    sequencer.registerSequence({
		name : "34",
		start:34, 
		stop:34,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
        
        });
    
     sequencer.registerSequence({
		name : "onime",
		start : 34,
		stop : 430,
		onStep : (event) => {
			bgColor = 255 - ( bgColor);
		}
	});
    
    
    

         sequencer.registerSequence({
		name : "35",
		start:35, 
		stop:35,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
             });
    
            sequencer.registerSequence({
                 
		name : "36",
		start:36, 
		stop:36,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "37",
		start:37, 
		stop:37,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "38",
		start:38, 
		stop:38,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "39",
		start:39, 
		stop:39,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "40",
		start:40, 
		stop:40,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "41",
		start:41, 
		stop:41,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "42",
		start:42, 
		stop:42,
		onStart : (event) => {
			console.log(event)
			isCameraBounceUpAndDown = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraBounceUpAndDown = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "43",
		start:43, 
		stop:43,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "44",
		start:44, 
		stop:44,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
      sequencer.registerSequence({
                 
		name : "45",
		start:45, 
		stop:45,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "46",
		start:46, 
		stop:46,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "47",
		start:47, 
		stop:47,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "48",
		start:48, 
		stop:48,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "49",
		start:49.50, 
		stop:49.,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "50",
		start:50, 
		stop:50.50,
          
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
    
    

	sequencer.registerSequence({
		name : "first", //c'est important que tu changes à chaque fois de nom sinon ton sequencer il va pas savoir executer tes lignes de code
		start:34, //ici c'est quand la function commence
		stop:500,
        // et là quand elle se termine

		onStart : (event) => {
			console.log(event)
			isCameraTurnAround = true ;  //oublis pas de remettre le nom de la camera que t'utilses

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnAround = false;  //ici aussi
		},
		
	});
    
    sequencer.registerSequence({
		name : "refrain", //c'est important que tu changes à chaque fois de nom sinon ton sequencer il va pas savoir executer tes lignes de code
		start:51, //ici c'est quand la function commence
		stop:53, // et là quand elle se termine

		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;  //oublis pas de remettre le nom de la camera que t'utilses

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround= false;  //ici aussi
		},
		
	});

    
    sequencer.registerSequence({
		name : "53,5", //c'est important que tu changes à chaque fois de nom sinon ton sequencer il va pas savoir executer tes lignes de code
		start:53.50, //ici c'est quand la function commence
		stop:54, // et là quand elle se termine

		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;  //oublis pas de remettre le nom de la camera que t'utilses

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround= false;  //ici aussi
		},
		
	});
	// et apres c'est toujours la même chose sauf que tu changes de camera et de temps
	//je t'ai mis que 4 trucs mais c'est en exemple apres tu fais comme c'est le mieux pour ton clip, là t'as le rythme du mien

		sequencer.registerSequence({
		name : "deux",
		start:54, 
		stop:54,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});

			sequencer.registerSequence({
		name : "trois",
		start:55, 
		stop:55.50,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});
    
    
			sequencer.registerSequence({
		name : "teht",
		start:55.50, 
		stop:55.50,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});
    
    
    	sequencer.registerSequence({
		name : "56",
		start:56, 
		stop:56.50,
		onStart : (event) => {
			console.log(event)
			isCameraTurnRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnRight = false;
		},
		
	});
    
    sequencer.registerSequence({
		name : "57",
		start:57, 
		stop:57.50,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});
    
    
     sequencer.registerSequence({
		name : "58",
		start:58, 
		stop:58.50,
		onStart : (event) => {
			console.log(event)
			isCameraTurnRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnRight = false;
		},
		
	});
    
    
    sequencer.registerSequence({
		name : "59",
		start:59, 
		stop:59.50,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});
    
    
    sequencer.registerSequence({
		name : "60",
		start:60, 
		stop:60.50,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});
    
    
    sequencer.registerSequence({
		name : "61",
		start:61, 
		stop:61.50,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});
    
	

 sequencer.registerSequence({
		name : "62",
		start:62, 
		stop:62.50,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});
    
	
    
    sequencer.registerSequence({
		name : "62.5",
		start:62.5, 
		stop:62.750,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});
    
     sequencer.registerSequence({
		name : "62.75",
		start:62.75, 
		stop: 63,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});
    
	 sequencer.registerSequence({
		name : "63",
		start:63, 
		stop: 63,
		onStart : (event) => {
			console.log(event)
			isCameraTurnRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnRight = false;
		},
		
	});
    

     sequencer.registerSequence({
		name : "64-65",
		start:64, 
		stop: 65,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});
    
    
    sequencer.registerSequence({
		name : "65",
		start:65, 
		stop: 65,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});
    
    
     sequencer.registerSequence({
		name : "65.5",
		start:65.5, 
		stop: 66,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});
    
    
    sequencer.registerSequence({
		name : "66",
		start:66, 
		stop: 66,
		onStart : (event) => {
			console.log(event)
			isCameraTurnRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnRight = false;
		},
		
	});
    
     sequencer.registerSequence({
		name : "66",
		start:66, 
		stop: 66.5,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});
    
    
     
    sequencer.registerSequence({
		name : "66.5",
		start:66.5, 
		stop: 67,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});
    
    
      sequencer.registerSequence({
		name : "67",
		start:67, 
		stop: 68,
		onStart : (event) => {
			console.log(event)
			isCameraTurnRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnRight = false;
		},
		
	});
    
    sequencer.registerSequence({
		name : "69",
		start:68 ,
		stop:69,
		onStart : (event) => {
			console.log(event)
			isCameraTurnRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnRight = false;
		},
		
	});
    
     sequencer.registerSequence({
		name : "69k",
		start:69.5 ,
		stop:71,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (10,10,10) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
		
	});
    
    
    sequencer.registerSequence({
		name : "71",
		start:71.5 ,
		stop:72,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (100,100,100) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
		
	});
    
     sequencer.registerSequence({
		name : "onEighthTime",
		start : 100,
		stop : 125,
		steps : [
			1,
			1+1/8,
			1+2/8,
			1+3/8,
			1+4/8,
			1+5/8,
			1+6/8,
			1+7/8,
            1+8/8,
            1+9/8,
		],
		onStep : (event) => {
			bgColor = (event.amount / 255);
            
		}
	});
	
    
   
    
     sequencer.registerSequence({
		name : "73",
		start:73, 
		stop:74,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
        
        });
    
    
    
    

         sequencer.registerSequence({
		name : "75",
		start:75, 
		stop:76,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
             });
    
            sequencer.registerSequence({
                 
		name : "77",
		start:77, 
		stop:78,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "78",
		start:78, 
		stop:79,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "79",
		start:79, 
		stop:80,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "80",
		start:80, 
		stop:81,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "81",
		start:81, 
		stop:82,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "82",
		start:82, 
		stop:83,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "83",
		start:83, 
		stop:84,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "84",
		start:84, 
		stop:85,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "85",
		start:85, 
		stop:86,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "86",
		start:86, 
		stop:86,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "87",
		start:87, 
		stop:87,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "88",
		start:88, 
		stop:88,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "89",
		start:89, 
		stop:89,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
      sequencer.registerSequence({
                 
		name : "90",
		start:90, 
		stop:90,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "91",
		start:91, 
		stop:91,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "92",
		start:92, 
		stop:92,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "125",
		start:125, 
		stop:125,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
    sequencer.registerSequence({
                 
		name : "  126",
		start:125, 
		stop:125,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
    
    
      sequencer.registerSequence({
                 
		name : "127",
		start:127, 
		stop:127,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
    sequencer.registerSequence({
                 
		name : "128",
		start:128, 
		stop:128,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
   
    sequencer.registerSequence({
                 
		name : "129",
		start:129, 
		stop:129,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "130",
		start:130, 
		stop:130,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "131",
		start:131, 
		stop:131,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "132",
		start:132, 
		stop:132,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "133",
		start:133, 
		stop:133,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "134",
		start:134, 
		stop:134,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    sequencer.registerSequence({
                 
		name : "133",
		start:133, 
		stop:133,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "134",
		start:134, 
		stop:150,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "136",
		start:136, 
		stop:136,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
    sequencer.registerSequence({
                 
		name : "137",
		start:137, 
		stop:137,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "136",
		start:136, 
		stop:136,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "138",
		start:138, 
		stop:138,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ; 

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "139",
		start:139, 
		stop:139,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "140",
		start:140, 
		stop:140,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ; 

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "141",
		start:141, 
		stop:141,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "142",
		start:142, 
		stop:142,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ; 

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "143",
		start:143, 
		stop:143,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "144",
		start:144, 
		stop:144,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "145",
		start:145, 
		stop:145,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "146",
		start:146, 
		stop:146,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "147",
		start:147, 
		stop:147,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
      sequencer.registerSequence({
                 
		name : "148",
		start:148, 
		stop:148,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "149",
		start:149, 
		stop:149,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
    sequencer.registerSequence({
                 
		name : "150",
		start:150, 
		stop:150,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "182",
		start:182, 
		stop:185,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "185",
		start:185, 
		stop:188,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "188",
		start:188, 
		stop:191,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "191",
		start:191, 
		stop:194,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "194",
		start:194, 
		stop:197,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "197",
		start:197, 
		stop:200,
		onStart : (event) => {
			console.log(event)
			isCameraTurnLeft = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraTurnLeft = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "200",
		start:200, 
		stop:210,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "210",
		start:210, 
		stop:215,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
    
     sequencer.registerSequence({
                 
		name : "240",
		start:240, 
		stop:240,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "241",
		start:241, 
		stop:241,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "240",
		start:240, 
		stop:240,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "242",
		start:242, 
		stop:242,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "243",
		start:243, 
		stop:243,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
      sequencer.registerSequence({
                 
		name : "244",
		start:244, 
		stop:244,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
    sequencer.registerSequence({
                 
		name : "245",
		start:245, 
		stop:245,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "246",
		start:246, 
		stop:246,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "247",
		start:247, 
		stop:247,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "248",
		start:248, 
		stop:248,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
    sequencer.registerSequence({
                 
		name : "249",
		start:249, 
		stop:249,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "250",
		start:250, 
		stop:250,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    sequencer.registerSequence({
                 
		name : "251",
		start:251, 
		stop:251,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
    sequencer.registerSequence({
                 
		name : "252",
		start:252, 
		stop:252,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
    sequencer.registerSequence({
                 
		name : "253",
		start:253, 
		stop:253,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "254",
		start:254, 
		stop:254,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
     sequencer.registerSequence({
                 
		name : "255",
		start:255, 
		stop:255,
		onStart : (event) => {
			console.log(event)
			isCameraRight = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraRight = false;
		},
                });
    
     sequencer.registerSequence({
                 
		name : "256",
		start:256, 
		stop:256,
		onStart : (event) => {
			console.log(event)
			isCameraSpinAround = true ;

		},
		onStep : (event) => {
			console.log(event)
			particules.push( new Particule (0,0,0) ) ;
		},
		onStop : (event) => {
			console.log(event)
			isCameraSpinAround = false;
		},
                });
    
    
	}




//let camZ = 0;
//let speedcamZ = 0;
// attention si t'as eu des messages d'erreurs c'est peut etre parce que t'avais oublié de fermer des parentheses


function draw(){
    mainCamera.setPosition(0,0,800);
	mainCamera.lookAt(0,0,0);
    
   // camZ+= speedcamZ;
    sequencer.update();
    background(0, bgColor, 100); // ici ca rejoint le "let blabla" de en haut. en gros c'est ici que tu définis les camera
 	// je suis sûr à 100% que celles là elles fonctionnent mais tu peux en créer d'autres si tu veux
    rotate(PI / 1);;
    normalMaterial(random); // For effect
    model(pepe);
    
    
        
    if(isCameraTurnAround){
	let R = 800;
	let x = R * cos(millis()/1000);
	let z = R * sin(millis()/1000);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}

		sequencer.update();
 if(isCameraStraight){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		
			sequencer.update();
 if(isCameraTurnLeft){
	let R = 800;
	let x = R * cos(millis()/100);
	let z = R * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(5, 0, 5);
	}
	
			sequencer.update();
 if(isCameraRight){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		
			sequencer.update();
 if(isCameraSpinAround){
	let R = 800;
	let x = tan(millis()/100);
	let z = tan(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}

	 if(isCameraBounceUpAndDown){
	let R = 800;
	let x = R/4 * cos(millis()/100);
	let z = R/4 * sin(millis()/100);
	mainCamera.setPosition(x,0,z)
	mainCamera.lookAt(0, 0, 0);
	}
		

	particules.forEach( (Particule)=> {
		Particule.draw();
	} );
  	
}

   


    





function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}




class Anim{
    constructor(seqName, count){
        this.imgsPath = seqName;
        this.imgs =[];
        this.cursor = 0;
        this.isPlaying = false;

        for(let i = 1 ; i <= count ; i++){
            let realPath = this.imgsPath.replace("_NUMBER_", i );
            let tempImg = loadImage(realPath);
            this.imgs.push(tempImg);
        }
    }
    draw(){
        if(this.isPlaying == true){
            let i = floor(this.cursor);
            image(this.imgs[i], 0, 0, width, height);
        }
    }
    setCursor(amount){
        amount = min(1, max(0, amount));
        this.cursor = lerp( 0, this.imgs.length -1, amount)
    }
}