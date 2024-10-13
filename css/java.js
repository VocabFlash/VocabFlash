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
    // Speichere den aktuellen Status im Local Storage
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
}

// Überprüfen, ob der Dark Mode aktiviert ist
document.addEventListener("DOMContentLoaded", function() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode'); // Dark Mode aktivieren
    }
});

// Funktion für den Zurück-Button
function goBack() {
    window.history.back();
}

// Funktion für den Home-Button
function goHome() {
    window.location.href = 'index.html'; // Ersetze mit der URL deiner Startseite
}

// Funktion für den Result-Button
function goResults() {
    window.location.href = 'result.html'; // Ersetze mit der URL deiner Startseite
}

// Event-Listener für das DOMContentLoaded-Event
document.addEventListener("DOMContentLoaded", function() {
    // Gemeinsame Button-Eigenschaften
    const buttonStyle = {
        position: 'fixed',
        bottom: '10px',
        zIndex: '1000',
        padding: '5px',
        fontSize: '14px', // Größer für mobile Lesbarkeit
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        border: '1px solid #ccc'
    };

    // Erstelle den Zurück-Button
    const backButton = document.createElement("button");
    backButton.innerHTML = "↩"; // Symbol für den Zurück-Button
    backButton.title = "Zurück";
    Object.assign(backButton.style, buttonStyle, { left: '10px' });
    backButton.onclick = goBack;
    document.body.appendChild(backButton);

    // Erstelle den Home-Button
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "🏠︎"; // Symbol für den Home-Button
    homeButton.title = "Home";
    Object.assign(homeButton.style, buttonStyle, { left: '60px' });
    homeButton.onclick = goHome;
    document.body.appendChild(homeButton);

    // Erstelle den Result Button
    const resultButton = document.createElement("button");
    resultButton.innerHTML = "RESULTS";
    resultButton.title = "Results";
    Object.assign(resultButton.style, buttonStyle, { right: '110px' });
    resultButton.onclick = goResults;
    document.body.appendChild(resultButton);

    // Erstelle den Fullscreen-Button
    const fullscreenButton = document.createElement("button");
    fullscreenButton.id = "fullscreenButton";
    fullscreenButton.title = "Fullscreen";
    fullscreenButton.innerHTML = "⛶";
    Object.assign(fullscreenButton.style, buttonStyle, { right: '60px' });
    document.body.appendChild(fullscreenButton);

    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            openFullscreen();
        } else {
            closeFullscreen();
        }
    });

    // Erstelle den Dark-Mode-Button
    const darkModeButton = document.createElement("button");
    darkModeButton.innerHTML = "◐";
    darkModeButton.title = "Dark Mode";
    Object.assign(darkModeButton.style, buttonStyle, { right: '10px' });
    darkModeButton.onclick = toggleDarkMode;
    document.body.appendChild(darkModeButton);
});

// Stile für kleine Bildschirme anpassen
function adjustButtonPositions() {
    const isSmallScreen = window.innerWidth < 600; // Schwellenwert für kleine Bildschirme
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        if (isSmallScreen) {
            button.style.fontSize = '12px';
            button.style.padding = '3px';
        } else {
            button.style.fontSize = '14px';
            button.style.padding = '5px';
        }
    });
}

// Ereignislistener für Größenänderungen des Fensters
window.addEventListener('resize', adjustButtonPositions);
adjustButtonPositions(); // Initial aufrufen
