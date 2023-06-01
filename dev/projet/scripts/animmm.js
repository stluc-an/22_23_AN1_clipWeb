let song;
let fft;
let spectrum;
let img = [];

function preload() {
  song = loadSound('12-tauro.mp3');
  for (let i = 0; i < 10; i++) {
    img[i] = loadImage('sequenceClip' + i + '.png');
  }
}

function setup() {
  createCanvas(400, 400);
  fft = new p5.FFT();
  song.play();
}

function draw() {
  background(0);

  // Obtenir le spectre de fréquence de la musique
  spectrum = fft.analyze();

  // Calculer la somme des fréquences pour chaque image
  let total = 0;
  let index = 0;
  for (let i = 0; i < spectrum.length; i++) {
    total += spectrum[i];
    if (i > index * (spectrum.length / img.length)) {
      img[index].resize(width, height);
      image(img[index], 0, 0);
      index++;
      total = 0;
    }
  }
}
