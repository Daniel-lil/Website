class CV {
  constructor() {}

  displayCV() {
    cnv.style('top', '0'); // Position at the top of the viewport
    cvX = width/2;
    cvY = height/32;

    background(0);

    // Composed, recorded and produced for many Canadian musicians at home studio in Toronto like Felix Quastel, Ethan Surman, Gardy, Charlie Lukachevsky, Jack Bergstein, Mariam Wehbe, and Klin - (2018-2020)
cvText = `Education


~ Private lessons studying piano performance, music composition and music theory with Dr. Erik Ross - (2010-present)

~ Private lessons studying alto saxophone performance with Olivia Shortt - (2016-2017)

~ Private lessons in guitar/bass performance and music production with Damir Demirovic (Duff Musiq) - (2014-2018)

~ Rosedale Heights School of The Arts 
 
Double majoring in music and visual Arts - (2016-2020)

~ Royal Conservatory of Music  - completed level 8 theory and playing tests - (2019)

~ Concordia university 

graduated from the IMCA (Intermedia and Cyber Arts) program with a 3.6 GPA

focusing on audio/video production, programming, and electronics - (2020-2024)
 

Work Experience


~ Lead guitar for the Rosedale Heights School of The Arts band, 

performing many shows, one of which was at Canada's Wonderland - (2016-2020)

~ Lead guitar for the bands Pirate Radio and Ape. We performed at The Cavern, The Burdock, 

The Supermarket, Dundas West Fest 2017/2018 and D-Beatstro in Toronto - (2016-2020)

~ Recorded and released single “Come On Over” with Pirate Radio - (2018)

~ Lead Guitar and Bass for Gyles and Damir Demirovic performing three shows at The Olde Nick - (2018)

~ Started clothing brand that involves mostly custom cut and sew and dying work - (2018-2021)

~ Audio production and recording engineer for Swim Media - (2020-present)

~ Wrote, recorded, and created music video for Melancholy Daydreams (feat. Melody Bucchino) - (2020)

~ Music composition/production and video editing for SIPS Conference - (2021)

~ Wrote, recorded, and created music video for Know Myself - (2021)

~ Audio/video editing for Fort York Museum's installation detailing Canada's internment of Ukranians during WW1 - (2022)

~ Wrote recorded and created music video for Clocks - (2022)

~ Programmed a reactive harmonizer in Max MSP which detects an input source's pitch 

and generates harmonies based on whatever key and intervals the user chooses - (2023)

~ Wrote recorded and created music video for Time - (2022)

~ Piano Performer, composition consultant, and recording engineer assistant for In Your Wake Film 

which was shown at the TMU Film Fest at the Winter Garden Theatre - (2024)

~ Performed bass with Dahlia Waller's band for Hotel Bando at Notre Dame de Quilles 

where I also worked as an assistant audio engineer - (2024)

~ Piano performer and recording engineer assistant for Gale film

which was shown at the TMU Film Fest at the Winter Garden Theatre - (2024)

~ Created and produced a short animated film titled The Tower which was displayed as a sculptural, multi-channel, 

audio/video installation at the For This To End art show. This event was held at The Black Box in Montreal. 

~ I also worked as co-technology organizer/supervisor at this show - (2024)

~ Displayed a projection based audio/video installation titled Gate of Horn and Ivory at Concordia's EV building - (2024)

~ Worked as sound engineer for Felix Quastel and Mimi Matamoros at L'Orbite Cafe in Montreal - (2024)

~ Audio and video editing for Opera Singer Susan Tsagkaris - (2024)


Skills


~ Music composition and performance: Plays guitar, bass, piano, drums, alto saxophone 

and works in a variety of genres including, but not limited to classical, rock, metal, electronic, hip-hop, jazz, and funk. 

~ Audio for Film/tv/games: Composing, Foley, and sound design.

~ Audio editing: Logic Pro, Pro Tools, Ableton, FL, Nuendo.

~ video editing: Adobe Creative Suite, Final Cut, Blender, Rhinoceros 3D, Procreate, and the Microsoft Office.

I also have access to a wide variety of industry standard equipment and plugins.

~ Recording engineer: Extensive knowledge and experience of the entire audio recording process, 

microphones, various musical instruments, sound design, mixing, and mastering.

~ Programming: JS, HTML, CSS, Max MSP + Jitter, and basic C++.

~ Instrument maintenance: guitar/bass setup, piano tuning, soldering/electronics.

~ Visual artist and craftsman: paints/draws, writes graphic novels, animates, creates sculptures (woodworking, 

basic welding, and ceramics), does photography/videography, likes to work with clothes (sewing and dying).
`;
if(width <= 1050){
  CVTextSize = 34 * (1050/1800)-10;
}
else if (width > 1050 && width < 1450){
  CVTextSize = 34 * (width/1800)-10;} 
 else if (width >= 1450){
  CVTextSize = 17.85;
}

            push();
            fill(255);
            textAlign(CENTER, TOP);
            textSize(CVTextSize);
            stroke(100);
            strokeWeight(1);
            textFont('Times New Roman');
            text(cvText, cvX, cvY  +40);
            pop();
                
                    textFont(oldEnglish);
                    textSize(65+ nameSizeBoost);
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
      if(state === `cv`){
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
                  if(mouseX < width - 115 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                    state = `contact`;
                    menuToggle = 0;
                      }
                      if(mouseX < width - 114 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                        state = `main`;
                        menuToggle = 0;
                          }
      }
    }

    menuTextHoverDetect(){
      if(state === `cv`){
        if(mouseX < width - 188 && mouseX > width - 265 && mouseY > 42  && mouseY < 82 ){
     menuTextVideoColour = 255;
        } else {  menuTextVideoColour = 0;}
        if(mouseX < width - 178 && mouseX > width - 265 && mouseY > 100  && mouseY < 140 ){
          menuTextMusicColour = 255;
            }else {  menuTextMusicColour = 0;}
            if(mouseX < width - 152 && mouseX > width - 265 && mouseY > 158  && mouseY < 192 ){
              menuTextDrawingColour = 255;
                } else {  menuTextDrawingColour = 0;}
                if(mouseX < width - 84 && mouseX > width - 265 && mouseY > 210  && mouseY < 250 ){
                 menuTextProgrammingColour = 255;
                    } else {  menuTextProgrammingColour = 0;}
                    if(mouseX < width - 115 && mouseX > width - 265 && mouseY > 268  && mouseY < 304 ){
                     menuTextContactColour = 255;
                        }else {  menuTextContactColour = 0;} 
                        if(mouseX < width - 114 && mouseX > width - 265 && mouseY > 322  && mouseY < 362 ){
                      menuTextMainColour = 255;
                            }else {menuTextMainColour = 0;}
                        } 
        }
    }
  