const burger_btn = document.querySelector(".burger");
const menu = document.querySelector(".burger_menu_section");
let isMenuOpen = false;
function toggleMenu() {
    if (isMenuOpen) {
        menu.style.display = "";
        burger_btn.style.backgroundImage = 'url(./img/Burger.png)';
    }
    else {
        menu.style.display = "flex";
        burger_btn.style.backgroundImage = 'url(./img/Burger_close.png)';
    }
    isMenuOpen = !isMenuOpen;
}
burger_btn.addEventListener('click', toggleMenu);
let links = document.querySelectorAll(".menu_item_small");
links.forEach(link => {
    link.addEventListener('click', function () {
        if (isMenuOpen) toggleMenu();
    })
})
console.log(linkMenu);
