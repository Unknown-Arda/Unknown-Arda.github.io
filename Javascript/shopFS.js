// Shop [ Select | white skin ]
function whiteSkin() {
    document.getElementById("player").style.backgroundImage = "url(./Desgins/Skins/whiteSkin.png)";
  }
  
  // Shop [ Buy / Select | blue skin ]
  var ownBlue = false;
  function blueSkin() {
    if (ownBlue == false && gold > 99) {
      document.getElementById("player").style.backgroundImage = "url(./Desgins/Skins/blueSkin.png)";
      document.getElementById("blue").innerHTML = "Blue";
      gold -= 100;
      ownBlue = true;
    }
    if (ownBlue == true) {
      document.getElementById("player").style.backgroundImage = "url(./Desgins/Skins/blueSkin.png)";
    }
  }
  
  // Shop [ Buy / Select | pink skin ]
  var ownPink = false;
  function pinkSkin() {
    if (ownPink == false && gold > 99) {
      document.getElementById("player").style.backgroundImage = "url(./Desgins/Skins/pinkSkin.png)";
      document.getElementById("pink").innerHTML = "Pink";
      gold -= 100;
      ownPink = true;
    }
    if (ownPink == true) {
      document.getElementById("player").style.backgroundImage = "url(./Desgins/Skins/pinkSkin.png)";
    }
  }
  
  // Shop [ Buy / Select | red skin ]
  var ownRed = false;
  function redSkin() {
    if (ownRed == false && gold > 99) {
      document.getElementById("player").style.backgroundImage = "url(./Desgins/Skins/redSkin.png)";
      document.getElementById("red").innerHTML = "Red";
      gold -= 100;
      ownRed = true;
    }
    if (ownRed == true) {
      document.getElementById("player").style.backgroundImage = "url(./Desgins/Skins/redSkin.png)";
    }
  }
  
  // Shop [ Buy / Select | dog skin ] // Error
  var ownDog = false;
  function dogSkin() {
    if (ownDog == false && gold > 999) {
      document.getElementById("player").style.backgroundImage = "url(./Designs/Skins/dogSkin.png)";
      document.getElementById("dog").innerHTML = "Dog";
      gold -= 1000;
      ownDog = true;
    }
    if (ownDog == true) {
      document.getElementById("player").style.backgroundImage = "url(./Designs/Skins/dogSkin.png)";
    }
  }