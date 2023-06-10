function numberFormat(n, length){
    n = "" + n;
    while(n.length < length){
        n = "0"+n;
    }
    return n;

}

class Animator {
    constructor(addressGenerique, imgCount){

    this.imgs = [];

        for(let i = 1; i<= imgCount ; i++){
            let imageNumber = numberFormat(i, 4);
            let imgAdrenaline = addressGenerique.replace ("[NUM]", imageNumber);
            this.imgs.push(loadImage(imgAdrenaline));
        }

    }
}