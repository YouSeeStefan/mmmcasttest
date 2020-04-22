var d = new Date();
var m = new Date();

document.getElementById("day").innerHTML = d.getDate();

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("month").innerHTML = months[m.getMonth()];

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  // document.getElementById('txt').innerHTML =
  // h + ":" + m + ":" + s;
  document.getElementById('time').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
