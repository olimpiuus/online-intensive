document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu')
    const burgerButton = document.querySelector('.humburger-menu')
    const menuLinks = menu.querySelectorAll('.menu-list__link')

    burgerButton.addEventListener('click', () => {
        menu.classList.toggle('menu-active')
    })
    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('menu-active')
        })
    })

    document.addEventListener('click', (event) => {
        if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
            menu.classList.remove('menu-active')
        }
    })
})