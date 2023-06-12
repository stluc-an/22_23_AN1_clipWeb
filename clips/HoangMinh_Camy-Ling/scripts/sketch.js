/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:249
  @Last Modified time: 2023-04-03 20:46:34
\*----------------------------------------*/
let audioPath = "./assets/audio/six_pieds.mp3";
let sequencer;

let mesAnims = [];

function preload(){

	sequencer = new Sequencer(audioPath, 120, false); //120 = bpm


	mesAnims.push(
			new Animator({
				//0
					imgPatternAddress : "./assets/images/tattooedMan/frame[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 48, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//1
			new Animator({
				imgPatternAddress : "./assets/images/tattooedMan2/frame[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 24, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//2
			new Animator({
				imgPatternAddress : "./assets/images/eyes/frame[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 24, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//3
			new Animator({
				imgPatternAddress : "./assets/images/heads2/frame[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 24, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//4
			new Animator({
				imgPatternAddress : "./assets/images/glace/glaceFirst/frame[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 48, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//5
			new Animator({
				imgPatternAddress : "./assets/images/glace/frame[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 48, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//6
			new Animator({
				imgPatternAddress : "./assets/images/heads/frame[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 48, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//7
			new Animator({
				imgPatternAddress : "./assets/images/glace2/frame[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 24, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//8
			new Animator({
				imgPatternAddress : "./assets/images/fond/1/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//9 yeux et tête
			new Animator({
				imgPatternAddress : "./assets/images/fond/2/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//10 tête et glace
			new Animator({
				imgPatternAddress : "./assets/images/fond/3/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//11 glace
			new Animator({
				imgPatternAddress : "./assets/images/fond/4/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//12 yeux tête fille
			new Animator({
				imgPatternAddress : "./assets/images/fond/5/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),
				//13 tatoo tête fille
			new Animator({
				imgPatternAddress : "./assets/images/fond/6/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),

				//14 yeux
				new Animator({
				imgPatternAddress : "./assets/images/fond/7/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),

							//15 yeux
				new Animator({
				imgPatternAddress : "./assets/images/fond/8/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
			}),

				//16 fille têtes
				new Animator({
					imgPatternAddress : "./assets/images/fond/8/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),		

				//17 six pieds sous terre
				new Animator({
					imgPatternAddress : "./assets/images/fond/9/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),			
				

				//18 dessin GRAND bidon
				new Animator({
					imgPatternAddress : "./assets/images/fond/10/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),				
				
				//19 phrase "Avec un bidon"
				new Animator({
					imgPatternAddress : "./assets/images/fond/11/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),		
				
				//20 phrase "D'essence"
				new Animator({
					imgPatternAddress : "./assets/images/fond/12/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),		
				
			
				//21 tu t'enfonces dans tes mensonges
				new Animator({
					imgPatternAddress : "./assets/images/fond/13/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),				

				//22 tu retourneras pas la situation
				new Animator({
					imgPatternAddress : "./assets/images/fond/14/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),				

				//23 on pourrait juste faire semblant
				new Animator({
					imgPatternAddress : "./assets/images/fond/15/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),		
				
				//24 faire comme avant que rien en change
				new Animator({
					imgPatternAddress : "./assets/images/fond/16/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
					imgCount : 1, //nbr d'images dans la séquence
					firstImageNum : 0,
					numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),			

				//25 mais NON
				new Animator({
				imgPatternAddress : "./assets/images/fond/17/fond[IMG_NUM].png", //chemin séquence png/jpeg et [IMG_NUM] va importer le reste de la séquence
				imgCount : 1, //nbr d'images dans la séquence
				firstImageNum : 0,
				numberLength : 4 //le nombre de chiffres qu'il y a dans le nom ex : img_01 = 2, img_001 = 3
				}),			
	);


}

function setup() {

	createCanvas(window.innerWidth, window.innerHeight);

	sequencer.registerSequence({
		name : "fond1",
		start : 3,
		stop : 33,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[8].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond2",
		start :34,
		stop : 61,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[9].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[9].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[9].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond3",
		start :62,
		stop : 63,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[12].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[12].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[12].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond4",
		start :64,
		stop : 69,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[10].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[10].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[10].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond5",
		start :70,
		stop : 73,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "fond6",
		start :74,
		stop : 77,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[10].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[10].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[10].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond7",
		start :78,
		stop : 81,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "fond8",
		start :82,
		stop : 85,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[10].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[10].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[10].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond9",
		start :86,
		stop : 89,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "fondbidon",
		start :95,
		stop : 96,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[18].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[18].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[18].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "avec un bidon",
		start :90,
		stop : 92,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[19].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[19].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[19].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "d'Essence",
		start :93,
		stop : 94,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[20].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[20].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[20].setDrawable(false);
		},

	});

	

	
	sequencer.registerSequence({
		name : "fond10",
		start :86,
		stop : 126,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	
	sequencer.registerSequence({
		name : "fond11",
		start :86,
		stop : 89,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "fond12",
		start : 137,
		stop : 140,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[8].setDrawable(false);
		},

	});



	sequencer.registerSequence({
		name : "fond14",
		start : 97,
		stop : 110,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[14].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[14].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[14].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond15",
		start : 111,
		stop : 112,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[8].setDrawable(false);
		},

	});


	sequencer.registerSequence({
		name : "fond16",
		start : 113,
		stop : 126,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[14].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[14].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[14].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond17",
		start : 127,
		stop : 129,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[8].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond18",
		start : 132,
		stop : 133,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[8].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond19",
		start : 136,
		stop : 140,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[8].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond13",
		start : 141,
		stop : 168,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[14].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[14].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[14].setDrawable(false);
		},

	});


	sequencer.registerSequence({
		name : "fond20",
		start : 169,
		stop : 177,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[21].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[21].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[21].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond21",
		start : 178,
		stop : 185,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[22].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[22].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[22].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond22",
		start : 186,
		stop : 193,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[23].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[23].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[23].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond23",
		start : 194,
		stop : 197,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[24].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[24].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[24].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond233",
		start : 198,
		stop : 200,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[25].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[25].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[25].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond24",
		start : 201,
		stop : 206,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[10].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[10].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[10].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond25",
		start : 207,
		stop : 210,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "fond26",
		start : 211,
		stop : 214,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[10].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[10].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[10].setDrawable(false);
		},

	});


	sequencer.registerSequence({
		name : "fond27",
		start : 215,
		stop : 218,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "fond28",
		start : 219,
		stop : 222,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[10].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[10].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[10].setDrawable(false);
		},

	});


	sequencer.registerSequence({
		name : "fond29",
		start : 223,
		stop : 225,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "fond30",
		start : 233,
		stop : 246,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[14].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[14].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[14].setDrawable(false);
		},

	});

	sequencer.registerSequence({
		name : "fond31",
		start : 247,
		stop : 250,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[8].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[8].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[8].setDrawable(false);
		},

	});


	sequencer.registerSequence({
		name : "fond32",
		start : 251,
		stop : 263,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[14].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[14].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[14].setDrawable(false);
		},

	});


	sequencer.registerSequence({
		name : "fond33",
		start : 264,
		stop : 267,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
		onStart : (event) => {
			mesAnims[17].setDrawable(true);
		},
		onStep : (event) => {
			mesAnims[17].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[17].setDrawable(false);
		},

	});



	sequencer.registerSequence({
		name : "tatooedMan1",
		start : 34,
		stop : 37,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan2",
		start : 38,
		stop : 41,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	sequencer.registerSequence({
		name : "tatooedMan3",
		start : 42,
		stop : 45,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan4",
		start : 46,
		stop : 49,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan5",
		start : 50,
		stop : 53,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan6",
		start : 54,
		stop : 57,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan7",
		start : 58,
		stop : 61,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan8",
		start : 62,
		stop : 65,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "tatooedMan9",
		start : 66,
		stop : 69,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "tatooedMan10",
		start : 70,
		stop : 73,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "tatooedMan11",
		start : 74,
		stop : 77,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "tatooedMan12",
		start : 78,
		stop : 81,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "tatooedMan13",
		start : 82,
		stop : 85,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan14",
		start : 86,
		stop : 89,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan15",
		start : 201,
		stop : 202,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan16",
		start : 203,
		stop : 206,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan17",
		start : 207,
		stop : 210,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	sequencer.registerSequence({
		name : "tatooedMan18",
		start : 211,
		stop : 214,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan19",
		start : 215,
		stop : 218,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan20",
		start : 219,
		stop : 222,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tatooedMan21",
		start : 223,
		stop : 225,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	

	sequencer.registerSequence({
		name : "tattoedMan2.2",
		start : 97,
		stop : 100,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattooedMan2.3",
		start : 101,
		stop : 104,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.4",
		start : 105,
		stop : 108,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.5",
		start : 109,
		stop : 110,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "tattoedMan2.6",
		start : 113,
		stop : 116,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.7",
		start : 117,
		stop : 120,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.8",
		start : 121,
		stop : 124,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "tattoedMan2.9",
		start : 125,
		stop : 126,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.10",
		start : 141,
		stop : 144,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "tattoedMan2.11",
		start : 145,
		stop : 148,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "tattoedMan2.12",
		start : 149,
		stop : 152,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "tattoedMan2.13",
		start : 153,
		stop : 156,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.14",
		start : 157,
		stop : 160,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.15",
		start : 161,
		stop : 164,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.16",
		start : 165,
		stop : 168,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "tattoedMan2.17",
		start : 233,
		stop : 236,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.18",
		start : 237,
		stop : 240,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "tattoedMan2.19",
		start : 241,
		stop : 244,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

		
	sequencer.registerSequence({
		name : "tattoedMan2.20",
		start : 245,
		stop : 246,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

		
	sequencer.registerSequence({
		name : "tattoedMan2.21",
		start : 251,
		stop : 254,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.22",
		start : 255,
		stop : 258,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "tattoedMan2.23",
		start : 259,
		stop : 263,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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










	sequencer.registerSequence({
		name : "eyes",
		start : 65,
		stop : 66,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "eyes1",
		start : 67,
		stop : 68,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "eyes2",
		start : 69,
		stop :70,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "eyes3",
		start : 71,
		stop :72,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "eyes4",
		start : 73,
		stop :74,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	
	sequencer.registerSequence({
		name : "eyes5",
		start : 75,
		stop :76,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	sequencer.registerSequence({
		name : "eyes6",
		start : 77,
		stop :78,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	sequencer.registerSequence({
		name : "eyes7",
		start : 79,
		stop :80,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	sequencer.registerSequence({
		name : "eyes8",
		start : 81,
		stop :82,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "eyes9",
		start : 83,
		stop :84,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "eyes10",
		start : 85,
		stop :86,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "eyes11",
		start : 87,
		stop :89,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "eyes12",
		start : 201,
		stop : 202,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "eyes13",
		start : 203,
		stop : 204,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "eyes14",
		start : 205,
		stop :206,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "eyes15",
		start : 207,
		stop :208,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "eyes16",
		start : 209,
		stop :210,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	
	sequencer.registerSequence({
		name : "eyes17",
		start : 211,
		stop :212,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	sequencer.registerSequence({
		name : "eyes18",
		start : 213,
		stop :214,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	sequencer.registerSequence({
		name : "eyes19",
		start : 215,
		stop :216,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	
	sequencer.registerSequence({
		name : "eyes20",
		start : 217,
		stop :218,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "eyes21",
		start : 219,
		stop :220,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "eyes22",
		start : 221,
		stop :222,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "eyes23",
		start : 223,
		stop :225,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	
	
		
	sequencer.registerSequence({
		name : "glace2.2",
		start : 97,
		stop :100,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
		
	sequencer.registerSequence({
		name : "glace2.3",
		start : 101,
		stop :104,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
		
	sequencer.registerSequence({
		name : "glace2.4",
		start : 105,
		stop :108,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
		
	sequencer.registerSequence({
		name : "glace2.5",
		start : 109,
		stop :110,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
		
	sequencer.registerSequence({
		name : "glace2.6",
		start : 113,
		stop :116,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
		
	sequencer.registerSequence({
		name : "glace2.7",
		start : 117,
		stop :120,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
			
	sequencer.registerSequence({
		name : "glace2.8",
		start : 121,
		stop :124,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.9",
		start : 125,
		stop :126,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

				
	sequencer.registerSequence({
		name : "glace2.10",
		start : 141,
		stop :144,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	sequencer.registerSequence({
		name : "glace2.11",
		start : 145,
		stop :148,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.12",
		start : 149,
		stop :152,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.13",
		start : 153,
		stop :156,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.14",
		start : 157,
		stop :160,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.15",
		start : 161,
		stop :164,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.16",
		start : 165,
		stop :168,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.17",
		start : 233,
		stop :236,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.18",
		start : 237,
		stop :240,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "glace2.19",
		start : 241,
		stop :244,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	sequencer.registerSequence({
		name : "glace2.20",
		start : 245,
		stop :246,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "glace2.21",
		start : 251,
		stop :254,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.22",
		start : 255,
		stop :258,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2.23",
		start : 259,
		stop :263,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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







	sequencer.registerSequence({
		name : "glaceFirst",
		start : 31,
		stop :33,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace1",
		start : 34,
		stop :37,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace2",
		start : 38,
		stop :41,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "glace3",
		start : 42,
		stop :45,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "glace4",
		start : 46,
		stop :49,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "glace5",
		start : 50,
		stop :53,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "glace6",
		start : 54,
		stop :57,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	
	sequencer.registerSequence({
		name : "glace7",
		start : 58,
		stop :61,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	sequencer.registerSequence({
		name : "houhou1",
		start : 70,
		stop :73,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "houhou2",
		start : 78,
		stop :81,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "houhou3",
		start : 86,
		stop :89,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "houhou4",
		start : 207,
		stop :210,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "houhou5",
		start : 215,
		stop :218,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "houhou6",
		start : 223,
		stop :225,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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



	sequencer.registerSequence({
		name : "heads2.1",
		start : 97,
		stop :100,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	sequencer.registerSequence({
		name : "heads2.2",
		start : 101,
		stop :104,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	sequencer.registerSequence({
		name : "heads2.3",
		start : 105,
		stop :108,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	sequencer.registerSequence({
		name : "heads2.4",
		start : 109,
		stop :110,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads2.5",
		start : 113,
		stop :116,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads2.6",
		start : 117,
		stop :120,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads2.7",
		start : 121,
		stop :124,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads2.8",
		start : 125,
		stop :126,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	sequencer.registerSequence({
		name : "heads.9",
		start : 141,
		stop :144,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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


	sequencer.registerSequence({
		name : "heads.10",
		start : 145,
		stop :148,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.11",
		start : 149,
		stop :152,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.12",
		start : 153,
		stop :156,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.13",
		start : 157,
		stop :160,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.14",
		start : 161,
		stop :164,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.15",
		start : 165,
		stop :168,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.16",
		start : 233,
		stop :236,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	sequencer.registerSequence({
		name : "heads.17",
		start : 237,
		stop :240,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.18",
		start : 241,
		stop :244,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.19",
		start : 245,
		stop :246,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.20",
		start : 251,
		stop :254,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.21",
		start : 255,
		stop :258,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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

	sequencer.registerSequence({
		name : "heads.22",
		start : 259,
		stop :263,
		steps : new Array(24).fill(0).map((_, n)=>1+n/24),
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
	background(22424);
	sequencer.update();

	for(let anim of mesAnims){
		if(anim.isDrawable()){
			anim.draw();
		}
	}

}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
};
