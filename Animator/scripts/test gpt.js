//let radius = 10;
//let waveSpeed = 2;
//let waveAmplitude = 50;

//function setup() {
//  createCanvas(400, 400);
//}

//function draw() {
  //background(220);

  // Dessiner une série de cercles concentriques
  //for (let r = radius; r < height; r += 20) {
    // Calculer la position verticale de chaque cercle en fonction du temps
    //let y = height/2 + sin((frameCount/waveSpeed) + r/radius) * waveAmplitude;

    // Dessiner le cercle
    //noFill();
    //stroke(0);
    //circle(width/2, y, r*2);
  //}
//}






//function setup() {
 // createCanvas(400, 400);
 // noFill();
 // stroke(255);
  //strokeWeight(2);
//}

//function draw() {
 // background(0);

  // Dessiner une forme abstraite complexe
 // beginShape();
 // for (let i = 0; i < 10; i++) {
   // let x = random(width);
   // let y = random(height);
   // curveVertex(x, y);
  //}
  //endShape(CLOSE);
//}


/*


let shapes = [];

function setup() {
  createCanvas(400, 400);
  
  // Créer plusieurs formes aléatoires
  for (let i = 0; i < 10; i++) {
    let shape = [];
    
    // Ajouter des points aléatoires à la forme
    for (let j = 0; j < 10; j++) {
      shape.push(createVector(random(width), random(height)));
    }
    
    // Ajouter la forme à la liste de formes
    shapes.push(shape);
  }
}

function draw() {
  background(220);

  // Dessiner chaque forme
  for (let i = 0; i < shapes.length; i++) {
    // Dessiner une forme remplie avec une couleur aléatoire
    fill(random(255), random(255), random(255), 50);
    noStroke();
    beginShape();
    for (let j = 0; j < shapes[i].length; j++) {
      vertex(shapes[i][j].x, shapes[i][j].y);
    }
    endShape(CLOSE);
    
    // Dessiner une bordure pour la forme avec une épaisseur aléatoire
    stroke(random(255), random(255), random(255));
    strokeWeight(random(5));
    noFill();
    beginShape();
    for (let j = 0; j < shapes[i].length; j++) {
      vertex(shapes[i][j].x, shapes[i][j].y);
    }
    endShape(CLOSE);
  }
}
*/




/*
function setup() {
  createCanvas(400, 400);
  noStroke();
  smooth();
}

function draw() {
  background(220);

  // Dessiner une série de formes abstraites
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);

    fill(random(255), random(255), random(255), 50);

    // Dessiner une forme complexe à partir de courbes de Bézier aléatoires
    beginShape();
    vertex(x, y);

    for (let j = 0; j < 5; j++) {
      let px = x + random(-50, 50);
      let py = y + random(-50, 50);
      let cx1 = x + random(-50, 50);
      let cy1 = y + random(-50, 50);
      let cx2 = x + random(-50, 50);
      let cy2 = y + random(-50, 50);

      bezierVertex(cx1, cy1, cx2, cy2, px, py);

      x = px;
      y = py;
    }

    endShape(CLOSE);
  }
}
*/


/*
let x, y;
let easing = 0.05;

function setup() {
  createCanvas(400, 400);
  noStroke();
  smooth();

  // Initialiser la position de la forme
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);

  // Dessiner la forme abstraite
  fill(200, 100, 50, 100);
  ellipse(x, y, 100, 100);

  // Déplacer la forme abstraite lentement vers une position aléatoire
  let targetX = random(width);
  let targetY = random(height);

  x += (targetX - x) * easing;
  y += (targetY - y) * easing;
}

*/

/*
let shapeSize = 50;
let shapeSpeed = 0.05;
let shapeAngle = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
  smooth();
}

function draw() {
  background(220);

  // Calculer la position de la forme
  let x = width/2 + sin(shapeAngle) * (width/2 - shapeSize);
  let y = height/2 + cos(shapeAngle) * (height/2 - shapeSize);

  // Dessiner la forme
  fill(random(255), random(255), random(255), 50);
  ellipse(x, y, shapeSize, shapeSize);

  // Mettre à jour l'angle de la forme pour la faire tourner lentement
  shapeAngle += shapeSpeed;
}
*/
/*
let shapes = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
  smooth();

  // Créer plusieurs formes abstraites
  for (let i = 0; i < 5; i++) {
    shapes.push(new Shape(random(width), random(height)));
  }
}

function draw() {
  background(220);

  // Dessiner et mettre à jour chaque forme
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].display();
    shapes[i].update();
  }
}

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(50, 150);
    this.color = color(random(255), random(255), random(255), 50);
    this.speed = random(0.1, 0.5);
    this.angle = 0;
  }

  // Dessiner la forme
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    fill(this.color);
    ellipse(0, 0, this.size, this.size);

    pop();
  }

  // Mettre à jour la position et l'angle de la forme
  update() {
    this.angle += this.speed;
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    // Si la forme sort de l'écran, la réinitialiser
    if (this.x < -this.size || this.x > width + this.size || this.y < -this.size || this.y > height + this.size) {
      this.x = random(width);
      this.y = random(height);
      this.angle = 0;
    }
  }
}

*//*
let x, y, w, h, r, t;

function setup() {
  createCanvas(400, 400);
  noStroke();
  smooth();
  
  // Initialiser les variables pour la première forme
  x = width/2;
  y = height/2;
  w = 100;
  h = 100;
  r = 50;
  t = 0;
}

function draw() {
  background(220);

  // Dessiner la forme abstraite
  fill(random(255), random(255), random(255), 50);

  beginShape();
  for (let angle = 0; angle < 360; angle++) {
    let px = x + cos(radians(angle + t)) * w/2 * noise(angle/10, t/50);
    let py = y + sin(radians(angle + t)) * h/2 * noise(angle/10, t/50);
    vertex(px, py);
  }
  endShape(CLOSE);

  // Mettre à jour les variables pour la prochaine forme
  x += random(-1, 1);
  y += random(-1, 1);
  w += random(-1, 1);
  h += random(-1, 1);
  r += random(-1, 1);
  t += 0.1;
}

*/

/*
let centerX, centerY; // position centrale du halo
let radius = 50; // rayon initial du halo
let angle = 0; // angle initial de déplacement
let speed = 0.05; // vitesse de rotation
let numHalos = 8; // nombre de halos juxtaposés

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(200);
  noFill();
  strokeWeight(2);
  stroke(255, 0, 0);
  for (let i = 0; i < numHalos; i++) {
    let currentRadius = radius + i * 10; // augmente le rayon du halo pour chaque itération
    let currentX = centerX + currentRadius * cos(angle + i * PI / 4); // calcule la position x du halo
    let currentY = centerY + currentRadius * sin(angle + i * PI / 4); // calcule la position y du halo
    ellipse(currentX, currentY, currentRadius * 2, currentRadius * 2); // dessine le halo
  }
  angle += speed; // incrémente l'angle de déplacement à chaque frame
}
*/
/*
let centerX, centerY; // position centrale
let size; // taille initiale de la forme
let speed = 0.5; // vitesse de rétrécissement de la forme
let shapePoints = []; // tableau de points pour la forme

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  size = width / 2;
}

function draw() {
  background(200);
  noFill();
  strokeWeight(2);
  stroke(255, 0, 0);

  // créer la forme abstraite avec une série de points
  shapePoints = createShapePoints(size);
  beginShape();
  for (let i = 0; i < shapePoints.length; i++) {
    vertex(shapePoints[i].x, shapePoints[i].y);
  }
  endShape(CLOSE);

  // réduire la taille de la forme et la déplacer vers le centre
  size -= speed;
  if (size < 0) {
    size = width / 2;
  }
}

function createShapePoints(size) {
  let points = [];
  for (let i = 0; i < 10; i++) {
    let angle = i * TWO_PI / 10;
    let x = centerX + (size * cos(angle));
    let y = centerY + (size * sin(angle));
    points.push(createVector(x, y));
  }
  return points;
}
*/


/*
let shapes = []; // tableau des formes
let numShapes = 10; // nombre de formes à créer
let maxShapeSize = 100; // taille maximale de la forme
let speed = 1; // vitesse de déplacement

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  // Crée des formes aléatoires avec des tailles et des couleurs aléatoires
  for (let i = 0; i < numShapes; i++) {
    shapes.push({
      x: random(width),
      y: random(height),
      size: random(maxShapeSize),
      color: color(random(360), 80, 80)
    });
  }
}

function draw() {
  background(200);
  // Dessine chaque forme et la déplace vers le centre
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    fill(shape.color);
    ellipse(shape.x, shape.y, shape.size, shape.size);
    let dx = width / 2 - shape.x;
    let dy = height / 2 - shape.y;
    let distToCenter = sqrt(dx * dx + dy * dy);
    shape.x += dx / distToCenter * speed;
    shape.y += dy / distToCenter * speed;
    // Si la forme atteint le centre, la replace aléatoirement sur le bord de l'écran
    if (distToCenter < shape.size / 2) {
      shape.x = random(width);
      shape.y = random(height);
      shape.size = random(maxShapeSize);
      shape.color = color(random(360), 80, 80);
    }
  }
}
*/







/*
let x, y; // position des formes
let size; // taille des formes

function setup() {
  createCanvas(400, 400); // taille de la zone de dessin
  x = width/2; // position initiale en x
  y = height/2; // position initiale en y
  size = 50; // taille initiale des formes
}

function draw() {
  background(255); // couleur de fond
  
  // dessiner une forme abstraite
  noFill(); // pas de remplissage
  strokeWeight(3); // épaisseur de trait
  stroke(0); // couleur du trait
  
  // déplacement vers le centre
  x += (width/2 - x) * 0.01; // déplacement en x vers le centre
  y += (height/2 - y) * 0.01; // déplacement en y vers le centre
  
  // boucle de dessin des formes
  for (let i = 0; i < 10; i++) {
    ellipse(x, y, size + i*10); // dessiner une ellipse de taille croissante
  }
  
  // ajuster la taille des formes
  size -= 0.1;
  if (size <= 0) {
    size = 50;
  }
}
*/
