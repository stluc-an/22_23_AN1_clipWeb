class BackParrot extends Drawable{
    constructor (f){
        super();
        this.f = f;
    }

    draw(){

        switch (this.f)
        {
            case '1':
                push();
                noStroke();
                fill(217, 186, 28);
                rect(0, 0, innerWidth, innerHeight);
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '2':
                push();
                noStroke();
                fill(135, 107, 217);
                rect(0, 0, innerWidth, innerHeight);
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '3':
                push();
                noStroke();
                fill(129, 217, 160);
                rect(0, 0, innerWidth, innerHeight);
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '4':
                push();
                noStroke();
                fill(219, 131, 192);
                rect(0, 0, innerWidth, innerHeight);
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '5':
                push();
                noStroke();
                fill(90, 174, 174);
                rect(0, 0, innerWidth, innerHeight);                
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '6':
                push();
                noStroke();
                fill(189, 71, 109);
                rect(0, 0, innerWidth, innerHeight);                
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '7':
                push();
                noStroke();
                fill(202, 50, 51);
                rect(0, 0, innerWidth, innerHeight);               
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '8':
                push();
                noStroke();
                fill(230, 179, 179);
                rect(0, 0, innerWidth, innerHeight);
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
                case '9':
                push();
                noStroke();
                fill(116, 160, 217);
                rect(0, 0, innerWidth, innerHeight);
                image(myParrotFond, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            default:
                console.log(':)');
        }
        
    }
}