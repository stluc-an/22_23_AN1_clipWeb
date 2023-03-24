let sequencer;
let audioPath = "./assets/audio/Abyss.mp3";
let imgPath = "./assets/images/creature1.jpg";
let imgPieces = [];
let gridX = 12;
let gridY = 8;

let xoff = 0 ;

let entire_medusa;

function preload() {
    medusa = loadImage(imgPath);
}
let bubbles = [];
function setup() {

    createCanvas(window.innerWidth, window.innerHeight,WEBGL);
    
    
    entire_medusa = new Medusa();
    Woods= new Wood();
    
    sequencer = new Sequencer(audioPath, 60, false);
     sequencer.registerSequence({
        name : "start",
        start : 1,
        onStart : () => {
         //   document.body.classList.add("play");
        },
        stop : 130,
        onStop : () =>{
            document.body.classList.remove("play");
        }
     });
    sequencer.registerSequence({
        name : "intro",
        start : 3,
        onStart : () => {
        },
        stop : 19,
        onStop : () =>{
            console.log("endBlueBbles");
        }, 
        onStep : ()=>{
            
           bubbles.push( new Bubble()); 
        }
    });
    
    sequencer.registerSequence({
        name : "intro2",
        start : 30,
        onStart : () => {
        },
        stop : 49,
        onStop : () =>{
            console.log("endPinkBbles");
        }, 
        onStep : ()=>{
            
           bubbles.push( new BubblePink()); 
        }
    });
    
    sequencer.registerSequence({
        name : "intro3",
        start : 4,
        onStart : () => {
        },
        stop : 20,
        onStop : () =>{
            console.log("endPlancton");
        }, 
        onStep : ()=>{
            
           bubbles.push( new Plancton()); 
        }
    });
    
    sequencer.registerSequence({
        name : "end",
        start : 130,
        onStart : () => {
        },
        stop : 131,
        onStop : () =>{
            console.log("restart");
        }, 
        onStep : ()=>{
            location.reload();
        }
    });
    
     let pieceWidth = medusa.width/gridX;
    let pieceHeight = medusa.height/gridY;
    for(let y = 0; y < gridY ; y = y + 1){    
        for(let x = 0 ; x < gridX; x = x + 1 ){
            let tempPiece = medusa.get( x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight);
            imgPieces.push(tempPiece);
        }
    }

//song.play(); 
//song.loop();

}

function draw(){
    
    background(0);
    radialGradient();
    
    sequencer.update();
    for(let b of bubbles){
        b.draw();
    }
    
    push();
    translateMed();
    entire_medusa.draw();
    pop();
    
    Woods.draw();
}

function windowResized() {
resizeCanvas(window.innerWidth,window.innerHeight);
}

function radialGradient(){
    
colorMode(RGB);
let c1 = color(3,34,76);
let c2 = color(0,0,0);
    
background(0);
    
noFill();
strokeWeight(2);

    
for( r = 0; r<  height; r++){
    let n = map(r ,0 ,height ,0 ,1 );
    let newc = lerpColor( c1, c2, n);
    stroke(newc);
    push();
    translate(-width>>4,-height>>4, -350);
    ellipse(0,0,2*r,2*r);
    pop();
    
}

}


function translateMed(){
    translate(-width/2, -height/2);
    
    let w = map(noise(1, xoff),0,1,0,width);
    let h = map(noise(2, xoff),0,1,0,height);
        
    xoff += 0.001;
    
    translate(w, h);
}

function testGraphics(){
    image(graphics, 0, 0);
    
}

class Pancake{
    constructor(scale, rotationSpeed){
       this.scale = scale;
        this.rotationSpeed = rotationSpeed;
        this.graphics = createGraphics(100, 100);
        this.graphics.clear();
        this.graphics.translate(50,50);
        this.graphics.scale(0.25);
    
    }
    draw(){
        push();
        noFill();
        noStroke();
        rotateX(3*PI/2);
        rotateZ(millis() * this.rotationSpeed);
        texture(this.graphics);
        scale(this.scale);
        sphere(100);
        pop();
        
        let t = 0;
        t = t + 1;
        
        if(t < 10){
            t = t + 1;  
        }else{
            t = 10;
        }
    
        this.graphics.tint(153, 0, 204, t);  
        this.graphics.image(imgPieces[27], 0, 0);
        this.graphics.rotate(millis()/1000);
        
    }
}

class MedusaBody{
    constructor(){
        this.p1 = new Pancake(0.75, 1/2500);
        this.p2 = new Pancake(0.90, -1/2000);
        this.p3 = new Pancake(1, 1/2000);
    }
    draw(){
        push();
        this.p1.draw();
        //translate(0, -50, );
        this.p2.draw();
        //translate(0, -50);
        this.p3.draw();
        pop();
    }
}
class MedusaTentacles{
    constructor(){
        this.t1 = new Tentacle(0.01, 0.03);
        this.t2 = new Tentacle(0.02, 0.035);
        this.t3 = new Tentacle(0.03, 0.04);
    }
    draw(){
        push();
        translate(-20,0,0);
        rotate(0.1);
        this.t1.draw();
        pop();
        push();
        translate(0, 0, 0);
        this.t2.draw();
        pop();
        push();
        rotate(-0.1);
        translate(20, 0, 0);
        this.t3.draw();
        pop();
    }
}
class Tentacle{
    constructor(wavesV1, wavesV2){
        this.wavesV1 = wavesV1;
        this.wavesV2 = wavesV2
    }
    draw(){
    
        let speed = frameCount * 0.01;
        let ops = 10;
        ops = ops + 1;
        
        if(ops < 150){
            ops = ops+ 1;  
        }else{
            ops = 150;
        }
        push();
        translate(0,150);
        stroke(color(100, 0, 255, ops));
        strokeWeight(3);
        rotate(PI/2);
        for(let l = -10 ; l < 10 ; l++){
           
            beginShape();
            vertex(10* l, lerp(-45,45, noise(l*this.wavesV1 + speed)));
            vertex(10 * (l+1), lerp(-45,45, noise((l+1) * this.wavesV2 + speed)));
//            vertex(l, lerp(-15,15, noise(l*0.01 + speed)));
//            vertex(l+1, lerp(-15,15, noise((l+1)*0.03 + speed)));
            endShape();    
        } 
        pop();
          
    }
}


class Medusa{
    constructor(){
        this.body = new MedusaBody();
        this.tentacles =  new MedusaTentacles();
        this.tentaclesHasToBeDrawn = true;
        this.bodyHasToBeDrawn = true;
    }
    
    draw(){
        
        if(this.bodyHasToBeDrawn){
            push();
            translate(0,0, -100);
            this.body.draw();
            pop();
        }
        if(this.tentaclesHasToBeDrawn){
            push();
            //blendMode(LIGHTEST);
            translate(0,-10,0);
            this.tentacles.draw();
            pop();
        }
    }
}
class Algues{
    constructor(){
        
        
    }   

    draw(){
        push();
        translate(0,-height>>1);

        strokeWeight(4);
        stroke(color(50, 200, 50, 50));
        
        let alguesHeight = height/20;

         for (let a = 0; a < 20; a++){      

                beginShape();
                //vertex(10 * l, lerp(-45,45, noise(l*this.wavesAlgueV1 + speed)));
                //vertex(10 * (l+1), lerp(-45,45, noise((l+1) * this.wavesAlgueV2 + speed)));
                vertex(lerp(-40,40, noise(0.05*(a) + frameCount * 0.01)), alguesHeight*a);
                vertex(lerp(-40,40, noise(0.1*(a+1) + frameCount * 0.01)), alguesHeight*(a+1));
                endShape();
         }
        pop();
    }      
}

class Wood{
    constructor(){
      this.A1 = new Algues();
      this.A2 = new Algues();
      this.A3 = new Algues();
      this.A4 = new Algues();
      this.A5 = new Algues();
      this.A6 = new Algues();
    }
    draw(){
        push();
        translate(-width>>2, 0, -100);
        this.A1.draw(); //translate(50,-height/2, 2);
        pop();
        
         push();
        translate(40, 0, 100);
        this.A2.draw(); //translate(50,-height/2, 2);
        pop();
        
         push();
        translate(width>>2 + 40, 0, -300);
        this.A3.draw(); //translate(50,-height/2, 2);
        pop();
        
         push();
        translate(width>>2 + 1, 0, 200);
        this.A4.draw(); //translate(50,-height/2, 2);
        pop();
        
         push();
        translate(width>>2 - 1, 0, -200);
        this.A5.draw(); //translate(50,-height/2, 2);
        pop();
        
        push();
        translate(-500, 0, 50);
        this.A6.draw(); //translate(50,-height/2, 2);
        pop();
    }
}


class Bubble{
    constructor(){
        this.AxeX = 0;
        this.AxeY = height;
        Bubble.COUNT++;
        this.num = Bubble.COUNT;
        this.xoff =0;
    }
    draw(){
        push();
        this.translateBubbles();
        translate(this.AxeX, this.AxeY);
        //translate(this.AxeX, this.AxeY);
        push();
        this.AxeY = this.AxeY -1;
        pop();
        noStroke();
        fill(0,0,255, 20);
        //emissiveMaterial(130, 230, 0);
        sphere(10);
        pop();
    }
    translateBubbles(){
        this.AxeX = map(noise((this.num*2) + 0, this.xoff),0,1,-width/2, width/2);
        //this.AxeY = map(noise((this.num*2) + 1, this.xoff),0,1,-height/2, height/2);
        this.xoff += 0.002;
    }   
}
Bubble.COUNT = 0;

//function translateBubbles(){
//    let w = map(noise(1, xoff),0,1,0,width);
//    let h = map(noise(2, xoff),0,1,0,height);
//        
//    xoff += 0.002;
//    
//    translate(w, h);
//}

class BubblePink{
    constructor(){
        this.AxeX = 0;
        this.AxeY = height;
        BubblePink.COUNT++;
        this.num = BubblePink.COUNT; //Bubble.COUNT to create a creature
        this.xoff =0;
    }
    draw(){
        push();
        this.translateBubbles();
        translate(this.AxeX, this.AxeY);
        //translate(this.AxeX, this.AxeY);
        push();
        this.AxeY = this.AxeY -1;
        pop();
        noStroke();
        fill(200,0,255, 20);
        //emissiveMaterial(130, 230, 0);
        sphere(10);
        pop();
    }
    translateBubbles(){
        this.AxeX = map(noise((this.num*2) + 0, this.xoff),0,1,-width/2, width/2);
        //this.AxeY = map(noise((this.num*2) + 1, this.xoff),0,1,-height/2, height/2);
        this.xoff += 0.002;
    }   
}
BubblePink.COUNT = 0;

class Plancton{
    constructor(){
        this.AxeX = 0;
        this.AxeY = 0;
        Plancton.COUNT++;
        this.num = Plancton.COUNT; //Bubble.COUNT to create a creature
        this.xoff =0;
    }
    draw(){
        push();
        this.translatePlancton();
        translate(this.AxeX, this.AxeY);
        //translate(this.AxeX, this.AxeY);
        noStroke();
        fill(200,0,255, 20);
        emissiveMaterial(0, 100, 150);
        //emissiveMaterial(130, 230, 0);
        sphere(2);
        pop();
    }
    translatePlancton(){
        this.AxeX = map(noise((this.num*2) + 0, this.xoff),0,1,-width/2, width/2);
        this.AxeY = map(noise((this.num*2) + 1, this.xoff),0,1,-height/2, height/2);
        this.xoff += 0.002;
    }   
}
Plancton.COUNT = 0;

class Creature{
    constructor(){
        this.AxeX = 0;
        this.AxeY = 0;
        Creature.COUNT++;
        this.num = Bubble.COUNT;
        this.xoff =0;
    }
    draw(){
        push();
        this.translateCreature();
        translate(this.AxeX, this.AxeY);
        push();
        this.AxeY = this.AxeY -1;
        pop();
        noStroke();
        fill(255);
        emissiveMaterial(0, 140, 230);
        sphere(5);
        pop();
    }
    translateCreature(){
        this.AxeX = map(noise((this.num*2) + 0, this.xoff),0,1,-width/2, width/2);
        //this.AxeY = map(noise((this.num*2) + 1, this.xoff),0,1,-height/2, height/2);
        this.xoff += 0.002;
    }   
}

Creature.COUNT = 0;
