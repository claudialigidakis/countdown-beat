let favoriteCountDowns = JSON.parse(localStorage.getItem('favorites'));

let favoriteBtns = []

for (let i = 0; i < favoriteCountDowns.length; i++) {
  if (favoriteCountDowns[i].songName.includes('music.mp3/finalCountdown.mp3')) favoriteCountDowns[i].songName = "Final Countdown"
  if (favoriteCountDowns[i].songName.includes('music.mp3/teamWork.mp3')) favoriteCountDowns[i].songName = "Team Work"
  if (favoriteCountDowns[i].songName.includes('music.mp3/dragonForce.mp3')) favoriteCountDowns[i].songName = "Dragon Force"

  let newBtn = '<button id="newBtn">' + '<span>'+ favoriteCountDowns[i].songName + " Second: " + favoriteCountDowns[i].sec + " Minute: " + favoriteCountDowns[i].min + " Hour: " + favoriteCountDowns[i].hour + '</span>' + "</button>" + "<br>";

  favoriteBtns.push(newBtn)
  document.querySelector("#demo").innerHTML = favoriteBtns;
}




//how to link favorite buttons to the new countdown page



newBtn.onclick = function() {
  alert("it works")
}
