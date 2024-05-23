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
    rect(buttonX1, buttonY1, buttonSizeX, buttonSizeY);
    //detective
    rect(buttonX1, buttonY1 + buttonSizeY*1.03, buttonSizeX, buttonSizeY);
    //cowboy
    rect(buttonX1, buttonY1 + buttonSizeY*2.06, buttonSizeX, buttonSizeY);
    //knight
    rect(buttonX2, buttonY1, buttonSizeX, buttonSizeY);
    //racing
    rect(buttonX2, buttonY1 + buttonSizeY*1.03, buttonSizeX, buttonSizeY);
    //vampire
    rect(buttonX2, buttonY1 + buttonSizeY*2.06, buttonSizeX, buttonSizeY);
    pop();

    fill(0,0,0,0)
    noStroke();
    rect(windowWidth - 90 , 22, 80, 80);
    rect(10 , 22 , 300, 80,);

    textFont(oldEnglish);
    textSize(65 + nameSizeBoost);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    text(`Daniel Little`, 160, 80);
    textSize(80);

//drawing menu button
textSize(80 + MenuSizeBoost);
text(`_`, windowWidth - 48, 35);
text(`_`, windowWidth - 48, 55);
text(`_`, windowWidth - 48, 75);

    if (mouseX > 310 || mouseY > 102) {
      if (mouseX > windowWidth - 25 || mouseX < menuDetectx ||mouseY < 42 || mouseY > menuDetecty) {
        
      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY/2) {
          textFont(oldEnglish);
          textSize(mainTextSize);
          textAlign(CENTER);
          fill(0);
          stroke(0);
          text(`Video`, buttonX1, buttonY1+10);
        }
      }
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*1.03+10);
            } 
          }
    
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`CV`, buttonX1, buttonY1 + buttonSizeY*2.06+10);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Music`, buttonX2, buttonY1+10);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Programming`, buttonX2, buttonY1 + buttonSizeY*1.03+10);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSize);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Contact`, buttonX2, buttonY1 + buttonSizeY*2.06+10);
            } 
          }
        } 
  }
  if (mouseX > 10 && mouseX < 310 && mouseY > 35 && mouseY < 90) {
    nameSizeBoost = 5;} else {nameSizeBoost = 0;}
  if (mouseX < windowWidth - 25 && mouseX > windowWidth - 72 && mouseY > 42 && mouseY <90) {
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
    rect(buttonX1, buttonY1, buttonSizeX, buttonSizeY);
    //
    rect(buttonX1, buttonY1 + buttonSizeY*1.03, buttonSizeX, buttonSizeY);
    //
    rect(buttonX1, buttonY1 + buttonSizeY*2.06, buttonSizeX, buttonSizeY);
    //
    rect(buttonX2, buttonY1 + buttonSizeY*3.09, buttonSizeX, buttonSizeY);
    //
    rect(buttonX2, buttonY1 + buttonSizeY*4.12, buttonSizeX, buttonSizeY);
    //
    rect(buttonX2, buttonY1 + buttonSizeY*5.15, buttonSizeX, buttonSizeY);
    pop();

    fill(0,0,0,0)
    noStroke();
    rect(windowWidth - 90 , 22, 80, 80);
    rect(10 , 22 , 300, 80,);

    textFont(oldEnglish);
    textSize(65 + nameSizeBoost);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    text(`Daniel Little`, 160, 80);

    textSize(80 + MenuSizeBoost);
    text(`_`, windowWidth - 48, 35);
    text(`_`, windowWidth - 48, 55);
    text(`_`, windowWidth - 48, 75);
    
    if (mouseX > 310 || mouseY > 102) {
      if (mouseX > windowWidth - 25 || mouseX < menuDetectx ||mouseY < 42 || mouseY > menuDetecty) {
        push();
      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY/2) {
          textFont(oldEnglish);
          textSize(mainTextSizeVertical);
          textAlign(CENTER);
          fill(0);
          stroke(0);
          text(`Video`, buttonX1, buttonY1 + windowHeight/60);
        }
      }
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Music`, buttonX1, buttonY1 + buttonSizeY*1.03 + windowHeight/60);
              //music
            } 
          }
    
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*2.06 + windowHeight/60);
              //draw
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*3.09 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*3.09 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Programming`, buttonX2, buttonY1 + buttonSizeY*3.09 + windowHeight/60);
              //programming
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*4.12 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*4.12 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`CV`, buttonX2, buttonY1 + buttonSizeY*4.12 + windowHeight/60);
              //music
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*5.15 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*5.15 + buttonSizeY/2) {
              textFont(oldEnglish);
              textSize(mainTextSizeVertical);
              textAlign(CENTER);
              fill(0);
              stroke(0);
              text(`Contact`, buttonX2, buttonY1 + buttonSizeY*5.15 + windowHeight/60);
            } 
          }
        } 
  }
  if (mouseX > 10 && mouseX < 310 && mouseY > 35 && mouseY < 90) {
    nameSizeBoost = 5;} else {nameSizeBoost = 0;}
  if (mouseX < windowWidth - 25 && mouseX > windowWidth - 72 && mouseY > 42 && mouseY <90) {
      MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
  }
    /**
*/
  clickDetect(){
//check if the mouse is on an image to trigger state
  if (state === `main`) {

      //return to title  
      if (mouseX > 10 && mouseX < 310) {
        if (mouseY > 35 && mouseY < 90) {
          state = `title`;
          menuToggle = 0;
        } 
      } 

    //stops button overlap
      if (mouseX > 310 || mouseY > 102) {

        if (mouseX > windowWidth - 25 ||mouseX < menuDetectx ||mouseY < 42 || mouseY > menuDetecty) {

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY/2) {
          state = `video`;
        } 
      }

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2) {
          state = `drawing`;

        } 
      }

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2) {
          state = `cv`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY/2) {
          state = `music`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2) {
          state = `programming`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2) {
          state = `contact`;
        } 
      } } } } }

  clickDetectVertical(){
    //check if the mouse is on an image to trigger state
      if (state === `main`) {
          if (mouseX > 10 && mouseX < 310) {
            if (mouseY > 22 && mouseY < 90) {
              state = `title`;
              menuToggle = 0;
            } } 

          //stops double trigger over name
          if (mouseX > 310 || mouseY > 102) {
            
            if (mouseX > windowWidth - 25 || mouseX < menuDetectx||mouseY < 42 || mouseY > menuDetecty) {
    
          //video page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY/2) {
              state = `video`;
            } 
          }
     //music page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2) {
              state = `music`;
              //    state = `drawing`;
            } 
          }
     //drawing page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2) {
              state = `drawing`;
              //state = `cv`;
            } 
          }
     //programming page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*3.09 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*3.09 + buttonSizeY/2) {
              state = `programming`;

              //state = `music`;
            } 
          }
     //cv page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*4.12 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*4.12 + buttonSizeY/2) {
              state = `cv`;
              //state = `programming`;
            } 
          }
     //contact page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*5.15 - buttonSizeY/2 && mouseY < buttonY1 + buttonSizeY*5.15 + buttonSizeY/2) {
              state = `contact`;
    }}}}}}


    /**
menuDetectx = windowWidth - 223;
menuDetecty = 292;


if (state === `main`){
menuTextYMain = windowHeight*2;
menuTextYVideo = 78;
menuTextYMusic = 118;
menuTextYDrawing = 158;
menuTextYProgramming = 198;
menuTextYCV = 238;
menuTextYContact = 278;
*/
menuTextDetect(){
  if(state === `main`){
  if(mouseX < windowWidth - 188 && mouseX > windowWidth - 265 && mouseY > 42 && mouseY < 82){
state = `video`;
menuToggle = 0;
  }
  if(mouseX < windowWidth - 178 && mouseX > windowWidth - 265 && mouseY > 100 && mouseY < 140){
    state = `music`;
    menuToggle = 0;
      }
      if(mouseX < windowWidth - 152 && mouseX > windowWidth - 265 && mouseY > 158 && mouseY < 192){
        state = `drawing`;
        menuToggle = 0;
          }
          if(mouseX < windowWidth - 84 && mouseX > windowWidth - 265 && mouseY > 210 && mouseY < 250){
            state = `programming`;
            menuToggle = 0;
              }
              if(mouseX < windowWidth - 218 && mouseX > windowWidth - 265 && mouseY > 268 && mouseY < 304){
                state = `cv`;
                menuToggle = 0;
                  }
                  if(mouseX < windowWidth - 164 && mouseX > windowWidth - 265 && mouseY > 322 && mouseY < 362){
                    state = `contact`;
                    menuToggle = 0;
                      }
  }
}
}