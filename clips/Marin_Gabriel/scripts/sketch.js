/*----------------------------------------*\
  beakerProject - sketch.js
  @author Gabriel Marin Hincapie 
  @Date:   2023-03-06
  @Last Modified time: 2023-03-06 17:16:50
\*----------------------------------------*/
let audioPath = "./assets/audio/ÁGUA DE BEBER (feat. Ugovhb) (1).mp3";

let song;
let sequencer;
let superAnim;
let mesAnims=[];
let circles = [];
let colorStart, colorEnd;


function preload() {
    song = loadSound(audioPath);
  }


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB);
    fft = new p5.FFT();
    song.play();
    
    colorStart = color(random(360), 70, 100, 1);
    colorEnd = color(random(360), 70, 100, 1);


                     
  barWidth = width / (numBars * 2);
  barSpacing = barWidth / 10;
  maxHeight = height - 50;

   
  radius2 = min(width, height);
  angleSpeed = 0.0010;;
  
  // Initialisation des hauteurs et vitesses des barres
  for (let i = 0; i < numBars; i++) {
    barHeight[i] = minHeight;
    barSpeeds[i] = random(5, 20);
  }

    mesAnims.push(new Anim7(0,0));//0
    mesAnims.push(new Anim1(0,0));//1
    mesAnims.push(new Anim2(0,0));//2
    mesAnims.push(new Anim3(0,0));//3
    mesAnims.push(new Anim4(0,0));//4
    mesAnims.push(new Anim5(0,0));//5
    mesAnims.push(new Anim6(0,0));//6
    mesAnims.push(new Anim8(0,0));//7
    mesAnims.push(new Anim9(0,0));//8
    mesAnims.push(new Anim10(0,0));//9


    sequencer = new Sequencer(audioPath, 132 ,false);
    sequencer.player.audio.volume = 0;

    sequencer.registerSequence({
        name : "intro",
        start:1,
        stop:51,
        onStart : (event) => {
            console.log(event)
            mesAnims[0].setDrawable(true)
            mesAnims[1].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[0].setDrawable(false);
            mesAnims[1].setDrawable(false);
        },
     });
     sequencer.registerSequence({
        name : "beatdrop",
        start:52,
        stop:359,
        onStart : (event) => {
            console.log(event)
            mesAnims[6].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[6].setDrawable(false);
        },
     });

     sequencer.registerSequence({
        name : "AGUA DI BEBER1",
        start:52,
        stop:103,
        onStart : (event) => {
            console.log(event)
            mesAnims[9].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[9].setDrawable(false);
        },
     });
     sequencer.registerSequence({
        name : "AGUA DI BEBER2",
        start:257,
        stop:308,
        onStart : (event) => {
            console.log(event)
            mesAnims[9].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[9].setDrawable(false);
        },
     });
     sequencer.registerSequence({
        name : "trumpets1",
        start:103,
        stop:127,
        onStart : (event) => {
            console.log(event)
            mesAnims[8].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[8].setDrawable(false);
        },
     });
     sequencer.registerSequence({
        name : "trumpets2",
        start:130,
        stop:150,
        onStart : (event) => {
            console.log(event)
            mesAnims[7].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[7].setDrawable(false);
        },
     }); 
     sequencer.registerSequence({
        name : "2emechant",
        start:103,
        stop:205,
        onStart : (event) => {
            console.log(event)
            mesAnims[4].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[4].setDrawable(false);
        },
     }); 
     sequencer.registerSequence({
        name : "2emechant",
        start:308,
        stop:360,
        onStart : (event) => {
            console.log(event)
            mesAnims[4].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[4].setDrawable(false);
        },
     }); 
     sequencer.registerSequence({
        name : "lalalal",
        start:308,
        stop:360,
        onStart : (event) => {
            console.log(event)
            mesAnims[5].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[5].setDrawable(false);
        },
     }); 
     sequencer.registerSequence({
        name : "trumpets",
        start:130,
        stop:150,
        onStart : (event) => {
            console.log(event)
            mesAnims[8].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[8].setDrawable(false);
        },
     });
     sequencer.registerSequence({
        name : "trumpets",
        start:155,
        stop:177,
        onStart : (event) => {
            console.log(event)
            mesAnims[7].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[7].setDrawable(false);
        },
     });

}





function draw(){
background(0);

  
    sequencer.update();
   for (let anim of mesAnims){
    if(anim.isDrawable()){
        anim.draw();
    }
   }


}

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}