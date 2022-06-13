class Particule {
	constructor(x, y, z){
			this.position = new p5.Vector (x, y, z);
			this.speed = p5.Vector.random3D();
			this.c = color(random(255), random(255), random(255), random(255));
			this.a = random(PI);
			this.b = random(PI);
	}
	draw (){
		this.position.add(this.speed);

		push();
		translate(
				  this.position.x, 
				  this.position.y, 
				  this.position.z
				  );
		rotateX(this.a);
		rotateY(this.b);
		ambientMaterial(this.c);
		noStroke(); 
		model(teapot);
	
		pop();
	}
}