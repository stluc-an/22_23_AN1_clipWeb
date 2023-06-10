
let angle = 0;

class Anim4 extends Drawable{
    draw(){ 
        let r = width / 2;
        let numCircles = 300;
        
      
        let centerX = width / 2;
        let centerY = height / 2;
      
        let colorAngle = 0;
        for (let i = 0; i < numCircles; i++) {
          let angleStep = TWO_PI / numCircles;
          
          let x = centerX + cos(angle + i * angleStep) * (r + sin(angle * 2 + i * angleStep * 2) * 200);
          
          let y = centerY + sin(angle + i * angleStep) * (r + sin(angle * 2 + i * angleStep * 2) * 200);
          
          let c = color(colorAngle % 360, 70, 100, 0.6);
          
          let size = random(100, 500);
        
          noStroke();
          fill(c);
          ellipse(x, y, size, size);
          colorAngle += 5;
        }
      
        angle += 0.040;
      }
   }      