let audioPath = "./assets/audio/Jonski - Pretty Rave Gurl.mp3";
let sequencer;
let stars = [];
let balls = [];

let mesAnims = [];

class Ball {
  constructor(x, y, radius, speed, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.color = color;
  }

  update() {
    this.y += this.speed;
    if (this.y > height + this.radius) {
      this.y = -this.radius;
    }
  }

  draw() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
}

function drawCircles() {
  const centerX = width / 2;
  const centerY = height / 2;

  const circleSize1 = 100;
  const circleSize2 = 200;
  const circleSize3 = 300;

  const circleColor1 = getRandomColor();
  const circleColor2 = getRandomColor();
  const circleColor3 = getRandomColor();

  fill(circleColor1);
  circle(centerX, centerY, circleSize3);

  fill(circleColor2);
  circle(centerX, centerY, circleSize2);

  fill(circleColor3);
  circle(centerX, centerY, circleSize1);
}

function preload() {
  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/Sprite-[IMG_NUM].jpeg",
      imgCount: 5,
      firstImageNum: 1,
      numberLength: 4
    })
  );
      console.log(mesAnims[0]);
      
  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/girl-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 1,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/boy-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 3,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/HELLO-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 4,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/butter-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 1,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/DANCE-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 1,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/CLOSER-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 2,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/KISS-[IMG_NUM].jpeg",
      imgCount: 8,
      firstImageNum: 3,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/girl2-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 1,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/boy2-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 3,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/HELLO2-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 4,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/BUTTER/butter2-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 1,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/DANCE/DANCE2-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 1,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/CLOSER2/CLOSER3-[IMG_NUM].jpeg",
      imgCount: 4,
      firstImageNum: 2,
      numberLength: 4
    })
  );

  mesAnims.push(
    new Animator({
      imgPatternAddress: "./assets/images/KISS/KISS2-[IMG_NUM].jpeg",
      imgCount: 8,
      firstImageNum: 3,
      numberLength: 4
    })
  );


}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  sequencer = new Sequencer(audioPath, 200, false);

  
  
  sequencer.registerSequence({

    name: "intro",
    start: 1,
    stop: 5,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro2",
    start: 231,
    stop: 234,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro3",
    start: 299,
    stop: 303,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro4",
    start: 304,
    stop: 308,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro5",
    start: 309,
    stop: 313,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro6",
    start: 314,
    stop: 318,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro7",
    start: 319,
    stop: 323,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro8",
    start: 324,
    stop: 328,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro9",
    start: 329,
    stop: 330,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });




  sequencer.registerSequence({
    name: "secondSequence",
    start: 6,
    stop: 9,
    onStart: (event) => {
      mesAnims[1].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[1].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[1].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "secondSequence2",
    start: 38,
    stop: 41,
    onStart: (event) => {
      mesAnims[1].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[1].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[1].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "secondSequence5",
    start: 463,
    stop: 464,
    onStart: (event) => {
      mesAnims[1].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[1].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[1].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "secondSequence3",
    start: 395,
    stop: 398,
    onStart: (event) => {
      mesAnims[1].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
        const x = random(width); // Random x-coordinate within the canvas
        const y = random(height); // Random y-coordinate within the canvas
        const size = random(10, 50); // Random size for the star
        const color = getRandomColor(); // Get a random color for the star
        stars.push({ x, y, size, color });
      mesAnims[1].cursor = event.step - event.start;
      }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[1].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "secondSequence4",
    start: 427,
    stop: 430,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[1].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[1].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[1].setDrawable(false);
    },
  });


  sequencer.registerSequence({
    name: "thirdSequence",
    start: 10,
    stop: 13,
    onStart: (event) => {
      mesAnims[2].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[2].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[2].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "thirdSequence2",
    start: 42,
    stop: 45,
    onStart: (event) => {
      mesAnims[2].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[2].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[2].setDrawable(false);
    },
  });
  
  sequencer.registerSequence({
    name: "thirdSequence3",
    start: 399,
    stop: 402,
    onStart: (event) => {
      mesAnims[2].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
        const x = random(width); // Random x-coordinate within the canvas
        const y = random(height); // Random y-coordinate within the canvas
        const size = random(10, 50); // Random size for the star
        const color = getRandomColor(); // Get a random color for the star
        stars.push({ x, y, size, color });
      mesAnims[2].cursor = event.step - event.start;
      }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[2].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "thirdSequence4",
    start: 431,
    stop: 434,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[2].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[2].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[2].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "fourthSequence",
    start: 14,
    stop: 17,
    onStart: (event) => {
      mesAnims[3].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[3].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[3].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "fourthSequence2",
    start: 46,
    stop: 49,
    onStart: (event) => {
      mesAnims[3].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[3].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[3].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "fourthSequence3",
    start: 403,
    stop: 406,
    onStart: (event) => {
      mesAnims[3].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
        const x = random(width); // Random x-coordinate within the canvas
        const y = random(height); // Random y-coordinate within the canvas
        const size = random(10, 50); // Random size for the star
        const color = getRandomColor(); // Get a random color for the star
        stars.push({ x, y, size, color });
      mesAnims[3].cursor = event.step - event.start;
      }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[3].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "fourthSequence4",
    start: 435,
    stop: 438,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[3].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[3].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[3].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "fifthSequence",
    start: 18,
    stop: 21,
    onStart: (event) => {
      mesAnims[4].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[4].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[4].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "fifthSequence2",
    start: 50,
    stop: 53,
    onStart: (event) => {
      mesAnims[4].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[4].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[4].setDrawable(false);
    },
  });

  
  sequencer.registerSequence({
    name: "fifththSequence3",
    start: 407,
    stop: 410,
    onStart: (event) => {
      mesAnims[4].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
        const x = random(width); // Random x-coordinate within the canvas
        const y = random(height); // Random y-coordinate within the canvas
        const size = random(10, 50); // Random size for the star
        const color = getRandomColor(); // Get a random color for the star
        stars.push({ x, y, size, color });
      mesAnims[4].cursor = event.step - event.start;
      }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[4].setDrawable(false);
    },
  });

  
  sequencer.registerSequence({
    name: "fifthSequence4",
    start: 439,
    stop: 442,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[4].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[4].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[4].setDrawable(false);
    },
  });


  sequencer.registerSequence({
    name: "sixthSequence",
    start: 22,
    stop: 25,
    onStart: (event) => {
      mesAnims[5].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[5].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[5].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "sixthSequence2",
    start: 54,
    stop: 57,
    onStart: (event) => {
      mesAnims[5].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[5].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[5].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "sixththSequence3",
    start: 411,
    stop: 414,
    onStart: (event) => {
      mesAnims[5].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
        const x = random(width); // Random x-coordinate within the canvas
        const y = random(height); // Random y-coordinate within the canvas
        const size = random(10, 50); // Random size for the star
        const color = getRandomColor(); // Get a random color for the star
        stars.push({ x, y, size, color });
      mesAnims[5].cursor = event.step - event.start;
      }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[5].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "sixthSequence4",
    start: 443,
    stop: 446,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[5].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[5].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[5].setDrawable(false);
    },
  });


  sequencer.registerSequence({
    name: "seventhSequence",
    start: 26,
    stop: 29,
    onStart: (event) => {
      mesAnims[6].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[6].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[6].setDrawable(false);
    },
  });


  sequencer.registerSequence({
    name: "seventhSequence2",
    start: 58,
    stop: 61,
    onStart: (event) => {
      mesAnims[6].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[6].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[6].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "sevenththSequence3",
    start: 415,
    stop: 418,
    onStart: (event) => {
      mesAnims[6].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
        const x = random(width); // Random x-coordinate within the canvas
        const y = random(height); // Random y-coordinate within the canvas
        const size = random(10, 50); // Random size for the star
        const color = getRandomColor(); // Get a random color for the star
        stars.push({ x, y, size, color });
      mesAnims[6].cursor = event.step - event.start;
      }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[6].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "seventhSequence4",
    start: 447,
    stop: 450,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[6].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[6].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[6].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "eigththSequence",
    start: 30,
    stop: 37,
    onStart: (event) => {
      mesAnims[7].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[7].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[7].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "eigththSequence2",
    start: 62,
    stop: 69,
    onStart: (event) => {
      mesAnims[7].setDrawable(true);
    },
    onStep: (event) => {
      mesAnims[7].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[7].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "eighththSequence3",
    start: 419,
    stop: 426,
    onStart: (event) => {
      mesAnims[7].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
        const x = random(width); // Random x-coordinate within the canvas
        const y = random(height); // Random y-coordinate within the canvas
        const size = random(10, 50); // Random size for the star
        const color = getRandomColor(); // Get a random color for the star
        stars.push({ x, y, size, color });
      mesAnims[7].cursor = event.step - event.start;
      }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[7].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "seighthSequence4",
    start: 451,
    stop: 458,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[7].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[7].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[7].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "ninethSequence",
    start: 70,
    stop: 73,
    onStart: (event) => {
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[8].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[8].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "ninethSequence2",
    start: 102,
    stop: 105,
    onStart: (event) => {
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 10; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[8].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[8].setDrawable(false);
    },
  });



  sequencer.registerSequence({
    name: "tenthSequence",
    start: 74,
    stop: 77,
    onStart: (event) => {
      mesAnims[9].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[9].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[9].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "tenthSequence2",
    start: 106,
    stop: 109,
    onStart: (event) => {
      mesAnims[9].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 10; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[9].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[9].setDrawable(false);
    },
  });


  sequencer.registerSequence({
    name: "eleventhSequence",
    start: 78,
    stop: 81,
    onStart: (event) => {
      mesAnims[10].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[10].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[10].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "eleventhSequence2",
    start: 110,
    stop: 113,
    onStart: (event) => {
      mesAnims[10].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 10; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[10].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[10].setDrawable(false);
    },
  });


  sequencer.registerSequence({
    name: "twelveththSequence",
    start: 82,
    stop: 85,
    onStart: (event) => {
      mesAnims[11].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[11].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[11].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "twelveththSequence2",
    start: 113,
    stop: 116,
    onStart: (event) => {
      mesAnims[11].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 10; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[11].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[11].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "13thSequence",
    start: 86,
    stop: 89,
    onStart: (event) => {
      mesAnims[12].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[12].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[12].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "13thSequence2",
    start: 117,
    stop: 120,
    onStart: (event) => {
      mesAnims[12].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 10; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[12].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[12].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "14thSequence",
    start: 90,
    stop: 93,
    onStart: (event) => {
      mesAnims[13].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[13].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[13].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "14thSequence2",
    start: 121,
    stop: 124,
    onStart: (event) => {
      mesAnims[13].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 10; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[13].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[13].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "15thSequence",
    start: 94,
    stop: 101,
    onStart: (event) => {
      mesAnims[14].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 5; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[14].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[14].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "15thSequence2",
    start: 125,
    stop: 132,
    onStart: (event) => {
      mesAnims[14].setDrawable(true);
    },
    onStep: (event) => {
      for (let i = 0; i < 10; i++){
      const x = random(width); // Random x-coordinate within the canvas
      const y = random(height); // Random y-coordinate within the canvas
      const size = random(10, 50); // Random size for the star
      const color = getRandomColor(); // Get a random color for the star
      stars.push({ x, y, size, color });
      mesAnims[14].cursor = event.step - event.start;
    }
    },
    onStop: (event) => {
      stars = [];
      mesAnims[14].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "fallingBalls",
    start: 133,
    stop: 168,
    onStart: (event) => {
      for (let i = 0; i < 30; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(50, 100);
        const speed = random(5, 10);
        const color = getRandomColor();
        balls.push(new Ball(x, y, radius, speed, color));
      }
      mesAnims[9].cursor = event.step - event.start;
    },
    onStep: (event) => {
      balls.forEach((ball) => {
        ball.update();
      });
      mesAnims[9].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[9].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "fallingBalls2",
    start: 495,
    stop: 528,
    onStart: (event) => {
      for (let i = 0; i < 30; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(50, 100);
        const speed = random(5, 10);
        const color = getRandomColor();
        balls.push(new Ball(x, y, radius, speed, color));
      }
      mesAnims[9].cursor = event.step - event.start;
    },
    onStep: (event) => {
      balls.forEach((ball) => {
        ball.update();
      });
      mesAnims[9].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[9].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "colorChangeSequence",
    start: 169,
    stop: 198,
    onStart: (event) => {},
    onStep: (event) => {
      changeBackgroundColor(event.step);
    },
    onStop: (event) => {},
  });

  sequencer.registerSequence({
    name: "colorChangeSequence2",
    start: 266,
    stop: 299,
    onStart: (event) => {},
    onStep: (event) => {
      changeBackgroundColor(event.step);
    },
    onStop: (event) => {},
  });

  sequencer.registerSequence({
    name: "colorChangeSequence3",
    start: 465,
    stop: 494,
    onStart: (event) => {},
    onStep: (event) => {
      changeBackgroundColor(event.step);
    },
    onStop: (event) => {},
  });

  sequencer.registerSequence({
    name: "COLORBALLE",
    start: 199,
    stop: 202,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[8].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[8].setDrawable(false);
    },
  });


  sequencer.registerSequence({
    name: "COLORBALLE8",
    start: 234,
    stop: 237,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[8].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[8].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE2",
    start: 203,
    stop: 206,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[9].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[9].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[9].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE9",
    start: 238,
    stop: 241,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[9].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[9].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[9].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE3",
    start: 207,
    stop: 210,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[10].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[10].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[10].setDrawable(false);
    },
  });
  sequencer.registerSequence({
    name: "COLORBALLE10",
    start: 242,
    stop: 245,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[10].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[10].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[10].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE4",
    start: 211,
    stop: 214,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[11].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[11].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[11].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE11",
    start: 246,
    stop: 249,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[11].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[11].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[11].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE5",
    start: 215,
    stop: 218,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[12].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[12].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[12].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE12",
    start: 250,
    stop: 253,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[12].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[12].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[12].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE6",
    start: 219,
    stop: 222,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[13].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[13].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[13].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE13",
    start: 254,
    stop: 257,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[13].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[13].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[13].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE7",
    start: 223,
    stop: 230,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[14].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[14].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[14].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "COLORBALLE14",
    start: 258,
    stop: 265,
    onStart: (event) => {
      // Generate random circles
      for (let i = 0; i < 25; i++) {
        const x = random(width);
        const y = random(height);
        const radius = random(10, 50);
        const speed = random(1, 5);
        const color = getRandomColor();
        const ball = new Ball(x, y, radius, speed, color);
        balls.push(ball);
      }
      mesAnims[14].setDrawable(true);
    },
    onStep: (event) => {
      for (const ball of balls) {
        ball.update();
      }
      mesAnims[14].cursor = event.step - event.start;
    },
    onStop: (event) => {
      balls = [];
      mesAnims[14].setDrawable(false);
    },
  });

  sequencer.registerSequence({
    name: "RAVEGIRLREP",
    start: 331,
    stop: 334,
    onStart: (event) => {
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      
      mesAnims[8].cursor = event.step - event.start;
    
    },
    onStop: (event) => {
      
      mesAnims[8].setDrawable(false);
    },
  });
  

  sequencer.registerSequence({

    name: "intro10",
    start: 335,
    stop: 339,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro11",
    start: 340,
    stop: 344,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro12",
    start: 345,
    stop: 345,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({
    name: "RAVEGIRLREP2",
    start: 346,
    stop: 349,
    onStart: (event) => {
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      
      mesAnims[8].cursor = event.step - event.start;
    
    },
    onStop: (event) => {
      
      mesAnims[8].setDrawable(false);
    },
  });

  sequencer.registerSequence({

    name: "intro13",
    start: 350,
    stop: 354,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro14",
    start: 355,
    stop: 359,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro15",
    start: 360,
    stop: 361,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });
  
  sequencer.registerSequence({
    name: "RAVEGIRLREP3",
    start: 362,
    stop: 365,
    onStart: (event) => {
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      
      mesAnims[8].cursor = event.step - event.start;
    
    },
    onStop: (event) => {
      
      mesAnims[8].setDrawable(false);
    },
  });

  sequencer.registerSequence({

    name: "intro16",
    start: 366,
    stop: 370,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });



  sequencer.registerSequence({
    name: "RAVEGIRLREP4",
    start: 371,
    stop: 374,
    onStart: (event) => {
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      
      mesAnims[8].cursor = event.step - event.start;
    
    },
    onStop: (event) => {
      
      mesAnims[8].setDrawable(false);
    },
  });

  sequencer.registerSequence({

    name: "intro17",
    start: 375,
    stop: 377,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });
  
  sequencer.registerSequence({
    name: "RAVEGIRLREP5",
    start: 378,
    stop: 381,
    onStart: (event) => {
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      
      mesAnims[8].cursor = event.step - event.start;
    
    },
    onStop: (event) => {
      
      mesAnims[8].setDrawable(false);
    },
  });

  sequencer.registerSequence({

    name: "intro18",
    start: 382,
    stop: 383,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro19",
    start: 384,
    stop: 384,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({
    name: "RAVEGIRLREP6",
    start: 385,
    stop: 388,
    onStart: (event) => {
      mesAnims[8].setDrawable(true);
    },
    onStep: (event) => {
      
      mesAnims[8].cursor = event.step - event.start;
    
    },
    onStop: (event) => {
      
      mesAnims[8].setDrawable(false);
    },
  });

  sequencer.registerSequence({

    name: "intro20",
    start: 389,
    stop: 393,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro21",
    start: 394,
    stop: 394,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro22",
    start: 459,
    stop: 462,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  
  sequencer.registerSequence({

    name: "intro23",
    start: 529,
    stop: 533,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro24",
    start: 534,
    stop: 538,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro25",
    start: 539,
    stop: 543,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro26",
    start: 544,
    stop: 548,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro27",
    start: 549,
    stop: 553,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro28",
    start: 554,
    stop: 558,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

  sequencer.registerSequence({

    name: "intro29",
    start: 559,
    stop: 561,
    onStart: (event) => {
      mesAnims[0].setDrawable(true);
      console.log('0 true');
    },
    onStep: (event) => {
      mesAnims[0].cursor = event.step - event.start;
    },
    onStop: (event) => {
      mesAnims[0].setDrawable(false);
      console.log('0 false');
    },
  });

}



function drawStar(x, y, size, color) {
  push();
  translate(x, y);
  fill(color);
  noStroke();

  const angle = TWO_PI / 5;
  const halfAngle = angle / 2;

  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    const sx = cos(a) * (size * 2); // Increase the size of the star by multiplying with a factor (e.g., 2)
    const sy = sin(a) * (size * 2); // Increase the size of the star by multiplying with a factor (e.g., 2)
    vertex(sx, sy);
    const sx2 = cos(a + halfAngle) * size;
    const sy2 = sin(a + halfAngle) * size;
    vertex(sx2, sy2);
  }
  endShape(CLOSE);

  pop();
}





function draw() {
  background("#FF00FF");
  sequencer.update();

  

  if (mesAnims[0].isDrawable()) {
    mesAnims[0].draw();
  }

  for (let ball of balls) {
    ball.update();
    ball.draw();
  }

  if (mesAnims[0].isDrawable()) {
    mesAnims[0].draw();
  }

  if (mesAnims[0].isDrawable()) {
    mesAnims[0].draw();
  }

  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[1].isDrawable()) {
    mesAnims[1].draw();
  }

  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[2].isDrawable()) {
    mesAnims[2].draw();
  }

  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[3].isDrawable()) {
    mesAnims[3].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[4].isDrawable()) {
    mesAnims[4].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[5].isDrawable()) {
    mesAnims[5].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }
  
  if (mesAnims[6].isDrawable()) {
    mesAnims[6].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }
  if (mesAnims[7].isDrawable()) {
    mesAnims[7].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }
  if (mesAnims[8].isDrawable()) {
    mesAnims[8].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[9].isDrawable()) {
    mesAnims[9].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[10].isDrawable()) {
    mesAnims[10].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }
  if (mesAnims[11].isDrawable()) {
    mesAnims[11].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[12].isDrawable()) {
    mesAnims[12].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[13].isDrawable()) {
    mesAnims[13].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  if (mesAnims[14].isDrawable()) {
    mesAnims[14].draw();
  }
  for (let i = 0; i < stars.length; i++) {
    const { x, y, size, color } = stars[i];
    drawStar(x, y, size, color);
  }

  for (let ball of balls) {
    ball.update();
    ball.draw();
  }
  if (mesAnims[0].isDrawable()) {
    mesAnims[0].draw();
  }
  

}




function getRandomColor() {
  const r = random(255);
  const g = random(255);
  const b = random(255);
  return color(r, g, b);
}

function changeBackgroundColor(step) {
  const colors = [
    [255, 0, 0],    // Red
    [0, 255, 0],    // Green
    [0, 0, 255],    // Blue
    [255, 255, 0],  // Yellow
  ];
  const colorIndex = (step - 1) % colors.length;
  const [r, g, b] = colors[colorIndex];
  background(r, g, b);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}





