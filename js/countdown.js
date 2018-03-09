(function() {
  const timeArray = window.location.search.slice(1).split('&').map(val => val.split('='))
  const timeObj = timeArray.reduce((acc, ele) => {
    acc[ele[0]] = ele[1]
    return acc
  }, {})
  console.log(timeObj.h)
  if (timeObj['h'] && 0 <= timeObj['h'] && timeObj['h'] <= 3) {
    document.querySelector(".hours").innerHTML = timeObj.h;
  } else {
    document.querySelector(".hours").innerHTML = 00;
  }

  if (timeObj['m'] && 0 <= timeObj['m'] && timeObj['m'] <= 60) {
    document.querySelector(".minutes").innerHTML = timeObj.m;
  } else {
    document.querySelector(".minutes").innerHTML = 00;
  }

  if (timeObj['s'] && 0 <= timeObj['s'] && timeObj['s'] <= 60) {
    document.querySelector(".seconds").innerHTML = timeObj.s;
  } else {
    document.querySelector(".seconds").innerHTML = 00;
  }


})();

function settimer() {
  let input_hour = parseInt(document.querySelector(".hours").innerHTML);
  let input_min = parseInt(document.querySelector(".minutes").innerHTML);
  let input_sec = parseInt(document.querySelector(".seconds").innerHTML);



  let input_time = (3600 * input_hour + 60 * input_min + input_sec) * 1000
  let nowTime = new Date().getTime(); // Get Current date time
  let endTime = input_time + nowTime // Arrange values in Date Time Format
  let second = 1000; // Total Millisecond In One Sec
  let minute = second * 60; // Total Sec In One Min
  let hour = minute * 60; // Total Min In One Hour


  function showtimer() {
    var remainTime = endTime - new Date().getTime() // Get The Difference Between Current and entered date time
    if (remainTime < 0) {
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

stop.addEventListener("click", function(event) {
  clearInterval(timer);
  timer = null;
})

clear.addEventListener("click", function(event) {
  clearInterval(timer);
  document.querySelector(".hours").innerHTML = '';
  document.querySelector(".minutes").innerHTML = '';
  document.querySelector(".seconds").innerHTML = '';
})
