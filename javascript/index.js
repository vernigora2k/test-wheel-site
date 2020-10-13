const singInBtn = document.getElementById('sing-in-btn')
const popupSingIn = document.querySelector('.popup-sing-in')
const popupSingInClose = document.querySelector('.popup-sing-in__close-btn')
const callMeBtn = document.querySelector('.call-me-btn')
const popupCallMeBack = document.querySelector('.popup-call-me-back')
const pupupCallMeBackClose = document.querySelector('.popup-call-me-back__close-btn')



singInBtn.addEventListener('click', () => {
    popupSingIn.classList.toggle('active')
})

popupSingInClose.addEventListener('click', () => {
    popupSingIn.classList.toggle('active')
})

pupupCallMeBackClose.addEventListener('click', () => {
    popupCallMeBack.classList.toggle('activ')
})

callMeBtn.addEventListener('click', () => {
    popupCallMeBack.classList.toggle('activ')
})


