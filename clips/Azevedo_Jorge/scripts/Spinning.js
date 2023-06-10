let c1;
let c2;
let c3;
let c4;
let c5;
let c6;

let pw;
let ph;

class Spinning extends Drawable{
    constructor(c){
        super();
        this.c = c;
    }

    draw(){

        switch(this.c){
            case '1':
                c1 = 90;
                c2 = 174;
                c3 = 174;

                c4 = 135;
                c5 = 107;
                c6 = 217;

                pw = width*0.1;
                ph = height*0.1;
                break;
            case '2':
                c1 = 48;
                c2 = 179;
                c3 = 54;

                c4 = 217;
                c5 = 186;
                c6 = 28;

                pw = width*0.9;
                ph = height*0.1;
                break;
            case '3':
                c1 = 229;
                c2 = 132;
                c3 = 27;

                c4 = 116;
                c5 = 160;
                c6 = 217;

                pw = width*0.1;
                ph = height*0.9;
                break;
            case '4':
                c1 = 219;
                c2 = 131;
                c3 = 192;

                c4 = 189;
                c5 = 71;
                c6 = 109;

                pw = width*0.9;
                ph = height*0.9;
                break;
        }

        push();

        noStroke();
        rectMode(CENTER);
        translate(pw, ph);
        rotate(millis()/5);
        fill(c1, c2, c3);
        square(0, 0, 120);
        fill(c4, c5, c6);
        square(0, 0, 80);
        fill(c1, c2, c3);
        square(0 , 0, 40);

        pop();
    }
}