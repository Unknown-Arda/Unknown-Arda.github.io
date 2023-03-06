let bullet4PositionX;
let bullet4PositionY;
let randomY4;
let bullet4R = true;
let bullet4L = false;
let generateOnce4 = true;

function generateRandombullet4PositionY() {
    randomY4 = Math.floor(Math.random() * 47) * 10;
    generateOnce4 = false;
}

generateRandombullet4PositionY();

setInterval(() => {

    // functions to update position
    updateBullet4Position();

    // Container 01
    if (bullet4PositionX == 20) {
        generateOnce4 = true;
    }

    // Container 02
    if (bullet4PositionX == 0 && generateOnce4 == true) {
        bullet4L = true;
        bullet4R = false;
        generateRandombullet4PositionY();
    } if (bullet4PositionX == 710 && generateOnce4 == true) {
        bullet4L = false;
        bullet4R = true;
        generateRandombullet4PositionY();
    }

    if (openNameList == false) {
        // Container 03
        if (bullet4PositionY - 10 > randomY4 && score > 79) {
            bullet4PositionY -= 10;
            document.getElementById("bullet4").style.top = bullet4PositionY + "px";
        } if (bullet4PositionY - 10 < randomY4) {
            bullet4PositionY += 10;
            document.getElementById("bullet4").style.top = bullet4PositionY + "px";
        }

        // Container 04
        if (bullet4PositionY - 10 == randomY4 && bullet4R == true) {
            bullet4PositionX -= 10
            document.getElementById("bullet4").style.left = bullet4PositionX + "px";
        } if (bullet4PositionY - 10 == randomY4 && bullet4L == true) {
            bullet4PositionX += 10
            document.getElementById("bullet4").style.left = bullet4PositionX + "px";
        }
    }


}, 80);

setInterval(() => {

    if (bullet4PositionX == playerPositionY && bullet4PositionY == playerPositionX
        || bullet4PositionX - 10 == playerPositionY && bullet4PositionY - 10 == playerPositionX
        || bullet4PositionX - 10 == playerPositionY && bullet4PositionY == playerPositionX
        || bullet4PositionX == playerPositionY && bullet4PositionY - 10 == playerPositionX
    ) {
        gameOver();
    }

}, 20);