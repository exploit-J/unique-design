// 공통기능 (home, sidemenu버튼, underline)

const sideMenuButton = document.querySelector('.side-menu-button')
const sideMenu = document.querySelector('nav')
const homeButton = document.querySelector('.to-top button')
const listItem = document.querySelectorAll('header nav li')

sideMenuButton.addEventListener('click', () =>
  sideMenu.classList.toggle('is-active'))

homeButton.addEventListener('click', () => {
  window.scrollTo({
    top : 0, 
    behavior : 'smooth'
  })
  sideMenu.classList.remove('is-active')
})

const underline = document.querySelector('.underline')
function underlineEffect(e){
  underline.classList.add('is-active')
  underline.style.left = e.currentTarget.offsetLeft + 'px';
  underline.style.width = e.currentTarget.offsetWidth + 'px';
  underline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight - 3 + 'px';
}

listItem.forEach(item => item.addEventListener('click', (e) => underlineEffect(e)))


function checkScroll(){
  let currentScroll = window.scrollY
  if(currentScroll > 1000){
    homeButton.classList.add('is-active')
  }else{
    homeButton.classList.remove('is-active')
  }
  console.log(currentScroll);
}

window.addEventListener('scroll', checkScroll);