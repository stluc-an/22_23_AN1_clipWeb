/*----------------------------------------*\
  beakerProject - cameraManager.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-17 22:05:44
  @Last Modified time: 2021-02-17 23:17:25
\*----------------------------------------*/

class CameraManager{
	constructor(){
		this.cameras = [];
		this.cameraFront = createCamera();
		this.cameraFront.setPosition(0, 0, 800);
		this.cameraFront.lookAt(0, 0, 0);
		this.cameraFront.default_zoom = PI * 0.8;
		this.cameraFront._zoom = this.cameraFront.default_zoom;

		this.cameras.push(this.cameraFront);
		
		this.cameraCore = createCamera();
		this.cameraCore.setPosition(0, 0, 100);
		this.cameraCore.lookAt(0, 0, 0);
		this.cameraCore.alpha = 0;
		this.cameraCore.beta = 0;
		this.cameras.push(this.cameraCore);

		this.cameraCrust = createCamera();
		this.cameraCrust.setPosition(0, 0, 74);
		this.cameraCrust.lookAt(0, 0, 0);
		this.cameraCrust.alpha = 0;
		this.cameras.push(this.cameraCrust);
		
		

		setCamera(this.cameraFront);
	}

	set cameraFrontZoom(newValue){
		this.cameraFront.default_zoom = newValue;
	}

	get cameraFrontZoom(){
		let z = this.cameraFront._zoom;
		this.cameraFront._zoom = lerp(this.cameraFront._zoom, this.cameraFront.default_zoom, 0.05);
		return z;
	}

	draw(){
		if(this.cameraCore._isActive()){		
			this.cameraCore.alpha += noise(1, frameCount * 0.005) * 0.01;
			this.cameraCore.beta += noise(2, frameCount * 0.005) * 0.01;
			this.cameraCore.setPosition(
				(50 + 100 * noise(3, frameCount * 0.001)) * sin(this.cameraCore.alpha) * cos(this.cameraCore.beta), 
				(50 + 100 * noise(4, frameCount * 0.001)) * sin(this.cameraCore.alpha) * sin(this.cameraCore.beta), 
				(50 + 100 * noise(5, frameCount * 0.001)) * cos(this.cameraCore.alpha)
			);
			this.cameraCore.lookAt((noise(6, frameCount * 0.001) * 2 - 1) * 200 , 0, 0);

			directionalLight(250, 128, 0, 
				noise(7, frameCount * 0.01) * 2 - 1, 
				noise(8, frameCount * 0.01) * 2 - 1, 
				noise(9, frameCount * 0.01) * 2 - 1);


			directionalLight(0, 250, 128, 
				noise(10, frameCount * 0.01) * 2 - 1, 
				noise(11, frameCount * 0.01) * 2 - 1, 
				noise(12, frameCount * 0.01) * 2 - 1);


			directionalLight(128, 0, 250, 
				noise(13, frameCount * 0.01) * 2 - 1, 
				noise(14, frameCount * 0.01) * 2 - 1, 
				noise(15, frameCount * 0.01) * 2 - 1);
			
		}
		if(this.cameraFront._isActive()){
			directionalLight(250, 250, 250, 0, 0, -1);
			this.cameraFront.perspective(this.cameraFrontZoom, width/height);	
		}
	}
}

