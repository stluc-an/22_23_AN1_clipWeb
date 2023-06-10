function numberFormat(n, length) {
    
    n = "" + n; 
    while(n.length< length){
        n = "0"+n;
    }
    
    return n; //return recupère un resultat de la fonction et la renvoie a l'autre fonction
}


class ANimator {
    constructor(addressGenerique, imgCount){ //on va demander au constructor de charger les images
        
        //pour eviter de taper 40 lignes de codes avec image 1, image 2 ...on s'implifie
        
        this.imgs = []; //variable qui contient les images une fois chargé 
        
        for(let i = 1 ; i < imgCount ; i ++){ //la boucle
            let imageNumber = numberFormat (i, 2);//le 2 est pour le nombre de charactère que j'ai (01,02,03...) si c'etait 001,002 = 3 charactère
            let imgAdr = addressGenerique.replace("[IMG_NUM]", imageNumber ); 
            this.imgs.push(loadImage(imgAndr));
        }
        
       
        
    }
}