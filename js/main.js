const sideMenuButton = document.querySelector('.side-menu-button')
const sideMenu = document.querySelector('nav')

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
  underline.classList.remove('is-active')
})

// 밑줄 효과
const underline = document.querySelector('.underline')
function underlineEffect(e){
  underline.classList.add('is-active')
  underline.style.left = e.currentTarget.offsetLeft + 'px';
  underline.style.width = e.currentTarget.offsetWidth + 'px';
  underline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight - 3 + 'px';
}

moveButton.forEach(button => button.addEventListener('click', (e) => underlineEffect(e)))

// slide

const slideShow = document.querySelector('.slide-show')
const slideList = document.querySelectorAll('.slide-list')
const nextButton = document.querySelector('.slide .next')
const prevButton = document.querySelector('.slide .prev')
let currentSlide = 0
const pauseButton = document.querySelector('.pause')
const playButton = document.querySelector('.play')
let autoPlay = setInterval(next, 3500); // 함수 자동실행

pauseButton.addEventListener('click', () => clearInterval(autoPlay))
playButton.addEventListener('click', () => autoPlay = setInterval(next, 3500))

function next(){
  slideShow.style.transform = `translateX(${-100 * (currentSlide + 1)}vw)`
  currentSlide ++
  if(currentSlide == slideList.length){
    slideShow.style.transform = `translateX(0)`
    currentSlide = -1
    next()
  }
  // console.log(currentSlide);
}

function prev(){
  slideShow.style.transform = `translateX(${-100 * (currentSlide - 1)}vw)`
  currentSlide --
  if(currentSlide<0){
    currentSlide = slideList.length
    prev()
  }
  // console.log(currentSlide);
}

nextButton.addEventListener('click', next)
prevButton.addEventListener('click', prev)
