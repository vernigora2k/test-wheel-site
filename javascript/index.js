const singInBtn = document.getElementById('sing-in-btn')
const popupSingIn = document.querySelector('.popup-sing-in')
const popupSingInClose = document.querySelector('.popup-sing-in__close-btn')
const callMeBtn = document.querySelector('.call-me-btn')
const popupCallMeBack = document.querySelector('.popup-call-me-back')
const pupupCallMeBackClose = document.querySelector('.popup-call-me-back__close-btn')
const subscribeForm = document.querySelector('.block-1__subscribe-form')
const subscribeFormInput = document.querySelector('.subscribe-form__input')
const subscribeFormSubmit = document.querySelector('.subscribe-form__submit')
const topSearch = document.querySelector('.top__search')
const topSearchInput = document.querySelector('.top__search-input')

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
    showSubscribed(isValidEmail(subscribeFormInput.value))
})

topSearch.addEventListener('submit', (event) => {
    event.preventDefault()
    showCorrectSearch(isValidSearch(topSearchInput.value))
})

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidSearch(searchWord) {
    return searchWord.length>2
}

function showCorrectSearch(isShow) {
    if (isShow) {
        alert('Ура Вы все нашли')
    }   else {
        alert('введите минимум 2 символа для поиска')
    }
}

function showSubscribed(isShow) {
    if (isShow) {
        alert('Вы успешно подписаны на рассылку')
    } else {
        alert('Введите привильный email')
    }
}




