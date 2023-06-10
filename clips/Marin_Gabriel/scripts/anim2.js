
let x = 0;
let y = 0;
let d = 50;

class Anim2 extends Drawable{
    draw(){ 
        x += random(-d, d);
        y += random(-d, d);

        let currentColor = lerpColor(colorStart, colorEnd, t);
        let c = color(hue(currentColor), saturation(currentColor), brightness(currentColor), random(0.5, 0.9));
        fill(c);
        if (t >= 1) {
          t = 0;
          colorStart = colorEnd;
          colorEnd = color(random(360), 70, 100, 1);
        } else {
          t += 0.005;
        }

        push();
        fill(0);
        ellipse(x, y, d, d);
        if (x > width || x < 0) {
          x = random(width);
        }
        if (y > height || y < 0) {
          y = random(height);
        }
        ellipse(x, y, d, d);
        if (x > width || x < 0) {
          x = random(width);
        }
        if (y > height || y < 0) {
          y = random(height);
        }
        ellipse(x, y, d, d);
        if (x > width || x < 0) {
          x = random(width);
        }
        if (y > height || y < 0) {
          y = random(height);
        }
        pop();
      }

      
 
  
   }      
