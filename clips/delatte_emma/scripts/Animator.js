/*----------------------------------------*\
  22_23_AN1_clipWeb - animator.js
  @author Delatte Emma
  @Date:   2023-03-31 11:36:17
  @Last Modified time: 2023-04-03 20:33:35
\*----------------------------------------*/

function numberFormat(n, length){	
	n = "" + n;
	/*while(n.length < length){
		n = "0"+n;
	}*/								//rajoute un zéro pour les numérotations "001" par exemple//
    console.log(n)
	return n;
}

    class Animator extends Drawable{
	constructor( {imgPatternAddress="", imgCount=1, firstImageNum=0 , numberLength=4} = {} ){
		super();
		this.imgs =[];
		this.cursor = 0;
		this.imgs = [];
		const startAt = firstImageNum;
		const stopAt = firstImageNum + imgCount;
		for(let i = startAt ; i < stopAt ; i ++){
			let imageNumber = numberFormat(i, numberLength);
			let imgAdr = imgPatternAddress.replace("[IMG_NUM]", imageNumber);
			this.imgs.push(loadImage(imgAdr));
		}
	}

	draw(){
		image(this.imgs[this.cursor], 0, 0, width, height);
	}
	
	setCursor(amount){
		amount = min(1, max(0, amount));
		this.cursor = (this.imgs.length - 1) * amount;
		this.cursor = floor(this.cursor);
	}
}