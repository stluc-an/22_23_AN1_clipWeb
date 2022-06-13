

function numberFormat(nbr, lenght){
    nbr = nbr + ""; 
    //chaine de caractère
    nbr.length;
    for(;nbr.length < lenght;){
        nbr = "0" +nbr;
    }
    console.log(nbr);
    return nbr;
}



class Animator {
    constructor(addressPatern,nbrImg){
        this.images = [];
        for(let compteur = 1; compteur <= nbrImg ; compteur ++){
            let imgName = numberFormat(compteur,3);
            let address = addressPatern.replace("_CHIFFRE_", imgName);
            let img = loadImage(address);
            this.images.push(img);
            console.log(address);
        }
        
        
         //loadImage(addressPatern)
        
    }
  draw(CURSOR, x, y, w, h){
    let imgNumber = floor (CURSOR * this.images.length) ; 
      let img = this.images[imgNumber];
      image(img, x, y, w, h)  
      
  }  
}