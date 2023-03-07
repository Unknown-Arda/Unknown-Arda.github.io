/* COOKIES */
let goldSAVED = getScore("goldSAVED");
let highscoreSAVED = getScore("highscoreSAVED");
//skins
let ownBlueSAVED = getScore("ownBlueSAVED");
let ownPinkSAVED = getScore("ownPinkSAVED");
let ownRedSAVED = getScore("ownRedSAVED");

function loadScore() {
  /* load stats */
  highscore = highscoreSAVED;
  highscore = Math.floor(highscore);
  gold = goldSAVED;
  gold = Math.floor(gold);
  ownBlue = ownBlueSAVED;
  ownPink = ownPinkSAVED;
  ownRed = ownRedSAVED;

  if (ownBlue == "true") {
    document.getElementById("blue").innerHTML = "Blue";
  }
  if (ownPink == "true") {
    document.getElementById("pink").innerHTML = "Pink";
  }
  if (ownRed == "true") {
    document.getElementById("red").innerHTML = "Red";
  }
}

/* COOKIES */
function setScore(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";";
}

function getScore(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkScore() {
  if (goldSAVED != "" && goldSAVED != null) {
    alert("Your Score: " + goldSAVED);
    gold = goldSAVED;
    gold = Math.floor(gold);
  } else {
    alert("No saved data found!");
  }
}

function deleteScore() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function saveScore() {
  gold = Math.floor(gold);
  if (score > highscoreSAVED) {
    setScore("highscoreSAVED", score);
  }
  setScore("goldSAVED", gold);

  console.log("score saved!");

  //own blue
  if (ownBlue == "true") {
    setScore("ownBlueSAVED", "true");
  } else {
    setScore("ownBlueSAVED", "false");
  }
  //own pink
  if (ownPink == "true") {
    setScore("ownPinkSAVED", "true");
  } else {
    setScore("ownPinkSAVED", "false");
  }
  // own red
  if (ownRed == "true") {
    setScore("ownRedSAVED", "true");
  } else {
    setScore("ownRedSAVED", "false");
  }
}