/*----------------------------------------*\
  beakerProject - sketch.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-04 22:38:59
  @Last Modified time: 2022-02-10 22:46:49
\*----------------------------------------*/
let audioPath = "./assets/audio/Sanctuary Guardian/sanctuary-guardian-earthbound-music-extended-hd.mp3";
let sequencer;
let Bulle;
let particules = [];
let isCameraTurnAround = false;
let camera;

function preload(){
    Bulle= loadModel("assets/3D/Blob.obj", true) 
    img=loadImage("assets/42e5a7516552f33ecd1f6c4888f9b083.jpg")
    mg=loadImage("assets/background-2805616_1280.jpg")
}
var xoff=0;
function setup() {	
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    colorMode(HSB,200);
    camera = createCamera();
    camera.setPosition(0, 0, camZ);
    camera.lookAt(0, 0, 0);
    cam = createCamera();
	sequencer = new Sequencer(audioPath, 132, false);
    
    document.querySelector("button").style.display="none";
    background(0,0,0);
    
   
    
    sequencer.registerSequence({
		name : "first",
        start: 1,
        stop : 6,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
           cam.setPosition(0, 0, 400);
           },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
            cam.lookAt(random(-10, 10), random(-40, 40), 0);
		}, 
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
              
		}   
	});
    sequencer.registerSequence({
		name : "secundo",
        start: 6,
        stop : 20,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
        },
		onStep : (event) => {
			console.log (event)
            virusShake = random(0.01, 0.0001);
            camZDest = event.amount * 800;
		},
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
		}
	});
    
     sequencer.registerSequence({
		name : "third",
        start: 20,
        stop : 48,
			onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
        },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
           
		},
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
		}
	});
    
    sequencer.registerSequence({
		name : "quatrième",
        start: 48,
        stop : 68,
			onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
            cam.lookAt(random(-10, 10), random(-40, 40), 0);
        },
		onStep : (event) => {
			console.log (event)
            virusSize= 0;
            cam.lookAt(random(-10, 10), random(-40, 40), 0);
		},
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
		}
	});
    
     sequencer.registerSequence({
		name : "Cinquième",
        start: 68,
        stop : 70,
			onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
             background(255);
        },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
             
		},
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
             background(255);
		}
	});
    
    
     sequencer.registerSequence({
		name : "Sixième",
        start: 70,
        stop : 80,
			onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
            background('red');
        },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
		},
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
          
            
		}
	});
    
    sequencer.registerSequence({
		name : "Septième",
        start: 80,
        stop : 100,
			onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
        },
		onStep : (event) => {
			console.log (event)
           virusSizeDest = event.amount;
            },
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
		}
	});
    
     sequencer.registerSequence({
		name : "Huitième",
        start: 100,
        stop : 120,
			onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
        },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
        
            cam.setPosition(0, 0, 1000);
		},
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
		}
	});
    
    sequencer.registerSequence({
		name : "9ième",
        start: 120,
        stop : 127,
			onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
            background(255);
        },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
            cam.setPosition(0, 0, 400);
            
		},
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
             background(255);
            
		}
	});
    
    
     sequencer.registerSequence({
		name : "10ième",
        start: 127,
        stop : 130,
			onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
            background ('red');
        },
		onStep : (event) => {
			console.log (event)
            virusShake = random(0.01, 0.0001);
            camZDest = event.amount * 800;
            cam.setPosition(0, 0, 1000);
            rotate(x);
            background(255);
		},
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
            
		}
	});
    
     sequencer.registerSequence({
		name : "11ième",
        start: 130,
        stop : 135,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
           
           },
		onStep : (event) => {
			console.log (event)
            virusShake = random(0.01, 0.0001);
            rotate(x);
            camZDest = event.amount * 800;
            cam.setPosition(0, 0, 400);
            
		}, 
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
             background(0,0,0);
              
		}   
	});
    
      sequencer.registerSequence({
		name : "12ième",
        start: 135,
        stop : 140,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
           cam.setPosition(0, 0, 1000);
           },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
            
		}, 
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
              
		}   
	});
    
    
    sequencer.registerSequence({
		name : "13ième",
        start: 140,
        stop : 145,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
           cam.setPosition(0, 0, 400);
           },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
            
		}, 
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
              
		}   
	});
    
    
    sequencer.registerSequence({
		name : "14ième",
        start: 145,
        stop : 150,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
           cam.setPosition(0, 0, 1000);
           },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
            
		}, 
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
              
		}   
	});
    
       sequencer.registerSequence({
		name : "14ième",
        start: 150,
        stop : 155,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
           cam.setPosition(0, 0, 400);
           },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
            
		}, 
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
              
		}   
	});
    
    
   sequencer.registerSequence({
		name : "15ième",
        start: 155,
        stop : 160,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
           cam.setPosition(0, 0, 1000);
           },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
            
		}, 
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
              
		}   
	});
    
    
       sequencer.registerSequence({
		name : "16ième",
        start: 160,
        stop : 180,
		onStart : (event) => {
            console.log(event)
            isCameraTurnAround = true; 
           cam.setPosition(0, 0, 400);
           },
		onStep : (event) => {
			console.log (event)
            virusSizeDest = event.amount;
            
		}, 
		onStop : (event) => {
			console.log(event)
            isCameraTurnAround = false;
            background(0,0,0);
              
		}   
	});
    
}


let virus 
let virusSize = 0;
let virusSizeDest = 0;
let virusShake = 0.0001;
let camZ = 800;
let camZDest = 800;
let delta = 0.5;
let x = 100;
let partNumber = 0;


function draw(){
    if(partNumber == 0){
        cam.move(0, 0, 10);
        if(cam.centerZ>4000){
            partNumber = 1;
            
            document.querySelector("button").style.display="block";
        }
    }else{
        camera.setPosition(mouseX, 0, camZ);
        camera.lookAt(0, 0, 0);
        
    }
//    
    virusSize += (virusSizeDest - virusSize)/10.0;
    camZ += (camZDest - camZ)/10.0;
    

    //cam.move(delta, delta, 10);
    sequencer.update();
    
//    camera(camX,camY,camZ+(height/2)/ tan(PI/6),camX,camY,camZ,0,1,0);
    
    let radius = width * virusSize;
    noStroke();
    let locX = mouseX - width / 1;
    let locY = mouseY - height / 1;
    ambientLight(60,60,60);
    specularColor(255, 0, 0);
    pointLight(255, 255, 255, locX, locY, 50);
    specularMaterial(250);
     translate(-25, 0, 0);
    shininess(1);
    model(Bulle)
    

  texture(img);
  translate(0, 0, -600);
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 3) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
        
      if (j % 2 === 0) {
        var x= map(noise(xoff),0,1,0,width);
        xoff += virusShake;
        plane(x,900, 900);
      } else {
          texture(mg)
        sphere(80, 80, 80);
          
          
      }
      pop();
       
    }
      
  } 
}


    
//  if(isCameraTurnAround){
//        let R = 800 ;
//        let x = R/4 * sin(millis()/1000);
//        let z = R/4 * cos(millis()/1000);
//        mainCamera.setPosition(x,0,z);
//        mainCamera.lookAt(0, 0, 0);
//    }   
//    

    
//mainCamera.setPosition(0, 0, mouseX);




    

function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight);
}



