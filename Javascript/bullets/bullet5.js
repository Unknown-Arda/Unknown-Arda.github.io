let bullet5PositionX;
let bullet5PositionY;
let randomY5;
let bullet5R = true;
let bullet5L = false;
let generateOnce5 = true;

function generateRandombullet5PositionY() {
    randomY5 = Math.floor(Math.random() * 47) * 10;
    generateOnce5 = false;
}

generateRandombullet5PositionY();

setInterval(() => {

    // functions to update position
    updatebullet5Position();

    // Container 01
    if (bullet5PositionX == 20) {
        generateOnce5 = true;
    }

    // Container 02
    if (bullet5PositionX == 0 && generateOnce5 == true) {
        bullet5L = true;
        bullet5R = false;
        generateRandombullet5PositionY();
    } if (bullet5PositionX == 710 && generateOnce5 == true) {
        bullet5L = false;
        bullet5R = true;
        generateRandombullet5PositionY();
    }

    if (openNameList == false) {
        // Container 03
        if (bullet5PositionY - 10 > randomY5 && score > 99) {
            bullet5PositionY -= 10;
            document.getElementById("bullet5").style.top = bullet5PositionY + "px";
        } if (bullet5PositionY - 10 < randomY5) {
            bullet5PositionY += 10;
            document.getElementById("bullet5").style.top = bullet5PositionY + "px";
        }

        // Container 04
        if (bullet5PositionY - 10 == randomY5 && bullet5R == true) {
            bullet5PositionX -= 10
            document.getElementById("bullet5").style.left = bullet5PositionX + "px";
        } if (bullet5PositionY - 10 == randomY5 && bullet5L == true) {
            bullet5PositionX += 10
            document.getElementById("bullet5").style.left = bullet5PositionX + "px";
        }
    }


}, 80);

setInterval(() => {

    if (bullet5PositionX == playerPositionY && bullet5PositionY == playerPositionX
        || bullet5PositionX - 10 == playerPositionY && bullet5PositionY - 10 == playerPositionX
        || bullet5PositionX - 10 == playerPositionY && bullet5PositionY == playerPositionX
        || bullet5PositionX == playerPositionY && bullet5PositionY - 10 == playerPositionX
    ) {
        gameOver();
    }

}, 20);