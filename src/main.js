/// Код для переключения между вкладками на главной области программы. ///
const tabs = Array.from(document.querySelectorAll(".tabs"));
for (let b = 0; b < tabs.length; b++) {
  const tab_content = Array.from(tabs[b].querySelectorAll(".tab__content"));
  const tab = Array.from(tabs[b].querySelectorAll(".tab"));
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener("click", getActive)
    function getActive() {
      let curentIndex = tab.findIndex(element => element.classList.contains("tab_active"));
      tab[curentIndex].classList.remove("tab_active");
      tab_content[curentIndex].classList.remove("tab__content_active");
      tab[i].classList.add("tab_active");
      tab_content[i].classList.add("tab__content_active");
    }
  }
}

/// Код для переключения между подвкладками. ///

const untabs = Array.from(document.querySelectorAll(".untabs"));
for (let b = 0; b < untabs.length; b++) {
  const untab_content = Array.from(untabs[b].querySelectorAll(".untab__content"));
  const untab = Array.from(untabs[b].querySelectorAll(".untab"));
  for (let i = 0; i < untab.length; i++) {
    untab[i].addEventListener("click", getUnActive)
    function getUnActive() {
      let curentIndex = untab.findIndex(element => element.classList.contains("untab_active"));
      untab[curentIndex].classList.remove("untab_active");
      untab_content[curentIndex].classList.remove("untab__content_active");
      untab[i].classList.add("untab_active");
      untab_content[i].classList.add("untab__content_active");
    }
  }
}

/// Код для кнопок боковой панели. ///


/// Код для кнопки перехода к списку ошибок. ///
const alarmButton = document.querySelector(".alarm-button");
alarmButton.addEventListener("click", toAlarmList);
function toAlarmList() {
  const tab = Array.from(document.querySelectorAll(".tab"));
  tab.forEach(tab => {
    tab.classList.remove("tab_active")
  });
  const infoPage = document.querySelector(".info-page");
  infoPage.classList.add("tab_active");
  const tabContent = Array.from(document.querySelectorAll(".tab__content"));
  const infoContent = document.querySelector(".tab__content_info");
  tabContent.forEach(tabContent => { tabContent.classList.remove("tab__content_active") });
  infoContent.classList.add("tab__content_active");
  const untab = Array.from(infoContent.querySelectorAll(".untab"));
  untab.forEach(untab => {
    untab.classList.remove("untab_active")
  });
  const alarmList = infoContent.querySelector(".alarm-statistics");
  alarmList.classList.add("untab_active");
  const untabContent = Array.from(infoContent.querySelectorAll(".untab__content"));
  untabContent.forEach(untabContent => {
    untabContent.classList.remove("untab__content_active")
  });
  const alarmListContent = infoContent.querySelector(".alarm-statistics-content");
  alarmListContent.classList.add("untab__content_active")
}

/// Отображение реального времени на экране приложения. ///
let time = setInterval(function () {
  let date = new Date();
  let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
  let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
}, 1000);


/// Код для выпадающего меню выбора языкового пакета ///
const dropdown = document.querySelectorAll(".dropdown");
const list = document.querySelectorAll(".dropdown__list");
const value = document.querySelectorAll(".dropdown__value");
for (let i = 0; i < dropdown.length; i++) {
  value[i].addEventListener("click", onClick);
  function onClick() {
    list[i].classList.toggle("dropdown__list_active");
  }
  const item = dropdown[i].querySelectorAll(".dropdown__item");
  for (let b = 0; b < item.length; b++) {
    item[b].addEventListener("click", function (event) {
      value[i].textContent = item[b].textContent;
      list[i].classList.remove("dropdown__list_active");
      event.preventDefault();
    });
  }
}



const sidetouch = Array.from(document.querySelectorAll(".sidetouch"));
for (let i = 0; i < sidetouch.length; i++) {
  sidetouch[i].addEventListener("touchstart", e => {
    sidetouch[i].classList.add("bluc");
    console.log("Start")
  })
  sidetouch[i].addEventListener("touchend", e => {
    sidetouch[i].classList.remove("bluc");
    console.log("End")
  })
  sidetouch[i].addEventListener("touchover", e => {
    sidetouch[i].classList.remove("bluc");
    console.log("Over")
  })
}

const samplerStatusBtn = document.querySelectorAll(".sampler-status-icon");
const samplerChange = document.querySelector(".change-sampler-div");
for (let i = 0; i < samplerStatusBtn.length; i++) {
  samplerStatusBtn[i].addEventListener("click", samplerChangeActive);
  function samplerChangeActive() {
    samplerChange.classList.add("change-sampler-div-active")
    const samplerButton = Array.from(document.querySelectorAll(".sampler-button"));
    const samplerStop = document.querySelector(".change-sampler-stop");
    const samplerPlay = document.querySelector(".change-sampler-play");
    const samplerStatusPlay = document.querySelector(".sampler-status-play");
    const samplerStatusStop = document.querySelector(".sampler-status-stop");
    samplerStop.onclick = function () {
      samplerChange.classList.remove("change-sampler-div-active")
      samplerButton.forEach(button => button.disabled = false);
      samplerStatusPlay.classList.remove("sampler-status-active");
      samplerStatusStop.classList.add("sampler-status-active");
    }
    samplerPlay.onclick = function () {
      samplerChange.classList.remove("change-sampler-div-active")
      samplerButton.forEach(button => button.disabled = true);
      samplerStatusStop.classList.remove("sampler-status-active");
      samplerStatusPlay.classList.add("sampler-status-active");
    }
  }
}

const localProgress = document.querySelector(".acid-local-progress-inner");
const globalProgress = document.querySelector(".acid-global-progress-inner");
const demoStart = document.querySelector(".demo-start");
const timerLeft = document.querySelector(".timer-count");
const timerCount = document.querySelector(".local-stage-time");
const timerCountAll = document.querySelector(".global-stage-time");
const start = document.querySelector(".demo-start");
const acid1 = document.getElementById("acid-1");
const firstA = document.querySelector(".acid-main");
const stages = Array.from(document.querySelectorAll(".acid-st"));
const acidStage = document.querySelector(".acid-stage");
let secondsRemainingAll;
let secondsRemaining;
let secondsCount;
let intervalProgress;
let intervalAllProgress;
let intervalHandle;
let progressAllWidth;
let i = 0;

let interval = 0;
let progressWidth = 0;
let intervalAll = 0;

function tick() {
  let min = Math.floor(secondsRemaining / 60);
  let sec = secondsRemaining - (min * 60);

  if (sec >= 10) {
    sec = sec;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  let timeValue = min.toString() + ":" + sec;
  timerCount.innerHTML = timeValue

  if (secondsRemaining === 0) {
    if (i === 8) {
      clearInterval(intervalProgress);
    } else {
      stages[i].classList.remove("current-state")
      stages[i].classList.remove("current")
      i++;
      next();
    }
  } else {
    secondsRemaining--
    setTimeout(tick, 1000);
  }

}

function tickAll() {
  let minAll = Math.floor(secondsRemainingAll / 60);
  let secAll = secondsRemainingAll - (minAll * 60);

  if (secAll >= 10) {
    secAll = secAll;
  }

  if (secAll < 10) {
    secAll = "0" + secAll;
  }

  let timeValueAll = minAll.toString() + ":" + secAll;
  timerCountAll.innerHTML = timeValueAll

  if (secondsRemainingAll === 0) {
    if (i === 8) {
      clearInterval(intervalProgress);
    } else {
      stages[i].classList.remove("current-state")
      stages[i].classList.remove("current")
      i++;
      next();
    }
  } else {
    secondsRemainingAll--
    setTimeout(tickAll, 1000);
  }
}

function tiltAll() {
  progressCont.classList.remove("hide");
  let intervalAll = 0;
  let countDownAll = setInterval(() => {
    let progressAllWidth = intervalAll / 90000 * 100;

    if (intervalAll < 90000) {
      globalProgress.style.width = progressAllWidth + "%";
      intervalAll += 10;
    } else {
      clearInterval(countDownAll)
    }
  }, 10)
};

function tilt() {
  progressWidth = interval / (secondsCount * 1000) * 100;
  console.log(progressWidth);
  if (progressWidth < 100) {
    interval += 10;
    localProgress.style.width = progressWidth + "%";
  } else {
    interval = 0;
    progressWidth = 0;
    clearInterval(intervalProgress);
  }
}

function startCountdown() {
  let curSt = document.querySelector(".current");
  let curTime = curSt.querySelector(".stage-time");
  let curName = curSt.querySelector(".stage-name");
  acidStage.innerHTML = curName.innerHTML;
  secondsCount = curTime.innerHTML;
  secondsRemaining = curTime.innerHTML;
  tick();
  intervalProgress = setInterval(tilt, 10)
}

start.onclick = function () {
  stages[i].classList.add("current-state")
  stages[i].classList.add("current")
  startCountdown();
  tiltAll();
  secondsRemainingAll = 90;
  tickAll();
};

function next() {
  stages[i].classList.add("current-state")
  stages[i].classList.add("current")
  startCountdown();
}

document.addEventListener('DOMContentLoaded', () => {

  new Chart(
    document.querySelector('.chart'),
    {
      type: 'line',
      data: {
        labels: ['April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'Books read',
            data: [3, 6, 2, 7, 4],
            borderColor: 'crimson',
            borderWidth: 5,
            backgroundColor: 'crimson',
            cubicInterpolationMode: 'monotone',
          },
          // добавили еще один график с другими значениями и цветом
          {
            label: 'Books bought',
            data: [5, 2, 3, 1, 4],
            borderColor: 'teal',
            borderWidth: 5,
            backgroundColor: 'teal',
            cubicInterpolationMode: 'monotone'
          }
        ]
      },
      options: {
        plugins: {
          legend: {
              display: false
          },
      },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  );

})