placeGold();

let openNameList = false;
let walkingValue = 0;
let username = "187";

// Movement [ Player ]
let player = document.getElementById("player");
let movePlayer = 10;
window.addEventListener("keydown", (e) => {
  let leftpos = parseInt(
    window.getComputedStyle(player).getPropertyValue("left")
  );
  let toppos = parseInt(
    window.getComputedStyle(player).getPropertyValue("top")
  );

  if (!openNameList) {
    switch (e.key) {
      case "a":
        walkingValue += 1;
        player.style.left = leftpos - movePlayer + "px";
        break;
      case "d":
        walkingValue += 1;
        player.style.left = leftpos + movePlayer + "px";
        break;
      case "w":
        walkingValue += 1;
        player.style.top = toppos - movePlayer + "px";
        break;
      case "s":
        walkingValue += 1;
        player.style.top = toppos + movePlayer + "px";
    }
  }

  switch (e.key) {
    case "F2":
      ChangeName();
  }

  // Border [ Player ]
  let left = parseInt(document.getElementById("player").style.left);
  let top = parseInt(document.getElementById("player").style.top);
  if (left < 0) {
    document.getElementById("player").style.left = "0px";
    walkingValue -= 1;
  }
  if (left > 700) {
    document.getElementById("player").style.left = "700px";
    walkingValue -= 1;
  }
  if (top < 0) {
    document.getElementById("player").style.top = "0px";
    walkingValue -= 1;
  }
  if (top > 460) {
    document.getElementById("player").style.top = "460px";
    walkingValue -= 1;
  }
});

// Places the gold [ Generates variable with random cordinates in the matchfield to place them random ]
function placeGold() {
  let randomX = Math.floor(Math.random() * 47) * 10;
  let randomY = Math.floor(Math.random() * 71) * 10;
  document.getElementById("gold").style.top = randomX + "px";
  document.getElementById("gold").style.left = randomY + "px";
}

// Creates variable ( X & Y ) : [ player | gold | opponent ]
let playerPositionX;
let playerPositionY;
let goldPositionX;
let goldPositionY;
let opponentPositionX;
let opponentPositionY;

// To be able to take gold | To be able to lose | Updates stats | ( ! Should make the opponent faster ! )
let score = 0;
let gold = 0;
let score1 = 0;
let score5 = 0;
let score10 = 0;
let highscore = 0;
let intervalSpeed = 400;
let intervalId = setInterval(oppnentChasingYou, intervalSpeed);
let opponentTempo = 0;

setInterval(() => {
  // functions to update position
  updatePlayerPosition();
  updateGoldPosition();
  updateOpponentPosition();

  // Adds the Variable 1 more unit if you pick the gold up : [ gold | score | score5 ]
  if (
    (goldPositionX === playerPositionX && goldPositionY === playerPositionY) ||
    (playerPositionX + 10 == goldPositionX &&
      playerPositionY == goldPositionY) ||
    (playerPositionX + 10 == goldPositionX &&
      playerPositionY + 10 == goldPositionY) ||
    (playerPositionX == goldPositionX && playerPositionY + 10 == goldPositionY)
  ) {
    placeGold();
    gold += 1;
    score += 1;
    score1 += 1;
    saveScore();
  }

  if (score1 == 1) {
    score1 = 0;
    generateJewelLuck();
    changeIntervalSpeed();
  }

  if (score5 == 5) {
    score5 = 0;
    changeIntervalSpeed5();
  }

  if ((score10 = 10)) {
    score10 = 0; // Change!!!!!!!!!!!!
  }

  // Dying if the opponent chatches you
  if (
    (playerPositionX + 10 == opponentPositionX &&
      playerPositionY + 10 == opponentPositionY) ||
    (playerPositionX + 10 == opponentPositionX &&
      playerPositionY - 10 == opponentPositionY) ||
    (playerPositionX - 10 == opponentPositionX &&
      playerPositionY + 10 == opponentPositionY) ||
    (playerPositionX - 10 == opponentPositionX &&
      playerPositionY - 10 == opponentPositionY) ||
    (playerPositionX == opponentPositionX &&
      playerPositionY - 10 == opponentPositionY) ||
    (playerPositionX - 10 == opponentPositionX &&
      playerPositionY == opponentPositionY) ||
    (playerPositionX == opponentPositionX &&
      playerPositionY + 10 == opponentPositionY) ||
    (playerPositionX + 10 == opponentPositionX &&
      playerPositionY == opponentPositionY)
  ) {
    gameOver();
  }

  // Update stats: [ gold | score | highscore | Tempo ]
  document.getElementById("goldValue").innerHTML = "GOLD : " + gold;
  document.getElementById("scoreValue").innerHTML = "SCORE : " + score;
  document.getElementById("highscoreValue").innerHTML =
    "HIGHSCORE : " + highscore;
  document.getElementById("tempoValue").innerHTML = "Tempo : " + opponentTempo;

  if (score > highscore) {
    highscore = score;
  }

  opponentTempo = ((400 / intervalSpeed) * 100).toFixed(2);
}, 15);

// Makes the opponent following you
function oppnentChasingYou() {
  if (openNameList == false) {
    if (opponentPositionX > playerPositionX) {
      document.getElementById("opponent").style.top =
        opponentPositionX - 10 + "px";
    }
    if (opponentPositionX < playerPositionX) {
      document.getElementById("opponent").style.top =
        opponentPositionX + 10 + "px";
    }
    if (opponentPositionY > playerPositionY) {
      document.getElementById("opponent").style.left =
        opponentPositionY - 10 + "px";
    }
    if (opponentPositionY < playerPositionY) {
      document.getElementById("opponent").style.left =
        opponentPositionY + 10 + "px";
    }
  }
}

function changeIntervalSpeed() {
  intervalSpeed *= 0.993093;
  clearInterval(intervalId);
  intervalId = setInterval(oppnentChasingYou, intervalSpeed);
}

function changeIntervalSpeed5() {
  intervalSpeed *= 0.993093 ** 5;
  clearInterval(intervalId);
  intervalId = setInterval(oppnentChasingYou, intervalSpeed);
}
