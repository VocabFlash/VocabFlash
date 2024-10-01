const verbEndings = {
    er: {
        present: { je: "e", tu: "es", il: "e", nous: "ons", vous: "ez", ils: "ent" },
        passeCompose: { auxiliary: "avoir", pastParticiple: "é" }, // Passe compose basiert auf avoir + participe
        imparfait: { je: "ais", tu: "ais", il: "ait", nous: "ions", vous: "iez", ils: "aient" }
    },
    cer: {
        present: { je: "e", tu: "es", il: "e", nous: "çons", vous: "ez", ils: "ent" }, // Ausnahme bei "nous" Form
        passeCompose: { auxiliary: "avoir", pastParticiple: "é" },
        imparfait: { je: "ais", tu: "ais", il: "ait", nous: "ions", vous: "iez", ils: "aient" }
    },
    ger: {
        present: { je: "e", tu: "es", il: "e", nous: "geons", vous: "ez", ils: "ent" }, // Ausnahme bei "nous" Form
        passeCompose: { auxiliary: "avoir", pastParticiple: "é" },
        imparfait: { je: "ais", tu: "ais", il: "ait", nous: "ions", vous: "iez", ils: "aient" }
    },
    // Stammverdopplung oder Stammwechsel
    doubl: {
        present: { je: "èe", tu: "èes", il: "èe", nous: "eons", vous: "ez", ils: "èent" },
        passeCompose: { auxiliary: "avoir", pastParticiple: "é" },
        imparfait: { je: "ais", tu: "ais", il: "ait", nous: "ions", vous: "iez", ils: "aient" }
    }
};

// Spezielle Gruppen basierend auf den Verbtypen
const verbSets = {
    reg1: [
        { verb: "parler", group: "er" },
        { verb: "marcher", group: "er" },
        { verb: "aimer", group: "er" },
        { verb: "demander", group: "er" },
        { verb: "réveiller", group: "er" },
        { verb: "conjuguer", group: "er" },
        { verb: "aider", group: "er" },
        { verb: "remercier", group: "er" },
        { verb: "arrêter", group: "er" },
        { verb: "créer", group: "er" }
    ],
    cerVerbs: [
        { verb: "commencer", group: "cer" }
    ],
    gerVerbs: [
        { verb: "manger", group: "ger" }
    ],

    // Hinzufügen der hellgrün markierten Verben (Gruppe -er doubl. v. pr.)
    doublVerbs: [
        { verb: "se lever", group: "doubl" },
        { verb: "se promener", group: "doubl" },
        { verb: "acheter", group: "doubl" },
        { verb: "geler", group: "doubl" },
        { verb: "appeler", group: "doubl" },
        { verb: "jeter", group: "doubl" },
        { verb: "répéter", group: "doubl" },
        { verb: "posséder", group: "doubl" },
        { verb: "espérer", group: "doubl" },
        { verb: "appuyer", group: "doubl" },
        { verb: "s’ennuyer", group: "doubl" },
        { verb: "nettoyer", group: "doubl" },
        { verb: "employer", group: "doubl" },
        { verb: "essayer", group: "doubl" },
        { verb: "payer", group: "doubl" },
        { verb: "envoyer", group: "doubl" }
    ],

    // Unregelmäßige Verben
    irreguler: {
        "aller": {
            present: { je: "vais", tu: "vas", il: "va", nous: "allons", vous: "allez", ils: "vont" },
            passeCompose: { je: "suis allé", tu: "es allé", il: "est allé", nous: "sommes allés", vous: "êtes allés", ils: "sont allés" },
            imparfait: { je: "allais", tu: "allais", il: "allait", nous: "allions", vous: "alliez", ils: "allaient" }
        },
        "venir": {
            present: { je: "viens", tu: "viens", il: "vient", nous: "venons", vous: "venez", ils: "viennent" },
            passeCompose: { je: "suis venu", tu: "es venu", il: "est venu", nous: "sommes venus", vous: "êtes venus", ils: "sont venus" },
            imparfait: { je: "venais", tu: "venais", il: "venait", nous: "venions", vous: "veniez", ils: "venaient" }
        },
        "être": {
            present: { je: "suis", tu: "es", il: "est", nous: "sommes", vous: "êtes", ils: "sont" },
            passeCompose: { je: "ai été", tu: "as été", il: "a été", nous: "avons été", vous: "avez été", ils: "ont été" },
            imparfait: { je: "étais", tu: "étais", il: "était", nous: "étions", vous: "étiez", ils: "étaient" }
        },
        "avoir": {
            present: { je: "ai", tu: "as", il: "a", nous: "avons", vous: "avez", ils: "ont" },
            passeCompose: { je: "ai eu", tu: "as eu", il: "a eu", nous: "avons eu", vous: "avez eu", ils: "ont eu" },
            imparfait: { je: "avais", tu: "avais", il: "avait", nous: "avions", vous: "aviez", ils: "avaient" }
        }
    }
};

// Hilfsfunktion zur Konjugation
function conjugate(verb, tense, pronoun) {
    const verbGroup = verb.group || "er"; // Standardmäßig "er" falls keine Gruppe angegeben ist
    const endings = verbEndings[verbGroup][tense]; // Endungen basierend auf Zeitform und Gruppe
    const stem = verb.verb.slice(0, -2); // Stamm des Verbs
    
    if (endings) {
        return `${pronoun} ${stem}${endings[pronoun]}`; // Konjugiertes Verb
    } else {
        // Unregelmäßiges Verb komplett abrufen
        const irregularVerb = verbSets.irreguler[verb.verb];
        return irregularVerb ? irregularVerb[tense][pronoun] : "Verb not found";
    }
}

// Beispielaufruf:
console.log(conjugate({ verb: "se lever", group: "doubl" }, "present", "je")); // Erwartet: "je me lève"
