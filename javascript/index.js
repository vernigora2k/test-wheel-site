const singInBtn = document.getElementById('sing-in-btn')
const popupSingIn = document.querySelector('.popup-sing-in')
const popupSingInClose = document.querySelector('.popup-sing-in__close-btn')

singInBtn.addEventListener('click', () => {
    popupSingIn.classList.toggle('active')
})

popupSingInClose.addEventListener('click', () => {
    popupSingIn.classList.toggle('active')
})



