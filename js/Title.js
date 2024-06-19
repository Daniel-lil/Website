class Title {
  constructor() {}

  displayTitle() {
    //defines fade in preset to put into alpha
    push();
    background(0);
    imageMode(CENTER);
    if (window.innerWidth>=window.innerHeight){
   // image(tree, titleX, titleY, window.innerHeight-40, window.innerHeight*1.1);
   image(tree, titleX, titleY, height/4, height/4);
  //  textSize(window.innerHeight/20);
    } else if (window.innerWidth<window.innerHeight){
      //image(tree, titleX, titleY, window.innerWidth-40, window.innerWidth*1.1);
      image(tree, titleX, titleY, width, width);
      //textSize(window.innerWidth/20);
    }

  }
    titleText() {

      textFont(oldEnglish);
     textSize(50);
      textAlign(CENTER);
      fill(255);
      noStroke();
      text(`Daniel Little`, titleX, 1.8*height/16);
      textSize(70);
      text(`Oneiromancing`, titleX, 3*height/16);
      pop();
    }
  }
