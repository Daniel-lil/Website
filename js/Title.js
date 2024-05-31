class Title {
  constructor() {}

  displayTitle() {
    //defines fade in preset to put into alpha
    push();
    background(0);
    imageMode(CENTER);
    if (windowWidth>=windowHeight){
    image(tree, width/2, windowHeight/2, windowHeight-40, windowHeight*1.1);
    } else if (windowWidth<windowHeight){
      image(tree, width/2, windowHeight/2, width-40, width*1.1);
    }
    pop();
  }
    titleText() {
      push();
      textFont(oldEnglish);
      textSize(50);
      textAlign(CENTER);
      fill(255);
      noStroke();
      text(`Daniel Little`, width/2, 10*windowHeight/20-30);
      textSize(70);
      text(`Oneiromancing`, width/2, 10*windowHeight/20+30);
      pop();
    }
  }
