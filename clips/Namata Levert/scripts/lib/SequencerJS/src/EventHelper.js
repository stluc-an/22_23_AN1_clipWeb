/*----------------------------------------*\
  21.2.camera - EventHelper.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2021-02-14 17:40:52
  @Last Modified time: 2021-02-14 23:49:03
\*----------------------------------------*/

export default class EventHelper {
	constructor(){
		this.handlers = {};
		this.actionQueue = [];
	}
	addEvent(eventName){
		this.handlers[eventName] = 	this.handlers[eventName] || [];
	}
	on(eventName, action){
		if(!eventName)return;
		this.addEvent(eventName);
		this.handlers[eventName].push(action);
	}
	off(eventName, action){
		if(!eventName)return;
		this.addEvent(eventName);
		let id = this.handlers[eventName].indexOf(action);
		if(id > -1){
			this.handlers[eventName].splice(id, 1);
			if(this.handlers[eventName].length == 0){
				delete this.handlers[eventName];
			}
		}
	}
	once(eventName, action){
		if(!eventName)return;
		this.addEvent(eventName);
		const once = event => {
			action(event);
			this.off(eventName, once);
		};
		this.on(eventName, once);	
	}
	trigger(eventName, _event){
		const event = {
			eventName,
			..._event
		}
		for(const handler of this.handlers[eventName]||[]){
			this.actionQueue.push(()=>handler(event));
		}
	}
	consume(){
		for(let i = 0, len = this.actionQueue.length ; i < len ; i ++){
			let action = this.actionQueue.shift();
			action();
		}		
	}
}