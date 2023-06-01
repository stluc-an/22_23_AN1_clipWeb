
function numberFormat(n, length){
	n = "" + n;
	while(n.length < length){
		n= "0"+n;
		
	}
	return n;
}







class Animator{
	constructor(addressGenerique, imgCount){
		console.log(addressGenerique, imgCount);
		this.imgs = [];
		for(let i = 0 ; i < imgCount ; i ++    ){ 
			let imageNumber = numberFormat(i, 4);
			let imgAdr =  addressGenerique.replace("{CHIFFRE}", imageNumber);
			this.imgs.push(loadImage(imgAdr));
		}
	}
}