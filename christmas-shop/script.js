const burger_btn = document.querySelector(".burger");
const menu = document.querySelector(".burger_menu_section");
let isMenuOpen = false;
function toggleMenu() {
    if (isMenuOpen) {
        menu.style.display = "";
        burger_btn.querySelectorAll(".bar")[0].style.transform = '';
        burger_btn.querySelectorAll(".bar")[1].style.transform = '';
        burger_btn.querySelector(".bar").style.marginRight = '';
        document.body.style.overflow = "auto";
    }
    else {
        menu.style.display = "flex";
        burger_btn.querySelectorAll(".bar")[0].style.transform = 'rotate(45deg)';
        burger_btn.querySelectorAll(".bar")[1].style.transform = 'rotate(-45deg)';
        burger_btn.querySelector(".bar").style.marginRight = '-1.5px';
        document.body.style.overflow = "hidden";
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
    let result = ((NewYear - currentDate) + 1000) / 1000;
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
    let resultMinutes = Math.floor((result / 60) % 60);
    let resultHours = Math.floor((result / 60 / 60) % 24);
    let resultDays = Math.floor((result / 60 / 60 / 24));
    if (resultSeconds < 10) resultSeconds = '0' + resultSeconds;
    if (resultMinutes < 10) resultMinutes = '0' + resultMinutes;
    if (resultHours < 10) resultHours = '0' + resultHours;

    day.innerHTML = resultDays;
    hours.innerHTML = resultHours;
    minutes.innerHTML = resultMinutes;
    seconds.innerHTML = resultSeconds;
}
setInterval(timer, 1000);

const next_btn = document.querySelector("#next");
const back_btn = document.querySelector("#back");
let slider = document.querySelector(".text_love_create_love_dream");
let i = 0;
function scroll_slider_next() {
    slider.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
}
function scroll_slider_back() {
    slider.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
}
function updateStatusScroll() {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        next_btn.classList.remove('active_btn');
        back_btn.classList.add('active_btn');
    }
    else {
        if (slider.scrollLeft > 0) {
            back_btn.classList.add('active_btn');
            next_btn.classList.add('active_btn');
        }
        else {
            back_btn.classList.remove('active_btn');
            next_btn.classList.add('active_btn');
        }
    }
}
next_btn.addEventListener('click', function () {
    scroll_slider_next(),
        updateStatusScroll()
});
back_btn.addEventListener('click', function () {
    scroll_slider_back(),
        updateStatusScroll()
});

fetch('./gifts.json')
    .then(response => response.json())
    .then(data => {
        const gift_cards = document.querySelectorAll(".card");
        function getRandomCard() {
            const randomIndex = Math.floor(Math.random() * data.length);
            return data[randomIndex];
        }
        gift_cards.forEach(card => {
            const gift = getRandomCard();
            card.innerHTML =
                `<img src="/img/${gift.category}.png" alt="${gift.name}">
                <div class="card_text">
                    <h4 style="color: ${getCategoryColor(gift.category)};">${gift.category}</h4>
                    <h3>${gift.name}</h3>
                </div>`;
        });
    })
    .catch(error => console.error('Ошибка загрузки JSON:', error));
    function getCategoryColor(category) {
        if (category === "For Health") {
            return '#FF43F7'; 
        } else if (category === "For Work") {
            return '#4361FF'; 
        } else if (category === "For Harmony") {
            return '#06A44F'; 
        };
    }

    const sliderToTop = document.querySelector(".scrollUP");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            sliderToTop.style.display = "block"; 
        } else {
            sliderToTop.style.display = "none";
        }
    });
    sliderToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });