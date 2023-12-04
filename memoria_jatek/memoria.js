const kartyak = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

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

function disableCard() {
    firstCard.classList.add('hidden');
    secondCard.classList.add('hidden');
    Reset();
}

function unFlip() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        Reset();
    }, 1500);
}

function Reset() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function checkWin() {
    const hiddenCards = document.querySelectorAll('.hidden');
    if (hiddenCards.length === kartyak.length) {
        alert('Gratulálok, minden kártya eltűnt!');
    }
}

(function shuffle() {
    kartyak.forEach(kartya => {
        let random = Math.floor(Math.random() * 12);
        kartya.style.order = random;
    });
})();

kartyak.forEach(kartya => kartya.addEventListener('click', Flip));
