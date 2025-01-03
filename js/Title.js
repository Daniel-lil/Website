class Title {
  constructor() {}

  displayTitle() {
    cnv.style('top', '0'); // Position at the top of the viewport
    titleX = width/2;
    titleY = height/8;

    push();
    background(0);
    imageMode(CENTER);
    if (width>=height/4){
   image(tree, titleX, titleY, height/4, height/4);
    } else if (width<height/4){
      image(tree, titleX, titleY, width, width);
    }

   if (width>=height/4){
      if(mouseX>titleX - 175 && mouseX<titleX + 175 && mouseY>titleY - height/64 - 35 && mouseY<titleY + height/14 + 8){
        titleTextSizeBoost = 5;
      } else {titleTextSizeBoost = 0;}
    } else if (width<height/4){
     if(mouseX>titleX - 175 && mouseX<titleX + 175 && mouseY>titleY - width/16 - 35 && mouseY<titleY + width/3.5 + 8){
      titleTextSizeBoost = 5;
    } else{titleTextSizeBoost = 0;}
    }

      textFont(oldEnglish);
      textAlign(CENTER);
      fill(255);
      noStroke();
      if (width>=height/4){
        textSize(50 + titleTextSizeBoost);
        text(`Daniel Little`, titleX, titleY - height/64);
        textSize(70 + titleTextSizeBoost);
      text(`Oneiromancing`, titleX, titleY + height/14);
    } else if (width<height/4){
      textSize(50 + titleTextSizeBoost);
      text(`Daniel Little`, titleX, titleY - width/16);
      textSize(70 + titleTextSizeBoost);
      text(`Oneiromancing`, titleX, titleY + width/3.5);
    }
      pop();
    }
  }
