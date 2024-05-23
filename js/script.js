/**
Daniel Little
*/
"use strict";
//declaring names of states
let vampire;
let detective;
let knight;
let shooter;
let racing;
let cowboy;
let titleScreen;
let map;

//declaring variables for class Titles
let titleClass;
let mainClass;
let contactClass;
let cvClass;
let drawingClass;
let musicClass;
let programmingClass;
let videoClass;

//declaring names of states
let contact;
let drawing;
let music;
let programming;
let video;
let cv;
//telling program which state to begin inspect
let state = `title`;

//declaring button
let buttonX1;
let buttonX2;
let buttonY1;
let buttonSizeX;
let buttonSizeY;
let maxButtonSize = 1550;

let verticalThreshold = 1050;

let nameSizeBoost;
let MenuSizeBoost;

let mainTextSize;
let mainTextSizeVertical;

//declaring variables for fonts
let oldEnglish;
let deutsche;

//declaring variables for menu properties
let menuToggle;

let menuDetectx;
let menuDetecty;

let menuTextYMain;
let menuTextYMusic;
let menuTextYDrawing;
let menuTextYProgramming;
let menuTextYVideo;
let menuTextYContact;
let menuTextYCV;
let menuTextColour;


/**
preloading images/songs
*/
function preload() {
  cowboy = loadImage('assets/images/cowboy.png');
  detective = loadImage('assets/images/detective.png');
  knight = loadImage('assets/images/knight.png');
  racing = loadImage('assets/images/racing.png');
  shooter = loadImage('assets/images/shooter.png');
  vampire = loadImage('assets/images/vampire.png');
  map = loadImage('assets/images/map.png');
  titleScreen = loadImage('assets/images/title screen.png');

  deutsche = loadFont('assets/fonts/DeutscheZierschrift.ttf');
  oldEnglish = loadFont('assets/fonts/OldeEnglish.ttf');
}

/**
creates canvas
*/
function setup() {
    //stores data from each class in a variable with a matching name
    titleClass = new Title();
    mainClass = new Main();
    contactClass = new Contact();
    cvClass = new CV();
    drawingClass = new Drawing();
    musicClass = new Music();
    programmingClass = new Programming();
    videoClass = new Video();

    menuToggle = 0;
    nameSizeBoost = 0;
    MenuSizeBoost = 0;
    menuDetectx = windowWidth - 122;
    menuDetecty = 90;

    menuTextColour;

  push();
  createCanvas(windowWidth, windowHeight+50);
  if (windowWidth >= 1550){
    buttonX1 = 4.3*windowWidth/16 + [windowWidth - 1550] /4.3;
    buttonX2 = 11.7*windowWidth/16 - [windowWidth - 1550] / 4.3;
    buttonY1 = windowHeight/4 + 35 - maxButtonSize/100;

    buttonSizeX = maxButtonSize/7*3.2;
    buttonSizeY = maxButtonSize/6;
  } else if (windowWidth < 1550 && windowWidth > verticalThreshold){
  buttonX1 = 4.3*windowWidth/16;
  buttonX2 = 11.7*windowWidth/16;
  buttonY1 = windowHeight/4 + 35 - maxButtonSize/100;

  buttonSizeX = windowWidth/7*3.2;
  buttonSizeY = windowWidth/6;
  } else if (windowWidth < verticalThreshold){
    buttonX1 = windowWidth/2;
    buttonX2 = buttonX1;
    buttonY1 = windowHeight/4.5;

    buttonSizeX = [maxButtonSize/7*3.2]*[windowHeight/2000];
    buttonSizeY = [maxButtonSize/6]*[windowHeight/2000];
    pop();
    }
}
/**
draws simulation
*/
function draw() {

  
  if (state === `title`) {
    push();
    titleClass.displayTitle();
    titleClass.titleText();
    pop();
  } else if (state === `main`) {
    push();
    if (windowWidth >= verticalThreshold){
      mainClass.displayImages();
    }  else if (windowWidth < verticalThreshold){
      mainClass.displayImagesVertical();
    }
      menu();
    pop();
    mainTextSize = 60;
    mainTextSizeVertical = windowHeight/20;
  } 
  
  else if (state === `contact`) {
      contactClass.displayContact();
      menu();
  } else if (state === `drawing`) {
      drawingClass.displayDrawing();
      menu();
  } else if (state === `music`) {
    musicClass.displayMusic();
      menu();
  } else if (state === `video`) {
      videoClass.displayVideo();
      menu();
  } else if (state === `cv`) {
      cvClass.displayCV();
      menu();
  } else if (state === `programming`) {
    programmingClass.displayProgramming();
    menu();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight+50);
  if (windowWidth >= 1550){
    buttonX1 = 4.3*windowWidth/16 + [windowWidth - 1550] /4.3;
    buttonX2 = 11.7*windowWidth/16 - [windowWidth - 1550] / 4.3;
    buttonY1 = windowHeight/4 + 35 - maxButtonSize/100;

    buttonSizeX = maxButtonSize/7*3.2;
    buttonSizeY = maxButtonSize/6;
  } else if (windowWidth < 1550 && windowWidth > verticalThreshold){
  buttonX1 = 4.3*windowWidth/16;
  buttonX2 = 11.7*windowWidth/16;
  buttonY1 = windowHeight/4 + 35 - maxButtonSize/100;

  buttonSizeX = windowWidth/7*3.2;
  buttonSizeY = windowWidth/6;
  } else if (windowWidth < verticalThreshold){
    buttonX1 = windowWidth/2;
    buttonX2 = buttonX1;
    buttonY1 = windowHeight/4.5;

    buttonSizeX = [maxButtonSize/7*3.2]*[windowHeight/2000];
    buttonSizeY = [maxButtonSize/6]*[windowHeight/2000];
      }
} 

//menutoggle
function mousePressed() {
}

//checks mousepressing for site
function mouseReleased() {
/**
*/
  if (state === `main` || `video` || `music` || `drawing` || `programming` || `contact` || `cv`) {
    push();
      if (mouseX < windowWidth - 25 && mouseX > windowWidth - 72) {
        if (mouseY > 42 && mouseY <90 && menuToggle != 1) {
          menuToggle = 1;
 } 
        else if (mouseX < windowWidth - 25 && mouseX > windowWidth - 55) {
        if (mouseY > 42 && mouseY < 79 && menuToggle === 1) {
          menuToggle = 0;
        }
      }
    } 
  }

  if (state === `title`) {
  //  if(mouseX>windowWidth/2 - windowWidth/4 && mouseX<windowWidth/2 + windowWidth/4 && mouseY>9*windowHeight/20 - windowWidth/5 && mouseY<9*windowHeight/20 + windowWidth/6.5){
    state = `main`;
    menuToggle = 0;
 // }
    
  } else if (state === `main`) {
    push();
    if (windowWidth >= verticalThreshold){
      mainClass.clickDetect();
    } else if (windowWidth < verticalThreshold){
      mainClass.clickDetectVertical();
      }
    }
if (state === `contact`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 && mouseY < 102) {
        state = `title`;
        menuToggle = 0;
      } 
    }
  } else if (state === `drawing`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 && mouseY < 102) {
        state = `title`;
        menuToggle = 0;
      } 
    }
  } else if (state === `music`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 && mouseY < 102) {
        state = `title`;
        menuToggle = 0;
      } 
    } 
  } else if (state === `programming`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 && mouseY < 102) {
        state = `title`;
        menuToggle = 0;
      } 
    }
  } else if (state === `video`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 && mouseY < 102) {
        state = `title`;
        menuToggle = 0;
      } 
    }
  } else if (state === `cv`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 && mouseY < 102) {
        state = `title`;
        menuToggle = 0;
      } 
    } 
    pop();
  }


  //sets detection modes for menu in each state
  console.log(state);
  if (menuToggle === 1) {
    if (state === `main`){
mainClass.menuTextDetect();
    } else if (state === `video`){
      videoClass.menuTextDetect();
          }else if (state === `music`){
            musicClass.menuTextDetect();
                } else if (state === `drawing`){
                  drawingClass.menuTextDetect();
                      }else if (state === `programming`){
                        programmingClass.menuTextDetect();
                            }else if (state === `cv`){
                              cvClass.menuTextDetect();
                                  }else if (state === `contact`){
                                    contactClass.menuTextDetect();
                                        }
  }


}



//menu settings
function menu(){
  if (menuToggle === 0){
    menuDetectx = windowWidth - 122;
    menuDetecty = 165;
    } else if (menuToggle === 1){
      menuDetectx = windowWidth - 273;
      menuDetecty = 367;
    }

if (state === `main`){
  menuTextYMain = windowHeight*2;
  menuTextYVideo = 78;
  menuTextYMusic = 133;
  menuTextYDrawing = 188;
  menuTextYProgramming = 243;
  menuTextYCV = 298;
  menuTextYContact = 353;
} else if (state === `video`){
  menuTextYMain = 353;
  menuTextYVideo = windowHeight*2;
  menuTextYMusic = 78;
  menuTextYDrawing = 133;
  menuTextYProgramming = 188;
  menuTextYCV = 243;
  menuTextYContact = 298;

} else if (state === `music`){
  menuTextYMain = 353;
  menuTextYVideo = 78;
  menuTextYMusic = windowHeight*2;
  menuTextYDrawing = 133;
  menuTextYProgramming = 188;
  menuTextYCV = 243;
  menuTextYContact = 298;
  
} else if (state === `drawing`){
  menuTextYMain = 353;
  menuTextYVideo = 78;
  menuTextYMusic = 133;
  menuTextYDrawing = windowHeight*2;
  menuTextYProgramming = 188;
  menuTextYCV = 243;
  menuTextYContact = 298;
} else if (state === `programming`){
  menuTextYMain = 353;
  menuTextYVideo = 78;
  menuTextYMusic = 133;
  menuTextYDrawing = 188;
  menuTextYProgramming = windowHeight*2;
  menuTextYCV = 243;
  menuTextYContact = 298;
} else if (state === `cv`){
  menuTextYMain = 353;
  menuTextYVideo = 78;
  menuTextYMusic = 133;
  menuTextYDrawing = 188;
  menuTextYProgramming = 243;
  menuTextYCV = windowHeight*2;
  menuTextYContact = 298;
} else if (state === `contact`){
  menuTextYMain = 358;
  menuTextYVideo = 78;
  menuTextYMusic = 133;
  menuTextYDrawing = 188;
  menuTextYProgramming = 243;
  menuTextYCV = 298;
  menuTextYContact = windowHeight*2;
} 

  if (menuToggle === 1){
  push();
  rectMode(RIGHT);
  fill(255,255,255,);
  stroke(0);
  rect(windowWidth - 273.5, 41, 250, 325);
  // rect(windowWidth - 223.5, 41, 200, 250);

  textFont(oldEnglish);
  textSize(65 + nameSizeBoost);
  textAlign(CENTER);
  fill(0);
  stroke(0);
  text(`x`, windowWidth - 38, 70);
  textSize(80);

  textAlign(LEFT);
  textSize(40);
  fill(0);
  text(`Main Page`, windowWidth - 265, menuTextYMain);
  text(`Video`, windowWidth - 265, menuTextYVideo);
  text(`Music`, windowWidth - 265, menuTextYMusic);
  text(`Drawing`, windowWidth - 265, menuTextYDrawing);
  text(`Programming`, windowWidth - 265, menuTextYProgramming);
  text(`CV`, windowWidth - 265, menuTextYCV);
  text(`Contact`, windowWidth - 265, menuTextYContact);
  pop();
  }
}

