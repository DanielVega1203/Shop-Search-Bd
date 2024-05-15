/* Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Mostrar */
/* Valida si existe */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu Encabezado */
/* Valida si existe */
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remueve menu movil */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* Swiper */
let swiperShoes = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect:{
        prev:{
            translate: [-100, 0, -500],
            opacity: 0
        },
        next:{
            translate: [100, 0, -500],
            opacity: 0
        }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  /* Sombra de encabezado */
  const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
  }

  window.addEventListener('scroll', shadowHeader)


  