class Title {
  constructor() {}

  displayTitle() {
    titleX = width/2;
    titleY = height/8;

    //defines fade in preset to put into alpha
    push();
    background(0);
    imageMode(CENTER);
    if (width>=height/4){
   // image(tree, titleX, titleY, window.innerHeight-40, window.innerHeight*1.1);
   image(tree, titleX, titleY, height/4, height/4);
  //  textSize(window.innerHeight/20);
    } else if (width<height/4){
      //image(tree, titleX, titleY, window.innerWidth-40, window.innerWidth*1.1);
      image(tree, titleX, titleY, width, width);
      //textSize(window.innerWidth/20);
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
