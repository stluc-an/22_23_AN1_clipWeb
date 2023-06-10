class Sing extends Drawable{
    constructor (f){
        super();
        this.f = f;
    }

    draw(){

        switch (this.f)
        {
            case '1':
                push();
                image(parrotSing1, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '2':
                push();
                image(parrotSing2, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '3':
                push();
                image(parrotSing3, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '4':
                push();
                image(parrotSing4, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            case '5':
                push();
                image(parrotSing5, 0, 0, innerWidth, innerHeight);
                pop();
                break;
            
            default:
                console.log(':)');
        }
        
    }
}