class lights1{
		constructor(){
			this.isVisible = false;
		}
	
	draw(){
		if(this.isVisible){
		push();
		scale(0.01);
		strokeWeight(1);
		stroke(255);
		
		this.x = noise(frameCount) * 30;
		push();
		translate(this.x, 8);	
		beginShape();
		vertex(-1000,-1000);
		vertex(-1100,-500);
		vertex(-990,-570);
		vertex(-1200,-300);
		vertex(-990,-450);
		vertex(-990,150);
		vertex(-1200,200);
		vertex(-950,300);
		vertex(-970,600);
		vertex(-970,900);
		endShape();
		pop();

		push()
		translate(this.x, 8);
		beginShape();
		vertex(-1000,-800);
		vertex(-1000,600);
		endShape();
		pop();
		
		beginShape();
		vertex(-960,-1000);
		vertex(-960,-300);
		endShape();
	
		beginShape();
		vertex(-1000,500);
		vertex(-1000,850);
		endShape();
		
		
		/*2e moitié*/
		push()
		translate(this.x, 8);
		beginShape();
		vertex(1350,-950);
		vertex(1350,-350);
		vertex(1300,-700);
		vertex(1300,0);
		vertex(1350,200);
		vertex(1330,400);
		vertex(1350,600);
		vertex(1350,900);
		endShape();
		pop();
		
		beginShape();
		vertex(1420,-1030);
		vertex(1420, 970);
		endShape();
		
		beginShape();
		vertex(1400,-1000);
		vertex(1400,1000);
		endShape();
		
		push()
		translate(this.x, 8);	
		beginShape();
		vertex(1470,-700);
		vertex(1470,-100);
		vertex(1480,50);
		vertex(1540,-250);
		vertex(1480,400);
		vertex(1540,470);
		endShape();
		pop();
		pop();

	}
	}
}