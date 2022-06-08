
// brun clair
class Particulei {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(170,100,34); 
		stroke(255-170,255-100,255-34);
		plane(100, 100);

	pop();
    

	}
}
// vert-bleu clair 
class Particulea {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(10,220,74); 
		stroke (255-10,255-220,255-74);
		
		plane(100, 100);

	pop();
    

	}
}
//vert clair
class Particuleb {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(50,180,45); 
/*
		stroke(255-50, 255-180, 255-45);
		noFill();
		moStroke();
		fill(r, g, b, a);
*/
		plane(100, 100);

	pop();
    

	}
}
//bleu clair
class Particulec {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(25,80,225); 
		
		plane(100, 100);

	pop();
    

	}
}
// rouge clair
class Particuled {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(57,199,29); 
		
		plane(100, 100);

	pop();
    

	}
}
//orange-brun
class Particule {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(255,128,5); 
		
		plane(100, 100);

	pop();
    


	}
}

// mauve clair

//vert fonce 
class Particulef {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(40,134,11); 
		
		plane(100, 100);

	pop();
    

	}
}
//bleu plus clair
class Particuleg {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(0,255,255); 
		
		plane(100, 100);

	pop();
    

	}
}
//jaune clair
class Particuleh {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(255,255,0); 
		
		plane(100, 100);

	pop();
    

	}
}

//orange clair
class Particulej {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(255,174,39); 
		
		plane(100, 100);

	pop();
    

	}
}

class Particulek {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(165,29,199); 
		
		plane(100, 100);

	pop();
    

	}
}

class Particulel {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(225,30,232); 
		
		plane(100, 100);

	pop();
    

	}
}
//rose medium
class Particulem {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(255,51,153); 
		
		plane(100, 100);

	pop();
    

	}
}
//saumon
class Particulen {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(255,102,102); 
		
		plane(100, 100);

	pop();
    

	}
}
//rouge
class Particuleo {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();

		translate (
			this.position.x,
			this.position.y,
			this.position.z
		);
		ambientMaterial(255,0,0); 
		
		plane(100, 100);

	pop();
    

	}
}
