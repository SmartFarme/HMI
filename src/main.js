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

