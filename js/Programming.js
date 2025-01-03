class Programming {
  constructor() {}

  displayProgramming() {
    cnv.style('top', '0'); // Position at the top of the viewport
    push();
    background(0);
    imageMode(CENTER)
    image(deathSequenceImg, width/2, 250, 352, 198);
    deathSequenceLink.show();
    deathSequenceLink.style('color', 'white');
    deathSequenceLink.position(width/2 - 54, 380);

    image(harmonizerImg, width/2, 550, 352, 198);
    harmonizerLink.show();
    harmonizerLink.style('color', 'white');
    harmonizerLink.position(width/2 - 90, 680);

    image(audioVisualizerImg, width/2, 850, 352, 198);
    audioVisualizerLink.show();
    audioVisualizerLink.style('color', 'white');
    audioVisualizerLink.position(width/2 - 70, 980);

//320, 180 (16,9)
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
      if(state === `programming`){
      if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
    state = `video`;
    menuToggle = 0;
      }
      if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
        state = `music`;
        menuToggle = 0;
          }
          if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
            state = `drawing`;
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
      if(state === `programming`){
        if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
     menuTextVideoColour = 255;
        } else {menuTextVideoColour = 0;}
        if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
        menuTextMusicColour = 255;
            } else {menuTextMusicColour = 0;}
            if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
           menuTextDrawingColour = 255;
                } else {menuTextDrawingColour = 0;}
                if(mouseX < width - 218 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
                menuTextCVColour = 255;
                    } else {menuTextCVColour = 0;}
                    if(mouseX < width - 164 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                    menuTextContactColour = 255;
                        } else {  menuTextContactColour = 0;}
                        if(mouseX < width - 65 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                       menuTextMainColour = 255;
                            } else {menuTextMainColour = 0;}
        }
    }
  }