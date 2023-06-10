/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

class Anim1 extends Drawable{ //extend appelle la classe Drawable qui se trouve dans le fichier drawable.js
	/*-------------------------------------------------------------*\
	LA CLASSE QUE L'ON CREE VA DESSINER DES RECTANGLES LA OU ON VEUT
	\*-------------------------------------------------------------*/
	constructor(x=100, y=10){ /*on décrit les variables x et y et ont leur donnent une valeur par défaut
		(donc si on utilise la classe et que l'on n'assigne rien a x et y il prennent cette valeur)*/
		super();//appelle le constructor de drawable
		this.x = x;//
		this.y = y;//this va créer les variables x et y dans la classe
	}
	draw(){
		push();
		rectMode(CENTER);
		translate(this.x, this.y)
		rotate(1);
		stroke(200, 180, 20)
		//noFill(); //si vous utilisé noFill les rectangle dessiner ne vont pas se superposer
		rect(0,0, 200, 200);
		pop();
    
    }

}



