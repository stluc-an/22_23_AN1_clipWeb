/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2021-04-07 19:14:37
\*----------------------------------------*/

p5.Vector.x = new p5.Vector(1, 0, 0);
p5.Vector.y = new p5.Vector(0, 1, 0);
p5.Vector.z = new p5.Vector(0, 0, 1);
p5.Vector.zero = ()=> new p5.Vector(0, 0, 0);
p5.Vector.random = ()=> {
	let t = floor(random(3));
	if(t == 0)return p5.Vector.x.copy();
	if(t == 1)return p5.Vector.y.copy();
	if(t == 2)return p5.Vector.y.copy();
}

let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;
let pm;
let cm;

function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);

	pm = new ParticleManager();
	cm = new CameraManager();	
	sequencer = new Sequencer(audioPath, 132, false);
	sequencer.registerSequence({
		name : "intro-kick",
		stop : 320,
		onStep : () => {
			let t = pm.create();
			t.outColor = color(255);
			t.inColor = color(0);
		}
	});
	sequencer.registerSequence({
		name : "intro-zoom",
		stop : 128,
		onStop : event => setCamera(cm.cameraCrust),
		onStep : event => cm.cameraFrontZoom = PI * lerp(0.8, 0.05, sqrt(event.amount)),
	});
	sequencer.registerSequence({
		name : "crust-position",
		start : 128,
		stop : 320,
		onStop : () => setCamera(cm.cameraCore),
		measure : 4,
		steps : [2, 4],
		onStep : () => {
			let location = p5.Vector.random3D().mult(127)
			cm.cameraCrust.setPosition(location.x, location.y, location.z);
			cm.cameraCrust.lookAt(0, 0, 0);
		}
	});
	sequencer.registerSequence({
		name : "rotate",
		start : 65,
		stop : 128,
		measure : 4,
		steps : [1, 3],
		onStep : event => {
			pm.neigbourhoud(pm.random(), 10)
			.map(particle => {
				particle.orientation = particle.o.copy();
				particle.orientation.add(p5.Vector.random().mult(random(-PI, PI)*0.5));
				particle.moment = 0.1;
			});
		}
	});
	sequencer.registerSequence({
		name : "rotate",
		start : 128,
		stop : 716,
		measure : 4,
		steps : [1, 3],
		onStep : () => {
			let rotation = p5.Vector.random().mult(PI/2);
			pm.neigbourhoud(pm.random(), 20)
			.map(particle => {
				particle.orientation = rotation;
				particle.moment = 0.1;
			});
		}
	});
	sequencer.registerSequence({
		name : "snares",
		start : 130,
		stop : 328,
		measure : 4,
		steps : [1+1/2, 2+1/2, 3+1/2, 4+1/2],
		onStep : event => {
			let t = pm.random();
			t.dist = event.amount * 20;
			t.inColor = color(97, 1, 17);
			t.inColorSpeed = lerp(t.distSpeed*10, t.distSpeed * 0.1, event.amount);
		}
	});
	sequencer.registerSequence({
		name : "kick",
		start : 353,
		stop : 590,
		onStep : () => {
			let t = pm.create();
			t.outColor = color(255);
			t.inColor = color(0);
		}
	});
	sequencer.registerSequence({
		name : "crash",
		start : 388,
		stop : 590,
		steps : [1+1/2],
		onStep : () => {
			for(let i = 0 ; i < 10 ; i ++) {
				let t = pm.random();
				t.inColor = color(97, 1, 17);
				t.inColorSpeed = random() * 0.1;
			}
		}
	});
	noStroke();
}

function draw(){
	sequencer.update();
	clear();
	cm.draw();
	let material = emissiveMaterial;;
	if(cm.cameraCore._isActive()){
		material = specularMaterial;
	}
	pm.draw(material);
	ambientMaterial(255);
	sphere(900);
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
	cm.cameras.map(camera=>{
		camera.perspective(camera.cameraFOV, width/height);
	});
}

