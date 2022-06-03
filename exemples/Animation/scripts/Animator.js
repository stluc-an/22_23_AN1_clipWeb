function numberFormat (nbr,length){

    nbr = nbr + "";
    nbr.length;
    for (;nbr.length < length;){
        nbr="0"+nbr;
    }
    console.log(nbr);
    return nbr;

}








class Animator {
    constructor(addressPatern, nbrImg){
        this.images = [];

        for(let compteur = 1; compteur <= nbrImg; compteur ++) {
           let imgName = numberFormat (compteur, 1);
           let adress = addressPatern.replace("_CHIFFRE_",imgName);
           let img = loadImage (adress);
           this.images.push (img);
        }

       // loadImage (addressPatern);

    }
    update (cursor){
        let imgnumber = floor (cursor * this. images. length)
    }

    draw( x,y,w,h){
       
        let img = this.images[imgNumber];
        image (img,x,y,w,h);

    }
}