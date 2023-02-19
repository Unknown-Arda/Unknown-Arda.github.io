let jewelProbability = 0;
let canJuwelTeleport = true;

function placeJewel() {
    let randomJX = Math.floor(Math.random() * 47) * 10;
    let randomJY = Math.floor(Math.random() * 71) * 10;
    document.getElementById("jewel").style.top = randomJX + 'px';
    document.getElementById("jewel").style.left = randomJY + 'px';
}

function generateJewelLuck() {
    jewelProbability = Math.floor(Math.random() * 10);
}

function updateJewelPosition() {
    jewelPositionX = document.getElementById("jewel").offsetTop;
    jewelPositionY = document.getElementById("jewel").offsetLeft;
}

setInterval(() => {

    updateJewelPosition();
    console.log("J = " + jewelProbability)

    if (jewelProbability == 9 && canJuwelTeleport == true) {
        placeJewel()
        jewelProbability = 0;
        canJuwelTeleport = false;
    }

    if (jewelPositionX === playerPositionX && jewelPositionY === playerPositionY
        || playerPositionX + 10 == jewelPositionX && playerPositionY == jewelPositionY
        || playerPositionX + 10 == jewelPositionX && playerPositionY + 10 == jewelPositionY
        || playerPositionX == jewelPositionX && playerPositionY + 10 == jewelPositionY
    ) {
        document.getElementById("jewel").style.top = 500 + 'px';
        document.getElementById("jewel").style.left = 710 + 'px';
        canJuwelTeleport = true;
        score += 5;
        gold += 5;
    }

}, 20);

let jewelAnim = 1;

setInterval(() => {

    jewelAnim += 1;

    if (jewelAnim == -3) {
        document.getElementById("jewel").style.backgroundImage = "url(../Desgins/jewel.anim/jewelanim1.png)";
    }

    if (jewelAnim == -2) {
        document.getElementById("jewel").style.backgroundImage = "url(../Desgins/jewel.anim/jewelanim1.png)";
    }

    if (jewelAnim == -1) {
        document.getElementById("jewel").style.backgroundImage = "url(../Desgins/jewel.anim/jewelanim1.png)";
    }

    if (jewelAnim == 1) {
        document.getElementById("jewel").style.backgroundImage = "url(../Desgins/jewel.anim/jewelanim1.png)";
    }

    if (jewelAnim == 2) {
        document.getElementById("jewel").style.backgroundImage = "url(../Desgins/jewel.anim/jewelanim1.png)";
    }

    if (jewelAnim == 3) {
        document.getElementById("jewel").style.backgroundImage = "url(../Desgins/jewel.anim/jewelanim3.png)";
    }

    if (jewelAnim == 4) {
        document.getElementById("jewel").style.backgroundImage = "url(../Desgins/jewel.anim/jewelanim4.png)";
        jewelAnim = -2;
    }

}, 200);