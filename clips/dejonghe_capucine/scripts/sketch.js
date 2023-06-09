/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2023-04-03 20:46:34
\*----------------------------------------*/
let audioPath = "./assets/audio/y2mate.com - 05  Tryphème  Wireless Tattoo DHR40.mp3";
let sequencer;
//lazer 1
let NombreFlash = 0;
let isFlashDrawable = false;
//lazer qui reste 1
let BackgroundIntro4 = 'rgba(100%,0%,100%,0.5)'; //rose 
let NombreFlash1 = 0;
let MaxNombreFlash = 1000;
let isFlashDrawable1 = false;
//Carres1
let isCarreDrawable1 = false;
let Ll = 120; // Longueur et largeur du carré
let x1c, y1c, x2c, y2c, x3c, y3c;
let xvitesse1 = 3.2;
let yvitesse1 = 2.8;
let xvitesse2 = 2.0;
let yvitesse2 = 1.5;
let xvitesse3 = 2.4;
let yvitesse3 = 2.2;
let xinverse1 = 1;
let yinverse1 = 1;
let xinverse2 = 1;
let yinverse2 = 1;
let xinverse3 = 1;
let yinverse3 = 1;
//lazer 2
let NombreFlash2 = 0;
let isFlashDrawable2 = false;

//lazer qui reste 2
//let BackgroundIntro4 = 'rgba(100%,0%,100%,0.5)'; //rose 
let NombreFlash3 = 0;
let isFlashDrawable3 = false;
//Lazer qui reste 3
let NombreFlash4 = 0;
let isFlashDrawable4 = false;

let mesAnims = [];

function preload(){
	/*
		charge les images dans un tableau de 0 à ...
	*/
	mesAnims.push(
		new Animator({
			imgPatternAddress : "./assets/images/frame[IMG_NUM].png",
			imgCount : 114,
			firstImageNum : 1,
			numberLength : 4
		}),
		new Animator({
			imgPatternAddress : "./assets/image2/frame[IMG_NUM].png",
			imgCount : 129,
			firstImageNum : 1,
			numberLength : 4
		}),
		new Animator({
			imgPatternAddress : "./assets/image8/frame[IMG_NUM].png",
			imgCount : 15,
			firstImageNum : 1,
			numberLength : 4
		}),
		new Animator({
			imgPatternAddress : "./assets/image3/frame[IMG_NUM].png",
			imgCount : 68,
			firstImageNum : 1,
			numberLength : 4
		}),
		new Animator({
			imgPatternAddress : "./assets/image4/frame[IMG_NUM].png",
			imgCount : 40,
			firstImageNum : 1,
			numberLength : 4
		}),
		new Animator({
			imgPatternAddress : "./assets/image5/frame[IMG_NUM].png",
			imgCount : 20,
			firstImageNum : 1,
			numberLength : 4
		}),
		new Animator({
			imgPatternAddress : "./assets/image6/frame[IMG_NUM].png",
			imgCount : 34,
			firstImageNum : 1,
			numberLength : 4
		}),
		new Animator({
			imgPatternAddress : "./assets/image7/frame[IMG_NUM].png",
			imgCount : 57,
			firstImageNum : 1,
			numberLength : 4
		}),

			
	);
}

function setup() {	
	createCanvas(window.innerWidth, window.innerHeight);
	//background(BackgroundIntro4);
	sequencer = new Sequencer(audioPath, 300, false);

	//séquence1//
	sequencer.registerSequence({
		name : "intro",
		start : 1,
		stop : 114,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
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
		name : "intro2",
		start : 115,
		stop : 244,
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
	//séquence3// - petits poids
	sequencer.registerSequence({
		name : "intro3",
		start : 245,
		stop : 261,
		onStart : (event) => {
			mesAnims[2].setDrawable(true);
		},
		onStep : (event) => {
		
			mesAnims[2].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[2].setDrawable(false);
		},
});
    //séquence4 - lazer 1
     sequencer.registerSequence({
	    name : "intro4",
	    start : 262,
	    stop : 287,
	    onStart : (event) => {
			isFlashDrawable = true;
		
	    },
	    onStep : (event) => {
							
	    },
	    onStop : (event) => {
			isFlashDrawable = false;
	    },
});

	//séquence5 - Lazer qui reste 1
	sequencer.registerSequence({
	    name : "intro5",
	    start : 288,
	    stop : 370,
	    onStart : (event) => {
			isFlashDrawable1 = true;
			background(BackgroundIntro4); //rose
					
	    },
	    onStep : (event) => {
							
	    },
	    onStop : (event) => {
			isFlashDrawable1 = false;
	    },
});
	//séquence6 - fleurs noir
	sequencer.registerSequence({
		name : "intro6",
		start : 371,
		stop : 439,
		onStart : (event) => {
			mesAnims[3].setDrawable(true);
		},
		onStep : (event) => {
			
			mesAnims[3].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[3].setDrawable(false);
		},
	});
	//séquence7 - carrés
	sequencer.registerSequence({
		name : "intro7",
		start : 440,
		stop : 501,
		onStart : (event) => {
			isCarreDrawable1 = true;
			createCanvas(window.innerWidth, window.innerHeight);
			background(0);
			noStroke();
			x1c = width / 5;
			y1c = height / 5;
			x2c = width / 4;
			y2c = height / 4;
			x3c = width / 2;
			y3c = height / 2;

		},
		onStep : (event) => {
		
		},
		onStop : (event) => {
			isCarreDrawable1 = false;
		},
	});

		//séquence8 - lazer 2
		sequencer.registerSequence({
			name : "intro8",
			start : 502,
			stop : 527,
			onStart : (event) => {
				isFlashDrawable2 = true;
			
			},
			onStep : (event) => {
								
			},
			onStop : (event) => {
				isFlashDrawable2 = false;
			},
	});

		//séquence9 - Lazer qui reste 2
		sequencer.registerSequence({
			name : "intro9",
			start : 528,
			stop : 600,
			onStart : (event) => {
				isFlashDrawable3 = true;
				background(0);
						
			},
			onStep : (event) => {
								
			},
			onStop : (event) => {
				isFlashDrawable3 = false;
			},
	});

		//séquence10 - Traits qui traversent
	sequencer.registerSequence({
		name : "intro10",
		start : 600,
		stop : 640,
		onStart : (event) => {
			mesAnims[4].setDrawable(true);
		},
		onStep : (event) => {
			
			mesAnims[4].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[4].setDrawable(false);
		},
	});
	
	//séquence11 - pousse
	sequencer.registerSequence({
		name : "intro11",
		start : 641,
		stop : 661,
		onStart : (event) => {
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[5].setDrawable(false);
		},
	});

		//séquence12 - Lazer qui reste 3
		sequencer.registerSequence({
			name : "intro12",
			start : 662,
			stop : 700,
			onStart : (event) => {
				isFlashDrawable4 = true;
				background(255);
						
			},
			onStep : (event) => {
								
			},
			onStop : (event) => {
				isFlashDrawable4 = false;
			},
	});

		//séquence13 - pousse 2
		sequencer.registerSequence({
			name : "intro13",
			start : 700,
			stop : 734,
			onStart : (event) => {
				mesAnims[6].setDrawable(true);
			},
			onStep : (event) => {
				
				mesAnims[6].setCursor(event.amount);
			},
			onStop : (event) => {
				mesAnims[6].setDrawable(false);
			},
		});

			//séquence14 - eclair fin
			sequencer.registerSequence({
				name : "intro14",
				start : 735,
				stop : 792,
				onStart : (event) => {
					mesAnims[7].setDrawable(true);
				},
				onStep : (event) => {
					
					mesAnims[7].setCursor(event.amount);
				},
				onStop : (event) => {
					mesAnims[7].setDrawable(false);
				},
			});

}


function draw(){

    sequencer.update();
	
	//if (isFlashDrawable1 !== true || isFlashDrawable3 !== true) {
  //if (isFlashDrawable1 == false || isFlashDrawable3 == false) {
  //		background(0);
  //} else {

 //	}

  	for(let anim of mesAnims){
		if(anim.isDrawable()){
			anim.draw();		
		  }
		 }

	//lazer 1
	if (isFlashDrawable == true) {
	  if (NombreFlash < MaxNombreFlash) {
		//alert(NombreFlash);

		x1 = width / 2;
		x2 = width;
		y1 = height / 2;
		y2 = height;
	
		TableauSigneX = ['+' , '-'];
		HasardX = Math.floor(Math.random()*TableauSigneX.length);
		SigneX = TableauSigneX[HasardX];
	
		TableauSigneY = ['+' , '-'];
		HasardY = Math.floor(Math.random()*TableauSigneY.length);
		SigneY = TableauSigneY[HasardY];
	  
		x2 = eval("x2" + SigneX + "Math.floor(Math.random() * 1000000)");
		y2 = eval("y2" + SigneY + "Math.floor(Math.random() * 1000000)");
		
		background("#efefef");
		
		line(x1, y1, x2, y2);
		NombreFlash = NombreFlash + 1;
		//alert(NombreFlash);
	  } 
	}

	// Lazer qui reste 1
	if (isFlashDrawable1 == true) {

		if (NombreFlash1 < 1000) {
			//alert(isFlashDrawable1);
			
			x1 = width / 2;
			x2 = width;
			y1 = height / 2;
			y2 = height;
		
			TableauSigneX = ['+' , '-'];
			HasardX = Math.floor(Math.random()*TableauSigneX.length);
			SigneX = TableauSigneX[HasardX];
		
			TableauSigneY = ['+' , '-'];
			HasardY = Math.floor(Math.random()*TableauSigneY.length);
			SigneY = TableauSigneY[HasardY];
		  
			x2 = eval("x2" + SigneX + "Math.floor(Math.random() * 1000000)");
			y2 = eval("y2" + SigneY + "Math.floor(Math.random() * 1000000)");
			
			line(x1, y1, x2, y2);
			stroke(0);
			NombreFlash1 = NombreFlash1 + 1;
		  } 
	}

		//Carres 1 
	if (isCarreDrawable1 == true) {
		background(0);
		x1c = x1c + xvitesse1 * xinverse1;
		y1c = y1c + yvitesse1 * yinverse1;
	  
		x2c = x2c + xvitesse2 * xinverse2;
		y2c = y2c + yvitesse2 * yinverse2;
	  
		x3c = x3c + xvitesse3 * xinverse3;
		y3c = y3c + yvitesse3 * yinverse3;
	  
		if (x1c > width - Ll || x1c < Ll) {
		  xinverse1 = xinverse1 * (-1);      //inverse la coordonnée x
		}
		if (y1c > height - Ll || y1c < Ll) {
		  yinverse1 = yinverse1 * (-1);      //inverse la coordonnée y
		}
	  
		if (x2c > width - Ll || x2c < Ll) {
		  xinverse2 = xinverse2 * (-1);
		}
		if (y2c > height - Ll || y2c < Ll) {
		  yinverse2 = yinverse2 * (-1);
		}
	  
		if (x3c > width - Ll || x3c < Ll) {
		  xinverse3 = xinverse3 * (-1);
		}
		if (y3c > height - Ll || y3c < Ll) {
		  yinverse3 = yinverse3 * (-1);
		}
	  
	  
		fill(255);
		rect(x1c, y1c, Ll, Ll);
		fill(255);
		rect(x2c, y2c, Ll, Ll);
		fill(255);
		rect(x3c, y3c, Ll, Ll);

	}

		//lazer 2
	if (isFlashDrawable2 == true) {
		if (NombreFlash2 < MaxNombreFlash) {
		  
		  x1Laz = width / 2;
		  x2Laz = width;
		  y1Laz = height / 2;
		  y2Laz = height;
	  
		  TableauSigneX = ['+' , '-'];
		  HasardX = Math.floor(Math.random()*TableauSigneX.length);
		  SigneX = TableauSigneX[HasardX];
	  
		  TableauSigneY = ['+' , '-'];
		  HasardY = Math.floor(Math.random()*TableauSigneY.length);
		  SigneY = TableauSigneY[HasardY];
		
		  x2Laz = eval("x2Laz" + SigneX + "Math.floor(Math.random() * 1000000)");
		  y2Laz = eval("y2Laz" + SigneY + "Math.floor(Math.random() * 1000000)");
		  
		  background("#efefef");
		  
		  line(x1Laz, y1Laz, x2Laz, y2Laz);
		  stroke(0);
		  NombreFlash2 = NombreFlash2 + 1;
		  
		} 
	  }

	  	// Lazer qui reste 2
	if (isFlashDrawable3 == true) {

		if (NombreFlash3 < 1000) {
			//alert(isFlashDrawable1);
			
			x1 = width / 2;
			x2 = width;
			y1 = height / 2;
			y2 = height;
		
			TableauSigneX = ['+' , '-'];
			HasardX = Math.floor(Math.random()*TableauSigneX.length);
			SigneX = TableauSigneX[HasardX];
		
			TableauSigneY = ['+' , '-'];
			HasardY = Math.floor(Math.random()*TableauSigneY.length);
			SigneY = TableauSigneY[HasardY];
		  
			x2 = eval("x2" + SigneX + "Math.floor(Math.random() * 1000000)");
			y2 = eval("y2" + SigneY + "Math.floor(Math.random() * 1000000)");
			
			line(x1, y1, x2, y2);
			stroke(255);
			NombreFlash3 = NombreFlash3 + 1;
		  } 
	}

		// Lazer qui reste 3
	if (isFlashDrawable4 == true) {

		if (NombreFlash4 < 1000) {
			//alert(isFlashDrawable1);
			
			x1 = width / 2;
			x2 = width;
			y1 = height / 2;
			y2 = height;
		
			TableauSigneX = ['+' , '-'];
			HasardX = Math.floor(Math.random()*TableauSigneX.length);
			SigneX = TableauSigneX[HasardX];
		
			TableauSigneY = ['+' , '-'];
			HasardY = Math.floor(Math.random()*TableauSigneY.length);
			SigneY = TableauSigneY[HasardY];
		  
			x2 = eval("x2" + SigneX + "Math.floor(Math.random() * 1000000)");
			y2 = eval("y2" + SigneY + "Math.floor(Math.random() * 1000000)");
			
			line(x1, y1, x2, y2);
			stroke(0);
			NombreFlash4 = NombreFlash4 + 1;
		  } 
	}
  }

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

