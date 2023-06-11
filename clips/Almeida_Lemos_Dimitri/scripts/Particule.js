class Particule {
	constructor(x, y, z, isDonut = false) {
		this.position = new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
		this.isDonut = isDonut;
	}

	draw() {
		this.position.add(this.speed);
		push();
		translate(this.position.x, this.position.y, this.position.z);
		rotateX(frameCount * 0.01);
		rotateY(frameCount * 0.01);

		// Dessin de la sphère (planète)
		sphere(50);

		if (this.isDonut) {
			// Dessin de l'anneau (torus)
			noFill();
			stroke(255);
			torus(80, 10);
		}

		// Nouvelles formes géométriques
		if (this.isPyramid) {
			// Dessin d'une pyramide
			fill(255, 0, 0);
			stroke(255);
			rotateY(frameCount * 0.02);
			rotateZ(frameCount * 0.03);
			// Dessinez la pyramide ici
			// Exemple : pyramid(100, 100);
		}

		if (this.isCone) {
			// Dessin d'un cône
			fill(0, 255, 0);
			stroke(255);
			rotateY(frameCount * 0.02);
			rotateZ(frameCount * 0.03);
			// Dessinez le cône ici
			// Exemple : cone(50, 100);
		}

		if (this.isBox) {
			// Dessin d'un cube
			fill(0, 0, 255);
			stroke(255);
			rotateX(frameCount * 0.02);
			rotateY(frameCount * 0.03);
			// Dessinez le cube ici
			// Exemple : box(80);
		}

		pop();
	}
}
