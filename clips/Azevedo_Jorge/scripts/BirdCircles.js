function eyeBird(x, c, s){
    
    push();
    strokeWeight(5/4*x);
    stroke(c, s, 0);
    fill(200, 195, 195);
    circle(0, 0, 10*x);
    pop();

    push();
    strokeWeight(14/15*x);
    stroke(160, 160, 160);
    noFill();
    circle(0, 0, 7*x);
    pop();

    push();
    noStroke();
    fill(0);
    circle(0, 0, 4*x);
    pop();

}
class BirdCircle extends Drawable{
    constructor(x, y, s, m){
        super();

        this.x = x;
        this.y = y;
        this.s = s;
        this.m = m;
    }
    
    draw(){
        push();
        rectMode(CENTER);
        translate(this.x, this.y);
        if (this.m == true) {
            eyeBird(this.s, 200, 60);
        }
        else {
            eyeBird(this.s, 60, 200);
        }
        pop();
    }
}

/*Faire les yeux de perroquets qui grandissent*/