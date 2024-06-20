class Video {
  constructor() {}

  displayVideo() {
    //defines fade in preset to put into alpha
    background(0);

//if (menuToggle ===1 && width < 1250){
//  melancholy.hide();
//} else if (menuToggle === 0){melancholy.show();}

melancholy.show();
    video2.removeAttribute("hidden");
    video3.removeAttribute("hidden");
    video4.removeAttribute("hidden");
    video5.removeAttribute("hidden");
    video6.removeAttribute("hidden");


    /**
    if (window.innerWidth >= 1550){
    melancholy.show();
    melancholy.position(width/2 - 275, 175);

    push();
    fill(255);
    textSize(25);
    textAlign(LEFT);
    text(`The Tower 
(2024)`, width/2 + 50, 260 + screenPushAmount);

    video2.show();
    video2.position(width/2 - 275, 425);

    text(`Melancholy Daydreams
()`, width/2 + 50, 510 + screenPushAmount);
 
    video3.show();
    video3.position(width/2 - 275, 675);

    text(`Melancholy Daydreams
()`, width/2 + 50, 760 + screenPushAmount);

    video4.show();
    video4.position(width/2 - 275, 925);

    text(`Melancholy Daydreams
()`, width/2 + 50, 1010 + screenPushAmount);

    video5.show();
    video5.position(width/2 - 275, 1175);

    text(`Melancholy Daydreams
()`, width/2 + 50, 1260 + screenPushAmount);

    video6.show();
    video6.position(width/2 - 275, 1425);

    text(`Melancholy Daydreams
()`, width/2 + 50, 1510 + screenPushAmount);
    pop();
    } 
    
    else if (window.innerWidth < 1550){
*/

imageMode(CENTER)

vimeoLink.show();
youtubeLink.show();

youtubeLink.style('color', 'white');
vimeoLink.style('color', 'white');

youtubeLink.position(width/2 + 74, 270);
vimeoLink.position(width/2 - 120, 270);

if (menuToggle ===1 && width < 800){
  youtubeLink.hide();
}

image(youtubeLogo, width/2 + 100, 220 + screenPushAmount,100,100);  
image(vimeoLogo, width/2 - 100, 220 + screenPushAmount,100,100);

      melancholy.position(width/2 - 150, 370);
  
      push();
      fill(255);
      textSize(25);
      textAlign(CENTER);
      text(`The Tower 
(2024)`, width/2, 550 + screenPushAmount);
  
      video2.show();
      video2.position(width/2 - 150, 620);
  
      text(`Gate of Horn and Ivory
(2024)`, width/2, 800 + screenPushAmount);
   
      video3.show();
      video3.position(width/2 - 150, 870);
  
      text(`Time
(2023)`, width/2, 1050 + screenPushAmount);
  
      video4.show();
      video4.position(width/2 - 150, 1120);
  
      text(`Clocks
(2023)`, width/2, 1300 + screenPushAmount);
  
      video5.show();
      video5.position(width/2 - 150, 1370);
  
      text(`Know Myself
(2022)`, width/2, 1550 + screenPushAmount);
  
      video6.show();
      video6.position(width/2 - 150, 1620);
  
      text(`Melancholy Daydreams
(2021)`, width/2, 1800 + screenPushAmount);
      pop();

   // }        
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

            if (mouseX > 10 && mouseX < 310 && mouseY > 35 + screenPushAmount && mouseY < 90 + screenPushAmount) {
              if (mouseX > window.innerWidth - 25 || mouseX < menuDetectx ||mouseY < 42 + screenPushAmount || mouseY > menuDetecty + screenPushAmount) {
              nameSizeBoost = 5;}} else {nameSizeBoost = 0;}
              if (mouseX < menuButtonX +25 && mouseX > menuButtonX - 25 && mouseY > 42 + screenPushAmount && mouseY <90 + screenPushAmount) {
                MenuSizeBoost = 10;} else {MenuSizeBoost = 0;} 
  }
    titleText() {
    }

    menuTextDetect(){
      if(state === `video`){
      if(mouseX < window.innerWidth - 178 && mouseX > window.innerWidth - 265 && mouseY > 42 + screenPushAmount && mouseY < 82 + screenPushAmount){
    state = `music`;
    menuToggle = 0;
      }
      if(mouseX < window.innerWidth - 152 && mouseX > window.innerWidth - 265 && mouseY > 100 + screenPushAmount && mouseY < 140 + screenPushAmount){
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
      if(state === `video`){
        if(mouseX < window.innerWidth - 178 && mouseX > window.innerWidth - 265 && mouseY > 42 + screenPushAmount && mouseY < 82 + screenPushAmount){
     menuTextMusicColour = 255;
        } else {menuTextMusicColour = 0;}
        if(mouseX < window.innerWidth - 152 && mouseX > window.innerWidth - 265 && mouseY > 100 + screenPushAmount && mouseY < 140 + screenPushAmount){
         menuTextDrawingColour = 255;
            }else{menuTextDrawingColour = 0;}
            if(mouseX < window.innerWidth - 84 && mouseX > window.innerWidth - 265 && mouseY > 158 + screenPushAmount && mouseY < 192 + screenPushAmount){
            menuTextProgrammingColour = 255;
                }else{menuTextProgrammingColour = 0;}
                if(mouseX < window.innerWidth - 218 && mouseX > window.innerWidth - 265 && mouseY > 210 + screenPushAmount && mouseY < 250 + screenPushAmount){
                menuTextCVColour = 255;
                    }else{menuTextCVColour = 0;}
                    if(mouseX < window.innerWidth - 164 && mouseX > window.innerWidth - 265 && mouseY > 268 + screenPushAmount && mouseY < 304 + screenPushAmount){
                   menuTextContactColour = 255;
                        }else{  menuTextContactColour = 0;}
                        if(mouseX < window.innerWidth - 65 && mouseX > window.innerWidth - 265 && mouseY > 322 + screenPushAmount && mouseY < 362 + screenPushAmount){
                        menuTextMainColour = 255;
                            }else{menuTextMainColour = 0;}
        }
    }
  }