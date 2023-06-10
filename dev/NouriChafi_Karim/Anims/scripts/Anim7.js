class Anim7 extends drawable {
  constructor(x, y) {
    super();
    this.angle = 0.0;
    this.offset = 60;
    this.scalar = 2;
    this.speed = 3;
  }

  draw() {
  
	image(img6,0,0,1485,1050);  
	  
	let x = this.offset + cos(this.angle) * this.scalar;
    let y = this.offset + sin(this.angle) * this.scalar;
	  
	 noStroke();
    fill(98, 189, 49);
	ellipseMode(CENTER);
    ellipse( x + windowWidth/2 , y + windowHeight /2 , 2, 2);
	  
	this.angle += this.speed;
    this.scalar += this.speed;
	  
  }
}