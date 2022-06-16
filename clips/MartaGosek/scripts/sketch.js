/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/Be My Game Boy (feat S3rl).mp4";
let sequencer;
let bgColor = 0;  




function setup() {	
	createCanvas(windowHeight, windowWidth, WEBGL);
  noStroke();
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

  sequencer = new Sequencer(audioPath, 132,false);

	sequencer.registerSequence({
    name : "un",
    start : 1,
    stop : 11,

    onStart : (event) => {
      console.log(event)
    },
    onStep : (event) => {
      console.log(event)
      if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }
    },
    onStop : (event) => {
      console.log(event)
    },
    
  });

  sequencer.registerSequence({
  name : "deux",
  start : 13,
  stop : 17,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }

  }
}); 

  sequencer.registerSequence({
    name : "trois",
    start : 17,
    stop : 28,

    onStart : (event) => {
      console.log(event)
    },
    onStep : (event) => {
      console.log(event)
      if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }
    },
    onStop : (event) => {
      console.log(event)
    },
    
  });

  sequencer.registerSequence({
  name : "quatre",
  start : 28,
  stop : 60,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }

  }
}); 

sequencer.registerSequence({
    name : "cinq",
    start : 60,
    stop : 64,

    onStart : (event) => {
      console.log(event)
    },
    onStep : (event) => {
      console.log(event)
      if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }
    },
    onStop : (event) => {
      console.log(event)
    },
    
  });

sequencer.registerSequence({
    name : "six",
    start : 64,
    stop : 93,
  });

sequencer.registerSequence({
    name : "sept",
    start : 93,
    stop : 95,

    onStart : (event) => {
      console.log(event)
    },
    onStep : (event) => {
      console.log(event)
      if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }
    },
    onStop : (event) => {
      console.log(event)
    },
    
  });

sequencer.registerSequence({
    name : "huit",
    start : 95,
    stop : 107,
  });

sequencer.registerSequence({
    name : "neuf",
    start : 107,
    stop : 111,

    onStart : (event) => {
      console.log(event)
    },
    onStep : (event) => {
      console.log(event)
      if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }
    },
    onStop : (event) => {
      console.log(event)
    },
    
});

sequencer.registerSequence({
  name : "vightetdeux",
  start : 123,
  stop : 126,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }

  }
}); 

sequencer.registerSequence({
  name : "dix",
  start : 126,
  stop : 157,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = color(150,0,150);
      }else{
        bgColor = 0;
      }

  }
}); 

sequencer.registerSequence({
  name : "onze",
  start : 157,
  stop : 189,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }

  }
}); 

sequencer.registerSequence({
    name : "douze",
    start : 218,
    stop : 222,

    onStart : (event) => {
      console.log(event)
    },
    onStep : (event) => {
      console.log(event)
      if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }
    },
    onStop : (event) => {
      console.log(event)
    },
    
  });

sequencer.registerSequence({
    name : "treize",
    start : 232,
    stop : 236,

    onStart : (event) => {
      console.log(event)
    },
    onStep : (event) => {
      console.log(event)
      if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }
    },
    onStop : (event) => {
      console.log(event)
    },
    
  });

sequencer.registerSequence({
  name : "quatorze",
  start : 248,
  stop : 251,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }

  }
}); 

sequencer.registerSequence({
  name:"quinze",
  start: 251,
  stop : 283,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = color(150,0,150);
      }else{
        bgColor = 0;
      }

  }
  
});

sequencer.registerSequence({
    name : "seize",
    start : 283,
    stop : 314,
    steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }

  }
  });

sequencer.registerSequence({
    name:"mec",
    start : 314,
    stop : 330,
    steps : [2, 2+1/4],
    onStep : () => { 
    if(bgColor == 0){
        bgColor = color(0,100,0);
      }else{
        bgColor = 0;
      }
  }
});
sequencer.registerSequence({
    name : "dixsept",
    start : 330,
    stop : 345,
    steps : [ 2, 1+1/4 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = color(0,200,0);
      }else{
        bgColor = 0;
      }
  }
  });
sequencer.registerSequence({
    name : "dixhuit",
    start : 345,
    stop : 376,
    steps : [ 1, 1+1/4 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = color(10,200,10);
      }else{
        bgColor = 0;
      }
  }
  });
sequencer.registerSequence({
  name : "vingtettrois",
  start : 376,
  stop : 407,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = color(150,0,150);
      }else{
        bgColor = 0;
      }

  }
}); 

sequencer.registerSequence({
    neme : "dixneuf",
    start : 407,
    stop : 440,
    steps : [4, 1+2/3],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = color(0,0,200);
      }else{
        bgColor = 0;
      }
  }

});
sequencer.registerSequence({
  name : "vingt",
  start : 439,
  stop : 471,
  steps : [ 1, 1+1/2 ],
  onStep : () => { 
    if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }

  }
});

sequencer.registerSequence({
    name : "vightetun",
    start : 471,
    stop : 474,

    onStart : (event) => {
      console.log(event)
    },
    onStep : (event) => {
      console.log(event)
      if(bgColor == 0){
        bgColor = 255;
      }else{
        bgColor = 0;
      }
    },
    onStop : (event) => {
      console.log(event)
    },
    
  });

}


function RayOfLight(color){
  push();
  rotateZ(millis()/4000);
  rotateX(millis()/4111);
   noStroke();
  for(let i = 0 ; i < 20 ; i++){
    // rotateY(TWO_PI/20);
    fill(color);
    beginShape();
    vertex(0, 0, 0);
    vertex(1, 0, 0);
    vertex(i/2, height, 0);
    vertex(-i/2, height, 0);
    endShape();
  }
  pop();

}



function CrazyLight(color, rZ, rX){
  push();
  for(let i = 0 ; i < 20 ; i++){
    fill(color);
    rotateZ(rZ);
    rotateX(rX);
    beginShape();
    vertex(0, 0, 0);
    vertex(1, 0, 0);
    vertex(i, height, 0);
    vertex(0, height, 0);
    endShape();
  }
  pop();
}

function CrazyLightBas(color, rZ, rX){
  push();
  for(let i = 0 ; i < 20 ; i++){
    fill(color);
    rotateZ(rZ);
    rotateX(rX);
    beginShape();
    vertex(0, 0, 0);
    vertex(-1, 0, 0);
    vertex(i, height, 0);
    vertex(0, height, 0);
    endShape();
  }
  pop();
}



    function draw(){
    	sequencer.update();
    	background(bgColor);
      push();
      translate(-350, -height/2);
      CrazyLight(color(0), millis()/10000, millis()/1511);
      pop();

      push();
      translate(-350, -height/2);
      CrazyLight(color(10,200,10), millis()/-10000, millis()/-1511);
      pop();

      push();
      translate(350, -height/2);
      CrazyLight(color(0), millis()/-10000, millis()/-1511);
      pop();

      push();
      translate(350, -height/2);
      CrazyLight(color(10,200,10), millis()/10000, millis()/1511);
      pop();

      push();
      translate(0, -height/2);
      CrazyLight(color(0,0,250), millis()/-10000,millis()/-19900);
      pop();

      push();
      translate(0, -height/2);
      CrazyLight(color(0,0,200), millis()/10000,millis()/19900);
      pop();

      push();
      translate(0,height/2);
      CrazyLightBas(color(100,100,100), millis()/100,millis()/200);
      pop();

      push();
      translate(400,height/4)
      CrazyLightBas(color(255), millis()/-12345,millis()/-98765);
      pop();

      push();
      translate(400,height/4)
      CrazyLightBas(color(150, 0, 150), millis()/12345,millis()/98765);
      pop();

      push();
      translate(-400,height/4)
      CrazyLightBas(color(255), millis()/-12345,millis()/-98765);
      pop();

       push();
      translate(-400,height/4)
      CrazyLightBas(color(150, 0, 150), millis()/12345,millis()/98765);
      pop();

      

    	
    }

    function windowResized(){
    	resizeCanvas(window.innerWidth, window.innerHeight);
    }

  