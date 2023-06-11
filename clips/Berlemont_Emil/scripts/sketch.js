let audioPath = "./assets/audio/Repulsive/In the Dark.mp3";
let sequencer;
let time = 0;  
let counter =0;
let inkBlots = [];  
let bgColor;

function setup() {    
    frameRate(60);
    createCanvas(window.innerWidth, window.innerHeight);

    sequencer = new Sequencer(audioPath, 67,false);

    bgColor = color(116,160,193);
    
    sequencer.registerSequence({
        name : "all",
        onStart : (event) => {
            console.log(event)
            counter = 0;
        },
        onStep : (event) => {
            console.log(event)
            if (counter % 3 === 0) {
                inkBlots.push(new InkBlot());
            }
            counter++;

            if (counter <= 218) {
                let amt = map(counter, 0, 218, 0, 1);
                bgColor = lerpColor(color(116,160,193), color(0, 0, 0), amt);
            }
        },
        onStop : (event) => {
            console.log(event)
        },
    });

    canvas.addEventListener('click', function(event) {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        inkBlots.push(new InkBlot(mouseX, mouseY));
    }, false);
}

function draw(){
    loadPixels();
    let grainIntensity = map(constrain(counter, 0, 218), 0, 218, 50, 0);
    for (let i = 0; i < pixels.length; i += 4) {
        let grain = random(grainIntensity);
        pixels[i] = bgColor.levels[0] + grain;
        pixels[i + 1] = bgColor.levels[1] + grain;
        pixels[i + 2] = bgColor.levels[2] + grain;
        pixels[i + 3] = 255;
    }
    updatePixels();

    sequencer.update();
    for (let blot of inkBlots) {
        blot.update();
        blot.display();
    }
    time += 0.01;
}

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
} 

class InkBlot {
    constructor(x, y) {
        this.centerX = x || random(width);
        this.centerY = y || random(height);
        this.vx = 0;
        this.vy = 0;
        this.rotation = random(TWO_PI);
        this.rotationSpeed = random(-0.01, 0.01);

        this.offsetX = random(1000);
        this.offsetY = random(1000);
        this.size = random(8, 80);
    }

    update() {

        this.centerX += this.vx;
        this.centerY += this.vy;
        this.rotation += this.rotationSpeed;

      
        this.offsetX += 0.01;
        this.offsetY += 0.01;
    }

    display() {
        push();
        translate(this.centerX, this.centerY);
        rotate(this.rotation);
        scale(this.size / 100);
        beginShape();
        fill(0);
        let numPoints = 100;
        for (let i = 0; i < numPoints; i++) {
            let angle = map(i, 0, numPoints, 0, TWO_PI);
            let rad = 100 + noise(i * 0.1, time) * 150;
            let x = rad * cos(angle);
            let y = rad * sin(angle);
            x += noise(time, i * 0.1) * 10 - 5;
            y += noise(time, i * 0.1 + 100) * 10 - 5;
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();
    }
}

