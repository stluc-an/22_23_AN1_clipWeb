class lights2{
		constructor(){
			this.isVisible = false;
		}
	
	draw(){
		if(this.isVisible){
		
		strokeWeight(1);
		stroke(255);
		
		this.a = noise(frameCount) * 10;
		push()
		scale(0.01);
		push();
		translate(this.a, 8);	
		beginShape();
		vertex(-1600,-1000);
		vertex(-1800,-800);
		vertex(-1600,-600);
		vertex(-1730,-580);
		vertex(-1730,-300);
		vertex(-1600,-300);
		vertex(-1600,-100);
		vertex(-1750,-100);
		vertex(-1750,200);
		vertex(-1550,200);
		vertex(-1550,300);
		vertex(-1750,300);
		vertex(-1750,300);
		vertex(-1750,300);
		vertex(-1750,400);
		vertex(-1600,390);
		vertex(-1610,950);
		endShape();
		pop();

		
		push()
		translate(this.a, 8);
		beginShape();
		vertex(-1815,-1050);
		vertex(-1815,850);
		endShape();
		pop();
		
		beginShape();
		vertex(-1780,-500);
		vertex(-1780,500);
		endShape();
	
		beginShape();
		vertex(-1850,-900);
		vertex(-1850,-600);
		endShape();
		
		beginShape();
		vertex(-1850,550);
		vertex(-1850,750);
		endShape();
	
	
		
	/*2e moitié*/	
		push()
		translate(this.a, 16);
		beginShape();
		vertex(0,-1000);
		vertex(0,950);
		endShape();
		pop();
		
		push()
		translate(this.a, 16);
		beginShape();
		vertex(20,-950);
		vertex(30,-700);
		vertex(-20,-800);
		vertex(-20,-500);
		vertex(50,-550);
		vertex(-50,-200);
		vertex(50,0);
		vertex(-50,100);
		vertex(-50,100);
		vertex(50,150);
		vertex(-50,200);
		vertex(50,250);
		vertex(-50,300);
		vertex(-50,1000);
		endShape();
		pop();
		
		beginShape();
		vertex(60,330);
		vertex(60,1000);
		endShape();
		
		beginShape();
		vertex(30,400);
		vertex(30,1000);
		endShape();
		
		beginShape();
		vertex(-30,600);
		vertex(-30,1000);
		endShape();
		pop();
		
	}
}
}
