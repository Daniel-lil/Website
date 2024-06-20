class Main {
  constructor() {
  }
  
  displayImages() {
    push();
    background(0);
    imageMode(CENTER);
    rectMode(CENTER);

    //video
    fill(255, 255, 255,);
    noStroke();
    image(videoButtonImg, buttonX1, buttonY1 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1  + screenPushAmount, buttonSizeX, buttonSizeY);
    //music
    image(drawingButtonImg, buttonX1, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    //drawing
    image(cvButtonImg, buttonX1, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    //programming
    image(musicButtonImg, buttonX2, buttonY1 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + screenPushAmount, buttonSizeX, buttonSizeY);
    //cv
    image(programmingButtonImg, buttonX2, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    //contact
    image(contactButtonImg, buttonX2, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    pop();

    //fill(0,0,0,0)
    //noStroke();
    //rect(window.innerWidth - 90, 22 + screenPushAmount, 80, 80);
    //rect(10 , 22 + screenPushAmount, 300, 80,);

    textFont(oldEnglish);
    textSize(65 + nameSizeBoost);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    text(`Daniel Little`, 160, 80 + screenPushAmount);
    textSize(80);

//drawing menu button
textSize(80 + MenuSizeBoost);
//text(`_`, window.innerWidth - 50, 35 + screenPushAmount);
//text(`_`, window.innerWidth - 50, 55 + screenPushAmount);
//text(`_`, window.innerWidth - 50, 75 + screenPushAmount);

push();
fill(0,0,0);
rect(menuButtonX - 26, 37 + screenPushAmount, 52, 55);
pop();

text(`_`, menuButtonX, 35 + screenPushAmount);
text(`_`, menuButtonX, 55 + screenPushAmount);
text(`_`, menuButtonX, 75 + screenPushAmount);

push();
textFont(oldEnglish);
textSize(mainTextSize);
textAlign(CENTER);
fill(255);
stroke(0);
strokeWeight(3);
    if (mouseX > 310 || mouseY > 102 + screenPushAmount) {
      if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
        
      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
          text(`Video`, buttonX1, buttonY1+10 + screenPushAmount);
        }
      }
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
              text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*1.03+10 + screenPushAmount);
            } 
          }
    
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
              text(`CV`, buttonX1, buttonY1 + buttonSizeY*2.06+10 + screenPushAmount);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
              text(`Music`, buttonX2, buttonY1+10 + screenPushAmount);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
              text(`Programming`, buttonX2, buttonY1 + buttonSizeY*1.03+10 + screenPushAmount);
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
              text(`Contact`, buttonX2, buttonY1 + buttonSizeY*2.06+10 + screenPushAmount);
            } 
          }
        } 
  }
  pop();

  if (mouseX > 10 && mouseX < 310 && mouseY > 35 + screenPushAmount && mouseY < 90 + screenPushAmount) {
    nameSizeBoost = 5;} else {nameSizeBoost = 0;}
    if (mouseX < menuButtonX +25 && mouseX > menuButtonX - 25 && mouseY > 42 + screenPushAmount && mouseY <90 + screenPushAmount) {
      MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
}

  displayImagesVertical() {
    push();
    background(0);
    imageMode(CENTER);
    rectMode(CENTER);
    fill(255, 255, 255,);
    noStroke();

    image(videoButtonImg, buttonX1, buttonY1 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + screenPushAmount, buttonSizeX, buttonSizeY);
    image(musicButtonImg, buttonX1, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + buttonSizeY*1.03 + screenPushAmount, buttonSizeX, buttonSizeY);
    image(drawingButtonImg, buttonX1, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + buttonSizeY*2.06 + screenPushAmount, buttonSizeX, buttonSizeY);
    image(programmingButtonImg, buttonX1, buttonY1 + buttonSizeY*3.09 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*3.09 + screenPushAmount, buttonSizeX, buttonSizeY);
    image(cvButtonImg, buttonX1, buttonY1 + buttonSizeY*4.12 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*4.12 + screenPushAmount, buttonSizeX, buttonSizeY);
    image(contactButtonImg, buttonX1, buttonY1 + buttonSizeY*5.15 + screenPushAmount, buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*5.15 + screenPushAmount, buttonSizeX, buttonSizeY);
    pop();

    //fill(0,0,0,0)
    //noStroke();
    //rect(window.innerWidth - 90 , 22 + screenPushAmount, 80, 80);
   // rect(10 , 22 + screenPushAmount, 300, 80,);

    push();
    textFont(oldEnglish);
    textSize(65 + nameSizeBoost);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    text(`Daniel Little`, 160, 80 + screenPushAmount);

    textSize(80 + MenuSizeBoost);
    //text(`_`, window.innerWidth - 50, 35 + screenPushAmount);
   // text(`_`, window.innerWidth - 50, 55 + screenPushAmount);
   //text(`_`, window.innerWidth - 50, 75 + screenPushAmount);

   push();
fill(0,0,0);
rect(menuButtonX - 26, 37 + screenPushAmount, 52, 55);
pop();

    text(`_`, menuButtonX, 35 + screenPushAmount);
    text(`_`, menuButtonX, 55 + screenPushAmount);
    text(`_`, menuButtonX, 75 + screenPushAmount);
    pop();

    push();
    textFont(oldEnglish);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    strokeWeight(3);

    textSize(mainTextSizeVertical + buttonTextSizeBoostVideo);
    text(`Video`, buttonX1, buttonY1 + window.innerHeight/60 + screenPushAmount);
    
    textSize(mainTextSizeVertical + buttonTextSizeBoostMusic);
    text(`Music`, buttonX1, buttonY1 + buttonSizeY*1.03 + window.innerHeight/60 + screenPushAmount);
    
    textSize(mainTextSizeVertical + buttonTextSizeBoostDrawing);
    text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*2.06 + window.innerHeight/60 + screenPushAmount);
    
    textSize(mainTextSizeVertical + buttonTextSizeBoostProgramming);
    text(`Programming`, buttonX2, buttonY1 + buttonSizeY*3.09 + window.innerHeight/60 + screenPushAmount);
    
    textSize(mainTextSizeVertical + buttonTextSizeBoostCV);
    text(`CV`, buttonX2, buttonY1 + buttonSizeY*4.12 + window.innerHeight/60 + screenPushAmount);
    
    textSize(mainTextSizeVertical + buttonTextSizeBoostContact);
    text(`Contact`, buttonX2, buttonY1 + buttonSizeY*5.15 + window.innerHeight/60 + screenPushAmount);

    
    if (mouseX > 310 || mouseY > 102 + screenPushAmount) {
      if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY/2 + screenPushAmount) {
         //text(`Video`, buttonX1, buttonY1 + window.innerHeight/60 + screenPushAmount);
buttonTextSizeBoostVideo = 5;
      } else buttonTextSizeBoostVideo = 0;
    }
         if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
           if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 + screenPushAmount) {
              //text(`Music`, buttonX1, buttonY1 + buttonSizeY*1.03 + window.innerHeight/60 + screenPushAmount);
              buttonTextSizeBoostMusic = 5;
              //music
           }  else buttonTextSizeBoostMusic = 0;
         }
    
        if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
           if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 + screenPushAmount) {
            //text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*2.06 + window.innerHeight/60 + screenPushAmount);
            buttonTextSizeBoostDrawing = 5;
            //draw
          } else buttonTextSizeBoostDrawing = 0;
        }
    
         if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
          if (mouseY > buttonY1 + buttonSizeY*3.09 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*3.09 + buttonSizeY/2 + screenPushAmount) {
             // text(`Programming`, buttonX2, buttonY1 + buttonSizeY*3.09 + window.innerHeight/60 + screenPushAmount);
             buttonTextSizeBoostProgramming = 5;
             //programming
          } else buttonTextSizeBoostProgramming = 0;
        } 
    
         if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
           if (mouseY > buttonY1 + buttonSizeY*4.12 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*4.12 + buttonSizeY/2 + screenPushAmount) {
             // text(`CV`, buttonX2, buttonY1 + buttonSizeY*4.12 + window.innerHeight/60 + screenPushAmount);
             buttonTextSizeBoostCV = 5;
             //music
           } else buttonTextSizeBoostCV = 0;
        }
    
        if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
          if (mouseY > buttonY1 + buttonSizeY*5.15 - buttonSizeY/2 + screenPushAmount && mouseY < buttonY1 + buttonSizeY*5.15 + buttonSizeY/2 + screenPushAmount) {
              //text(`Contact`, buttonX2, buttonY1 + buttonSizeY*5.15 + window.innerHeight/60 + screenPushAmount);
              buttonTextSizeBoostContact = 5;
          } else buttonTextSizeBoostContact = 0;
         } 
      } 
 }
pop();

  if (mouseX > 10 && mouseX < 310 && mouseY > 35 + screenPushAmount && mouseY < 90 + screenPushAmount) {   
      if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
    nameSizeBoost = 5;}} else {nameSizeBoost = 0;}
  if (mouseX < menuButtonX +25 && mouseX > menuButtonX - 25 && mouseY > 42 + screenPushAmount && mouseY <90 + screenPushAmount) {
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