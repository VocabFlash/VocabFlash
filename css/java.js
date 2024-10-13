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
    } else if (typeof elem.webkitEnterFullscreen !== "undefined") { 
        // Für iOS Safari: Im Gegensatz zu desktop-Vollbild ist dies eher "Inline-Vollbild"
        alert("Fullscreen mode is not fully supported on iOS.");
        elem.style.width = "100vw";
        elem.style.height = "100vh";
        elem.style.overflow = "hidden"; // Versteckt den Scrollbalken
    }
}


// Funktion, um das Standardverhalten des Doppelklick-Zooms zu verhindern
function preventDoubleClickZoom() {
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault(); // Verhindert den Zoom durch Doppelklicken
    });
}

// Überprüfen, ob das DOM vollständig geladen ist, bevor die Funktion ausgeführt wird
document.addEventListener("DOMContentLoaded", preventDoubleClickZoom);


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

// Erstelle das Menü
const menu = document.createElement("div");
menu.classList.add("menu"); // Füge die Klasse hinzu
menu.style.display = "none"; // Menü verstecken
menu.style.position = "fixed";
menu.style.bottom = "50px"; // Position über dem Button
menu.style.left = "70px"; // Gleiche Position wie der Button
menu.style.backgroundColor = "white"; // Hintergrundfarbe
menu.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)"; // Schatten
menu.style.zIndex = "999"; // Ein bisschen unter dem Button

// Beispiel-Menüeinträge
const menuItems = ["Toggle Try Again", "Item 2", "Item 3"];
let tryAgainEnabled = true;

menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.innerHTML = item;
    menuItem.style.padding = "10px";
    menuItem.style.cursor = "pointer";
    
    // Füge eine Funktion für den "Toggle Try Again" Menüeintrag hinzu
    if (item === "Toggle Try Again") {
        menuItem.onclick = function() {
            tryAgainEnabled = !tryAgainEnabled; // Status umkehren
            alert(`"Try Again" ist jetzt ${tryAgainEnabled ? "aktiviert" : "deaktiviert"}.`); // Beispielaktion bei Auswahl
        };
    } else {
        menuItem.onclick = function() {
            alert(`Du hast ${item} ausgewählt!`); // Beispielaktion bei Auswahl
        };
    }
    
    menu.appendChild(menuItem); // Menüeintrag zum Menü hinzufügen
});

// Menü zum Body hinzufügen
document.body.appendChild(menu);

// Funktion für das Menü
menuButton.onclick = function() {
    if (menu.style.display === "none") {
        menu.style.display = "block"; // Menü anzeigen
    } else {
        menu.style.display = "none"; // Menü verstecken
    }
};

// Schließen des Menüs, wenn außerhalb geklickt wird
window.onclick = function(event) {
    if (event.target !== menuButton && menu.style.display === "block") {
        menu.style.display = "none"; // Menü verstecken
    }
};


// Event-Listener für das DOMContentLoaded-Event
document.addEventListener("DOMContentLoaded", function() {
    // Erstelle den Zurück-Button
    const backButton = document.createElement("button");
    backButton.classList.add("fixed-button"); // Füge die Klasse hinzu
    backButton.innerHTML = "↩"; // Symbol für den Zurück-Button
    backButton.title = "Zurück";
    backButton.style.position = "fixed";
    backButton.style.bottom = "10px";
    backButton.style.left = "10px"; // Position links
    backButton.style.zIndex = "1000";
    backButton.onclick = goBack; // Funktion für den Zurück-Button
    document.body.appendChild(backButton); // Button dem Body hinzufügen

    // Erstelle den Home-Button
    const homeButton = document.createElement("button");
    homeButton.classList.add("fixed-button"); // Füge die Klasse hinzu
    homeButton.innerHTML = "🏠︎"; // Symbol für den Home-Button
    homeButton.title = "Home";
    homeButton.style.position = "fixed";
    homeButton.style.bottom = "10px";
    homeButton.style.left = "40px"; // Position links, näher am Zurück-Button
    homeButton.style.zIndex = "1000";
    homeButton.onclick = goHome; // Funktion für den Home-Button
    document.body.appendChild(homeButton); // Button dem Body hinzufügen

        // Erstelle den Menü-Button
    const menuButton = document.createElement("button");
    menuButton.classList.add("fixed-button"); // Füge die Klasse hinzu
    menuButton.innerHTML = "☰"; // Symbol für den Home-Button
    menuButton.title = "Menu";
    menuButton.style.position = "fixed";
    menuButton.style.bottom = "10px";
    menuButton.style.left = "70px"; // Position links, näher am Zurück-Button
    menuButton.style.zIndex = "1000";
    menuButton.onclick = goMenu; // Funktion für den Home-Button
    document.body.appendChild(menuButton); // Button dem Body hinzufügen
    
    // Erstelle den Result Button
    const resultButton = document.createElement("button");
    resultButton.classList.add("fixed-button"); // Füge die Klasse hinzu
    resultButton.innerHTML = "RESULTS"; // Text für den Result Button
    resultButton.title = "Results";
    resultButton.style.position = "fixed";
    resultButton.style.bottom = "10px";
    resultButton.style.right = "70px"; // Position rechts, näher am Home-Button
    resultButton.style.zIndex = "1000";
    resultButton.style.padding = "5px 10px"; // Kleines Padding für den Button
    resultButton.style.fontSize = "9px"; // Kleinere Schriftgröße, falls gewünscht
    resultButton.style.whiteSpace = "nowrap"; // Verhindert Umbrüche im Text
    resultButton.style.display = "inline-block"; // Button nur so groß wie nötig
    resultButton.onclick = goResults; // Funktion für den Result Button
    document.body.appendChild(resultButton); // Button dem Body hinzufügen

    // Erstelle den Fullscreen-Button
    const fullscreenButton = document.createElement("button");
    fullscreenButton.classList.add("fixed-button"); // Füge die Klasse hinzu
    fullscreenButton.id = "fullscreenButton";
    fullscreenButton.title = "Fullscreen";
    fullscreenButton.innerHTML = "⛶";
    fullscreenButton.style.position = "fixed";
    fullscreenButton.style.bottom = "10px";
    fullscreenButton.style.right = "40px"; // Position rechts anpassen, näher am Darkmode-Button
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
    darkModeButton.classList.add("fixed-button"); // Füge die Klasse hinzu
    darkModeButton.onclick = toggleDarkMode; // Funktion zum Umschalten des Dark Modes
    darkModeButton.style.position = "fixed";
    darkModeButton.style.bottom = "10px";
    darkModeButton.style.right = "10px"; // Position rechts anpassen
    darkModeButton.style.zIndex = "1000";
    darkModeButton.innerHTML = "◐";
    document.body.appendChild(darkModeButton); // Button dem Body hinzufügen
});

