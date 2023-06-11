/*----------------------------------------*\
  beakerProject - sketch.js
  @author Gabriel Marin Hincapie 
  @Date:   2023-03-06
  @Last Modified time: 2023-03-06 17:16:50
\*----------------------------------------*/
let audioPath = "./assets/audio/6TH SENSE.mp3";

let sequencer;
let superAnim;
let mesAnims=[];
let circles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    pixelDensity(1);
    colorMode(HSB, 1);
    
    for (let n = 0; n < maxiterations; n++) {
    // Gosh, we could make fancy colors here if we wanted
    let hu = sqrt(n / maxiterations);
    let col = color(hu, 150, 150);
    colorsRed[n] = red(col); 
    colorsGreen[n] = green(col);
    colorsBlue[n] = blue(col); 
  }
    
    
        
    
    
    
    
    
    mesAnims.push(new Anim1(0,0));

    sequencer = new Sequencer(audioPath, 132,false);
    sequencer.registerSequence({
        name : "intro",
        start:1,
        stop:300,
        onStart : (event) => {
            console.log(event)
            mesAnims[0].setDrawable(true)
        },
        onStep : (event) => {
            console.log(event)
            },
        onStop : (event) => {
            console.log(event)
            mesAnims[0].setDrawable(false);
        },
    });
}

function draw(){

 background(255);
    
 
    
    
    
    
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