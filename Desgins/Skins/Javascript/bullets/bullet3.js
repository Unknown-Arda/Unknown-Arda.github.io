let bullet3PositionX;
let bullet3PositionY;
let randomY3;
let bullet3R = true;
let bullet3L = false;
let generateOnce3 = true;

function generateRandombullet3PositionY() {
    randomY3 = Math.floor(Math.random() * 47) * 10;
    generateOnce3 = false;
}

generateRandombullet3PositionY();

setInterval(() => {

    // functions to update position
    updateBullet3Position();

    // Container 01
    if (bullet3PositionX == 20) {
        generateOnce3 = true;
    }

    // Container 02
    if (bullet3PositionX == 0 && generateOnce3 == true) {
        bullet3L = true;
        bullet3R = false;
        generateRandombullet3PositionY();
    } if (bullet3PositionX == 710 && generateOnce3 == true) {
        bullet3L = false;
        bullet3R = true;
        generateRandombullet3PositionY();
    }

    if (openNameList == false) {
        // Container 03
        if (bullet3PositionY - 10 > randomY3 && score > 59) {
            bullet3PositionY -= 10;
            document.getElementById("bullet3").style.top = bullet3PositionY + "px";
        } if (bullet3PositionY - 10 < randomY3) {
            bullet3PositionY += 10;
            document.getElementById("bullet3").style.top = bullet3PositionY + "px";
        }
        
        // Container 04
        if (bullet3PositionY - 10 == randomY3 && bullet3R == true) {
            bullet3PositionX -= 10
            document.getElementById("bullet3").style.left = bullet3PositionX + "px";
        } if (bullet3PositionY - 10 == randomY3 && bullet3L == true) {
            bullet3PositionX += 10
            document.getElementById("bullet3").style.left = bullet3PositionX + "px";
        }
    }


}, 80);

setInterval(() => {

    if (bullet3PositionX == playerPositionY && bullet3PositionY == playerPositionX
        || bullet3PositionX - 10 == playerPositionY && bullet3PositionY - 10 == playerPositionX
        || bullet3PositionX - 10 == playerPositionY && bullet3PositionY == playerPositionX
        || bullet3PositionX == playerPositionY && bullet3PositionY - 10 == playerPositionX
    ) {
        gameOver();
    }

}, 20);