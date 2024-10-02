// vocabSets.js
const vocabSets= {
  set1: [
    { de: "Beweis, Bestätigung", ar: "إثبات" },
    { de: "Vater", ar: "أب" },
    { de: "mein Vater", ar: "أبي" },
    { de: "Bruder", ar: "أخ" },
    { de: "Schwester", ar: "أخت" },
    { de: "Tür", ar: "باب ج أبواب" },
    { de: "Krone", ar: "تاج" },
    { de: "und", ar: "و" },
    { de: "Bruder und Schwester", ar: "أخ وأخت" },
    { de: "Suche, Forschungsarbeit", ar: "بحث، أبحاث" },
    { de: "oder", ar: "أو" },
    { de: "ich suche", ar: "أبحث" },
    { de: "Oh (Anredepartikel)", ar: "يا" },
    { de: "unter", ar: "تحت" },
    { de: "Oh Bruder!", ar: "!يا أخ" },
    { de: "Schleier", ar: "حجاب" },
    { de: "welche(r/s)?", ar: "أي؟" },
    { de: "Pilgerfahrt", ar: "حج" },
    { de: "Geliebter", ar: "حبيب" },
    { de: "Pilger", ar: "حاج ج حجاج" },
    { de: "mein Liebling", ar: "حبيبي" },
    { de: "Liebe", ar: "حب" },
    { de: "ich liebe, ich mag", ar: "أحب" },
    { de: "Haus", ar: "بيت ج بيوت" },
    { de: "Möbel, Mobiliar", ar: "أثاث" },
    { de: "Kopf", ar: "رأس" },
    { de: "Lektion", ar: "درس ج دروس" },
    { de: "Meer", ar: "بحر" },
    { de: "studieren, lernen", ar: "درس، يدرس" },
    { de: "trinken", ar: "شرب، يشرب" },
    { de: "Löwe", ar: "أسد" },
    { de: "Tee", ar: "شاي" },
    { de: "frei", ar: "حرّ" },
    { de: "Morgen", ar: "صباح" },
    { de: "wenn, falls", ar: "إذا" },
    { de: "Freund, Besitzer", ar: "صاحب ج أصحاب" },
    { de: "Haus (fem.)", ar: "دار ج دور" },
    { de: "Person", ar: "شخص ج أشخاص" },
    { de: "hinausgehen", ar: "خرج" },
    { de: "Erde (fem.)", ar: "أرض" },
    { de: "Nimm!", ar: "خذ!" },
    { de: "Bäume (Koll.)", ar: "شجر" },
    { de: "Nachricht", ar: "خبر ج أخبار" },
    { de: "grün", ar: "أخضر" },
    { de: "Brot", ar: "خبز" },
    { de: "Streik", ar: "إضراب" },
    { de: "grüner Salat", ar: "خس" },
    { de: "Minister", ar: "وزير ج وزراء" },
    { de: "Stop! Halt an!", ar: "!قف" },
    { de: "Medizin", ar: "طب" },
    { de: "wissen, kennen, erfahren", ar: "عرف" },
    { de: "Arzt", ar: "طبيب" },
    { de: "Wirtschaft", ar: "إقتصاد" },
    { de: "Linie, Schrift", ar: "خط ج خطوط" },
    { de: "Äpfel (Koll.)", ar: "تفاح" },
    { de: "Kartoffeln (Koll.)", ar: "بطاطا" },
    { de: "Osten, Orient", ar: "شرق" },
    { de: "Glück, Los", ar: "حظ" },
    { de: "Westen", ar: "غرب" },
    { de: "öffnen", ar: "فتح" },
    { de: "arabisch, Araber", ar: "عربي ج عرب" },
    { de: "Wetter", ar: "طقس" },
    { de: "schneiden, überqueren", ar: "قطع" },
    { de: "verkaufen", ar: "باع" },
    { de: "Küste, Ufer", ar: "شط" },
    { de: "nach (zeitl.)", ar: "بعد" },
    { de: "Recht (Pl. auch: Jura)", ar: "حق ج حقوق" },
    { de: "reisen", ar: "سافر، يسافر" },
    { de: "so, dann, denn, und", ar: "ف" },
    { de: "in", ar: "في" },
    { de: "Bagdad", ar: "بغداد" },
    { "de": "Wasser", "ar": "مِياه" },
    { "de": "Buch", "ar": "كِتاب ج كُتُب" },
    { "de": "wichtig", "ar": "مُهَمّ" },
    { "de": "König", "ar": "مَلِك ج مُلوك" },
    { "de": "wohnen", "ar": "سَكَنَ، يَسْكُنُ" },
    { "de": "Arbeit, Werk", "ar": "عَمَل ج أَعْمال" },
    { "de": "bei", "ar": "عِنْدَ" },
    { "de": "sprechen", "ar": "تَكَلَّمَ" },
    { "de": "groß", "ar": "كَبِير ج كِبار" },
    { "de": "mit", "ar": "مَعَ" },
    { "de": "klein", "ar": "صَغِير ج صِغار" },
    { "de": "Student", "ar": "طالِب" },
    { "de": "Tag", "ar": "يَوْم ج أَيَّام" },
    { "de": "freundlich, nett", "ar": "لَطِيف" },
    { "de": "schön", "ar": "جَمِيل" },
    { "de": "Mensch", "ar": "إِنْسان" },
    { "de": "Mittag", "ar": "ظُهْر" },
    { "de": "Warte!", "ar": "!إِنْتَظِرْ" },
    { "de": "essen", "ar": "أَكَلَ" },
    { "de": "hier", "ar": "هُنا" },
    { "de": "viel", "ar": "كَثِير" },
    { "de": "dort, es gibt", "ar": "هُناكَ" },
    { "de": "ausländisch, Ausländer", "ar": "أَجْنَبِيّ ج أَجانِب" },
    { "de": "Gott", "ar": "الله" }
  ],

  set2: [

    { "de": "Er aß Kartoffeln.", "ar": "أَكَلَ بَطاطا." },
    { "de": "Ich mag Tee.", "ar": "أُحِبُّ الشّاي." },
    { "de": "Nimm einen Apfel!", "ar": "خُذ تُفّاحَة!" },
    { "de": "Tee oder Kaffee", "ar": "شاي أَو قَهْوَة" },
    { "de": "arabisches Brot", "ar": "خُبْز عَرَبِيّ" },
    { "de": "mit viel Zucker", "ar": "بِسُكَّر كَثِير" },
    { "de": "Er trank Kaffee.", "ar": "شَرِبَ قَهْوَةً." },

    { "de": "eine wichtige Untersuchung", "ar": "البَحْث المُهِمّ" },
    { "de": "die arabische Schrift", "ar": "الخَطّ العَرَبِيّ" },
    { "de": "viel Arbeit", "ar": "عَمَل كَبِير" },
    { "de": "ein schönes Buch", "ar": "كِتاب جَمِيل" },
    { "de": "Wirtschaftsminister", "ar": "وَزِير إِقْتِصَاد" },
    { "de": "ein Jurastudent", "ar": "طالِب حُقوق" },
    { "de": "Er studierte Medizin.", "ar": "دَرَسَ الطِّبّ." },
  
    { "de": "Meerwasser", "ar": "مِياه البَحْر" },
    { "de": "am Morgen", "ar": "في الصَّباح" },
    { "de": "Meerstrand", "ar": "شَطّ البَحْر" },
    { "de": "nachmittags", "ar": "بَعْدَ الظُّهْر" },
    { "de": "grüne Bäume", "ar": "تَحْتَ الشَّجَر الأَخْضَر" },
    { "de": "Ost und West", "ar": "شَرْق وَغَرْب" },
    { "de": "Das Wetter ist schön.", "ar": "الطَّقْس جَمِيل." },
    { "de": "ein schöner Tag", "ar": "يَوْم جَمِيل" },
    { "de": "Er reiste nach Bagdad.", "ar": "سافَرَ إِلى بَغْداد." },
  
    { "de": "Bruder und Schwester", "ar": "أَخ وَأُخْت" },
    { "de": "Er kannte den Minister.", "ar": "عَرَفَ الوَزِير." },
    { "de": "eine nette Person", "ar": "شَخْص لَطِيف" },
    { "de": "eine große Liebe", "ar": "حُبّ كَبِير" },
    { "de": "Er besuchte Sarah.", "ar": "زَارَ سَارَة." },
    { "de": "Araber und Ausländer", "ar": "عَرَب وَأَجانِب" },
    { "de": "Der Mensch ist frei.", "ar": "الإِنْسان حُرّ." },
    { "de": "eine schöne Nachricht", "ar": "خَبَر جَمِيل." },
    { "de": "Warte!", "ar": "إِنْتَظِرْ!" },
    { "de": "ein König und ein Minister", "ar": "مَلِك وَوَزِير" },
    { "de": "Er sprach mit einem Freund.", "ar": "تَكَلَّمَ مَعَ صاحِب." },
    
    { "de": "hier und dort", "ar": "هُنا وَهُناكَ" },
    { "de": "ein großes Haus", "ar": "دار كَبِيرَة" },
    { "de": "Haustür", "ar": "باب البَيْت" },
    { "de": "Er wohnte in einem kleinen Haus.", "ar": "سَكَنَ في بَيْت صَغِير." },
    { "de": "Er wohnte bei einem Freund.", "ar": "سَكَنَ عِنْدَ صاحِب." },
    { "de": "Er öffnete die Tür und ging hinaus.", "ar": "فَتَحَ الباب وَخَرَجَ." },
  
    { "de": "Ein arabischer Wirtschaftsminister sprach mit einer wichtigen Person.", "ar": "تَكَلَّمَ وَزِير إِقْتِصَاد عَرَبِيّ مَعَ شَخْص مُهِمّ." },
    { "de": "Ein ausländischer Student wohnte in einem großen arabischen Haus.", "ar": "سَكَنَ طالِب أَجْنَبِيّ في بَيْت عَرَبِيّ كَبِير." },
    { "de": "Am Morgen eines schönen Tages besuchte der König den Minister und trank Kaffee und Tee mit viel Zucker.", "ar": "في صَباح يَوْم جَمِيل زارَ المَلِك الوَزِير فَشَرِبَ القَهْوَة وَالشّاي مَعَ سُكَّر كَثِير." }
  ],

  set3: [
    { de: "eine Kathedrale", ar: "une cathédrale" },
    { de: "ein/e Vertreter/in", ar: "un représentant / une représentante" },
    { de: "europäisch", ar: "européen / européenne" },
    { de: "eine Grenze", ar: "une frontière" },
    { de: "eine Entdeckung", ar: "une découverte" },
    { de: "Freizeit", ar: "le temps libre" },
    { de: "eine Begegnung, ein Treffen", ar: "une rencontre" },
    { de: "eine Unterkunft", ar: "un hébergement" },
    { de: "super", ar: "top" },
    { de: "kaputt, erschöpft", ar: "crevé/crevée" },
    { de: "die Nacht", ar: "la nuit" },
    { de: "sich langweilen", ar: "s'ennuyer" },
    { de: "anfangen zu tun", ar: "commencer à faire qc" },
    { de: "sich beeilen", ar: "se dépêcher" },
    { de: "eine Großmutter", ar: "une grand-mère" },
    { de: "eine Rolle", ar: "un rôle" },
    { de: "eine Führung", ar: "une visite guidée" },
    { de: "eine Stadt", ar: "une ville" },
    { de: "der Süden", ar: "le sud" },
    { de: "der Westen", ar: "l'ouest" },
    { de: "der Norden", ar: "le nord" },
    { de: "eine Ankunft", ar: "une arrivée" },
    { de: "eine Abfahrt", ar: "le départ" },
    { de: "eine Rolle spielen", ar: "jouer un rôle" },
  ]

   set4: [

    { "de": "Test Deutsch.", "ar": "Test Fremdsprache" },
  ]
};
  
