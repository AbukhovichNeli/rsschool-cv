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

function timer() {
    let currentDate = new Date();
    let NewYear = new Date('2025-01-01 00:00:00');
    let result = ((NewYear - currentDate) + 1000)/1000; //преобразуем в секунды
    let day = document.querySelector(".dath h2");
    let hours = document.querySelector(".hours h2");
    let minutes = document.querySelector(".minutes h2");
    let seconds = document.querySelector(".seconds h2");
    if (result <= 0) {
        const timeElements = [
            { selector: ".dath h2", value: "--" },
            { selector: ".hours h2", value: "--" },
            { selector: ".minutes h2", value: "--" },
            { selector: ".seconds h2", value: "--" }
        ];
        timeElements.forEach(item => {
            document.querySelector(item.selector).innerHTML = item.value;
        });
        return undefined;
    }
    let resultSeconds = Math.floor(result % 60);
    let resultMinutes = Math.floor((result/60) % 60);
    let resultHours = Math.floor((result/60/60) % 24);
    let resultDays = Math.floor((result/ 60/60/24));
    if (resultSeconds < 10) resultSeconds = '0' + resultSeconds;
    if (resultMinutes < 10) resultMinutes = '0' + resultMinutes;
    if (resultHours < 10) resultHours = '0' + resultHours;

    day.innerHTML = resultDays;
    hours.innerHTML = resultHours;
    minutes.innerHTML = resultMinutes;
    seconds.innerHTML = resultSeconds;

    
}

setInterval(timer, 1000);