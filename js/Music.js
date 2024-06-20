class Music {
  constructor() {}

  displayMusic() {
    //defines fade in preset to put into alpha
    background(0);

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

            push();
            fill(0,0,0);
            rect(menuButtonX - 26, 37 + screenPushAmount, 52, 55);
            pop();

            textSize(80 + MenuSizeBoost);
            text(`_`, menuButtonX, 35 + screenPushAmount);
            text(`_`, menuButtonX, 55 + screenPushAmount);
            text(`_`, menuButtonX, 75 + screenPushAmount);

          push();
          imageMode(CENTER);

          youtubeLink.show();
          spotifyLink.show();
          appleMusicLink.show();
          soundcloudLink.show();

          youtubeLink.style('color', 'white');
          spotifyLink.style('color', 'white');
          appleMusicLink.style('color', 'white');
          soundcloudLink.style('color', 'white');

          if (menuToggle ===1 && width < 800){
            spotifyLink.hide();
          }


              /**
            if (width >= 1550){
          spotifyLink.position(window.innerWidth/4 - 23, window.innerHeight/1.82);
          youtubeLink.position(3*window.innerWidth/4 - 25, window.innerHeight/1.82);
          appleMusicLink.position(2*window.innerWidth/4 - 42, window.innerHeight/1.82);

          image(spotifyLogo, window.innerWidth/4, window.innerHeight/2 + screenPushAmount,100,100);
          image(appleLogo, 2*window.innerWidth/4, window.innerHeight/2 + screenPushAmount,100,100);
          image(youtubeLogo, 3*window.innerWidth/4, window.innerHeight/2 + screenPushAmount,100,100);  
            } else if (width < 1550){
              */
            spotifyLink.position(width/2 +75, 250);
            appleMusicLink.position(width/2 - 139, 250);
            youtubeLink.position(width/2 + 75, 450);
            soundcloudLink.position(width/2 - 137, 450);

            image(spotifyLogo, width/2 + 100, 200 + screenPushAmount,100,100);
            image(appleLogo, width/2 - 100, 200 + screenPushAmount,100,100);
            image(youtubeLogo, width/2 + 100, 400 + screenPushAmount,100,100);  
            image(soundcloudLogo, width/2 - 100, 400 + screenPushAmount,100,100);  
        //  }
        pop();
          

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