let bulletPositionX;
let bulletPositionY;
let randomY;
let bulletR = true;
let bulletL = false;
let generateOnce = true;

function generateRandomBulletPositionY() {
    randomY = Math.floor(Math.random() * 47) * 10;
    generateOnce = false;
}

generateRandomBulletPositionY();

setInterval(() => {

    // functions to update position
    updateBulletPosition();

    // Container 01
    if (bulletPositionX == 20) {
        generateOnce = true;
    }

    // Container 02
    if (bulletPositionX == 0 && generateOnce == true) {
        bulletL = true;
        bulletR = false;
        generateRandomBulletPositionY();
    } if (bulletPositionX == 710 && generateOnce == true) {
        bulletL = false;
        bulletR = true;
        generateRandomBulletPositionY();
    }

    if (openNameList == false) {
        // Container 03
        if (bulletPositionY - 10 > randomY && score > 19) {
            bulletPositionY -= 10;
            document.getElementById("bullet1").style.top = bulletPositionY + "px";
        } if (bulletPositionY - 10 < randomY) {
            bulletPositionY += 10;
            document.getElementById("bullet1").style.top = bulletPositionY + "px";
        }

        // Container 04
        if (bulletPositionY - 10 == randomY && bulletR == true) {
            bulletPositionX -= 10
            document.getElementById("bullet1").style.left = bulletPositionX + "px";
        } if (bulletPositionY - 10 == randomY && bulletL == true) {
            bulletPositionX += 10
            document.getElementById("bullet1").style.left = bulletPositionX + "px";
        }
    }


}, 80);

setInterval(() => {

    if (bulletPositionX == playerPositionY && bulletPositionY == playerPositionX
        || bulletPositionX - 10 == playerPositionY && bulletPositionY - 10 == playerPositionX
        || bulletPositionX - 10 == playerPositionY && bulletPositionY == playerPositionX
        || bulletPositionX == playerPositionY && bulletPositionY - 10 == playerPositionX
    ) {
        gameOver();
    }

}, 20);