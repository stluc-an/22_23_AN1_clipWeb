function sequenceBase2(x, s, f, b, ogc, odc){
    sequencer.registerSequence({
        name : "backgroundEerie" + x,
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
    
    
    compteurBDT = 0;
    diametreBCT = 5;
    sequencer.registerSequence({
        
        name : "oeilTwin" + x,
        start : s,
        steps : [1, 1+1/8, 1+2/8, 1+3/8, 1+4/8, 1+5/8, 1+6/8, 1+7/8],
        stop : f,
        onStart : (event) => {
            console.log(event)
            console.log(diametreBC)
            myBirdCirclesTwinL.push(new BirdCircle(width*0.33, height*0.5, diametreBCT, ogc));
            myBirdCirclesTwinR.push(new BirdCircle(width*0.66, height*0.5, diametreBCT, odc));
            myBirdCirclesTwinL[compteurBDT].setDrawable(true);
            myBirdCirclesTwinR[compteurBDT].setDrawable(true);
            compteurBDT ++;
    
        },
        onStep : (event) => {
            console.log(event)
    
            diametreBCT = myBirdCirclesTwinL[0].s = myBirdCirclesTwinL[0].s + 0.25;
            myBirdCirclesTwinL.push(new BirdCircle(width*0.33, height*0.5, diametreBCT, ogc));
            myBirdCirclesTwinR.push(new BirdCircle(width*0.66, height*0.5, diametreBCT, odc));
            myBirdCirclesTwinL[compteurBDT].setDrawable(true);
            myBirdCirclesTwinR[compteurBDT].setDrawable(true);
            compteurBDT ++;
            //chaque step l'oeil grandit
        },
        onStop : (event) => {
            console.log(event)
    
            myBirdCirclesTwinL[compteurBDT-1].setDrawable(false);
            myBirdCirclesTwinR[compteurBDT-1].setDrawable(false);
            /*myBirdCircles.length = 1 
            pour qu'il reste l'image en fond*/
            myBirdCirclesTwinL.length = 0;
            myBirdCirclesTwinR.length = 0;
            compteurBDT = 0;
            diametreBCT = 15;
        },	
    });
    
    }