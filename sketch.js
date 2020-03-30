let rotateVal = 0;
let gameState = 1;
let input;
let grayscaleValue = 150;
let slider;
let select;
let selectedValue;
let bool = false;


function preload() {
  pinwheel = loadImage('./images/pinwheel.png');
}

function setup() {
  let canvas = createCanvas(800,800);
  // canvas.position = (100, 100);
  imageMode(CENTER);

  input = createInput();
  input.position(width/2 - input.width/2, height/2-50);

  input.position(width);

  myString = '';
  background(150);

}

function draw() {
  background(150);

  if(gameState === 1) { // Start of first stage
    background(grayscaleValue);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text('Enter password', 450, 200);
    button = createButton('submit');
    button.position(input.x + input.width, height/2-50);
    button.mousePressed(buttonFunction);
  }
  else if(gameState === 2) { // Transition to second stage
    removeElements();
    background(grayscaleValue);
    grayscaleValue--;
    if(grayscaleValue <= 0) {
      grayscaleValue = 0;
      gameState = 3;
    }
  }
  else if(gameState === 3) { // Start of second stage
    background(0);
    push();
    translate(width/2, height/2);
    rotate(rotateVal);
    image(pinwheel, 0, 0, 600, 600);
    pop();

    button = createButton('Respin the wheel');
    button.position(500, 120);
    button.mousePressed(buttonFunction);

    button = createButton('next stage');
    button.position(1100, 120);
  }
  else if(gameState === 4) { // Transition to third stage
    removeElements();
    background(grayscaleValue);
    grayscaleValue--;
    if(grayscaleValue <= 0) {
      grayscaleValue = 0;
      gameState = 5;
    }
  }
  else if(gameState === 5) { // Start of third stage
    // noCanvas();
    noLoop();
    bool = true;
    background(0);

    text('Do you wish to continue?', 400, 100);

    select = createSelect();
    select.position(800, 220);
    select.option('no');
    select.option('yes');

    selectedValue = select.value();

    if(selectedValue === 'yes') {
      gameState = 6;
      loop();
    }

  }
  else if(gameState === 6) { // Transition to fourth stage
    removeElements();
    background(grayscaleValue);
    grayscaleValue++;
    if(grayscaleValue >= 255) {
      grayscaleValue = 0;
      gameState = 7;
    }
  }
  else if(gameState === 7) { //Start of fourth stage
    background(255);

  }
rotateVal += 0.03

}

function buttonFunction() {
  gameState = 2;
}

function mousePressed() {
  if(gameState === 3) {
    grayscaleValue = 255;
    gameState = 4;
  }
  // if(gameState === 4) {
  //   gameState = 5;
  // }
}
