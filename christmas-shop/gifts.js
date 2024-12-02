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
