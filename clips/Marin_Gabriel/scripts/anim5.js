
let scalar = 70;
let speed = 0.05;


class Anim5 extends Drawable{
 draw() {
    for (let x = 0; x < width; x += scalar * 2) {
        for (let y = 0; y < height; y += scalar * 2) {
          // Calcul des coordonnées du centre
          let centerX = x + scalar + sin(angle) * scalar;
          let centerY = y + scalar + cos(angle) * scalar;
          
          // Dessiner la forme géométrique complexe
          for (let i = 0; i < TWO_PI; i += TWO_PI / 6) {
            let posX = centerX + cos(i + angle) * scalar;
            let posY = centerY + sin(i + angle) * scalar;
            
            let size = sin(angle) * scalar / 2;

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
            noStroke();
            ellipse(posX, posY, size, size);
          }
        }
      }
      
      // Mettre à jour les paramètres de l'animation
      angle += speed;
      colorOffset += 1;
  }
 }