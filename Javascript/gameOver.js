function gameOver(){
    score = 0;
    player.style.left = 10 + 'px';
    player.style.top = 10 + 'px';
    document.getElementById("opponent").style.left = 690 + 'px';
    document.getElementById("opponent").style.top = 450 + 'px';
    intervalSpeed = 400;
    clearInterval(intervalId);
    intervalId = setInterval(oppnentChasingYou, intervalSpeed);
    document.getElementById("bullet1").style.left = 710 + 'px';
    document.getElementById("bullet1").style.top = 500 + 'px';
    document.getElementById("bullet2").style.left = 710 + 'px';
    document.getElementById("bullet2").style.top = 500 + 'px';
    document.getElementById("bullet3").style.left = 710 + 'px';
    document.getElementById("bullet3").style.top = 500 + 'px';
    document.getElementById("bullet4").style.left = 710 + 'px';
    document.getElementById("bullet4").style.top = 500 + 'px';
    document.getElementById("bullet5").style.left = 710 + 'px';
    document.getElementById("bullet5").style.top = 500 + 'px';
}