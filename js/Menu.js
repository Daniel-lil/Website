class Menu {
    constructor() {}
//menu settings
 menu(){
            //menuButtonX = window.innerWidth/1.1;
            menuButtonX = width - 50;
            menuX = width;
      
            menudetectx1 = window.innerWidth - 122;
            menudetectx2 = window.innerWidth - 273;

    if (menuToggle === 0){
      menuDetectx = menudetectx1;
      menuDetecty = 165;
      } else if (menuToggle === 1){
        menuDetectx = menudetectx2;
        menuDetecty = 367;
      }
  
  if (state === `main`){
    menuTextYMain = window.innerHeight*2 + screenPushAmount;
    menuTextYVideo = 78 + screenPushAmount;
    menuTextYMusic = 133 + screenPushAmount;
    menuTextYDrawing = 188 + screenPushAmount;
    menuTextYProgramming = 243 + screenPushAmount;
    menuTextYCV = 298 + screenPushAmount;
    menuTextYContact = 353 + screenPushAmount;
  } else if (state === `video`){
    menuTextYMain = 353 + screenPushAmount;
    menuTextYVideo = window.innerHeight*2 + screenPushAmount;
    menuTextYMusic = 78 + screenPushAmount;
    menuTextYDrawing = 133 + screenPushAmount;
    menuTextYProgramming = 188 + screenPushAmount;
    menuTextYCV = 243 + screenPushAmount;
    menuTextYContact = 298 + screenPushAmount;
  
  } else if (state === `music`){
    menuTextYMain = 353 + screenPushAmount;
    menuTextYVideo = 78 + screenPushAmount;
    menuTextYMusic = window.innerHeight*2 + screenPushAmount;
    menuTextYDrawing = 133 + screenPushAmount;
    menuTextYProgramming = 188 + screenPushAmount;
    menuTextYCV = 243 + screenPushAmount;
    menuTextYContact = 298 + screenPushAmount;
    
  } else if (state === `drawing`){
    menuTextYMain = 353 + screenPushAmount;
    menuTextYVideo = 78 + screenPushAmount;
    menuTextYMusic = 133 + screenPushAmount;
    menuTextYDrawing = window.innerHeight*2 + screenPushAmount;
    menuTextYProgramming = 188 + screenPushAmount;
    menuTextYCV = 243 + screenPushAmount;
    menuTextYContact = 298 + screenPushAmount;
  } else if (state === `programming`){
    menuTextYMain = 353 + screenPushAmount;
    menuTextYVideo = 78 + screenPushAmount;
    menuTextYMusic = 133 + screenPushAmount;
    menuTextYDrawing = 188 + screenPushAmount;
    menuTextYProgramming = window.innerHeight*2 + screenPushAmount;
    menuTextYCV = 243 + screenPushAmount;
    menuTextYContact = 298 + screenPushAmount;
  } else if (state === `cv`){
    menuTextYMain = 353 + screenPushAmount;
    menuTextYVideo = 78 + screenPushAmount;
    menuTextYMusic = 133 + screenPushAmount;
    menuTextYDrawing = 188 + screenPushAmount;
    menuTextYProgramming = 243 + screenPushAmount;
    menuTextYCV = window.innerHeight*2 + screenPushAmount;
    menuTextYContact = 298 + screenPushAmount;
  } else if (state === `contact`){
    menuTextYMain = 353 + screenPushAmount;
    menuTextYVideo = 78 + screenPushAmount;
    menuTextYMusic = 133 + screenPushAmount;
    menuTextYDrawing = 188 + screenPushAmount;
    menuTextYProgramming = 243 + screenPushAmount;
    menuTextYCV = 298 + screenPushAmount;
    menuTextYContact = window.innerHeight*2 + screenPushAmount;
  } 
  
    if (menuToggle === 1){
    push();
    rectMode(RIGHT);
    fill(255,255,255,);
    stroke(0);
    rect(menuX - 273.5, 41 + screenPushAmount, 250, 325);
   // rect(window.innerWidth - 603.5, 41 + screenPushAmount, 800, 500);
    // rect(window.innerWidth - 223.5, 41, 200, 250);
  
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
    text(`x`, menuX - 38, 70 + screenPushAmount);
  
    textSize(80);
    pop();
  
    push();
    textFont(oldEnglish);
    textAlign(LEFT);
    fill(0);
    stroke(0);
    textSize(40);
  
    fill(menuTextMainColour);
    text(`Main Page`, menuX - 265, menuTextYMain);
  
    fill(menuTextVideoColour);
    text(`Video`, menuX - 265, menuTextYVideo);
  
    fill(menuTextMusicColour);
    text(`Music`, menuX - 265, menuTextYMusic);
  
    fill(menuTextDrawingColour);
    text(`Drawing`, menuX - 265, menuTextYDrawing);
  
    fill(menuTextProgrammingColour);
    text(`Programming`, menuX - 265, menuTextYProgramming);
  
    fill(menuTextCVColour);
    text(`CV`, menuX - 265, menuTextYCV);
  
    fill(menuTextContactColour);
    text(`Contact`, menuX - 265, menuTextYContact);
    pop();
    }
  }
}