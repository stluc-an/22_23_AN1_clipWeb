/*----------------------------------------*\
  21.2.camera - ParticleManager.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-16 17:07:48
  @Last Modified time: 2021-02-17 22:51:38
\*----------------------------------------*/

class ParticleManager{
	constructor(){
		this.particles = [];
	}

	draw(material){
		for(let particle of this.particles){
			particle.draw(material);
		}
	}
	create(){
		let t = new Particle();
		this.particles.push(t);
		if(this.particles.length > 200){
			this.particles.shift();
		}
		return t ; 
	}
	random(){
		return this.particles[floor(random(this.particles.length))];
	}
	neigbourhoud(center, count = 1){
		let nh = this.particles
					.map(particle => {
						return {
							particle : particle,
							dist : p5.Vector.sub(center.location, particle.location).magSq()
						}
					})
					.sort((a, b) => a.dist < b.dist )
					.map(({particle})=>particle);
		nh.length = count < nh.length ? count : nh.length;
		return nh;
	}
}

