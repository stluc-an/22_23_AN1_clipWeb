

let audioPath = "./assets/audio/sleafordmods/Sleaford Mods - Elocution.mp3";
let sequencer ; 
let img ;
let bouche ;
let you ;
let bouger =[];
let particules = [];
let bulle = [];
let poparle = [];
let Toi = false;
let mainCamera;
let tourne = false;
let hasTodisplayImg = false;
let logoDer = false; 
let cam = false; 
let cam2 = false;
let cam3 = false;
let cam4 = false;
let You = false;
let back = false;
let back2 = false;
let logoS = false;
let Rr = 255;
let G = 204;
let B = 0;

function preload(){
    img = loadImage('./assets/photo/hautTeteNB.png'),
        bouche = loadImage('./assets/photo/basTeteNB.png')
    you = loadImage('./assets/photo/YOU.png')
    logoSleaford = loadImage('./assets/photo/logoSleaford.png')
}

function setup() {	
	colorMode(RGB);
	 
    frameRate(60);
    createCanvas(window.innerWidth, window.innerHeight,WEBGL);
    if(Toi){
    let x = random(0,width);
        let y = random(0,height);
        let d = random(10,40);
        image(you,x,y,d);
    }
      back = true;
     	 mainCamera = createCamera();
    mainCamera.setPosition(0,0,200);
    mainCamera.lookAt(0,0,0);

	sequencer = new Sequencer(audioPath,161,false );
        
	sequencer.registerSequence({
   
		name : "boules",
        start : 1,
        stop :20 ,
		onStart : (event) => {
			console.log(event)
           back = true;
        
		},
		onStep : (event) => {
			console.log(event)
            fill(255,50,30);
            particules.push( new Particule(0,0,0) );
       
		},
		onStop : (event) => {
			console.log(event)
          background(Rr,G,B);
		},

	});
    
    sequencer.registerSequence({
		name : "parle",
        
        start : 20,
        stop :65 ,
        
        /*steps :[1, 1+1/2 ],*/
		onStart : (event) => {
			console.log(event)
            fill(255,50,30);
            logoDer = true;
           hasTodisplayImg = true;
           
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
            
            hasTodisplayImg = false;
            
		},
		
	});
    
    sequencer.registerSequence({
   
		name : "clignote",
        start : 66,
        stop :100 ,
        
        steps : [ 1/2, 2, 3/2, 5 ],
		onStart : (event) => {
            
			console.log(event)
         cam = true;
            
		},
		onStep : (event) => {
			console.log(event)
          background(0,0,0);
                fill(Rr,G,B);
            if(Rr == 255){
               Rr = 0;
               G = 0;
               B = 0;
            }else{
                Rr = 255;
                G = 204;
                B = 0;
            }
            logoDer = true;
            
		},
		onStop : (event) => {
			console.log(event)
            logoDer = false;
            //cam=false;
		},
		
	});
 
    sequencer.registerSequence({
   
		name : "pop3",
        start : 100,
        stop :120 ,
		onStart : (event) => {
			console.log(event)
         
          cam = true;   
		},
		onStep : (event) => {
			console.log(event)
            bouger.push( new Bouge);
            bouger.push( new Bouge(300,200,200));
            bouger.push( new Bouge(-300,-200,-200));
            
		},
		onStop : (event) => {
			console.log(event)
           //cam = false; 
		},
		
	});
    sequencer.registerSequence({
   
		name : "pop4",
        start : 121,
        stop :129 ,
		onStart : (event) => {
			console.log(event)
         cam = true;
            
		},
		onStep : (event) => {
			console.log(event)
            
		},
		onStop : (event) => {
			console.log(event)
            
            cam = false;
            cam2= true;
		},
		
	});
    
    
    sequencer.registerSequence({
   
		name : "toi",
        start : 130,
        stop :133 ,
		onStart : (event) => {
			console.log(event)
       fill(255,50,30);
            You = true; 
            
		},
		onStep : (event) => {
			console.log(event)
          Toi = true; 
          
            
		},
		onStop : (event) => {
			console.log(event)
        cam = false;
            You = false;
		},
		
	});
    
    sequencer.registerSequence({
		name : "tourne",
        start : 134,
        stop :141 ,
        
        /*steps :[1, 1+1/2 ],*/
		onStart : (event) => {
			console.log(event)
            fill(255,204,0);
            cam = true;
           
           
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
            
            
            cam = false;
		},
		
	});
    
    sequencer.registerSequence({
		name : "elocution",
        start : 142,
        stop :145 ,
        
        /*steps :[1, 1+1/2 ],*/
		onStart : (event) => {
			console.log(event)
            fill(255,50,30);
            
           hasTodisplayImg = true;
           
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
            
            hasTodisplayImg = false;
            
		},
		
	});
    
    sequencer.registerSequence({
		name : "tourneEntre",
        start : 146,
        stop :157 ,
        
        /*steps :[1, 1+1/2 ],*/
		onStart : (event) => {
			console.log(event)
            fill(255,204,0);
            cam = true;
           
           
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
            
            
            cam = false;
		},
		
	});
    
    sequencer.registerSequence({
		name : "elocution2",
        start : 158,
        stop :161 ,
        
        /*steps :[1, 1+1/2 ],*/
		onStart : (event) => {
			console.log(event)
            fill(255,50,30);
            back = true;
           hasTodisplayImg = true;
           
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
            
            hasTodisplayImg = false;
            clear();
        
		},
		
	});
	
    sequencer.registerSequence({
		name : "tourneTrois",
        start : 162,
        stop :193,
        
        /*steps :[1, 1+1/2 ],*/
		onStart : (event) => {
			console.log(event)
            cam = true;
          
           
		},
		onStep : (event) => {
			console.log(event)
             fill(Rr,G,B);
            if(Rr == 255){
               Rr = 0;
               G = 0;
               B = 0;
            }else{
                Rr = 255;
                G = 204;
                B = 0;
            }
            logoDer = true;
		},
		onStop : (event) => {
			console.log(event)
            
            
            cam = false;
		},
		
	});
     sequencer.registerSequence({
   
		name : "toi2",
        start : 194,
        stop :196,
		onStart : (event) => {
			console.log(event)
       fill(255,50,30);
            You = true; 
            
		},
		onStep : (event) => {
			console.log(event)
          Toi = true; 
          
            
		},
		onStop : (event) => {
			console.log(event)
        
            You = false;
            logoDer = false;
             
		},
		
	});
    
    sequencer.registerSequence({
   
		name : "clignotte2",
        start : 197,
        stop :244,
		onStart : (event) => {
			console.log(event)
            back = false ;
            cam3 = true;
		},
		onStep : (event) => {
			console.log(event)
            fill(Rr,G,B);
            particules.push( new Particule(0,0,0) );
          if(Rr == 255){
               Rr = 0;
               G = 0;
               B = 0;
            }else{
                Rr = 255;
                G = 204;
                B = 0;
            }
            
		},
		onStop : (event) => {
			console.log(event)
          cam3 = false;
		},
		
	});
    sequencer.registerSequence({
    name : "clignotte22",
        start : 245,
        stop :265,
		onStart : (event) => {
			console.log(event)
            back = false ;
            cam = true;
		},
		onStep : (event) => {
			console.log(event)
            fill(Rr,G,B);
            particules.push( new Particule(0,0,0) );
            
            
          
          if(Rr == 255){
               Rr = 255;
               G = 50;
               B = 30;
            }else{
                Rr = 255;
                G = 204;
                B = 0;
            }
            
		},
		onStop : (event) => {
			console.log(event)
          cam = false;
		},
		
	});
    sequencer.registerSequence({
name : "clignotte23",
        start : 266,
        stop :290,
		onStart : (event) => {
			console.log(event)
            back = false ;
            cam3 = true;
		},
		onStep : (event) => {
			console.log(event)
            fill(Rr,G,B);
            particules.push( new Particule(0,0,0) );
          if(Rr == 255){
               Rr = 0;
               G = 0;
               B = 0;
            }else{
                Rr = 255;
                G = 204;
                B = 0;
            }
            
		},
		onStop : (event) => {
			console.log(event)
        cam3 = false;
           back = true;  
		},
		
	});
    sequencer.registerSequence({
   
		name : "clignotte3",
        start : 291,
        stop :320,
		onStart : (event) => {
			console.log(event)
         back = true; 
		},
		onStep : (event) => {
			console.log(event)
          fill(Rr,G,B);
            if(Rr == 255){
               Rr = 0;
               G = 0;
               B = 0;
            }else{
                Rr = 255;
                G = 204;
                B = 0;
            }
            logoDer = true;
		},
		onStop : (event) => {
			console.log(event)
            
            
		},
		
	});
    
    sequencer.registerSequence({
   
		name : "bubulle",
        start : 323,
        stop :354,
        steps: [1, 2, 2+3/4, 3+1/2,4,4+1/2],
		onStart : (event) => {
			console.log(event)
         tourne = true;
            back = true; 
		},
		onStep : (event) => {
			console.log(event)
            
            
            bulle.push( new Bulle(random(-200,-100),150,0) );
            bulle.push( new Bulle(random(100,200),150,0) );
            
		},
		onStop : (event) => {
			console.log(event)
            tourne = false;
            cam = false;
            
		},
		
	});
    sequencer.registerSequence({
   
		name : "commeDebut",
        start : 355,
        stop :387,
        onStart : (event) => {
            
			console.log(event)
         cam = true;
            
		},
		onStep : (event) => {
			console.log(event)
         
                fill(Rr,G,B);
            if(Rr == 255){
               Rr = 0;
               G = 0;
               B = 0;
            }else{
                Rr = 255;
                G = 204;
                B = 0;
            }
            logoDer = true;
            
		},
		onStop : (event) => {
			console.log(event)
            logoDer = false;
            cam = false;
		},
		
	});
	
    sequencer.registerSequence({
		name : "parle2",
        start : 388,
        stop :394,
        
        /*steps :[1, 1+1/2 ],*/
		onStart : (event) => {
			console.log(event)
            fill(255,50,30);
            
           hasTodisplayImg = true;
           
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
            
            hasTodisplayImg = false;
            
		},
		
	});
    
    sequencer.registerSequence({
   
		name : "commeDebut2",
        start : 395,
        stop :403,
        onStart : (event) => {
            
			console.log(event)
         cam = true;
            
		},
		onStep : (event) => {
			console.log(event)
         
                fill(Rr,G,B);
            if(Rr == 255){
               Rr = 0;
               G = 0;
               B = 0;
            }else{
                Rr = 255;
                G = 204;
                B = 0;
            }
            logoDer = true;
            
		},
		onStop : (event) => {
			console.log(event)
            logoDer = false;
            cam = false;
            
		},
		
	});
    
    sequencer.registerSequence({
		name : "parle3",
        start : 404,
        stop :410,
        
        /*steps :[1, 1+1/2 ],*/
		onStart : (event) => {
			console.log(event)
            fill(255,50,30);
            
           hasTodisplayImg = true;
           
		},
		onStep : (event) => {
			console.log(event)
		},
		onStop : (event) => {
			console.log(event)
            
            hasTodisplayImg = false;
            back = false; 
            
		},
		
	});
    
    sequencer.registerSequence({
   
		name : "pop5",
        start : 411,
        stop :421 ,
		onStart : (event) => {
			console.log(event)
         tourne = true;
            
		},
		onStep : (event) => {
			console.log(event)
        
            bouger.push( new Bouge);
            bouger.push( new Bouge(300,200,200));
            bouger.push( new Bouge(-300,-200,-200));
            
		},
		onStop : (event) => {
			console.log(event)
           tourne = false
		},
		
	});
    
    sequencer.registerSequence({
   
		name : "pop6",
        start : 422,
        stop :440 ,
		onStart : (event) => {
			console.log(event)
         
            
		},
		onStep : (event) => {
			console.log(event)
            poparle.push( new paparle);
             
            
            
		},
		onStop : (event) => {
			console.log(event)
            
		},
		
	});
    
    sequencer.registerSequence({
   
		name : "lologo",
        start : 469,
        stop :470 ,
		onStart : (event) => {
			console.log(event)
            
        
            back2 = true;
            
            
		},
		onStep : (event) => {
			console.log(event)
        
            
		},
		onStop : (event) => {
			console.log(event)
    
		},
		
	});
    
    sequencer.registerSequence({
   
		name : "lologo",
        start : 471,
        stop :485 ,
		onStart : (event) => {
			console.log(event)
            
        logoS = true;
            back2 = true;
            
            
		},
		onStep : (event) => {
			console.log(event)
        
            
		},
		onStop : (event) => {
			console.log(event)
    logoS = false;
		},
		
	});
}

function draw(){
    
	sequencer.update();
    if(back){
      background(Rr,G,B);  
    }
    if(back2){
      background(255,204,0);  
    }
  
     bouger.forEach((particule)=>{
      particule.draw();  
    });
    
    bulle.forEach((particule)=>{
      particule.draw();  
    });
    particules.forEach((particule)=>{
      particule.draw();  
    });
    poparle.forEach((particule)=>{
      particule.draw();  
    });
    
    
	
    let R = 800;
    let x = R * cos(millis()/250);
    let z = R * sin(millis()/1000);
    let y = R * sin(millis()/500);
    if (cam2){
         mainCamera.setPosition(0,0,200);
    mainCamera.lookAt(0,0,0); 
    }
    
    if (cam3){
         mainCamera.setPosition(x,y,z);
    mainCamera.lookAt(200,0,0); 
    }
     if (cam4){
         mainCamera.setPosition(x,50,z);
    mainCamera.lookAt(200,100,0); 
    }
    if (cam){
    mainCamera.setPosition(x,50,z);
    mainCamera.lookAt(0,0,0);
    }
     if(logoDer){
        noStroke();
        
        
        push();
        rotate(PI / 4.0);
        
        rect(30, -60, -70, -35);
        rect(70, -20, -70, -35);
        rect(110, 20, -70, -35);
        translate(-100,80);
        
          rect(50, -60, -35,-70 );
        rect(90, -20,-35, -70 );
        rect(130, 20, -35,-70);
        pop();
       
    }
    if(hasTodisplayImg){
        image(img,-25,-50,70,70);
        
        boucheY = random(19, 25);
        
        push();
        translate(0, boucheY);
        image(bouche,-18,0,50,25);
        pop();

    }
    
    if(You){
        image(you,-150,-130,300,435);
    }
    
    if(logoS){
      translate(0,0);
     image(logoSleaford,-70,-50,150,100); 
  }
   
}



function windowResized(){
	resizeCanvas(window.innerWidth, window.innerHeight);
}
