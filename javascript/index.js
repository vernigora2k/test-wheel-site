const singInBtn = document.getElementById('sing-in-btn')
const popupSingIn = document.querySelector('.popup-sing-in')
const popupSingInClose = document.querySelector('.popup-sing-in__close-btn')
const callMeBtn = document.querySelector('.call-me-btn')
const popupCallMeBack = document.querySelector('.popup-call-me-back')
const pupupCallMeBackClose = document.querySelector('.popup-call-me-back__close-btn')
const subscribeForm = document.querySelector('.block-1__subscribe-form')
const subscribeFormInput = document.querySelector('.subscribe-form__input')
const subscribeFormSubmit = document.querySelector('.subscribe-form__submit')
const popupSubscribed = document.querySelector('.popup-subscribed')
const subscribedCloseBtn = document.querySelector('.popup-subscribed__close-btn')


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

subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(subscribeFormInput.value)
    showPupupSubscribed(validateEmail(subscribeFormInput.value))
})

subscribedCloseBtn.addEventListener('click', () => {
    popupSubscribed.classList.toggle('acti')
})



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showPupupSubscribed(isShow) {
    if (isShow) {
        popupSubscribed.classList.toggle('acti')
        console.log('sdlkfjsdlf')
    }
}




