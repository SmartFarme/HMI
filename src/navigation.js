class NavigationTab {
    constructor(arrayName, name, contentName) {
        this.arrayName = $(`.${arrayName}`)
        for (let b = 0; b < this.arrayName.length; b++) {
            this.contentName = $(this.arrayName[b]).find(`.${contentName}`)
            this.tabArr = $(this.arrayName[b]).find(`.${name}`)
            console.log(this.tabArr)
            for (let i = 0; i < this.tabArr.length; i++) {
                this.tabArr[i].addEventListener("click", this.getActive.bind(null, name, this.tabArr, i, this.contentName), false);
            }
        }
    }
    getActive(target, targetArr, i, targetContent) {
        let curent = targetArr.filter((`.${target}_active`));
        let curentIndex = targetArr.index(curent)
        console.log(curentIndex)
        targetArr[curentIndex].classList.remove(`${target}_active`)
        targetContent[curentIndex].classList.remove(`${target}__content_active`);
        targetArr[i].classList.add(`${target}_active`);
        targetContent[i].classList.add(`${target}__content_active`);
    }

}
const unTabNavigation = new NavigationTab(`untabs`, `untab`, `untab__content`)
const tabNavigation = new NavigationTab(`tabs`, `tab`, `tab__content`)

$(".alarm-button").on('click', (toAlarmList));
function toAlarmList() {
    $(".tab").each(function() {
        $(this).removeClass("tab_active")
    });
    $(".tab__content").each(function(){
        $(this).removeClass("tab__content_active")
    })
    $(".info-page").addClass("tab_active");
    let $tabInfo = $("#tab-info")
    $tabInfo.addClass("tab__content_active");
    $tabInfo.find(".untab").each(function() {
        $(this).removeClass("untab_active")
    });
    $tabInfo.find("#alarm-statistics").addClass("untab_active")
    $tabInfo.find(".untab__content").each(function() {
        $(this).removeClass("untab__content_active")
    });
    $tabInfo.find("#alarm-statistics-content").addClass("untab__content_active");
}

let $homeContent = $("#tab-content-home");

function closeTabs() {
    const $tab = $(".tab");
    const $homeStatus = $homeContent.find(".home-status")
    const $tabContent = $(".tab__content");
    $tab.each(function() {
        $(this).removeClass("tab_active")
    });
    $homeStatus.each(function() {
        $(this).removeClass("status-active")
    })
    $tabContent.each(function() {
        $(this).removeClass("tab__content_active")
    });
}

let $cleanNavButton = $(".clean-nav-button");
$cleanNavButton.each(function(index) {
    $(this).on("click", closeTabs);
    $(this).on("click", toClean);
    function toClean() {
        const $homePage = $("#home-page");
        $homePage.addClass("tab_active")
        $homeContent.addClass("tab__content_active");
        let $CleanPage = $homeContent.find(`.${$cleanNavButton[index].id}`);
        $CleanPage.addClass("status-active");
    }
})


