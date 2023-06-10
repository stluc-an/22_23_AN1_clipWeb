function sequenceBase1(x, s, f, b, oc, wo){
sequencer.registerSequence({
    name : "background" + x,
    start: s,
    stop: f,
    onStart : (event) => {
        console.log(event)
        myBackgrounds.push(new Back(b));
        myBackgrounds[0].setDrawable(true);
    },
    onStep : (event) => {
        console.log(event)
        
    },
    onStop : (event) => {
        console.log(event)
        myBackgrounds[0].setDrawable(false);
        myBackgrounds.length = 0;
    },
    
});


compteurBD = 0;
diametreBC = 15;
sequencer.registerSequence({
    
    name : "oeil" + x,
    start : s,
    steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
    stop : f,
    onStart : (event) => {
        console.log(event)
        console.log(diametreBC)
        myBirdCircles.push(new BirdCircle(wo, height*0.5, diametreBC, oc));
        myBirdCircles[compteurBD].setDrawable(true);
        compteurBD ++;

    },
    onStep : (event) => {
        console.log(event)

        diametreBC = myBirdCircles[0].s = myBirdCircles[0].s + 0.25;
        myBirdCircles.push(new BirdCircle(wo, height*0.5, diametreBC, oc));
        myBirdCircles[compteurBD].setDrawable(true);
        compteurBD ++;
        //chaque step l'oeil grandit
    },
    onStop : (event) => {
        console.log(event)

        myBirdCircles[compteurBD-1].setDrawable(false);
        /*myBirdCircles.length = 1 
        pour qu'il reste l'image en fond*/
        myBirdCircles.length = 0;
        compteurBD = 0;
        diametreBC = 15;
    },	
});
}