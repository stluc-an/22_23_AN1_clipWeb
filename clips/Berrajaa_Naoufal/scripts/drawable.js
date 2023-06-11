/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

class Drawable{
	constructor(){
		this._drawable = false;	//On crée une variable drawable et on lui donne la valeur false
	}
	setDrawable(value){
		/*-------------------------------------------------------------*\
		LA FONCTION DONNE A LA VARIABLE "drawable" LA VALEUR QUE L'ON CHOISIT (DE PREFERENCE "false" OU "true")
		\*-------------------------------------------------------------*/
		this._drawable = value;
	}
	isDrawable(){
		/*-------------------------------------------------------------*\
		LA FONCTION RENVOIE LA VALEUR DE "drawable" ET PERMET DE L'ASSIGNER SUR UNE NOUVELLE VARIABLE
		\*-------------------------------------------------------------*/
		return this._drawable; 
	}
	
}
