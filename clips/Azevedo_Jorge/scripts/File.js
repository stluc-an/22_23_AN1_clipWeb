


class Parrot extends Drawable{
    constructor (f){
        super();
        this.f = f;
    }

    draw(){

        if (this.f == true) {
            image(myParrotImage, 0, 0, innerWidth, innerHeight);
            //apparait image à l'endroit
        }
        else {
            image(myParrotImage2, 0, 0, innerWidth, innerHeight);
            //image à l'envers
        }
    }
}