/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/12-tauro.mp3";

let sequencer;

let mesAnims = [];
let coeur = [];
let FrameSize = 400;

function preload(){
	sequencer = new Sequencer(audioPath, 132, false);



	mesAnims.push(
		
	
		new Animator({
			imgPatternAddress : "./assets/sequenceClip/baseballeur/baseballeur_[IMG_NUM].png",
			imgCount : 56,
			firstImageNum : 0,
			numberLength : 4,
			x : 150,
			y : 100,
			w : 300,
			h : 300,
		}),
		new Animator({
			imgPatternAddress : "./assets/sequenceClip/frame/Chronologie 1_[IMG_NUM].png",
			imgCount : 9,
			firstImageNum : 0,
			numberLength : 4,
			x : 1020,
			y : 100,
			w : 300,
			h : 300,
		}),
		new Animator({
			imgPatternAddress : "./assets/sequenceClip/clap/clap 1_[IMG_NUM].png",
			imgCount : 2,
			firstImageNum : 0,
			numberLength : 4,
			x : 150,
			y : 450,
			w : 300,
			h : 300,
		}),

		new Animator({
			imgPatternAddress : "./assets/sequenceClip/tv/tv_[IMG_NUM].png",
			imgCount : 1,
			firstImageNum : 0,
			numberLength : 4,
			x : 400,
			y : 100,
			w : 700,
			h : 700,
		}),

		new Animator({
			imgPatternAddress : "./assets/sequenceClip/ball/ball_[IMG_NUM].png",
			imgCount : 4,
			firstImageNum : 0,
			numberLength : 4,
			x : 400,
			y : 100,
			w : 700,
			h : 700,
		}),

		new Animator({
			imgPatternAddress : "./assets/sequenceClip/arbitre/arbitre 1_[IMG_NUM].png",
			imgCount : 28,
			firstImageNum : 0,
			numberLength : 4,
			x : 1000,
			y : 450,
			w : 300,
			h : 300,
		}),

		new Animator({
			imgPatternAddress : "./assets/sequenceClip/tv2/tv2_[IMG_NUM].png",
			imgCount : 2,
			firstImageNum : 0,
			numberLength : 4,
			x : 400,
			y : 100,
			w : 700,
			h : 700,
		}),

		new Animator({
			imgPatternAddress : "./assets/sequenceClip/one/one_[IMG_NUM].png",
			imgCount : 7,
			firstImageNum : 0,
			numberLength : 4,
			x : 600,
			y : 350,
			w : 300,
			h : 300,
		}),

		new Animator({
			imgPatternAddress : "./assets/sequenceClip/danse/danse_[IMG_NUM].png",
			imgCount : 26,
			firstImageNum : 0,
			numberLength : 4,
			x : 400,
			y : 100,
			w : 700,
			h : 700,
		}),

		
		
	);
}

function setup() {	

	
	
	let canvas = createCanvas(windowWidth, windowHeight);

	

	sequencer.registerSequence({
		name : "danse",
		start: 190,
		stop: 194,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse2",
		start: 195,
		stop: 199,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse3",
		start: 200,
		stop: 204,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse4",
		start: 205,
		stop: 209,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse5",
		start: 210,
		stop: 214,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse6",
		start: 215,
		stop: 219,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse7",
		start: 220,
		stop: 224,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse8",
		start: 225,
		stop: 229,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse9",
		start: 230,
		stop: 234,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse10",
		start: 235,
		stop: 239,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse11",
		start: 240,
		stop: 244,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse12",
		start: 245,
		stop: 249,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse13",
		start: 250,
		stop: 254,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse14",
		start: 255,
		stop: 259,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse15",
		start: 260,
		stop: 264,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse16",
		start: 265,
		stop: 269,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse17",
		start: 270,
		stop: 274,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "danse18",
		start: 275,
		stop: 279,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[8].setDrawable(false);
		},
		
	});


	for(let i = 77 ; i < 150 ; i ++){
		sequencer.registerSequence({
			name : "ball"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[4].setDrawable(true);
				mesAnims[4].cursor = 0;
			},
			onStep : (event) => {
				console.log(event);
				mesAnims[4].cursor ++;
				mesAnims[4].cursor %= mesAnims[4].imgs.length;
			},
			onStop : (event) => {
				mesAnims[4].setDrawable(false);
			}
		});
	}

	for(let i = 152 ; i < 157 ; i ++){
		sequencer.registerSequence({
			name : "ball2"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[4].setDrawable(true);
				mesAnims[4].cursor = 0;
			},
			onStep : (event) => {
				console.log(event);
				mesAnims[4].cursor ++;
				mesAnims[4].cursor %= mesAnims[4].imgs.length;
			},
			onStop : (event) => {
				mesAnims[4].setDrawable(false);
			}
		});
	}

	for(let i = 159 ; i < 165 ; i ++){
		sequencer.registerSequence({
			name : "ball3"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[4].setDrawable(true);
				mesAnims[4].cursor = 0;
			},
			onStep : (event) => {
				console.log(event);
				mesAnims[4].cursor ++;
				mesAnims[4].cursor %= mesAnims[4].imgs.length;
			},
			onStop : (event) => {
				mesAnims[4].setDrawable(false);
			}
		});
	}

	for(let i = 167 ; i < 190 ; i ++){
		sequencer.registerSequence({
			name : "ball4"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[4].setDrawable(true);
				mesAnims[4].cursor = 0;
			},
			onStep : (event) => {
				console.log(event);
				mesAnims[4].cursor ++;
				mesAnims[4].cursor %= mesAnims[4].imgs.length;
			},
			onStop : (event) => {
				mesAnims[4].setDrawable(false);
			}
		});
	}

	for(let i = 280 ; i < 308 ; i ++){
		sequencer.registerSequence({
			name : "ball5"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[4].setDrawable(true);
				mesAnims[4].cursor = 0;
			},
			onStep : (event) => {
				console.log(event);
				mesAnims[4].cursor ++;
				mesAnims[4].cursor %= mesAnims[4].imgs.length;
			},
			onStop : (event) => {
				mesAnims[4].setDrawable(false);
			}
		});
	}

	for(let i = 310 ; i < 316 ; i ++){
		sequencer.registerSequence({
			name : "ball6"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[4].setDrawable(true);
				mesAnims[4].cursor = 0;
			},
			onStep : (event) => {
				console.log(event);
				mesAnims[4].cursor ++;
				mesAnims[4].cursor %= mesAnims[4].imgs.length;
			},
			onStop : (event) => {
				mesAnims[4].setDrawable(false);
			}
		});
	}

	for(let i = 318 ; i < 323 ; i ++){
		sequencer.registerSequence({
			name : "ball7"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[4].setDrawable(true);
				mesAnims[4].cursor = 0;
			},
			onStep : (event) => {
				console.log(event);
				mesAnims[4].cursor ++;
				mesAnims[4].cursor %= mesAnims[4].imgs.length;
			},
			onStop : (event) => {
				mesAnims[4].setDrawable(false);
			}
		});
	}

	for(let i = 325 ; i < 340 ; i ++){
		sequencer.registerSequence({
			name : "ball8"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[4].setDrawable(true);
				mesAnims[4].cursor = 0;
			},
			onStep : (event) => {
				console.log(event);
				mesAnims[4].cursor ++;
				mesAnims[4].cursor %= mesAnims[4].imgs.length;
			},
			onStop : (event) => {
				mesAnims[4].setDrawable(false);
			}
		});
	}

	

	sequencer.registerSequence({
		name : "one1",
		start: 151,
		stop: 152,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one2",
		start: 158,
		stop: 159,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one3",
		start: 166,
		stop: 167,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one4",
		start: 170,
		stop: 171,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one5",
		start: 173,
		stop: 174,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one6",
		start: 175,
		stop: 176,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one7",
		start: 177,
		stop: 178,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one8",
		start: 179,
		stop: 180,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one9",
		start: 181,
		stop: 182,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one10",
		start: 309,
		stop: 310,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one11",
		start: 317,
		stop: 318,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one12",
		start: 324,
		stop: 325,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one13",
		start: 328,
		stop: 329,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one14",
		start: 332,
		stop: 333,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one15",
		start: 334,
		stop: 335,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});
	

	sequencer.registerSequence({
		name : "one16",
		start: 336,
		stop: 337,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "one17",
		start: 338,
		stop: 339,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[7].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[7].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[7].setDrawable(false);
		},
		
	});


	for(let i = 381 ; i < 427 ; i ++){
		sequencer.registerSequence({
			name : "tv2"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[6].setDrawable(true);
				mesAnims[6].cursor = 0;
			},
			onStep : (event) => {
				mesAnims[6].cursor = 1 - mesAnims[6].cursor;
			},
			onStop : (event) => {
				mesAnims[6].setDrawable(false);
			}
		});
	}



	sequencer.registerSequence({
		name : "ebitre1",
		start: 47,
		stop: 50,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre2",
		start: 51,
		stop: 54,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre3",
		start: 55,
		stop: 58,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre4",
		start: 59,
		stop: 62,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre5",
		start: 63,
		stop: 66,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre6",
		start: 67,
		stop: 69,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre7",
		start: 70,
		stop: 73,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre8",
		start: 74,
		stop: 77,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre9",
		start: 78,
		stop: 80,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre10",
		start: 81,
		stop: 84,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre11",
		start: 85,
		stop: 88,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre12",
		start: 89,
		stop: 92,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre13",
		start: 93,
		stop: 95,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre14",
		start: 96,
		stop: 99,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre15",
		start: 100,
		stop: 103,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre16",
		start: 104,
		stop: 107,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre17",
		start: 108,
		stop: 110,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre18",
		start: 111,
		stop: 114,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre19",
		start: 115,
		stop: 118,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre20",
		start: 119,
		stop: 122,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre21",
		start: 123,
		stop: 125,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre22",
		start: 126,
		stop: 129,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre23",
		start: 130,
		stop: 133,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre24",
		start: 134,
		stop: 137,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre25",
		start: 138,
		stop: 140,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre26",
		start: 141,
		stop: 144,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre27",
		start: 145,
		stop: 148,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre28",
		start: 149,
		stop: 152,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre29",
		start: 153,
		stop: 156,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre30",
		start: 157,
		stop: 159,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre31",
		start: 160,
		stop: 163,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre32",
		start: 164,
		stop: 167,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre33",
		start: 168,
		stop: 171,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre34",
		start: 172,
		stop: 175,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre35",
		start: 176,
		stop: 178,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre36",
		start: 179,
		stop: 182,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre37",
		start: 190,
		stop: 193,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre38",
		start: 194,
		stop: 197,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre39",
		start: 198,
		stop: 201,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre40",
		start: 202,
		stop: 205,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre41",
		start: 206,
		stop: 208,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre42",
		start: 209,
		stop: 212,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre43",
		start: 213,
		stop: 216,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre44",
		start: 217,
		stop: 220,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre45",
		start: 221,
		stop: 223,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre46",
		start: 224,
		stop: 227,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre47",
		start: 228,
		stop: 231,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre48",
		start: 232,
		stop: 235,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre49",
		start: 236,
		stop: 239,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre50",
		start: 240,
		stop: 242,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre51",
		start: 243,
		stop: 246,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre52",
		start: 247,
		stop: 250,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre53",
		start: 251,
		stop: 253,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre54",
		start: 254,
		stop: 257,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre55",
		start: 258,
		stop: 261,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre56",
		start: 262,
		stop: 265,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre57",
		start: 266,
		stop: 269,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre58",
		start: 270,
		stop: 273,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre59",
		start: 274,
		stop: 276,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre60",
		start: 281,
		stop: 284,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre61",
		start: 285,
		stop: 288,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre62",
		start: 289,
		stop: 291,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre63",
		start: 292,
		stop: 295,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre64",
		start: 296,
		stop: 299,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre65",
		start: 303,
		stop: 306,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre66",
		start: 307,
		stop: 310,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre67",
		start: 311,
		stop: 314,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre68",
		start: 315,
		stop: 318,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre69",
		start: 319,
		stop: 322,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre70",
		start: 323,
		stop: 325,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre71",
		start: 326,
		stop: 329,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre72",
		start: 330,
		stop: 333,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre73",
		start: 334,
		stop: 337,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "ebitre74",
		start: 338,
		stop: 340,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[5].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[5].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[5].setDrawable(false);
		},
		
	});

	
	
		
	

	sequencer.registerSequence({
		name : "tv",
		start: 1,
		stop: 382,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[3].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[3].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[3].setDrawable(false);
		},
		
	});

	

	for(let i = 0 ; i < 183 ; i ++){
		sequencer.registerSequence({
			name : "clap"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[2].setDrawable(true);
				mesAnims[2].cursor = 0;
			},
			onStep : (event) => {
				mesAnims[2].cursor = 1 - mesAnims[2].cursor;
			},
			onStop : (event) => {
				mesAnims[2].setDrawable(false);
			}
		});
	}

	for(let i = 190 ; i < 341 ; i ++){
		sequencer.registerSequence({
			name : "clap2"+i,
			start: i+1,
			stop: i+1,
			steps:[1, 1+1/4, 1+2/4, 1+3/4],
			onStart : (event) => {
				mesAnims[2].setDrawable(true);
				mesAnims[2].cursor = 0;
			},
			onStep : (event) => {
				mesAnims[2].cursor = 1 - mesAnims[2].cursor;
			},
			onStop : (event) => {
				mesAnims[2].setDrawable(false);
			}
		});
	}


	sequencer.registerSequence({
		name : "coeur1",
		start: 16,
		stop: 17,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});
	
	
	sequencer.registerSequence({
		name : "coeur2",
		start: 18,
		stop: 19,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	
		
	sequencer.registerSequence({
		name : "coeur3",
		start: 20,
		stop: 21,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur4",
		start: 22,
		stop: 23,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur5",
		start: 24,
		stop: 25,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur6",
		start: 26,
		stop: 27,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur7",
		start: 28,
		stop: 29,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur8",
		start: 30,
		stop: 31,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur9",
		start: 32,
		stop: 33,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur10",
		start: 34,
		stop: 35,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur11",
		start: 36,
		stop: 37,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur12",
		start: 38,
		stop: 39,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur13",
		start: 40,
		stop: 41,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur14",
		start: 42,
		stop: 43,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur15",
		start: 44,
		stop: 45,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur16",
		start: 46,
		stop: 47,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur17",
		start: 48,
		stop: 49,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur18",
		start: 50,
		stop: 51,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur19",
		start: 52,
		stop: 53,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur20",
		start: 54,
		stop: 55,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur21",
		start: 56,
		stop: 57,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur22",
		start: 58,
		stop: 59,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur23",
		start: 60,
		stop: 61,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur24",
		start: 62,
		stop: 63,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur25",
		start: 64,
		stop: 65,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur26",
		start: 66,
		stop: 67,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur27",
		start: 68,
		stop: 69,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur28",
		start: 70,
		stop: 71,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur29",
		start: 72,
		stop: 73,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur30",
		start: 74,
		stop: 75,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur31",
		start: 76,
		stop: 77,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur32",
		start: 78,
		stop: 79,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur33",
		start: 80,
		stop: 81,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur34",
		start: 82,
		stop: 83,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur35",
		start: 84,
		stop: 85,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur36",
		start: 86,
		stop: 87,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur37",
		start: 88,
		stop: 89,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur38",
		start: 90,
		stop: 91,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur39",
		start: 92,
		stop: 93,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur40",
		start: 94,
		stop: 95,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur41",
		start: 96,
		stop: 97,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur42",
		start: 98,
		stop: 99,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur43",
		start: 100,
		stop: 101,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur44",
		start: 102,
		stop: 103,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur45",
		start: 104,
		stop: 105,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur46",
		start: 106,
		stop: 107,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur47",
		start: 108,
		stop: 109,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur48",
		start: 110,
		stop: 111,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur49",
		start: 112,
		stop: 113,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur50",
		start: 114,
		stop: 115,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur51",
		start: 116,
		stop: 117,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur52",
		start: 118,
		stop: 119,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur53",
		start: 120,
		stop: 121,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur54",
		start: 122,
		stop: 123,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur55",
		start: 124,
		stop: 125,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur56",
		start: 126,
		stop: 127,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur57",
		start: 128,
		stop: 129,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur158",
		start: 130,
		stop: 131,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur159",
		start: 132,
		stop: 133,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur160",
		start: 134,
		stop: 135,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur161",
		start: 136,
		stop: 137,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur162",
		start: 138,
		stop: 139,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur163",
		start: 140,
		stop: 141,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur164",
		start: 142,
		stop: 143,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur165",
		start: 144,
		stop: 145,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur166",
		start: 146,
		stop: 147,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur167",
		start: 148,
		stop: 149,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur168",
		start: 150,
		stop: 151,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur169",
		start: 152,
		stop: 153,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur170",
		start: 154,
		stop: 155,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur171",
		start: 156,
		stop: 157,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur172",
		start: 158,
		stop: 159,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur173",
		start: 160,
		stop: 161,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur174",
		start: 162,
		stop: 163,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur175",
		start: 164,
		stop: 165,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur176",
		start: 166,
		stop: 167,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur177",
		start: 168,
		stop: 169,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur178",
		start: 170,
		stop: 171,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur179",
		start: 172,
		stop: 173,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur180",
		start: 174,
		stop: 175,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur181",
		start: 176,
		stop: 177,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur182",
		start: 178,
		stop: 179,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur183",
		start: 180,
		stop: 181,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur184",
		start: 182,
		stop: 183,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur185",
		start: 190,
		stop: 191,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur186",
		start: 192,
		stop: 193,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur187",
		start: 194,
		stop: 195,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur188",
		start: 196,
		stop: 197,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur189",
		start: 198,
		stop: 199,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur190",
		start: 200,
		stop: 201,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur191",
		start: 202,
		stop: 203,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur192",
		start: 204,
		stop: 205,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur193",
		start: 206,
		stop: 207,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur194",
		start: 208,
		stop: 209,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur195",
		start: 210,
		stop: 211,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur196",
		start: 212,
		stop: 213,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur197",
		start: 214,
		stop: 215,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur198",
		start: 216,
		stop: 217,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur199",
		start: 218,
		stop: 219,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur200",
		start: 220,
		stop: 221,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur201",
		start: 222,
		stop: 223,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur202",
		start: 224,
		stop: 225,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur203",
		start: 226,
		stop: 227,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur204",
		start: 228,
		stop: 229,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur205",
		start: 230,
		stop: 231,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur206",
		start: 232,
		stop: 233,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur207",
		start: 234,
		stop: 235,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur208",
		start: 236,
		stop: 237,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur209",
		start: 238,
		stop: 239,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur210",
		start: 240,
		stop: 241,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur211",
		start: 242,
		stop: 243,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur212",
		start: 244,
		stop: 245,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur213",
		start: 246,
		stop: 247,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur214",
		start: 248,
		stop: 249,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur215",
		start: 250,
		stop: 251,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur216",
		start: 252,
		stop: 253,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur217",
		start: 254,
		stop: 255,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur218",
		start: 256,
		stop: 257,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur219",
		start: 258,
		stop: 259,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur220",
		start: 260,
		stop: 261,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur221",
		start: 262,
		stop: 263,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur222",
		start: 264,
		stop: 265,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur223",
		start: 266,
		stop: 267,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur224",
		start: 268,
		stop: 269,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur225",
		start: 270,
		stop: 271,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur226",
		start: 272,
		stop: 273,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur227",
		start: 274,
		stop: 275,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur228",
		start: 276,
		stop: 277,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur229",
		start: 278,
		stop: 279,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur230",
		start: 280,
		stop: 281,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur231",
		start: 282,
		stop: 283,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur232",
		start: 284,
		stop: 285,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur233",
		start: 286,
		stop: 287,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur234",
		start: 288,
		stop: 289,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur235",
		start: 290,
		stop: 291,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur236",
		start: 292,
		stop: 293,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur237",
		start: 294,
		stop: 295,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur238",
		start: 296,
		stop: 297,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur239",
		start: 298,
		stop: 299,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur240",
		start: 300,
		stop: 301,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur241",
		start: 302,
		stop: 303,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur242",
		start: 304,
		stop: 305,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur243",
		start: 306,
		stop: 307,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur244",
		start: 308,
		stop: 309,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur245",
		start: 310,
		stop: 311,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur246",
		start: 312,
		stop: 313,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur247",
		start: 314,
		stop: 315,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur248",
		start: 316,
		stop: 317,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur249",
		start: 318,
		stop: 319,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur250",
		start: 320,
		stop: 321,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur251",
		start: 322,
		stop: 323,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur252",
		start: 324,
		stop: 325,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur253",
		start: 326,
		stop: 327,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur254",
		start: 328,
		stop: 329,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur255",
		start: 330,
		stop: 331,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur256",
		start: 332,
		stop: 333,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur257",
		start: 334,
		stop: 335,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur258",
		start: 336,
		stop: 337,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur259",
		start: 338,
		stop: 339,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur260",
		start: 340,
		stop: 341,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "coeur261",
		start: 342,
		stop: 343,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[1].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[1].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[1].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact",
		start: 28,
		stop: 34,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	
	sequencer.registerSequence({
		name : "fin",
		start: 35,
		stop: 41,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact3",
		start: 42,
		stop: 49,
		steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
sequencer.registerSequence({
		name : "impact4",
		start: 50,
		stop: 52,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact5",
		start: 53,
		stop: 56,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact6",
		start: 57,
		stop: 60,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact7",
		start: 61,
		stop: 63,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact8",
		start: 64,
		stop: 67,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact9",
		start: 68,
		stop: 71,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact10",
		start: 72,
		stop: 75,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact11",
		start: 76,
		stop: 78,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact12",
		start: 79,
		stop: 82,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact13",
		start: 83,
		stop: 86,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact14",
		start: 87,
		stop: 90,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact15",
		start: 91,
		stop: 94,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact16",
		start: 95,
		stop: 98,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact17",
		start: 99,
		stop: 101,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact18",
		start: 102,
		stop: 105,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact19",
		start: 106,
		stop: 109,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact20",
		start: 110,
		stop: 112,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact21",
		start: 113,
		stop: 116,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact22",
		start: 117,
		stop: 120,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact23",
		start: 121,
		stop: 123,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact24",
		start: 124,
		stop: 127,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact25",
		start: 128,
		stop: 131,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact26",
		start: 132,
		stop: 135,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact27",
		start: 136,
		stop: 139,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact28",
		start: 140,
		stop: 143,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact29",
		start: 144,
		stop: 146,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact30",
		start: 147,
		stop: 150,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact31",
		start: 151,
		stop: 154,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact32",
		start: 155,
		stop: 158,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact33",
		start: 159,
		stop: 161,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact34",
		start: 162,
		stop: 165,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact35",
		start: 166,
		stop: 169,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact36",
		start: 170,
		stop: 172,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact37",
		start: 173,
		stop: 176,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact138",
		start: 177,
		stop: 178,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact139",
		start: 179,
		stop: 180,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact140",
		start: 186,
		stop: 191,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact141",
		start: 192,
		stop: 195,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact142",
		start: 196,
		stop: 199,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact143",
		start: 200,
		stop: 203,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	
	sequencer.registerSequence({
		name : "impact144",
		start: 204,
		stop: 206,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact145",
		start: 207,
		stop: 210,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact146",
		start: 211,
		stop: 214,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact147",
		start: 215,
		stop: 217,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact148",
		start: 218,
		stop: 222,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact149",
		start: 223,
		stop: 225,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact150",
		start: 226,
		stop: 229,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact151",
		start: 230,
		stop: 233,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact152",
		start: 234,
		stop: 237,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact153",
		start: 238,
		stop: 240,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact154",
		start: 241,
		stop: 244,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact155",
		start: 245,
		stop: 248,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact156",
		start: 249,
		stop: 252,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact157",
		start: 253,
		stop: 256,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact158",
		start: 257,
		stop: 259,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact159",
		start: 260,
		stop: 263,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact160",
		start: 264,
		stop: 267,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact161",
		start: 268,
		stop: 271,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact162",
		start: 272,
		stop: 274,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact163",
		start: 275,
		stop: 278,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact164",
		start: 279,
		stop: 282,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact165",
		start: 283,
		stop: 286,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact166",
		start: 287,
		stop: 289,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact167",
		start: 290,
		stop: 293,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact168",
		start: 294,
		stop: 297,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact169",
		start: 298,
		stop: 301,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact170",
		start: 302,
		stop: 304,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact171",
		start: 305,
		stop: 308,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact172",
		start: 309,
		stop: 312,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact173",
		start: 302,
		stop: 304,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact174",
		start: 305,
		stop: 308,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact175",
		start: 309,
		stop: 312,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact176",
		start: 313,
		stop: 316,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact177",
		start: 317,
		stop: 320,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact178",
		start: 321,
		stop: 324,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact179",
		start: 325,
		stop: 327,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact180",
		start: 328,
		stop: 331,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact181",
		start: 332,
		stop: 333,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact182",
		start: 334,
		stop: 335,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact183",
		start: 336,
		stop: 337,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact184",
		start: 338,
		stop: 339,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});

	sequencer.registerSequence({
		name : "impact185",
		start: 340,
		stop: 341,
		steps:[1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6, 1+6/6, 1+7/6],
		onStart : (event) => {
			//console.log(event)
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
			//console.log(event)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			//console.log(event)	
			
			mesAnims[0].setDrawable(false);
		},
		
	});
	

	

	
}

function draw(){
	clear();
	//background(255);
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

