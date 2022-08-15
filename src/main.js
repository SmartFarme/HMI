//Код для переключения между вкладками на главной области программы.
const tabs = Array.from(document.querySelectorAll(".tabs"));
for (let b = 0; b < tabs.length; b++){
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

//Аналогичный код для внутренних вкладок

const untabs = Array.from(document.querySelectorAll(".untabs"));
for (let b = 0; b < untabs.length; b++){
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

//Код для кнопок боковой панели 

const alarmButton = document.querySelector(".alarm-button");
alarmButton.addEventListener("click", toAlarmList);
function toAlarmList() {
  const tab = Array.from(document.querySelectorAll(".tab"));
  tab.forEach(tab => { tab.classList.remove("tab_active")
  });
  const infoPage = document.querySelector(".info-page");
  infoPage.classList.add("tab_active");
  const tabContent = Array.from(document.querySelectorAll(".tab__content"));
  const infoContent = document.querySelector(".tab__content_info");
  tabContent.forEach(tabContent => {tabContent.classList.remove("tab__content_active")});
  infoContent.classList.add("tab__content_active");
  const untab = Array.from(infoContent.querySelectorAll(".untab"));
  untab.forEach(untab => {untab.classList.remove("untab_active")
  });
  const alarmList = infoContent.querySelector(".alarm-statistics");
  alarmList.classList.add("untab_active");
  const untabContent = Array.from(infoContent.querySelectorAll(".untab__content"));
  untabContent.forEach(untabContent => {untabContent.classList.remove("untab__content_active")
  });
  const alarmListContent = infoContent.querySelector(".alarm-statistics-content");
  alarmListContent.classList.add("untab__content_active")
}