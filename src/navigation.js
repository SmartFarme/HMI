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