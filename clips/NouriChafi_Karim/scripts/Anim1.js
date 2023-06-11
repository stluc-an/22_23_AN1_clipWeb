class Anim1 extends drawable {
  constructor(x, y) {
    super();
    this.angle = 0.0;
    this.offset = 30;
    this.scalar = 2;
    this.speed = 0.8;
  }

  draw() {
  
	image(title,0,0,windowWidth,windowHeight);
	  
	let x = this.offset + cos(this.angle) * this.scalar;
    let y = this.offset + sin(this.angle) * this.scalar;
	
	noStroke();
    fill(189, 30, 30);
	ellipseMode(CENTER);
    ellipse(x + 200, y + 100 , 2, 2);
	 
	fill(189, 83, 40); 
	ellipse(x + 950, y + 300, 2, 2); 
	
	fill(98, 189, 49); 
	ellipse(x + 1300, y + 650, 2, 2); 
	 
	fill(11, 189, 162); 
	ellipse(x + 350, y + 800, 2, 2); 
	  
	fill(189, 21, 189); 
	ellipse(x + 1500, y + 200, 2, 2); 
	  
	  
    this.angle += this.speed;
    this.scalar += this.speed;
	  

  }
}

	  
	  








