const sideMenuButton = document.querySelector('.side-menu-button')
const sideMenu = document.querySelector('nav')
const overlay = document.querySelector('.overlay')

sideMenuButton.addEventListener('click', () =>
  sideMenu.classList.toggle('is-active'))


// menu 클릭 시 스크롤 이동
const moveButton = document.querySelectorAll('.nav-button')
const topHeight = 50

function moveScroll(){
  const sectionId = this.getAttribute('id')
  const toSection = document.querySelector(`.${sectionId}`)

  const scrollAmount = toSection.offsetTop - topHeight

  window.scrollTo({
    top : scrollAmount,
    behavior : 'smooth'
  })

  sideMenu.classList.remove('is-active')
}

moveButton.forEach((button) => {
  button.addEventListener('click', moveScroll)
})

// home버튼 클릭 시 최상단으로 이동
const homeButton = document.querySelector('header .logo button')

homeButton.addEventListener('click', () => {
  window.scrollTo({
    top : 0, 
    behavior : 'smooth'
  })
  sideMenu.classList.remove('is-active')
})