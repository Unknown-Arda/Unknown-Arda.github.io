function ChangeName() {
  openNameList = !openNameList;

  if (openNameList == true) {
    document.getElementById("nameTagDiv").style.display = "block";
  }

  if (openNameList == false) {
    document.getElementById("nameTagDiv").style.display = "none";
  }

  const nameTag = document.getElementById("nameTag");
  nameTag.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      username = nameTag.value;
      playerName.innerText = username;
      document.getElementById("nameTagDiv").style.display = "none";
      openNameList = false;
      saveScore();
    }
  });
}
