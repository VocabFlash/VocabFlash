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
    { "de": "eine (Land)Straße", "ar": "une route" },
    { "de": "auf dem Weg nach/in...", "ar": "en route pour..." },
    { "de": "das Elsass", "ar": "l'Alsace (f)" },
    { "de": "eine Kathedrale", "ar": "une cathédrale" },
    { "de": "ein Vertreter/eine Vertreterin", "ar": "un représentant/une représentante" },
    { "de": "ein Land", "ar": "un pays" },
    { "de": "europäisch", "ar": "européen/européenne" },
    { "de": "sich versammeln", "ar": "se réunir" },
    { "de": "ein Fernsehsender", "ar": "une chaîne de télévision" },
    { "de": "ein Büro/Büros", "ar": "un bureau/des bureaux" },
    { "de": "ein Programm", "ar": "un programme" },
    { "de": "eine Grenze", "ar": "une frontière" },
    { "de": "Deutschland", "ar": "l'Allemagne (f)" },
    { "de": "eine Rolle", "ar": "un rôle" },
    { "de": "elsässisch", "ar": "alsacien/alsacienne" },
    { "de": "das Sauerkraut", "ar": "la choucroute" },
    { "de": "das Elsässische", "ar": "l'Alsacien (m)" },
    { "de": "eine Stadt", "ar": "une ville" },
    { "de": "sich befinden", "ar": "se trouver" },
    { "de": "der Norden", "ar": "le nord" },
    { "de": "nördlich von", "ar": "au nord de" },
    { "de": "der Süden", "ar": "le sud" },
    { "de": "südlich von", "ar": "au sud de" },
    { "de": "der Osten", "ar": "l'est (m)" },
    { "de": "östlich von", "ar": "à l'est de" },
    { "de": "der Westen", "ar": "l'ouest (m)" },
    { "de": "westlich von", "ar": "à l'ouest de" },
    { "de": "an der Grenze liegen zu", "ar": "être à la frontière avec" },
    { "de": "am Rande, am Ufer von etw.", "ar": "au bord de qc" },
    { "de": "die zehnte Klasse/die erste Klasse der Oberstufe", "ar": "la seconde" },
    { "de": "am Anfang", "ar": "au début" },
    { "de": "die Abfahrt, der Aufbruch", "ar": "le départ" },
    { "de": "die Ankunft", "ar": "l'arrivée (f)" },
    { "de": "ein Besuch", "ar": "une visite" },
    { "de": "eine Führung", "ar": "une visite guidée" },
    { "de": "eine Entdeckung", "ar": "une découverte" },
    { "de": "ein Spiel/Spiele", "ar": "un jeu/des jeux" },
    { "de": "eine Schnitzeljagd", "ar": "un jeu de piste" },
    { "de": "frei", "ar": "libre" },
    { "de": "die Freizeit", "ar": "le temps libre" },
    { "de": "eine Jugendherberge", "ar": "une auberge de jeunesse" },
    { "de": "eine Begegnung; ein Treffen", "ar": "une rencontre" },
    { "de": "ein Redakteur/eine Redakteurin", "ar": "un rédacteur/une rédactrice" },
    { "de": "ein Flammkuchen", "ar": "une tarte flambée" },
    { "de": "eine Unterbringung", "ar": "un hébergement" },
    { "de": "Frankreich", "ar": "la France" },
    { "de": "super", "ar": "top" },
    { "de": "ein Wahnsinnsprogramm", "ar": "un programme de ouf" },
    { "de": "kaputt (ugs.), fertig (ugs.)", "ar": "crevé/crevée" },
    { "de": "die Nacht", "ar": "la nuit" },
    { "de": "etw./jdn. schicken in/zu/nach", "ar": "envoyer qc à qn" },
    { "de": "sich etw. vorstellen", "ar": "imaginer qc" },
    { "de": "ein Verrückter/eine Verrückte", "ar": "un fou/une folle" },
    { "de": "Unsinn machen", "ar": "faire le fou" }
  ],
set4: [    
    { "de": "zuerst", "ar": "d'abord" },
    { "de": "ein Stadtzentrum", "ar": "un centre-ville" },
    { "de": "danach, anschließend", "ar": "ensuite" },
    { "de": "ganz (m./f.)", "ar": "tout/toute" },
    { "de": "alle (m./f.), die ganzen", "ar": "tous/toutes (tous les ...)" },
    { "de": "interessant", "ar": "intéressant/intéressante" },
    { "de": "super; genial; großartig", "ar": "génial/géniale" },
    { "de": "jdm. vorschlagen, etw. zu tun", "ar": "proposer à qn de faire qc" },
    { "de": "oben; nach oben", "ar": "en haut" },
    { "de": "Achtung!; Vorsicht!", "ar": "Attention !" },
    { "de": "eine Stufe", "ar": "une marche" },
    { "de": "Keine Sorge!; Mach dir keine Sorgen!", "ar": "T'inquiète !" },
    { "de": "ein Aufzug, ein Fahrstuhl", "ar": "un ascenseur" },
    { "de": "Uff!", "ar": "Ouf !" },
    { "de": "die ganze Zeit", "ar": "tout le temps" },
    { "de": "sich langweilen", "ar": "s'ennuyer" },
    { "de": "anstrengend", "ar": "fatiguant/fatigante" },
    { "de": "anfangen etw. zu tun", "ar": "commencer à faire qc" },
    { "de": "so tun, als ob", "ar": "faire semblant (de faire qc)" },
    { "de": "gleicher Meinung sein", "ar": "être du même avis" },
    { "de": "da; weil", "ar": "comme" },
    { "de": "eine Brücke", "ar": "un pont" },
    { "de": "etw. austeilen/verteilen", "ar": "distribuer qc"},
    { "de": "außerdem", "ar": "en plus" },
    { "de": "die Großeltern", "ar": "les grands-parents" },
    { "de": "etw. wie seine Westentasche kennen", "ar": "connaître qc comme sa poche" },
    { "de": "Geschafft!; Es ist soweit!", "ar": "Ça y est !" },
    { "de": "nah; in der Nähe von", "ar": "près de" },
    { "de": "eine Mauer; eine Wand", "ar": "un mur" },
    { "de": "ein Europäer/eine Europäerin", "ar": "un Européen/une Européenne" },
    { "de": "eine Institution", "ar": "une institution" },
    { "de": "spannend; fesselnd", "ar": "passionnant/passionnante" },
    { "de": "Oma, Omi", "ar": "mamie (f)" },
    { "de": "die Liebe", "ar": "l'amour (m)" },
    { "de": "gewöhnlich; normalerweise", "ar": "d'habitude" },
    { "de": "ziemlich", "ar": "assez" },
    { "de": "hoffen", "ar": "espérer" },
    { "de": "sich beeilen", "ar": "se dépêcher" },
    { "de": "ein Föhn; ein Haartrockner", "ar": "un sèche-cheveux" },
    { "de": "anhalten; Halt machen", "ar": "s'arrêter" },
     { "de": "gehören zu; ein Teil sein von", "ar": "faire partie de qc" },
    { "de": "eine Verteidigung", "ar": "une défense" },
    { "de": "der Zweite Weltkrieg (1939–1945)", "ar": "la Seconde Guerre mondiale" },
    { "de": "ein Tunnel", "ar": "un tunnel" },
    { "de": "die Wirklichkeit; die Realität", "ar": "la réalité" },
    { "de": "verschieden; anders; unterschiedlich", "ar": "différent/différente" },
    { "de": "ein Kilometer", "ar": "un kilomètre" },
    { "de": "ein Meter", "ar": "un mètre"},
    { "de": "unter; unter der Erde; unterhalb", "ar": "sous" },
    { "de": "tief; tiefgründig", "ar": "profond/profonde" },
    { "de": "ein Soldat/eine Soldatin", "ar": "un soldat/une soldate" },
    { "de": "der Tag; das Tageslicht", "ar": "le jour" },
    { "de": "schrecklich; fürchterlich; grauenhaft", "ar": "horrible" },
    { "de": "ein Selfie", "ar": "un selfie" },
    { "de": "vor (zeitlich)", "ar": "il y a" },
    { "de": "allein", "ar": "seul/seule" },
    { "de": "ungefähr; etwa", "ar": "environ" },
    { "de": "jdm. etw. reichen; jdm. etw. (weiter)geben", "ar": "passer qc à qn" },
    { "de": "eine Großmutter", "ar": "une grand-mère" },
    { "de": "sich kennenlernen; sich begegnen", "ar": "se rencontrer" },
    { "de": "eine Städte-/Schulpartnerschaft", "ar": "un jumelage" },
    { "de": "sich wiedersehen", "ar": "se revoir"}
],

     set5: [

    { "de": "sich aus den Augen verlieren", "ar": "se perdre de vue" },
    { "de": "sich an jdn./etw. erinnern", "ar": "se souvenir de qn/qc" },
    { "de": "eine Neuigkeit", "ar": "une nouvelle" },
    { "de": "sich mit jdm. verabreden", "ar": "donner rendez-vous à qn" },
    { "de": "nett", "ar": "gentil/gentille" },
    { "de": "gewöhnlich; geläufig", "ar": "courant/courante" },
    { "de": "jdn./etw. vergessen", "ar": "oublier qn/qc" },
    { "de": "an etw. teilnehmen", "ar": "participer à qc" },
    { "de": "ein Gefühl", "ar": "un sentiment" },
    { "de": "ein Autor/eine Autorin", "ar": "un auteur/une auteure" },
    { "de": "international", "ar": "international/internationaux/internationales" },
    { "de": "ein Extremsport", "ar": "un sport extrême" },
    { "de": "ein Wettkampf", "ar": "une compétition" },
    { "de": "die Welt", "ar": "le monde" },
    { "de": "ganz; völlig", "ar": "entier/entière" },
    { "de": "existieren", "ar": "exister" },
    { "de": "ein Denkmal; ein Monument", "ar": "un monument" },
    { "de": "offen (für); geöffnet (für)", "ar": "ouvert/ouverte (à)" },
    { "de": "das Licht", "ar": "la lumière" },
    { "de": "kostenlos; gratis", "ar": "gratuit/gratuite" },
    { "de": "ein Musiker/eine Musikerin", "ar": "un musicien/une musicienne" },
    { "de": "Amateur-, Hobby-", "ar": "amateur" },
    { "de": "fahren", "ar": "rouler" },
    { "de": "außergewöhnlich", "ar": "exceptionnel/exceptionnelle" },
    { "de": "ausnahmsweise", "ar": "exceptionnellement" },
    { "de": "neu sein", "ar": "être récent/récente" },
    { "de": "nur, erst", "ar": "seulement" },
    { "de": "schlecht", "ar": "mal" },
    { "de": "glücklich", "ar": "heureux/heureuse" },
    { "de": "glücklicherweise", "ar": "heureusement" },
    { "de": "zu Ende gehen; enden", "ar": "se terminer" },
    { "de": "gut/schlecht ausgehen", "ar": "se terminer bien/mal" },
    { "de": "eine Probe; eine Wiederholung", "ar": "une répétition" },
    { "de": "immer noch nicht", "ar": "ne... toujours pas" },
    { "de": "normal", "ar": "normal/normale" },
    { "de": "normalerweise", "ar": "normalement" },
    { "de": "fünf Minuten Verspätung haben", "ar": "avoir cinq minutes de retard" },
    { "de": "komplett; vollständig", "ar": "complet/complète" },
    { "de": "völlig", "ar": "complètement" },
    { "de": "jdm./etw. glauben", "ar": "croire en qn/qc" },
    { "de": "wirklich", "ar": "vraiment" },
    { "de": "die Diva spielen", "ar": "faire sa diva" },
    { "de": "auftauchen (ugs.)", "ar": "rappliquer" },
    { "de": "unmittelbar", "ar": "immédiat/immediate" },
    { "de": "sofort", "ar": "immédiatement" },
    { "de": "eine Bühne", "ar": "une scène" },
    { "de": "sicher (Adv.); sicherlich", "ar": "sûrement" },
    { "de": "an jds. Stelle", "ar": "à la place de qn" },
    { "de": "es scheint", "ar": "ça paraît" },
    { "de": "an jdn. glauben", "ar": "croire en qn" },
    { "de": "jdn./etw. wiedererkennen", "ar": "reconnaître qn/qc" },
    { "de": "eine Katastrophe", "ar": "une cata" },
    { "de": "ein Keyboard", "ar": "un clavier" },
    { "de": "am Keyboard", "ar": "au clavier" },
    { "de": "pfeifen", "ar": "siffler" },
    { "de": "ein Mikro(fon)", "ar": "un micro" },
    { "de": "(Beifall) klatschen; applaudieren", "ar": "applaudir" },
    { "de": "trotz", "ar": "malgré" },
    { "de": "riesig; Riesen-", "ar": "énorme" },
    { "de": "jdn./etw. lassen; jdn./etw. zurücklassen", "ar": "laisser qn/qc" },
    { "de": "sich vorstellen", "ar": "se présenter" },
    { "de": "aktuell", "ar": "actuel/actuelle" },
    { "de": "zurzeit; im Moment", "ar": "actuellement" },
    { "de": "ein Casting", "ar": "un casting" },
    { "de": "ernst(haft); seriös", "ar": "sérieux/sérieuse" },
    { "de": "im Ernst; ernsthaft", "ar": "sérieusement" },
    { "de": "ein Interview", "ar": "une interview" },
    { "de": "dauern", "ar": "durer" },
    { "de": "ein Open-Air-Konzert", "ar": "un concert en plein air" },
    { "de": "Es kostet Eintritt.", "ar": "L'entrée est payante." },
    { "de": "ein Sportler/eine Sportlerin", "ar": "un sportif/une sportive" },
    { "de": "bekannt", "ar": "connu/connue" },
    { "de": "niemand (Subjekt)", "ar": "personne ne..." }
  ],
    set6: [
    { "de": "das Radio", "ar": "la radio"},
    { "de": "ein Podcast", "ar": "un podcast" },
    { "de": "begeistert", "ar": "emballé/emballée" },
    { "de": "klar; natürlich", "ar": "évidemment" },
    { "de": "Das ist stinklangweilig.", "ar": "C'est rasoir." },
    { "de": "sehr; unheimlich viel", "ar": "énormément" },
    { "de": "ein Kreuz", "ar": "une croix" },
    { "de": "ein Gebäude", "ar": "un bâtiment" },
    { "de": "ein Wohnsitz; hier: ein Amtssitz", "ar": "une résidence" },
    { "de": "der Präsident; der Staatspräsident", "ar": "le Président de la République" },
    { "de": "ein Angestellter/eine Angestellte", "ar": "un employé/une employée" },
    { "de": "ein Besucher/eine Besucherin", "ar": "un visiteur/une visiteuse" },
    { "de": "ein Staatschef", "ar": "un chef d'État" },
    { "de": "nett", "ar": "gentiment" },
    { "de": "kürzlich; neulich", "ar": "récemment" },
    { "de": "unbekannt", "ar": "inconnu/inconnue" },
    { "de": "ein Porträt", "ar": "un portrait" },
    { "de": "durch; von", "ar": "par" },
    { "de": "eine Kleidung; ein Outfit", "ar": "une tenue" },
    { "de": "etw. zeichnen", "ar": "dessiner qc" },
    { "de": "nichts (Subjekt)", "ar": "rien ne..." },
    { "de": "ändern; (sich) verändern", "ar": "changer" },
    { "de": "ein Stift", "ar": "un crayon" },
    { "de": "ein Ort", "ar": "un endroit" },
    { "de": "ein Stadion", "ar": "un stade" },
    { "de": "Tennis", "ar": "le tennis" },
    { "de": "ein Tennisplatz", "ar": "un court" },
    { "de": "das Recht haben, etw. zu tun; etw. tun dürfen", "ar": "avoir le droit de faire qc" },
    { "de": "häufig, oft", "ar": "couramment" },
    { "de": "rund", "ar": "rond/ronde" },
    { "de": "ein (Aufnahme)Studio", "ar": "un studio" },
    { "de": "an etw. teilnehmen; etw. miterleben", "ar": "assister à qc" },
    { "de": "so; auf diese Weise", "ar": "ainsi" },
    { "de": "ein Organisator/eine Organisatorin", "ar": "un organisateur/une organisatrice" },
    { "de": "etw. verstecken", "ar": "cacher qc" },
    { "de": "ein Stab, ein Taktstock", "ar": "une baguette" },
    { "de": "ein Möbelstück", "ar": "un meuble" },
    { "de": "Marokko", "ar": "le Maroc" },
    { "de": "der Durchschnitt", "ar": "la moyenne" },
    { "de": "durchschnittlich, mittel", "ar": "moyen/moyenne" },
    { "de": "umziehen", "ar": "déménager" },
    { "de": "das Land", "ar": "la campagne" },
    { "de": "ein Alptraum", "ar": "un cauchemar" },
    { "de": "ein Bassist/eine Bassistin", "ar": "un/une bassiste" },
    { "de": "ein Zeuge", "ar": "un témoin" },
    { "de": "lügen", "ar": "mentir" },
    { "de": "unausstehlich", "ar": "insupportable" },
    { "de": "ein Diebstahl", "ar": "un vol" },
    { "de": "stehlen", "ar": "voler" },
    { "de": "eine Ermittlung", "ar": "une enquête" },
    { "de": "ein/e Verdächtige/r", "ar": "un/e suspect/e" },
    { "de": "jdn. befragen", "ar": "interroger qn" },
    { "de": "eine Stimmung", "ar": "une ambiance" },
    { "de": "mutig", "ar": "courageux/courageuse" },
    { "de": "ein Held/eine Heldin", "ar": "un héros/une héroïne" },
    { "de": "schreien", "ar": "crier" },
    { "de": "jdm. etw. verzeihen", "ar": "pardonner qc à qn" },
    { "de": "verschwinden", "ar": "disparaître" },
    { "de": "eifersüchtig sein", "ar": "être jaloux/jalouse" },
    { "de": "die Polizei", "ar": "la police" },
    { "de": "ein Spion/eine Spionin", "ar": "un espion/une espionne" },
    { "de": "er/sie ist tot", "ar": "il est mort/elle est morte" },
    { "de": "ein Mörder", "ar": "un assassin" },
    { "de": "jdm. die Wahrheit sagen", "ar": "dire la vérité à qn" },
    { "de": "entdecken", "ar": "découvrir" },
    { "de": "ein historisches Gebäude", "ar": "un bâtiment historique" },
    { "de": "eine Burg", "ar": "un château fort" },
    { "de": "eine Kirche", "ar": "une église" },
    { "de": "das Museum X", "ar": "le musée X" },
    { "de": "ins Gebirge", "ar": "dans la montagne" },
    { "de": "an den See", "ar": "au bord de la mer" },
    { "de": "in den Wald", "ar": "dans la forêt" },
    { "de": "ins Zentrum", "ar": "au centre-ville" }

  ],

     set7: [

    { "de": "sich aus den Augen verlieren", "ar": "se perdre de vue" },
    { "de": "sich an jdn./etw. erinnern", "ar": "se souvenir de qn/qc" }
  ]
};
  
