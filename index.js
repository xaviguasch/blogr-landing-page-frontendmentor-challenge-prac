// Selectors
const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')
const nav = document.querySelector('.nav')

const navLinks = document.querySelectorAll('.nav-link--main')

// Functions
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

const showDrop = (e) => {
  navLinks.forEach((navLink) => {
    navLink.classList.remove('open')
  })

  e.target.parentElement.classList.add('open')
}

// Event listeners
openNav.addEventListener('click', showModal)
closeNav.addEventListener('click', hideModal)

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', showDrop)
})
