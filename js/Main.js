class Main {
  constructor() {
  }
  
  displayImages() {
    push();
    background(0);
    imageMode(CENTER);
    rectMode(CENTER);

    //robot
    fill(255, 255, 255,);
    noStroke();
    rect(buttonX1, buttonY1  + screenPushAmount, buttonSizeX, buttonSizeY);
    //detective
    rect(buttonX1, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    //cowboy
    rect(buttonX1, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    //knight
    rect(buttonX2, buttonY1 + screenPushAmount, buttonSizeX, buttonSizeY);
    //racing
    rect(buttonX2, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    //vampire
    rect(buttonX2, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    pop();

    fill(0,0,0,0)
    noStroke();
    rect(window.innerWidth - 90, 22 + screenPushAmount, 80, 80);
    rect(10 , 22 + screenPushAmount, 300, 80,);

    textFont(oldEnglish);
    textSize(65 + nameSizeBoost);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    text(`Daniel Little`, 160, 80 + screenPushAmount);
    textSize(80);

//drawing menu button
textSize(80 + MenuSizeBoost);
text(`_`, window.innerWidth - 50, 35 + screenPushAmount);
text(`_`, window.innerWidth - 50, 55 + screenPushAmount);
text(`_`, window.innerWidth - 50, 75 + screenPushAmount);

    if (mouseX > 310 || mouseY > 102 + screenPushAmount) {
      if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        
      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
          textFont(oldEnglish);
          textSize(mainTextSize);
          textAlign(CENTER);
          fill(0);
          stroke(0);
          text(`Video`, buttonX1, buttonY1+10 + screenPushAmount);
        }
      }
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*1.03+10 + screenPushAmount);
            } 
          }
    
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`CV`, buttonX1, buttonY1 + buttonSizeY*2.06+10 + screenPushAmount);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Music`, buttonX2, buttonY1+10 + screenPushAmount);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Programming`, buttonX2, buttonY1 + buttonSizeY*1.03+10 + screenPushAmount);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Contact`, buttonX2, buttonY1 + buttonSizeY*2.06+10 + screenPushAmount);
            } 
          }
        } 
  }

  if (mouseX > 10 && mouseX < 310 && mouseY > 35 + screenPushAmount && mouseY < 90 + screenPushAmount) {
    nameSizeBoost = 5;} else {nameSizeBoost = 0;}
  if (mouseX < window.innerWidth - 25 && mouseX > window.innerWidth - 72 && mouseY > 42 + screenPushAmount && mouseY <90 + screenPushAmount) {
      MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
}

  displayImagesVertical() {
    push();
    background(0);
    imageMode(CENTER);
    rectMode(CENTER);
    fill(255, 255, 255,);
    noStroke();
    //
    rect(buttonX1, buttonY1 + screenPushAmount, buttonSizeX, buttonSizeY);
    //
    rect(buttonX1, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    //
    rect(buttonX1, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    //
    rect(buttonX2, buttonY1 + buttonSizeY*3.09 + screenPushAmount, buttonSizeX, buttonSizeY);
    //
    rect(buttonX2, buttonY1 + buttonSizeY*4.12 + screenPushAmount, buttonSizeX, buttonSizeY);
    //
    rect(buttonX2, buttonY1 + buttonSizeY*5.15 + screenPushAmount, buttonSizeX, buttonSizeY);
    pop();

    fill(0,0,0,0)
    noStroke();
    rect(window.innerWidth - 90 , 22 + screenPushAmount, 80, 80);
    rect(10 , 22 + screenPushAmount, 300, 80,);

    push();
    textFont(oldEnglish);
    textSize(65 + nameSizeBoost);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    text(`Daniel Little`, 160, 80 + screenPushAmount);

    textSize(80 + MenuSizeBoost);
    text(`_`, window.innerWidth - 50, 35 + screenPushAmount);
    text(`_`, window.innerWidth - 50, 55 + screenPushAmount);
    text(`_`, window.innerWidth - 50, 75 + screenPushAmount);
    pop();

    if (mouseX > 310 || mouseY > 102 + screenPushAmount) {
      if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        push();
      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
          textFont(oldEnglish);
          textSize(mainTextSizeVertical);
          textAlign(CENTER);
          fill(0);
          stroke(0);
          text(`Video`, buttonX1, buttonY1 + window.innerHeight/60 + screenPushAmount);
        }
      }
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Music`, buttonX1, buttonY1 + buttonSizeY*1.03 + window.innerHeight/60 + screenPushAmount);
              //music
            } 
          }
    
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*2.06 + window.innerHeight/60 + screenPushAmount);
              //draw
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*3.09 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*3.09 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Programming`, buttonX2, buttonY1 + buttonSizeY*3.09 + window.innerHeight/60 + screenPushAmount);
              //programming
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*4.12 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*4.12 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`CV`, buttonX2, buttonY1 + buttonSizeY*4.12 + window.innerHeight/60 + screenPushAmount);
              //music
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*5.15 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*5.15 + buttonSizeY/2 + screenPushAmount) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Contact`, buttonX2, buttonY1 + buttonSizeY*5.15 + window.innerHeight/60 + screenPushAmount);
            } 
          }
        } 
  }
  if (mouseX > 10 && mouseX < 310 && mouseY > 35 + screenPushAmount && mouseY < 90 + screenPushAmount) {   
      if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
    nameSizeBoost = 5;}} else {nameSizeBoost = 0;}
  if (mouseX < window.innerWidth - 25 && mouseX > window.innerWidth - 72 && mouseY > 42 + screenPushAmount && mouseY <90 + screenPushAmount) {
      MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
  }
    /**
*/
  clickDetect(){
//check if the mouse is on an image to trigger state
  if (state === `main`) {

      //return to title  
      if (mouseX > 10 && mouseX < 310) {
        if (mouseY > 35 + screenPushAmount && mouseY < 90 + screenPushAmount) {
          if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
          state = `title`;
          menuToggle = 0;
          }
        } 
      } 

    //stops button overlap
      if (mouseX > 310 || mouseY > 102 + screenPushAmount) {
        if (mouseX > window.innerWidth - 25 ||mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
          state = `video`;
        } 
      }

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
          state = `drawing`;

        } 
      }

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
          state = `cv`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
          state = `music`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
          state = `programming`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
          state = `contact`;
        } 
      } } } } }

  clickDetectVertical(){
    //check if the mouse is on an image to trigger state
      if (state === `main`) {
          if (mouseX > 10 && mouseX < 310) {
            if (mouseY > 22 + screenPushAmount && mouseY < 90 + screenPushAmount) {
              if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
              state = `title`;
              menuToggle = 0;
            } } }

          //stops double trigger over name
          if (mouseX > 310 || mouseY > 102 + screenPushAmount) {
            
            if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
    
          //video page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
              state = `video`;
            } 
          }
     //music page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
              state = `music`;
              //    state = `drawing`;
            } 
          }
     //drawing page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
              state = `drawing`;
              //state = `cv`;
            } 
          }
     //programming page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*3.09 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*3.09 + buttonSizeY/2 + screenPushAmount) {
              state = `programming`;

              //state = `music`;
            } 
          }
     //cv page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*4.12 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*4.12 + buttonSizeY/2 + screenPushAmount) {
              state = `cv`;
              //state = `programming`;
            } 
          }
     //contact page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*5.15 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*5.15 + buttonSizeY/2 + screenPushAmount) {
              state = `contact`;
    }}}}}}


    /**
menuDetectx = window.innerWidth - 223;
menuDetecty = 292;


if (state === `main`){
menuTextYMain = window.innerHeight*2;
menuTextYVideo = 78;
menuTextYMusic = 118;
menuTextYDrawing = 158;
menuTextYProgramming = 198;
menuTextYCV = 238;
menuTextYContact = 278;
*/
menuTextDetect(){
  if(state === `main`){
  if(mouseX < window.innerWidth - 188 && mouseX > window.innerWidth - 265 && mouseY > 42 + screenPushAmount && mouseY < 82 + screenPushAmount){
state = `video`;
menuToggle = 0;
  }
  if(mouseX < window.innerWidth - 178 && mouseX > window.innerWidth - 265 && mouseY > 100 + screenPushAmount && mouseY < 140+ screenPushAmount){
    state = `music`;
    menuToggle = 0;
      }
      if(mouseX < window.innerWidth - 152 && mouseX > window.innerWidth - 265 && mouseY > 158 + screenPushAmount && mouseY < 192 + screenPushAmount){
        state = `drawing`;
        menuToggle = 0;
          }
          if(mouseX < window.innerWidth - 84 && mouseX > window.innerWidth - 265 && mouseY > 210 + screenPushAmount && mouseY < 250 + screenPushAmount){
            state = `programming`;
            menuToggle = 0;
              }
              if(mouseX < window.innerWidth - 218 && mouseX > window.innerWidth - 265 && mouseY > 268 + screenPushAmount && mouseY < 304 + screenPushAmount){
                state = `cv`;
                menuToggle = 0;
                  }
                  if(mouseX < window.innerWidth - 164 && mouseX > window.innerWidth - 265 && mouseY > 322 + screenPushAmount && mouseY < 362 + screenPushAmount){
                    state = `contact`;
                    menuToggle = 0;
                      }
  }
}
menuTextHoverDetect(){
  if(state === `main`){
  if(mouseX < window.innerWidth - 188 && mouseX > window.innerWidth - 265 && mouseY > 42 + screenPushAmount && mouseY < 82 + screenPushAmount){
menuTextVideoColour = 255;
  } else {menuTextVideoColour = 0;}
  if(mouseX < window.innerWidth - 178 && mouseX > window.innerWidth - 265 && mouseY > 100 + screenPushAmount && mouseY < 140 + screenPushAmount){
   menuTextMusicColour = 255;
      }else {menuTextMusicColour = 0;}
      if(mouseX < window.innerWidth - 152 && mouseX > window.innerWidth - 265 && mouseY > 158 + screenPushAmount && mouseY < 192 + screenPushAmount){
       menuTextDrawingColour = 255;
          }else {menuTextDrawingColour = 0;}
          if(mouseX < window.innerWidth - 84 && mouseX > window.innerWidth - 265 && mouseY > 210 + screenPushAmount && mouseY < 250 + screenPushAmount){
            menuTextProgrammingColour = 255;
              }else {menuTextProgrammingColour = 0;}
              if(mouseX < window.innerWidth - 218 && mouseX > window.innerWidth - 265 && mouseY > 268 + screenPushAmount && mouseY < 304 + screenPushAmount){
               menuTextCVColour = 255;
                  }else {menuTextCVColour = 0;}
                  if(mouseX < window.innerWidth - 164 && mouseX > window.innerWidth - 265 && mouseY > 322 + screenPushAmount && mouseY < 362 + screenPushAmount){
                   menuTextContactColour = 255;
                      }else {menuTextContactColour = 0;}
  }
}
}