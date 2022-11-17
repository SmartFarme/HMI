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





const sidetouch = Array.from(document.querySelectorAll(".sidetouch"));
for (let i = 0; i < sidetouch.length; i++) {
  sidetouch[i].addEventListener("mousedown", e => {
    sidetouch[i].classList.add("bluc");
    console.log("Start")
  })
  sidetouch[i].addEventListener("mouseup", e => {
    sidetouch[i].classList.remove("bluc");
    console.log("End")
  })
  sidetouch[i].addEventListener("mouseout", e => {
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

const modeStatusBtn = document.querySelectorAll(".mode-select-button");
const modeChange = document.querySelector(".change-mode-div");
for (let i = 0; i < modeStatusBtn.length; i++) {
  modeStatusBtn[i].addEventListener("click", modeChangeActive);
  function modeChangeActive() {
    modeChange.classList.add("change-mode-div-active")
    const modeStop = document.querySelector(".change-mode-stop");
    const modePause = document.querySelector(".change-mode-pause");
    const modePlay = document.querySelector(".change-mode-play");
    const modeStatusPlay = document.querySelector(".mode-play");
    const modeStatusPause = document.querySelector(".mode-pause");
    const modeStatusStop = document.querySelector(".mode-stop");
    modeStop.onclick = function () {
      modeChange.classList.remove("change-mode-div-active")
      modeStatusPlay.classList.remove("mode-active");
      modeStatusPause.classList.remove("mode-active");
      modeStatusStop.classList.add("mode-active");
    }
    modePause.onclick = function () {
      modeChange.classList.remove("change-mode-div-active")
      modeStatusPlay.classList.remove("mode-active");
      modeStatusPause.classList.add("mode-active");
      modeStatusStop.classList.remove("mode-active");
    }
    modePlay.onclick = function () {
      modeChange.classList.remove("change-mode-div-active")
      modeStatusPlay.classList.add("mode-active");
      modeStatusPause.classList.remove("mode-active");
      modeStatusStop.classList.remove("mode-active");
    }
  }
}

const grCupStatusBtn = document.querySelectorAll(".graphics-cup-button");
const grCupChange = document.querySelector(".gr-cup-milk-mode-div");
for (let i = 0; i < grCupStatusBtn.length; i++) {
  grCupStatusBtn[i].addEventListener("click", grCupChangeActive);
  function grCupChangeActive() {
    grCupChange.classList.add("gr-cup-milk-mode-div-active")
    const doNotMilkMode = document.querySelector(".do-not-milk-mode");
    const removeCupMode = document.querySelector(".remove-cup-mode");
    const milkFlowMode = document.querySelector(".milk-flow-mode");
    const cancelAcrMode = document.querySelector(".cancel-acr-mode");
    const milkCupModeClose = document.querySelector(".milk-cup-mode-close");
    doNotMilkMode.onclick = function () {
      grCupChange.classList.remove("gr-cup-milk-mode-div-active")
      grCupStatusBtn[i].classList.remove("cup-graphics-done-btn");
      grCupStatusBtn[i].classList.remove("remove-cup-mode-btn");
      grCupStatusBtn[i].classList.remove("milk-flow-mode-btn");
      grCupStatusBtn[i].classList.remove("cancel-acr-mode-btn");
      grCupStatusBtn[i].classList.add("do-not-milk-mode-btn");
    }
    removeCupMode.onclick = function () {
      grCupChange.classList.remove("gr-cup-milk-mode-div-active")
      grCupStatusBtn[i].classList.remove("cup-graphics-done-btn");
      grCupStatusBtn[i].classList.add("remove-cup-mode-btn");
      grCupStatusBtn[i].classList.remove("milk-flow-mode-btn");
      grCupStatusBtn[i].classList.remove("cancel-acr-mode-btn");
      grCupStatusBtn[i].classList.remove("do-not-milk-mode-btn");
    }
    milkFlowMode.onclick = function () {
      grCupStatusBtn[i].classList.remove("cup-graphics-done-btn");
      grCupStatusBtn[i].classList.remove("remove-cup-mode-btn");
      grCupStatusBtn[i].classList.add("milk-flow-mode-btn");
      grCupStatusBtn[i].classList.remove("cancel-acr-mode-btn");
      grCupStatusBtn[i].classList.remove("do-not-milk-mode-btn");
      grCupChange.classList.remove("gr-cup-milk-mode-div-active")
    }
    cancelAcrMode.onclick = function () {
      grCupChange.classList.remove("gr-cup-milk-mode-div-active")
      grCupStatusBtn[i].classList.remove("cup-graphics-done-btn");
      grCupStatusBtn[i].classList.remove("remove-cup-mode-btn");
      grCupStatusBtn[i].classList.remove("milk-flow-mode-btn");
      grCupStatusBtn[i].classList.add("cancel-acr-mode-btn");
      grCupStatusBtn[i].classList.remove("do-not-milk-mode-btn");
    }
    milkCupModeClose.onclick = function () {
      grCupChange.classList.remove("gr-cup-milk-mode-div-active")
    }
  }
}

rect63402-7-8-8-0-5-9-4-8-9-2


const klapanStatusButton = document.querySelectorAll(".klapan");
const klapanStatusChange = document.querySelector(".klapan-mode-div");
for (let i = 0; i < klapanStatusButton.length; i++) {
  klapanStatusButton[i].addEventListener("click", klapanChangeActive);
  function klapanChangeActive() {
    klapanStatusChange.classList.add("klapan-mode-div-active")
    let klapanTr = Array.from(klapanStatusButton[i].querySelectorAll(".klapan-tr"))
    const klapanModeOff = document.querySelector(".klapan-mode-off");
    const klapanModeOn = document.querySelector(".klapan-mode-on");
    const klapanModeClose = document.querySelector(".klapan-mode-close");
    klapanModeOff.onclick = function () {
      klapanStatusChange.classList.remove("klapan-mode-div-active")
      klapanTr.forEach(klapanTriangle => {
        klapanTriangle.classList.add("klapan-black");
        klapanTriangle.classList.remove("klapan-white");
      });
    }
    klapanModeOn.onclick = function () {
      klapanStatusChange.classList.remove("klapan-mode-div-active")
      klapanTr.forEach(klapanTriangle => {
        klapanTriangle.classList.remove("klapan-black");
        klapanTriangle.classList.add("klapan-white");
      });
    }
    klapanModeClose.onclick = function () {
      klapanStatusChange.classList.remove("klapan-mode-div-active")
    }
  }
}







const milkStatusBtn = document.querySelector(".button-milk-action-select");
const milkChange = document.querySelector(".milk-mode-div");
milkStatusBtn.addEventListener("click", milkChangeActive);
function milkChangeActive() {
  milkChange.classList.add("milk-mode-div-active")
  const milkRemove = document.querySelector(".milk-mode-remove");
  const milkToTanker = document.querySelector(".milk-mode-tanker");
  const milkClose = document.querySelector(".milk-mode-close");
  milkRemove.onclick = function () {
    milkChange.classList.remove("milk-mode-div-active")
  }
  milkToTanker.onclick = function () {
    milkChange.classList.remove("milk-mode-div-active")
  }
  milkClose.onclick = function () {
    milkChange.classList.remove("milk-mode-div-active")
  }
}

const selectBtn = document.querySelector(".sel");
  const selectChange = document.querySelector(".select-mode-div");
  selectBtn.addEventListener("click", selectChangeActive);
    function selectChangeActive() {
      selectChange.classList.add("select-mode-div-active")
      const selectNote = document.querySelector(".select-note");
      const selectSimple = document.querySelector(".select-simple");
      const selectDitail = document.querySelector(".select-ditail");
      selectNote.onclick = function () {
        selectChange.classList.remove("select-mode-div-active")
        selectBtn.innerHTML=selectNote.innerHTML
      }
      selectSimple.onclick = function () {
        selectChange.classList.remove("select-mode-div-active")
        selectBtn.innerHTML=selectSimple.innerHTML
      }
      selectDitail.onclick = function () {
        selectChange.classList.remove("select-mode-div-active")
        selectBtn.innerHTML=selectDitail.innerHTML
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

const schemeArmButton = document.querySelector(".scheme-arm")
const schemeMainDiv = document.querySelector(".main-div-mnem")
  schemeArmButton.onclick = function () {
    schemeMainDiv.classList.add("main-div-mnem-active")
  }
const armDivClose = document.querySelector(".arm-close")
armDivClose.onclick = function () {
  schemeMainDiv.classList.remove("main-div-mnem-active")
}