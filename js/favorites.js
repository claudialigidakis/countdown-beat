let favoriteCountDowns = JSON.parse(localStorage.getItem('favorites'));


//how to populate favorites
let favoriteBtns = []
let btnContent;
for (let i = 0; i < favoriteCountDowns.length; i++) {
  let title;
  //renaming song titles
  if (favoriteCountDowns[i].songName.includes('finalCountdown')) {
    title = "Final Countdown"
    favoriteCountDowns[i].songName = 'finalCountdown'
  }
  if (favoriteCountDowns[i].songName.includes('underPressure')) {
    title = "Under Pressure"
    favoriteCountDowns[i].songName = 'underPressure'
  }
  if (favoriteCountDowns[i].songName.includes('longWayToTheTop')) {
    title = "Long Way To The Top"
    favoriteCountDowns[i].songName = 'longWayToTheTop'
  }
  if (favoriteCountDowns[i].songName.includes('eyeOfTheTiger')) {
    title = "Eye of the Tiger"
    favoriteCountDowns[i].songName = 'eyeOfTheTiger'
  }
  if (favoriteCountDowns[i].songName.includes('weAreTheChampions')) {
    title = "We Are The Champions"
    favoriteCountDowns[i].songName = 'weAreTheChampions'
  }
  if (favoriteCountDowns[i].songName.includes('teamWork')) {
    title = "Team Work"
    favoriteCountDowns[i].songName = 'teamWork'
  }
  if (favoriteCountDowns[i].songName.includes('turnDownForWhat')) {
    title = "Turn Down For What"
    favoriteCountDowns[i].songName = 'turnDownForWhat'
  }
  if (favoriteCountDowns[i].songName.includes('itTakesTwo')) {
    title = "It Takes Two"
    favoriteCountDowns[i].songName = 'itTakesTwo'
  }
  if (favoriteCountDowns[i].songName.includes('dragonForce')) {
    title = "Dragon Force"
    favoriteCountDowns[i].songName = 'dragonForce'
  }

  //updating custom title
  if (!favoriteCountDowns[i].newBtnTitle) {
    btnContent = title + " Hour: " + favoriteCountDowns[i].hour + " Minute: " + favoriteCountDowns[i].min + " Second: " + favoriteCountDowns[i].sec;
  } else {
    btnContent = favoriteCountDowns[i].newBtnTitle
  }

  //adding new buttons

  let newBtn = '<button class="button">' + '<span>' + btnContent + '</span>' + '</button>' + '<button class="btn">' + '<i class="fa fa-edit">' + '</i>' + '</button>' + '<button class="btn">' + '<i class="fa fa-remove">' + '</i>' + '</button>' + '<br>';

  favoriteBtns.push(newBtn)
  document.querySelector("#demo").innerHTML = favoriteBtns.join(" ");
}

//how to edit button names

function getNewTitle(button, i) {
  $('#basicModal').modal();
  let form = document.querySelector('#formInput')
  form.addEventListener("submit", function(event) {
    event.preventDefault()
    let NewTitle = document.querySelector('#submitTitle').value
    if (NewTitle !== '' || NewTitle !== undefined || NewTitle !== 'undefined') {
      button.innerHTML = NewTitle
      favoriteCountDowns[i]["newBtnTitle"] = NewTitle;
      localStorage.setItem('favorites', JSON.stringify(favoriteCountDowns))
    } else if (NewTitle == '' || NewTitle == undefined || NewTitle == 'undefined') {
      alert("Need to enter a valid title")
      return buttons[i].innerHTML
    }
  })
}

let newBtnTitle = document.querySelectorAll('.fa-edit')
for (let i = 0; i < newBtnTitle.length; i++) {
  newBtnTitle[i].addEventListener("click", function() {
    getNewTitle(buttons[i], i)
  })
}

//removing button
let removeFavorite = document.querySelectorAll('.fa-remove')
for (let i = 0; i < removeFavorite.length; i++) {
  removeFavorite[i].addEventListener("click", function() {
    let localList = localStorage.getItem('favorites')
    favoriteCountDowns = JSON.parse(localList)
    favoriteCountDowns.splice(i, 1)
    localStorage.setItem('favorites', JSON.stringify(favoriteCountDowns))
    location.reload();
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
