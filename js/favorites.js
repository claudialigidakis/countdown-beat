let favoriteCountDowns = JSON.parse(localStorage.getItem('favorites'));

let favoriteBtns = []
let btnContent;
for (let i = 0; i < favoriteCountDowns.length; i++) {
  let title;
  if (favoriteCountDowns[i].songName.includes('finalCountdown.mp3')) {
    title = "Final Countdown"
    favoriteCountDowns[i].songName = 'finalCountdown'
  }
  if (favoriteCountDowns[i].songName.includes('teamWork.mp3')) {
    title = "Team Work"
    favoriteCountDowns[i].songName = 'teamWork'
  }
  if (favoriteCountDowns[i].songName.includes('dragonForce.mp3')) {
    title = "Dragon Force"
    favoriteCountDowns[i].songName = 'dragonForce'
}
  btnContent = title + " Second: " + favoriteCountDowns[i].sec + " Minute: " + favoriteCountDowns[i].min + " Hour: " + favoriteCountDowns[i].hour;
  let newBtn = '<button class="button">' + '<span>' + btnContent+ '</span>' + '</button>' + '<button class="btn">' + '<i class="fa fa-edit">' + '</i>' + '</button>' +  '<br>';

  favoriteBtns.push(newBtn)
  document.querySelector("#demo").innerHTML = favoriteBtns.join(" ");
}

//how to edit button names

function getNewTitle() {
    var NewTitle = prompt("Please enter the new title", "CountDown Playlist");
    if (NewTitle != null) {
        return NewTitle
    }
}

let newBtnTitle = document.querySelectorAll('.btn')
for (let i=0; i < newBtnTitle.length; i++) {
  newBtnTitle[i].addEventListener("click", function(){
    buttons[i].innerHTML = getNewTitle()
  })
}


//how to link favorite buttons to the new countdown page
let buttons = document.querySelectorAll('.button')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let input_hour = favoriteCountDowns[i].hour
    if (input_hour == "") input_hour = 0;

    let input_min = favoriteCountDowns[i].min
    if (input_min == "") input_min = 0;

    let input_sec = favoriteCountDowns[i].sec
    if (input_sec == "") input_sec = 0;

    let genrePicked = favoriteCountDowns[i].songName

    window.location = `/countdown.html?h=${input_hour}&m=${input_min}&s=${input_sec}&genre=${genrePicked}`
  })
}
