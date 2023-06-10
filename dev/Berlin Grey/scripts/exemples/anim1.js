

class Anim1 extends Drawable{
    constructor(x, y, r){
        super();

        this.x = x;
        this.y = y;
        this.r = r;
    }
    draw(){
        push();
            rectMode(CENTER);
            translate(this.x, this.y);
            rotate(this.r);
            fill(255);
            stroke(0);
            rect(0, 0, 200, 200);
        pop();
    }
}