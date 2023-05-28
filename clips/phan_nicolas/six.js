let audioPath = "./audio/sophie.Infatuation.mp3";
let sequencer;

let alpha = 255;
let alphaDest = 0;
let alphaSpeed = 0.1;

let troisun;
let troistrois;

let flowfield;
let particleManager;
let nouveau;

let murmuration;

let imgPath = "./images/_NUMBER_.fond.jpg"

let lucioles = [];

let ecran;
let avant;

//ESSAI
function setup (){
          createCanvas (window.innerWidth, window.innerHeight);

          particleManager = new ParticleManager();
          alpha = new Lumiere ();
          alphaDest = new Lumiere();
          alphaSpeed = new Lumiere();
          nouveau = new Nouveau();
          ecran = new Ecran();
          murmuration = new Murmuration();
          troisdeux = new Troisdeux();
          avant = new Avant();
          troisun = new Troisun();
          troistrois = new Troistrois ();
          sequencer = new Sequencer(audioPath, 100, false );


           sequencer.registerSequence ({
                name : "introduction1",
                start : 1,
                onStart : ()=> {
                console.log("start");
                lucioles.push(new Troisun());
                   },
                stop : 64 ,
                onStop : () => {
                console.log("stop");
                lucioles = [];
                   },
                onStep : (event)=>{
                if(event.step == 25){
                lucioles[0].inc = 0.02;
                  }
               }
           });

          sequencer.registerSequence ({
             name : "introduction5",
             start : 66,
             onStart : ()=> {
             console.log("start");
             lucioles.push(new Nouveau());
               },
             stop : 145 ,
             onStop : () => {
             console.log("stop");
             lucioles = [];
               },
             onStep : ()=>{}

            });

      sequencer.registerSequence ({
        name : "introduction3",
        start : 150,
        onStart : ()=> {
          console.log("start");
        },
        stop : 168,
        onStop : () => {
          console.log("stop");
        },
        steps : [1, 1+1/24, 1+2/24, 1+3/24,1+4/24, 1+5/24, 1+6/24,1+7/24, 1+8/24, 1+9/24, 1+10/24, 1+11/24,1+12/24, 1+13/24, 1+14/24,1+15/24, 1+16/24,1+17/24, 1+18/24, 1+19/24,1+20/24, 1+21/24, 1+22/24,1+23/24, 1+24/24],
        onStep : (event) => {
            console.log(imgPath);
            let realPath = imgPath.replace("_NUMBER_", floor(random( 1, 33 )));
            document.body.style.backgroundImage = "url("+ realPath + ")";
        }

           });

      sequencer.registerSequence ({
         name : "introduction25",
         start : 150,
         onStart : ()=> {
         console.log("start");
         lucioles.push(new Troisdeux());
            },
         stop : 168,
         onStop : () => {
         console.log("stop");
         lucioles = [];
            },
         onStep : ()=>{}

           });
      sequencer.registerSequence ({
          name : "introduction30",
          start : 169,
          onStart : ()=> {
          console.log("start");
          lucioles.push(new Ordi());
            },
          stop : 178,
          onStop : () => {
          console.log("stop");
          lucioles = [];
            },
          onStep : ()=>{}

            });

      sequencer.registerSequence ({
         name : "introduction29",
         start : 179,
         onStart : ()=> {
         console.log("start");
            },
         stop : 190,
         onStop : () => {
         console.log("stop");
            },
         steps : [1, 1+1/24, 1+2/24, 1+3/24,1+4/24, 1+5/24, 1+6/24,1+7/24, 1+8/24, 1+9/24, 1+10/24, 1+11/24,1+12/24, 1+13/24, 1+14/24,1+15/24, 1+16/24,1+17/24, 1+18/24, 1+19/24,1+20/24, 1+21/24, 1+22/24,1+23/24, 1+24/24],
         onStep : (event) => {
            console.log(imgPath);
            let realPath = imgPath.replace("_NUMBER_", floor(random( 1, 33 )));
            document.body.style.backgroundImage = "url("+ realPath + ")";
            }

            });

     sequencer.registerSequence ({
        name : "introduction28",
        start : 179,
        onStart : ()=> {
        console.log("start");
        lucioles.push(new Troisdeux());
            },
        stop : 190,
        onStop : () => {
        console.log("stop");
        lucioles = [];
            },
        onStep : ()=>{}

            });



    sequencer.registerSequence ({
       name : "introduction6",
       start : 191,
       onStart : ()=> {
       console.log("start");
       lucioles.push(new Murmuration());
         },
       stop : 202,
       onStop : () => {
       console.log("stop");
       lucioles = [];
         },
       onStep : ()=>{}
         });


    sequencer.registerSequence ({
       name : "introduction10",
       start : 203,
       onStart : ()=> {
       console.log("start");
         },
       stop : 211,
       onStop : () => {
       console.log("stop");
         },
       steps : [1, 1+1/24, 1+2/24, 1+3/24,1+4/24, 1+5/24, 1+6/24,1+7/24, 1+8/24, 1+9/24, 1+10/24, 1+11/24,1+12/24, 1+13/24, 1+14/24,1+15/24, 1+16/24,1+17/24, 1+18/24, 1+19/24,1+20/24, 1+21/24, 1+22/24,1+23/24, 1+24/24],
       onStep : (event) => {
         console.log(imgPath);
         let realPath = imgPath.replace("_NUMBER_", floor(random( 1, 33 )));
         document.body.style.backgroundImage = "url("+ realPath + ")";
          }

          });

   sequencer.registerSequence ({
       name : "introduction17",
       start : 203,
       onStart : ()=> {
       console.log("start");
       lucioles.push(new Troisdeux());
        },
       stop : 211,
       onStop : () => {
       console.log("stop");
       lucioles = [];
        },
       onStep : ()=>{}
        });

   sequencer.registerSequence ({
      name : "introduction11",
      start : 212,
      onStart : ()=> {
      console.log("start");
      lucioles.push(new Murmuration());
        },
      stop : 220,
      onStop : () => {
      console.log("stop");
      lucioles = [];
        },
      onStep : ()=>{}
        });

  sequencer.registerSequence ({
       name : "introduction12",
       start : 221,
       onStart : ()=> {
       console.log("start");
        },
       stop : 232,
       onStop : () => {
       console.log("stop");
        },
       steps : [1, 1+1/24, 1+2/24, 1+3/24,1+4/24, 1+5/24, 1+6/24,1+7/24, 1+8/24, 1+9/24, 1+10/24, 1+11/24,1+12/24, 1+13/24, 1+14/24,1+15/24, 1+16/24,1+17/24, 1+18/24, 1+19/24,1+20/24, 1+21/24, 1+22/24,1+23/24, 1+24/24],
       onStep : (event) => {
       console.log(imgPath);
       let realPath = imgPath.replace("_NUMBER_", floor(random( 1, 33 )));
       document.body.style.backgroundImage = "url("+ realPath + ")";
        }

        });

  sequencer.registerSequence ({
      name : "introduction16",
      start : 221,
      onStart : ()=> {
      console.log("start");
      lucioles.push(new Troisdeux());
       },
      stop : 232,
      onStop : () => {
      console.log("stop");
      lucioles = [];
       },
      onStep : ()=>{}


       });

  sequencer.registerSequence ({
     name : "introduction13",
     start : 233,
     onStart : ()=> {
     console.log("start");
    lucioles.push(new Ecran());
      },
    stop : 287,
    onStop : () => {
    console.log("stop");
    lucioles = [];
     },

    onStep : ()=>{}


     });



   sequencer.registerSequence ({
       name : "introduction14",
       start : 288,
       onStart : ()=> {
       console.log("start");
       lucioles.push(new ParticleManager());
         },
       stop : 321  ,
       onStop : () => {
       console.log("stop");
       lucioles = [];
         },
       onStep : ()=>{}
         });

   sequencer.registerSequence ({
       name : "introduction65",
       start : 322,
       onStart : ()=> {
       console.log("start");
         },
       stop : 363,
       onStop : () => {
       console.log("stop");
         },
       steps : [1, 1+1/4, 1+2/4, 1+3/4,1+4/4],
       onStep : (event) => {
         console.log(imgPath);
         let realPath = imgPath.replace("_NUMBER_", floor(random( 1, 33 )));
         document.body.style.backgroundImage = "url("+ realPath + ")";
         }

         });


   sequencer.registerSequence ({
      name : "introduction38",
      start : 322,
      onStart : ()=> {
      console.log("start");
      lucioles.push(new Troisdeux());
        },
      stop : 363,
      onStop : () => {
      console.log("stop");
      lucioles = [];
        },

      onStep : ()=>{}


        });


  sequencer.registerSequence ({
     name : "introduction40",
     start : 364,
     onStart : ()=> {
     console.log("start");
     lucioles.push(new Troistrois());
       },
     stop : 440 ,
     onStop : () => {
     console.log("stop");
     lucioles = [];
       },
     onStep : (event)=>{
     if(event.step == 405){
     lucioles[0].inc = 0.02;
        }

       }
    });
}



function draw(){
   clear();

   sequencer.update();

   for(let luciole of lucioles){
     luciole.draw();
   }

}

class Lumiere {
    constructor (){


    this.alpha = 255;
    this.alphaDest = 0;
    this.alphaSpeed = 2;
    }

  draw () {

  fill(0, this.alpha);

  this.alpha = this.alpha + (this.alphaDest -  this.alpha) * this.alphaSpeed;
  rect( 0, 0, width, height);

      }

}


class Eteindre {
  constructor (x, y, xoff1 , xoff2){
    this.xoff1 = 0;
    this.xoff2 = 100;
    this.inc = 0.002;
    this.vert = loadImage("vert.png");
    this.posX = x;
    this.posY = y;
    this.alpha = 255;
    this.alphaDest = 1;
    this.alphaSpeed = 0.002;

  }


  draw () {

    fill(0, this.alpha);

    this.alpha = 0 + (this.alphaDest  * this.alphaSpeed);
    rect( 0, 0, width, height);

    this.x = map(noise(this.xoff1), 0, 1, 0, width);
    this.y = map(noise(this.xoff2), 0, 1, 0, height);


    this.xoff1 += this.inc;
    this.xoff2 += this.inc;

    image(this.vert, this.x, this.y, 24,  24);
  }

}


class Nouveau {

  constructor(){
   this.inc = 0.1;
   this.scl = 10;
   this.zoff = 0;
   this.prochains =[];
   this.cols = floor(width/this.scl);
   this.rows = floor(height/this.scl);
   this.fr = createP('');

  for (var i= 0; i <100; i++){
    this.prochains[i] = new Prochain();
  }
}

   draw() {

  var yoff = 0;
  for (var y= 0; y < this.rows; y++){
    var xoff = 0;
    for (var x = 0; x < this.cols; x++) {
      var index = (x + y * width) * 4;
      var angle = noise(xoff, yoff, this.zoff)* TWO_PI;
      var v = p5.Vector.fromAngle(angle );
      xoff += this.inc;
      push();
      translate(x* this.scl, y* this.scl);
      rotate( v.heading());


      pop();
    }
    yoff += this.inc;


  }
   for (var i = 0; i <this.prochains.length; i++){
     this.prochains [i].update();
     this.prochains [i].show(this);
     this.prochains [i].update();

       }
    }
}




class Ordi {
  constructor(){
   this.inc = 0.1;
   this.scl = 10;
   this.zoff = 0;
   this.avants =[];
   this.cols = floor(width/this.scl);
   this.rows = floor(height/this.scl);
   this.fr = createP('');

  for (var i= 0; i <50; i++){
    this.avants[i] = new Avant();
  }
}

   draw() {
   document.body.style.backgroundImage = "url('1.fond.jpg')";
  var yoff = 0;
  for (var y= 0; y < this.rows; y++){
    var xoff = 0;
    for (var x = 0; x < this.cols; x++) {
      var index = (x + y * width) * 4;
      var angle = noise(xoff, yoff, this.zoff)* TWO_PI;
      var v = p5.Vector.fromAngle(angle );
      xoff += this.inc;
      push();
      translate(x* this.scl, y* this.scl);
      rotate( v.heading());


      pop();
    }
    yoff += this.inc;


  }
   for (var i = 0; i <this.avants.length; i++){
     this.avants [i].update();
     this.avants [i].show(this);
     this.avants [i].update();

       }
    }
}

class Ecran {
  constructor(){
   this.inc = 0.1;
   this.scl = 10;
   this.zoff = 0;
   this.partouts =[];
   this.cols = floor(width/this.scl);
   this.rows = floor(height/this.scl);
   this.fr = createP('');

  for (var i= 0; i <20; i++){
    this.partouts[i] = new Partout();
  }
}

   draw() {
   document.body.style.backgroundImage = "url('31.fond.jpg')";
  var yoff = 0;
  for (var y= 0; y < this.rows; y++){
    var xoff = 0;
    for (var x = 0; x < this.cols; x++) {
      var index = (x + y * width) * 4;
      var angle = noise(xoff, yoff, this.zoff)* TWO_PI;
      var v = p5.Vector.fromAngle(angle );
      xoff += this.inc;
      push();
      translate(x* this.scl, y* this.scl);
      rotate( v.heading());


      pop();
    }
    yoff += this.inc;


  }
   for (var i = 0; i <this.partouts.length; i++){
     this.partouts [i].update();
     this.partouts [i].show(this);
     this.partouts [i].update();

       }
    }
}



class ParticleManager{
  constructor(){
    this.inc = 0.1;
    this.scl = 20;
    this.cols = floor(width / this.scl);
    this.rows = floor(height / this.scl);
    this.zoff = 0;
    this.particles = [];
    this.flowfield = new Array(this.cols * this.rows);
    for (var i = 0; i < 300; i++) {
      this.particles[i] = new Particle();
    }
    this.calque = createGraphics(width, height);
  }
  draw(){
    document.body.style.backgroundImage = "url('31.fond.jpg')";
    var yoff = 0;
    for (var y = 0; y < this.rows; y++) {
      var xoff = 0;
      for (var x = 0; x < this.cols; x++) {
        var index = x + y * this.cols;
        var angle = noise(xoff, yoff, this.zoff) * TWO_PI * 4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        this.flowfield[index] = v;
        xoff += this.inc;
        this.calque.stroke(0, 50);
      }
      yoff += this.inc;
      this.zoff += 0.0003;
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].follow(this);
      this.particles[i].update();
      this.particles[i].edges();
      this.particles[i].show(this);
    }

    image(this.calque, 0, 0);
  }
}
class Troisun {

  constructor (x, y, xoff1 , xoff2){
    this.xoff1 = 0;
    this.xoff2 = 100;
    this.inc = 0.002;
    this.vert = loadImage("vert.png");
    this.posX = x;
    this.posY = y;
    this.alpha = 255;
    this.alphaDest = 0.5;
    this.alphaSpeed = 0.0002;

  }


  draw () {
    document.body.style.backgroundImage = "url('1.fond.jpg')";

    fill(0, this.alpha);

    this.alpha = this.alpha + (this.alphaDest -  this.alpha) * this.alphaSpeed;
    rect( 0, 0, width, height);

    this.x = map(noise(this.xoff1), 0, 1, 0, width);
    this.y = map(noise(this.xoff2), 0, 1, 0, height);


    this.xoff1 += this.inc;
    this.xoff2 += this.inc;

    image(this.vert, this.x, this.y, 24,  24);
  }

}


class Troisdeux {

  constructor (x, y, xoff1 , xoff2){
    this.xoff1 = 0;
    this.xoff2 = 100;
    this.inc = 0.002;
    this.vert = loadImage("vert.png");
    this.posX = x;
    this.posY = y;

  }


  draw () {

    clear();
    this.x = map(noise(this.xoff1), 0, 1, 0, width);
    this.y = map(noise(this.xoff2), 0, 1, 0, height);


    this.xoff1 += this.inc;
    this.xoff2 += this.inc;

    image(this.vert, this.x, this.y, 1,  1);
  }

}


class Troistrois {

  constructor (x, y, xoff1 , xoff2){
    this.xoff1 = 0;
    this.xoff2 = 100;
    this.inc = 0.1;
    this.vert = loadImage("vert.png");
    this.posX = x;
    this.posY = y;


  }


  draw () {
    document.body.style.backgroundImage = "url('9.fond.jpg')";



    this.x = map(noise(this.xoff1), 0, 1, 0, width);
    this.y = map(noise(this.xoff2), 0, 1, 0, height);


    this.xoff1 += this.inc;
    this.xoff2 += this.inc;

    image(this.vert, this.x, this.y, 35,  35);
  }

}





class Murmuration {

   constructor(){
     this.movers = [];
     this.attractors = [];
     for (let i = 0; i < 10; i++) {
       let x = random(width);
       let y = random(height);
       let m = random(50, 150);
        this.movers.push(new Mover(x, y, m));
      }
      let a = new Attractor(width/2, height/2, 100, 5);
      this.attractors.push(a);
   }
   draw (){
document.body.style.backgroundImage = "url('ciel2.jpg')";
     for (let mover of this.movers) {
        mover.update();
        mover.show();
        for (let attractor of this.attractors) {
          attractor.attract(mover);
        }
      }
      for (let attractor of this.attractors) {
        attractor.show();
      }
   }
}



class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.vert = loadImage("vert.png");
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // adding a limit here
    this.vel.limit(10);
    this.acc.set(0, 0);
  }

  show() {



  image(this.vert, this.pos.x, this.pos.y, this.r *2, 24, 24);

    }
}



class Attractor {

  constructor(x, y, m, G) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
    this.G = G;
    this.violet = loadImage("violet.png");

     }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 2500, 1000);
    let strength = this.G * (this.mass * mover.mass) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
     }


  show() {

    image(this.violet, this.pos.x, this.pos.y, this.r * 2, 50, 50);
   }

 }
