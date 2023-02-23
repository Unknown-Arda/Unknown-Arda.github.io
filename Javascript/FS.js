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

// Places the gold [ Generates variable with random cordinates in the matchfield to place them random ]
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

// To be able to take gold | To be able to lose | Updates stats | ( ! Should make the opponent faster ! )
let score = 0;
let gold = 0;
let score1 = 0;

let intervalSpeed = 400;
let intervalId = setInterval(oppnentChasingYou, intervalSpeed);


setInterval(() => {

  // functions to update position
  updatePlayerPosition();
  updateGoldPosition();
  updateOpponentPosition();

  // Adds the Variable 1 more unit if you pick the gold up : [ gold | score | score5 ]
  if (goldPositionX === playerPositionX && goldPositionY === playerPositionY
    || playerPositionX + 10 == goldPositionX && playerPositionY == goldPositionY
    || playerPositionX + 10 == goldPositionX && playerPositionY + 10 == goldPositionY
    || playerPositionX == goldPositionX && playerPositionY + 10 == goldPositionY
  ) {
    placeGold();
    gold += 1;
    score += 1;
    score1 += 1;
  }

  if (score1 == 1) {
    score1 = 0;
    generateJewelLuck()
    changeIntervalSpeed()
  }

  if (score5 == 5) {
    score5 = 0;
    changeIntervalSpeed5()
  }

  // Dying if the opponent chatches you
  if (playerPositionX + 10 == opponentPositionX && playerPositionY + 10 == opponentPositionY
    || playerPositionX + 10 == opponentPositionX && playerPositionY - 10 == opponentPositionY
    || playerPositionX - 10 == opponentPositionX && playerPositionY + 10 == opponentPositionY
    || playerPositionX - 10 == opponentPositionX && playerPositionY - 10 == opponentPositionY
    || playerPositionX == opponentPositionX && playerPositionY - 10 == opponentPositionY
    || playerPositionX - 10 == opponentPositionX && playerPositionY == opponentPositionY
    || playerPositionX == opponentPositionX && playerPositionY + 10 == opponentPositionY
    || playerPositionX + 10 == opponentPositionX && playerPositionY == opponentPositionY
  ) {
    location.reload();
  }

  // Update stats: [ gold | score ]
  document.getElementById("goldValue").innerHTML = "GOLD : " + gold;
  document.getElementById("scoreValue").innerHTML = "SCORE : " + score;

}, 15);

// Makes the opponent following you
function oppnentChasingYou() {
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