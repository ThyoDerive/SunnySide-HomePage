const Menu = document.querySelector('.Menu')
const SousMenu = document.querySelector('.Sous-Menu')

Menu.addEventListener('click', (e) => {
    if (SousMenu.style.display == 'none') {
        SousMenu.style.display = 'flex'
    } else {
        SousMenu.style.display = 'none'
    }
})