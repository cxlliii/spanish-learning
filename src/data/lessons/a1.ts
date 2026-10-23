import type { LessonContent } from "../types";

export const LESSONS_A1: LessonContent[] = [
  // ---------------------------------------------------------------- ser vs. estar
  {
    topicId: "ser-estar-basis",
    explanation: [
      "Spanisch hat zwei Verben für „sein“: ser und estar. Die Wahl hängt davon ab, was du ausdrücken willst.",
      "• ser: Identität, Herkunft, Beruf, Eigenschaften – soy Ana, soy de Alemania, es profesor, es simpático.",
      "• estar: Ort und Zustand/Befinden – estoy en Santiago, estoy cansado.",
      "Formen: ser – soy, eres, es, somos, son; estar – estoy, estás, está, estamos, están. In Lateinamerika sagt man für „ihr“ immer ustedes: ustedes son, ustedes están.",
      "Tipp: ¿Cómo estás? fragt nach dem Befinden. In Chile hörst du oft auch „¿Cómo estái?“ – das ist sehr umgangssprachlich, du lernst es später.",
    ],
    examples: [
      { es: "Soy de Alemania, pero vivo en Santiago.", de: "Ich komme aus Deutschland, aber ich wohne in Santiago." },
      { es: "Mi pareja es chilena y es muy simpática.", de: "Meine Partnerin ist Chilenin und sehr nett." },
      { es: "Valparaíso está en la costa.", de: "Valparaíso liegt an der Küste." },
      { es: "Estamos en el metro y está lleno.", de: "Wir sind in der Metro und sie ist voll." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Yo ___ de Alemania.",
        options: ["soy", "estoy", "es"],
        answer: "soy",
        explanation: "Herkunft drückt man mit ser aus. Die yo-Form von ser ist soy.",
      },
      {
        type: "choice",
        prompt: "Santiago ___ en Chile.",
        options: ["es", "está", "son"],
        answer: "está",
        explanation: "Für die Lage eines Ortes benutzt man estar: Santiago está en Chile.",
      },
      {
        type: "gap",
        prompt: "Ana ___ profesora en Valparaíso. (ser)",
        answer: "es",
        explanation: "Berufe stehen mit ser. Für ella/Ana lautet die Form es.",
      },
      {
        type: "gap",
        prompt: "¿Cómo ___ tú hoy? (estar)",
        answer: "estás",
        explanation: "Nach dem Befinden fragt man mit estar. Die tú-Form ist estás (mit Akzent).",
      },
      {
        type: "choice",
        prompt: "Wie sagt man „Wir sind müde“?",
        options: ["Somos cansados.", "Estamos cansados.", "Estamos cansado."],
        answer: "Estamos cansados.",
        explanation: "Müdigkeit ist ein Zustand, also estar. Das Adjektiv steht im Plural: cansados.",
      },
      {
        type: "gap",
        prompt: "Ustedes ___ muy simpáticos. (ser)",
        answer: "son",
        explanation: "Eigenschaften stehen mit ser. Für ustedes lautet die Form son.",
      },
      {
        type: "build",
        prompt: "Ich bin in Santiago.",
        answer: "Estoy en Santiago.",
        explanation: "Für den Ort, an dem man sich befindet, benutzt man estar: estoy.",
      },
      {
        type: "build",
        prompt: "Pedro kommt aus Chile, aber er ist in Berlin.",
        answer: "Pedro es de Chile, pero está en Berlín.",
        explanation: "Herkunft mit ser (es de Chile), aktueller Ort mit estar (está en Berlín).",
      },
    ],
  },

  // ---------------------------------------------------------------- Artikel & Genus
  {
    topicId: "articulos-genero",
    explanation: [
      "Jedes spanische Nomen ist maskulin oder feminin. Bestimmter Artikel: el, la, los, las. Unbestimmter Artikel: un, una, unos, unas.",
      "• Wörter auf -o sind meist maskulin (el libro), Wörter auf -a meist feminin (la casa).",
      "• Ausnahmen: el día, el mapa, el problema, la mano, la foto. Wörter auf -ción und -dad sind feminin: la estación, la ciudad.",
      "• Plural: nach Vokal + -s (las casas), nach Konsonant + -es (las ciudades).",
      "Chile-Tipp: el metro, la micro (der Stadtbus) und la once (die Nachmittagsmahlzeit mit Tee und Brot).",
    ],
    examples: [
      { es: "La micro para en la esquina.", de: "Der Bus hält an der Ecke." },
      { es: "Compramos las paltas en la feria.", de: "Wir kaufen die Avocados auf dem Markt." },
      { es: "Hace un día bonito en Valparaíso.", de: "Es ist ein schöner Tag in Valparaíso." },
      { es: "Tomamos la once a las seis.", de: "Wir essen um sechs die „once“ (Nachmittagsmahlzeit)." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "___ casa es grande.",
        options: ["El", "La", "Los"],
        answer: "La",
        explanation: "casa endet auf -a und ist feminin, Singular: la casa.",
      },
      {
        type: "choice",
        prompt: "___ día está bonito.",
        options: ["El", "La", "Las"],
        answer: "El",
        explanation: "día ist eine Ausnahme: Es endet auf -a, ist aber maskulin – el día.",
      },
      {
        type: "gap",
        prompt: "Necesito ___ mapa de Santiago. (unbestimmter Artikel)",
        answer: "un",
        explanation: "mapa ist maskulin (Ausnahme auf -a), daher un mapa.",
      },
      {
        type: "gap",
        prompt: "Busco ___ estación de metro. (bestimmter Artikel)",
        answer: "la",
        explanation: "Wörter auf -ción sind feminin: la estación.",
      },
      {
        type: "choice",
        prompt: "Welches Wort ist feminin?",
        options: ["problema", "mano", "día", "libro"],
        answer: "mano",
        explanation: "la mano ist feminin, obwohl es auf -o endet. problema und día sind maskulin.",
      },
      {
        type: "gap",
        prompt: "Compro ___ paltas en la feria. (bestimmter Artikel)",
        answer: "las",
        explanation: "palta (Avocado, in Chile so genannt) ist feminin; im Plural: las paltas.",
      },
      {
        type: "build",
        prompt: "Die Stadt ist sehr schön.",
        answer: "La ciudad es muy bonita.",
        explanation: "ciudad endet auf -dad und ist feminin: la ciudad, bonita.",
      },
      {
        type: "build",
        prompt: "Die Probleme sind nicht groß.",
        answer: "Los problemas no son grandes.",
        explanation: "problema ist maskulin, daher im Plural los problemas. Die Verneinung no steht vor dem Verb.",
      },
    ],
  },

  // ---------------------------------------------------------------- Präsens regelmäßig
  {
    topicId: "presente-regular",
    explanation: [
      "Regelmäßige Verben bilden das Präsens mit Stamm + Endung. Es gibt drei Gruppen: -ar (hablar), -er (comer), -ir (vivir).",
      "• -ar: hablo, hablas, habla, hablamos, hablan",
      "• -er: como, comes, come, comemos, comen",
      "• -ir: vivo, vives, vive, vivimos, viven",
      "In Lateinamerika gibt es kein vosotros: ustedes ist die Mehrzahl von tú und usted und hat die Endung -an/-en. usted benutzt die Form von él/ella (usted habla). Das Subjektpronomen fällt meist weg: Hablo español.",
    ],
    examples: [
      { es: "Vivo en Ñuñoa y trabajo en el centro.", de: "Ich wohne in Ñuñoa und arbeite im Zentrum." },
      { es: "¿Ustedes toman el metro o la micro?", de: "Nehmt ihr die Metro oder den Bus?" },
      { es: "Mi pareja cocina y yo lavo los platos.", de: "Mein Partner kocht und ich spüle das Geschirr." },
      { es: "Los sábados compramos fruta en la feria.", de: "Samstags kaufen wir Obst auf dem Markt." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Yo ___ español y alemán.",
        options: ["hablo", "habla", "hablas"],
        answer: "hablo",
        explanation: "Die yo-Form der -ar-Verben endet auf -o: hablo.",
      },
      {
        type: "choice",
        prompt: "Ustedes ___ en Valparaíso, ¿verdad?",
        options: ["viven", "vive", "vivimos"],
        answer: "viven",
        explanation: "ustedes hat die Endung -en bei -ir-Verben: viven.",
      },
      {
        type: "gap",
        prompt: "Nosotros ___ en un restaurante peruano. (comer)",
        answer: "comemos",
        explanation: "Die nosotros-Form von -er-Verben endet auf -emos: comemos.",
      },
      {
        type: "gap",
        prompt: "¿Tú ___ en una oficina? (trabajar)",
        answer: "trabajas",
        explanation: "Die tú-Form von -ar-Verben endet auf -as: trabajas.",
      },
      {
        type: "choice",
        prompt: "Wie fragt man höflich „Sprechen Sie Englisch?“",
        options: ["¿Hablas inglés?", "¿Habla usted inglés?", "¿Hablan usted inglés?"],
        answer: "¿Habla usted inglés?",
        explanation: "usted benutzt die Verbform der 3. Person Singular: habla. ¿Hablas…? ist die Du-Form.",
      },
      {
        type: "gap",
        prompt: "Mi hermana ___ mensajes a su abuela. (escribir)",
        answer: "escribe",
        explanation: "Für él/ella endet ein -ir-Verb auf -e: escribe.",
      },
      {
        type: "build",
        prompt: "Wir wohnen in Santiago.",
        answer: "Vivimos en Santiago.",
        explanation: "vivir in der nosotros-Form: vivimos. Das Pronomen nosotros kann wegfallen.",
      },
      {
        type: "build",
        prompt: "Meine Eltern sprechen kein Spanisch.",
        answer: "Mis padres no hablan español.",
        explanation: "ellos-Form von hablar ist hablan; no steht direkt vor dem Verb.",
      },
    ],
  },

  // ---------------------------------------------------------------- Präsens unregelmäßig
  {
    topicId: "presente-irregular",
    explanation: [
      "Einige der wichtigsten Verben sind im Präsens unregelmäßig – am besten lernst du sie auswendig.",
      "• yo-Form auf -go: tengo, hago, salgo, vengo, digo, pongo. Bei tener und venir ändert sich zusätzlich der Stamm: tienes, vienes.",
      "• Stammwechsel e>ie: querer → quiero, quieres, quiere, queremos, quieren. o>ue: poder → puedo, puedes, puede, podemos, pueden. e>i: decir → dices, pedir → pido.",
      "• ir: voy, vas, va, vamos, van.",
      "Der Stammwechsel gilt nie für nosotros: queremos, podemos. In Chile hörst du ständig „Tengo que…“ (ich muss…).",
    ],
    examples: [
      { es: "Tengo dos hermanos en Concepción.", de: "Ich habe zwei Geschwister in Concepción." },
      { es: "Los viernes salgo con mis amigos.", de: "Freitags gehe ich mit meinen Freunden aus." },
      { es: "¿Puedes venir a la once?", de: "Kannst du zur Once kommen?" },
      { es: "Voy al trabajo en metro.", de: "Ich fahre mit der Metro zur Arbeit." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Yo ___ 30 años.",
        options: ["tengo", "tiene", "tienes"],
        answer: "tengo",
        explanation: "Das Alter drückt man mit tener aus. Die yo-Form ist unregelmäßig: tengo.",
      },
      {
        type: "choice",
        prompt: "Nosotros ___ a la playa en verano.",
        options: ["vamos", "van", "vas"],
        answer: "vamos",
        explanation: "ir in der nosotros-Form: vamos.",
      },
      {
        type: "gap",
        prompt: "¿Tú ___ un café? (querer)",
        answer: "quieres",
        explanation: "querer hat den Stammwechsel e>ie: quieres.",
      },
      {
        type: "gap",
        prompt: "Yo no ___ ir hoy. (poder)",
        answer: "puedo",
        explanation: "poder hat den Stammwechsel o>ue: puedo.",
      },
      {
        type: "choice",
        prompt: "Welche Form bedeutet „wir können“?",
        options: ["puedemos", "podemos", "pueden"],
        answer: "podemos",
        explanation: "In der nosotros-Form gibt es keinen Stammwechsel: podemos.",
      },
      {
        type: "gap",
        prompt: "Ella siempre ___ la verdad. (decir)",
        answer: "dice",
        explanation: "decir hat den Stammwechsel e>i: dice.",
      },
      {
        type: "build",
        prompt: "Ich habe keine Zeit.",
        answer: "No tengo tiempo.",
        explanation: "tener in der yo-Form ist tengo; no steht vor dem Verb.",
      },
      {
        type: "build",
        prompt: "Wir wollen den Bus nach Valparaíso nehmen.",
        answer: "Queremos tomar el bus a Valparaíso.",
        explanation: "querer (nosotros: queremos, ohne Stammwechsel) + Infinitiv tomar. Der Überlandbus heißt in Chile el bus.",
      },
    ],
  },

  // ---------------------------------------------------------------- hay vs. estar
  {
    topicId: "hay-estar",
    explanation: [
      "Beide Verben übersetzt man oft mit „sein“ oder „es gibt“, aber sie haben unterschiedliche Aufgaben.",
      "• hay (es gibt): für etwas Unbestimmtes, das neu erwähnt wird – mit un/una, Zahlen, mucho/s oder ohne Artikel. hay ändert sich nie: hay un banco, hay dos bancos.",
      "• estar: für die Lage von etwas Bestimmtem – mit el/la, Namen oder mi/tu: El banco está en la esquina.",
      "• Faustregel: hay + un/una, aber el/la + está.",
      "Typische Fragen: ¿Hay un baño por aquí? (Gibt es hier eine Toilette?) – ¿Dónde está el metro? (Wo ist die Metro?)",
    ],
    examples: [
      { es: "Hay una feria los domingos en mi barrio.", de: "Sonntags gibt es in meinem Viertel einen Markt." },
      { es: "El cerro San Cristóbal está en Santiago.", de: "Der Hügel San Cristóbal liegt in Santiago." },
      { es: "En la micro hay mucha gente.", de: "Im Bus sind viele Leute." },
      { es: "Mis llaves están en la mesa.", de: "Meine Schlüssel liegen auf dem Tisch." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "___ un supermercado cerca de mi casa.",
        options: ["Hay", "Está", "Es"],
        answer: "Hay",
        explanation: "un supermercado ist unbestimmt und wird neu erwähnt, daher hay.",
      },
      {
        type: "choice",
        prompt: "El supermercado ___ en la esquina.",
        options: ["hay", "está", "es"],
        answer: "está",
        explanation: "el supermercado ist bestimmt; für die Lage benutzt man estar.",
      },
      {
        type: "gap",
        prompt: "En Santiago ___ muchos parques. (hay/estar)",
        answer: "hay",
        explanation: "muchos parques ist unbestimmt – es geht um die Existenz, also hay.",
      },
      {
        type: "gap",
        prompt: "¿Dónde ___ las llaves? (estar)",
        answer: "están",
        explanation: "las llaves ist bestimmt und Plural: están.",
      },
      {
        type: "choice",
        prompt: "Welcher Satz ist richtig?",
        options: ["Hay el hotel en el centro.", "El hotel está en el centro.", "El hotel hay en el centro."],
        answer: "El hotel está en el centro.",
        explanation: "Mit dem bestimmten Artikel el benutzt man estar, nicht hay.",
      },
      {
        type: "gap",
        prompt: "Mi oficina ___ en Providencia. (estar)",
        answer: "está",
        explanation: "mi oficina ist bestimmt; die Lage wird mit estar angegeben: está.",
      },
      {
        type: "build",
        prompt: "Gibt es hier eine Apotheke?",
        answer: "¿Hay una farmacia aquí?",
        explanation: "una farmacia ist unbestimmt – man fragt nach der Existenz, also hay.",
      },
      {
        type: "build",
        prompt: "Die Kinder sind in der Schule.",
        answer: "Los niños están en el colegio.",
        explanation: "los niños ist bestimmt, also estar (Plural: están). Schule heißt in Chile meist el colegio.",
      },
    ],
  },

  // ---------------------------------------------------------------- gustar
  {
    topicId: "gustar",
    explanation: [
      "gustar funktioniert anders als „mögen“: Me gusta el café heißt wörtlich „Der Kaffee gefällt mir“. Das Ding, das gefällt, ist das Subjekt.",
      "• Pronomen: me, te, le, nos, les + gusta/gustan.",
      "• gusta + Singular oder Infinitiv: me gusta la palta, me gusta bailar.",
      "• gustan + Plural: me gustan las empanadas.",
      "Genauso funktioniert encantar (sehr mögen, lieben): me encanta Valparaíso. Zur Betonung oder Klarheit: A mí me gusta…, A ella le gusta…",
    ],
    examples: [
      { es: "Me gustan las empanadas de pino.", de: "Ich mag Empanadas mit Fleischfüllung." },
      { es: "A mi novia le encanta el mar.", de: "Meine Freundin liebt das Meer." },
      { es: "¿Te gusta tomar once?", de: "Magst du die „once“ (Nachmittagsmahlzeit)?" },
      { es: "No nos gusta el tráfico de Santiago.", de: "Wir mögen den Verkehr in Santiago nicht." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Me ___ el café.",
        options: ["gusta", "gustan", "gusto"],
        answer: "gusta",
        explanation: "el café ist Singular, also gusta.",
      },
      {
        type: "choice",
        prompt: "Me ___ las empanadas.",
        options: ["gusta", "gustan", "gustamos"],
        answer: "gustan",
        explanation: "las empanadas ist Plural, also gustan.",
      },
      {
        type: "gap",
        prompt: "A ella ___ gusta bailar cueca. (Pronomen)",
        answer: "le",
        explanation: "Für él/ella/usted ist das Pronomen le. Die cueca ist der Nationaltanz Chiles.",
      },
      {
        type: "gap",
        prompt: "¿A ustedes ___ gusta el sushi? (Pronomen)",
        answer: "les",
        explanation: "Für ustedes/ellos/ellas ist das Pronomen les.",
      },
      {
        type: "choice",
        prompt: "Wie sagt man „Wir mögen Hunde“?",
        options: ["Nos gustan los perros.", "Nosotros gustamos los perros.", "Nos gusta los perros."],
        answer: "Nos gustan los perros.",
        explanation: "Pronomen nos + gustan, weil los perros Plural ist.",
      },
      {
        type: "gap",
        prompt: "A mis hijos les ___ los completos. (encantar)",
        answer: "encantan",
        explanation: "los completos ist Plural, also encantan. Ein completo ist der chilenische Hotdog.",
      },
      {
        type: "build",
        prompt: "Ich mag das Meer.",
        answer: "Me gusta el mar.",
        explanation: "el mar ist Singular: me gusta.",
      },
      {
        type: "build",
        prompt: "Meinem Vater gefallen die Märkte nicht.",
        answer: "A mi papá no le gustan las ferias.",
        explanation: "A mi papá + le; no steht vor dem Pronomen. las ferias ist Plural, also gustan.",
      },
    ],
  },

  // ---------------------------------------------------------------- Fragewörter
  {
    topicId: "preguntas",
    explanation: [
      "Fragewörter tragen immer einen Akzent. Fragen beginnen mit ¿ und enden mit ?.",
      "• qué = was/welche, quién/quiénes = wer, dónde = wo, adónde = wohin, cuándo = wann, cómo = wie.",
      "• cuánto/cuánta/cuántos/cuántas = wie viel(e) – passt sich dem Nomen an: ¿Cuántos años tienes?",
      "• por qué = warum (getrennt, mit Akzent) – porque = weil (zusammen, ohne Akzent).",
      "Beim Einkaufen in Chile fragt man: ¿Cuánto cuesta? oder ¿Cuánto vale?",
    ],
    examples: [
      { es: "¿Dónde está la estación de metro?", de: "Wo ist die Metrostation?" },
      { es: "¿Cuánto cuesta el kilo de tomates?", de: "Wie viel kostet das Kilo Tomaten?" },
      { es: "¿Cómo te llamas?", de: "Wie heißt du?" },
      { es: "¿Por qué no vienes a la once? – Porque trabajo.", de: "Warum kommst du nicht zur Once? – Weil ich arbeite." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "¿___ te llamas?",
        options: ["Cómo", "Qué", "Dónde"],
        answer: "Cómo",
        explanation: "Nach dem Namen fragt man mit ¿Cómo te llamas? (wörtlich: Wie nennst du dich?).",
      },
      {
        type: "choice",
        prompt: "¿___ vives? – En Viña del Mar.",
        options: ["Dónde", "Cuándo", "Quién"],
        answer: "Dónde",
        explanation: "Die Antwort ist ein Ort, also fragt man mit dónde (wo).",
      },
      {
        type: "gap",
        prompt: "¿___ años tienes? (wie viele)",
        answer: "Cuántos",
        accept: ["cuántos"],
        explanation: "años ist maskulin Plural, also cuántos – mit Akzent.",
      },
      {
        type: "gap",
        prompt: "¿___ es tu cumpleaños? (wann)",
        answer: "Cuándo",
        accept: ["cuándo"],
        explanation: "„Wann“ heißt cuándo – als Fragewort mit Akzent.",
      },
      {
        type: "choice",
        prompt: "Welche Antwort passt zu „¿Por qué estudias español?“",
        options: ["Porque vivo en Chile.", "Por qué vivo en Chile.", "En Chile."],
        answer: "Porque vivo en Chile.",
        explanation: "„Weil“ heißt porque – zusammengeschrieben und ohne Akzent.",
      },
      {
        type: "gap",
        prompt: "¿___ es esa señora? – Es mi suegra. (wer)",
        answer: "Quién",
        accept: ["quién"],
        explanation: "Nach einer Person fragt man mit quién (Singular), mit Akzent.",
      },
      {
        type: "build",
        prompt: "Wie viel kostet das Brot?",
        answer: "¿Cuánto cuesta el pan?",
        explanation: "Nach dem Preis fragt man mit ¿Cuánto cuesta…?",
      },
      {
        type: "build",
        prompt: "Wann fährt der Bus nach Valparaíso?",
        answer: "¿Cuándo sale el bus a Valparaíso?",
        explanation: "cuándo = wann; „abfahren“ heißt salir (sale). Das Verb steht direkt nach dem Fragewort.",
      },
    ],
  },

  // ---------------------------------------------------------------- Possessivbegleiter
  {
    topicId: "posesivos",
    explanation: [
      "Possessivbegleiter stehen vor dem Nomen. Sie richten sich nach dem Besitz (dem Nomen), nicht nach dem Besitzer.",
      "• mi/mis (mein), tu/tus (dein), su/sus (sein, ihr, Ihr, euer).",
      "• nuestro/nuestra/nuestros/nuestras (unser) – passt sich auch im Genus an: nuestra casa, nuestro departamento.",
      "In Lateinamerika heißt „euer“ einfach su/sus (zu ustedes). Weil su vieles bedeuten kann, sagt man zur Klarheit auch: la casa de ella, la casa de ustedes.",
      "Achtung: tu (dein) ohne Akzent, tú (du) mit Akzent.",
    ],
    examples: [
      { es: "Mi suegra vive en Temuco.", de: "Meine Schwiegermutter wohnt in Temuco." },
      { es: "¿Tus amigos son de Santiago?", de: "Sind deine Freunde aus Santiago?" },
      { es: "Nuestra casa está cerca del metro.", de: "Unser Haus ist in der Nähe der Metro." },
      { es: "Señora, ¿esta es su maleta?", de: "Ist das Ihr Koffer, gnädige Frau?" },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "___ hermanos viven en Chile.",
        options: ["Mi", "Mis", "Nuestro"],
        answer: "Mis",
        explanation: "hermanos ist Plural, also mis.",
      },
      {
        type: "choice",
        prompt: "Wie sagt man „unsere Wohnung“? (Wohnung = departamento)",
        options: ["nuestro departamento", "nuestra departamento", "nuestros departamento"],
        answer: "nuestro departamento",
        explanation: "departamento (in Chile das Wort für Wohnung) ist maskulin Singular: nuestro.",
      },
      {
        type: "gap",
        prompt: "¿Dónde está ___ pasaporte, señor? (Ihr)",
        answer: "su",
        explanation: "Zu usted gehört su. pasaporte ist Singular.",
      },
      {
        type: "gap",
        prompt: "Nosotros visitamos a ___ abuela los domingos. (unser)",
        answer: "nuestra",
        explanation: "abuela ist feminin Singular: nuestra.",
      },
      {
        type: "choice",
        prompt: "Ustedes viven con ___ hijos.",
        options: ["su", "sus", "nuestro"],
        answer: "sus",
        explanation: "Zu ustedes gehört su/sus; hijos ist Plural, also sus.",
      },
      {
        type: "gap",
        prompt: "Ana, ¿cuál es ___ número de teléfono? (dein)",
        answer: "tu",
        explanation: "„dein“ heißt tu – ohne Akzent (tú mit Akzent heißt „du“).",
      },
      {
        type: "build",
        prompt: "Mein Bruder wohnt in Valparaíso.",
        answer: "Mi hermano vive en Valparaíso.",
        explanation: "hermano ist Singular, also mi.",
      },
      {
        type: "build",
        prompt: "Unsere Kinder gehen in die Schule.",
        answer: "Nuestros hijos van al colegio.",
        explanation: "hijos ist maskulin Plural: nuestros. a + el wird zu al.",
      },
    ],
  },

  // ---------------------------------------------------------------- Reflexive Verben
  {
    topicId: "reflexivos",
    explanation: [
      "Reflexive Verben haben ein Pronomen, das sich auf das Subjekt bezieht: levantarse (aufstehen), ducharse (duschen), vestirse (sich anziehen), acostarse (ins Bett gehen), llamarse (heißen).",
      "• Pronomen: me, te, se, nos, se – me levanto, te levantas, se levanta, nos levantamos, se levantan (ellos/ustedes).",
      "• Vor dem konjugierten Verb: Me ducho a las siete.",
      "• Beim Infinitiv angehängt: Quiero levantarme temprano.",
      "Achtung Stammwechsel: acostarse → me acuesto, despertarse → me despierto, vestirse → me visto. „Am Morgen“ sagt man in Chile meist en la mañana.",
    ],
    examples: [
      { es: "Me levanto a las seis y media.", de: "Ich stehe um halb sieben auf." },
      { es: "¿Cómo se llama tu hermana?", de: "Wie heißt deine Schwester?" },
      { es: "Los domingos nos acostamos tarde.", de: "Sonntags gehen wir spät ins Bett." },
      { es: "Antes de tomar la micro, me ducho y me visto.", de: "Bevor ich den Bus nehme, dusche ich und ziehe mich an." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Yo ___ llamo Thomas.",
        options: ["me", "te", "se"],
        answer: "me",
        explanation: "Zu yo gehört das Pronomen me: me llamo.",
      },
      {
        type: "choice",
        prompt: "Ellos ___ duchan en la mañana.",
        options: ["se", "nos", "me"],
        answer: "se",
        explanation: "Zu ellos/ellas/ustedes gehört das Pronomen se.",
      },
      {
        type: "gap",
        prompt: "Nosotros ___ levantamos temprano. (Pronomen)",
        answer: "nos",
        explanation: "Zu nosotros gehört das Pronomen nos.",
      },
      {
        type: "gap",
        prompt: "¿A qué hora te ___? (acostarse)",
        answer: "acuestas",
        explanation: "acostarse hat den Stammwechsel o>ue: te acuestas.",
      },
      {
        type: "choice",
        prompt: "Welcher Satz ist richtig?",
        options: ["Quiero ducharme ahora.", "Quiero me duchar ahora.", "Me quiero ducharme ahora."],
        answer: "Quiero ducharme ahora.",
        explanation: "Beim Infinitiv wird das Pronomen angehängt: ducharme. Es darf nur einmal stehen.",
      },
      {
        type: "gap",
        prompt: "Mi papá se ___ a las cinco. (despertarse)",
        answer: "despierta",
        explanation: "despertarse hat den Stammwechsel e>ie: se despierta.",
      },
      {
        type: "build",
        prompt: "Ich dusche am Morgen.",
        answer: "Me ducho en la mañana.",
        explanation: "Das Pronomen me steht vor dem konjugierten Verb: me ducho.",
      },
      {
        type: "build",
        prompt: "Meine Kinder ziehen sich schnell an.",
        answer: "Mis hijos se visten rápido.",
        explanation: "vestirse hat den Stammwechsel e>i: se visten. Das Pronomen se steht vor dem Verb.",
      },
    ],
  },
];
