class Anim1 extends Drawable{
    constructor(x, y) { //position rectangle sur page web : x et y
        super();
        this.x = x;
        this.y = y;
    }
    draw(){
        push();
        rectMode(CENTER);
        translate(this.x, this.y);
        rotate(1);
        fill (255);
        stroke(0);
        rect(0, 0, 200, 200);
        pop();
    }
}