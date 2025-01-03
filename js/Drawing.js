class Drawing {
  constructor() {}

  displayDrawing() {
    cnv.style('top', '0'); // Position at the top of the viewport
    //defines fade in preset to put into alpha
    background(0);
    
    push();
    fill(0);
    stroke(255, 255, 255,80);
    textSize(width/8);
    text(`Drawing Page`, width/2, height/8 -width/12);
    text(`Coming Soon`, width/2, height/8+ width/12);
    pop();

        textFont(oldEnglish);
        textSize(65 + nameSizeBoost);
        textAlign(CENTER);
        fill(255);
        stroke(0);
        text(`Daniel Little`, 160, 80 );

        push();
        fill(0);
        rectMode(LEFT);
        rect(menuButtonX - 24, 30 , 500, 70);
        pop();

        textSize(80 + MenuSizeBoost);
        text(`_`, menuButtonX, 35 );
        text(`_`, menuButtonX, 55 );
        text(`_`, menuButtonX, 75 );

        if (mouseX > 10 && mouseX < 310 && mouseY > 35  && mouseY < 90 ) {
          if (mouseX > width - 25 || mouseX < menuDetectx ||mouseY < 42  || mouseY > menuDetecty ) {
          nameSizeBoost = 5;}} else {nameSizeBoost = 0;}
          if (mouseX < menuButtonX +25 && mouseX > menuButtonX - 25 && mouseY > 42  && mouseY <90 ) {
            MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
  }
    titleText() {
    }

    menuTextDetect(){
      if(state === `drawing`){
      if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
    state = `video`;
    menuToggle = 0;
      }
      if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
        state = `music`;
        menuToggle = 0;
          }
          if(mouseX < width - 84 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
            state = `programming`;
            menuToggle = 0;
              }
              if(mouseX < width - 218 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
                state = `cv`;
                menuToggle = 0;
                  }
                  if(mouseX < width - 164 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                    state = `contact`;
                    menuToggle = 0;
                      }
                      if(mouseX < width - 65 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                        state = `main`;
                        menuToggle = 0;
                          }
      }
    }

    menuTextHoverDetect(){
      if(state === `drawing`){
        if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
      menuTextVideoColour = 255;
        } else {menuTextVideoColour = 0;}
        if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
         menuTextMusicColour = 255;
            }else {menuTextMusicColour = 0;}
            if(mouseX < width - 84 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
             menuTextProgrammingColour = 255;
                } else {menuTextProgrammingColour = 0;}
                if(mouseX < width - 218 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
                 menuTextCVColour = 255;
                    } else {menuTextCVColour = 0;}
                    if(mouseX < width - 164 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                     menuTextContactColour = 255;
                        } else {menuTextContactColour = 0;}
                        if(mouseX < width - 65 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                        menuTextMainColour = 255;
                            } else {menuTextMainColour = 0;}
        }
    }
}