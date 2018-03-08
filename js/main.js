let timer;

function settimer() {

  let input_hour = parseInt(document.querySelector("#hourInput").value);
  if (input_hour == "") input_hour = 0;
  let input_min = parseInt(document.querySelector("#minInput").value);
  if (input_min == "") input_min = 0;
  let input_sec = parseInt(document.querySelector("#secInput").value);
  if (input_sec == "") input_sec = 0;

  let input_time = (3600 * input_hour + 60 * input_min + input_sec) * 1000
  let nowTime = new Date().getTime();// Get Current date time
  let endTime = input_time + nowTime// Arrange values in Date Time Format
  let second = 1000; // Total Millisecond In One Sec
  let minute = second * 60; // Total Sec In One Min
  let hour = minute * 60; // Total Min In One Hour


  function showtimer() {
    console.log(input_time, endTime, nowTime)
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



// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let clear = document.querySelector('#clear');
// var timer;
//
// start.addEventListener("click", function(event) {
//   if (timer) return false
//   timer = setInterval(function(event) {
//     seconds--
//     // localStorage.setItem('second', JSON.stringify({ seconds: seconds}));
//     document.querySelector('#title span').innerHTML = seconds
//   }, 1000);
// })
// stop.addEventListener("click", function(event) {
//   clearInterval(timer);
//   timer = null;
// })
//
// clear.addEventListener("click", function(event) {
//   timer = 0
// })
