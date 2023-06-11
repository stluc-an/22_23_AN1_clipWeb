let t = 0;

class Anim3 extends Drawable{
    draw(){ 
        let numCircles = 35;
        let radius = 55;
        let currentColor = lerpColor(colorStart, colorEnd, t);
      
        for (let i = 0; i < numCircles; i++) {
          let angle = map(i, 0, numCircles, 0, TWO_PI);
          let x = width / 2 + cos(angle + t) * 200;
          let y = height / 2 + sin(angle + t) * 200;

          let c = color(hue(currentColor), saturation(currentColor), brightness(currentColor), random(0.5, 0.9));
          
          fill(c);
          ellipse(x, y, radius, radius);
        }
      
        if (t >= 1) {
          t = 0;
          colorStart = colorEnd;
          colorEnd = color(random(360), 70, 100, 1);
        } else {
          t += 0.005;
        }
      }
   }      
