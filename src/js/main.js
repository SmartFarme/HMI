
/// Отображение реального времени на экране приложения. ///
let time = setInterval(function () {
  let date = new Date();
  let hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
  let minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
  let seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.querySelector('.time').innerHTML = hours + ':' + minutes + ':' + seconds;
}, 1000);

let settingValues = { datachmentThreshold: "12", datachmentDelay: '4', pulseFrequency: "32", clockRatio: "3", teatOreoarationTime: "6", brushLiftHeight: "6", teatTreatmentTime: "15", horizontalAdjustment: "30", verticalAdjustment: "27", udrAdress: "1378", numberOfBuckets: "5", accessLevel: "Обычный", eventLog: "14" }


let settingConfiguration = Array.from(document.querySelectorAll(".configuration-item-button"))
settingConfiguration.forEach(function (element) {
  if (settingValues.hasOwnProperty(`${element.id}`)) {
    element.innerText = settingValues[`${element.id}`]
  } else {
 
  }

})

//сохранение веденых параметров
let configDone = document.querySelector(".configuration-done");
configDone.onclick = function () {
  settingConfiguration.forEach(function (element) {
    settingValues[`${element.id}`] = element.innerText;
  })
}

//отмена последних введенных изменений
let configCancel = document.querySelector(".configuration-cancel");
configCancel.onclick = function () {
  settingConfiguration.forEach(function (element) {
    element.innerText = settingValues[`${element.id}`]
  })
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



const samplerStatusBtn = $(".sampler-status-icon");
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

const klapanCupStatusButton = document.querySelectorAll(".cup-klapan");
const klapanCupStatusChange = document.querySelector(".klapan-mode-div");
for (let i = 0; i < klapanCupStatusButton.length; i++) {
  klapanCupStatusButton[i].addEventListener("click", klapanCupChangeActive);
  function klapanCupChangeActive() {
    klapanCupStatusChange.classList.add("klapan-mode-div-active")
    let cup = Array.from(cupForChangeButton[i].querySelectorAll(".cup-tr"))
    let klapanTr = Array.from(klapanCupStatusButton[i].querySelectorAll(".klapan-tr"))
    const klapanModeOff = document.querySelector(".klapan-mode-off");
    const klapanModeOn = document.querySelector(".klapan-mode-on");
    const klapanModeClose = document.querySelector(".klapan-mode-close");
    klapanModeOff.onclick = function () {
      klapanCupStatusChange.classList.remove("klapan-mode-div-active")
      klapanTr.forEach(klapanTriangle => {
        klapanTriangle.classList.add("klapan-black");
        klapanTriangle.classList.remove("klapan-white");
      });
      cup.forEach(cupItem => {
        cupItem.classList.add("klapan-black");
        cupItem.classList.remove("klapan-white");
      });
    }
    klapanModeOn.onclick = function () {
      klapanCupStatusChange.classList.remove("klapan-mode-div-active")
      klapanTr.forEach(klapanTriangle => {
        klapanTriangle.classList.remove("klapan-black");
        klapanTriangle.classList.add("klapan-white");
      });
      cup.forEach(cupItem => {
        cupItem.classList.remove("klapan-black");
        cupItem.classList.add("klapan-white");
      });
    }
    klapanModeClose.onclick = function () {
      klapanCupStatusChange.classList.remove("klapan-mode-div-active")
    }
  }
}

const pumpStatusButton = document.querySelectorAll(".pump");
const pumpStatusChange = document.querySelector(".pump-mode-div");
for (let i = 0; i < pumpStatusButton.length; i++) {
  pumpStatusButton[i].addEventListener("click", pumpChangeActive);
  function pumpChangeActive() {
    pumpStatusChange.classList.add("pump-mode-div-active")
    let pumpTr = Array.from(pumpStatusButton[i].querySelectorAll(".pump-tr"))
    const pumpModeOff = document.querySelector(".pump-mode-off");
    const pumpModeOn = document.querySelector(".pump-mode-on");
    const pumpModeClose = document.querySelector(".pump-mode-close");
    pumpModeOff.onclick = function () {
      pumpStatusChange.classList.remove("pump-mode-div-active")
      pumpTr.forEach(pumpTriangle => {
        pumpTriangle.classList.add("pump-black");
        pumpTriangle.classList.remove("pump-white");
      });
    }
    pumpModeOn.onclick = function () {
      pumpStatusChange.classList.remove("pump-mode-div-active")
      pumpTr.forEach(pumpTriangle => {
        pumpTriangle.classList.remove("pump-black");
        pumpTriangle.classList.add("pump-white");
      });
    }
    pumpModeClose.onclick = function () {
      pumpStatusChange.classList.remove("pump-mode-div-active")
    }
  }
}


const brushesStatusButton = document.querySelectorAll(".brushes");
const brushesStatusChange = document.querySelector(".brushes-mode-div");
for (let i = 0; i < brushesStatusButton.length; i++) {
  brushesStatusButton[i].addEventListener("click", brushesChangeActive);
  function brushesChangeActive() {
    brushesStatusChange.classList.add("brushes-mode-div-active")
    let brushesOpen = document.querySelector(".brushes-open")
    let brushesClose = document.querySelector(".brushes-close")
    const brushesModeOff = document.querySelector(".brushes-mode-off");
    const brushesModeOn = document.querySelector(".brushes-mode-on");
    const brushesModeClose = document.querySelector(".brushes-mode-close");
    brushesModeOff.onclick = function () {
      brushesStatusChange.classList.remove("brushes-mode-div-active")
      brushesOpen.classList.add("hide")
      brushesClose.classList.remove("hide")
    }
    brushesModeOn.onclick = function () {
      brushesStatusChange.classList.remove("brushes-mode-div-active")
      brushesOpen.classList.remove("hide")
      brushesClose.classList.add("hide")
    }
    brushesModeClose.onclick = function () {
      brushesStatusChange.classList.remove("brushes-mode-div-active")
    }
  }
}

const pulsatorStatusButton = document.querySelectorAll(".pulsator");
const pulsatorStatusChange = document.querySelector(".pulsator-mode-div");
for (let i = 0; i < pulsatorStatusButton.length; i++) {
  pulsatorStatusButton[i].addEventListener("click", pulsatorChangeActive);
  function pulsatorChangeActive() {
    pulsatorStatusChange.classList.add("pulsator-mode-div-active")
    let pulsatorOn = document.querySelector(".pulsator-on")
    let pulsatorOff = document.querySelector(".pulsator-off")
    const pulsatorModeOff = document.querySelector(".pulsator-mode-off");
    const pulsatorModeOn = document.querySelector(".pulsator-mode-on");
    const pulsatorModeClose = document.querySelector(".pulsator-mode-close");
    pulsatorModeOff.onclick = function () {
      pulsatorStatusChange.classList.remove("pulsator-mode-div-active")
      pulsatorOn.classList.add("hide")
      pulsatorOff.classList.remove("hide")
    }
    pulsatorModeOn.onclick = function () {
      pulsatorStatusChange.classList.remove("pulsator-mode-div-active")
      pulsatorOn.classList.remove("hide")
      pulsatorOff.classList.add("hide")
    }
    pulsatorModeClose.onclick = function () {
      pulsatorStatusChange.classList.remove("pulsator-mode-div-active")
    }
  }
}

const brushesCleanStatusButton = document.querySelectorAll(".brushes-clean");
const brushesCleanStatusChange = document.querySelector(".brushes-clean-mode-div");
for (let i = 0; i < brushesCleanStatusButton.length; i++) {
  brushesCleanStatusButton[i].addEventListener("click", brushesCleanChangeActive);
  function brushesCleanChangeActive() {
    brushesCleanStatusChange.classList.add("brushes-clean-mode-div-active")
    let brushesCleanOpen = document.querySelector(".brushes-clean-on")
    let brushesCleanClose = document.querySelector(".brushes-clean-off")
    const brushesCleanModeOff = document.querySelector(".brushes-clean-mode-off");
    const brushesCleanModeOn = document.querySelector(".brushes-clean-mode-on");
    const brushesCleanModeClose = document.querySelector(".brushes-clean-mode-close");
    brushesCleanModeOff.onclick = function () {
      brushesCleanStatusChange.classList.remove("brushes-clean-mode-div-active")
      brushesCleanOpen.classList.add("hide")
      brushesCleanClose.classList.remove("hide")
    }
    brushesCleanModeOn.onclick = function () {
      brushesCleanStatusChange.classList.remove("brushes-clean-mode-div-active")
      brushesCleanOpen.classList.remove("hide")
      brushesCleanClose.classList.add("hide")
    }
    brushesCleanModeClose.onclick = function () {
      brushesCleanStatusChange.classList.remove("brushes-clean-mode-div-active")
    }
  }
}

const schemeArmButton = Array.from(document.querySelectorAll(".scheme-arm"))
const schemeMainDiv = document.querySelector(".main-div-mnem")
schemeArmButton.forEach(armButton => {
  armButton.onclick = function () {
    schemeMainDiv.classList.add("main-div-mnem-active")
  }
});
const armDivClose = document.querySelector(".arm-close")
armDivClose.onclick = function () {
  schemeMainDiv.classList.remove("main-div-mnem-active")
}


// const klapanPrStatusButton = document.querySelectorAll(".klapan-pr");
// const klapanPrStatusChange = document.querySelector(".klapan-mode-div");
// for (let i = 0; i < klapanPrStatusButton.length; i++) {
//   klapanPrStatusButton[i].addEventListener("click", klapanPrChangeActive);
//   function klapanPrChangeActive() {
//     klapanStatusChange.classList.add("klapan-mode-div-active")
//     let klapanPr = Array.from(document.querySelectorAll(".klapan-pr-tr"))
//     const klapanPrModeOff = document.querySelector(".klapan-mode-off");
//     const klapanPrModeOn = document.querySelector(".klapan-mode-on");
//     const klapanPrModeClose = document.querySelector(".klapan-mode-close");
//     klapanPrModeOff.onclick = function () {
//       klapanStatusChange.classList.remove("klapan-mode-div-active")
//       klapanPr.forEach(klapanPrTriangle => {
//         klapanPrTriangle.classList.add("klapan-black");
//         klapanPrTriangle.classList.remove("klapan-white");
//       });
//     }
//     klapanPrModeOn.onclick = function () {
//       klapanStatusChange.classList.remove("klapan-mode-div-active")
//       klapanPr.forEach(klapanPrTriangle => {
//         klapanPrTriangle.classList.remove("klapan-black");
//         klapanPrTriangle.classList.add("klapan-white");
//       });
//     }
//     klapanPrModeClose.onclick = function () {
//       klapanStatusChange.classList.remove("klapan-mode-div-active")
//     }
//   }
// }


const cupStatusButton = document.querySelectorAll(".arm-cup");
const cupForChangeButton = document.querySelectorAll(".cup");
const cupStatusUpButton = document.querySelectorAll(".arm-cup-up");
const cupStatusChange = document.querySelector(".cup-mode-div");
for (let i = 0; i < cupStatusButton.length; i++) {
  cupStatusButton[i].addEventListener("click", cupChangeActive);
  cupStatusUpButton[i].addEventListener("click", cupChangeActive);
  function cupChangeActive() {
    cupStatusChange.classList.add("cup-mode-div-active")
    const cupModeOff = document.querySelector(".cup-mode-off");
    const cupModeOn = document.querySelector(".cup-mode-on");
    const cupModeClose = document.querySelector(".cup-mode-close");
    cupModeOff.onclick = function () {
      cupStatusChange.classList.remove("cup-mode-div-active")
      cupStatusButton[i].classList.add("hide")
      cupStatusUpButton[i].classList.remove("hide")
    }
    cupModeOn.onclick = function () {
      cupStatusChange.classList.remove("cup-mode-div-active")
      cupStatusButton[i].classList.remove("hide")
      cupStatusUpButton[i].classList.add("hide")
    }
    cupModeClose.onclick = function () {
      cupStatusChange.classList.remove("cup-mode-div-active")
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
    selectBtn.innerHTML = selectNote.innerHTML
  }
  selectSimple.onclick = function () {
    selectChange.classList.remove("select-mode-div-active")
    selectBtn.innerHTML = selectSimple.innerHTML
  }
  selectDitail.onclick = function () {
    selectChange.classList.remove("select-mode-div-active")
    selectBtn.innerHTML = selectDitail.innerHTML
  }
}
const cameraPage = document.querySelector(".camera-page")
const camera = document.querySelector(".camera-page-button")
camera.onclick = function () {
  cameraPage.classList.add("camera-page-active")
}
const closeCameraPage = document.querySelector(".camera-cancel")
closeCameraPage.onclick = function () {
  cameraPage.classList.remove("camera-page-active")
}


const rebootProcess = require('child_process');

function rebotProcess(command) {

  rebootProcess.exec(command, function (error, stdout, stderr) {

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);

    if (error !== null) {
      console.log(`error: ${error}`);
    }
  });
}

const reboot = document.querySelector(".off-system");

reboot.onclick = function () {
  rebotProcess('sudo reboot');
}



//Индикация этапов промывки
const localProgress = document.querySelector(".acid-local-progress-inner");
const globalProgress = document.querySelector(".acid-global-progress-inner");
const timerCount = document.querySelector(".timer-count");
const start = document.querySelector(".demo-start");
const stages = Array.from(document.querySelectorAll(".acid-st"));
const acidStage = document.querySelector(".acid-stage");
let secondsRemaining;
let secondsCount;
let secondsRemainingAll;
let secondsCountAll;
let intervalHandle;
let intervalHandleAll;
let currentClean;
let i = 0;


let progressWidth = 0;
let progressAllWidth = 0

async function tick() {
  let min = Math.floor(secondsRemaining / 6000);
  let sec = Math.ceil((secondsRemaining - (min * 6000)) / 100);
  progressWidth = (100 / secondsCount) * (secondsCount - secondsRemaining);
  if (progressWidth <= 100) {

    localProgress.style.width = progressWidth + "%";
  }


  if (sec < 10) {
    sec = "0" + sec;
  }
  let localTimer = currentClean.querySelector(".local-stage-time")
  let timeValue = min.toString() + ":" + sec;
  localTimer.innerHTML = timeValue

  if (secondsRemaining === 0) {
    if (i === 8) {
      clearInterval(intervalHandle);
      stages[i].classList.remove("current-state")
      stages[i].classList.remove("current")
      i = 0
    } else {
      secondsCount = 0;
      clearInterval(intervalHandle);
      stages[i].classList.remove("current-state")
      stages[i].classList.remove("current")
      i++;
      next();
    }
  }
  secondsRemaining--
}

async function tickAll() {
  let min = Math.floor(secondsRemainingAll / 6000);
  let sec = Math.ceil((secondsRemainingAll - (min * 6000)) / 100);
  progressAllWidth = (100 / secondsCountAll) * (secondsCountAll - secondsRemainingAll);
  console.log(progressAllWidth)
  if (progressAllWidth <= 100) {

    globalProgress.style.width = progressAllWidth + "%";
  }


  if (sec < 10) {
    sec = "0" + sec;
  }
  let globalTimer = currentClean.querySelector(".global-stage-time")
  let timeValue = min.toString() + ":" + sec;
  globalTimer.innerHTML = timeValue


  if (secondsRemainingAll === 0) {
    clearInterval(intervalHandleAll);
  }
  secondsRemainingAll--
}

function startCountdown() {
  let curSt = document.querySelector(".current");
  let curTime = curSt.querySelector(".stage-time");
  let curName = curSt.querySelector(".stage-name");
  acidStage.innerHTML = curName.innerHTML;
  console.log(curTime);
  secondsCount = curTime.innerHTML * 100;
  secondsRemaining = curTime.innerHTML * 100;
  console.log(secondsRemaining)
  intervalHandle = setInterval(tick, 10);
}

start.onclick = function () {
  stages[i].classList.add("current-state")
  stages[i].classList.add("current")
  startCountdown();
  secondsCountAll = 130 * 100;
  secondsRemainingAll = 130 * 100;
  intervalHandleAll = setInterval(tickAll, 10);
  currentClean = document.querySelector(".status-active");
};

function next() {
  stages[i].classList.add("current-state")
  stages[i].classList.add("current")
  startCountdown();
}

