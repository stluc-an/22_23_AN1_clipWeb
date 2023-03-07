/*----------------------------------------*\
  21.2.camera - Sequencer.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-14 17:04:54
  @Last Modified time: 2023-03-03 10:59:55
\*----------------------------------------*/

/*
	const sequencer = new Sequencer("track.mp3", BPM)
	sequencer.loop(0, 28) // for looping between step 1 and step 28
	//sequencer.play()
	sequencer.sequence({
		name : "intro-kick",
		start : 1,
		onStart : ()=>{},
		stop : 12,
		onStop : ()=>{},
		measure : 4,
		steps : [1, 2, 3 + 2/3]
		onStep : ()=>{}
	});
	sequencer.update();
*/

import AudioPlayer from "./AudioPlayer.js";
import EventHelper from "./EventHelper.js";
import {divAndMod, isFunction, isNumber} from "./Tools.js";

export default class Sequencer{
	constructor(audioPath, BPM, debug=true){
		this.player = new AudioPlayer(audioPath);
		this.eventHelper = new EventHelper();
		this.BPM = BPM;
		this.StepPerBeat = 24;
		this._tic = 0;
		this.currentStep = 0;
		this.records = {};

		this.playBtn = document.createElement("button");
		this.playBtn.innerText = "play";
		this.playBtn.style.position="absolute";
        this.playBtn.style.top="50%";
        this.playBtn.style.left="50%";
        this.playBtn.style.transform="translate(-50%, -50%)";
		document.body.append(this.playBtn);
		document.querySelector("button").addEventListener("click", (event)=>{
			this.playBtn.parentElement.removeChild(this.playBtn);
			sequencer.play();	
		});	

		if(debug){
			this.debug = true;
			this.debugDiv = document.createElement("div");
			this.debugDiv.style.position = "absolute";
	        this.debugDiv.style.top = "75%";
	        this.debugDiv.style.left = "50%";
	        this.debugDiv.style.transform = "translate(-50%, -50%)";
	        this.debugDiv.style.color = "red";
	        this.debugDiv.style.fontSize = "50px";
			document.body.append(this.debugDiv);
		}
	}
	registerSequence({name, start=1, onStart, stop = 1000, onStop=()=>{}, measure=1, steps=[1], onStep}={}){
		start = start-1;
		this.records[name] = this.records[name] || [];
		
		let _len = 1 / (stop - start/* - 1 */);

		let _onStart = (event)=>{
			onStart({
				...event,
				eventName : "start",
				sequenceName : name
			});
		}
		
		let _onStep = (event)=>{
			if(isFunction(onStep)){
				onStep({
					...event,
					sequenceName : name,
					amount : (event.step - start) * _len
				});
			}
		}

		let _onStop = (event)=>{
			onStop({
				...event,
				eventName : "stop",
				sequenceName : name
			});
		}

		let selfUnregister = () => {
			this.unregisterSequence(name);
		}

		if(isNumber(start) && start>= 0 && isFunction(onStart)){
			this.eventHelper.on(`step.${start}`, _onStart);	
			this.records[name].push([`step.${start}`, _onStart]);
		}

		let n = 0;
		for(let j = start ; j < stop ; j++){
			for(let i = 0 ; i < this._StepPerBeat ; i ++){
				let a = i/this._StepPerBeat;
				let r_step = 1 + (n % measure) + a;
				let step = start + n + a;
				if(steps.includes(r_step)){
  					this.eventHelper.on(`step.${step}`, _onStep);	
					this.records[name].push([`step.${step}`, _onStep]);
				}
			}	
			n++;
		}

		if(isNumber(stop) && stop >= 0){
			if(isFunction(onStop)){
				this.eventHelper.on(`step.${stop}`, _onStop);	
				this.records[name].push([`step.${stop}`, _onStop]);
			}
			this.eventHelper.on(`step.${stop}`, selfUnregister);	
			this.records[name].push([`step.${stop}`, selfUnregister]);
		}
		return this;
	}
	update(){
		this.eventHelper.consume();
		if(this.debug){
			const [i, r] = divAndMod(this._tic, this._StepPerBeat);
			this.debugDiv.innerText = i + 1;	
		}
	}



	unregisterSequence(name){
		(this.records[name]||[]).map(([eventName, action])=>{
			this.eventHelper.off(eventName, action);
		});
	}
	_updateInterval(){
		this.interval = 60 * this.__bpm * this.__StepPerBeat;	// 60 / (this._StepPerBeat * this._bpm)
	}
	get step(){
		const [i, rest] = divAndMod(this._tic, this._StepPerBeat);
		return i + rest * this.__StepPerBeat;
	}
	set interval(newValue){
		this._interval = newValue;
		if(this.sloop)this.sloop.interval = this._interval;
	}
	get interval(){
		return this._interval;
	}
	set BPM(newValue){ //beat per minute
		this._bpm = newValue;
		this.__bpm = 1/newValue;
		this._bps = newValue/60;
		this.__bps = 1/this._bps;
		this._updateInterval();
	}
	get BPM(){
		return this._bpm;
	}
	set StepPerBeat(newValue){
		this._StepPerBeat = newValue;
		this.__StepPerBeat = 1/newValue;
		this._updateInterval();
	}
	get StepPerBeat(){
		return this._StepPerBeat;
	}
	play(){

		if(!this.sloop){
			this.sloop = new p5.SoundLoop(cycleStartTime => {
				this.currentStep = this.step;
				this.eventHelper.trigger(`step.${this.currentStep}`, {step : this.currentStep});
				this._tic ++;
			}, this.interval);
		}
		this.player.play();
		this.sloop.start()
	}
	pause(){
		this.player.pause();
		this.sloop.stop();
	}
}
