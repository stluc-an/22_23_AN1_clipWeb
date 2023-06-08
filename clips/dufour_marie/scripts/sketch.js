let audioPath = "./assets/audio/Yeule/Glitch Princess/Mandy/Yeule_Mandy.mp3";
let sequencer;

let lyrics = [];
let cmiel = [];
let times = [];
let currentIndex = 0;
let sentenceToDisplay = "";
let sentenceAlpha = 0;
var bg;
var bgbleu;
let cmielDefilant;

let filtreblanc = false;
let filtrenoir = false;
let endnoir = false;

let endtext = false;

function preload() {
  // charge le fichier de paroles
  lyrics = loadStrings('assets/lyrics.txt');
  cmiel =  loadStrings('assets/cmiel.txt');
  // charge le fichier de temps
  times = loadStrings('assets/times.txt');
  bg = loadImage("assets/photo/yeulemauve.jpg")
  bgbleu = loadImage("assets/photo/yeulebleu.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
//   AudioKeys.setup();

  sequencer = new Sequencer(audioPath, 120);
  
  cmielDefilant = new Defile(cmiel);
  for(let i = 0 ; i < lyrics.length - 1 ; i++){
    let [startStep, sentence] = lyrics[i].split("\t");
    let [stopStep] = lyrics[i+1].split("\t");


  sequencer.registerSequence({
    name: 'lyrics_'+i,
    steps:[1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
    start:parseInt(startStep),
    stop: parseInt(stopStep),
    onStart: (event)=>{
      sentenceToDisplay = sentence;
        console.log(event)
      },
    onStep : (event)=>{
      sentenceAlpha = 255*2*(0.5-abs(event.amount-0.5))
      }
    });
  }

  sequencer.registerSequence({
    name : "clignote",
    start:158,
    stop:214,
    steps: [1, 1+1/4, 1+2/4, 1+3/4], 
    onStart : (event) => {
      console.log(event)
      filtreblanc = true;
      background(bg);
    },
    
    onStep : (event) => {
      if(filtreblanc){
        filtreblanc = false;
        filtrenoir = true;
      } 
      else{
        filtreblanc = true;
        filtrenoir = false;
      }
    },
    onStop : (event) => {
      console.log(event)
      filtreblanc = false;
      filtrenoir = false;
    },
    
  });


  sequencer.registerSequence({
    name : "nolove",
    start:246,
    stop:278,
    onStart : (event) => {
      console.log(event)
      bg = bgbleu;
    },

    onStop : (event) => {
      console.log(event)
      
    },
    
  });

  sequencer.registerSequence({
    name : "end",
    start:278,
    stop:1000,
    onStart : (event) => {
      console.log(event)
      endnoir= true;
      endtext= true;
    },

    onStop : (event) => {
      console.log(event)
      endnoir= false;
    },
    
  });

}

function draw() {
  console.log("event")
  sequencer.update();
  
  background(bg);

  textSize(32);
  textAlign(LEFT, TOP);
  fill(255, sentenceAlpha);
  text(sentenceToDisplay, 10, 15);

  fill(0, 0, 0);
  var myFont = textFont("Font");
  textFont(myFont);
  drawingContext.shadowColor = color(255, 50, 255, 255);
  drawingContext.shadowBlur = 30;
  cmielDefilant.draw();
  
  if(filtreblanc){
    fill(255,0,0, 28);
    rect(0,0,windowWidth,windowHeight);
  }
  if(filtrenoir){
    fill(0,0,0, 28);
    rect(0,0,windowWidth,windowHeight);
  }

  if(endnoir){
    fill(0);
    rect(0,0,windowWidth,windowHeight);
  }

  if(endtext){
    var myFont = textFont("Arial");
    textSize(100);
    fill(0);
    text("Mandy", width / 2, height / 2);
  } 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight) 
}