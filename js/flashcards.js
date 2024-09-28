let currentCardIndex = 0;
let vocabList = [];

// Funktion zum Laden des gewählten Sets aus der URL
function loadFlashcards(setName) {
    currentCardIndex = 0; // Zurücksetzen auf die erste Karte
    vocabList = getVocabSet(setName); // Hole die Vokabeln für das gewählte Set
    showCard(); // Zeige die erste Karte
}

// Funktion zum Anzeigen der aktuellen Karte
function showCard() {
    const card = document.getElementById('flashcard');
    card.innerHTML = vocabList[currentCardIndex].de; // Deutsch anzeigen
    card.dataset.ar = vocabList[currentCardIndex].ar; // Arabisch speichern
}

// Karte umdrehen
function flipCard() {
    const card = document.getElementById('flashcard');
    if (card.innerHTML === vocabList[currentCardIndex].de) {
        card.innerHTML = card.dataset.ar; // Arabisch anzeigen
    } else {
        showCard(); // Deutsch zurück anzeigen
    }
}

// Nächste Karte
function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % vocabList.length;
    showCard();
}

// Vorherige Karte
function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + vocabList.length) % vocabList.length;
    showCard();
}

// Navigation zwischen Seiten
function navigateTo(page) {
    window.location.href = page;
}

// Flashcards laden, sobald die Seite geöffnet wird
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const set = urlParams.get('set');
    loadFlashcards(set);

    const card = document.getElementById('flashcard');
    card.addEventListener('click', flipCard); // Klick für Kartenflip
    document.getElementById('nextButton').addEventListener('click', nextCard); // Nächste Karte
    document.getElementById('prevButton').addEventListener('click', prevCard); // Vorherige Karte
};
