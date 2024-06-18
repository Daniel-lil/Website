class Menu {
    constructor() {}
//menu settings
 menu(){
    if (menuToggle === 0){
      menuDetectx = window.innerWidth - 122;
      menuDetecty = 165;
      } else if (menuToggle === 1){
        menuDetectx = window.innerWidth - 273;
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
    rect(window.innerWidth - 273.5, 41 + screenPushAmount, 250, 325);
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
    text(`x`, window.innerWidth - 38, 70 + screenPushAmount);
  
    textSize(80);
    pop();
  
    push();
    textFont(oldEnglish);
    textAlign(LEFT);
    fill(0);
    stroke(0);
    textSize(40);
  
    fill(menuTextMainColour);
    text(`Main Page`, window.innerWidth - 265, menuTextYMain);
  
    fill(menuTextVideoColour);
    text(`Video`, window.innerWidth - 265, menuTextYVideo);
  
    fill(menuTextMusicColour);
    text(`Music`, window.innerWidth - 265, menuTextYMusic);
  
    fill(menuTextDrawingColour);
    text(`Drawing`, window.innerWidth - 265, menuTextYDrawing);
  
    fill(menuTextProgrammingColour);
    text(`Programming`, window.innerWidth - 265, menuTextYProgramming);
  
    fill(menuTextCVColour);
    text(`CV`, window.innerWidth - 265, menuTextYCV);
  
    fill(menuTextContactColour);
    text(`Contact`, window.innerWidth - 265, menuTextYContact);
    pop();
    }
  }
}