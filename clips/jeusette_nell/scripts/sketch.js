/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2023-04-03 20:46:34
\*----------------------------------------*/
let audioPath = "./assets/audio/Lovely Song.mp3";
let sequencer;

let moulistar;
let amoulistar;
let aamoulistar;
let degwade;
let mainCamera;

let twoMoulistar;
let threeMoulistar;
let moulicolor;
let moulicolor2;
let formoulistar;
let fivemoulistar;
let sixmoulistar;
let sevenmoulistar;


//let mesAnims = [];

function preload(){
	
	/*
		Un Object est comme un Array, 
		Dans un Array les cases sont nommées par des chiffres à partir de 0
		Dans un Object les cases sont sont nommé par nous même au moyen de nom.
		Toute fonction peut recevoir comme parametre un objet.
		Cela nous permet de ne pas confondre les différents paramètres entre eux,
		lorsque nous souhaitons envoyer plusieurs valeurs à une function. 
	*/
	//mesAnims.push(
	//	new Animator({
		//	imgPatternAddress : "./assets/rsize/image[IMG_NUM].jpg",
		//	imgCount : 50,
			//firstImageNum : 0,
			//numberLength : 4
	//	})
	//);
}

function setup() {	
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);

	mainCamera = createCamera();
	mainCamera.setPosition(0, 0, -100);

	frameRate(60);

	

	sequencer = new Sequencer(audioPath, 80);//beat



	sequencer.registerSequence({
		name : "verdeterre",
		start :2 ,// a quelle frame / beat ça s'arrête
		stop : 36,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			moulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			moulistar = false
		},
	});

	sequencer.registerSequence({
		name : "verdeterrenumbertwo",
		start :10 ,// a quelle frame / beat ça s'arrête
		stop : 36,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			twoMoulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			twoMoulistar = false
		},
	});
	sequencer.registerSequence({
		name : "verdeterrebck",
		start :58 ,// a quelle frame / beat ça s'arrête
		stop : 79,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			moulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			moulistar = false
		},
	});

	sequencer.registerSequence({
		name : "verdeterrenumbertwobck",
		start :58,// a quelle frame / beat ça s'arrête
		stop : 79,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			twoMoulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			twoMoulistar = false
		},
	});
	sequencer.registerSequence({
		name : "verdeterrenumberthree",
		start :58 ,// a quelle frame / beat ça s'arrête
		stop : 100,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			threeMoulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			threeMoulistar = false
		},
	});

	sequencer.registerSequence({
		name : "verdeterrenumberthree2",
		start :89 ,// a quelle frame / beat ça s'arrête
		stop : 100,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			formoulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			formoulistar = false
		},
	});
	sequencer.registerSequence({
		name : "verdeterrenumberthree5",
		start :111,// a quelle frame / beat ça s'arrête
		stop : 128,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			fivemoulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			fivemoulistar = false
		},
	});

	sequencer.registerSequence({
		name : "verdeterrenumberthree4",
		start :111 ,// a quelle frame / beat ça s'arrête
		stop : 128,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			sixmoulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			sixmoulistar = false
		},
	});

	sequencer.registerSequence({
		name : "verdeterrenumberthree7",
		start :111 ,// a quelle frame / beat ça s'arrête
		stop : 158,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			sevenmoulistar = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			sevenmoulistar = false
		},
	});

	

	sequencer.registerSequence({
		name : "verdeterremulticolor",
		start :37,// a quelle frame / beat ça s'arrête
		stop : 57,
		// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			moulicolor = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			moulicolor = false
		},
	});

	sequencer.registerSequence({
		name : "verdeterremulticolor2",
		start :101,// a quelle frame / beat ça s'arrête
		stop : 110,
		// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			moulicolor2 = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			moulicolor2 = false
		},
	});


	sequencer.registerSequence({
		name : "degradé",
		start :1 ,// a quelle frame / beat ça s'arrête
		stop : 158,// a quelle frame/ beat ça s'arrete
		//steps : [1, 2+1/2],//augmenter 
		onStart : (event) => {
			
			console.log(event);
			//mesAnims[0].setDrawable(true);
			degwade = true;

		},
		onStep : (event) => {
		console.log(event);
		//	mesAnims[0].setCursor(event.amount);
			
		},
		onStop : (event) => {

			console.log(event);
			//mesAnims[0].setDrawable(false);
			degwade= false
		},
	});

}

function draw(){

	sequencer.update();
	
	background(255);


	let R = 1000;
	let x = R * cos(millis()/1000);
	let z = R * sin(millis()/1000);
	mainCamera.setPosition(x,0,z);

	mainCamera.lookAt(0,0,0);



	//noStroke();
	//sphere(25);
	//texture (img);
	
	push();	
	translate(0, -height/2, -300);
	fill(255,255,0);
	stroke(0,255,0);

	if (moulistar){
		let counter=0;
		while (counter<100){
			mouliStar (
				noise(0, millis()*0.001,counter*0.01)*width,
				noise(1, millis()*0.002,counter*0.01)*height,
				25,25);
			counter++;
		}
  	}
	
	stroke(0,255,255);

	if (twoMoulistar){
	let counter=0;
	while (counter<100){
		twoMouliStar (
			noise(10, millis()*0.001,counter*0.01)*width,
			noise(15, millis()*0.002,counter*0.01)*height,
			25,25);
		counter++;
	}
	}

	
	
	
	stroke(0,255,0);

	if (amoulistar){
		let counter=0;
		while (counter<100){
			amouliStar (
				noise(0, millis()*0.0001,counter*0.001)*width,
				noise(1, millis()*0.0002,counter*0.001)*height,
				25,25);
			counter++;
		}
  	}
	
	stroke(0,255,255);

	if (aamoulistar){
	let counter=0;
	while (counter<100){
		aamouliStar (
			noise(5, millis()*0.0001,counter*0.001)*width,
			noise(6, millis()*0.0002,counter*0.001)*height,
			25,25);
		counter++;
	}
	}
	stroke(223, 255, 0);
	if (threeMoulistar){
		let counter=0;
		while (counter<100){
			threeMouliStar (
				noise(7, millis()*0.001,counter*0.01)*width,
				noise(8, millis()*0.002,counter*0.01)*height,
				25,25);
			counter++;
		}
		}

		stroke(255,0 ,0);
	if (formoulistar){
		let counter=0;
		while (counter<100){
			forMouliStar (
				noise(9, millis()*0.001,counter*0.01)*width,
				noise(10, millis()*0.002,counter*0.01)*height,
				25,25);
			counter++;
		}
		}

		stroke(223,255 ,0);
	if (fivemoulistar){
		let counter=0;
		while (counter<100){
			fiveMouliStar (
				noise(9, millis()*0.001,counter*0.01)*width,
				noise(10, millis()*0.002,counter*0.01)*height,
				25,25);
			counter++;
		}
		}

		stroke(255,0 ,0);
	if (sixmoulistar){
		let counter=0;
		while (counter<100){
			sixMouliStar (
				noise(10, millis()*0.001,counter*0.01)*width,
				noise(11, millis()*0.002,counter*0.01)*height,
				25,25);
			counter++;
		}
		}

		stroke(0,0 ,255);
	if (sevenmoulistar){
		let counter=0;
		while (counter<100){
			sevenMouliStar (
				noise(12, millis()*0.001,counter*0.01)*width,
				noise(13, millis()*0.002,counter*0.01)*height,
				25,25);
			counter++;
		}
		}



		stroke(random(255),random (255),random(255));
		if (moulicolor){
			let counter=0;
			while (counter<100){
				mouliColor (
					noise(20, millis()*0.001,counter*0.01)*width,
					noise(30, millis()*0.002,counter*0.01)*height,
					25,25);
				counter++;
			}
			}

			stroke(random(255),random (255),random(255));
		if (moulicolor2){
			let counter=0;
			while (counter<100){
				mouliColor2 (
					noise(20, millis()*0.001,counter*0.01)*width,
					noise(30, millis()*0.002,counter*0.01)*height,
					25,25);
				counter++;
			}
			}
	
	pop();


	if (degwade){

	directionalLight(121, 28, 248,
		noise(1, frameCount * 0.001) * 2 - 1, 
		noise(2, frameCount * 0.001) * 2 - 1, 
		noise(3, frameCount * 0.001) * 2 - 1);


	directionalLight(248, 121, 28, 
		noise(4, frameCount * 0.001) * 2 - 1, 
		noise(5, frameCount * 0.001) * 2 - 1, 
		noise(6, frameCount * 0.001) * 2 - 1);


	directionalLight(28, 248, 121, 
		noise(13, frameCount * 0.001) * 2 - 1, 
		noise(14, frameCount * 0.001) * 2 - 1, 
		noise(15, frameCount * 0.001) * 2 - 1);

		noStroke(0);
		specularMaterial(255);	
		sphere(1000);

		
}

	


	//for(let anim of mesAnims){
	//	if(anim.isDrawable()){
			//anim.draw();		
	//	}
//	}


}

function mouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%7==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }

  function twoMouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }

  function amouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%7==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }

  function aamouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }

  function threeMouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }

  function forMouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }
 
  function fiveMouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }

  function sixMouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }
 
  function sevenMouliStar (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }
 
 
  function mouliColor (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }

  function mouliColor2 (x,y,w,h){
	push ();
	translate(x,y);
	if(frameCount%2==0){
	  line (-w/2,0,w/2,0);
	}else{
	  line(0,-h/2,0,h/2);
	}
	pop ();
  
  }
 
  
function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

