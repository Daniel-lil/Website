class CV {
  constructor() {}

  displayCV() {
    //defines fade in preset to put into alpha
    push();
    background(0);
   // imageMode(CENTER);
   // image(detective, 960, 540);
    pop();

            //invisible rects around txt
            fill(0,0,0,0)
            noStroke();
            rect(windowWidth - 90 , 22, 80, 80);
            rect(10 , 22 , 300, 80,);
        
            textFont(oldEnglish);
            textSize(65+ nameSizeBoost);
            textAlign(CENTER);
            fill(255);
            stroke(0);
            text(`Daniel Little`, 160, 80);
            textSize(80 + MenuSizeBoost);
            text(`_`, windowWidth - 50, 35);
            text(`_`, windowWidth - 50, 55);
            text(`_`, windowWidth - 50, 75);

            push();
            fill(0);
            stroke(255);
            textSize(windowWidth/8);
            text(`CV Page`, windowWidth/2, windowHeight/2);
            pop();

            if (mouseX > 10 && mouseX < 310 && mouseY > 35 && mouseY < 90) {
              nameSizeBoost = 5;} else {nameSizeBoost = 0;}
            if (mouseX < windowWidth - 25 && mouseX > windowWidth - 72 && mouseY > 42 && mouseY <90) {
                MenuSizeBoost = 10;} else {MenuSizeBoost = 0;}  

  }
    titleText() {
    }

    menuTextDetect(){
      if(state === `cv`){
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
                  if(mouseX < windowWidth - 115 && mouseX > windowWidth - 265 && mouseY > 268 && mouseY < 304){
                    state = `contact`;
                    menuToggle = 0;
                      }
                      if(mouseX < windowWidth - 65 && mouseX > windowWidth - 265 && mouseY > 322 && mouseY < 362){
                        state = `main`;
                        menuToggle = 0;
                          }
      }
    }
  }
