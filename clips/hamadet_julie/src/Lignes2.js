class lignes2{
		constructor(){
			this.isVisible = false;
		}
	
	draw(){
		if(this.isVisible){
		
		strokeWeight(10);
		stroke(0);
		
		beginShape();
		vertex(-200,0);
		vertex(200,0);
		endShape();
			}
	}
}