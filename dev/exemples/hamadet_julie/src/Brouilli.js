class Brouilli{
	constructor(){
		this.isVisible = false;
		this.calque = createGraphics(width, height); // Tu crée un calque (une zone de dessin hors écran dont tu ne rafraichi jamais le background)
		imageMode(CENTER);
	}
	draw(){
		if(!this.isVisible)return;
		let x = lerp(0, width, noise(200, frameCount*0.05) ); // tu calcule (noise) une nouvelle position sur l'horizontal
		let y = lerp(0, height, noise(400, frameCount*0.05) ); // tu calcule (noise) une nouvelle position sur la vertical
		this.calque.fill(255, 100); // tu choisi la couleur de remplissage des formes que tu vas dessiner dans ton calque
		this.calque.noStroke(); // tu choisi la couleur de contour des formes que tu vas dessiner dans ton calque
		this.calque.ellipse(x, y,  50, 50) ;  // tu dessine un cercle en x y sur ton taclque
		push()
			scale(0.08);
		image(this.calque, 0, 0) // tu représente ton calque à l'écran comme s'il s'agissait d'une image (jpg/png) chargée depuis ton disque dur
		pop();
	}
}