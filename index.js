let menuItems = document.querySelector('.menu-items')
let mobToggle = document.querySelector('.mob-toggle')
let toggleIcon = document.querySelector('#toggle-image')

mobToggle.addEventListener('click', () => {
    const visibility = menuItems.getAttribute('data-visible')
    if (visibility === "false") {
        menuItems.setAttribute('data-visible', true)
        toggleIcon.src = "images/x.png"
    }
    else {
        menuItems.setAttribute('data-visible', false)
        toggleIcon.src = "images/menu.png"
    }
})