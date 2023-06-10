
let radius2;
let angleSpeed;
let strokeWeightValue = 1; // Épaisseur initiale du stroke
let numCircles = 100; // Nombre de cercles

class Anim10 extends Drawable{
    draw(){ 
      translate(width / 2, height / 2);
      // Augmente lentement l'épaisseur du stroke
  strokeWeightValue += 0.001;
  strokeWeight(strokeWeightValue);
  
  // Dessine une série de cercles tournant autour du centre
  for (let i = 0; i < numCircles; i++) {
    let rotatingRadius = radius * i * 0.3;
    let rotatingAngle = angle * (i + 1);
    let x = rotatingRadius * cos(rotatingAngle);
    let y = rotatingRadius * sin(rotatingAngle);
    
    push();
    translate(x, y);
    rotate(angle * (i + 1));
    stroke(255);
    noFill();
    ellipse(0, 0, 100, 100);
    pop();
  }
  
  angle += angleSpeed;
}}