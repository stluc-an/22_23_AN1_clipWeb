
function numberFormat(nbr, length) {
	nbr = nbr +"";
	for(;nbr.length < length;){
		nbr="0"+nbr;
	}
	console.log(nbr);
	return nbr;
}

class Animator {
	constructor(addressPatern, nbrImg){
		this.images = [];
		this.imgNumber = 0;
		for(let compteur = 0; compteur < nbrImg ; compteur++){
			 let imgName = numberFormat(compteur, 1)
			 let address= addressPatern.replace("_CHIFFRE_",imgName)
			 let img = loadImage(address);
			 this.images.push(img);
		}
	}
	update(cursor){
		this.imgNumber = cursor=floor(cursor * this.images.length);
		
	}
	draw(cursor, x , y, w ,h){
		let img =this.images[ this.imgNumber]
		image(img, x, y, w, h)

	}				
}
