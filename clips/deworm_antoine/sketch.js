let imgPath = "assets/img/Image_Mere.png";
let img;
//let x = 0.3;
//let y = 0.3;
//let z = 0.5;
//let delta = 0.01;
let audioPath = "assets/audio/December_in_NewYork.mp3" ;
let cameraZoom;
let imgPieces = [];
let gridX = 10;
let gridY = 10;


function preload(){
    img = loadImage(imgPath);
}

class Tile{
    constructor(img, oX, oY){
        this.pieceImg = img;
        this.oX = oX;
        this.oY = oY;
        this.x = oX;
        this.y =  oY;
        this.tX= random(width);
        this.tY = random(height);
        this.w = img.width;
        this.h = img.height;
        this.go = false;
        this.c = 0;
        this.speed = 0.1;
    }
    draw(){
        
        if(this.go){
            this.c += this.speed;
            if(this.c > 1){
                this.go = false;
                this.c = 1;
            }
            this.x = lerp( this.oX, this.tX, this.c);
            this.y = lerp( this.oY, this.tY, this.c);
        }
        
        
        image(this.pieceImg, this.x, this.y, this.w, this.h);
    }
}

function posExchange(a, b){
    b.tX = a.x;
    a.tX = b.x;
    b.tY = a.y;
    a.tY = b.y;
}

function mixTiles(){
    imgPieces = imgPieces.sort(function(){
        return random(-1,1);
    });
    for(let i = 0 ; i < 10 ; i ++){
        let a = imgPieces[floor(random(imgPieces.length))];
        let b = imgPieces[floor(random(imgPieces.length))];
        posExchange( a , b);
    }
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    imageMode(CENTER);
    cameraZoom = new CustomCamera();
    cameraZoom.setPosition(1500 ,1150, 100);
    cameraZoom.lookAt(1500,1150,0);                      
    setCamera(cameraZoom.myCam);
    
    let pieceWidth = img.width/gridX;
    let pieceHeight = img.height/gridY;
            
    for(let y = 0 ; y < gridY ; y = y + 1){
        for(let x = 0 ; x < gridX ; x = x + 1){
            let tempPiece = img.get(x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight);
            imgPieces.push(new Tile(tempPiece, x * pieceWidth, y * pieceHeight));
        }
    }

    mixTiles();
    sequencer = new Sequencer(audioPath, 76, false);
    sequencer.registerSequence({
		name : "TheGreatExchanger",
        start : 153,
		stop : 361,
        steps : [1],
        onStep : (event) => {
          imgPieces[floor(event.amount * imgPieces.length)].go = true;
        },                                      
	});
    
    sequencer.registerSequence({
		name : "Intro",
        start : 1,
        onStart : ()=>{
            cameraZoom.setPosition(1500,1150,100)
            cameraZoom.move(0, 0,40*38);
        },
		stop : 38,
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});


    sequencer.registerSequence({
		name : "Traveling_Train",
        start : 41, //41
		stop : 120,
        steps : [1,1+1/2],
        onStart : () => { 
            cameraZoom.setPosition(500 , 500, 600);
            cameraZoom.move(20 * (120-41),0,0);
        } ,
//        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },  
    });
//    
//    sequencer.registerSequence({
//		name : "Stop",
//        start : 68,
//		stop : 69,
//        steps : [1],
//        onStart : () => { 
//            cameraZoom.setPosition(-900 + (20 * (67-41)) , -500, 600);
//        } ,
//    });
    

    
    sequencer.registerSequence({
		name : "Traveling_Envol",
        start : 121,
		stop : 153,
        steps : [1,1+1/2],
        onStart : () => { 
            cameraZoom.setPosition(500+(20*(120-41)) ,500, 600);
            cameraZoom.move(((1500-(500+(20*(120-41))))/(153-121))*(153-121),((1150-500)/(153-121))*(153-121),((1620-600)/(153-121))*(153-121));
        } ,
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },  
    });
       
//    sequencer.registerSequence({
//		name : "Traveling_Envol",
//        start : 121,
//		stop : 153,
//        steps : [1,1+1/2],
//        onStart : () => { 
//            cameraZoom.setPosition(-900 + (20 * (120-41)) , -500, 600);
//            cameraZoom.move(-10 * (153-121),0,0);
//        } ,
//        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
//        onStep : (event) => {
//           cameraZoom.setAmount(event.amount);
//        },  
//    });
        
//    sequencer.registerSequence({
//		name : "Piano",
//        start : 153,
//		stop : 164,
//        steps : [1,1+1/2],
//        onStart : () => {
//            cameraZoom.setPosition(0 , 0, 1600);
//        },
//        onStep : () => {
//            cameraZoom.move(0,0,-2);
//        },                                      
//	});
    //            cameraZoom.setPosition(random(0,100), random(0,100) ,1584);
    sequencer.registerSequence({
		name : "randomZoom 1",
        start : 154,
		stop : 158,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1600);
            cameraZoom.move(0,0,-10 * (158-154));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});
    
        sequencer.registerSequence({
		name : "randomZoom 2",
        start : 158,
		stop : 162,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1600+(-10*(158-154)));
            cameraZoom.move(0,0,-10 * (163-159));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});
    
            sequencer.registerSequence({
		name : "randomZoom 3",
        start : 162,
		stop : 166,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1600+(2*(-10*(158-154))));
            cameraZoom.move(0,0,-10 * (168-164));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});
    
                sequencer.registerSequence({
		name : "randomZoom 4",
        start : 166,
		stop : 171,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1600+(3*(-10*(158-154))));
            cameraZoom.move(0,0,-10 * (173-169));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});

    sequencer.registerSequence({
		name : "Train2",
        start : 170,
		stop : 203,
        steps : [1,1+1/2],
        onStart : () => {
            cameraZoom.setPosition(1500 , 1150, 1600+(4*(-10*(158-154))));
            cameraZoom.move(0,0,-10*(203-170));
        },
        onStep : (event) => {
            cameraZoom.setAmount(event.amount);
        },                                      
	});
      sequencer.registerSequence({
		name : "random",
        start : 203,
		stop : 250,
        onStart : () => {
//                 cameraZoom.setPosition(random(-1639,1639), random(-1166,1166) ,1444+(-10*(203-171)));
            cameraZoom.move(0,0,-10 * (250-203));
        },
        steps: [1+1/2],
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
            cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1444+(-10*(203-171)));
        },                                      
	});
    sequencer.registerSequence({
		name : "Train3",
        start : 251,
		stop : 285,
        steps : [1,1+1/2],
        onStart : () => {
            cameraZoom.setPosition(1500 , 1150, 1444+(-10*(203-171))+(-10 * (251-203)));
            cameraZoom.move(0,0,-10*(285-251));
        },
        onStep : (event) => {
             cameraZoom.setAmount(event.amount);
        },                                      
	});
             sequencer.registerSequence({
		name : "randomZoom 5",
        start : 285,
		stop : 289,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1444+(-10*(285-251))+(-10*(203-171))+(-10 * (251-203)));
            cameraZoom.move(0,0,-10 * (289-285));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});
             sequencer.registerSequence({
		name : "randomZoom 6",
        start : 289,
		stop : 293,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1444+(-10*(285-251))+(-10*(203-171))+(-10 * (251-203))+(-10 * (289-285)));
            cameraZoom.move(0,0,-10 * (289-285));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});
               sequencer.registerSequence({
		name : "randomZoom 7",
        start : 293,
		stop : 297,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1444+(-10*(285-251))+(-10*(203-171))+(-10 * (251-203))+2*(-10 * (289-285)));
            cameraZoom.move(0,0,-10 * (289-285));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});
               sequencer.registerSequence({
		name : "randomZoom 8",
        start : 297,
		stop : 301,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1444+(-10*(285-251))+(-10*(203-171))+(-10 * (251-203))+3*(-10 * (289-285)));
            cameraZoom.move(0,0,-10 * (304-301));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});
    
                   sequencer.registerSequence({
		name : "randomZoom 9",
        start : 301,
		stop : 304,
        onStart : () => {
                 cameraZoom.setPosition(random(0,1500*2), random(0,1150*2) ,1444+(-10*(285-251))+(-10*(203-171))+(-10 * (251-203))+3*(-10 * (289-285)));
            cameraZoom.move(0,0,-10 * (304-301));
        },
        steps: (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStep : (event) => {
           cameraZoom.setAmount(event.amount);
        },                                      
	});
    
    sequencer.registerSequence({
		name : "Fin",
        start : 305,
		stop : 361,
        steps :  (new Array(24)).fill(0).map((v, key)=>1+key/24),
        onStart : () => {
            cameraZoom.setPosition(1500 , 1150, 100);
            cameraZoom.move(0, 0,40*38);   
        },
        onStep : (event) => {
               cameraZoom.setAmount(event.amount);
        },                                      
	});

  
//    sequencer.registerSequence({
//		name : "Noise",
//        start : 122,
//		stop : 300,
//        onStep : () => {
//            cameraZoom.move(-3,2,3);
//        },                                      
//	});
    
}


function draw(){
    sequencer.update();
    background(0);
//    cameraZoom.move(-x,-y,-z);
//    if (frameCount % 1000 === 0){
//        x*= -1;
//        y*= 0;
//        z*=0;
//    }
//    if (frameCount % 1900 === 0){
//        x+= 0.6;
//        y+= -0.6;
//        z+= -0.6;
//    }
//    if (frameCount % 4200 === 0){
//        x*= 0;
//        y*= 0;
//        z*= 0;
//    }
    
//     camera(0, 0, 850 + cos(frameCount * 0.04) * 10, 0, 0, 0, 0, 1, 0);
//    cameraZoom.move(0,0,-10):
    //image(img, 0, 0);
    for(let imgPiece of imgPieces){
        imgPiece.draw()
    }
    
    
    cameraZoom.update();
}

class CustomCamera{
    constructor(){
        this.myCam = createCamera();
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.dx = 0;
        this.dy = 0;
        this.dz = 0;
        this.amount = 0;
    }
    setPosition(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.myCam.setPosition(x, y, z);
    }
    lookAt(x, y, z){
        this.myCam.lookAt(x, y, z);
    }
    move(x, y, z){
        this.dx = x;
        this.dy = y;
        this.dz = z;
    }
    setAmount(amount){
         this.amount = amount; 
    }
    update(){
        let _x = lerp(this.x, this.x+this.dx, this.amount);
        let _y = lerp(this.y, this.y+this.dy, this.amount);
        let _z = lerp(this.z, this.z+this.dz, this.amount);
        this.myCam.setPosition(_x, _y, _z);
    }
}





