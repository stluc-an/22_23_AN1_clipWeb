/*----------------------------------------*\
  Sabotage P5.js
  @author Cossu Filippo (Filippo.cossu96@gmail.com)
  @Lib_author Evrard Vincent (vincent@ogre.be)
  @Date:   09-06-2023
\*----------------------------------------*/
let BPM = 132;
let audioPath = "assets/audio/Sabotage.mp3";
let sequencer;
let ellipes = [];
let arcs = [];
let lines = [];
let bluSquares = [];
let traingles = [];
let trianglesDown = [];
let hexagons = [];
let scanlines = [];
let points = [];
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	colorMode(RGB);
	frameRate(60);
	sequencer = new Sequencer(audioPath, BPM, false);
	
	sequencer.registerSequence({
		name : "arcSynth",
		stop : 98,
		steps : [
			1+ 0/24, 1+ 1/24, 1+ 2/24, 1+ 3/24, 1+ 4/24, 1+ 5/24, 
			1+ 6/24, 1+ 7/24, 1+ 8/24, 1+ 9/24, 1+10/24, 1+11/24,
			1+12/24, 1+13/24, 1+14/24, 1+15/24, 1+16/24, 1+17/24, 
			1+18/24, 1+19/24, 1+20/24, 1+21/24, 1+22/24, 1+23/24,
		],	
		onStart : ()=>{
			background(0);
		},
		onStep : () =>{
			for(let i = 0; i < 2; i++){
				arcs[i] = new Arcs();
				for(let i = 0; i < arcs.length; i++){
					arcs[i].move();
					arcs[i].display();
				}
				
			}
			
			if(arcs.length<400){
					for(let i = 0; i< arcs.length; i++){
						arcs[i].move();
						arcs[i].display();
						rotate(noise(random(0, 360))*frameCount * 0.2);
					}
				}
		},
		onStop : () =>{
			background(0);
		}
	}) 

	sequencer.registerSequence({
		name : "ellipseKick",
		start: 99,
		stop : 130,
		steps : [1],
		onStep : () =>{
			
			for(let i = 0; i < 5; i++){
				ellipes[i] = new Ellipses();
				for(let i = 0; i < ellipes.length; i++){
					ellipes[i].move();
					ellipes[i].display();
					ellipes[i].scale();
					rotate(random(0,360));
				}
			}
			},
		onStop : () =>{
			pop();
			background(10);
		}
		}) 

	 
	sequencer.registerSequence({
		name : "guitarSubBlu",
		start : 131,
		stop : 180,
		steps : [
			1+ 0/24, 1+ 1/24, 1+ 2/24, 1+ 3/24, 1+ 4/24, 1+ 5/24, 
			1+ 6/24, 1+ 7/24, 1+ 8/24, 1+ 9/24, 1+10/24, 1+11/24, 
			1+12/24, 1+13/24, 1+14/24, 1+15/24, 1+16/24, 1+17/24, 
			1+18/24, 1+19/24, 1+20/24, 1+21/24, 1+22/24, 1+23/24,
		],	
		onStep : () =>{
			for(let i = 0; i < 2; i++){
				bluSquares[i] = new SquaresBlu();
				for(let square of bluSquares){
					push();
					square.display();
					square.move();
					square.rotation();
				}
			}
		},
		onStop : () =>{
		pop();
		background(30);
		} 
	})

	sequencer.registerSequence({
		name : "guitarSubOrange",
		start : 180,
		stop : 220,
		steps : [1],
		onStart : () =>{
			background(200);
		},
		onStep : () =>{
			for(let i = 0; i < 3; i++){
				lines[i] = new Lines();
				for (let line of lines){
					line.display();
				}
			}
		},
		onStop : () =>{
			background(255);
			pop();
		}

	})

	sequencer.registerSequence({
		name : "hexagonSynth",
		start : 220,
		stop: 259,
		steps : [
			1+ 0/24, 1+ 1/24, 3+ 2/24, 1+ 3/24, 3+ 4/24, 3+ 5/24,
			3+ 6/24, 1+ 7/24, 3+ 8/24, 1+ 9/24, 3+10/24, 3+11/24, 
			3+12/24, 1+13/24, 3+14/24, 1+15/24, 3+16/24, 3+17/24, 
			3+18/24, 1+19/24, 3+20/24, 1+21/24, 3+22/24, 3+23/24,
		],	
		onStart : () =>{
			 
		},
		onStep : () =>{
			for(let i = 0; i < 10; i++){
				hexagons[i] = new Hexagon(1);
				for(let hex of hexagons){
					hex.display();
					hex.transform();
					hex.rotation();
				}
			}
		},
		onStop : () =>{
			pop();
		}
	})
	sequencer.registerSequence({
		name : "hexagonSynth2",
		start : 259,
		stop: 290,
		steps : [
			1+ 0/24, 1+ 1/24, 3+ 2/24, 1+ 3/24, 3+ 4/24, 3+ 5/24,
			3+ 6/24, 1+ 7/24, 3+ 8/24, 1+ 9/24, 3+10/24, 3+11/24, 
			3+12/24, 1+13/24, 3+14/24, 1+15/24, 3+16/24, 3+17/24, 
			3+18/24, 1+19/24, 3+20/24, 1+21/24, 3+22/24, 3+23/24,
		],	
		onStart : () =>{
			 
		},
		onStep : () =>{
			for(let i = 0; i < 10; i++){
				hexagons[i] = new Hexagon(2);
				for(let hex of hexagons){
					hex.display();
					hex.transform();
					hex.rotation();
				}
			}
		},
		onStop : () =>{
			pop();
		}
	}) 

	sequencer.registerSequence({
		name : "hexagonSynth3",
		start : 290,
		stop: 320,
		steps : [
			1+ 0/24, 1+ 1/24, 3+ 2/24, 1+ 3/24, 3+ 4/24, 3+ 5/24,
			3+ 6/24, 1+ 7/24, 3+ 8/24, 1+ 9/24, 3+10/24, 3+11/24, 
			3+12/24, 1+13/24, 3+14/24, 1+15/24, 3+16/24, 3+17/24, 
			3+18/24, 1+19/24, 3+20/24, 1+21/24, 3+22/24, 3+23/24,
		],	
		onStart : () =>{
			 
		},
		onStep : () =>{
			for(let i = 0; i < 10; i++){
				hexagons[i] = new Hexagon(6);
				for(let hex of hexagons){
					hex.display();
					hex.transform();
					hex.rotation();
				}
			}
		},
		onStop : () =>{
			pop();
		}
	})

	sequencer.registerSequence({
		name : "scanLine",
		start : 290,
		stop : 323,
		steps : [
			1+ 0/24, 1+ 1/24, 1+ 2/24, 3+ 3/24, 1+ 4/24, 1+ 5/24, 
			, 1+ 7/24, 1+ 8/24, 3+ 9/24, 1+10/24, 1+11/24,
			1+12/24, 1+15/24,  2+17/24, 
			3+18/24, 4+19/24, 2+21/24, 1+22/24, 1+23/24,
		],	
		onStart : ()=>{
			background(0);
		},
		onStep : () =>{
			for(let i = 0; i < 2 ; i++){
				scanlines[i] = new ScanLines();
				for(let scan of scanlines){
					scan.display();
					scan.transform();
				}
			}
		},
		onStop : () =>{
			background(0);
			clear();
			pop();
			pop();
		}
	}) 
	
	
	sequencer.registerSequence({
		name : "pointLight",
		start : 300,
		stop : 380,
		steps : [
			1+ 0/24, 1+ 1/24, 1+ 2/24, 3+ 3/24, 1+ 4/24, 1+ 5/24, 
			, 1+ 7/24, 1+ 8/24, 3+ 9/24, 1+10/24, 1+11/24,
			1+12/24, 1+15/24,  2+17/24, 
			3+18/24, 4+19/24, 2+21/24, 1+22/24, 1+23/24,
		],	
		onStart : ()=>{
			push();
			background(0);
		},
		onStep : () =>{
			for(let i = 0; i < 10 ; i++){
				points[i] = new Points();
				for(let p of points){
					p.display();
					p.transform(frameCount * 0.09);
					p.rotate(frameCount * 0.003);
				}
			}
		},
		onStop : () =>{
			pop();
			background(0);
		}
 	})
}

function draw(){
	sequencer.update();
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function Ellipses(){

	//Because Classes were unable to link or execute inside the sequencer , I had to make constructor functions.
	//the code is less readable, but I didn't find any solutions.
	
	this._x = windowWidth * noise(random(0, width));
	this._y = windowHeight * noise(random(0, height));
	this._w = 10;
	this._h = 10;
	
	this.display = function(){
		this._r = random(0,255);
		this._g = random(0,60);
		this._b = random(0,10);
		stroke(this._r, this._g, this._b);
		strokeWeight(1);
		let c = color(random(0, 100));
		fill(c);
		ellipse(this._x, this._y, this._w, this._h);

		
	}

	this.move = function(){
		this._x += noise(random(lerp(200, 30,500), 1000));
		this._y += noise(random( (PI/3.0),(PI*2)));
	}

	this.scale = function(){
		this._w += random(10,40);
		this._h += random(10,40);
	}

}

function Arcs(){
	this._x = windowWidth /2;
	this._y = windowHeight /2;
	this._w = noise(random(0,1)) * frameCount * 0.5;
	this._h = noise(random(0,1)) * frameCount * 0.5;
	this._start = noise(random(0,PI))* frameCount * 0.2;
	this._stop = noise(random(0,PI));

	this.display = function(){
		let c  = color(0,255,0);
		stroke(0,255,0);
		strokeWeight(0.08);
		noFill();
		arc(this._x, this._y, this._w, this._h, this._start, this._stop);
	}

	this.move = function(){
		this._x += noise(lerp(100, 10, 20));
		this._y += noise(lerp(20000, 10, 20));
		this._w += noise(random(0, 360));
		this._h += noise(random(0, -360));
	}
}

function SquaresBlu(){

	//square(x, y, s, [tl], [tr], [br], [bl])

	this._x = 0;
	this._y = 0;
	this._s = 30; 
	this._tl = 0.005 * frameCount;
	this._tr = 0.005 * frameCount;
	this._br = 0.005 * frameCount;
	this._bl = 0.005 * frameCount;

	this.display = function(){
		
		this._r = random(0,80);
		this._g = random(0,10);
		this._b = random(0,255);
		this._colorFrom = color(this._r, this._g, this._b);
		this._colorTo = color(this._r, this._g, this._b);
		let c = lerpColor(this._colorFrom, this._colorTo, noise(random(0,1)));
		fill(c);
		square(this._x, this._y, this._s, this._tl, this._tr, this._br, this._bl);
	}

	this.move  = function(){
		this._x = 10 * frameCount * 0.004;
		this._y = 10 * frameCount * 0.004;
		translate(this._x, this._y);
	}
	
	this.rotation = function(){
		this._angle = 0.5 * frameCount;
		rotate(this._angle);
	}
}

function Lines(){
	this._x1 = windowWidth -1;
	this._y1 = windowHeight -1;
	this._x2 = windowWidth - 1 * frameCount;
	this._y2 = windowHeight - 1 * frameCount;;

	this.display = function(){
		push();
		stroke(255,0,0);
		strokeWeight(4);
		line(this._x1, this._y1, this._x2, this._y2);

		if(this._x2 || this._y2 <= 0){
			this._x3 = noise(random(0, windowWidth) * frameCount * 0.2);
			this._y3 = noise(random(0, windowWidth) * frameCount  * 0.2);
			stroke(230);
			line(this._x2, this._y2, this._x3, this._y3);
			rotate(random(0,360));
		}
	}
	
}

function Triangles(){
	this._minValueX = noise(random(0,width) * frameCount);
	this._maxValueX = noise(random(0,width) * frameCount);
	this._LerpX = lerp(this._minValueX, this._maxValueX, noise(random(0,1)));

	this._minValueY = noise(random(0,height) * frameCount);
	this._maxValueY = noise(random(0,height) * frameCount);
	this._LerpY = lerp(this._minValueY, this._maxValueY, noise(random(0,1)));

	this._x1 = windowWidth/4 * frameCount;
	this._x2 = windowWidth - random(0, width);
	this._x3 = windowWidth/6 * frameCount;

	this._y1 = windowHeight/2 * frameCount;
	this._y2 = windowHeight - 1 * frameCount * 0.45;
	this._y3 = windowHeight/2 * frameCount;

	this.display = function(){
		push();
		fill(random(0,45), random(0,255), random(0,155))
		triangle(this._x1, this._y1, this._x2, this._y2, this._x3, this._y3);
		pop();
	}
	this.displayV2 = function () {
		push();
		fill(255);
		triangle( 10 * frameCount * 0.04, 100 , this._x2 , this._y2, this._x3, this._y3);
		pop();
	}
}

function Hexagon(numberOfvert) {
  	this.x = 10;
  	this.y = 10;
 	this.size = 30;
	this._numberOfvert = numberOfvert;

  	this.display = function() {
  	  push();
	  let c = color(random(0,30), random(0,20), random(0,20));
	  fill(c);
	  let d = color(random(0,30), random(50,255), random(30,255));
	  stroke(d);
		beginShape();
		for (let i = 0; i < this._numberOfvert; i++) {
		let angle = TWO_PI / 6 * i;
		let px = this.size * cos(angle);
		let py = this.size * sin(angle);
		vertex(px, py);
		}

		endShape(CLOSE);

		pop();
	}
	
	this.transform = function(){
		push();
		this.x = windowWidth/2;
		this.y = windowHeight/2;
		translate(this.x, this.y);
		
		push();
		this._x = this.x * frameCount /2;
		this._y = this.y * frameCount/2;
		translate(this._x, this._y)
		pop();
	}

	this.rotation = function(){
		rotate(0.04 * frameCount);
	}
}

function ScanLines() {
  this._x = 0;
  this._y = 10 * frameCount * 0.02;
  this.speed = 20;

  this.display = function() {
	push();
    stroke(255);
    line(0, this._y, windowWidth, this._y);
	pop();
  };

  this.transform = function() {
    this._x += this.speed;
    if (this._x > width) {
      this._x = 0;
    }
	if(this._y > height){
		this._y = 0;
	}
  }
  this.translate = function(){

  }
}

function Points() {
    this._x = width - 1 * frameCount;
    this._y = height/2;

    this.display = function() {
      push();
      stroke(100, random(100, 255), 230);
      strokeWeight(5);
      point(this._x , this._y);
      pop();
    };

    this.transform = function(x) {
      push();
      let angle = 3;
      let radius = 1;
	  this._x1 = x;
      this._x = angle * x;
      this._y = radius * x;

      if (this._x > width || this._y > height) {
        this.reset();
        angle = 1;
        radius = 3 * frameCount;
      } else {
        translate(this._x, this._y);
      }

      if (this._x < width || this._y < height) {
        this._x -= 0;
        this._y -= height;
      } else {
        translate(this._x, this._y);
      }

      pop();
    };

    this.reset = function() {
      this._x += width;
      this._y += 0;
    };

    this.rotate = function(x) {
      push();
	  this._x = x;
      rotate(x * 300);
    };
  }