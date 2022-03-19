document.addEventListener('DOMContentLoaded', () => {
    const moreButton = document.querySelector('.more')
    const modal = document.querySelector('.modal')
    const overlay = modal.querySelector('.overlay')
    const modalCloseButton = modal.querySelector('.modal__close')

    moreButton.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
    overlay.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
    modalCloseButton.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
})