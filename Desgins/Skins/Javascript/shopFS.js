// Shop [ Select | white skin ]
function whiteSkin() {
  document.getElementById("player").style.backgroundImage =
    "url(./Desgins/Skins/whiteSkin.png)";
}

// Shop [ Buy / Select | blue skin ]
var ownBlue = "false";
function blueSkin() {
  if (ownBlue == "false" && gold > 99) {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/blueSkin.png)";
    document.getElementById("blue").innerHTML = "Blue";
    gold -= 100;
    ownBlue = "true";
  }
  if (ownBlue == "true") {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/blueSkin.png)";
  }
}

// Shop [ Buy / Select | pink skin ]
var ownPink = "false";
function pinkSkin() {
  if (ownPink == "false" && gold > 99) {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/pinkSkin.png)";
    document.getElementById("pink").innerHTML = "Pink";
    gold -= 100;
    ownPink = "true";
  }
  if (ownPink == "true") {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/pinkSkin.png)";
  }
}

// Shop [ Buy / Select | red skin ]
var ownRed = "false";
function redSkin() {
  if (ownRed == "false" && gold > 99) {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/redSkin.png)";
    document.getElementById("red").innerHTML = "Red";
    gold -= 100;
    ownRed = "true";
  }
  if (ownRed == "true") {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/redSkin.png)";
  }
}

// Shop [ Buy / Select | bear skin ]
var ownBear = "false";
function bearSkin() {
  if (ownBear == "false" && gold > 499) {
    saveScore();
    document.getElementById("player").style.backgroundImage =
      "url(./Designs/Skins/bearSkin.png)";
    document.getElementById("bear").innerHTML = "Bear";
    gold -= 500;
    ownBear = "true";
  }
  if (ownBear == "true") {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/bearSkin.png)";
  }
}

// Shop [ Buy / Select | JamJitzu skin ]
var ownJamJitzu = "false";
function jamJitzuSkin() {
  if (ownJamJitzu == "false" && gold > 499) {
    saveScore();
    document.getElementById("player").style.backgroundImage =
      "url(./Designs/Skins/JamJitzuSkin.png)";
    document.getElementById("jamJitzu").innerHTML = "Jam Jitzu";
    gold -= 500;
    ownJamJitzu = "true";
  }
  if (ownJamJitzu == "true") {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/JamJitzuSkin.png)";
  }
}

// Shop [ Buy / Select | WalkingV / Crazy skin ]
var ownWalkingV = "false";
function walkingVSkin() {
  if (ownWalkingV == "false" && walkingValue > 9999) {
    saveScore();
    ownWalkingV = "true";
  }
  if (ownWalkingV == "true") {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/WalkingVSkin.png)";
  }
}

var ownCrazy = "false";
function crazySkin() {
  if (ownCrazy == "false" && highscore > 199) {
    saveScore();
    ownCrazy = "true";
  }
  if (ownCrazy == "true") {
    document.getElementById("player").style.backgroundImage =
      "url(./Desgins/Skins/crazySkin.png)";
  }
}

setInterval(() => {
  if (walkingValue < 10000) {
    document.getElementById("walkingV").innerHTML = 10000 - walkingValue;
  } else if (ownWalkingV == "false") {
    walkingValue = "true";
    document.getElementById("walkingV").innerHTML = "Speed";
    saveScore();
  }

  if (highscore < 199) {
    document.getElementById("crazy").innerHTML = 200 - highscore;
  } else if (ownCrazy == "false") {
    ownCrazy = "true";
    document.getElementById("crazy").innerHTML = "Went crazy";
    saveScore();
  }
}, 50);
