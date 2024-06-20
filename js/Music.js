class Music {
  constructor() {}

  displayMusic() {
    background(0);

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

          image(spotifyLogo, window.innerWidth/4, window.innerHeight/2 ,100,100);
          image(appleLogo, 2*window.innerWidth/4, window.innerHeight/2 ,100,100);
          image(youtubeLogo, 3*window.innerWidth/4, window.innerHeight/2 ,100,100);  
            } else if (width < 1550){
              */
            spotifyLink.position(width/2 +75, 250);
            appleMusicLink.position(width/2 - 139, 250);
            youtubeLink.position(width/2 + 75, 450);
            soundcloudLink.position(width/2 - 137, 450);

            image(spotifyLogo, width/2 + 100, 200 ,100,100);
            image(appleLogo, width/2 - 100, 200 ,100,100);
            image(youtubeLogo, width/2 + 100, 400 ,100,100);  
            image(soundcloudLogo, width/2 - 100, 400 ,100,100);  
        //  }
        pop();
          

            if (mouseX > 10 && mouseX < 310 && mouseY > 35  && mouseY < 90 ) {
              if (mouseX > width - 25 || mouseX < menuDetectx ||mouseY < 42  || mouseY > menuDetecty ) {
              nameSizeBoost = 5;}} else {nameSizeBoost = 0;}
              if (mouseX < menuButtonX +25 && mouseX > menuButtonX - 25 && mouseY > 42  && mouseY <90 ) {
                MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  
  }
    titleText() {
    }

    menuTextDetect(){
      if(state === `music`){
      if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
    state = `video`;
    menuToggle = 0;
      }
      if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
        state = `drawing`;
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
      if(state === `music`){
        if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
      menuTextVideoColour = 255;
        } else {menuTextVideoColour = 0;}
        if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
         menuTextDrawingColour = 255;
            } else {menuTextDrawingColour = 0;}
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