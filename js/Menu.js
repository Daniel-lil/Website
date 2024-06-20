class Menu {
    constructor() {}
//menu settings
 menu(){
            menuButtonX = width - 50;
            menuX = width;
      
            menudetectx1 = width - 122;
            menudetectx2 = width - 273;

    if (menuToggle === 0){
      menuDetectx = menudetectx1;
      menuDetecty = 165;
      } else if (menuToggle === 1){
        menuDetectx = menudetectx2;
        menuDetecty = 367;
      }
  
  if (state === `main`){
    menuTextYMain = height*2 ;
    menuTextYVideo = 78 ;
    menuTextYMusic = 133 ;
    menuTextYDrawing = 188 ;
    menuTextYProgramming = 243 ;
    menuTextYCV = 298 ;
    menuTextYContact = 353 ;
  } else if (state === `video`){
    menuTextYMain = 353 ;
    menuTextYVideo = height*2 ;
    menuTextYMusic = 78 ;
    menuTextYDrawing = 133 ;
    menuTextYProgramming = 188 ;
    menuTextYCV = 243 ;
    menuTextYContact = 298 ;
  
  } else if (state === `music`){
    menuTextYMain = 353 ;
    menuTextYVideo = 78 ;
    menuTextYMusic = height*2 ;
    menuTextYDrawing = 133 ;
    menuTextYProgramming = 188 ;
    menuTextYCV = 243 ;
    menuTextYContact = 298 ;
    
  } else if (state === `drawing`){
    menuTextYMain = 353 ;
    menuTextYVideo = 78 ;
    menuTextYMusic = 133 ;
    menuTextYDrawing = height*2 ;
    menuTextYProgramming = 188 ;
    menuTextYCV = 243 ;
    menuTextYContact = 298 ;
  } else if (state === `programming`){
    menuTextYMain = 353 ;
    menuTextYVideo = 78 ;
    menuTextYMusic = 133 ;
    menuTextYDrawing = 188 ;
    menuTextYProgramming = height*2 ;
    menuTextYCV = 243 ;
    menuTextYContact = 298 ;
  } else if (state === `cv`){
    menuTextYMain = 353 ;
    menuTextYVideo = 78 ;
    menuTextYMusic = 133 ;
    menuTextYDrawing = 188 ;
    menuTextYProgramming = 243 ;
    menuTextYCV = height*2 ;
    menuTextYContact = 298 ;
  } else if (state === `contact`){
    menuTextYMain = 353 ;
    menuTextYVideo = 78 ;
    menuTextYMusic = 133 ;
    menuTextYDrawing = 188 ;
    menuTextYProgramming = 243 ;
    menuTextYCV = 298 ;
    menuTextYContact = height*2 ;
  } 
  
    if (menuToggle === 1){
    push();
    rectMode(RIGHT);
    fill(255,255,255,);
    stroke(0);
    rect(menuX - 273.5, 41 , 250, 325);
  
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
    text(`x`, menuX - 38, 70 );
  
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