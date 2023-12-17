const kartyak = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


let seconds = 0;
const stopperDisplay = document.getElementById('stopper-display');

function Flip() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    Match();
}

function Match() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCard();
        checkWin();
    } else {
        unFlip();
    }
}



function unFlip() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        Reset();
    }, 1500);
}

function disableCard() {
    setTimeout(() => {
        firstCard.classList.add('hidden');
        secondCard.classList.add('hidden');
        firstCard.style.opacity = 0;
        secondCard.style.opacity = 0;
        Reset();
    }, 800);
}

function Reset() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function checkWin() {
    setTimeout(() => {
        const hiddenCards = document.querySelectorAll('.hidden');
        if (hiddenCards.length === kartyak.length) {
            alert('Gratulálok, minden kártya eltűnt!\nIdő: '  + seconds + ' másodperc');
            restartGame();
        }
    }, 800);
}

function restartGame() {
    kartyak.forEach(kartya => {
        kartya.classList.remove('hidden', 'flip');
        kartya.style.opacity = 1;
    });

    shuffleCards();

    lockBoard = false;

    seconds = 0;
}

function shuffleCards() {
    kartyak.forEach(kartya => {
        let random = Math.floor(Math.random() * 12);
        kartya.style.order = random;
    });
}

(function initGame() {
    shuffleCards();
    kartyak.forEach(kartya => kartya.addEventListener('click', Flip));

    setInterval(() => {
        seconds++;

        const displayMinutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;

        stopperDisplay.textContent = `Idő: ${displayMinutes} perc ${displaySeconds} másodperc`;
    }, 1000); 
})();