function initSequencerStuff(){
	sequencer.registerSequence({
		name : "un",
        start : 1, 
        stop : 4, 
        steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
            runSequence1 = true;
            console.log(event);
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
            console.log(event);
		},
		onStop : (event) => {
            console.log(event);
		},		
	});
    
    sequencer.registerSequence({
		name : "deux",
        start : 4, 
        stop : 8, 
		steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
		},
		onStop : (event) => {
		},		
		
	});
    
    sequencer.registerSequence({
		name : "trois",
        start : 8, 
        stop : 12, 
		steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
		},
		onStop : (event) => {
		},	
	});
    
     sequencer.registerSequence({
		name : "quatre",
        start : 12, 
        stop : 16, 
		steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
		},
		onStop : (event) => {
		},	
		
	});
    
     sequencer.registerSequence({
		name : "cinq",
        start : 16, 
        stop : 20, 
		steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
		},
		onStop : (event) => {
		},	
		
	});
    
     sequencer.registerSequence({
		name : "six",
        start : 20, 
        stop : 24, 
		steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
		},
		onStop : (event) => {
		},	
		
	});
    
        
     sequencer.registerSequence({
		name : "sept",
        start : 24, 
        stop : 28, 
		steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
		},
		onStop : (event) => {
		},	
	});
    
        
     sequencer.registerSequence({
		name : "huit",
        start : 28, 
        stop : 32, 
		steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
		},
		onStop : (event) => {
		},	
	});
    
        
     sequencer.registerSequence({
		name : "huit et demi",
        start : 32, 
        stop : 34, 
		steps: [
            1, 1+1/4, 1+2/4, 1+3/4
        ],
		onStart : (event) => {
		},
		onStep : (event) => {
            Sequence_1.update(event.amount)
		},
		onStop : (event) => {
            runSequence1 = false;
		},	
	});
    

    //sequencer pour mettre à l'envers 
    
    //séquence 2 
    
            sequencer.registerSequence({
		name :"trente-six",
        start : 34, 
        stop : 44, 
         steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
		onStart : (event) => {
            runSequence9 = true ; 
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_9.update(event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
        sequencer.registerSequence({
		name :"trente-sept",
        start : 44, 
        stop : 54, 
            
             steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
            
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_9.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
     sequencer.registerSequence({
		name :"trente-huit",
        start : 54, 
        stop : 64, 
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_9.update(event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
       sequencer.registerSequence({
		name :"trente-neuf",
        start : 64, 
        stop : 74, 
           
            steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
           
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_9.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
    
       sequencer.registerSequence({
		name :"quarante",
        start : 74, 
        stop : 82, 
           
            steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
           
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_9.update(event.amount)
		},
		onStop : (event) => {
            runSequence9 = false; 
			console.log(event)
		},
		
    	});
    
     
    
    //séquence 3 
    
     sequencer.registerSequence({
		name :"treize",
        start : 82, 
        stop : 94,
        
        steps:[ 1,1+2/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,],
         
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
         runSequence3 = true;
			console.log(event);
            Sequence_3.update(event.amount);
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
    
    sequencer.registerSequence({
		name :"seize",
        start : 94, 
        stop : 106,
        
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
        
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_3.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
	});
    
       sequencer.registerSequence({
		name :"dix-sept",
        start : 106, 
        stop : 118,
        
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
        
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_3.update(event.amount)
		},
		onStop : (event) => {
            runSequence2 = false;
			console.log(event)
		},
		
    	});



    
    // séquence 4 
    
           sequencer.registerSequence({
		name :"dix-huit",
        start : 118, 
        stop : 130, 
               
	 steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
		onStart : (event) => {
			console.log(event)
            runSequence4 = true;
		},
		onStep : (event) => {
			console.log(event)
            Sequence_4.update(event.amount)
		},
		onStop : (event) => {
			console.log(event)
            
		},
	});
    
             sequencer.registerSequence({
		name :"dix-neuf",
        start : 130, 
        stop : 142, 
			 steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
		onStart : (event) => {
			console.log(event)
        },
                 
		onStep : (event) => {
			console.log(event)
            Sequence_4.update(1 - event.amount)
		},
		onStop : (event) => {
			console.log(event)
            
		},
	});
    
             sequencer.registerSequence({
		name :"vingt",
        start : 142, 
        stop : 154, 
       steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
        
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_4.update(event.amount)
		},
		onStop : (event) => {
            runSequence4 = false;
			console.log(event)
		},
		
    	});

    
    //séquence 5
    
               sequencer.registerSequence({
		name :"vingt-un",
        start : 154, 
        stop : 166, 
		
               
	 steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
		onStart : (event) => {
			console.log(event)
            runSequence5 = true;
		},
		onStep : (event) => {
			console.log(event)
            Sequence_5.update(event.amount)
		},
		onStop : (event) => {
			console.log(event)
            
		},
	});
    
               sequencer.registerSequence({
		name :"vingt-deux",
        start : 166, 
        stop : 178, 
                   
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
                   
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_5.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
            sequencer.registerSequence({
		name :"vingt-trois",
        start : 178, 
        stop : 190, 
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
                
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_5.update(event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
        sequencer.registerSequence({
		name :"vingt-quatre",
        start : 190, 
        stop : 202, 
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_5.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
    
        sequencer.registerSequence({
		name :"vingt-cinq",
        start : 202, 
        stop : 214, 
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_5.update(event.amount)
		},
		onStop : (event) => {
            runSequence5 = false;
			console.log(event)
		},
		
    	});
    
    
    //séquence6
    
     sequencer.registerSequence({
		name :"vingt-six",
        start : 214, 
        stop : 224, 
         
          steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
         
		onStart : (event) => {
            runSequence6 = true;
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_6.update(event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
    sequencer.registerSequence({
		name :"vingt-sept",
        start : 224, 
        stop : 236, 
        
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
         
    
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_6.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
    sequencer.registerSequence({
		name :"vingt-huit",
        start : 236, 
        stop : 248, 
        
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
         
    
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_6.update(event.amount)
		},
		onStop : (event) => {
            
                runSequence6 = false;
            
			console.log(event)
		},
		
    	});
    
    
    
    
// séquence 7 
    
        sequencer.registerSequence({
		name :"vingt-neuf",
        start : 248, 
        stop : 260, 
            
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
         
            
		onStart : (event) => {
            runSequence7 = true; 
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_7.update(event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
  
       sequencer.registerSequence({
		name :"trente",
        start : 260, 
        stop : 272,
           
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
         
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_7.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
    
        sequencer.registerSequence({
		name :"trente-un",
        start : 272, 
        stop : 284, 
            
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
         
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_7.update(event.amount)
		},
		onStop : (event) => {
                runSequence7 = false;
			console.log(event)
		},
		
    	});
    
    
    //séquence 8 
    
          sequencer.registerSequence({
		name :"trente-deux",
        start : 284, 
        stop : 294,
              
                steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
              
		onStart : (event) => {
            runSequence8 = true; 
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_8.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
         sequencer.registerSequence({
		name :"trente-trois",
        start : 294, 
        stop : 304, 
             
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
             
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_8.update(event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
    
         sequencer.registerSequence({
		name :"trente-quatre",
        start : 304, 
        stop : 314, 
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
             
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_8.update(1-event.amount)
		},
		onStop : (event) => {
			console.log(event)
		},
		
    	});
    
     
         sequencer.registerSequence({
		name :"trente-cinq",
        start : 314, 
        stop : 324,
             
        steps: [
            1, 1+1/12, 1+2/12, 1+3/12,
            1+4/12, 1+5/12, 1+6/12, 1+7/12,
            1+8/12, 1+9/12, 1+10/12, 1+11/12,
        ],
             
		onStart : (event) => {
			console.log(event)
		},
		onStep : (event) => {
			console.log(event)
            Sequence_8.update(event.amount)
		},
		onStop : (event) => {
            runSequence8 = false ; 
			console.log(event)
		},
		
    	});
        
    
  }