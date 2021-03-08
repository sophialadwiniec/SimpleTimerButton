/***********************************************************************************
  Simple Buttons and Timers
  by Sophia Ladwiniec
  
  Simple Buttons and Timers in P5 JS
***********************************************************************************/

var button; 
var timer; 
var seconds = 0; 
var running = false; 

// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);
  makeButton(); 
  textAlign(LEFT);
  textSize(24);
  timer = new Timer(1000); 
}

// Draw code goes here
function draw() {
  background(255);
  button.draw(); 
  if(running === true) {
    fill(0); 
    updateTimer(); 
    text(seconds, width/2, height * (1/4));
  }

}

// makes the timer button that starts and stops the timer  
function makeButton() {
  button = new Clickable(); 
  button.textSize = 30;
  button.text = "Start and Stop Timer"

  button.color = "#FFFFFF"; 
  button.width = 400; 
  button.height = 100; 

  button.locate(width * (1/2) - 200, height * (1/2) - 50); 

  button.onOutside = buttonOnOutside; 
  button.onHover = buttonHover; 
  button.onPress = buttonPressed; 
  button.onRelease = buttonOnOutside; 
}

// changes the color to white when it is not being touched by the mouse 
buttonOnOutside = function () {
  this.color = "#FFFFFF";
}

// changes the color to hot pink when it is being touched by the mouse 
buttonHover = function () {
  this.color = "#FF69B4"; 
}

// when you press the button while the timer is running you'll stop it and set it back to 0 
// when you press the button while the timer is not running you'll restart it and watch it count
buttonPressed = function () {
  if(running === true){
    running = false; 
    seconds = 0; 
  } else {
    running = true; 
  }
}

// updates the timer second by second 
function updateTimer() {
  if(timer.expired()) {
    seconds++;
    timer.start();
  }
}
