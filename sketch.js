let rotateVal = 0;
let gameState = 1;
let input;
let grayscaleValue = 150;
let slider, sliderfake1, sliderfake2, sliderfake3, sliderfake4, sliderfake5;
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
  input.position(725, 350);

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
    text('Welcome to the maze', 400, 175);
    text('Enter password', 400, 200);
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
      gameState = 4.5;
    }
  }
  else if(gameState === 4.5) { //4.5 (create select)
    select = createSelect();
    select.position(800, 220);
    select.option('no');
    select.option('yes');
    gameState = 5;
  }

  else if(gameState === 5) { // Start of third stage
    // noCanvas();
    // noLoop();
    bool = true;
    background(0);

    text('The path ahead is dangerous', 400, 75);
    text('Do you wish to continue?', 400, 100);
    selectedValue = select.value();

    if(selectedValue === 'yes') {
      gameState = 6;
    }

  }
  else if(gameState === 6) { // Transition to fourth stage
    removeElements();
    background(grayscaleValue);
    grayscaleValue++;
    if(grayscaleValue >= 255) {
      grayscaleValue = 0;
      gameState = 6.5;
    }
  }
  else if(gameState === 6.5) { //create slider
    sliderfake1 = createSlider(0, 100, 0, 1);
    sliderfake1.position(700, 400);
    sliderfake2 = createSlider(0, 100, 0, 1);
    sliderfake2.position(700, 450);
    sliderfake3 = createSlider(0, 100, 0, 1);
    sliderfake3.position(700, 500);
    sliderfake4 = createSlider(0, 100, 0, 1);
    sliderfake4.position(700, 550);

    slider = createSlider(0, 100, 0, 1);
    slider.position(700, 600);
    sliderValue = 0;

    gameState = 7;
  }
  else if(gameState === 7) { //Start of fourth stage
    background(255);
    text('Set the sliders to the correct positions to continue', 400, 100);
    fill(0);
    if(slider.value() === 100) {
      gameState = 8;
    }
  }
  else if(gameState === 8) { //Transition to final stage
    removeElements();
    background(grayscaleValue);
    grayscaleValue--;
    if(grayscaleValue <= 0) {
      grayscaleValue = 0;
      gameState = 8.5;
    }
  }
  else if(gameState === 8.5) { //create element
    text('END OF THE MAZE', 400, 300);
    text('Thanks for playing', 400, 350);
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
