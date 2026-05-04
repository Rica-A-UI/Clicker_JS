let score = 0;
let autoClickSpeed = 0;

const scoreText = document.getElementById('scoreText');
const clickImg = document.getElementById('for_pressing');
const upgradeCards = document.querySelectorAll('.upgrade-card');

const upgrades = [
    { name: "Manual Labor", cost: 15, power: 1 },
    { name: "Small Factory", cost: 100, power: 5 },
    { name: "Industrialization", cost: 500, power: 20 },
    { name: "Five Year Plan", cost: 2500, power: 100 }
];

clickImg.addEventListener('click', () => {
    score++;
    updateDisplay();
});

upgradeCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const item = upgrades[index];

        if (score >= item.cost) {
            score -= item.cost;
            autoClickSpeed += item.power;
            item.cost = Math.floor(item.cost * 1.5);
            card.querySelector('p').textContent = `Cost: ${item.cost}`;
            updateDisplay();
        } else {
            card.style.backgroundColor = "#ffcccc";
            setTimeout(() => card.style.backgroundColor = "", 200);
        }
    });
});

function updateDisplay() {
    scoreText.textContent = Math.floor(score);
}


setInterval(() => {
    score += autoClickSpeed;
    updateDisplay();
}, 1000);
