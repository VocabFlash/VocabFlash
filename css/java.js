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
    darkModeButton.onclick = toggleDarkMode; // Deine Funktion zum Umschalten des Dark Modes
    darkModeButton.style.position = "fixed";
    darkModeButton.style.bottom = "10px";
    darkModeButton.style.right = "10px";
    darkModeButton.style.zIndex = "1000";
    darkModeButton.innerHTML = "◐";
    document.body.appendChild(darkModeButton); // Button dem Body hinzufügen

    // Dropdown-Menü erstellen
    createDropdown(); // Stelle sicher, dass die Dropdown-Funktion aufgerufen wird
});

// Neues Array für das Dropdown-Menü
const vocabSetOptions = [
    { value: "set1", text: "Set 1 - Arabisch 1" },
    { value: "set2", text: "Set 2 - Arabisch 2" },
    { value: "set3", text: "Set 3 - Franz 1.1" },
    { value: "set4", text: "Set 4 - Franz 1.2" },
    { value: "set5", text: "Set 5 - Franz 1.3" },
    { value: "set6", text: "Set 6 - Franz 1.4" },
    { value: "set7", text: "Set 7 - " },
    { value: "set8", text: "Set 8 - " },
    // Füge hier weitere Sets hinzu
];

    // Funktion zum Erstellen des Dropdown-Menüs
    //function createDropdown() {
        //(const label = document.createElement("label");
       // label.setAttribute("for", "setSelect");
        //label.textContent = "Choose a set:";
    
        //const select = document.createElement("select");
        //select.id = "setSelect";
       // select.onchange = updateVocabSet; // Stelle sicher, dass die Funktion existiert
    
        // Optionen zum Dropdown-Menü hinzufügen
      //  vocabSetOptions.forEach(set => {
         //   const option = document.createElement("option");
          //  option.value = set.value;
         //   option.textContent = set.text;
        //    select.appendChild(option);
  //      });
    
        // Dropdown und Label zum Body hinzufügen
    //    document.body.appendChild(label);
   //     document.body.appendChild(select);
//    }
