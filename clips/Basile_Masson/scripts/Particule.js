class Particule{
    constructor(x,y,z){
        this.position = new p5.Vector(x,y,z);
        this.speed = p5.Vector.random3D();
        
    
    }
    draw(){
        this.position.add(this.speed);
    
       
        
        push();
        
        translate(this.position.x,
                  this.position.y,
                  this.position.z);
       
        
        stroke(50);
        sphere(40);
        
        pop(); 
         
        
      
    }
    
}


class Carre{
    constructor(x,y,z){
        this.position = new p5.Vector(x,y,z);
        this.speed = p5.Vector.random3D();
         
    }
    draw(){
        this.position.add(this.speed);
     
       
        
        push();
        
        translate(this.position.x,
                  this.position.y,
                  this.position.z);
       
        fill(255,50,30);
        stroke(50);
        box(100,200,50);
        
        
         pop();
        
      
    }
}

class Bouge{
    constructor(x,y,z){
        this.position = new p5.Vector(x,y,z);
        this.speed = p5.Vector.random3D();
         
    }
    draw(){
        this.position.add(this.speed);
     
       
        
        push();
        
        translate(this.position.x,
                  this.position.y,
                  this.position.z);
       
        
        rotate(PI / 4.0);
        
        rect(30, -60, -70, -35);
        rect(70, -20, -70, -35);
        rect(110, 20, -70, -35);
        translate(-100,80);
        
          rect(50, -60, -35,-70 );
        rect(90, -20,-35, -70 );
        rect(130, 20, -35,-70);
        
        
        
         pop();
        
      
    }
    
}

class Bulle{
   
    constructor(x,y){
        this.color = color(random(180,255),0, 0);
        this.x = x;
        this.y = y;
        this.v = 1;//vitesse
        this.a = -0.2;//acceleration
    }
    draw(){
        this.v += this.a;
        this.y += this.v;
        
        if(this.y > height){
            this.v = this.v * -0.9;
            this.y = height;
        }
        
        
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, 80); 
        
    }

}

class paparle{
    constructor(x,y,z){
        this.position = new p5.Vector(x,y,z);
        this.speed = p5.Vector.random3D();
        
    
    }
    draw(){
        this.position.add(this.speed);
    
       
        
        push();
        
        translate(this.position.x,
                  this.position.y,
                  this.position.z);
       
        
        image(img,-25,-50,70,70);
        
        boucheY = random(19, 25);
        
        push();
        translate(0, boucheY);
        image(bouche,-18,0,50,25);
        pop();
        
        pop(); 
         
        
      
    }
    
}


