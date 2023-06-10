
let featherSpeed = 1;
let positionY;
function feather(x,y){
   //faire en sorte que la plume tombe bah comme une plume  --> pour le moment faire en sorte quelle tombe simplement
   image(myFeatherImage, x, y, 50, 100);
}

class Feathers extends Drawable{
    constructor (x, y){
        super();
        this.x=x;
        this.y = y;
        positionY = this.y;
    }
    //j'ai été voir les exemples passés avec les flocons de neige et ils utilisaient la fonction display pour les affichés
    draw(){
        feather(this.x, positionY);
        positionY += featherSpeed;
    }
    
}