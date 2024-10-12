

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

    // Event-Listener für den Button
    document.getElementById('fullscreenButton').addEventListener('click', openFullscreen);

  // Funktion zum Umschalten des Dark Modes
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }


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
        fullscreenButton.onclick = function() {
            // Deine Logik für Vollbild
        };
        document.body.appendChild(fullscreenButton);

        // Erstelle den Dark Mode Button
        const darkModeButton = document.createElement("button");
        darkModeButton.onclick = toggleDarkMode; // Deine Funktion zum Umschalten des Darkmodes
        darkModeButton.style.position = "fixed";
        darkModeButton.style.bottom = "10px";
        darkModeButton.style.right = "10px";
        darkModeButton.style.zIndex = "1000";
        darkModeButton.innerHTML = "◐";
        document.body.appendChild(darkModeButton);
    });

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }


