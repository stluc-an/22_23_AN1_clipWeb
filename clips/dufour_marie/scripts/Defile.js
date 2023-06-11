class Defile{
  constructor(phrases){
    this.phraseSpeed = 1;
    this.phrases = phrases;
    this.phrasesPositions = [];
    this.phrasesDirections = [];
    for(let i = 0; i < phrases.length; i++) {
      //(sin(i/ phrases.length * 4* TWO_PI)+1) * width/2
      this.phrasesPositions.push(createVector(  random(width)   , i * 28 + 85));
      this.phrasesDirections.push(1);
    }
  }
  draw(){
    textSize(37);
    textAlign(CENTER, CENTER);
    for(let i = 0; i < this.phrases.length; i++) {
      // afficher la phrase à sa position actuelle
      text(this.phrases[i], this.phrasesPositions[i].x, this.phrasesPositions[i].y);
      
      // déplacer la phrase horizontalement
      this.phrasesPositions[i].x += this.phrasesDirections[i] * this.phraseSpeed;
      
      // inverser la direction de la phrase si elle dépasse les limites de l'écran
      if(this.phrasesPositions[i].x < 0 || this.phrasesPositions[i].x > width) {
        this.phrasesDirections[i] *= -1;
      }
    }
  }
}