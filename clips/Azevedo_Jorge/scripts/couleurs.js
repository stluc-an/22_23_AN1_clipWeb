class Colo extends Drawable{
    constructor(v){
        super();
        this.v = v;
    }

    draw(){
        switch(this.v){
            case '1':
                background(217, 186, 28);
            break;
            case '2':
                background(135, 107, 217);
            break;
            case '3':
                background(129, 217, 160);
            break;
            case '4':
                background(219, 131, 192);
            break;
            case '5':
                background(90, 174, 174);
            break;
            case '6':
                background(189, 71, 109);
            break;
            case '7':
                background(202, 50, 51);
            break;
            case '8':
                background(230, 179, 179);
            break;
            default:
                console.log(':)');
        }
    }
}