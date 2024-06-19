class Contact {
  constructor() {}

  displayContact() {
    //defines fade in preset to put into alpha
    push();
    background(0);
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
            instagramLink.show();
            gmailLink.show();

            youtubeLink.style('color', 'white');
            instagramLink.style('color', 'white');
            gmailLink.style('color', 'white');

            youtubeLink.style('vertical-align', 'center');
            instagramLink.style('vertical-align', 'center');
            gmailLink.style('vertical-align', 'center');

    /**
            if (width >= 1550){
            instagramLink.position(width/4 - 31, height/8 + 50);
            youtubeLink.position(3*width/4 - 25, height/8 + 50);
            gmailLink.position(2*width/4 - 95, height/8 + 50);

            image(instagramLogo, width/4, height/8 + screenPushAmount,100,100);
            image(emailLogo, 2*width/4, height/8 + screenPushAmount,100,100);
            image(youtubeLogo, 3*width/4, height/8 + screenPushAmount,100,100);  
            } else if (width < 1550){
              */
              instagramLink.position(width/2 - 31, 250);
              gmailLink.position(width/2 - 95, 450);
              youtubeLink.position(width/2 - 25, 650);

              image(instagramLogo, width/2, 200 + screenPushAmount,100,100);
              image(emailLogo, width/2, 400 + screenPushAmount,100,100);
              image(youtubeLogo, width/2, 600 + screenPushAmount,100,100);  
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
      if(state === `contact`){
      if(mouseX < window.innerWidth - 188 && mouseX > window.innerWidth - 265 && mouseY > 42 + screenPushAmount && mouseY < 82 + screenPushAmount){
    state = `video`;
    menuToggle = 0;
      }
      if(mouseX < window.innerWidth - 178 && mouseX > window.innerWidth - 265 && mouseY > 100 + screenPushAmount && mouseY < 140 + screenPushAmount){
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
                      if(mouseX < window.innerWidth - 114 && mouseX > window.innerWidth - 265 && mouseY > 322 + screenPushAmount && mouseY < 362 + screenPushAmount){
                        state = `main`;
                        menuToggle = 0;
                          }
      }
    }

    menuTextHoverDetect(){
      if(state === `contact`){
      if(mouseX < window.innerWidth - 188 && mouseX > window.innerWidth - 265 && mouseY > 42 + screenPushAmount && mouseY < 82 + screenPushAmount){
   menuTextVideoColour = 255;
      } else {menuTextVideoColour = 0;}
      if(mouseX < window.innerWidth - 178 && mouseX > window.innerWidth - 265 && mouseY > 100 + screenPushAmount && mouseY < 140 + screenPushAmount){
       menuTextMusicColour = 255;
          } else {menuTextMusicColour = 0;}
          if(mouseX < window.innerWidth - 152 && mouseX > window.innerWidth - 265 && mouseY > 158 + screenPushAmount && mouseY < 192 + screenPushAmount){
           menuTextDrawingColour = 255;
              } else {menuTextDrawingColour = 0;}
              if(mouseX < window.innerWidth - 84 && mouseX > window.innerWidth - 265 && mouseY > 210 + screenPushAmount && mouseY < 250 + screenPushAmount){
               menuTextProgrammingColour = 255;
                  }   else {menuTextProgrammingColour = 0;}
                  if(mouseX < window.innerWidth - 218 && mouseX > window.innerWidth - 265 && mouseY > 268 + screenPushAmount && mouseY < 304 + screenPushAmount){
                  menuTextCVColour = 255;
                      } else{ menuTextCVColour = 0;}
                      if(mouseX < window.innerWidth - 114 && mouseX > window.innerWidth - 265 && mouseY > 322 + screenPushAmount && mouseY < 362 + screenPushAmount){
                        menuTextMainColour = 255;
                              }else {menuTextMainColour = 0;}
      }
    }
  }
