/**
Daniel Little
*/
"use strict";
//declaring names of images
let tree;

let contactButtonImg;
let cvButtonImg;
let drawingButtonImg;
let musicButtonImg;
let programmingButtonImg;
let videoButtonImg;

let instagramLogo;
let spotifyLogo;
let appleLogo;
let youtubeLogo;
let emailLogo;
let soundcloudLogo;
let vimeoLogo;
let phoneLogo;

let spiralCursor;

let deathSequenceImg;
let harmonizerImg;
let audioVisualizerImg;

//declaring variables for class Titles
let titleClass;
let mainClass;
let contactClass;
let cvClass;
let drawingClass;
let musicClass;
let programmingClass;
let videoClass;
let menuClass;

let div;

let cnv;
let cnvx;
let cnvy;

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
let menuButtonX;

let menudetectx1;
let menudetectx2;

let titleX;
let titleY;
let titleW; 
let titleH;

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

let menuX;

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
let CVTextSize;
let cvX;
let cvY;

//variables for links for contact page
let youtubeLink;
let instagramLink;
let gmailLink;
let phoneLink;
let appleMusicLink;
let spotifyLink;
let bandCampLink;
let soundcloudLink;
let vimeoLink;

let deathSequenceLink;
let harmonizerLink;
let audioVisualizerLink;

//declaring name for video links <div>
let melancholy;
let video2;
let video3;
let video4;
let video5;
let video6;

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
  vimeoLogo = loadImage('assets/images/vimeoLogo.png');
  emailLogo = loadImage('assets/images/emailLogo.png');
  phoneLogo = loadImage('assets/images/phoneLogo.png');
  soundcloudLogo = loadImage('assets/images/soundcloudLogo.png');
  deathSequenceImg = loadImage('assets/images/deathSequenceImg.jpg');
  harmonizerImg = loadImage('assets/images/deathSequenceImg.jpg');
  audioVisualizerImg = loadImage('assets/images/deathSequenceImg.jpg');

  contactButtonImg = loadImage('assets/images/contactButtonImg.jpg');
cvButtonImg = loadImage('assets/images/cvButtonImg.jpg');
drawingButtonImg = loadImage('assets/images/drawingButtonImg.jpg');
musicButtonImg = loadImage('assets/images/musicButtonImg.jpg');
programmingButtonImg = loadImage('assets/images/programmingButtonImg.jpg');
videoButtonImg = loadImage('assets/images/videoButtonImg.jpg');

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
    menuClass = new Menu();

    div = createDiv();

    youtubeLink = createA("https://www.youtube.com/channel/UCzUuT08y6frX5r_ywe4PvjA", "Youtube", "_blank");
    phoneLink = createA("", "+1 647-526-7946", "_blank");
    vimeoLink = createA("", "Vimeo", "_blank");
    instagramLink = createA("https://www.instagram.com/0neir0mancing/", "@0neir0mancing", "_blank");
    gmailLink = createA("mailto:Daniel@oneiromancing.com", "Daniel@Oneiromancing.com", "_blank");
    appleMusicLink = createA("https://music.apple.com/us/artist/daniel-little/1543555018", "Apple Music", "_blank");
    spotifyLink = createA("https://open.spotify.com/artist/2hEpWrzrpLfuCMtd7MEwF7", "Spotify", "_blank");
    soundcloudLink = createA("", "Soundcloud", "_blank");
    
    deathSequenceLink = createA("https://daniel-lil.github.io/Visualizers/IMCA%20310%20P2/", "Death Sequence", "_blank");
    harmonizerLink = createA("", "Max Msp: Reactive Harmonizer", "_blank");
    audioVisualizerLink = createA("", "Audio Visualizer", "_blank");

    createMetaTag();

    melancholy = select("#melancholy");
    melancholy.hide();

    video2 = select("#video2");
    video2.hide();

    video3 = select("#video3");
    video3.hide();

    video4 = select("#video4");
    video4.hide();

    video5 = select("#video5");
    video5.hide();

    video6 = select("#video6");
    video6.hide();

    menuToggle = 0;
    nameSizeBoost = 0;
    MenuSizeBoost = 0;

    //menudetectx1 = window.innerWidth - 122;
    //menudetectx2 = window.innerWidth - 273;


    menuDetectx = menudetectx1;
    menuDetecty = 90;

     menuTextMainColour = 0;
     menuTextContactColour = 0;
     menuTextCVColour = 0;
     menuTextDrawingColour = 0;
     menuTextMusicColour = 0;
     menuTextProgrammingColour = 0;
     menuTextVideoColour = 0;

     screenPushAmount = 0;
     //(2*height/5) - 20;
     //screenPushAmount = 1400;

     if (window.innerWidth <= 950){
      CVTextSize = 34 * (width/1800);
    } else if (window.innerWidth > 950){
      CVTextSize = 17.85;
    }

  push();
  cnv = createCanvas(window.innerWidth, window.innerHeight*4);
  centreCanvas();
  cnv.style('display', 'block');

  if (window.innerWidth >= 1550){
    buttonX1 = 4.3*window.innerWidth/16 + [window.innerWidth - 1550] /4.3;
    buttonX2 = 11.7*window.innerWidth/16 - [window.innerWidth - 1550] / 4.3;
    buttonY1 = (window.innerHeight/4 + 35 - maxButtonSize/100);

    buttonSizeX = [maxButtonSize/7*3.2];
    buttonSizeY = [maxButtonSize/8];

      //instructions for middle screen
  } else if (window.innerWidth < 1550 && window.innerWidth > verticalThreshold){
  buttonX1 = 4.3*window.innerWidth/16;
  buttonX2 = 11.7*window.innerWidth/16;
  buttonY1 = (window.innerHeight/4 + 35 - maxButtonSize/100);

  buttonSizeX = window.innerWidth/7*3.2;
  buttonSizeY = window.innerWidth/8;

  //instructions for vertical screen
  } else if (window.innerWidth < verticalThreshold){
    buttonX1 = window.innerWidth/2;
    buttonX2 = buttonX1;
    buttonY1 = (150 + (width/8));

    buttonSizeX = [width/7*3.2]*[1.8];
    buttonSizeY = [width/8]*[1.8];
      }

      //menuButtonX = window.innerWidth/1.1;
      menuButtonX = width - 50;
      menuX = width;

      menudetectx1 = window.innerWidth - 122;
      menudetectx2 = window.innerWidth - 273;

      titleX = window.innerWidth/2;
      titleY = window.innerHeight/2;
      titleW = window.innerWidth;
      titleH = window.innerHeight;

      cvX = window.innerWidth/2;
      cvY = window.innerHeight/7;
}
/**
draws simulation
*/
function draw() {
  //screenPushAmount = (2*height/5.29) - 20;

  cursor(spiralCursor, 16, 16);
  
  if (state === `title`) {
    push();
    removeLinks();
    removeYoutubeLinks();
    titleClass.displayTitle();
    titleClass.titleText();
    pop();
  } else if (state === `main`) {
    push();
    removeLinks();
    removeYoutubeLinks();
    if (width >= verticalThreshold){
      mainClass.displayImages();
    }  else if (width < verticalThreshold){
      mainClass.displayImagesVertical();
    }
    menuClass.menu();
    pop();
    mainTextSize = 60;
    mainTextSizeVertical = window.innerHeight/20;
  } 
  
  else if (state === `contact`) {
    removeYoutubeLinks();
    removeLinks();
      contactClass.displayContact();
       menuClass.menu();
  } else if (state === `drawing`) {
    removeLinks();
    removeYoutubeLinks();
      drawingClass.displayDrawing();
       menuClass.menu();
  } else if (state === `music`) {
    removeLinks();
    removeYoutubeLinks();
    musicClass.displayMusic();
       menuClass.menu();
  } else if (state === `video`) {
    removeLinks();
      videoClass.displayVideo();
       menuClass.menu();
  } else if (state === `cv`) {
    removeLinks();
    removeYoutubeLinks();
      cvClass.displayCV();
       menuClass.menu();
  } else if (state === `programming`) {
    removeLinks();
    removeYoutubeLinks();
    programmingClass.displayProgramming();
     menuClass.menu();
  }
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight*4);
  centreCanvas();

  menuClass.menu();
  
  //menuButtonX = window.innerWidth/1.1;
  menuButtonX = width - 50;
  menuX = width;

  titleX = window.innerWidth/2;
  titleY = window.innerHeight/2;
  titleW = height;
  titleH = width;

  cvX = window.innerWidth/2;
  cvY = window.innerHeight/7;

  menudetectx1 = window.innerWidth - 122;
  menudetectx2 = window.innerWidth - 273;


        //instructions for fully horizontal screen
        if (window.innerWidth >= 1550){
          buttonX1 = 4.3*window.innerWidth/16 + [window.innerWidth - 1550] /4.3;
          buttonX2 = 11.7*window.innerWidth/16 - [window.innerWidth - 1550] / 4.3;
          buttonY1 = (window.innerHeight/4 + 35 - maxButtonSize/100);
      
          buttonSizeX = [maxButtonSize/7*3.2];
          buttonSizeY = [maxButtonSize/8];
      
            //instructions for middle screen
        } else if (window.innerWidth < 1550 && window.innerWidth > verticalThreshold){
        buttonX1 = 4.3*window.innerWidth/16;
        buttonX2 = 11.7*window.innerWidth/16;
        buttonY1 = (window.innerHeight/4 + 35 - maxButtonSize/100);
      
        buttonSizeX = window.innerWidth/7*3.2;
        buttonSizeY = window.innerWidth/8;
      
        //instructions for vertical screen
        } else if (window.innerWidth < verticalThreshold){
          buttonX1 = window.innerWidth/2;
          buttonX2 = buttonX1;
          buttonY1 = (150 + (width/8));
      
          buttonSizeX = [width/7*3.2]*[1.8];
          buttonSizeY = [width/8]*[1.8];
            }
} 


function mousePressed() {
}

/**
//checks mousepressing for site
function mouseReleased() {
  console.log(CVTextSize);


  if (state === `main` || `video` || `music` || `drawing` || `programming` || `contact` || `cv`) {
    push();
      if (mouseX < menuButtonX +25 && mouseX >  menuButtonX - 25) {
        if (mouseY > 42  + screenPushAmount && mouseY < 90 + screenPushAmount && menuToggle != 1) {
          menuToggle = 1;
 } 
        else if (mouseX < menuButtonX +125 && mouseX > menuButtonX) {
        if (mouseY > 42 + screenPushAmount && mouseY < 79 + screenPushAmount && menuToggle === 1) {
          menuToggle = 0;
        }
      }
    } 
  }
    */

  //checks mousepressing for site
function touchEnded() {
  console.log(CVTextSize);


  if (state === `main` || `video` || `music` || `drawing` || `programming` || `contact` || `cv`) {
    push();
      if (mouseX < menuButtonX +25 && mouseX >  menuButtonX - 25) {
        if (mouseY > 42  + screenPushAmount && mouseY < 90 + screenPushAmount && menuToggle != 1) {
          menuToggle = 1;
 } 
        else if (mouseX < menuButtonX +125 && mouseX > menuButtonX) {
        if (mouseY > 42 + screenPushAmount && mouseY < 79 + screenPushAmount && menuToggle === 1) {
          menuToggle = 0;
        }
      }
    } 
  }

  if (state === `title`) {
    removeLinks()
  //  if(mouseX>window.innerWidth/2 - window.innerWidth/4 && mouseX<window.innerWidth/2 + window.innerWidth/4 && mouseY>9*window.innerHeight/20 - window.innerWidth/5 && mouseY<9*window.innerHeight/20 + window.innerWidth/6.5){
    state = `main`;
    menuToggle = 0;
 // }
    
  } else if (state === `main`) {
    push();
    if (window.innerWidth >= verticalThreshold){
      mainClass.clickDetect();
    } else if (window.innerWidth < verticalThreshold){
      mainClass.clickDetectVertical();
      }
    }
if (state === `contact`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
        }
      } 
    }
  } else if (state === `drawing`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
        }
      } 
    }
  } else if (state === `music`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    }
    } 
  } else if (state === `programming`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    }
    }
  } else if (state === `video`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } 
    } }
  } else if (state === `cv`) {
    if (mouseX > 10 && mouseX < 310) {
      if (mouseY > 22 + screenPushAmount && mouseY < 102 + screenPushAmount) {
        if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        state = `title`;
        menuToggle = 0;
      } }
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

function removeLinks(){
  youtubeLink.hide();
  instagramLink.hide();
  gmailLink.hide();
  spotifyLink.hide();
  appleMusicLink.hide();
  soundcloudLink.hide();
  vimeoLink.hide();
  phoneLink.hide();

  deathSequenceLink.hide();
  harmonizerLink.hide();
  audioVisualizerLink.hide();
}

function removeYoutubeLinks(){
  melancholy.hide();
  video2.hide();
  video3.hide();
  video4.hide();
  video5.hide();
  video6.hide();
}

function centreCanvas(){
  cnvx = (0);
  cnvy = (0);
  cnv.position(cnvx, cnvy);
}

function createMetaTag() {
	let meta = createElement('meta');
	meta.attribute('name', 'viewport');
	meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

	let head = select('head');
	meta.parent(head);
}