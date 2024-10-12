// Funktion zum Anfordern des Vollbildmodus
function openFullscreen() {
    const elem = document.documentElement; // Vollbild für die gesamte Seite anfordern
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari und Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
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

// Event-Listener für das DOMContentLoaded-Event
document.addEventListener("DOMContentLoaded", function() {
    // Erstelle den Fullscreen Button
    const fullscreenButton = document.createElement("button");
    fullscreenButton.id = "fullscreenButton";
    fullscreenButton.title = "Fullscreen";
    fullscreenButton.innerHTML = "⛶";
    fullscreenButton.style.position = "fixed";
    fullscreenButton.style.bottom = "10px";
    fullscreenButton.style.left = "10px"; // Oder andere Position
    fullscreenButton.style.zIndex = "1000";
    document.body.appendChild(fullscreenButton); // Button dem Body hinzufügen

    // Event-Listener für den Fullscreen Button
    fullscreenButton.addEventListener('click', openFullscreen);

    // Erstelle den Dark Mode Button
    const darkModeButton = document.createElement("button");
    darkModeButton.onclick = toggleDarkMode; // Funktion zum Umschalten des Dark Modes
    darkModeButton.style.position = "fixed";
    darkModeButton.style.bottom = "10px";
    darkModeButton.style.right = "10px";
    darkModeButton.style.zIndex = "1000";
    darkModeButton.innerHTML = "◐";
    document.body.appendChild(darkModeButton); // Button dem Body hinzufügen
});
