/**
Daniel Little
*/
"use strict";
//declaring names of states
let tree;
let instagramLogo;
let spotifyLogo;
let appleLogo;
let youtubeLogo;
let emailLogo;
let soundcloudLogo;
let spiralCursor;

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

let menuTextMainColour;
let menuTextContactColour;
let menuTextCVColour;
let menuTextDrawingColour;
let menuTextMusicColour;
let menuTextProgrammingColour;
let menuTextVideoColour;

let cvText;

//variables for links for contact page
let youtubeLink;
let instagramLink;
let gmailLink;
let phoneLink;

//declaring name for video links <div>
let melancholy;

let screenPushAmount;

/**
preloading images/songs
*/
function preload() {
  tree = loadImage('assets/images/treeDesign.png');

  instagramLogo = loadImage('assets/images/instagramLogo.png');
  spotifyLogo = loadImage('assets/images/spotifyLogo.png');
  appleLogo = loadImage('assets/images/appleLogo.png');
  youtubeLogo = loadImage('assets/images/youtubeLogo.png');
  emailLogo = loadImage('assets/images/emailLogo.png');
  soundcloudLogo = loadImage('assets/images/soundcloudLogo.png');

  spiralCursor = 'assets/images/spiralCursor.png';

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

    youtubeLink = createA("https://www.youtube.com/channel/UCzUuT08y6frX5r_ywe4PvjA", "youtube", "_blank");
    instagramLink = createA("https://www.instagram.com/0neir0mancing/", "instagram", "_blank");
    gmailLink = createA("mailto:Danswim02@gmail.com", "gmail: Daniel@Oneiromancing.com", "_blank");

    melancholy = select("#melancholy");
    melancholy.hide();

    menuToggle = 0;
    nameSizeBoost = 0;
    MenuSizeBoost = 0;
    menuDetectx = windowWidth - 122;
    menuDetecty = 90;

     menuTextMainColour = 0;
     menuTextContactColour = 0;
     menuTextCVColour = 0;
     menuTextDrawingColour = 0;
     menuTextMusicColour = 0;
     menuTextProgrammingColour = 0;
     menuTextVideoColour = 0;

     screenPushAmount = (2*height/5) - 20;
     //screenPushAmount = 1400;

  push();
  createCanvas(windowWidth, windowHeight*4);
  if (windowWidth >= 1550){
    buttonX1 = 4.3*windowWidth/16 + [windowWidth - 1550] /4.3;
    buttonX2 = 11.7*windowWidth/16 - [windowWidth - 1550] / 4.3;
    buttonY1 = (windowHeight/4 + 35 - maxButtonSize/100);

    buttonSizeX = [maxButtonSize/7*3.2];
    buttonSizeY = [maxButtonSize/8];

      //instructions for middle screen
  } else if (windowWidth < 1550 && windowWidth > verticalThreshold){
  buttonX1 = 4.3*windowWidth/16;
  buttonX2 = 11.7*windowWidth/16;
  buttonY1 = (windowHeight/4 + 35 - maxButtonSize/100);

  buttonSizeX = windowWidth/7*3.2;
  buttonSizeY = windowWidth/8;

  //instructions for vertical screen
  } else if (windowWidth < verticalThreshold){
    buttonX1 = windowWidth/2;
    buttonX2 = buttonX1;
    buttonY1 = ((windowHeight)/3.5 + 80 - (windowHeight/6));

    buttonSizeX = [maxButtonSize/7*3.2]*[windowHeight/2000];
    buttonSizeY = [maxButtonSize/8]*[windowHeight/2000];
      }
}
/**
draws simulation
*/
function draw() {
  screenPushAmount = (2*height/5.29) - 20;

  cursor(spiralCursor, 16, 16);
  
  if (state === `title`) {
    push();
    titleClass.displayTitle();
    titleClass.titleText();
    removeLinks();
    removeYoutubeLinks();
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
    removeLinks();
    removeYoutubeLinks();
  } 
  
  else if (state === `contact`) {
      contactClass.displayContact();
      menu();
      removeYoutubeLinks();
  } else if (state === `drawing`) {
      drawingClass.displayDrawing();
      menu();
      removeLinks();
      removeYoutubeLinks();
  } else if (state === `music`) {
    musicClass.displayMusic();
      menu();
      removeLinks();
      removeYoutubeLinks();
  } else if (state === `video`) {
      videoClass.displayVideo();
      menu();
      removeLinks();
  } else if (state === `cv`) {
      cvClass.displayCV();
      menu();
      removeLinks();
      removeYoutubeLinks();
  } else if (state === `programming`) {
    programmingClass.displayProgramming();
    menu();
    removeLinks();
    removeYoutubeLinks();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight*4);
        //instructions for fully horizontal screen
        if (windowWidth >= 1550){
          buttonX1 = 4.3*windowWidth/16 + [windowWidth - 1550] /4.3;
          buttonX2 = 11.7*windowWidth/16 - [windowWidth - 1550] / 4.3;
          buttonY1 = (windowHeight/4 + 35 - maxButtonSize/100);
      
          buttonSizeX = [maxButtonSize/7*3.2];
          buttonSizeY = [maxButtonSize/8];
      
            //instructions for middle screen
        } else if (windowWidth < 1550 && windowWidth > verticalThreshold){
        buttonX1 = 4.3*windowWidth/16;
        buttonX2 = 11.7*windowWidth/16;
        buttonY1 = (windowHeight/4 + 35 - maxButtonSize/100);
      
        buttonSizeX = windowWidth/7*3.2;
        buttonSizeY = windowWidth/8;
      
        //instructions for vertical screen
        } else if (windowWidth < verticalThreshold){
          buttonX1 = windowWidth/2;
          buttonX2 = buttonX1;
          buttonY1 = ((windowHeight)/3.5 + 80 - (windowHeight/6));
      
          buttonSizeX = [maxButtonSize/7*3.2]*[windowHeight/2000];
          buttonSizeY = [maxButtonSize/8]*[windowHeight/2000];
            }
} 


function mousePressed() {
}

//checks mousepressing for site
function mouseReleased() {
  console.log(screenPushAmount);
/**
*/
  if (state === `main` || `video` || `music` || `drawing` || `programming` || `contact` || `cv`) {
    push();
      if (mouseX < windowWidth - 25 && mouseX > windowWidth - 72) {
        if (mouseY > 42  + screenPushAmount && mouseY < 90 + screenPushAmount && menuToggle != 1) {
          menuToggle = 1;
 } 
        else if (mouseX < windowWidth - 25 && mouseX > windowWidth - 55) {
        if (mouseY > 42 + screenPushAmount && mouseY < 79 + screenPushAmount && menuToggle === 1) {
          menuToggle = 0;
        }
      }
    } 
  }

  if (state === `title`) {
    removeLinks()
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
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    }
  } else if (state === `drawing`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    }
  } else if (state === `music`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    } 
  } else if (state === `programming`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    }
  } else if (state === `video`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    }
  } else if (state === `cv`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    } 
    pop();
  }


  //sets detection modes for menu in each state
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
  menuTextYMain = windowHeight*2 + screenPushAmount;
  menuTextYVideo = 78 + screenPushAmount;
  menuTextYMusic = 133 + screenPushAmount;
  menuTextYDrawing = 188 + screenPushAmount;
  menuTextYProgramming = 243 + screenPushAmount;
  menuTextYCV = 298 + screenPushAmount;
  menuTextYContact = 353 + screenPushAmount;
} else if (state === `video`){
  menuTextYMain = 353 + screenPushAmount;
  menuTextYVideo = windowHeight*2 + screenPushAmount;
  menuTextYMusic = 78 + screenPushAmount;
  menuTextYDrawing = 133 + screenPushAmount;
  menuTextYProgramming = 188 + screenPushAmount;
  menuTextYCV = 243 + screenPushAmount;
  menuTextYContact = 298 + screenPushAmount;

} else if (state === `music`){
  menuTextYMain = 353 + screenPushAmount;
  menuTextYVideo = 78 + screenPushAmount;
  menuTextYMusic = windowHeight*2 + screenPushAmount;
  menuTextYDrawing = 133 + screenPushAmount;
  menuTextYProgramming = 188 + screenPushAmount;
  menuTextYCV = 243 + screenPushAmount;
  menuTextYContact = 298 + screenPushAmount;
  
} else if (state === `drawing`){
  menuTextYMain = 353 + screenPushAmount;
  menuTextYVideo = 78 + screenPushAmount;
  menuTextYMusic = 133 + screenPushAmount;
  menuTextYDrawing = windowHeight*2 + screenPushAmount;
  menuTextYProgramming = 188 + screenPushAmount;
  menuTextYCV = 243 + screenPushAmount;
  menuTextYContact = 298 + screenPushAmount;
} else if (state === `programming`){
  menuTextYMain = 353 + screenPushAmount;
  menuTextYVideo = 78 + screenPushAmount;
  menuTextYMusic = 133 + screenPushAmount;
  menuTextYDrawing = 188 + screenPushAmount;
  menuTextYProgramming = windowHeight*2 + screenPushAmount;
  menuTextYCV = 243 + screenPushAmount;
  menuTextYContact = 298 + screenPushAmount;
} else if (state === `cv`){
  menuTextYMain = 353 + screenPushAmount;
  menuTextYVideo = 78 + screenPushAmount;
  menuTextYMusic = 133 + screenPushAmount;
  menuTextYDrawing = 188 + screenPushAmount;
  menuTextYProgramming = 243 + screenPushAmount;
  menuTextYCV = windowHeight*2 + screenPushAmount;
  menuTextYContact = 298 + screenPushAmount;
} else if (state === `contact`){
  menuTextYMain = 353 + screenPushAmount;
  menuTextYVideo = 78 + screenPushAmount;
  menuTextYMusic = 133 + screenPushAmount;
  menuTextYDrawing = 188 + screenPushAmount;
  menuTextYProgramming = 243 + screenPushAmount;
  menuTextYCV = 298 + screenPushAmount;
  menuTextYContact = windowHeight*2 + screenPushAmount;
} 

  if (menuToggle === 1){
  push();
  rectMode(RIGHT);
  fill(255,255,255,);
  stroke(0);
  rect(windowWidth - 273.5, 41 + screenPushAmount, 250, 325);
  // rect(windowWidth - 223.5, 41, 200, 250);

  mainClass.menuTextHoverDetect();
  contactClass.menuTextHoverDetect();
  cvClass.menuTextHoverDetect();
  drawingClass.menuTextHoverDetect();
  musicClass.menuTextHoverDetect();
  programmingClass.menuTextHoverDetect();
  videoClass.menuTextHoverDetect();

  textFont(oldEnglish);
  textSize(65);
  textAlign(CENTER);
  fill(0);
  stroke(0);
  text(`x`, windowWidth - 38, 70 + screenPushAmount);

  textSize(80);
  pop();

  push();
  textFont(oldEnglish);
  textAlign(LEFT);
  fill(0);
  stroke(0);
  textSize(40);

  fill(menuTextMainColour);
  text(`Main Page`, windowWidth - 265, menuTextYMain);

  fill(menuTextVideoColour);
  text(`Video`, windowWidth - 265, menuTextYVideo);

  fill(menuTextMusicColour);
  text(`Music`, windowWidth - 265, menuTextYMusic);

  fill(menuTextDrawingColour);
  text(`Drawing`, windowWidth - 265, menuTextYDrawing);

  fill(menuTextProgrammingColour);
  text(`Programming`, windowWidth - 265, menuTextYProgramming);

  fill(menuTextCVColour);
  text(`CV`, windowWidth - 265, menuTextYCV);

  fill(menuTextContactColour);
  text(`Contact`, windowWidth - 265, menuTextYContact);
  pop();

  }
}

function removeLinks(){
  youtubeLink.hide();
  instagramLink.hide();
  gmailLink.hide();
}

function removeYoutubeLinks(){
  melancholy.hide();
}

