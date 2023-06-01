/*let audioPath = "./assets/audio/12-tauro.mp3";

let sequencer;

let mesAnims = [];
let coeur = [];
let FrameSize = 100;

var s = function( sketch ) {

    var x = 100; 
    var y = 100;
  
    sketch.preload = function(){
        sketch.mesAnims.push(
            new Animator({
                imgPatternAddress : "./assets/sequenceClip/baseballeur/baseballeur_[IMG_NUM].png",
                imgCount : 56,
                firstImageNum : 0,
                numberLength : 4
            })
        );
    }

    sketch.setup = function() {
      sketch.createCanvas(200, 200);
          sketch.createP("paragraph");
    };
  
    sketch.draw = function() {
      sketch.background(0);
      sketch.fill(255);
      sketch.rect(x,y,50,50);
          x--;
    };
  };
  
  var myp5_1 = new p5(s, 'Baseballeur');
  
  
  
  var s2 = function( sketch ) {
  
    var x = 100; 
    var y = 100;
  
    sketch.setup = function() {
      sketch.createCanvas(200, 200);
          sketch.createP("paragraph");
    };
  
    sketch.draw = function() {
      sketch.background(0);
      sketch.fill(0,255,0);
      sketch.rect(x,y,50,50);
          x++;
    };
  };
  
  var myp5_2 = new p5(s2, 'Baseballeur');*/