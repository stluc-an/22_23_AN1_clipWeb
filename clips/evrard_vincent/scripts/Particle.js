/*----------------------------------------*\
  21.2.camera - Particle.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-16 17:07:03
  @Last Modified time: 2021-02-17 00:02:57
\*----------------------------------------*/

p5.Color.prototype.lerp = function(other, amt, epsilon=6){
	amt = min(max(amt, 0), 1);
	let [r, g, b, a] = this.levels.map((level, key ) => {
		let _amt = amt;
		if(abs(level - other.levels[key]) < epsilon){
			_amt = 1;
		}
		return level + (other.levels[key] - level) * _amt;
	});
	return color(r, g, b, a);
}

class Particle{
	constructor(){
		this.location = new p5.Vector(0, 0);
		let direction = p5.Vector.random3D();
		while(direction.z > 0.9)direction = p5.Vector.random3D();
		this.velocity = direction.mult(random(5, 7));
		
		this.orientation = p5.Vector.random3D().mult(TWO_PI);
		this.o = p5.Vector.zero();
		this.moment = 0.0001;

		this.dynammic = 0.95;
		this.size = 50;

		this.default_inColor = color(255);
		this._inColor = this.default_inColor;
		this.inColorSpeed = 0.1;

		this.default_outColor = color(0);
		this._outColor = this.default_outColor;
		this.outColorSpeed = 0.1;

		this.default_dist = 1;
		this._dist = this.default_dist;
		this.distSpeed = 0.05;
	}
	set inColor (newValue){
		this._inColor = newValue;
	}
	get inColor (){
		let currentColor = this._inColor;
		this._inColor = this._inColor.lerp(this.default_inColor, this.inColorSpeed);
		return currentColor;
	}

	set outColor (newValue){
		this._outColor = newValue;		
	}
	get outColor (){
		let currentColor = this._outColor;
		this._outColor = this._outColor.lerp(this.default_outColor, this.outColorSpeed);
		return currentColor;
	}

	set dist(newDist){
		return this._dist = newDist;
	}

	get dist(){
		let d = this._dist;
		this._dist = lerp(this._dist, this.default_dist, this.distSpeed);
		return this._dist;
	}

	draw(material){
		rectMode(CENTER);
		push();
		translate(this.location.x, this.location.y, this.location.z);
		rotate(this.o.x, p5.Vector.x);
		rotate(this.o.y, p5.Vector.y);
		rotate(this.o.z, p5.Vector.z);

		if(this.velocity.magSq() > 0.01){
			this.location.add(this.velocity);
			this.velocity.mult(this.dynammic);	
		}else{
			this.o.add(p5.Vector.sub(this.orientation, this.o).mult(this.moment)); 
		}

		let iColor = this.inColor;
		let oColor = this.outColor;
		let d = this.dist;
		
		push();
		noStroke();
		material(oColor);	
		translate(0, 0, 1 * d);
		plane(this.size, this.size);
		pop();

		push();
		material(iColor);	
		noStroke();
		translate(0, 0, 0);;
		plane(this.size, this.size);
		pop();

		push();
		noStroke();
		material(oColor);
		translate(0, 0, -1 * d);
		plane(this.size, this.size);
		pop();
		pop();
	}
}