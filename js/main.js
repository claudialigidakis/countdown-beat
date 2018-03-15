let timer;

function goToCountdown() {
  let input_hour = parseInt(document.querySelector("#hourInput").value);
  if (input_hour == "") input_hour = 0;
  let input_min = parseInt(document.querySelector("#minInput").value);
  if (input_min == "") input_min = 0;
  let input_sec = parseInt(document.querySelector("#secInput").value);
  if (input_sec == "") input_sec = 0;
  let genrePicked = document.querySelector('#genres').value

  if (validateTime(input_sec, input_min, input_hour)) {
    window.location = `/countdown.html?h=${input_hour}&m=${input_min}&s=${input_sec}&genre=${genrePicked}`
  } else {
    document.querySelector("#timeError").innerHTML = "Please make sure seconds and minutes are under 60 and hours is under 24."
  }
}

function validateTime(sec, min, hour) {
  if (sec < 0 || sec > 60) {
    return false
  }
  if (min < 0 || min > 60) {
    return false
  }
  if (hour < 0 || hour > 24) {
    return false
  }
  return true
}
