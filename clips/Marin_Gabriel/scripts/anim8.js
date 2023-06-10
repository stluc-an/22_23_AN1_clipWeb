let numBars = 10; // Nombre de barres de l'égaliseur
let barWidth; // Largeur des barres
let barHeight = []; // Hauteur des barres
let minHeight = 10; // Hauteur minimale des barres
let maxHeight; // Hauteur maximale des barres
let barSpacing; // Espacement entre les barres
let barSpeeds = []; // Vitesses de mouvement des barres

class Anim8 extends Drawable{
    draw(){ 
      // Mise à jour des hauteurs des barres en utilisant le bruit aléatoire
      for (let i = 0; i < numBars; i++) {
        let noiseVal = noise(i * 0.1, frameCount * 0.1);
        let newHeight = map(noiseVal, 0, 1, minHeight, maxHeight);
        
        // Si la nouvelle hauteur est plus grande, la met à jour avec une vitesse plus élevée
        if (newHeight > barHeight[i]) {
          barHeight[i] = newHeight;
          barSpeeds[i] = random(8, 20);
        }
        
        // Réduit la hauteur de la barre avec une certaine vitesse
        barHeight[i] -= barSpeeds[i];
        
        // Empêche la hauteur de descendre en dessous de la hauteur minimale
        if (barHeight[i] < minHeight) {
          barHeight[i] = minHeight;
        }
      }
      
      // Dessine les barres de l'égaliseur à gauche de l'écran en rose foncé
      for (let i = 0; i < numBars; i++) {
        let xPos = i * (barWidth + barSpacing);
        let yPos = height - barHeight[i];
        
        // Couleur de remplissage rose foncé
        let fillColor = color(183, 32, 87); // Rose foncé
        
        fill(255);
        rect(xPos, yPos, barWidth, barHeight[i]);
      }
    }
    
 }    