let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let speed1 = 0.02;
let speed2 = -0.03;
let speed3 = 0.035;
let speed4 = -0.04;
let radius = 50;




class Anim6 extends Drawable{
    draw(){for (let x = 0; x < width; x += radius * 2) {
        for (let y = 0; y < height; y += radius * 2) {
          // Calcule les coordonnées du cercle en utilisant une fonction sinusoïdale
          let offsetX = cos(angle1) * radius;
          let offsetY = sin(angle1) * radius;
          
          // Met à jour la position du cercle
          let centerX = x + radius + offsetX;
          let centerY = y + radius + offsetY;
          
          // Dessine le cercle à la position calculée
          ellipse(centerX, centerY, 50, 50);
        }
      }
      
      // Dessiner la deuxième "couche" de cercles
      for (let x = radius; x < width; x += radius * 2) {
        for (let y = radius; y < height; y += radius * 2) {
          // Calcule les coordonnées du cercle en utilisant une fonction sinusoïdale
          let offsetX = cos(angle2) * radius;
          let offsetY = sin(angle2) * radius;
          
          // Met à jour la position du cercle
          let centerX = x + radius + offsetX;
          let centerY = y + radius + offsetY;
          
          // Dessine le cercle à la position calculée
          ellipse(centerX, centerY, 50, 50);
        }
      }
      
      // Dessiner la troisième "couche" de cercles
      for (let x = radius * 2; x < width; x += radius * 2) {
        for (let y = radius * 2; y < height; y += radius * 2) {
          // Calcule les coordonnées du cercle en utilisant une fonction sinusoïdale
          let offsetX = cos(angle3) * radius;
          let offsetY = sin(angle3) * radius;
          
          // Met à jour la position du cercle
          let centerX = x + radius + offsetX;
          let centerY = y + radius + offsetY;
          
          // Dessine le cercle à la position calculée
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
        ellipse(centerX, centerY, 50, 50);
        }
      }
      
      // Dessiner la quatrième "couche" de cercles
      for (let x = radius * 3; x < width; x += radius * 2) {
        for (let y = radius * 3; y < height; y += radius * 2) {
          // Calcule les coordonnées du cercle en utilisant une fonction sinusoïdale
          let offsetX = cos(angle4) * radius;
          let offsetY = sin(angle4) * radius;
          
          // Met à jour la position du cercle
          let centerX = x + radius + offsetX;
          let centerY = y + radius + offsetY;
          
          // Dessine le cercle à la position calculée
          ellipse(centerX, centerY, 50, 50);
        }
      }
      
      // Incrémente les angles pour créer des rotations fluides pour chaque "couche"
      angle1 += speed1;
      angle2 += speed2;
      angle3 += speed3;
      angle4 += speed4;}


   }