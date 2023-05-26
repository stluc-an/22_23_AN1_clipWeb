class CircleHole extends Drawable{
	constructor(c = color(255, 0, 0), lex = width/2, ley = height/2, nbCarre = 20, rayon = 60, rot = 0.02){
		super();
		this.nbrCarres1 = nbCarre; // nombre de carrés
		this.rayon1 = rayon; // rayon du cercl, e
		this.angle = 0; // angle initial
		this.alphaRot = rot;
		this.color = c;
		this.lex = lex;
		this.ley = ley;
	}
	draw(){
		this.angle += this.alphaRot; // vitesse de rotation
		let angleCarre1 = TWO_PI / this.nbrCarres1; // angle de chaque carré
		push();
		translate(this.lex, this.ley);
		for (let i = 0; i < this.nbrCarres1; i++) {

			// calculer la position de chaque carré
			let x = cos(this.angle + angleCarre1*i) * this.rayon1;
			let y = sin(this.angle + angleCarre1*i) * this.rayon1;

			// dessiner le carré
			noStroke();
			fill(this.color);
			rectMode(CENTER);
			rect(x, y, 20, 20);
		}
		pop();
	}
}