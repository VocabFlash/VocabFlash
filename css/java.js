// Funktion zum Anfordern des Vollbildmodus 
function openFullscreen() {
    const elem = document.documentElement; // Vollbild für die gesamte Seite anfordern
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera und Brave
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    } else if (typeof elem.webkitEnterFullscreen !== "undefined") { // Für iOS Safari
        elem.webkitEnterFullscreen();
    }
}

// Funktion zum Beenden des Vollbildmodus 
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera und Brave
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

// Funktion zum Umschalten des Dark Modes
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Funktion zum Aktualisieren des Vokabelsets
function updateVocabSet() {
    const selectedSet = document.getElementById("setSelect").value;
    console.log("Ausgewähltes Set:", selectedSet);
    // Hier kannst du die Logik hinzufügen, um das gewählte Vokabelset zu verwenden
}

// Funktion für den Zurück-Button
function goBack() {
    window.history.back();
}

// Funktion für den Home-Button
function goHome() {
    window.location.href = 'index.html'; // Ersetze mit der URL deiner Startseite
}

// Event-Listener für das DOMContentLoaded-Event
document.addEventListener("DOMContentLoaded", function() {
    // Erstelle den Fullscreen-Button
    const fullscreenButton = document.createElement("button");
    fullscreenButton.id = "fullscreenButton";
    fullscreenButton.title = "Fullscreen";
    fullscreenButton.innerHTML = "⛶";
    fullscreenButton.style.position = "fixed";
    fullscreenButton.style.bottom = "10px";
    fullscreenButton.style.right = "70px"; // Position anpassen, um Abstand zu den anderen Buttons zu schaffen
    fullscreenButton.style.zIndex = "1000";
    document.body.appendChild(fullscreenButton); // Button dem Body hinzufügen

    // Event-Listener für den Fullscreen-Button
    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            openFullscreen(); // Vollbildmodus aktivieren
        } else {
            closeFullscreen(); // Vollbildmodus beenden
        }
    });

    // Erstelle den Dark-Mode-Button
    const darkModeButton = document.createElement("button");
    darkModeButton.onclick = toggleDarkMode; // Funktion zum Umschalten des Dark Modes
    darkModeButton.style.position = "fixed";
    darkModeButton.style.bottom = "10px";
    darkModeButton.style.right = "10px"; // Position anpassen, um Abstand zu den anderen Buttons zu schaffen
    darkModeButton.style.zIndex = "1000";
    darkModeButton.innerHTML = "◐";
    document.body.appendChild(darkModeButton); // Button dem Body hinzufügen

    // Erstelle den Zurück-Button
    const backButton = document.createElement("button");
    backButton.innerHTML = "↩"; // Symbol für den Zurück-Button
    backButton.title = "Zurück";
    backButton.style.position = "fixed";
    backButton.style.bottom = "10px";
    backButton.style.right = "130px"; // Position anpassen
    backButton.style.zIndex = "1000";
    backButton.onclick = goBack; // Funktion für den Zurück-Button
    document.body.appendChild(backButton); // Button dem Body hinzufügen

    // Erstelle den Home-Button
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "🏠︎"; // Symbol für den Home-Button
    homeButton.title = "Home";
    homeButton.style.position = "fixed";
    homeButton.style.bottom = "10px";
    homeButton.style.right = "50px"; // Position anpassen
    homeButton.style.zIndex = "1000";
    homeButton.onclick = goHome; // Funktion für den Home-Button
    document.body.appendChild(homeButton); // Button dem Body hinzufügen
});
