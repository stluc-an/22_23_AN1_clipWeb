let trump;
let trumpUV;
let bat;

let rotateXT;
let rotateYT;
let rotateZT;

function preload(){
	trump = loadModel('./assets/trump.obj',true);
  trumpUV = loadImage('./assets/trumpcolors.png');
  bat = loadModel('./assets/bat.obj',true);
}

class coneCcol{
    /* constructor crée des objets appelés "torusC" qui auront chacun leurs paramètres x, y et z */
    constructor(x, y, z){
        this.position = new p5.Vector(x, y,z) ;
        this.speed = p5.Vector.random3D();
    }
    draw(){
        this.position.add(this.speed) ;
        normalMaterial();
        push();
        translate(this.position.x, this.position.y, this.position.z);
        rotateZ(frameCount *  0.015);
        rotateX(frameCount *  0.015);
        rotateY(frameCount *  0.015);
        cone(70, 70);
        pop();
        
    }
}

class coneCbw{
    constructor(x, y, z){
        this.position = new p5.Vector(x, y, z) ;
        this.speed = p5.Vector.random3D() ;
    }
    draw(){
        this.position.add(this.speed) ;
        normalMaterial();
        push();
        translate(this.position.x, this.position.y, this.position.z);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);

        cone(70, 70);
        pop();
        
    }
}

//cones qui bougent avec guitare
class coneCguitar{
    constructor(x, y, z){
        this.position = new p5.Vector(x, y, z) ;
        this.speed = p5.Vector.random3D() ;
    }
    draw(){
        this.position.add(50,50,50) ;
        push();
        normalMaterial();
        translate(this.position.x, this.position.y, this.position.z);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        cone(70, 70);
        pop();
        
    }
}

//cones qui vont vite et rotate super vite
class coneCfast{
    constructor(x, y, z){
        this.position = new p5.Vector(x, y,z) ;
        this.speed = p5.Vector.random3D();
    }
    draw(){
        this.position.add(this.speed.mult(1.2)) ;
        push();
        normalMaterial();
        translate(this.position.x, this.position.y, this.position.z);
        rotateZ(frameCount * random(0.01,0.02));
        rotateX(frameCount * random(0.01,0.02));
        rotateY(frameCount * random(0.01,0.02));
        cone(70, 70);
        pop();
        
    }
}

class trumpss{
    constructor(x, y, z){
        this.position = new p5.Vector(x, y,z) ;
        this.speed = p5.Vector.random3D();
    }
    draw(){
        this.position.add(this.speed) ;
        push();
        normalMaterial();
        translate(this.position.x, this.position.y, this.position.z);
        rotateZ(frameCount * rotateZT);
        rotateX(frameCount * rotateXT);
        rotateY(frameCount * rotateYT);
        texture(trumpUV);
        model(trump);
        pop();
        
    }
}

class trumpUVText{
  constructor(x, y, z){
      this.position = new p5.Vector(x, y,z) ;
      this.speed = p5.Vector.random3D();
  }
  draw(){
      this.position.add(this.speed) ;
      push();
      translate(this.position.x, this.position.y, this.position.z);
      rotateZ(frameCount * rotateZT);
      rotateX(frameCount * rotateXT);
      rotateY(frameCount * rotateYT);
      texture(trumpUV);
      model(trump);
      pop();
      
  }
}

class trumpOnlyUv{
  constructor(x, y, z){
      this.position = new p5.Vector(x, y,z) ;
      this.speed = p5.Vector.random3D();
  }
  draw(){
      this.position.add(this.speed) ;
      push();
      stroke(255);
      fill(0);
      translate(this.position.x, this.position.y, this.position.z);
      rotateZ(frameCount * rotateZT);
      rotateX(frameCount * rotateXT);
      rotateY(frameCount * rotateYT);
      model(trump);
      pop();
      
  }
}

class batss{
    constructor(x, y, z){
        this.position = new p5.Vector(x, y,z) ;
        this.speed = p5.Vector.random3D();
    }
    draw(){
        this.position.add(this.speed) ;
        push();
        translate(this.position.x, this.position.y, this.position.z);
        normalMaterial();
        rotateZ(frameCount * 0.15);
        rotateX(frameCount * 0.15);
        rotateY(frameCount * 0.15);
        model(bat);
        pop();
        
    }
}

class Particle {
    // coordonnées et vitesse de déplacement , dans espace 2D
      constructor(){
        this.x = random(-width,width);
        this.y = random(-height,height);
        this.r = random(1,8);
        this.xSpeed = random(-2,2);
        this.ySpeed = random(-1,1.5);
      }
    
    // crée une particule
      createParticle() {
        noStroke();
        fill('rgba(100,100,100,0)');
        circle(this.x,this.y,this.r);
      }
    
    //déplace les particules
      moveParticle() {
        if(this.x < -width || this.x > width)
          this.xSpeed*=-1;
        if(this.y < -height || this.y > height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
    
    // crée les lignes entre les points
      joinParticles(particles) {
        particles.forEach(element =>{
          let dis = dist(this.x,this.y,element.x,element.y);
          if(dis<120) {
            stroke('rgba(255,255,255,0.8)');
            line(this.x,this.y,element.x,element.y);
          }
        });
      }
    }