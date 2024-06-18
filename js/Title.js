class Title {
  constructor() {}

  displayTitle() {
    //defines fade in preset to put into alpha
    push();
    background(0);
    imageMode(CENTER);
    if (window.innerWidth>=window.innerHeight){
    image(tree, window.innerWidth/2, window.innerHeight/2, window.innerHeight-40, window.innerHeight*1.1);
    } else if (window.innerWidth<window.innerHeight){
      image(tree, window.innerWidth/2, window.innerHeight/2, window.innerWidth-40, window.innerWidth*1.1);
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
      text(`Daniel Little`, window.innerWidth/2, window.innerHeight/2+10);
      textSize(70);
      text(`Oneiromancing`, window.innerWidth/2, window.innerHeight/2+150);
      pop();
    }
  }
