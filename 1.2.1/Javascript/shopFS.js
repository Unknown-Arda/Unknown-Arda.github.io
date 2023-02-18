// Shop [ Select | white skin ]
function whiteSkin() {
    document.getElementById("player").style.backgroundColor = "aliceblue";
    document.getElementById("player").style.backgroundImage = "none";
  }
  
  // Shop [ Buy / Select | blue skin ]
  var ownBlue = false;
  function blueSkin() {
    if (ownBlue == false && gold > 9) {
      document.getElementById("player").style.backgroundColor = "rgb(96, 195, 235)";
      document.getElementById("player").style.backgroundImage = "none";
      document.getElementById("blue").innerHTML = "OWNED";
      gold -= 10;
      ownBlue = true;
    }
    if (ownBlue == true) {
      document.getElementById("player").style.backgroundColor = "rgb(96, 195, 235)";
      document.getElementById("player").style.backgroundImage = "none";
    }
  }
  
  // Shop [ Buy / Select | pink skin ]
  var ownPink = false;
  function pinkSkin() {
    if (ownPink == false && gold > 9) {
      document.getElementById("player").style.backgroundColor = "rgb(235, 96, 228)";
      document.getElementById("player").style.backgroundImage = "none";
      document.getElementById("pink").innerHTML = "OWNED";
      gold -= 10;
      ownPink = true;
    }
    if (ownPink == true) {
      document.getElementById("player").style.backgroundColor = "rgb(235, 96, 228)";
      document.getElementById("player").style.backgroundImage = "none";
    }
  }
  
  // Shop [ Buy / Select | red skin ]
  var ownRed = false;
  function redSkin() {
    if (ownRed == false && gold > 9) {
      document.getElementById("player").style.backgroundColor = "rgb(211, 77, 77)";
      document.getElementById("player").style.backgroundImage = "none";
      document.getElementById("red").innerHTML = "OWNED";
      gold -= 10;
      ownRed = true;
    }
    if (ownRed == true) {
      document.getElementById("player").style.backgroundColor = "rgb(211, 77, 77)";
      document.getElementById("player").style.backgroundImage = "none";
    }
  }
  
  // Shop [ Buy / Select | dog skin ]
  var ownDog = false;
  function dogSkin() {
    if (ownDog == false && gold > 99) {
      document.getElementById("player").style.backgroundImage = "url(./Andere/dogSkin.png)";
      document.getElementById("dog").innerHTML = "OWNED";
      gold -= 100;
      ownDog = true;
    }
    if (ownDog == true) {
      document.getElementById("player").style.backgroundImage = "url(./Andere/dogSkin.png)";
    }
  }