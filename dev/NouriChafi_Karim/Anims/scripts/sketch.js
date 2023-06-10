let audioPath = "./assets/audio/a.mp3";
let sequencer;
let mesAnims = [] ;


function preload() {
 	title = loadImage('./assets/title.png');
	img1 = loadImage('./assets/Untitled-1.png');
	img2 = loadImage('./assets/Untitled-2.png');
	img3 = loadImage('./assets/Untitled-3.png');
	img4 = loadImage('./assets/Untitled-4.png');
	img5 = loadImage('./assets/Untitled-5.png');
	img6 = loadImage('./assets/Untitled-6.png');
	img7 = loadImage('./assets/Untitled-7.png');
	img8 = loadImage('./assets/Untitled-8.png');
	img9 = loadImage('./assets/Untitled-9.png');
	img10 = loadImage('./assets/Untitled-10.png');
	img11 = loadImage('./assets/Untitled-11.png');
	img12 = loadImage('./assets/Untitled-12.png');
	img13 = loadImage('./assets/Untitled-13.png');
	img14 = loadImage('./assets/Untitled-14.png');
	img15 = loadImage('./assets/Untitled-15.png');
	img16 = loadImage('./assets/Untitled-16.png');
	img17 = loadImage('./assets/Untitled-17.png');
	img18 = loadImage('./assets/Untitled-18.png');
	img19 = loadImage('./assets/Untitled-19.png');
	img20 = loadImage('./assets/Untitled-20.png');
	img21 = loadImage('./assets/Untitled-21.png');
	img22 = loadImage('./assets/Untitled-22.png');
	img23 = loadImage('./assets/Untitled-23.png');
	img24 = loadImage('./assets/Untitled-24.png');
	img25 = loadImage('./assets/Untitled-25.png');
	img26 = loadImage('./assets/Untitled-26.png');
	img27 = loadImage('./assets/Untitled-27.png');
	img28 = loadImage('./assets/Untitled-28.png');
	img29 = loadImage('./assets/Untitled-29.png');
	img30 = loadImage('./assets/Untitled-30.png');
	img31 = loadImage('./assets/Untitled-31.png');
	img32 = loadImage('./assets/Untitled-32.png');
	img33 = loadImage('./assets/Untitled-33.png');
	img34 = loadImage('./assets/Untitled-34.png');
	img35 = loadImage('./assets/Untitled-35.png');
	img36 = loadImage('./assets/Untitled-36.png');
	img37 = loadImage('./assets/Untitled-37.png');
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	mesAnims.push(new Anim1(windowWidth/2, windowHeight/2));
	
    mesAnims.push(new Anim2(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim3(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim4(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim5(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim6(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim7(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim8(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim9(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim10(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim11(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim12(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim13(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim14(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim15(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim16(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim17(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim18(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim19(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim20(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim21(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim22(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim23(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim24(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim25(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim26(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim27(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim28(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim29(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim30(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim31(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim32(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim33(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim34(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim35(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim36(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim37(windowWidth/2, windowHeight/2));
	
	mesAnims.push(new Anim38(windowWidth/2, windowHeight/2));
	
	
	
	sequencer = new Sequencer(audioPath, 93, true);
    sequencer.registerSequence({
       
		name : "intrerro",
        start:1,
        stop:31,
       
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[0].setdrawable(true);
			
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[0].setdrawable(false);
		
        },
    });
	
	
	
	 sequencer.registerSequence({
       
		name : "Deuxio",
        start:32,
        stop:36,
       
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[1].setdrawable(true);

        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[1].setdrawable(false);
		
        },
    });
	
	    sequencer.registerSequence({
       
		name : "trois",
        start:37,
        stop:40,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[2].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[2].setdrawable(false);
		
        },
	  });
	
	sequencer.registerSequence({
	
		name : "quatre",
        start:41,
        stop:44,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[3].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[3].setdrawable(false);
		
        },
	  });	
	
	
		sequencer.registerSequence({
	
		name : "five",
        start:45,
        stop:49,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[4].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[4].setdrawable(false);
		
        },
	  });	
	
	
		sequencer.registerSequence({
	
		name : "6",
        start:49,
        stop:52,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[5].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[5].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "7",
        start:53,
        stop:57,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[6].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[6].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "8",
        start:58,
        stop:63,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[7].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[7].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "9",
        start:64,
        stop:69,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[8].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[8].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "10",
        start:70,
        stop:75,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[9].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[9].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "11",
        start:76,
        stop:80,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[10].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[10].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "12",
        start:81,
        stop:86,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[11].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[11].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "13",
        start:87,
        stop:92,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[12].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[12].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "14",
        start:93,
        stop:97,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[13].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[13].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "15",
        start:98,
        stop:105,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[14].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[14].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "16",
        start:106,
        stop:112,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[15].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[15].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "17",
        start:113,
        stop:116,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[16].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[16].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "18",
        start:117,
        stop:120,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[17].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[17].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "19",
        start:121,
        stop:128,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[18].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[18].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "20",
        start:129,
		stop:136,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[19].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[19].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "21",
        start:137,
        stop:143,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[20].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[20].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "22",
        start:144,
        stop:148,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[21].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[21].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({

		name : "23",
        start:149,
        stop:160,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[22].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[22].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "24",
        start:161,
        stop:168,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[23].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[23].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "25",
        start:169,
        stop:177,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[24].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[24].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "26",
        start:178,
        stop:184,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[25].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[25].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "27",
        start:185,
        stop:192,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[26].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[26].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "28",
        start:193,
        stop:198,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[27].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[27].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "29",
        start:198,
        stop:205,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[28].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[28].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "30",
        start:208,
        stop:215,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[29].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[29].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "31",
        start:216,
        stop:225,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[30].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[30].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "32",
        start:226,
        stop:233,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[31].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[31].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "33",
        start:234,
        stop:241,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[32].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[32].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "34",
        start:242,
        stop:247,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[33].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[33].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "35",
        start:248,
        stop:252,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[34].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[34].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "36",
        start:253,
        stop:257,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[35].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[35].setdrawable(false);
		
        },
	  });	
		
	
		sequencer.registerSequence({
	
		name : "37",
        start:258,
        stop:271,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[36].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[36].setdrawable(false);
		
        },
	  });	
	
	sequencer.registerSequence({
	
		name : "38",
        start:272,
        stop:296,
		onStart : (event) => {
            console.log(event)
			background(0);
			mesAnims[37].setdrawable(true);
	
        },
       
		onStop : (event) => {
            console.log(event)
			mesAnims[37].setdrawable(false);
		
        },
	  });	
		
	
	
	
}

function draw(){

	sequencer.update();
	for(let anim of mesAnims){
		if(anim.isdrawable())
		anim.draw();
	}
}

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}