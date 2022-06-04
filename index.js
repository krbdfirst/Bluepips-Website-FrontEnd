let menuItems = document.querySelector('.menu-items')
let mobToggle = document.querySelector('.mob-toggle')

mobToggle.addEventListener('click', () => {
    const visibility = menuItems.getAttribute('data-visible')
    if (visibility === "false") {
        menuItems.setAttribute('data-visible', true)
    }
    else {
        menuItems.setAttribute('data-visible', false)
    }
})