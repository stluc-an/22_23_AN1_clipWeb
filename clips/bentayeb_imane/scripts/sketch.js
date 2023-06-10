/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/The Indoor Song.mp3";
let sequencer;

function preload(){
	/*
		Un Object est comme un Array, 
		Dans un Array les cases sont nommées par des chiffres à partir de 0
		Dans un Object les cases sont sont nommé par nous même au moyen de nom.
		Toute fonction peut recevoir comme parametre un objet.
		Cela nous permet de ne pas confondre les différents paramètres entre eux,
		lorsque nous souhaitons envoyer plusieurs valeurs à une function. 
	*/
	mesAnims.push(
		new Animator({
			imgPatternAddress : "./assets/clip_images/test_sequence/frame[IMG_NUM].png",
			imgCount : 254,
			firstImageNum : 1,
			numberLength : 4,
      x :-40,
      y :-75,
			w : 80,
			h : 50  
		})
	);
}

/* -------------------------------------------------------------------------------------------- */
class Rain{
	constructor(pos) {

    this.pos = pos;
    this.frame = 0;
    this.rad = 0;
    this.v = createVector(0,10,0);
    this.rad_v = 2;
    this.line_len=10;

	}
	
	// The color is manipulated by a cloud which produces it.
	display(color) {
		
		// Representation of wave spreading in puddles on the ground
    if(this.pos.y>0){
      push();
      translate(this.pos.x, 0, this.pos.z);
      rotateX(PI/2);
      noFill();
      strokeWeight(0.5);
      stroke(253, 89, 169);
      circle(0, 0, this.rad);
      pop();

      this.rad+=this.rad_v;
    }
		// Representation the dropping
    else{
      push();
      stroke(253, 89, 169);
      strokeWeight(0.5);
      line(this.pos.x, this.pos.y, this.pos.z, this.pos.x, this.pos.y-this.line_len, this.pos.z);
      pop();

      this.pos.add(this.v);
    }



    this.frame++;

	}

}

class Cloud{
	constructor(pos, color) {
    this.pos = pos;
    this.rad = 100;
    this.v = createVector(0,0,0);
    this.color = color;
    this.rain_arr = [];
    this.frame = 0;
	}
  display() {
    let cycle =20;
    this.v = createVector(cos(this.frame/cycle),0, sin(this.frame/cycle)).mult(0.5);
		
		// Display rain lines.
    let rain_arr_new = [];
    for(let i=0; i<this.rain_arr.length; i++){
      if(this.rain_arr[i].rad<15){
        this.rain_arr[i].display(this.color);
        append(rain_arr_new, this.rain_arr[i]);
      }

    }

		// Produce a new rain line.
    if(random()<0.5){
      let r = this.rad * random();
      let theta = random(2*PI);
      let new_pos_dir = p5.Vector.mult(createVector(1,0), r).rotate(theta);
      let new_pos = createVector(this.pos.x+new_pos_dir.x, this.pos.y, this.pos.z+new_pos_dir.y);
      append(rain_arr_new, new Rain(new_pos));
    }
    this.rain_arr = rain_arr_new;
    this.pos.add(this.v);

    // The color changes along the time shift. (HSB representation naturally expresses the change compared with RGB)
    this.color.x = (this.color.x+0.1)%200;
    this.frame++;
	}

}

let cloud_arr = [];

/* -------------------------------------------------------------------------------------------- */

let mesAnims = [];
/* -------------------------------------------------------------------------------------------- */
function setup() {	
	// let w = 640;
  	// let h = 480;
  	// createCanvas(w, h, WEBGL);
  	colorMode(RGB, 200);
 	 createCanvas(windowWidth, windowHeight, WEBGL);
	background(0);
 	 frameRate(30);
  	let cam = createCamera();

 	 cam.setPosition(0, -40, 100,0,0,0);

	// Cloud setting
  append(cloud_arr, new Cloud(createVector(-100, -100 , -100), createVector(0, random(30,60),random(50,100))));
  append(cloud_arr, new Cloud(createVector(-100, -100 , -50), createVector(25,random(30,60),random(50,100))));
  append(cloud_arr, new Cloud(createVector(0, -100 , -100), createVector(50,random(30,60),random(50,100))));
  append(cloud_arr, new Cloud(createVector(100, -100 , -50), createVector(75,random(30,60),random(50,100))));
  append(cloud_arr, new Cloud(createVector(100, -100 , -100), createVector(0,random(30,60),random(50,100))));
	/*colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);
*/
	sequencer = new Sequencer(audioPath, 170, false);
	
	sequencer.registerSequence({
		name : "anim",
		start : 1,
    steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
		stop : 55,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
      console.log(event, this)

      console.log(event.step)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
		
	});

  sequencer.registerSequence({
		name : "anim2",
		start : 56,
    steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
		stop : 110,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
      console.log(event, this)

      console.log(event.step)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
		
	});

  sequencer.registerSequence({
		name : "anim3",
		start : 111,
    steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
		stop : 165,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
      console.log(event, this)

      console.log(event.step)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
		
	});

  sequencer.registerSequence({
		name : "anim4",
		start : 166,
    steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
		stop : 220,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
      console.log(event, this)

      console.log(event.step)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
		
	});

  sequencer.registerSequence({
		name : "anim5",
		start : 221,
    steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
		stop : 272,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
      console.log(event, this)

      console.log(event.step)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
		
	});

  sequencer.registerSequence({
		name : "anim6",
		start : 273,
    steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
		stop : 327,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
      console.log(event, this)

      console.log(event.step)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
		
	});

  sequencer.registerSequence({
		name : "anim7",
		start : 328,
    steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
		stop : 382,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
      console.log(event, this)

      console.log(event.step)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
		
	});

  sequencer.registerSequence({
		name : "anim8",
		start : 383,
    steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
		stop : 437,
		onStart : (event) => {
			mesAnims[0].setDrawable(true);
		},
		onStep : (event) => {
      console.log(event, this)

      console.log(event.step)
			mesAnims[0].setCursor(event.amount);
		},
		onStop : (event) => {
			mesAnims[0].setDrawable(false);
		},
		
	});

	}

function draw(){
	background(0);

  for(let i=0; i<cloud_arr.length; i++){
    cloud_arr[i].display();
  }

  sequencer.update();

	for(let anim of mesAnims){
		if(anim.isDrawable()){
			anim.draw();		
		}
	}
}

