/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/


//on crée une fonction pour modifier le nom des documents qu'on appelle, ici appeler les images par leur numéro
function numberFormate (nbr, length){
	nbr = nbr + "";
	// le .length permet de demander de combien de caractères elle est composée
	nbr.length;
	//tant que le nombre de caractères de nbr ne dépasse pas la length on ajoute des 0 devant
	for(;nbr.length < length;){
		nbr = "0" + nbr;
	}
	return nbr;

}

class Animator{
	constructor(addressPatern, nbrImg){
		this.images = [];
		this.imgNumber = 0;

	for(let compteur = 1 ; compteur <= nbrImg; compteur ++){	
	let imgName = numberFormate(compteur, 3);
	let address = addressPatern.replace("_CHIFFRE_", imgName);
	let img = loadImage(address);
	this.images.push(img);
	console.log(address);
		}	
	}
	update(cursor){
		this.imgNumber = floor(cursor * this.images.length);
	}
	draw(x, y , w, h){
		let img = this.images[this.imgNumber];
		image(img, x, y, w, h);
	}

}