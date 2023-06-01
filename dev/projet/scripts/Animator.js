/*----------------------------------------*\
  22_23_AN1_clipWeb - animator.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2023-03-31 11:36:17
  @Last Modified time: 2023-04-03 20:33:35
\*----------------------------------------*/

function numberFormat(n, length){	
	n = "" + n;
	while(n.length < length){
		n = "0"+n;
	}
	return n;
}

class Animator extends Drawable{
	/*
		Le javascript moderne ES6
		Nous permet de donner une valeur par défault aux parametres d'une fonction;
		Le javascript moderne ES6 
		Nous permet de déstructurer (destructuring) un Object 
		afin d'atteindre plus directement son contenu et/ou donner à ces différentes entrées une valeur par défaut  
	*/
	constructor( {imgPatternAddress="", imgCount=1, firstImageNum=0 , numberLength=1, x=0, y=0, w=width, h=height} = {} ){
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
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	draw(){
		image(this.imgs[this.cursor], this.x, this.y, this.w, this.h);
	}
	
	setCursor(amount){
		amount = min(1, max(0, amount));
		this.cursor = (this.imgs.length - 1) * amount;
		this.cursor = floor(this.cursor);
	}
}