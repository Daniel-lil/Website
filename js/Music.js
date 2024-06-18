class Music {
  constructor() {}

  displayMusic() {
    //defines fade in preset to put into alpha
    push();
    background(0);
    //imageMode(CENTER)
    //image(racing, 960, 540);
    pop();

            //invisible rects around txt
            fill(0,0,0,0)
            noStroke();
            rect(window.innerWidth - 90 , 22, 80, 80);
            rect(10 , 22 , 300, 80,);
        
            textFont(oldEnglish);
            textSize(65 + nameSizeBoost);
            textAlign(CENTER);
            fill(255);
            stroke(0);
            text(`Daniel Little`, 160, 80 + screenPushAmount);
            textSize(80 + MenuSizeBoost);
            text(`_`, menuButtonX, 35 + screenPushAmount);
            text(`_`, menuButtonX, 55 + screenPushAmount);
            text(`_`, menuButtonX, 75 + screenPushAmount);

            push();
            fill(0);
            stroke(255, 255, 255,80);
            textSize(window.innerWidth/8);
            text(`Music Page`, window.innerWidth/2, window.innerHeight/2 + screenPushAmount);
          pop();

          push();
          imageMode(CENTER);
          image(spotifyLogo, window.innerWidth/4, window.innerHeight/2 + screenPushAmount,100,100);
          image(appleLogo, 2*window.innerWidth/4, window.innerHeight/2 + screenPushAmount,100,100);
          image(youtubeLogo, 3*window.innerWidth/4, window.innerHeight/2 + screenPushAmount,100,100);  

          pop();

          youtubeLink.show();
          spotifyLink.show();
          appleMusicLink.show();

          youtubeLink.style('color', 'white');
          spotifyLink.style('color', 'white');
          appleMusicLink.style('color', 'white');

          spotifyLink.position(window.innerWidth/4 - 23, window.innerHeight/1.82);
          youtubeLink.position(3*window.innerWidth/4 - 25, window.innerHeight/1.82);
          appleMusicLink.position(2*window.innerWidth/4 - 42, window.innerHeight/1.82);

          

            if (mouseX > 10 && mouseX < 310 && mouseY > 35 + screenPushAmount && mouseY < 90 + screenPushAmount) {
              if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
              nameSizeBoost = 5;}} else {nameSizeBoost = 0;}
              if (mouseX < menuButtonX +25 && mouseX > menuButtonX - 25 && mouseY > 42 + screenPushAmount && mouseY <90 + screenPushAmount) {
                MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
  }
    titleText() {
    }

    menuTextDetect(){
      if(state === `music`){
      if(mouseX < window.innerWidth - 188 && mouseX > window.innerWidth - 265 && mouseY > 42 + screenPushAmount && mouseY < 82 + screenPushAmount){
    state = `video`;
    menuToggle = 0;
      }
      if(mouseX < window.innerWidth - 152 && mouseX > window.innerWidth - 265 && mouseY > 100  + screenPushAmount&& mouseY < 140 + screenPushAmount){
        state = `drawing`;
        menuToggle = 0;
          }
          if(mouseX < window.innerWidth - 84 && mouseX > window.innerWidth - 265 && mouseY > 158 + screenPushAmount && mouseY < 192 + screenPushAmount){
            state = `programming`;
            menuToggle = 0;
              }
              if(mouseX < window.innerWidth - 218 && mouseX > window.innerWidth - 265 && mouseY > 210 + screenPushAmount && mouseY < 250 + screenPushAmount){
                state = `cv`;
                menuToggle = 0;
                  }
                  if(mouseX < window.innerWidth - 164 && mouseX > window.innerWidth - 265 && mouseY > 268 + screenPushAmount && mouseY < 304 + screenPushAmount){
                    state = `contact`;
                    menuToggle = 0;
                      }
                      if(mouseX < window.innerWidth - 65 && mouseX > window.innerWidth - 265 && mouseY > 322 + screenPushAmount && mouseY < 362 + screenPushAmount){
                        state = `main`;
                        menuToggle = 0;
                          }
      }
    }
    menuTextHoverDetect(){
      if(state === `music`){
        if(mouseX < window.innerWidth - 188 && mouseX > window.innerWidth - 265 && mouseY > 42 + screenPushAmount && mouseY < 82 + screenPushAmount){
      menuTextVideoColour = 255;
        } else {menuTextVideoColour = 0;}
        if(mouseX < window.innerWidth - 152 && mouseX > window.innerWidth - 265 && mouseY > 100 + screenPushAmount && mouseY < 140 + screenPushAmount){
         menuTextDrawingColour = 255;
            } else {menuTextDrawingColour = 0;}
            if(mouseX < window.innerWidth - 84 && mouseX > window.innerWidth - 265 && mouseY > 158 + screenPushAmount && mouseY < 192 + screenPushAmount){
            menuTextProgrammingColour = 255;
                } else {menuTextProgrammingColour = 0;}
                if(mouseX < window.innerWidth - 218 && mouseX > window.innerWidth - 265 && mouseY > 210 + screenPushAmount && mouseY < 250 + screenPushAmount){
               menuTextCVColour = 255;
                    } else {menuTextCVColour = 0;}
                    if(mouseX < window.innerWidth - 164 && mouseX > window.innerWidth - 265 && mouseY > 268 + screenPushAmount && mouseY < 304 + screenPushAmount){
                    menuTextContactColour = 255;
                        } else {menuTextContactColour = 0;}
                        if(mouseX < window.innerWidth - 65 && mouseX > window.innerWidth - 265 && mouseY > 322 + screenPushAmount && mouseY < 362 + screenPushAmount){
                       menuTextMainColour = 255;
                            } else {menuTextMainColour = 0;}
        }
    }
  }