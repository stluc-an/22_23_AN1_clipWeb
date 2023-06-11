let audioPath = "./assets/audio/Parking/TechnoXCrystalCastlesXGesaffelsteinTypeBeatPARKING.mp3";
let sequencer;

let particules = [];
let mainCamera;

function setup() {
  colorMode(RGB);

  frameRate(60);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  mainCamera = createCamera();

  sequencer = new Sequencer(audioPath, 125, false);

  sequencer.registerSequence({
    name: "terre",
    onStart: (event) => {
      let terreR = Math.random() * 1000 + 500; // Valeur aléatoire entre 500 et 1500
      let terreX = Math.random() * 200 - 100; // Valeur aléatoire entre -100 et 100
      let terreZ = Math.random() * 200 - 100; // Valeur aléatoire entre -100 et 100

      mainCamera.setPosition(terreX, 0, terreZ);
      mainCamera.lookAt(0, 0, 0);
    },
    onStep: (event) => {
      if (event.step >= 1 && event.step < 10) {
        let particule = new Particule(0, 0, 0, false); // Crée une sphère avec un disque autour
        particules.push(particule);
        setInterval(() => {
          let newColor = color(random(255), random(255), random(255)); // Couleur aléatoire
          particule.setColor(newColor);
        }, 1000); // Changement de couleur toutes les secondes
      }
    },
    onStop: (event) => {
      particules = []; // Réinitialise les particules
    },
  });

  sequencer.registerSequence({
    name: "saturne",
    onStart: (event) => {
      let saturneR = Math.random() * 1500 + 1000; // Valeur aléatoire entre 1000 et 2500
      let saturneX = Math.random() * 400 - 200; // Valeur aléatoire entre -200 et 200
      let saturneZ = Math.random() * 400 - 200; // Valeur aléatoire entre -200 et 200

      mainCamera.setPosition(saturneX, 0, saturneZ);
      mainCamera.lookAt(0, 0, 0);
    },
    onStep: (event) => {
      if (event.step >= 10 && event.step < 290) {
        let particule = new Particule(0, 0, 0, true); // Crée une sphère sans disque autour
        particules.push(particule);
        setInterval(() => {
          let newColor = color(random(255), random(255), random(255)); // Couleur aléatoire
          particule.setColor(newColor);
        }, 1000); // Changement de couleur toutes les secondes
      }
    },
    onStop: (event) => {
      particules = []; // Réinitialise les particules
    },
  });

}

function draw() {
  sequencer.update();
  let R = 800;
  let x = R * cos(millis() / 1000);
  let z = R * sin(millis() / 1000);
  mainCamera.setPosition(x, 0, z);
  mainCamera.lookAt(0, 0, 0);

  particules.forEach((particule) => {
    particule.draw();
  });
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
