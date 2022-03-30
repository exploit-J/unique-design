const sideMenuButton = document.querySelector('.side-menu-button')
const sideMenu = document.querySelector('nav')
const overlay = document.querySelector('.overlay')

sideMenuButton.addEventListener('click', () =>
  sideMenu.classList.toggle('is-active'))