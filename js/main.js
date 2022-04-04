const sideMenuButton = document.querySelector('.side-menu-button')
const sideMenu = document.querySelector('nav')
const overlay = document.querySelector('.overlay')

sideMenuButton.addEventListener('click', () =>
  sideMenu.classList.toggle('is-active'))

const moveButton = document.querySelectorAll('.nav-button')
const topHeight = 50

function clicked(){
  const sectionId = this.getAttribute('id')
  const toSection = document.querySelector(`.${sectionId}`)
  console.log(sectionId);
  console.log(toSection);

  const scrollAmount = toSection.offsetTop - topHeight
  console.log(scrollAmount)

  window.scrollTo({
    top : scrollAmount,
    behavior : 'smooth'
  })

  sideMenu.classList.remove('is-active')
}

moveButton.forEach((button) => {
  button.addEventListener('click', clicked)
})
