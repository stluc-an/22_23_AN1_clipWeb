


let angle = 1;

const maxiterations = 25;

const colorsRed = [];
const colorsGreen = [];
const colorsBlue = [];

class Anim1 extends Drawable{
 
draw(){ 

  let ca = cos(angle * 3.213); 
  let cb = sin(angle);

  angle += 0.004;

  let w = 3;
  let h = (w * height) / width;

  let xmin = -w / 2;
  let ymin = -h / 2;

loadPixels(); 
    
 let xmax = xmin + w;
 let ymax = ymin + h;

 let dx = (xmax - xmin) / width;
 let dy = (ymax - ymin) / height;

 let y = ymin;
  for (let j = 0; j < height; j++) {
   
 let x = xmin;
    for (let i = 0; i < width; i++) {
     
 let a = x;
 let b = y;
 let n = 0;
        
      while (n < maxiterations) {
          
    let aa = a * a;
    let bb = b * b;
          
        if (aa + bb > 4.0) {
          break; 
        }
          
        let twoab = 2.0 * a * b;
        a = aa - bb + ca;
        b = twoab + cb;
        n++;
      }

     
    let pix = (i + j * width) * 4;
      if (n == maxiterations) {
        pixels[pix + 0] = 0;
        pixels[pix + 1] = 0;
        pixels[pix + 2] = 0;
      } else {
       
        pixels[pix + 0] = colorsRed[n];
        pixels[pix + 1] = colorsGreen[n];
        pixels[pix + 1] = colorsBlue[n];
      }
        
      x += dx;
    }
      
    y += dy;
  }
    
  updatePixels();
  console.log(frameRate());
    
}}




