/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/

let newObj;
let Sequence_1;
let Sequence_2;
let Sequence_3;
let Sequence_4;
let Sequence_5;
let Sequence_6; 
let Sequence_7;
let Sequence_8;
let Sequence_9;
let sequencer;
let audioPath = "./assets/audio/Paradis.mp3"; 

let runSequence1 = false;
let runSequence2 = false;
let runSequence3 = false;
let runSequence4 = false;
let runSequence5 = false;
let runSequence6 = false;
let runSequence7 = false;
let runSequence8 = false;
let runSequence9 = false;

function preload(){
    
    // newObj = loadModel('assets/3D/re.obj', true);
    
     Sequence_1 = new Animator("./assets/Animation/Sequence1/_CHIFFRE_.png",24);

     Sequence_2 = new Animator("./assets/Animation/Sequence2/_CHIFFRE_.png",88);
   
     Sequence_3 = new Animator("./assets/Animation/Sequence3/_CHIFFRE_.png",142);
    
     Sequence_4 = new Animator("./assets/Animation/Sequence4/_CHIFFRE_.png",88);

     Sequence_5 = new Animator("./assets/Animation/Sequence5/_CHIFFRE_.png",90);

     Sequence_6 = new Animator("./assets/Animation/Sequence6/_CHIFFRE_.png",132);

     Sequence_7 = new Animator("./assets/Animation/Sequence7/_CHIFFRE_.png",62);
         
     Sequence_8 = new Animator("./assets/Animation/Sequence8/_CHIFFRE_.png",48);
    
     Sequence_9 = new Animator("./assets/Animation/Sequence9/_CHIFFRE_.png",52);
     
   
}

function setup() {	
	colorMode(RGB);
	
	
    
	createCanvas(window.innerWidth, window.innerHeight);

	sequencer = new Sequencer(audioPath, 128,false);
	initSequencerStuff();
    //sequencer pour mettre à l'endroit 
    
    
}


function draw(){
	sequencer.update();
    
    
    
    if(runSequence1){
        Sequence_1.draw(width/2,height/2,0,0);
    }
    if(runSequence2){
        Sequence_2.draw(width/2,height/2,0,0);
    }
     if(runSequence3){
        Sequence_3.draw(width/2,height/2,0,0);
    }
       
     if(runSequence4){
        Sequence_4.draw(width/2,height/2,0,0);
    }
   
     if(runSequence5){
        Sequence_5.draw(width/2,height/2,0,0);
    }
   
     if(runSequence6){
        Sequence_6.draw(width/2,height/2,0,0);
    }
   
     if(runSequence7){
        Sequence_7.draw(width/2,height/2,0,0);
    }
   
     if(runSequence8){
        Sequence_8.draw(width/2,height/2,0,0);
    }
 
     if(runSequence9){
        Sequence_9.draw(width/2,height/2,0,0);
     }
   
 
  

   /* 
    fill(255,random(23,123),random(23,123));
       
     translate();
    
    // translate déplace le point 0,0
    
    rotate(millis()*0.001);
    
    // rotate fait tourner le point autour du point 0,0
    
    ellipse(0,0,random(0,50),random(0,50));
   
    
    fill(random(0,138),random(200,255),random(0,160));
    
     translate(window.innerWidth, window.innerHeight);
    
    // translate déplace le point 0,0
    
    rotate(millis()*0.001);
    
    // rotate fait tourner le point autour du point 0,0
    
    ellipse(0,0,random(0,50),random(0,50));
    
    
fill(random(56,158),random(25,135),255);

     translate(window.innerWidth, window.innerHeight);
    
    // translate déplace le point 0,0
    
    rotate(millis()*0.001);
    
    // rotate fait tourner le point autour du point 0,0
    
    ellipse(0,0,random(0,50),random(0,50));
  
  
}
  

*/
    
    
    
    
}

function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}

  
//function preload() {
  //
//}
  


  
//function draw() {
  //background('green');
  
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  
 //;
//}