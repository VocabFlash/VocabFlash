const vocabSets = {
    set1: [
        { de: "Beweis", ar: "إثبات" },
        { de: "Vater", ar: "أب" },
        { de: "mein Vater", ar: "أبي" },
    ],
    set2: [
        { de: "Schwester", ar: "أخت" },
        { de: "Tür", ar: "باب" },
        { de: "Krone", ar: "تاج" },
    ],
    set3: [
        { de: "und", ar: "و" },
        { de: "Suche", ar: "بحث" },
        { de: "ich suche", ar: "أبحث" },
    ]
};

// Funktion, um das gewählte Set basierend auf dem Namen zurückzugeben
function getVocabSet(setName) {
    return vocabSets[setName];
}

