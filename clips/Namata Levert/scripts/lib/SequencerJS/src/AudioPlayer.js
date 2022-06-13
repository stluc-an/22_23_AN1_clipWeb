/*----------------------------------------*\
  21.2.camera - AudioPlayer.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-14 17:05:21
  @Last Modified time: 2021-02-14 17:47:49
\*----------------------------------------*/


export default class AudioPlayer{
	constructor(audioPath){
		this.audio = document.createElement("audio");
		this.audio.src = audioPath;
		document.body.append(this.audio);
	}
	play(){
		this.audio.play();
	}
	pause(){
		this.audio.pause();
	}
	set currentTime(newValue){
		this.audio.currentTime = newValue;
	}

}
