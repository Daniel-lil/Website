class Video {
  constructor() {}

  displayVideo() {
    //defines fade in preset to put into alpha
    background(0);

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
(2024)`, width/2 + 50, 260 );

    video2.show();
    video2.position(width/2 - 275, 425);

    text(`Melancholy Daydreams
()`, width/2 + 50, 510 );
 
    video3.show();
    video3.position(width/2 - 275, 675);

    text(`Melancholy Daydreams
()`, width/2 + 50, 760 );

    video4.show();
    video4.position(width/2 - 275, 925);

    text(`Melancholy Daydreams
()`, width/2 + 50, 1010 );

    video5.show();
    video5.position(width/2 - 275, 1175);

    text(`Melancholy Daydreams
()`, width/2 + 50, 1260 );

    video6.show();
    video6.position(width/2 - 275, 1425);

    text(`Melancholy Daydreams
()`, width/2 + 50, 1510 );
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

image(youtubeLogo, width/2 + 100, 220 ,100,100);  
image(vimeoLogo, width/2 - 100, 220 ,100,100);

      melancholy.position(width/2 - 150, 370);
  
      push();
      fill(255);
      textSize(25);
      textAlign(CENTER);
      text(`The Tower 
(2024)`, width/2, 550 );
  
      video2.show();
      video2.position(width/2 - 150, 620);
  
      text(`Gate of Horn and Ivory
(2024)`, width/2, 800 );
   
      video3.show();
      video3.position(width/2 - 150, 870);
  
      text(`Time
(2023)`, width/2, 1050 );
  
      video4.show();
      video4.position(width/2 - 150, 1120);
  
      text(`Clocks
(2023)`, width/2, 1300 );
  
      video5.show();
      video5.position(width/2 - 150, 1370);
  
      text(`Know Myself
(2022)`, width/2, 1550 );
  
      video6.show();
      video6.position(width/2 - 150, 1620);
  
      text(`Melancholy Daydreams
(2021)`, width/2, 1800 );
      pop();

   // }        
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
      if(state === `video`){
      if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
    state = `music`;
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
      if(state === `video`){
        if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
     menuTextMusicColour = 255;
        } else {menuTextMusicColour = 0;}
        if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
         menuTextDrawingColour = 255;
            }else{menuTextDrawingColour = 0;}
            if(mouseX < width - 84 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
            menuTextProgrammingColour = 255;
                }else{menuTextProgrammingColour = 0;}
                if(mouseX < width - 218 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
                menuTextCVColour = 255;
                    }else{menuTextCVColour = 0;}
                    if(mouseX < width - 164 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                   menuTextContactColour = 255;
                        }else{  menuTextContactColour = 0;}
                        if(mouseX < width - 65 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                        menuTextMainColour = 255;
                            }else{menuTextMainColour = 0;}
        }
    }
  }