// Shop [ Select | white skin ]
function whiteSkin() {
    document.getElementById("player").style.backgroundImage = "url(/Desgins/Skins/whiteSkin.png)";
  }
  
  // Shop [ Buy / Select | blue skin ]
  var ownBlue = false;
  function blueSkin() {
    if (ownBlue == false && gold > 9) {
      document.getElementById("player").style.backgroundImage = "url(/Desgins/Skins/blueSkin.png)";
      document.getElementById("blue").innerHTML = "OWNED";
      gold -= 10;
      ownBlue = true;
    }
    if (ownBlue == true) {
      document.getElementById("player").style.backgroundImage = "url(/Desgins/Skins/blueSkin.png)";
    }
  }
  
  // Shop [ Buy / Select | pink skin ]
  var ownPink = false;
  function pinkSkin() {
    if (ownPink == false && gold > 9) {
      document.getElementById("player").style.backgroundImage = "url(/Desgins/Skins/pinkSkin.png)";
      document.getElementById("pink").innerHTML = "OWNED";
      gold -= 10;
      ownPink = true;
    }
    if (ownPink == true) {
      document.getElementById("player").style.backgroundImage = "url(/Desgins/Skins/pinkSkin.png)";
    }
  }
  
  // Shop [ Buy / Select | red skin ]
  var ownRed = false;
  function redSkin() {
    if (ownRed == false && gold > 9) {
      document.getElementById("player").style.backgroundImage = "url(/Desgins/Skins/redSkin.png)";
      document.getElementById("red").innerHTML = "OWNED";
      gold -= 10;
      ownRed = true;
    }
    if (ownRed == true) {
      document.getElementById("player").style.backgroundImage = "url(/Desgins/Skins/redSkin.png)";
    }
  }
  
  // Shop [ Buy / Select | dog skin ] // Error
  var ownDog = false;
  function dogSkin() {
    if (ownDog == false && gold > 99) {
      document.getElementById("player").style.backgroundImage = "url(/Designs/Skins/dogSkin.png)";
      document.getElementById("dog").innerHTML = "OWNED";
      gold -= 100;
      ownDog = true;
    }
    if (ownDog == true) {
      document.getElementById("player").style.backgroundImage = "url(/Designs/Skins/dogSkin.png)";
    }
  }