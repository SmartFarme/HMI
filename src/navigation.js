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

$(".alarm-button").click(toAlarmList);
function toAlarmList() {
    $(".tab").each(function() {
        $(this).removeClass("tab_active")
    });
    $(".tab__content").each(function(){
        $(this).removeClass("tab__content_active")
    })
    $(".info-page").addClass("tab_active");
    $(".tab__content_info").addClass("tab__content_active");
    $(".tab__content_info .untab").each(function() {
        $(this).removeClass("untab_active")
    });
    $(".tab__content_info .alarm-statistics").first().addClass("untab_active")
    $(".tab__content_info .untab__content").each(function() {
        $(this).removeClass("untab__content_active")
    });
    $(".tab__content_info .alarm-statistics-content").first().addClass("untab__content_active");
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


