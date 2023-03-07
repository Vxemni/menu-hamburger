const burgerBtn = document.querySelector('.burger')
const barsBtn = document.querySelector('.fa-bars')
const xBtn = document.querySelector('.fa-xmark')
const menu = document.querySelector('nav ul')

const movingMenu = () => {
    burgerBtn.classList.toggle('active')
    menu.classList.toggle('active')
    barsBtn.classList.toggle('hide')
    xBtn.classList.toggle('hide')
}

burgerBtn.addEventListener('click', movingMenu)