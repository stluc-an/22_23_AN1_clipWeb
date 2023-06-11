/*----------------------------------------*\
  22_23_AN1_clipWeb - drawable.js
  @author Delatte Emma
  @Date:   2023-03-17 12:17:07
  @Last Modified time: 2023-03-17 12:22:36
\*----------------------------------------*/

//permet de sécurier le chargement de mes images//
//l'avion peut être true/attérir seulement si il remplit les conditions recquises dans la class deawable//

class Drawable{
	constructor(){  //le mot clé constructor contient les étapes de création de l'objet
		this._drawable = false;  //dans cette phrase,
		                         //    this fait référence à l'objet que l'on crée (this. = celui-ci)
		                         //    _drawable est un membre de l'objet que l'on crée
								 //    dans ce cas précis, on initialise le memebre _drawable à à faux (falseà) car n'ayant rien à dessiner, on ne sait rien dessiner
	}
	setDrawable(value){	//création d'un méthode (ce qu'on peut faire avec nos membres, dans cas ci, le membres de l'objet _drawable)
		this._drawable = value; //Dans cette méthode, on défini le membre _drawable de notre objet avec la valeur qu'on lui donne en paramètre (value) exemple (true ou false)
	}
	isDrawable(){		//Création d'une méthode qui permet d'obtenir la valeur d'un membre de notre objet
		return this._drawable;  //Cette méthode va retourner la valeur de notre membre _drawable, qui aura soit la valeur false soit la valeur true
	}
}