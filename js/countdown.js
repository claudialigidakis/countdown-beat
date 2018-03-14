(function() {
  const timeArray = window.location.search.slice(1).split('&').map(val => val.split('='))
  const timeObj = timeArray.reduce((acc, ele) => {
    acc[ele[0]] = ele[1]
    return acc
  }, {})
  if (timeObj['h'] && 0 <= timeObj['h'] && timeObj['h'] <= 3) {
    document.querySelector(".hours").innerHTML = timeObj.h;
  } else {
    document.querySelector(".hours").innerHTML = 0;
  }

  if (timeObj['m'] && 0 <= timeObj['m'] && timeObj['m'] <= 60) {
    document.querySelector(".minutes").innerHTML = timeObj.m;
  } else {
    document.querySelector(".minutes").innerHTML = 0;
  }

  if (timeObj['s'] && 0 <= timeObj['s'] && timeObj['s'] <= 60) {
    document.querySelector(".seconds").innerHTML = timeObj.s;
  } else {
    document.querySelector(".seconds").innerHTML = 0;
  }

  let musicSrc = ['music.mp3/underPressure.mp3', 'music.mp3/weAreTheChampions.mp3', 'music.mp3/longWayToTheTop.mp3', 'music.mp3/itTakesTwo.mp3', 'music.mp3/turnDownForWhat.mp3', 'music.mp3/eyeOfTheTiger.mp3', 'music.mp3/dragonForce.mp3', 'music.mp3/finalCountdown.mp3', 'music.mp3/teamWork.mp3']

  function shuffle(Src) {
    var currentIndex = Src.length,
      temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = Src[currentIndex];
      Src[currentIndex] = Src[randomIndex];
      Src[randomIndex] = temporaryValue;
    }
    return Src;
  }

  function playAll(Src) {
    shuffle(Src)
    return Src.splice(0, 1)
  }



  if (timeObj['genre'] === 'random') {
    shuffle(musicSrc)
    document.querySelector('#tracks').src = musicSrc[0]
  }
  if (timeObj['genre'] === 'finalCountdown') {
    document.querySelector('#tracks').src = "music.mp3/finalCountdown.mp3"
  }
  if (timeObj['genre'] === 'underPressure') {
    document.querySelector('#tracks').src = "music.mp3/underPressure.mp3"
  }
  if (timeObj['genre'] === 'longWayToTheTop') {
    document.querySelector('#tracks').src = "music.mp3/longWayToTheTop.mp3"
  }
  if (timeObj['genre'] === 'turnDownForWhat') {
    document.querySelector('#tracks').src = "music.mp3/turnDownForWhat.mp3"
  }
  if (timeObj['genre'] === 'itTakesTwo') {
    document.querySelector('#tracks').src = "music.mp3/itTakesTwo.mp3"
  }
  if (timeObj['genre'] === 'eyeOfTheTiger') {
    document.querySelector('#tracks').src = "music.mp3/eyeOfTheTiger.mp3"
  }

  if (timeObj['genre'] === 'teamWork') {
    document.querySelector('#tracks').src = "music.mp3/teamWork.mp3"
  }

  if (timeObj['genre'] === 'dragonForce') {
    document.querySelector('#tracks').src = "music.mp3/dragonForce.mp3"
  }
  if (timeObj['genre'] === 'weAreTheChampions') {
    document.querySelector('#tracks').src = "music.mp3/weAreTheChampions.mp3"
  }

  if (timeObj['genre'] === 'allSongs') {
    playAll(musicSrc)
    document.querySelector('#tracks').src = musicSrc[0]
  }

})();

var timer;

function settimer() {
  if (timer) return false
  let input_hour = parseInt(document.querySelector(".hours").innerHTML);
  let input_min = parseInt(document.querySelector(".minutes").innerHTML);
  let input_sec = parseInt(document.querySelector(".seconds").innerHTML);
  let startAudio = document.querySelector('#tracks')
  if (startAudio.currentTime === 0 && document.querySelector(".seconds").innerHTML > 0 || document.querySelector(".minutes").innerHTML > 0 || document.querySelector(".hours").innerHTML > 0) {
    startAudio.play()
    startAudio.currentTime = 45
  } else if (startAudio.currentTime > 0 && document.querySelector(".seconds").innerHTML > 0 || document.querySelector(".minutes").innerHTML > 0 || document.querySelector(".hours").innerHTML > 0) {
    startAudio.play()
  }


  let input_time = (3600 * input_hour + 60 * input_min + input_sec) * 1000
  let nowTime = new Date().getTime(); // Get Current date time
  let endTime = input_time + nowTime // Arrange values in Date Time Format
  let second = 1000; // Total Millisecond In One Sec
  let minute = second * 60; // Total Sec In One Min
  let hour = minute * 60; // Total Min In One Hour

  function showtimer() {
    var remainTime = endTime - new Date().getTime() // Get The Difference Between Current and entered date time
    if (remainTime < 0) {
      document.querySelector('#tracks').pause();
      clearInterval(timer);
      return;
    }

    var leftHours = Math.floor(remainTime / hour);
    var leftMinutes = Math.floor((remainTime % hour) / minute);
    var leftSeconds = Math.floor((remainTime % minute) / second);

    document.querySelector(".hours").innerHTML = leftHours;
    document.querySelector(".minutes").innerHTML = leftMinutes;
    document.querySelector(".seconds").innerHTML = leftSeconds;
  }
  timer = setInterval(showtimer, 1000); // Display Timer In Every 1 Sec

}


let stop = document.querySelector('#stop');
let clear = document.querySelector('#clear');
let reset = document.querySelector('#reset');

reset.addEventListener("click", function(event) {
  location.reload();
})

stop.addEventListener("click", function(event) {
  document.querySelector('#tracks').pause();
  clearInterval(timer);
  timer = null;
})

clear.addEventListener("click", function(event) {
  document.querySelector('#tracks').pause();
  clearInterval(timer);
  timer = null;
  document.querySelector(".hours").innerHTML = 0;
  document.querySelector(".minutes").innerHTML = 0;
  document.querySelector(".seconds").innerHTML = 0;
})




//local storage for favorites

function compareObj(objA, objB) {
  return objA.songName.includes(objB.songName) &&
    objA.sec === objB.sec &&
    objA.min === objB.min &&
    objA.hour === objB.hour
}

function highlight() {
  favorite.style.color = "yellow"
}

function verifyFav(newSong, songArray) {
  for (let i = 0; i < songArray.length; i++) {
    if (compareObj(newSong, songArray[i])) {
      return alert("Song already added to favorites")
    }
  }
  return songArray.push(newSong)
}


let favorite = document.querySelector("#favorite")
let favSongSrc = document.querySelector('#tracks').src
let favTimeHours = document.querySelector(".hours").innerHTML
let favTimeMins = document.querySelector(".minutes").innerHTML
let favTimeSec = document.querySelector(".seconds").innerHTML
let localList = localStorage.getItem('favorites')
let songs = JSON.parse(localList)

favorite.addEventListener("click", function(event) {

  if (songs == null) {
    songs = []
  }
  let song = {
    songName: favSongSrc,
    sec: favTimeSec,
    min: favTimeMins,
    hour: favTimeHours
  }

  sLength = songs.length

  if (sLength === 0) {
    highlight()
    songs.push(song)
  } else if (sLength > 0) {
    highlight()
    verifyFav(song, songs);
  }


  localStorage.setItem('favorites', JSON.stringify(songs))
})
