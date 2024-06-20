class Main {
  constructor() {
  }
  
  displayImages() {
    mainTextSize = buttonSizeX/12;
    push();
    background(0);
    imageMode(CENTER);
    rectMode(CENTER);

    //video
    fill(255, 255, 255,);
    noStroke();
    image(videoButtonImg, buttonX1, buttonY1 , buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1  , buttonSizeX, buttonSizeY);
    //music
    image(drawingButtonImg, buttonX1, buttonY1 + buttonSizeY*1.03 , buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + buttonSizeY*1.03 , buttonSizeX, buttonSizeY);
    //drawing
    image(cvButtonImg, buttonX1, buttonY1 + buttonSizeY*2.06 , buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + buttonSizeY*2.06 , buttonSizeX, buttonSizeY);
    //programming
    image(musicButtonImg, buttonX2, buttonY1 , buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 , buttonSizeX, buttonSizeY);
    //cv
    image(programmingButtonImg, buttonX2, buttonY1 + buttonSizeY*1.03 , buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*1.03 , buttonSizeX, buttonSizeY);
    //contact
    image(contactButtonImg, buttonX2, buttonY1 + buttonSizeY*2.06 , buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*2.06 , buttonSizeX, buttonSizeY);
    pop();

    textFont(oldEnglish);
    textSize(65 + nameSizeBoost);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    text(`Daniel Little`, 160, 80 );
    textSize(80);

//drawing menu button
textSize(80 + MenuSizeBoost);

push();
fill(0);
rectMode(LEFT);
rect(menuButtonX - 24, 30 , 500, 70);
pop();

text(`_`, menuButtonX, 35 );
text(`_`, menuButtonX, 55 );
text(`_`, menuButtonX, 75 );

push();
textFont(oldEnglish);
textSize(mainTextSize);
textAlign(CENTER, CENTER);
fill(255);
stroke(0);
strokeWeight(3);
    if (mouseX > 310 || mouseY > 102 ) {
      if (mouseX > width - 25 || mouseX < menuDetectx ||mouseY < 42  || mouseY > menuDetecty ) {
        
      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY/2 ) {
          text(`Video`, buttonX1, buttonY1 );
        }
      }
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 ) {
              text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*1.03 );
            } 
          }
    
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 ) {
              text(`CV`, buttonX1, buttonY1 + buttonSizeY*2.06 );
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY/2 ) {
              text(`Music`, buttonX2, buttonY1 );
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 ) {
              text(`Programming`, buttonX2, buttonY1 + buttonSizeY*1.03 );
            } 
          }
    
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 ) {
              text(`Contact`, buttonX2, buttonY1 + buttonSizeY*2.06 );
            } 
          }
        } 
  }
  pop();

  if (mouseX > 10 && mouseX < 310 && mouseY > 35  && mouseY < 90 ) {
    nameSizeBoost = 5;} else {nameSizeBoost = 0;}
    if (mouseX < menuButtonX +25 && mouseX > menuButtonX - 25 && mouseY > 42  && mouseY <90 ) {
      MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
}

  displayImagesVertical() {
    mainTextSize = buttonSizeX/12;

    push();
    background(0);
    imageMode(CENTER);
    rectMode(CENTER);
    fill(255, 255, 255,);
    noStroke();

    image(videoButtonImg, buttonX1, buttonY1 , buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 , buttonSizeX, buttonSizeY);
    image(musicButtonImg, buttonX1, buttonY1 + buttonSizeY*1.03 , buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + buttonSizeY*1.03 , buttonSizeX, buttonSizeY);
    image(drawingButtonImg, buttonX1, buttonY1 + buttonSizeY*2.06 , buttonSizeX, buttonSizeY);
    //rect(buttonX1, buttonY1 + buttonSizeY*2.06 , buttonSizeX, buttonSizeY);
    image(programmingButtonImg, buttonX1, buttonY1 + buttonSizeY*3.09 , buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*3.09 , buttonSizeX, buttonSizeY);
    image(cvButtonImg, buttonX1, buttonY1 + buttonSizeY*4.12 , buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*4.12 , buttonSizeX, buttonSizeY);
    image(contactButtonImg, buttonX1, buttonY1 + buttonSizeY*5.15 , buttonSizeX, buttonSizeY);
    //rect(buttonX2, buttonY1 + buttonSizeY*5.15 , buttonSizeX, buttonSizeY);
    pop();

    push();
    textFont(oldEnglish);
    textSize(65 + nameSizeBoost);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    text(`Daniel Little`, 160, 80 );

    textSize(80 + MenuSizeBoost);

  push();
  fill(0);
  rectMode(LEFT);
  rect(menuButtonX - 24, 30 , 500, 70);
  pop();

    text(`_`, menuButtonX, 35 );
    text(`_`, menuButtonX, 55 );
    text(`_`, menuButtonX, 75 );
    pop();

    push();
    textFont(oldEnglish);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(0);
    strokeWeight(3);

    textSize(mainTextSize + buttonTextSizeBoostVideo);
    text(`Video`, buttonX1, buttonY1 );
    
    textSize(mainTextSize + buttonTextSizeBoostMusic);
    text(`Music`, buttonX1, buttonY1 + buttonSizeY*1.03 );
    
    textSize(mainTextSize + buttonTextSizeBoostDrawing);
    text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*2.06 );
    
    textSize(mainTextSize + buttonTextSizeBoostProgramming);
    text(`Programming`, buttonX2, buttonY1 + buttonSizeY*3.09 );
    
    textSize(mainTextSize + buttonTextSizeBoostCV);
    text(`CV`, buttonX2, buttonY1 + buttonSizeY*4.12 );
    
    textSize(mainTextSize + buttonTextSizeBoostContact);
    text(`Contact`, buttonX2, buttonY1 + buttonSizeY*5.15 );

    
    if (mouseX > 310 || mouseY > 102 ) {
      if (mouseX > width - 25 || mouseX < menuDetectx ||mouseY < 42  || mouseY > menuDetecty ) {
      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY/2 ) {
         //text(`Video`, buttonX1, buttonY1 + window.innerHeight/60 );
buttonTextSizeBoostVideo = 5;
      } else buttonTextSizeBoostVideo = 0;
    }
         if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
           if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 ) {
              //text(`Music`, buttonX1, buttonY1 + buttonSizeY*1.03 + window.innerHeight/60 );
              buttonTextSizeBoostMusic = 5;
              //music
           }  else buttonTextSizeBoostMusic = 0;
         }
    
        if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
           if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 ) {
            //text(`Drawing`, buttonX1, buttonY1 + buttonSizeY*2.06 + window.innerHeight/60 );
            buttonTextSizeBoostDrawing = 5;
            //draw
          } else buttonTextSizeBoostDrawing = 0;
        }
    
         if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
          if (mouseY > buttonY1 + buttonSizeY*3.09 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*3.09 + buttonSizeY/2 ) {
             // text(`Programming`, buttonX2, buttonY1 + buttonSizeY*3.09 + window.innerHeight/60 );
             buttonTextSizeBoostProgramming = 5;
             //programming
          } else buttonTextSizeBoostProgramming = 0;
        } 
    
         if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
           if (mouseY > buttonY1 + buttonSizeY*4.12 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*4.12 + buttonSizeY/2 ) {
             // text(`CV`, buttonX2, buttonY1 + buttonSizeY*4.12 + window.innerHeight/60 );
             buttonTextSizeBoostCV = 5;
             //music
           } else buttonTextSizeBoostCV = 0;
        }
    
        if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
          if (mouseY > buttonY1 + buttonSizeY*5.15 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*5.15 + buttonSizeY/2 ) {
              //text(`Contact`, buttonX2, buttonY1 + buttonSizeY*5.15 + window.innerHeight/60 );
              buttonTextSizeBoostContact = 5;
          } else buttonTextSizeBoostContact = 0;
         } 
      } 
 }
pop();

  if (mouseX > 10 && mouseX < 310 && mouseY > 35  && mouseY < 90 ) {   
      if (mouseX > width - 25 || mouseX < menuDetectx ||mouseY < 42  || mouseY > menuDetecty ) {
    nameSizeBoost = 5;}} else {nameSizeBoost = 0;}
  if (mouseX < menuButtonX +25 && mouseX > menuButtonX - 25 && mouseY > 42  && mouseY <90 ) {
      MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
  }
    /**
*/
  clickDetect(){
//check if the mouse is on an image to trigger state
  if (state === `main`) {

      //return to title  
      if (mouseX > 10 && mouseX < 310) {
        if (mouseY > 35  && mouseY < 90 ) {
          if (mouseX > width - 25 || mouseX < menuDetectx ||mouseY < 42  || mouseY > menuDetecty ) {
          state = `title`;
          menuToggle = 0;
          }
        } 
      } 

    //stops button overlap
      if (mouseX > 310 || mouseY > 102 ) {
        if (mouseX > width - 25 ||mouseX < menuDetectx ||mouseY < 42  || mouseY > menuDetecty ) {

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY/2 ) {
          state = `video`;
        } 
      }

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 ) {
          state = `drawing`;

        } 
      }

      if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 ) {
          state = `cv`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY/2 ) {
          state = `music`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 ) {
          state = `programming`;
        } 
      }

      if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
        if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 ) {
          state = `contact`;
        } 
      } } } } }

  clickDetectVertical(){
    //check if the mouse is on an image to trigger state
      if (state === `main`) {
          if (mouseX > 10 && mouseX < 310) {
            if (mouseY > 22  && mouseY < 90 ) {
              if (mouseX > width - 25 || mouseX < menuDetectx ||mouseY < 42  || mouseY > menuDetecty ) {
              state = `title`;
              menuToggle = 0;
            } } }

          //stops double trigger over name
          if (mouseX > 310 || mouseY > 102 ) {
            
            if (mouseX > width - 25 || mouseX < menuDetectx||mouseY < 42  || mouseY > menuDetecty ) {
    
          //video page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY/2 ) {
              state = `video`;
            } 
          }
     //music page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*1.03 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*1.03 + buttonSizeY/2 ) {
              state = `music`;
              //    state = `drawing`;
            } 
          }
     //drawing page trigger
          if (mouseX > buttonX1 - buttonSizeX/2 && mouseX < buttonX1 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*2.06 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*2.06 + buttonSizeY/2 ) {
              state = `drawing`;
              //state = `cv`;
            } 
          }
     //programming page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*3.09 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*3.09 + buttonSizeY/2 ) {
              state = `programming`;

              //state = `music`;
            } 
          }
     //cv page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*4.12 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*4.12 + buttonSizeY/2 ) {
              state = `cv`;
              //state = `programming`;
            } 
          }
     //contact page trigger
          if (mouseX > buttonX2 - buttonSizeX/2 && mouseX < buttonX2 + buttonSizeX/2) {
            if (mouseY > buttonY1 + buttonSizeY*5.15 - buttonSizeY/2  && mouseY < buttonY1 + buttonSizeY*5.15 + buttonSizeY/2 ) {
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
  if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
state = `video`;
menuToggle = 0;
  }
  if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 100  && mouseY < 140){
    state = `music`;
    menuToggle = 0;
      }
      if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
        state = `drawing`;
        menuToggle = 0;
          }
          if(mouseX < width - 84 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
            state = `programming`;
            menuToggle = 0;
              }
              if(mouseX < width - 218 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                state = `cv`;
                menuToggle = 0;
                  }
                  if(mouseX < width - 164 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                    state = `contact`;
                    menuToggle = 0;
                      }
  }
}
menuTextHoverDetect(){
  if(state === `main`){
  if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
menuTextVideoColour = 255;
  } else {menuTextVideoColour = 0;}
  if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
   menuTextMusicColour = 255;
      }else {menuTextMusicColour = 0;}
      if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
       menuTextDrawingColour = 255;
          }else {menuTextDrawingColour = 0;}
          if(mouseX < width - 84 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
            menuTextProgrammingColour = 255;
              }else {menuTextProgrammingColour = 0;}
              if(mouseX < width - 218 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
               menuTextCVColour = 255;
                  }else {menuTextCVColour = 0;}
                  if(mouseX < width - 164 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                   menuTextContactColour = 255;
                      }else {menuTextContactColour = 0;}
  }
}
}