class Contact {
  constructor() {}

  displayContact() {
    //defines fade in preset to put into alpha
    push();
    background(0);
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

            push();
            imageMode(CENTER);

            phoneLink.show();
            instagramLink.show();
            gmailLink.show();

            phoneLink.style('color', 'white');
            instagramLink.style('color', 'white');
            gmailLink.style('color', 'white');

            phoneLink.style('vertical-align', 'center');
            instagramLink.style('vertical-align', 'center');
            gmailLink.style('vertical-align', 'center');

            if (menuToggle ===1 && width < 800){
              instagramLink.hide();
            }

    /**
            if (width >= 1550){
            instagramLink.position(width/4 - 31, height/8 + 50);
            phoneLink.position(3*width/4 - 25, height/8 + 50);
            gmailLink.position(2*width/4 - 95, height/8 + 50);

            image(instagramLogo, width/4, height/8 ,100,100);
            image(emailLogo, 2*width/4, height/8 ,100,100);
            image(phoneLogo, 3*width/4, height/8 ,100,100);  
            } else if (width < 1550){
              */
              instagramLink.position(width/2 - 55, 250);
              gmailLink.position(width/2 - 95, 450);
              phoneLink.position(width/2 - 57, 650);

              image(instagramLogo, width/2, 200 ,100,100);
              image(emailLogo, width/2, 400 ,100,100);
              image(phoneLogo, width/2, 600 ,100,100);  
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
      if(state === `contact`){
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
              if(mouseX < width - 84 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
                state = `programming`;
                menuToggle = 0;
                  }
                  if(mouseX < width - 218 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                    state = `cv`;
                    menuToggle = 0;
                      }
                      if(mouseX < width - 114 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                        state = `main`;
                        menuToggle = 0;
                          }
      }
    }

    menuTextHoverDetect(){
      if(state === `contact`){
      if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
   menuTextVideoColour = 255;
      } else {menuTextVideoColour = 0;}
      if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
       menuTextMusicColour = 255;
          } else {menuTextMusicColour = 0;}
          if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
           menuTextDrawingColour = 255;
              } else {menuTextDrawingColour = 0;}
              if(mouseX < width - 84 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
               menuTextProgrammingColour = 255;
                  }   else {menuTextProgrammingColour = 0;}
                  if(mouseX < width - 218 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                  menuTextCVColour = 255;
                      } else{ menuTextCVColour = 0;}
                      if(mouseX < width - 114 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                        menuTextMainColour = 255;
                              }else {menuTextMainColour = 0;}
      }
    }
  }
