// function numberFormat(nbr,length){
// 	nbr = nbr + "";
// 	nbr.length;
// 	for(;nbr.length < length;){
// 		nbr = "0"+nbr;

// 	}
// 	console.log(nbr);
// 	return nbr;
// }

class Animator {
	constructor(addressPatern, nbrImg){
		this.images = [];
		this.imgNumber = 0;
		for(let compteur = 1 ; compteur <= nbrImg ; compteur ++){
            //let imgName = numberFormat(compteur,1);
			//let address = addressPatern.replace("_CHIFFRE_", imgName);
			let address = addressPatern.replace("_CHIFFRE_", compteur);
			let img = loadImage(address);
			this.images.push(img);
		}

	}

	update(cursor){
        this.imgNumber = floor(cursor * this.images.length);

	}

	draw(cursor, x, y, w, h){ //l'avancé de lecture en bas la
		
		let img = this.images [ this.imgNumber ];
		image(img, x, y, w, h);

	}
}