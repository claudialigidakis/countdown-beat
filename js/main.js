let timer;

function goToCountdown() {
  let input_hour = parseInt(document.querySelector("#hourInput").value);
  if (input_hour == "") input_hour = 0;
  let input_min = parseInt(document.querySelector("#minInput").value);
  if (input_min == "") input_min = 0;
  let input_sec = parseInt(document.querySelector("#secInput").value);
  if (input_sec == "") input_sec = 0;
  let genrePicked = document.querySelector('#genres').value

  window.location = `/countdown.html?h=${input_hour}&m=${input_min}&s=${input_sec}&genre=${genrePicked}`
}
