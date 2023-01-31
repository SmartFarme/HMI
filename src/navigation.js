class NavigationTab {
    constructor(arrayName, name, contentName) {
        this.arrayName = Array.from(document.querySelectorAll(`.${arrayName}`))
        for (let b = 0; b < this.arrayName.length; b++) {
            this.contentName = Array.from(this.arrayName[b].querySelectorAll(`.${contentName}`))
            this.tabArr = Array.from(this.arrayName[b].querySelectorAll(`.${name}`))
            console.log(this.tabArr)
            for (let i = 0; i < this.tabArr.length; i++) {
                this.tabArr[i].addEventListener("click", this.getActive.bind(null, name, this.tabArr, i, this.contentName), false);
            }
        }
    }
    getActive(target, targetArr, i, targetContent) {
        let curentIndex = targetArr.findIndex(element => element.classList.contains(`${target}_active`));
        targetArr[curentIndex].classList.remove(`${target}_active`)
        targetContent[curentIndex].classList.remove(`${target}__content_active`);
        targetArr[i].classList.add(`${target}_active`);
        targetContent[i].classList.add(`${target}__content_active`);
    }

}
const unTabNavigation = new NavigationTab(`untabs`, `untab`, `untab__content`)
const tabNavigation = new NavigationTab(`tabs`, `tab`, `tab__content`)

const alarmButton = document.querySelector(".alarm-button");
alarmButton.addEventListener("click", toAlarmList);
function toAlarmList() {
    const tab = $(".tab");
    console.log(tab)
    const infoPage = document.querySelector(".info-page");
    const tabContent = Array.from(document.querySelectorAll(".tab__content"));
    const infoContent = document.querySelector(".tab__content_info");
    const untab = Array.from(infoContent.querySelectorAll(".untab"));
    const alarmList = infoContent.querySelector(".alarm-statistics");
    const alarmListContent = infoContent.querySelector(".alarm-statistics-content");
    const untabContent = Array.from(infoContent.querySelectorAll(".untab__content"));
    tab.forEach(tab => {
        tab.classList.remove("tab_active")
    });
    tabContent.forEach(tabContent => {
        tabContent.classList.remove("tab__content_active")
    });
    untab.forEach(untab => {
        untab.classList.remove("untab_active")
    });
    untabContent.forEach(untabContent => {
        untabContent.classList.remove("untab__content_active")
    });
    infoContent.classList.add("tab__content_active");
    infoPage.classList.add("tab_active");
    alarmList.classList.add("untab_active");
    alarmListContent.classList.add("untab__content_active")
}

const homeContent = document.querySelector(".tab-content-home");

function closeTabs() {
    const tab = Array.from(document.querySelectorAll(".tab"));
    const homeStatus = Array.from(homeContent.querySelectorAll(".home-status"))
    const tabContent = Array.from(document.querySelectorAll(".tab__content"));
    tab.forEach(tab => {
        tab.classList.remove("tab_active")
    });
    homeStatus.forEach(homeStatus => {
        homeStatus.classList.remove("status-active")
    })
    tabContent.forEach(tabContent => {
        tabContent.classList.remove("tab__content_active")
    });
}

let cleanNavButton = Array.from(document.querySelectorAll(".clean-nav-button"));
for (let n = 0; n < cleanNavButton.length; n++) {
    cleanNavButton[n].addEventListener("click", closeTabs);
    cleanNavButton[n].addEventListener("click", toClean);
    function toClean() {
        const homePage = document.querySelector(".home-page");
        homePage.classList.add("tab_active")
        homeContent.classList.add("tab__content_active");
        let CleanPage = homeContent.querySelector(`.${cleanNavButton[n].id}`);
        console.log(cleanNavButton[n].id)
        CleanPage.classList.add("status-active");
    }
}


