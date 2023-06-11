/*----------------------------------------*\
  22_23_AN1_clipWeb - animator.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2023-03-31 11:36:17
  @Last Modified time: 2023-04-03 20:33:35
\*----------------------------------------*/

function numberFormat(n, length){	
	n = "" + n;
	while(n.length < length){
		n = "0" + n;
	}
	return n;
}

class Animator extends Drawable{
	
	constructor( {imgPatternAddress = "", imgCount=1, firstImageNum=0 , numberLength=1} = {} ){
		super();
		this.imgs =[];
		this.cursor = 0;
		this.imgs = [];
		const startAt = firstImageNum;
		const stopAt = firstImageNum + imgCount;
		for(let i = startAt ; i < stopAt ; i ++){
			let imageNumber = numberFormat(i, numberLength);
			console.log(numberLength);
			let imgAdr = imgPatternAddress.replace("[IMG_NUM]", imageNumber);
			this.imgs.push(loadImage(imgAdr));
		}
	}

	draw(){
		push();
		translate(-width/2, -height/2);
		image(this.imgs[this.cursor], 0, 0, width, height);
		pop();
	}
	
	setCursor(amount){
		amount = min(1, max(0, amount));
		this.cursor = (this.imgs.length - 1) * amount;
		this.cursor = floor(this.cursor);
	}
}
