SequencerJS 


This javascript library needs [p5js](https://p5js.org) to run.



```javascript
let sequencer;
function setup(){
    sequencer = new Sequencer(audioPath, BPM);
    sequencer.registerSequence({
		name : "intro-kick",  // name is just for you
		start : 1,            // step number for start the sequence (default : 1)
		onStart:(event)=>{},  // trig when the sequence start
		stop : 320,           // step number for stop the sequence (default : 10)
		onStop:(event)=>{},   // trig when the sequence stop
		measure : 4,          // the length of a measure (a groupe of step) (default : 1)  
		steps : [1, 3],       // step numbers ( % measure+1 ) for trig the onStep (default :[1])
		onStep:(event)=>{}    // trig when the step counter ( % measure+1 ) reached a value referenced by steps
	});
}

function draw(){
    sequencer.update();
}
```


You can run onStep at any fullStep or subStep : 

###### fullStep

>  1, 2, 3, 4, 5, 6..... it must be larger than 1 and smaller than measure+1

###### subStep

> are fullStep + a fraction of 24. 
> 
> fullStep+1/24,
> fullStep+1/12,
> fullStep+1/8,
> fullStep+1/6,
> fullStep+5/24,
> fullStep+1/4,
> fullStep+7/24,
> fullStep+1/3,
> fullStep+3/8,
> fullStep+5/12,
> fullStep+11/24,
> fullStep+1/2,
> fullStep+13/24,
> fullStep+7/12,
> fullStep+5/8,
> fullStep+2/3,
> fullStep+17/24,
> fullStep+3/4,
> fullStep+19/24,
> fullStep+5/6,
> fullStep+7/8,
> fullStep+11/12,
> fullStep+23/24,

###### measure + steps

Combination of these 2 paremeters let you setup the execution of onStep every two step. As shown in the exemple. Test other measures and steps 
