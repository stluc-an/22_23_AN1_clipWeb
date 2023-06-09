class Anim1 extends Drawable {
    constructor(x, y){
        super();
        this.x = x;
        this.y = y;
    }
    draw(){
        push();
        rectMode(CENTER);
        translate(this.x, this.y);
        rotate(1);
        fill(160, 255, 30);
        stroke(160, 255,230);
        rect(0, 0, 200, 200);
        pop();
    }
}

 