/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/dubstepkyoka-n.mp3";
let sequencer; 
let bgColor = 0;

/*function setup() {	
	colorMode(RGB);
	
	frameRate(60);
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 132);

	sequencer.registerSequence({
		name : "all",
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
	}

function draw(){
	sequencer.update();
	
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
} */ /*Fonction de base*/

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	
	sequencer = new Sequencer(audioPath, 220);
	
	sequencer.registerSequence({
		name : "onTime",
		start : 1,
		stop : 100,
		onStep : (event) => {
			bgColor = 255 - bgColor;
		}
	});

	sequencer.registerSequence({
		name : "onEighthTime",
		start : 10,
		stop : 20,
		steps : [
			1,
			1+1/8,
			1+2/8,
			1+3/8,
			1+4/8,
			1+5/8,
			1+6/8,
			1+7/8,
		],
		onStep : (event) => {
			bgColor = (event.amount * 255);
		}
		});
    
    Sequencer.registerSequence({
        name : "Cercle musique ",
        start : 1,
        stop : 10,
        
    })
	
}

function draw(){
	sequencer.update();
	background(bgColor);
       

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  fill(127);
  stroke(100);

  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 40 + rms * 400, 40 + rms * 400);
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}







/*Fonction cercle musique*/
let song, analyzer;

function preload() {
  song = loadSound('./assets/audio/dubstepkyoka-n.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw() {
  background(150);

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  fill(200);
  stroke(100);

  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 20 + rms * 400, 20 + rms * 400);
}
  
  






/*FONCTION NOTE*/
/*let osc, envelope, fft;

function preload() {
    song = loadSound ('./assets/audio/dubstepkyoka-n.mp3');
}

let scaleArray = [60, 62, 64, 65, 67, 69, 71, 72];
let note = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  osc = new p5.SinOsc();

  // Instantiate the envelope
  envelope = new p5.Env();

  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0,001, 0.5, 0.1, 0.5);

  // set attackLevel, releaseLevel
  envelope.setRange(43, 0);

  osc.start();

  fft = new p5.FFT();
  noStroke();
}

function draw() {
  background(0);

  if (frameCount % 60 === 0 || frameCount === 1) {
    let midiValue = scaleArray[note];
    let freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);

    envelope.play(osc, 0, 0.1);
    note = (note + 1) % scaleArray.length;
  }

  // plot FFT.analyze() frequency analysis on the canvas
  let spectrum = fft.analyze();
  for (let i = 0; i < spectrum.length / 20; i++) {
    fill(spectrum[i], spectrum[i] / 10, 0);
    let x = map(i, 0, spectrum.length / 20, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    rect(x, height, spectrum.length / 20, -h);
  }
}*/







/*FONCTION SPECTRE*/
/*let soundFile;
let fft;

let filter, filterFreq, filterRes;

function preload() {
  soundFormats('mp3', 'ogg');
  soundFile = loadSound('./assets/audio/dubstepkyoka-n.mp3');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255, 40, 255);

  // loop the sound file
  soundFile.loop();

  filter = new p5.LowPass();

  // Disconnect soundfile from master output.
  // Then, connect it to the filter, so that we only hear the filtered sound
  soundFile.disconnect();
  soundFile.connect(filter);

  fft = new p5.FFT();
}

function draw() {
  background(30);

  // Map mouseX to a the cutoff frequency from the lowest
  // frequency (10Hz) to the highest (22050Hz) that humans can hear
  filterFreq = map(mouseX, 0, width, 10, 22050);

  // Map mouseY to resonance (volume boost) at the cutoff frequency
  filterRes = map(mouseY, 0, height, 15, 5);

  // set filter parameters
  filter.set(filterFreq, filterRes);

  // Draw every value in the FFT spectrum analysis where
  // x = lowest (10Hz) to highest (22050Hz) frequencies,
  // h = energy (amplitude / volume) at that frequency
  let spectrum = fft.analyze();
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
}*/



/*FONCTION RANDOM LINES*/
/*function setup() {
  createCanvas(300, 300);
  strokeWeight(5);
  background(50); 
}

function draw() {
  stroke(random(255), random(255), random(255));
  line(random(width), random(height), random(width), random(height));
}
*/

/*Image répétée*/
/*let lampe;
let x=0;
function preload (){
  lampe = loadImage ('images(1).png');
}
                    
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image (lampe,x,0,mouseX,mouseY);
  x++;
  if (x == 300) { x=0; }
} */