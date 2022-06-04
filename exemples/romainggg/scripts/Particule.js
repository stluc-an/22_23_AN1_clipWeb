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

		//ambientMaterial( 200, 0, 200),; //pour la couleur de tes objets
		sphere (random(50), 100);
        

        //ici tu peux mettre la forme que tu veux genre des cubes, spheres,..
		//le (50, 50)c'est la taille que tes formes ont

		pop();
	}
}