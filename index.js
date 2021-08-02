const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')
const nav = document.querySelector('.nav')

const showModal = () => {
  openNav.style.display = 'none'
  closeNav.style.display = 'block'

  nav.classList.add('open')
}

const hideModal = () => {
  openNav.style.display = 'block'
  closeNav.style.display = 'none'

  nav.classList.remove('open')
}

openNav.addEventListener('click', showModal)
closeNav.addEventListener('click', hideModal)
