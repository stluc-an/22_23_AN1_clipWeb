
//CLASSES
class ImageDisplayer{
	constructor(imgpath, x, y, w, h, iMode){
		this.img = loadImage(imgpath);
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.isVisible = false;
		//this.iMode = iMode;
	}
	draw(){
		if(this.isVisible){
			
			image(this.img, this.x,  this.y,  this.w,  this.h);
		}
	}
}

//if(this.isVisible){
//			if(this.iMode == 0 /*TOP-LEFT*/){
//				image(this.img, this.x,  this.y,  this.w,  this.h);   
//			}
//			if(this.iMode == 1 /*TOP-RIGHT*/){
//				image(this.img, _width/2 + this.x-this.w/2,  this.y,  this.w,  this.h);   
//			}
//		}
		