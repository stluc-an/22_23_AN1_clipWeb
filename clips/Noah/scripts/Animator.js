
function numberFormat(nbr, length){
    nbr = nbr + ""; 
    nbr.length; 
    for(;nbr.length < length ; ){
        nbr = "0" + nbr; 
    }
    console.log(nbr); 
    return nbr;
}

class Animator{
    constructor(addressPatern, nbrImg){
       this.images = []; 
        this.imgNumber = 0;
        for(let compteur = 1 ; compteur <= nbrImg ; compteur ++) {
           let imgName = numberFormat(compteur,3) 
          let address = addressPatern.replace("_CHIFFRE_",imgName);
            this.images.push(loadImage(address)); 
        }
    }
    update(cursor){
        this.imgNumber = floor(cursor * (this.images.length-1));
        this.imgNumber = min(this.imgNumber, this.images.length - 1);
        this.imgNumber = max(this.imgNumber, 0);
    }
    draw(x,y,w,h){
        let img = this.images[ this.imgNumber ];
        push();
        translate(-img.width/2,-img.height/2);
        image(img,x,y); 
        pop();
    }
}