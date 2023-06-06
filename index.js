let hour = document.querySelector(".timer-hour");
let minute = document.querySelector(".timer-minute");
let second = document.querySelector(".timer-seconds");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let second_base = 0;
let minute_base = 0;
let hour_base = 0;
let a, b, c;

start.addEventListener("click", function () {
  start.classList.add("start-active");
  pause.classList.remove("start-active");

  a = setInterval(function () {
    second_base += 1;
    if (second_base < 10) {
      second.innerHTML = `0${second_base}`;
    } else if (second_base > 60) {
      second_base -= 60;
      second.innerHTML = `0${second_base}`;
    } else {
      second.innerHTML = `${second_base}`;
    }
  }, 1000);
  b = setInterval(function () {
    minute_base += 1;
    if (minute_base < 10) {
      minute.innerHTML = `0${minute_base}`;
    } else if (second_base > 60) {
      minute_base -= 60;
      minute.innerHTML = `0${minute_base}`;
    } else {
      minute.innerHTML = `${minute_base}`;
    }
  }, 60 * 1000);
  c = setInterval(function () {
    hour_base += 1;
    if (hour_base < 10) {
      hour.innerHTML = `0${hour_base}`;
    } else {
      hour.innerHTML = `${hour_base}`;
    }
  }, 60 * 60 * 1000);
});

pause.addEventListener("click", pauseTime);

function pauseTime() {
  start.classList.remove("start-active");
  clearInterval(a);
  clearInterval(b);
  clearInterval(c);
  pause.classList.add("start-active");
}

reset.addEventListener("click", function () {
  second_base = 0;
  minute_base = 0;
  hour_base = 0;
  second.innerHTML = "00";
  minute.innerHTML = "00";
  hour.innerHTML = "00";
  start.classList.remove("start-active");
  pauseTime();
  pause.classList.remove("start-active");
});
