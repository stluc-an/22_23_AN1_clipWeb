

class Back extends Drawable{
    constructor (f){
        super();
        this.f = f;
    }

    draw(){

        switch (this.f)
        {
            case '1':
                image(background1, 0, 0, innerWidth, innerHeight);
                break;
            case '2':
                image(background2, 0, 0, innerWidth, innerHeight);
                break;
            case '3':
                image(background3, 0, 0, innerWidth, innerHeight);
                break;
            case '4':
                image(background4, 0, 0, innerWidth, innerHeight);
                break;
            case '5':
                image(background5, 0, 0, innerWidth, innerHeight);
                break;
            case '6':
                image(background6, 0, 0, innerWidth, innerHeight);
                break;
            case '7':
                image(background7, 0, 0, innerWidth, innerHeight);
                break;
            case '8':
                image(background8, 0, 0, innerWidth, innerHeight);
                break;
            default:
                console.log(':)');
        }
    }
}