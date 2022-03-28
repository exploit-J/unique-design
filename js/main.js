const sideMenuButton = document.querySelector('.side-menu-button')
const sideMenu = document.querySelector('nav')
const closeMenuButton = document.querySelector('.close-button')

sideMenuButton.addEventListener('click', () => 
  sideMenu.classList.add('is-active'))

  closeMenuButton.addEventListener('click', () =>
  sideMenu.classList.remove('is-active'))