let hours = 1;
let minutes = 2;
let secondes = 60;

function decompte() {
  if (secondes == 0) {
    minutes -= 1;
    secondes = 59;
    if (minutes <= 0) {
      hours -= 1;
      minutes = 59;
    }
  } else {
    secondes -= 1;
  }

  let el_hours = document.getElementById('clock-hours');
  let el_minutes = document.getElementById('clock-minutes');
  let el_secondes = document.getElementById('clock-seconds');
  el_hours.innerHTML = hours;
  el_minutes.innerHTML = minutes;
  el_secondes.innerHTML = secondes;

  setTimeout(decompte, 1000);
}
decompte();
