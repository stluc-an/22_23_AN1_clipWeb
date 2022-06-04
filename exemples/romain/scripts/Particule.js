class Particule {
	constructor(x, y, z){
			this.position = new p5.Vector (x, y, z);
			this.speed = p5.Vector.random3D();
	}
	draw (){
		this.position.add(this.speed);

		push();
		translate(
				  this.position.x, 
				  this.position.y, 
				  this.position.z
				  );

		//ambientMaterial(100, 255,45); //pour la couleur de tes objets
		sphere (23, 50, 20, ); //ici tu peux mettre la forme que tu veux genre des cubes, spheres,..
        quad (100, 10, 10,)
        triangle (100,205,100, 40)
		//le (50, 50)c'est la taille que tes formes ont
        

		pop();
	}
}