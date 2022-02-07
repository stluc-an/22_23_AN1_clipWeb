
let anim1;
let anim2;
let anim3;
let anim4;
let anim5;
let anim6;
let anim7;
let anim8;
let anim9;
let anim10;
let anim11;
let anim11Bis;
let anim12;
let anim13;
let noise7d;
let audioPath = "./assets/audio/Larme blanche.mp3";
let sequencer;

function preload(){
	anim1 = new Anim("./Images/Scene1__NUMBER_.PNG", 32);
	anim2 = new Anim("./Images/Scene2__NUMBER_.PNG", 22);
	anim3 = new Anim("./Images/Scene3__NUMBER_.PNG", 19);
	anim4 = new Anim("./Images/Scene4__NUMBER_.PNG", 22);
	anim5 = new Anim("./Images/Scene5__NUMBER_.PNG", 42);
	anim6 = new Anim("./Images/Scene6__NUMBER_.PNG", 26);
	anim7 = new Anim("./Images/Scene7__NUMBER_.PNG", 72); 
	anim8 = new Anim("./Images/Scene8__NUMBER_.PNG", 22);
	anim9 = new Anim("./Images/Scene9__NUMBER_.PNG", 28);
	anim10 = new Anim("./Images/Scene10__NUMBER_.PNG", 24);
	anim11 = new Anim("./Images/Scene11__NUMBER_.PNG", 20);
	anim11Bis = new Anim("./Images/Scene11Bis__NUMBER_.PNG", 23);
	anim12 = new Anim("./Images/Scene12__NUMBER_.PNG", 1);
	anim13 = new Anim("./Images/Scene13__NUMBER_.PNG", 112);

}

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);

	noise7d = new Noise7D();
	sequencer = new Sequencer(audioPath, 58, false);
	sequencer.registerSequence({
		name : "introduction",
		start : 1,
		onStart : (event) => {
			anim1.isPlaying = true;
			
		},
		stop : 10,
		onStop : () => {
			console.log("stop");
			anim1.isPlaying = false;
		},
		steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],	
		onStep : (event)=>{
			anim1.setCursor(event.amount);
		}	
	});
	sequencer.registerSequence({
		name : "seq2",
		start : 11,
		onStart : (event) => {
			console.log("start");
			anim2.isPlaying = true;
		},
		stop : 19,
		onStop : () => {
			console.log("stop");

			anim2.isPlaying = false;
		},
		steps : [1, 1+1/2],
		onStep : (event)=>{
			anim2.setCursor(event.amount);
		}	
	});
	sequencer.registerSequence({
			name : "seq3",
			start : 20,
			onStart : (event) => {
				console.log("start");
				anim3.isPlaying = true;
			},
			stop : 34,
			onStop : () => {
				console.log("stop");

				anim3.isPlaying = false;
			},
			steps : [1, 1+1/2],	
			onStep : (event)=>{
				anim3.setCursor(event.amount);
			}	
	});
	sequencer.registerSequence({
			name : "seq4",
			start : 35,
			onStart : (event) => {
				console.log("start");
				anim4.isPlaying = true;
			},
			stop : 46,
			onStop : () => {
				console.log("stop");

				anim4.isPlaying = false;
			},
			steps : [1, 1+1/2],	
			onStep : (event)=>{
				anim4.setCursor(event.amount);
			}	
	});
	sequencer.registerSequence({
			name : "seq5",
			start : 47,
			onStart : (event) => {
				console.log("start");
				anim5.isPlaying = true;
			},
			stop : 	70,
			onStop : () => {
				console.log("stop");

				anim5.isPlaying = false;
			},
			steps : [1, 1+1/4, 1+2/4, 1+3/4],
			onStep : (event)=>{
				anim5.setCursor(event.amount);
			}	
	});
	sequencer.registerSequence({
			name : "seq6",
			start : 71,
			onStart : (event) => {
				console.log("start");
				anim6.isPlaying = true;
			},
			stop : 106,
			onStop : () => {
				console.log("stop");

				anim6.isPlaying = false;
			},
			steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],	
			onStep : (event)=>{
				anim6.setCursor(event.amount);
			}	
	});
	sequencer.registerSequence({
			name : "seq7",
			start : 107,
			onStart : (event) => {
				console.log("start");
				anim7.isPlaying = true;
			},
			stop : 154,
			onStop : () => {
				console.log("stop");

				anim7.isPlaying = false;
			},
			steps : [1, 1+1/4, 1+2/4, 1+3/4],	
			onStep : (event)=>{
				anim7.setCursor(event.amount);
			}	
	});
	sequencer.registerSequence({
			name : "seq8",
			start : 155,
			onStart : (event) => {
				console.log("start");
				anim8.isPlaying = true;
			},
			stop : 165,
			onStop : () => {
				console.log("stop");

				anim8.isPlaying = false;
			},
			steps : [1, 1+1/2],	
			onStep : (event)=>{
				anim8.setCursor(event.amount);
			}	
	});

	sequencer.registerSequence({
			name : "Boum Boum",
			start : 166,
			onStart : (event) => {
				console.log("start");
				noise7d.isPlaying = true;
			},
			stop : 192,
			onStop : () => {
				console.log("stop");

				noise7d.isPlaying = false;
			},	
			onStep : (event)=>{
				if(event.step % 2 == 0){
					noise7d.isPlaying = true;
				}else{
					noise7d.isPlaying = false;
				}
			}	
	});
	sequencer.registerSequence({
			name : "seq9",
			start : 193,
			onStart : (event) => {
				console.log("start");
				anim9.isPlaying = true;
			},
			stop : 205,
			onStop : () => {
				console.log("stop");

				anim9.isPlaying = false;
			},
			steps : [1, 1+1/4, 1+2/4, 1+3/4],	
			onStep : (event)=>{
				anim9.setCursor(event.amount);
			}	
	});
	sequencer.registerSequence({
			name : "final",
			start : 206,
			onStart : (event) => {
				console.log("start");
				anim10.isPlaying = true;
			},
			stop : 231,
			onStop : () => {
				console.log("stop");

				anim10.isPlaying = false;
			},
			steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],	
			onStep : (event)=>{
				anim10.setCursor(event.amount);
			}	
	});
	sequencer.registerSequence({
			name : "Explosion1",
			start : 232,
			onStart : (event) => {				
				console.log("start");
				anim11.isPlaying = true;
			},
			stop : 249,
			onStop : () => {
				console.log("stop");

				anim11.isPlaying = false;
			},
			//steps : [1, 1+1/2],
			//steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
			steps : [1, 1+1/24, 1+2/24, 1+3/24, 1+4/24, 1+5/24, 1+6/24, 1+7/24, 1+8/24, 1+9/24 , 1+10/24, 1+11/24 , 1+12/24, 1+13/24 , 1+14/24, 1+15/24 , 1+16/24, 1+17/24, 1+18/24 , 1+19/24, 1+20/24 , 1+21/24, 1+22/24, 1+23/24],	
			//steps : [1, 1+1/4, 1+2/4, 1+3/4],
			//steps : [1, 1+1/2],
			onStep : (event)=>{
				anim11.setCursor((event.amount * 3) % 1 );
			}	
	});

	sequencer.registerSequence({
			name : "Explosion1Bis",
			start : 250,
			onStart : (event) => {				
				console.log("start");
				anim11Bis.isPlaying = true;
			},
			stop : 264,
			onStop : () => {
				console.log("stop");

				anim11Bis.isPlaying = false;
			},
			//steps : [1, 1+1/2],
			//steps : [1, 1+1/6, 1+2/6, 1+3/6, 1+4/6, 1+5/6],
			steps : [1, 1+1/24, 1+2/24, 1+3/24, 1+4/24, 1+5/24, 1+6/24, 1+7/24, 1+8/24, 1+9/24 , 1+10/24, 1+11/24 , 1+12/24, 1+13/24 , 1+14/24, 1+15/24 , 1+16/24, 1+17/24, 1+18/24 , 1+19/24, 1+20/24 , 1+21/24, 1+22/24, 1+23/24],	
			//steps : [1, 1+1/4, 1+2/4, 1+3/4],
			//steps : [1, 1+1/2],
			onStep : (event)=>{
				anim11Bis.setCursor((event.amount * 3) % 1 );
			}	
	});


	

	sequencer.registerSequence({
			name : "blanc",
			start : 265,
			onStart : (event) => {
				console.log("start");
				anim12.isPlaying = true;
			},
			stop : 266,
			onStop : () => {
				console.log("stop");

				anim12.isPlaying = false;
			},	
			onStep : (event)=>{
				anim12.setCursor(event.amount);
			}

	});

	sequencer.registerSequence({
			name : "Explosion2",
			start : 267,
			onStart : (event) => {				
				console.log("start");
				anim13.isPlaying = true;
			},
			stop :292 ,
			onStop : () => {
				console.log("stop");

				anim13.isPlaying = false;
			},
			//steps : [1, 1+1/24, 1+2/24, 1+3/24, 1+4/24, 1+5/24, 1+6/24, 1+7/24, 1+8/24, 1+9/24 , 1+10/24, 1+11/24 , 1+12/24, 1+13/24 , 1+14/24, 1+15/24 , 1+16/24, 1+17/24, 1+18/24 , 1+19/24, 1+20/24 , 1+21/24, 1+22/24, 1+23/24],	
			steps : [1, 1+1/4, 1+2/4, 1+3/4],
			//steps : [1, 1+1/2],
			onStep : (event)=>{
				anim13.setCursor(event.amount);
			}	
	});

	sequencer.registerSequence({
			name : "fin -> debut",
			start : 293,
			onStart : (event) => {				
				console.log("start");
			},
			stop :294 ,
			onStop : () => {
				console.log("stop");
				location.reload();

			},
			onStep : (event)=>{
			}	
	});


}
function draw(){
	sequencer.update();
	background(0);
	anim1.draw();
	anim2.draw();
	anim3.draw();
	anim4.draw();
	anim5.draw();
	anim6.draw();
	anim7.draw();
	anim8.draw();
	anim9.draw();
	anim10.draw();
	anim11.draw();
	anim11Bis.draw();
	anim12.draw();
	anim13.draw();
	noise7d.draw();
	


}
class Anim{
	constructor(seqName, count){
		this.imgsPath = seqName;
		this.imgs =[];
		this.cursor = 0;
		this.isPlaying = false;

		for(let i = 1 ; i <= count ; i++){
			let realPath = this.imgsPath.replace("_NUMBER_", i );
			let tempImg = loadImage(realPath);
			this.imgs.push(tempImg);
		}
	}
	draw(){
		if(this.isPlaying == true){
			let i = floor(this.cursor);
			image(this.imgs[i], 0, 0, width, height);
		}
	}
	setCursor(amount){
		amount = min(1, max(0, amount));
		this.cursor = lerp( 0, this.imgs.length -1, amount)
	}
}


class Noise7D{
	constructor(){
		//this.cam = createCamera();
		//this.cam.setPosition(0, 0, 100);
		//this.cam.lookAt(0, 0, 0);
		//this.cam.perspective(PI * 0.07, width/height);
		//setCamera(this.cam);
		this.isPlaying = false;
	}
	draw(){
		if(!this.isPlaying)return;
		background(0);
		push();
		translate(width/2, height/2);
		scale(10)
		noFill();
		let speed = frameCount * 0.05;
		for(let x = -45 ; x < 45; x++){
			let y1 = noise(x * 0.03 + speed);
			let color = lerp(0, 255, y1);
			y1 = lerp(-30, 30, y1);
			let y2 = noise( (x+2)* 0.03 + speed);
			y2 = lerp(-30, 30, y2);
			stroke(color);
			beginShape();
			vertex(-x, -y1);
			vertex(x+2, y2);
			endShape();
		}

		pop();
	}
}
