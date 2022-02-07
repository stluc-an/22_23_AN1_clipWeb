let audioPath = "./assets/audio/Mercury.mp3";
let sequencer;

let yoff = 0.0;

let greenBg = 207;
let redBg = 199;
let blueBg = 255;
let greenF = 199;
let redF = 223;
let blueF = 255;

let intensityA = 0.05;
let intensityB = 0.01;




let particules = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight) ;
    
    sequencer = new Sequencer(audioPath, 80, false);
    
    sequencer.registerSequence ({
        name : "introduction",
        start : 6,
        onStart : () => {
        console.log("start");
        },
        stop : 60,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) => {
            greenBg -= 1.5;
            redBg -= 1.5;
            blueBg -= 0.5;
            greenF -= 1.5;
            redF -= 1;
            blueF -= 1;
        }
    });
    
    sequencer.registerSequence ({
        name : "whitedots",
        start : 6,
        onStart : () => {
            console.log("start");
        },
        stop : 150,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) => {
            console.log (event)
            particules.push(new Ellipse(random(width),random(height), color(255)));
            

        }
    });
    
    sequencer.registerSequence ({
        name : "guitare",
        start : 22,
        onStart : () => {
            console.log("start");
        },
        stop : 178,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) => {
            console.log (event)
            particules.push(new Ellipse2(random(width),random(height), color(125)));
            

        }
    });
    
    sequencer.registerSequence ({
        name : "guitare2",
        start : 54,
        onStart : () => {
            console.log("start");
        },
        stop : 69,
        onStop : () => {
            console.log("stop");
        },
        steps : [1+1/2],
        onStep : (event) => {
            console.log (event)
            particules.push(new Ellipse6(random(width),random(height), color(35)));
            

        }
    });
    
    sequencer.registerSequence ({
        name : "guitare3",
        start : 22,
        onStart : () => {
            console.log("start");
        },
        stop : 178,
        onStop : () => {
            console.log("stop");
        },
        steps : [1+1/2],
        onStep : (event) => {
            particules.push(new Ellipse2(random(width),random(height), color(125)));

        }
    });
    
    sequencer.registerSequence ({
        name : "montée",
        start : 60,
        onStart : () => {
            console.log("start");
        },
        stop : 80,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) => {
            greenBg -= 1.5;
            redBg -= 1.5;
            blueBg -= 0.5;
            greenF -= 1.5;
            redF -= 1;
            blueF -= 1;
            intensityB += 0.001;
            
        }
    });
    
     sequencer.registerSequence ({
        name : "blackdots",
        start : 82,
        onStart : () => {
            console.log("start");
        },
        stop : 178,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) => {
           particules.push(new Ellipse3(random(width),random(height), color(0)));
        }
    });
    
     sequencer.registerSequence ({
        name : "blackdots2",
        start : 85,
        onStart : () => {
            console.log("start");
        },
        stop : 178,
        onStop : () => {
            console.log("stop");
        },
        steps : [1+1/2],
        onStep : (event) => {
           particules.push(new Ellipse3(random(width),random(height), color(0)));
        }
    });
   
    sequencer.registerSequence ({
        name : "refrain",
        start : 80,
        onStart : () => {
            console.log("start");
        },
        stop : 110,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) => {
            greenBg -= 1.5;
            redBg -= 1.5;
            blueBg -= 0.5;
            greenF -= 1.5;
            redF -= 1;
            blueF -= 1;
            intensityB += 0.001;
            
        }
    });
    
    sequencer.registerSequence ({
        name : "refrain2",
        start : 110,
        onStart : () => {
            console.log("start");
        },
        stop : 150,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) => {
            greenBg -= 1.5;
            redBg -= 1.5;
            blueBg -= 0.5;
            greenF -= 1.5;
            redF -= 1;
            blueF -= 1;
            intensityB += 0.01;

        }
    });
    
    sequencer.registerSequence ({
        name : "particles",
        start : 110,
        onStart : () => {
            console.log("start");
        },
        stop : 178,
        onStop : () => {
            console.log("stop");
        },
        onStep : (event) => {
            console.log (event)
            particules.push(new Ellipse4(random(width),random(height), color(180)));
            
        }
    });
    
    
    sequencer.registerSequence ({
        name : "particlesbis",
        start : 110,
        onStart : () => {
            console.log("start");
        },
        stop : 178,
        onStop : () => {
            console.log("stop");
        },
        steps : [1+1/2],
        onStep : (event) => {
            console.log (event)
            particules.push(new Ellipse4(random(width),random(height), color(180)));
            
        }
    });
    
    sequencer.registerSequence ({
        name : "fin",
        start : 150,
        onStart : () => {
            console.log("start");
        },
        stop : 182,
        onStop : () => {
            console.log("stop");
            var Titl = document.getElementById("title");
            Titl.classList.add("visible");
            var lau = document.getElementById("laulau");
            lau.classList.add("visible");
            var Libr = document.getElementById("lib");
            Libr.classList.add("visible");
        },
        onStep : (event) => {
            greenBg -= 1.5;
            redBg -= 1.5;
            blueBg -= 0.5;
            greenF -= 1.5;
            redF -= 1;
            blueF -= 1;
            intensityB = intensityB / 1.2;
            particules.push(new Ellipse5(random(width),random(height), color(75)));
            
            
        }
    });
    
    sequencer.registerSequence ({
        name : "dots",
        start : 150,
        onStart : () => {
            console.log("start");
        },
        stop : 178,
        onStop : () => {
            console.log("stop");
        },
        steps : [1+1/2],
        onStep : (event) => {
            console.log (event)
            particules.push(new Ellipse5(random(width),random(height), color(75)));
            
        }
    });
    
    
}
  

function draw() {
    background (redBg, greenBg, blueBg) ; 
    fill (redF, greenF, blueF);
    noStroke();
    beginShape();
    let xoff = 0;
    for (let x = 0; x <= width; x += 10) {
        let y = map(noise(xoff, yoff), 0, 1, 500, 400);
        //let y =lerp(intensityA, intensityB; noise(xoff, yoff));
        vertex(x, y);
        xoff += intensityA;
    }
    yoff += intensityB;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

    
	sequencer.update();

    
    for (let particule of particules) {
        particule.draw();
    }
    
    for(let i = particules.length-1 ; i >= 0 ; i--){
        if(particules[i].color._getAlpha() <= 0){
            particules.splice(i, 1);
        }
    }
}

class Ellipse{
    constructor (x,y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = 50;
    }
draw(){
    let alpha = this.color._getAlpha();
    this.color.setAlpha(alpha - 1.5);
    this.size += 0.3;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    }
}

class Ellipse2{
    constructor (x,y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = 15;
    }
draw(){
    let alpha = this.color._getAlpha();
    this.color.setAlpha(alpha - 1.5);
    this.size += 0.3;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    }
}

class Ellipse3{
    constructor (x,y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = 30;
    }
draw(){
    let alpha = this.color._getAlpha();
    this.color.setAlpha(alpha - 1.5);
    this.size += 0.3;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    }
}

class Ellipse4{
    constructor (x,y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = 8;
    }
draw(){
    let alpha = this.color._getAlpha();
    this.color.setAlpha(alpha - 1.5);
    this.size += 0.3;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    }
}

class Ellipse5{
    constructor (x,y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = 20;
    }
draw(){
    let alpha = this.color._getAlpha();
    this.color.setAlpha(alpha - 1.5);
    this.size += 0.3;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    }
}

class Ellipse6{
    constructor (x,y, color) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = 40;
    }
draw(){
    let alpha = this.color._getAlpha();
    this.color.setAlpha(alpha - 1.5);
    this.size += 0.3;
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    }
}