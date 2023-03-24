let audioPath = "./assets/audio/CloZee_Mirage.mp3";
let sequencer;

let view;

let amp = 1;

let brouilli;

let bgColor = 0;

let view2;

let view3;

let op = 0.01;

function setup(){
	createCanvas (window.innerWidth, window.innerHeight, WEBGL);
	view = new mont();
	lights1 = new lights1();
	lights2 = new lights2();
	view2 = new mont2();
	lignes2 = new lignes2();
	view3 = new mont3();
	brouilli = new Brouilli();	
	sequencer = new Sequencer(audioPath, 40, false);
	

	sequencer.registerSequence({
		name : "montvisibility",
		start : 1,
		onStart : () => {
			view.isVisible = true;
			/*brouilli.isVisible = true;*/
		},
		stop : 51,
		onStop : () => {
			view.isVisible = false;
		},

	}); //mont visibiltié
	
	sequencer.registerSequence({
		name : "mont",
		start : 1,
		onStart : () => {
			
			/*brouilli.isVisible = true;*/
		},
		stop : 16,
		onStop : () => {
			
			view.moveEnable = false;
		},
		steps : [1+1/2], 
		onStep : (event)=>{
			amp += 0.5;
			
		}
	}); //mont
		
	sequencer.registerSequence({
		name : "Firstlights",
		start : 9+1/2,
		onStart : () => {
			lights1.isVisible = true;
			
		},
		stop : 10,
			
		steps : [1+1/2], 
		onStep : (event)=>{
			lights1.isVisible = false;
		}
	}); //éclairs 1
	
	sequencer.registerSequence({
		name : "Secondlights",
		start : 10+1/2,
		onStart : () => {
			lights2.isVisible = true;
		},
		stop : 11,
		
		steps : [1+1/2], 
		onStep : (event)=>{
			lights2.isVisible = false;
		}
	}); //éclairs 2
	
	sequencer.registerSequence({
		name : "Thirdlights",
		start : 13+1/2,
		onStart : () => {
			lights1.isVisible = true;
		},
		stop : 14,
		
		steps : [1+1/2], 
		onStep : (event)=>{
			lights1.isVisible = false;
		}
	}); //éclairs 3
	
	sequencer.registerSequence({
		name : "Finallights",
		start : 14+1/2,
		onStart : () => {
			lights2.isVisible = true;
		},
		stop : 15,
		
		steps : [1+1/2], 
		onStep : (event)=>{
			lights2.isVisible = false;
		}
	}); //éclairs 4
	
	sequencer.registerSequence({
		name : "fleur1",
		start : 17+1/2,
		onStart : () => {
			document.querySelector("#fleur1").style.opacity= 1;
		},
	
		stop : 20+1/2,
		onStop : () => {
			document.querySelector("#fleur1").style.opacity= 0;
			},
		}); //fleur 1
	
	sequencer.registerSequence({
		name : "fleur2",
		start : 18+1/2,
		onStart : () => {
			document.querySelector("#fleur2").style.opacity= 1;
		},
	
		stop : 22,
		onStop : () => {
			document.querySelector("#fleur2").style.opacity= 0;
		},
		}); //fleur 2
		
	sequencer.registerSequence({
		name : "fleur3",
		start : 19+1/2,
		onStart : () => {
			document.querySelector("#fleur3").style.opacity= 1;
		},
	
		stop :22+1/2,
		onStop : () => {
			document.querySelector("#fleur3").style.opacity= 0;
		},
		}); //fleur 3
			
	sequencer.registerSequence({
		name : "fleur4",
		start : 20+1/2,
		onStart : () => {
			document.querySelector("#fleur4").style.opacity= 1;
		},
	
		stop : 23+1/2,
		onStop : () => {
			document.querySelector("#fleur4").style.opacity= 0;
		},	
	}); //fleur 4
	
	sequencer.registerSequence({
		name : "pousse1",
		start : 21+1/2,
		onStart : () => {
			document.querySelector("#pousse1").style.opacity= 1;
		},
	
		stop : 24+1/2,
		onStop : () => {
			document.querySelector("#pousse1").style.opacity= 0;
		},	
	}); //pousse1
	
	sequencer.registerSequence({
		name : "pousse2",
		start : 23,
		onStart : () => {
			document.querySelector("#pousse2").style.opacity= 1;
		},
	
		stop : 24+1/2,
		onStop : () => {
		document.querySelector("#pousse2").style.opacity= 0;
		},	
	}); //pousse2
	
	sequencer.registerSequence({
		name : "pousse3",
		start : 23+1/2,
		onStart : () => {
			document.querySelector("#pousse3").style.opacity= 1;
		},
	
		stop : 24+1/2,
		onStop : () => {
			document.querySelector("#pousse3").style.opacity= 0;
		},	
	}); //pousse3
	
	sequencer.registerSequence({
		name : "pousse4",
		start : 24+1/2,
		onStart : () => {
			document.querySelector("#pousse4").style.opacity= 1;
		},
	
		stop : 24+1/2,
		onStop : () => {
			document.querySelector("#pousse4").style.opacity= 0;
		},	
	}); //pousse4
	
	sequencer.registerSequence({
		name : "pousse5",
		start : 25+1/2,
		onStart : () => {
			document.querySelector("#pousse5").style.opacity= 1;
		},
	
		stop : 26+1/2,
		onStop : () => {
			document.querySelector("#pousse5").style.opacity= 0;
		},	
	}); //pousse5
	
	sequencer.registerSequence({
		name : "pousse6",
		start : 25+1/2,
		onStart : () => {
			document.querySelector("#pousse6").style.opacity= 1;
		},
	
		stop : 26+1/2,
		onStop : () => {
			document.querySelector("#pousse6").style.opacity= 0;
		},	
	}); //pousse6
	
	sequencer.registerSequence({
		name : "pousse7",
		start : 25+1/2,
		onStart : () => {
			document.querySelector("#pousse7").style.opacity= 1;
		},
	
		stop : 26+1/2,
		onStop : () => {
			document.querySelector("#pousse7").style.opacity= 0;
		},	
	}); //pousse7
	
	sequencer.registerSequence({
		name : "pousse8",
		start : 25+1/2,
		onStart : () => {
			document.querySelector("#pousse8").style.opacity= 1;
		},
	
		stop : 26+1/2,
		onStop : () => {
			document.querySelector("#pousse8").style.opacity= 0;
		},	
	}); //pousse8
	
	sequencer.registerSequence({
		name : "pousse9",
		start : 27+1/2,
		onStart : () => {
			document.querySelector("#pousse9").style.opacity= 1;
		},
	
		stop : 33,
		onStop : () => {
			document.querySelector("#pousse9").style.opacity= 0;
		},	
	}); //pousse9
	
	sequencer.registerSequence({
		name : "pousse10",
		start : 27+1/2,
		onStart : () => {
			document.querySelector("#pousse10").style.opacity= 1;
		},
	
		stop : 33,
		onStop : () => {
			document.querySelector("#pousse10").style.opacity= 0;
		},	
	}); //pousse10
	
	sequencer.registerSequence({
		name : "pousse11",
		start : 27+1/2,
		onStart : () => {
			document.querySelector("#pousse11").style.opacity= 1;
		},
	
		stop : 33,
		onStop : () => {
			document.querySelector("#pousse11").style.opacity= 0;
		},	
	}); //pousse11
	
	sequencer.registerSequence({
		name : "pousse12",
		start : 27+1/2,
		onStart : () => {
			document.querySelector("#pousse12").style.opacity= 1;
		},
	
		stop : 33,
		onStop : () => {
			document.querySelector("#pousse12").style.opacity= 0;
		},	
	}); //pousse12
	
	sequencer.registerSequence({
		name : "pousse13",
		start : 29+1/2,
		onStart : () => {
			document.querySelector("#pousse13").style.opacity= 1;
		},
	
		stop : 33,
		onStop : () => {
			document.querySelector("#pousse13").style.opacity= 0;

		},	
	}); //pousse13
	
	sequencer.registerSequence({
		name : "pousse14",
		start : 29+1/2,
		onStart : () => {
			document.querySelector("#pousse14").style.opacity= 1;
		},
	
		stop : 33,
		onStop : () => {
			document.querySelector("#pousse14").style.opacity= 0;

		},	
	}); //pousse14
	
	sequencer.registerSequence({
		name : "pousse15",
		start : 29+1/2,
		onStart : () => {
			document.querySelector("#pousse15").style.opacity= 1;
		},
	
		stop : 33,
		onStop : () => {
			document.querySelector("#pousse15").style.opacity= 0;
		},	
	}); //pousse15
	
	sequencer.registerSequence({
		name : "pousse16",
		start : 29+1/2,
		onStart : () => {
			document.querySelector("#pousse16").style.opacity= 1;
		},
	
		stop : 33,
		onStop : () => {
			document.querySelector("#pousse16").style.opacity= 0;
		},	
	}); //pousse16
	
	sequencer.registerSequence({
		name : "brouilli",
		start : 34,
		onStart : () => {
			brouilli.isVisible = true;
		},
		stop : 49,
		onStop : () => {
			brouilli.isVisible = false;
			}
	}); //brouilli
	
	sequencer.registerSequence({
		name : "backgroundblanc",
		start : 50,
		onStart : () => {
			bgColor = 255;
			
		},
		stop : 88,
		onStop : () => {
			bgColor = 0;
		},
	});  //changement couleur bckgd
	
	//SEQUENCES BLANC
	sequencer.registerSequence({
		name : "oiseaux1",
		start : 51,
		onStart : () => {
			document.querySelector("#oiseaux1").style.opacity= 1;
		},
	
		stop : 57,
		onStop : () => {
			document.querySelector("#oiseaux1").style.opacity= 0;
		},
	});//oiseaux1
	
	sequencer.registerSequence({
		name : "oiseaux2",
		start : 52,
		onStart : () => {
			document.querySelector("#oiseaux2").style.opacity= 1;
		},
	
		stop : 57,
		onStop : () => {
			document.querySelector("#oiseaux2").style.opacity= 0;
		},
	});//oiseaux2
	
	sequencer.registerSequence({
		name : "nuage1",
		start : 52,
		onStart : () => {
			document.querySelector("#nuage1").style.opacity= 1;
		},
	
		stop : 63,
		onStop : () => {
			document.querySelector("#nuage1").style.opacity= 0;
		},
	});//nuage1
	
	sequencer.registerSequence({
		name : "oiseaux3",
		start : 53,
		onStart : () => {
			document.querySelector("#oiseaux3").style.opacity= 1;
		},
	
		stop : 57,
		onStop : () => {
			document.querySelector("#oiseaux3").style.opacity= 0;
		},
	});//oiseaux3
	
	sequencer.registerSequence({
		name : "nuage2",
		start : 53,
		onStart : () => {
			document.querySelector("#nuage2").style.opacity= 1;
		},
	
		stop : 63,
		onStop : () => {
			document.querySelector("#nuage2").style.opacity= 0;
		},
	});//nuage2
	
	sequencer.registerSequence({
		name : "oiseaux4",
		start : 54,
		onStart : () => {
			document.querySelector("#oiseaux4").style.opacity= 1;
		},
	
		stop : 57,
		onStop : () => {
			document.querySelector("#oiseaux4").style.opacity= 0;
		},
	});//oiseaux4
	
	sequencer.registerSequence({
		name : "nuage3",
		start : 54,
		onStart : () => {
			document.querySelector("#nuage3").style.opacity= 1;
		},
	
		stop : 63,
		onStop : () => {
			document.querySelector("#nuage3").style.opacity= 0;
		},
	});//nuage3
	
	sequencer.registerSequence({
		name : "oiseaux5",
		start : 56,
		onStart : () => {
			document.querySelector("#oiseaux5").style.opacity= 1;
		},
	
		stop : 57,
		onStop : () => {
			document.querySelector("#oiseaux5").style.opacity= 0;
		},
	});//oiseaux5

	sequencer.registerSequence({
		name : "nuage4",
		start : 56,
		onStart : () => {
			document.querySelector("#nuage4").style.opacity= 1;
		},
	
		stop : 63,
		onStop : () => {
			document.querySelector("#nuage4").style.opacity= 0;
		},
	});//nuage4
	
	sequencer.registerSequence({
		name : "transf1",
		start : 58,
		onStart : () => {
			document.querySelector("#trans1").style.opacity= 1;
		},
	
		stop : 60,
		onStop : () => {
			document.querySelector("#trans1").style.opacity= 0;
		},
	});//transf1
	
	sequencer.registerSequence({
		name : "transf2",
		start : 61,
		onStart : () => {
			document.querySelector("#trans2").style.opacity= 1;
		},
	
		stop : 63,
		onStop : () => {
			document.querySelector("#trans2").style.opacity= 0;
		},
	});//transf2
	
	sequencer.registerSequence({
		name : "transf3",
		start : 64,
		onStart : () => {
			document.querySelector("#trans3").style.opacity= 1;
		},
	
		stop : 66,
		onStop : () => {
			document.querySelector("#trans3").style.opacity= 0;
		},
	});//transf3
	
	sequencer.registerSequence({
		name : "transf4",
		start : 67,
		onStart : () => {
			document.querySelector("#trans4").style.opacity= 1;
		},
	
		stop : 68,
		onStop : () => {
			document.querySelector("#trans4").style.opacity= 0;
		},
	});//transf4
	
	sequencer.registerSequence({
		name : "lignes1",
		start : 69,
		onStart : () => {
			document.querySelector("#lignes1").style.opacity= 1;
		},
	
		stop : 70,
		onStop : () => {
			document.querySelector("#lignes1").style.opacity= 0;
		},
	});//lignes1
	
	sequencer.registerSequence({
		name : "lignes2",
		start : 71,
		onStart : () => {
			lignes2.isVisible = true ;
		},
	
		stop : 72,
		onStop : () => {
			lignes2.isVisible = false ;
		},
	});//lignes2
	
	sequencer.registerSequence({
		name : "mont2",
		start : 73,
		onStart : () => {
			view2.isVisible = true ;
		},
	
		stop : 88,
		onStop : () => {
			view2.isVisible = false ;
		},
	});//mont2
	
	sequencer.registerSequence({
		name : "orbe1a",
		start : 73+1/2,
		onStart : () => {
			document.querySelector("#orbe1").style.opacity= 1;
		},
	
		stop : 73+1/2,
					
		steps : [1+3/24], 
		onStep : (event)=>{
			document.querySelector("#orbe1").style.opacity= 0;
		},
	});//orbe1a
	
	sequencer.registerSequence({
		name : "orbe1b",
		start : 74,
		onStart : () => {
			document.querySelector("#orbe1").style.opacity= 1;
		},
	
		stop : 74,
					
		steps : [1+6/24], 
		onStep : (event)=>{
			document.querySelector("#orbe1").style.opacity= 0;
		},
	});//orbe1b
	
	sequencer.registerSequence({
		name : "orbe2a",
		start : 77+1/2,
		onStart : () => {
			document.querySelector("#orbe1").style.opacity= 1;
		},
	
		stop : 77+1/2,
					
		steps : [1+3/24], 
		onStep : (event)=>{
			document.querySelector("#orbe1").style.opacity= 0;
		},
	});//orbe2a
	
	sequencer.registerSequence({
		name : "orbe2b",
		start : 78,
		onStart : () => {
			document.querySelector("#orbe1").style.opacity= 1;
		},
	
		stop : 78,
					
		steps : [1+3/24], 
		onStep : (event)=>{
			document.querySelector("#orbe1").style.opacity= 0;
		},
	});//orbe2c
	
	sequencer.registerSequence({
		name : "orbe3a",
		start : 81+1/2,
		onStart : () => {
			document.querySelector("#orbe1").style.opacity= 1;
		},
	
		stop : 81+1/2,
					
		steps : [1+3/24], 
		onStep : (event)=>{
			document.querySelector("#orbe1").style.opacity= 0;
		},
	});//orbe3a
	
	sequencer.registerSequence({
		name : "orbe3b",
		start : 82,
		onStart : () => {
			document.querySelector("#orbe1").style.opacity= 1;
		},
	
		stop : 82,
					
		steps : [1+6/24], 
		onStep : (event)=>{
			document.querySelector("#orbe1").style.opacity= 0;
		},
	});//orbe3b
	
	sequencer.registerSequence({
		name : "masse1",
		start : 82+1/2,
		onStart : () => {
			document.querySelector("#masse1").style.opacity= 1;
		},
	
		stop : 88,
		onStop : () => {
			document.querySelector("#masse1").style.opacity= 0;
		}
	});//masse1
	
	sequencer.registerSequence({
		name : "masse2",
		start : 84,
		onStart : () => {
			document.querySelector("#masse2").style.opacity= 1;
		},
	
		stop : 88,
		onStop : () => {
			document.querySelector("#masse2").style.opacity= 0;
		}
	});//masse2
	
	sequencer.registerSequence({
		name : "masse3",
		start : 85,
		onStart : () => {
			document.querySelector("#masse3").style.opacity= 1;
		},
	
		stop : 88,
		onStop : () => {
			document.querySelector("#masse3").style.opacity= 0;
		}
	});//masse3
	
	sequencer.registerSequence({
		name : "masse4",
		start : 86,
		onStart : () => {
			document.querySelector("#masse4").style.opacity= 1;
		},
	
		stop : 88,
		onStop : () => {
			document.querySelector("#masse4").style.opacity= 0;
		}
	});//masse4
	
	sequencer.registerSequence({
		name : "masse5",
		start : 87,
		onStart : () => {
			document.querySelector("#masse5").style.opacity= 1;
		},
	
		stop : 88,
		onStop : () => {
			document.querySelector("#masse5").style.opacity= 0;
		}
	});//masse5
	
	sequencer.registerSequence({
		name : "masse6",
		start : 88,
		onStart : () => {
			document.querySelector("#masse6").style.opacity= 1;
		},
	
		stop : 88,
		onStop : () => {
			document.querySelector("#masse6").style.opacity= 0;
		}
	});//masse6
	
	//2EME PARTIE SEQUENCES NOIRES
	
	sequencer.registerSequence({
		name : "mont3visibility",
		start : 90,
		onStart : () => {
			view3.isVisible = true;
		
		},
		stop : 95,
		onStop : () => {
			view3.isVisible = false;
		},

	}); //mont3 visibility
	
	sequencer.registerSequence({
		name : "mont3",
		start : 91,
		
		stop : 95,
		onStop : () => {
			view3.moveEnable = false;
		},
		steps : [1+1/2], 
		onStep : (event)=>{
			amp += 0.5;
		}
	}); //mont3
	
	sequencer.registerSequence({
		name : "lignes3suite",
		start : 96,
		onStart : () => {
			document.querySelector("#lignes3").style.opacity= 1;
		},
	
		stop : 156,
		onStop : () => {
			document.querySelector("#lignes3").style.opacity= 0;
		}
	});//lignes3suite
	
	sequencer.registerSequence({
		name : "gardiens",
		start : 91,
	
		stop : 155, //64,
		onStop : () => {
			document.querySelector("#gardiens").style.opacity= 0;
		},
		
		steps : [1+1/24], //fluidité 
		onStep : (event)=>{
			
			let o = event.amount * 2 ; 
			o = o * o * 2 ;
			o = min(o, 1);
			document.querySelector("#gardiens").style.opacity= o;
		}
	});//gardiens anim
	
	sequencer.registerSequence({
		name : "fleur1bis",
		start : 105+1/2,
		onStart : () => {
			document.querySelector("#fleur1bis").style.opacity= 1;
		},
	
		stop : 108+1/2,
		onStop : () => {
			document.querySelector("#fleur1bis").style.opacity= 0;
		},	
	}); //fleur 1 2EME PARTIE
	
	sequencer.registerSequence({
		name : "fleur2bis",
		start : 106+1/2,
		onStart : () => {
			document.querySelector("#fleur2bis").style.opacity= 1;
		},
	
		stop : 110,
		onStop : () => {
			document.querySelector("#fleur2bis").style.opacity= 0;
		},
		}); //fleur 2 2EME PARTIE
		
	sequencer.registerSequence({
		name : "fleur3bis",
		start : 107+1/2,
		onStart : () => {
			document.querySelector("#fleur3bis").style.opacity= 1;
		},
	
		stop : 110+1/2,
		onStop : () => {
			document.querySelector("#fleur3bis").style.opacity= 0;
		},
		}); //fleur 3 2EME PARTIE
			
	sequencer.registerSequence({
		name : "fleur4bis",
		start : 108+1/2,
		onStart : () => {
			document.querySelector("#fleur4bis").style.opacity= 1;
		},
	
		stop : 111+1/2,
		onStop : () => {
			document.querySelector("#fleur4bis").style.opacity= 0;
		},	
	}); //fleur 4 2EME PARTIE
	
	sequencer.registerSequence({
		name : "pousse1bis",
		start : 109+1/2,
		onStart : () => {
			document.querySelector("#pousse1bis").style.opacity= 1;
		},
	
		stop : 113,
		onStop : () => {
			document.querySelector("#pousse1bis").style.opacity= 0;
		},	
	}); //pousse1 2EME PARTIE
	
	sequencer.registerSequence({
		name : "pousse2bis",
		start : 111,
		onStart : () => {
			document.querySelector("#pousse2bis").style.opacity= 1;
		},
	
		stop : 113,
		onStop : () => {
			document.querySelector("#pousse2bis").style.opacity= 0;

		},	
	}); //pousse2 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse3bis",
		start : 111+1/2,
		onStart : () => {
			document.querySelector("#pousse3bis").style.opacity= 1;
		},
	
		stop : 113,
		onStop : () => {
			document.querySelector("#pousse3bis").style.opacity= 0;
		},	
	}); //pousse3 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse4bis",
		start : 112+1/2,
		onStart : () => {
			document.querySelector("#pousse4bis").style.opacity= 1;
		},
	
		stop : 113,
		onStop : () => {
			document.querySelector("#pousse4bis").style.opacity= 0;

		},	
	}); //pousse4 2EME PARTIE

	sequencer.registerSequence({
	name : "pousse5bis",
		start : 114,
		onStart : () => {
			document.querySelector("#pousse5bis").style.opacity= 1;
		},
	
		stop : 154,
		onStop : () => {
			document.querySelector("#pousse5bis").style.opacity= 0;

		},	
	}); //pousse5 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse6bis",
		start : 115,
		onStart : () => {
			document.querySelector("#pousse6bis").style.opacity= 1;
		},
	
		stop : 153,
		onStop : () => {
			document.querySelector("#pousse6bis").style.opacity= 0;
		},	
	}); //pousse6 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse7bis",
		start : 116,
		onStart : () => {
			document.querySelector("#pousse7bis").style.opacity= 1;
		},
	
		stop : 153,
		onStop : () => {
			document.querySelector("#pousse7bis").style.opacity= 0;

		},	
	}); //pousse7 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse8bis",
		start : 117,
		onStart : () => {
			document.querySelector("#pousse8bis").style.opacity= 1;
		},
	
		stop : 153,
		onStop : () => {
			document.querySelector("#pousse8bis").style.opacity= 0;
		},	
	}); //pousse8 2EME PARTIE

	sequencer.registerSequence({
		name : "pousse9bis",
		start : 118,
		onStart : () => {
			document.querySelector("#pousse9bis").style.opacity= 1;
		},
	
		stop : 153,
		onStop : () => {
			document.querySelector("#pousse9bis").style.opacity= 0;

		},	
	}); //pousse9 2EME PARTIE

	sequencer.registerSequence({
		name : "oiseaux1bis",
		start : 122,
		onStart : () => {
			document.querySelector("#oiseaux1bis").style.opacity= 1;
		},
	
		stop : 123,
		onStop : () => {
			document.querySelector("#oiseaux1bis").style.opacity= 0;

		},	
	}); //oiseaux1 2EME PARTIE

	sequencer.registerSequence({
		name : "oiseaux2bis",
		start : 124,
		onStart : () => {
			document.querySelector("#oiseaux2bis").style.opacity= 1;
		},
	
		stop : 125,
		onStop : () => {
			document.querySelector("#oiseaux2bis").style.opacity= 0;

		},	
	}); //oiseaux2 2EME PARTIE

	sequencer.registerSequence({
		name : "oiseaux3bis",
		start : 126,
		onStart : () => {
			document.querySelector("#oiseaux3bis").style.opacity= 1;
		},
	
		stop : 150,
		onStop : () => {
			document.querySelector("#oiseaux3bis").style.opacity= 0;
		},	
	}); //oiseaux3 2EME PARTIE

	sequencer.registerSequence({
		name : "orbe1bis",
		start : 130,
		onStart : () => {
			document.querySelector("#orbe1bis").style.opacity= 1;		
		},
	
		stop : 147,
		onStop : () => {
			document.querySelector("#orbe1bis").style.opacity= 0;
		},	
	}); //orbe1 2EME PARTIE

	sequencer.registerSequence({
		name : "orbe2bis",
		start : 134,
		onStart : () => {
			document.querySelector("#orbe2bis").style.opacity= 1;
		},
	
		stop : 145,
		onStop : () => {
			document.querySelector("#orbe2bis").style.opacity= 0;

		},	
	}); //orbe2 2EME PARTIE

	sequencer.registerSequence({
		name : "orbe3bis",
		start : 138,
		onStart : () => {
			document.querySelector("#orbe3bis").style.opacity= 1;
		},
	
		stop : 148,
		onStop : () => {
			document.querySelector("#orbe3bis").style.opacity= 0;

		},	
	}); //orbe3 2EME PARTIE

	sequencer.registerSequence({
		name : "nuage1bis",
		start : 139,
		onStart : () => {
			document.querySelector("#nuage1bis").style.opacity= 1;
		},
	
		stop : 149,
		onStop : () => {
			document.querySelector("#nuage1bis").style.opacity= 0;

		},	
	}); //nuage1 2EME PARTIE

	sequencer.registerSequence({
		name : "nuage2bis",
		start : 139,
		onStart : () => {
			document.querySelector("#nuage2bis").style.opacity= 1;
		},
	
		stop : 149,
		onStop : () => {
			document.querySelector("#nuage2bis").style.opacity= 0;

		},	
	}); //nuage2 2EME PARTIE

	sequencer.registerSequence({
		name : "oiseauxdisp1",
		start : 149,
		onStart : () => {
			document.querySelector("#oiseaux1f").style.opacity= 1;
		},
	
		stop : 151,
		onStop : () => {
			document.querySelector("#oiseaux1f").style.opacity= 0;

		},	
	}); //oiseaux disp 1

	sequencer.registerSequence({
		name : "oiseauxdisp2",
		start : 150,
		onStart : () => {
			document.querySelector("#oiseaux2f").style.opacity= 1;
		},
	
		stop : 152,
		onStop : () => {
			document.querySelector("#oiseaux2f").style.opacity= 0;

		},	
	}); //oiseaux disp 2

	sequencer.registerSequence({
		name : "fleurfinale",
		start : 156,
		onStart : () => {
			document.querySelector("#fleur1f").style.opacity= 1;
		},
	
		stop : 156,
		onStop : () => {
			document.querySelector("#fleur1f").style.opacity= 0;

		},	
	}); //fleur finale1
	
	sequencer.registerSequence({
		name : "fleurfinale2",
		start : 157,
		onStart : () => {
			document.querySelector("#fleur2f").style.opacity= 1;
		},
	
		stop : 157,
		onStop : () => {
			document.querySelector("#fleur2f").style.opacity= 0;
		},	
	}); //fleur finale2
	
	sequencer.registerSequence({
		name : "fleurfinale3",
		start : 158,
		onStart : () => {
			document.querySelector("#fleur3f").style.opacity= 1;
		},
	
		stop : 158,
		onStop : () => {
			document.querySelector("#fleur3f").style.opacity= 0;

		},	
	}); //fleur finale3
	
	sequencer.registerSequence({
		name : "text1",
		start : 162,
		onStart : () => {
			document.querySelector("#text1").style.opacity= 1;

		},
		stop : 171,
		onStop : () => {
			document.querySelector("#text1").style.opacity= 0;
		},
		}); 
	
	sequencer.registerSequence({
		name : "text2",
		start : 164,
		onStart : () => {
			document.querySelector("#text2").style.opacity= 1;

		},
		stop : 171,
		onStop : () => {
			document.querySelector("#text2").style.opacity= 0;
		},
		}); 
	
	sequencer.registerSequence({
		name : "logo1",
		start : 166,
		onStart : () => {
			document.querySelector("#logo1").style.opacity= 1;

		},
		stop : 171, 
		onStop : () => {
			document.querySelector("#logo1").style.opacity= 0;
		},
		}); 
	
	sequencer.registerSequence({
		name : "logo2",
		start : 166,
		onStart : () => {
			document.querySelector("#logo2").style.opacity= 1;

		},
		stop : 171,
		onStop : () => {
			document.querySelector("#logo2").style.opacity= 0;
		},
		}); 
	}

	
function draw(){
	sequencer.update();
	background(bgColor);
	
	view.draw();
	lights1.draw();
	lights2.draw();
	view2.draw();
	lignes2.draw();
	view3.draw();
	brouilli.draw();
	
	}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}