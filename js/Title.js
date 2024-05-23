class Title {
  constructor() {}

  displayTitle() {
    //defines fade in preset to put into alpha
    push();
    background(0);
    imageMode(CENTER);
    pop();

  }
    titleText() {
      push();
      textFont(oldEnglish);
      textSize(windowWidth/16);
      textAlign(CENTER);
      fill(255);
      noStroke();
      text(`Daniel Little`, width/2, 7*height/20);
      textSize(windowWidth/10);
      text(`Oneiromancing`, width/2, 11*height/20);
      pop();
    }
  }
