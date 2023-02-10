placeGold();

// Movement [ Player ]
let player = document.getElementById('player');
let movePlayer = 10;
window.addEventListener('keydown', (e) => {
  let leftpos = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  let toppos = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

  switch (e.key) {
    case 'a':
      player.style.left = leftpos - movePlayer + 'px';
      break;
    case 'd':
      player.style.left = leftpos + movePlayer + 'px';
      break;
    case 'w':
      player.style.top = toppos - movePlayer + 'px';
      break;
    case 's':
      player.style.top = toppos + movePlayer + 'px';
  }

  // Border [ Player ]
  let left = parseInt(document.getElementById("player").style.left);
  let top = parseInt(document.getElementById("player").style.top);
  if (left < 0) {
    document.getElementById("player").style.left = "0px";
  }
  if (left > 700) {
    document.getElementById("player").style.left = "700px";
  }
  if (top < 0) {
    document.getElementById("player").style.top = "0px";
  }
  if (top > 460) {
    document.getElementById("player").style.top = "460px";
  }
});

// Places the gold [ Generates variable with random cordinates in the div to place them random ]
function placeGold() {
  let randomX = Math.floor(Math.random() * 47) * 10;
  let randomY = Math.floor(Math.random() * 71) * 10;
  document.getElementById("gold").style.top = randomX + 'px';
  document.getElementById("gold").style.left = randomY + 'px';
}

// Creates variable ( X & Y ) : [ player | gold | opponent ]
let playerPositionX;
let playerPositionY;
let goldPositionX;
let goldPositionY;
let opponentPositionX;
let opponentPositionY;

// Update positions [ player | gold | opponent ]
function updateGoldPosition() {
  goldPositionX = document.getElementById("gold").offsetTop;
  goldPositionY = document.getElementById("gold").offsetLeft;
}
function updatePlayerPosition() {
  playerPositionX = document.getElementById("player").offsetTop;
  playerPositionY = document.getElementById("player").offsetLeft;
}
function updateOpponentPosition() {
  opponentPositionX = document.getElementById("opponent").offsetTop;
  opponentPositionY = document.getElementById("opponent").offsetLeft;
}

// Shop [ Select | white skin ]
function whiteSkin(){
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
  if(ownBlue == true){
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
  if(ownPink == true){
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
  if(ownRed == true){
    document.getElementById("player").style.backgroundColor = "rgb(211, 77, 77)";
    document.getElementById("player").style.backgroundImage = "none";
  }
}

// Shop [ Buy / Select | dog skin ]
var ownDog = false;
function dogSkin() {
  if (ownDog == false && gold > 99) {
    document.getElementById("player").style.backgroundImage = "url(./dogSkin.png)";
    document.getElementById("dog").innerHTML = "OWNED";
    gold -= 100;
    ownDog = true;
  }
  if(ownDog == true){
    document.getElementById("player").style.backgroundImage = "url(./dogSkin.png)";
  }
}


// To be able to take gold | To be able to lose | Updates stats | ( ! Should make the opponent faster ! )

// variables
let score = 0;
let gold = 0;
let score5 = 0;
let intervalSpeed = 500;

setInterval(() => {

  // functions to update position
  updatePlayerPosition();
  updateGoldPosition();
  updateOpponentPosition();

  // Adds the Variable 1 more unit if you pick the gold up : [ gold | score | score5 ]
  if (parseInt(goldPositionX) === parseInt(playerPositionX) && parseInt(goldPositionY) === parseInt(playerPositionY)) {
    placeGold();
    gold += 1;
    score += 1;
    score5 += 1;
  }
  if (playerPositionX + 10 == goldPositionX && playerPositionY == goldPositionY) {
    placeGold();
    gold += 1;
    score += 1;
    score5 += 1;
  }
  if (playerPositionX + 10 == goldPositionX && playerPositionY + 10 == goldPositionY) {
    placeGold();
    gold += 1;
    score += 1;
    score5 += 1;
  }
  if (playerPositionX == goldPositionX && playerPositionY + 10 == goldPositionY) {
    placeGold();
    gold += 1;
    score += 1;
    score5 += 1;
  }

  // Dying if the opponent chatches you
  if (playerPositionX + 10 == opponentPositionX && playerPositionY + 10 == opponentPositionY) {
    location.reload()
  }
  if (playerPositionX + 10 == opponentPositionX && playerPositionY - 10 == opponentPositionY) {
    location.reload()
  }
  if (playerPositionX - 10 == opponentPositionX && playerPositionY + 10 == opponentPositionY) {
    location.reload()
  }
  if (playerPositionX - 10 == opponentPositionX && playerPositionY - 10 == opponentPositionY) {
    location.reload()
  }
  if (playerPositionX == opponentPositionX && playerPositionY - 10 == opponentPositionY) {
    location.reload()
  }
  if (playerPositionX - 10 == opponentPositionX && playerPositionY == opponentPositionY) {
    location.reload()
  }
  if (playerPositionX == opponentPositionX && playerPositionY + 10 == opponentPositionY) {
    location.reload()
  }
  if (playerPositionX + 10 == opponentPositionX && playerPositionY == opponentPositionY) {
    location.reload()
  }

  // Update stats: [ gold | score ]
  document.getElementById("goldValue").innerHTML = "GOLD : " + gold;
  document.getElementById("scoreValue").innerHTML = "SCORE : " + score;

  // ( ! Should make the opponent faster ! )
  if (score5 == 5) {
    console.log("Test 03") // Test 03
    intervalSpeed -= 400;
    score5 = 0;
  }

}, 20);

// Makes the opponent following you
setInterval(() => {
  if (opponentPositionX > playerPositionX) {
    document.getElementById("opponent").style.top = opponentPositionX - 10 + 'px';
  }
  if (opponentPositionX < playerPositionX) {
    document.getElementById("opponent").style.top = opponentPositionX + 10 + 'px';
  }
  if (opponentPositionY > playerPositionY) {
    document.getElementById("opponent").style.left = opponentPositionY - 10 + 'px';
  }
  if (opponentPositionY < playerPositionY) {
    document.getElementById("opponent").style.left = opponentPositionY + 10 + 'px';
  }
}, intervalSpeed);