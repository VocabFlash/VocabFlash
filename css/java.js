<script>
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
</script>
