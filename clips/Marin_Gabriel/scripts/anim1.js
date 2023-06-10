
/*----------------------------------------*\
  beakerProject - sketch.js
  @author Gabriel Marin Hincapie 
  @Date:   2023-03-06
  @Last Modified time: 2023-05-04 15:38
\*----------------------------------------*/

let fft;


class Anim1 extends Drawable{
  draw(){ 

    let spectrum = fft.analyze();
    let currentColor = lerpColor(colorStart, colorEnd, t);
    let c = color(hue(currentColor), saturation(currentColor), brightness(currentColor), random(0.5, 0.9));
    
            if (t >= 1) {
              t = 0;
              colorStart = colorEnd;
              colorEnd = color(random(360), 70, 100, 1);
            } else {
              t += 0.005;
            }
    fill(c);


    beginShape();
    vertex(0, height);
    for (let i = 0; i < 300; i++) {

      let x = map(i, 0, 100, 0, width);
      let y = map(spectrum[i], 160, 255, height, 0);

      curveVertex(x, y);

    }
    vertex(width, height);
    endShape();


 }      
                             };

