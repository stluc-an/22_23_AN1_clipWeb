let audioPath = "./assets/audio/West Rules/Pulso & Romain Richard/End Of Utopia EP/05.Eternal Life.mp3";
let sequencer;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    sequencer = new Sequencer(audioPath, 132);
    sequencer.registerSequence({
       
		name : "all",
        start:3,
        stop:10,
       
		onStart : (event) => {
            console.log(event)
        },
       
		onStep : (event) => {
            console.log(event)
        },
       
		onStop : (event) => {
            console.log(event)
		
        },
    });
}

function draw(){
    sequencer.update();
}

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}