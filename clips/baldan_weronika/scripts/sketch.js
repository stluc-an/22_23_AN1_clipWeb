let audioPath = "./assets/audio/Devin Townsend/The Way Home/thewayhome.mp3";
let sequencer;

let bgColor;
let isRectDrawable = false;
let isTourniquetDrawable = false;
let isRectTourniquetDrawable = false;

let rectColor;
let jaune;
let vert;

let circle_hole;
let circle_holeCopy;
let circle_hole2;
let circle_hole3;
let circle_hole4;
let circle_hole5;
let circle_hole6;

let circle_hole7;
let circle_hole8;
let circle_hole9;

let mesAnims =[];
let persoAnims = []; 
let yeuxAnims = [];
let showAnims = [];
let watchAnims = [];
let visageAnims = [];
let yeux2Anims = [];
let newyAnims = [];
let noirAnims = [];
let yeux3Anims = [];
let mesAnims2 = [];
let calinouAnims = [];

function preload(){
	mesAnims.push(
		new Animator({
			imgPatternAddress : "./assets/Bonhomme/Layer_[IMG_NUM].png",
			imgCount : 30,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	mesAnims2.push(
		new Animator({
			imgPatternAddress : "./assets/Bonhomme2/Layer_[IMG_NUM].png",
			imgCount : 29,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	persoAnims.push(
		new Animator({
			imgPatternAddress : "./assets/lespersos/Layer_[IMG_NUM].png",
			imgCount : 38,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	yeuxAnims.push(
		new Animator({
			imgPatternAddress : "./assets/yeux/Layer_[IMG_NUM].png",
			imgCount : 36,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	showAnims.push(
		new Animator({
			imgPatternAddress : "./assets/show/Layer_[IMG_NUM].png",
			imgCount : 68,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	watchAnims.push(
		new Animator({
			imgPatternAddress : "./assets/Watching/Layer_[IMG_NUM].png",
			imgCount : 52,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	visageAnims.push(
		new Animator({
			imgPatternAddress : "./assets/visage/Layer_[IMG_NUM].png",
			imgCount : 30,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	yeux2Anims.push(
		new Animator({
			imgPatternAddress : "./assets/yeux2/Layer_[IMG_NUM].png",
			imgCount : 68,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	newyAnims.push(
		new Animator({
			imgPatternAddress : "./assets/newy/Layer_[IMG_NUM].png",
			imgCount : 93,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);


	noirAnims.push(
		new Animator({
			imgPatternAddress : "./assets/noir/Layer_[IMG_NUM].png",
			imgCount : 18,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	yeux3Anims.push(
		new Animator({
			imgPatternAddress : "./assets/yeux3/Layer_[IMG_NUM].png",
			imgCount : 36,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);

	calinouAnims.push(
		new Animator({
			imgPatternAddress : "./assets/calinou/Layer_[IMG_NUM].png",
			imgCount : 92,
			firstImageNum : 0,
			numberLength : 4,
			x : 123,
			y : 321,
			w : 56,
			h : 431,
		})
	);


}


function setup() {	
	colorMode(RGB);
	rectMode(CENTER);
		rougeF = color(65, 10, 20);
		grisF = color(109, 98, 92);
	
		bgColor = color(37, 37, 39);
		rectColor = grisF;

	
		frameRate(60);
		createCanvas(windowWidth, windowHeight);

	circle_hole  = new CircleHole(color(255, 0, 0), width/2 , height/2, 20, 60);
	circle_holeCopy= new CircleHole();
	circle_hole2 = new CircleHole(color(255, 0, 0), width/2 , height/2, 5, 200);
	circle_hole3 = new CircleHole(color(255, 0, 0), width/2, height/2, 10, 400);
	circle_hole4 = new CircleHole(color(255, 0, 0), width/2, height/2, 10, 600);
	circle_hole5 = new CircleHole(color(255, 0, 0), width/2, height/2, 10, 600);
	circle_hole6 = new CircleHole(color(123, 34, 78), 100, 300);

	circle_hole7 = new CircleHole(color(255, 0, 0), width/2, height/2, 5, 60, 0.01);
	circle_hole8 = new CircleHole(color(255, 0, 0), width/2, height/2, 40, 200, 0.01);
	circle_hole9 = new CircleHole(color(255, 0, 0), width/2, height/2, 60, 400, 0.01);



	sequencer = new Sequencer(audioPath, 140);
	
	sequencer.registerSequence({
		name: "all",
		start: 3,
		stop: 9,

		onStart: (event) => {
			console.log(event);
			isRectDrawable = true;
		},
		onStep: (event) => {
			console.log(event);
			if(rectColor == grisF) { // Si rectColor est gris foncé, il devient rouge foncé, et s'il est Rouge Foncé, il devient gris foncé
				rectColor = rougeF;
			} else if(rectColor == rougeF) {
				rectColor = grisF;
			}
		},
		onStop: (event) => {
			console.log(event);
			isRectDrawable = false;
		},	
	});

		

	sequencer.registerSequence({
		name: "3Cercles",
		start: 7,
		stop: 28,
		onStart: (event) => {
			console.log(event);
			isTourniquetDrawable = true;
		},


		onStep: (event) => {

			if(event.step == 13){
				bgColor = color(10);
				circle_hole.color = color(237, 11, 14);
				circle_hole.setDrawable(true);

				circle_hole2.color = color(237, 11, 14);
				circle_hole2.setDrawable(true);
			}
			if(event.step == 16){
				bgColor = color(65,10,20);
				circle_hole3.color = color(237, 11, 14);
				circle_hole3.setDrawable(true);
			}
			if(event.step == 19){
				bgColor = color(10);
				circle_hole4.color = color(237, 11, 14);
				circle_hole4.setDrawable(true);
			}
			if(event.step == 20){
				circle_hole.setDrawable(false);
				circle_hole2.setDrawable(false);
				isTourniquetDrawable = false;
			}
			if(event.step == 24){
				circle_hole3.setDrawable(false);
			}

		},

		onStop: (event) => {
			console.log(event);
			circle_hole4.setDrawable(false);
		},
	});


	sequencer.registerSequence({
		name : "anims",
		start : 34,
		stop : 54,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8,1],
		onStart : (event) => {
			console.log(event);
			bgColor = color(65,10,20);
			mesAnims[0].x = 100;
			mesAnims[0].y = 400;
			mesAnims[0].w = 420;
			mesAnims[0].h = 350;
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			mesAnims[0].setCursor(cursor);
		},
		onStop : (event) => {
			console.log(event);
			mesAnims[0].setDrawable(false);
		},
	});



	sequencer.registerSequence({
		name : "anims2",
		start : 40,
		stop : 60,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			mesAnims[0].x = 800;
			mesAnims[0].y = 100;
			mesAnims[0].w = 700;
			mesAnims[0].h = 500;
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			mesAnims[0].setCursor(cursor);
		},
		
		onStop : (event) => {
			console.log(event);
			mesAnims[0].setDrawable(false);
		},

	});

		sequencer.registerSequence({
		name : "anims3",
		start : 46,
		stop : 66,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			mesAnims[0].x = 70;
			mesAnims[0].y = 20;
			mesAnims[0].w = 900;
			mesAnims[0].h = 800;
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			mesAnims[0].setCursor(cursor);
		},
		onStop : (event) => {
			console.log(event);
			mesAnims[0].setDrawable(false);
		
		},
	});

		sequencer.registerSequence({
		name: "tourniquet2",
		start: 46,
		stop: 58,

		onStart: (event) => {
			console.log(event);
			fill(0);
			isTourniquetDrawable = true;
		},

		onStop: (event) => {
			console.log(event);
			isTourniquetDrawable = false;
		},
	});

		sequencer.registerSequence({
		name : "anims4",
		start : 50,
		stop : 70,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			mesAnims[0].x = 50;
			mesAnims[0].y = 70;
			mesAnims[0].w = 5700;
			mesAnims[0].h = 4600;
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			mesAnims[0].setCursor(cursor);
		},
		onStop : (event) => {
			console.log(event);
			mesAnims[0].setDrawable(false);
		
		},
	});

		sequencer.registerSequence({
		name : "anims5",
		start : 53,
		stop : 77,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			mesAnims[0].x = 1000;
			mesAnims[0].y = 5000;
			mesAnims[0].w = 17;
			mesAnims[0].h = 16;
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			mesAnims[0].setCursor(cursor);
		},
		onStop : (event) => {
			console.log(event);
			mesAnims[0].setDrawable(false);
		
		},
	});

	sequencer.registerSequence({
		name: "3Cercles2",
		start: 48,
		stop: 64,
		onStart: (event) => {
			console.log(event);
			bgColor = color(10);
			circle_hole.color = color(255);
			circle_hole.setDrawable(true);
		},

		onStep: (event) => {
			if(event.step == 50){
				bgColor = color(65,10,20);
				circle_hole2.color = color(255);
				circle_hole2.setDrawable(true);
			}
			if(event.step == 54){
				bgColor = color(10);
				circle_hole3.color = color(255);
				circle_hole3.setDrawable(true);
			}
			if(event.step == 56){
				bgColor = color(65,10,20);
				circle_hole4.color = color(255);
				circle_hole4.setDrawable(true);
			}
			if(event.step == 56){
				circle_hole.setDrawable(false);
				circle_hole2.setDrawable(false);
			}
			if(event.step == 62){
				circle_hole3.setDrawable(false);
			}
		},

		onStop: (event) => {
			console.log(event);
				circle_hole4.setDrawable(false);
		},
	});


	sequencer.registerSequence({
		name : "perso",
		start : 66,
		stop : 100,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			bgColor = color (10);
			persoAnims[0].x = 210;
			persoAnims[0].y = 0;
			persoAnims[0].w = 1000;
			persoAnims[0].h = 800;
			persoAnims[0].setDrawable(true);
			circle_hole3.setDrawable(true);
		},

		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			persoAnims[0].setCursor(cursor);

		},

		onStop : (event) => {
			console.log(event);
			bgColor = color (10);
			persoAnims[0].setDrawable(false);
			circle_hole3.setDrawable(false);
		
		},
	});

	sequencer.registerSequence({
		name : "perso2",
		start : 85,
		stop : 90,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			persoAnims[0].x = 50;
			persoAnims[0].y = 10000;
			persoAnims[0].w = 1;
			persoAnims[0].h = 8;
			persoAnims[0].setDrawable(true);
			circle_hole3.setDrawable(true);
			isTourniquetDrawable = true;
		},

		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			persoAnims[0].setCursor(cursor);

		},

		onStop : (event) => {
			console.log(event);
			persoAnims[0].setDrawable(false);
			circle_hole3.setDrawable(false);
			isTourniquetDrawable = false;
		
		},
	});


	sequencer.registerSequence({
		name : "yeux",
		start : 99,
		stop : 112,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			yeuxAnims[0].x = 0;
			yeuxAnims[0].y = 0;
			yeuxAnims[0].w = 1500;
			yeuxAnims[0].h = 800;
			yeuxAnims[0].setDrawable(true);
		},

		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			yeuxAnims[0].setCursor(cursor);


			if(event.step == 95){
				bgColor = color (255, 0, 0);
			}
			else if(event.step % 2 == 0){
				bgColor = color (0);
			}else{
				bgColor = color (255);	
			}
			
		},

		onStop : (event) => {
			console.log(event);
			yeuxAnims[0].setDrawable(false);
		},
	});

	sequencer.registerSequence({
		name : "show2",
		start : 115,
		stop : 126,
		steps:[1],
		onStart : (event) => {
			console.log(event);
			showAnims[0].x = 240;
			showAnims[0].y = 0;
			showAnims[0].w = 1000;
			showAnims[0].h = 800;
			showAnims[0].setDrawable(true);
		},

		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor % 1;

			showAnims[0].setCursor(cursor);

			if(event.step == 119){
				circle_holeCopy.color = circle_hole.color;
				circle_holeCopy.ley = circle_hole.ley;
				circle_holeCopy.nbrCarres1 = circle_hole.nbrCarres1;
				circle_holeCopy.rayon1 = circle_hole.rayon1;
				circle_holeCopy.angle = circle_hole.angle;
				circle_holeCopy.alphaRot = circle_hole.alphaRot;
				circle_holeCopy.lex = -1;
				circle_holeCopy.setDrawable(true);
			}
				
			},

		onStop : (event) => {
			console.log(event);
				showAnims[0].setDrawable(false);
				circle_hole.setDrawable(false);
				circle_holeCopy.setDrawable(false);
		},

	});
		

		sequencer.registerSequence({
		name : "light",
		start : 130,
		stop : 155,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
				visageAnims[0].x = 200;
				visageAnims[0].y = 0;
				visageAnims[0].w = 1000;
				visageAnims[0].h = 800;

				circle_hole3.color = color(37, 37, 39);
				circle_hole3.setDrawable(true);
				
		},
		onStep : (event) => {
			console.log(event);
				let cursor = event.amount;
				cursor = cursor * 8;
				cursor = cursor % 1;
				visageAnims[0].setCursor(cursor);
		
			if(event.step % 2 == 0){
				bgColor = color (109, 98, 92);
			}
			else{
				bgColor = color (37, 37, 39);	
			}
			if(event.step == 145){
				visageAnims[0].setDrawable(true);
			}
			
		},

		onStop : (event) => {
			console.log(event);
				visageAnims[0].setDrawable(false);
				circle_hole3.setDrawable(false);
		
		},
	});


	sequencer.registerSequence({
		name : "watching",
		start : 160,
		stop : 205,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
				watchAnims[0].x = 100;
				watchAnims[0].y = 0;
				watchAnims[0].w = 1000;
				watchAnims[0].h = 800;
				watchAnims[0].setDrawable(true);

				yeux2Anims[0].x = 0;
				yeux2Anims[0].y = 0;
				yeux2Anims[0].w = 1500;
				yeux2Anims[0].h = 800;

				newyAnims[0].x = 0;
				newyAnims[0].y = 0;
				newyAnims[0].w = 1500;
				newyAnims[0].h = 800;

				noirAnims[0].x = 300;
				noirAnims[0].y = 0;
				noirAnims[0].w = 1200;
				noirAnims[0].h = 800;
		
		},
		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			watchAnims[0].setCursor(cursor);
			yeux2Anims[0].setCursor(cursor);
			newyAnims[0].setCursor(cursor);

			if(event.step == 160){
				circle_hole2.color = color(255, 0, 0);
				circle_hole2.setDrawable(true);
			}
			if(event.step == 162){
				circle_hole3.color = color(255,0, 0);
				circle_hole3.setDrawable(true);
			}
			if(event.step == 166){
				circle_hole2.setDrawable(false);
			}
			if(event.step == 168){
				circle_hole3.setDrawable(false);
			}

			if(event.step == 172){
				circle_hole4.color = color(255);
				circle_hole4.setDrawable(true);
			}

			if(event.step == 180){
				watchAnims[0].setDrawable(false);
				newyAnims[0].setDrawable(true);
			}

			if(event.step == 190){
				circle_hole6.setDrawable(false);	
			
			}


			if(event.step == 192){
				circle_hole4.setDrawable(false);
				newyAnims[0].setDrawable(false);
				yeux2Anims[0].setDrawable(true);
				bgColor = color(255);
			}
		},
		onStop : (event) => {
			console.log(event);
				yeux2Anims[0].setDrawable(false);

			},
	});

	sequencer.registerSequence({
		name : "showsover",
		start : 210,
		stop : 222,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
				noirAnims[0].x = 0;
				noirAnims[0].y = 0;
				noirAnims[0].w = 1500;
				noirAnims[0].h = 800;

				noirAnims[0].setDrawable(true);
				
		},
		onStep : (event) => {
			console.log(event);
				let cursor = event.amount;
				cursor = cursor * 8;
				cursor = cursor % 1;
				noirAnims[0].setCursor(cursor);
		
			if(event.step % 2 == 0){
				bgColor = color (65,10,20);
			}
			else{
				bgColor = color (37, 37, 39);	
			}
			
		},

		onStop : (event) => {
			console.log(event);
				noirAnims[0].setDrawable(false);
		
		},
	});

	sequencer.registerSequence({
		name : "yeux3",
		start : 225,
		stop : 240,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
				yeux3Anims[0].x = 0;
				yeux3Anims[0].y = 0;
				yeux3Anims[0].w = 1500;
				yeux3Anims[0].h = 800;

				yeux3Anims[0].setDrawable(true);
				
		},
		onStep : (event) => {
			console.log(event);
				let cursor = event.amount;
				cursor = cursor * 8;
				cursor = cursor % 1;
				yeux3Anims[0].setCursor(cursor);
		
			if(event.step % 2 == 0){
				bgColor = color (65,10,20);
			}
			else{
				bgColor = color (37, 37, 39);	
			}
			
		},

		onStop : (event) => {
			console.log(event);
				yeux3Anims[0].setDrawable(false);
				bgColor = color(37, 37, 39)
		
		},
	});


	sequencer.registerSequence({
		name : "ronds",
		start : 257,
		stop : 267,
		onStart : (event) => {
			console.log(event);
			bgColor = color(255);

			circle_hole3.color = color(0);
			circle_hole3.setDrawable(true);

			circle_hole4.color = color(0);
			circle_hole4.setDrawable(true);
			isTourniquetDrawable = true;
			isRectTourniquetDrawable = true;

				
		},

		onStep : (event) => {

			if(rectColor == grisF) { // Si rectColor est gris foncé, il devient rouge foncé, et s'il est Rouge Foncé, il devient gris foncé
				rectColor = rougeF;
			} else if(rectColor == rougeF) {
				rectColor = grisF;
			}
			
		},

		onStop : (event) => {
			console.log(event);
			circle_hole3.setDrawable(false);
			circle_hole4.setDrawable(false);
			isTourniquetDrawable = false;
			isRectTourniquetDrawable = false;
			bgColor = color(37, 37, 39)
		
		},
	});

	
	sequencer.registerSequence({
		name : "ronds3",
		start : 274,
		stop : 288,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
		},

		onStep : (event) => {
			console.log(event);
				let cursor = event.amount;
				cursor = cursor * 8;
				cursor = cursor % 1;

			if(event.step % 2 == 0){
				bgColor = color (rougeF);
			}
			else{
				bgColor = color (37, 37, 39);	
			}

				circle_hole.color = color(rougeF);
				circle_hole.setDrawable(true);

				circle_hole7.color = color(rougeF);
				circle_hole7.setDrawable(true);

				circle_hole8.color = color(rougeF);
				circle_hole8.setDrawable(true);

				circle_hole9.color = color(rougeF);
				circle_hole9.setDrawable(true);

		},

		onStop : (event) => {
			console.log(event);
			circle_hole.setDrawable(false);
			circle_hole7.setDrawable(false);
			circle_hole8.setDrawable(false);
			circle_hole9.setDrawable(false);
		
		},
	});

	sequencer.registerSequence({
		name : "ronds3",
		start : 289,
		stop : 299,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
		},

		onStep : (event) => {
			console.log(event);
				let cursor = event.amount;
				cursor = cursor * 8;
				cursor = cursor % 1;
		
			if(event.step % 2 == 0){
				bgColor = color (255);
			}
			else{
				bgColor = color (255,0,0);	
			}

				circle_hole.color = color(rougeF);
				circle_hole.setDrawable(true);

				circle_hole7.color = color(rougeF);
				circle_hole7.setDrawable(true);

				circle_hole8.color = color(rougeF);
				circle_hole8.setDrawable(true);

				circle_hole9.color = color(rougeF);
				circle_hole9.setDrawable(true);	

		},

		onStop : (event) => {
			console.log(event);
			circle_hole.setDrawable(false);
			circle_hole7.setDrawable(false);
			circle_hole8.setDrawable(false);
			circle_hole9.setDrawable(false);
		},
	});
	
	sequencer.registerSequence({
		name : "ronds4",
		start : 305,
		stop : 323,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
		},

		onStep : (event) => {
			console.log(event);
				let cursor = event.amount;
				cursor = cursor * 8;
				cursor = cursor % 1;

			if(event.step % 2 == 0){
				bgColor = color (grisF);
			}else{
				bgColor = color (37, 37, 39);	
			}
				circle_hole.color = color(grisF);
				circle_hole.setDrawable(true);

				circle_hole7.color = color(grisF);
				circle_hole7.setDrawable(true);

				circle_hole8.color = color(grisF);
				circle_hole8.setDrawable(true);

				circle_hole9.color = color(grisF);
				circle_hole9.setDrawable(true);
		
			},

		onStop : (event) => {
			console.log(event);
			circle_hole.setDrawable(false);
			circle_hole7.setDrawable(false);
			circle_hole8.setDrawable(false);
			circle_hole9.setDrawable(false);
			bgColor = color(37, 37, 39);
		
		},
	});

	sequencer.registerSequence({
		name : "yeux4",
		start : 337,
		stop : 352,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			yeuxAnims[0].x = 0;
			yeuxAnims[0].y = 0;
			yeuxAnims[0].w = 1500;
			yeuxAnims[0].h = 800;
			yeuxAnims[0].setDrawable(true);
		},

		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			yeuxAnims[0].setCursor(cursor);


			if(event.step % 2 == 0){
				bgColor = color (0);
			}else{
				bgColor = color (255,0,0);	
			}
			
		},

		onStop : (event) => {
			console.log(event);
			yeuxAnims[0].setDrawable(false);
		},
	});

	sequencer.registerSequence({
		name : "yeux5",
		start : 353,
		stop : 367,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			yeux2Anims[0].x = 0;
			yeux2Anims[0].y = 0;
			yeux2Anims[0].w = 1500;
			yeux2Anims[0].h = 800;
			yeux2Anims[0].setDrawable(true);
		},

		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;

			yeux2Anims[0].setCursor(cursor);

			bgColor = color(15);
		},

		onStop : (event) => {
			console.log(event);
			yeux2Anims[0].setDrawable(false);
		},
	});

	sequencer.registerSequence({
		name : "wastingtime",
		start : 368,
		stop : 383,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			bgColor = color(255,0,0);
			mesAnims[0].x = 0;
			mesAnims[0].y = 0;
			mesAnims[0].w = 1500;
			mesAnims[0].h = 800;
			mesAnims[0].setDrawable(true);

			circle_hole3.color = color(187, 184, 181);
			circle_hole3.setDrawable(true);
		},

		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;
			mesAnims[0].setCursor(cursor);
		},

		onStop : (event) => {
			console.log(event);
			mesAnims[0].setDrawable(false);
			circle_hole3.setDrawable(false);
		},
	
	});

	sequencer.registerSequence({
		name : "wastingtime2",
		start : 384,
		stop : 397,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			console.log(event);
			bgColor = color(187, 184, 181);
			mesAnims2[0].x = 0;
			mesAnims2[0].y = 0;
			mesAnims2[0].w = 1500;
			mesAnims2[0].h = 800;
			mesAnims2[0].setDrawable(true);
			circle_hole3.color = color(255, 0, 0);
			circle_hole3.setDrawable(true);
		},

		onStep : (event) => {
			console.log(event);
			let cursor = event.amount;
			cursor = cursor * 8;
			cursor = cursor % 1;
			mesAnims2[0].setCursor(cursor);

			
		},

		onStop : (event) => {
			console.log(event);
			mesAnims2[0].setDrawable(false);
			circle_hole3.setDrawable(false);
		},
	
	});

	sequencer.registerSequence({
		name : "calinou",
		start : 402,
		stop : 422,
		steps:[1, 1+1/15, 1+2/15, 1+3/15, 1+4/15, 1+5/15, 1+6/15, 1+7/15, 1+8/15, 1+9/15, 1+10/15, 1+11/15, 1+12/15, 1+13/15, 1+14/15],
		onStart : (event) => {
			console.log(event);
			calinouAnims[0].x = 0;
			calinouAnims[0].y = 0;
			calinouAnims[0].w = 1500;
			calinouAnims[0].h = 800;
			calinouAnims[0].setDrawable(true);
			bgColor = color(37, 37, 39);
		},

		onStep : (event) => {
			console.log(event.amount);
			calinouAnims[0].setCursor(event.amount);
			let cursor = event.amount;
			calinouAnims[0].setCursor(cursor);

			
		},

		onStop : (event) => {
			console.log(event);
			calinouAnims[0].setDrawable(false);
		},
	
	});




	
}



function draw() {
	sequencer.update();

	background(bgColor);
	if(isRectDrawable) {
		fill(rectColor);
		rect(width / 2, height / 2, 300, 300);
	}

	if(isTourniquetDrawable) {
		push();
		translate(width / 2, height / 2);
		rotate(millis() * 0.004);
		noStroke();
		fill(187, 184, 181);
		rect(0, 0, 150, 150);
		pop();
	}

	if(isRectTourniquetDrawable) {
		push();
		translate(width / 2, height / 2);
		rotate(millis() * 0.004);
		noStroke();
		fill(rectColor);
		rect(0, 0, 300, 300);
		pop();
	}

	if(circle_hole.isDrawable()) {
		circle_hole.draw();
	}
	if(circle_holeCopy.isDrawable()) {
		circle_holeCopy.draw();
	}

	if(circle_hole2.isDrawable()) {
		circle_hole2.draw();
	}

	if(circle_hole3.isDrawable()) {
		circle_hole3.draw();
	}

	if(circle_hole4.isDrawable()) {
		circle_hole4.draw();
	}

	if(circle_hole7.isDrawable()) {
		circle_hole7.draw();
	}

	if(circle_hole8.isDrawable()) {
		circle_hole8.draw();
	}

	if(circle_hole9.isDrawable()) {
		circle_hole9.draw();
	}

	for(let anim of mesAnims){
		if(anim.isDrawable()){
			anim.draw();		
		}
	}	

	for(let anim2 of mesAnims2){
		if(anim2.isDrawable()){
			anim2.draw();		
		}
	}	

	if(circle_hole5.isDrawable()) {
		circle_hole5.draw();
	}

	for(let perso of persoAnims){
		if(perso.isDrawable()){
			perso.draw();		
		}
	}	

	for(let yeux of yeuxAnims){
		if(yeux.isDrawable()){
			yeux.draw();		
		}
	}	

	for(let show of showAnims){
		if(show.isDrawable()){
			show.draw();		
		}
	}	

	for(let watch of watchAnims){
		if(watch.isDrawable()){
			watch.draw();		
		}
	}	

	for(let visage of visageAnims){
		if(visage.isDrawable()){
			visage.draw();		
		}
	}	

	if(circle_hole6.isDrawable()) {
		circle_hole6.draw();
	}

	for(let yeux2 of yeux2Anims){
		if(yeux2.isDrawable()){
			yeux2.draw();		
		}
	}	

	for(let newy of newyAnims){
		if(newy.isDrawable()){
			newy.draw();		
		}
	}	

	for(let noir of noirAnims){
		if(noir.isDrawable()){
			noir.draw();		
		}
	}	

	for(let yeux3 of yeux3Anims){
		if(yeux3.isDrawable()){
			yeux3.draw();		
		}
	}	

	for(let calinou of calinouAnims){
		if(calinou.isDrawable()){
			calinou.draw();		
		}
	}	


}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);

}

