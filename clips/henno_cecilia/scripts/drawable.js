/*----------------------------------------*\
  22_23_AN1_clipWeb - drawable.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2023-03-17 12:17:07
  @Last Modified time: 2023-03-17 12:22:36
\*----------------------------------------*/

class Drawable{
	constructor(){
		this._drawable = false;
	}
	setDrawable(value){
		this._drawable = value;
	}
	isDrawable(){
		return this._drawable;
	}
}