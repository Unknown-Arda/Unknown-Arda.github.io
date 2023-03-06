let bullet2PositionX;
let bullet2PositionY;
let randomY2;
let bullet2R = true;
let bullet2L = false;
let generateOnce2 = true;

function generateRandombullet2PositionY() {
    randomY2 = Math.floor(Math.random() * 47) * 10;
    generateOnce2 = false;
}

generateRandombullet2PositionY();

setInterval(() => {

    // functions to update position
    updateBullet2Position();

    // Container 01
    if (bullet2PositionX == 20) {
        generateOnce2 = true;
    }

    // Container 02
    if (bullet2PositionX == 0 && generateOnce2 == true) {
        bullet2L = true;
        bullet2R = false;
        generateRandombullet2PositionY();
    } if (bullet2PositionX == 710 && generateOnce2 == true) {
        bullet2L = false;
        bullet2R = true;
        generateRandombullet2PositionY();
    }

    if (openNameList == false) {
        // Container 03
        if (bullet2PositionY - 10 > randomY2 && score > 39) {
            bullet2PositionY -= 10;
            document.getElementById("bullet2").style.top = bullet2PositionY + "px";
        } if (bullet2PositionY - 10 < randomY2) {
            bullet2PositionY += 10;
            document.getElementById("bullet2").style.top = bullet2PositionY + "px";
        }
        
        // Container 04
        if (bullet2PositionY - 10 == randomY2 && bullet2R == true) {
            bullet2PositionX -= 10
            document.getElementById("bullet2").style.left = bullet2PositionX + "px";
        } if (bullet2PositionY - 10 == randomY2 && bullet2L == true) {
            bullet2PositionX += 10
            document.getElementById("bullet2").style.left = bullet2PositionX + "px";
        }
    }


}, 80);

setInterval(() => {

    if (bullet2PositionX == playerPositionY && bullet2PositionY == playerPositionX
        || bullet2PositionX - 10 == playerPositionY && bullet2PositionY - 10 == playerPositionX
        || bullet2PositionX - 10 == playerPositionY && bullet2PositionY == playerPositionX
        || bullet2PositionX == playerPositionY && bullet2PositionY - 10 == playerPositionX
    ) {
        gameOver();
    }

}, 20);