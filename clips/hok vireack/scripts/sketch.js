let audioPath = "./assets/audio/EUPHORIA.mp3";
let sequencer;

var cols, rows;
var scl = 40;
var w = window.innerWidth;
var h = window.innerHeight;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(w, h, WEBGL);
  cols = w / scl;
  rows = h / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }

  sequencer = new Sequencer(audioPath, 132);
  
  sequencer.registerSequence({
    name : "all",
    onStart : (event) => {
      console.log(event);
    },
    onStep : (event) => {
      console.log(event);
    },
    onStop : (event) => {
      console.log(event);
    },
  });
}

function draw() {
  flying -= 0.05;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(0);
  
  push();
  translate(0, h * 0.4, -w * 3);
  ambientLight(255, 140, 0); 
  stroke(255, 0, 255);
  strokeWeight(3);
  noFill();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(1200);
  pop();
  
  // Terrain
  push();
  translate(-w / 2, -h / 2);
  translate(w / 2, h / 2);
  translate(0, height * 0.2);
  rotateX(PI / 2);
  fill(255, 165, 0); 
  stroke(139, 0, 139); 
  translate(-w / 2, h * 0.1);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    
    for (var x = 0; x < cols; x++) {
      fill((x - y) * 255 * 0.02, y * 200 * 0.02, x * 200 * 0.02);
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
  pop();
}
