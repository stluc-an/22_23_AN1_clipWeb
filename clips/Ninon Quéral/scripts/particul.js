

class Particule { 
  constructor(x,y,z, obj){
      this.obj = obj
      this.position = new p5.Vector(x,y,z);
      this.speed = p5.Vector.random3D();
      console.log(obj);
  }
    draw (){
    
        this.position.add(this.speed);
        
push();
        noStroke();
        translate( 
        
            this.position.x, 
            this.position.y, 
            this.position.z,
            
        ); 
        scale(0.4); 
  
  texture(img);
   rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
        model(this.obj);
        pop(); 
    }
}



