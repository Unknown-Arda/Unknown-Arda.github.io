// Update Position [ player | gold | opponent | jewel ]
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

function updateJewelPosition() {
    jewelPositionX = document.getElementById("jewel").offsetTop;
    jewelPositionY = document.getElementById("jewel").offsetLeft;
}

function updateFCPosition() {
    FCPositionX = document.getElementById("FC").offsetTop;
    FCPositionY = document.getElementById("FC").offsetLeft;
}

// updates Position [ bullet1 | bullet2 | bullet3 | bullet4 | bullet5 ]
function updateBulletPosition() {
    bulletPositionX = document.getElementById("bullet1").offsetLeft;
    bulletPositionY = document.getElementById("bullet1").offsetTop;
}

function updateBullet2Position() {
    bullet2PositionX = document.getElementById("bullet2").offsetLeft;
    bullet2PositionY = document.getElementById("bullet2").offsetTop;
}

function updateBullet3Position() {
    bullet3PositionX = document.getElementById("bullet3").offsetLeft;
    bullet3PositionY = document.getElementById("bullet3").offsetTop;
}

function updateBullet4Position() {
    bullet4PositionX = document.getElementById("bullet4").offsetLeft;
    bullet4PositionY = document.getElementById("bullet4").offsetTop;
}

function updatebullet5Position() {
    bullet5PositionX = document.getElementById("bullet5").offsetLeft;
    bullet5PositionY = document.getElementById("bullet5").offsetTop;
}