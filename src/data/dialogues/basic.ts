import type { Dialogue } from "../types";

/** Scripted dialogues for the A1/A2 scenarios (Chilean Spanish). */
export const DIALOGUES_BASIC: Dialogue[] = [
  // ───────────────────────────── A1: Café ─────────────────────────────
  {
    scenarioId: "cafe",
    steps: [
      {
        npc: "¡Hola! Buenos días. ¿Qué le sirvo?",
        npcDe: "Hallo! Guten Morgen. Was darf ich Ihnen bringen?",
        task: "Grüße und bestelle einen Cortado.",
        options: [
          { es: "Hola, un cortado, por favor.", quality: "best", feedback: "Perfekt: kurz, freundlich und mit »por favor«." },
          { es: "Quiero un cortado.", quality: "ok", feedback: "Verständlich, aber ohne Gruß und »por favor« etwas direkt. Freundlicher: »Un cortado, por favor.«" },
          { es: "Hola, una cortada, por favor.", quality: "wrong", feedback: "Es heißt »el cortado« (männlich), also »un cortado«." },
        ],
      },
      {
        npc: "Ya, un cortado. ¿Para servir o para llevar?",
        npcDe: "Okay (»ya« = okay, gut), ein Cortado. Zum Hiertrinken (»para servir«) oder zum Mitnehmen?",
        task: "Sag, dass du ihn hier trinkst.",
        options: [
          { es: "Para servir, gracias.", quality: "best", feedback: "Genau so sagt man es in Chile: »para servir« = hier essen/trinken." },
          { es: "Aquí.", quality: "ok", feedback: "Wird verstanden, ist aber sehr knapp. Natürlicher: »Para servir, gracias.«" },
          { es: "Soy aquí, gracias.", quality: "wrong", feedback: "Für den Ort benutzt man »estar«, nicht »ser«. Hier passt aber am besten: »Para servir.«" },
        ],
      },
      {
        npc: "Perfecto. ¿Algo para comer?",
        npcDe: "Perfekt. Etwas zu essen?",
        task: "Sag ja und frag, ob es Kuchen gibt.",
        options: [
          { es: "Sí, ¿hay kuchen?", quality: "best", feedback: "Super! »Kuchen« ist in Chile wirklich ein spanisches Wort – dank deutscher Einwanderer im Süden. »¿Hay …?« = Gibt es …?" },
          { es: "Quiero comer algo dulce.", quality: "ok", feedback: "Korrekt, aber du fragst nicht direkt nach Kuchen. Direkter: »¿Hay kuchen?«" },
          { es: "Sí, ¿es kuchen?", quality: "wrong", feedback: "»Gibt es …?« heißt »¿Hay …?«, nicht »¿Es …?«. Richtig: »¿Hay kuchen?«" },
        ],
      },
      {
        npc: "Sí, hay kuchen de manzana y de frambuesa.",
        npcDe: "Ja, es gibt Apfel- und Himbeerkuchen.",
        task: "Nimm ein Stück Himbeerkuchen.",
        options: [
          { es: "Un trozo de kuchen de frambuesa, por favor.", quality: "best", feedback: "Sehr gut: »un trozo de …« = ein Stück …" },
          { es: "Frambuesa.", quality: "ok", feedback: "Man versteht dich, aber ein ganzer Satz klingt höflicher: »Uno de frambuesa, por favor.«" },
          { es: "Una trozo de frambuesa, por favor.", quality: "wrong", feedback: "»Trozo« ist männlich: »un trozo«." },
        ],
      },
      {
        npc: "Al tiro. Son cinco mil quinientos pesos.",
        npcDe: "Sofort (»al tiro« = sofort). Das macht 5.500 Pesos.",
        task: "Frag, ob du mit Karte zahlen kannst.",
        options: [
          { es: "¿Puedo pagar con tarjeta?", quality: "best", feedback: "Perfekt: »poder« + Infinitiv." },
          { es: "¿Con tarjeta?", quality: "ok", feedback: "Verständlich und im Alltag üblich, aber etwas knapp. Vollständig: »¿Puedo pagar con tarjeta?«" },
          { es: "¿Puedo pago con tarjeta?", quality: "wrong", feedback: "Nach »puedo« kommt der Infinitiv: »¿Puedo pagar con tarjeta?«" },
        ],
      },
      {
        npc: "Sí, claro. ¿Le agrego la propina del diez por ciento?",
        npcDe: "Ja, klar. Soll ich die 10 % Trinkgeld dazurechnen? (In Chile wird beim Zahlen oft 10 % »propina« vorgeschlagen.)",
        task: "Sag ja und bedanke dich.",
        options: [
          { es: "Sí, claro. ¡Muchas gracias!", quality: "best", feedback: "Freundlich und natürlich." },
          { es: "Sí.", quality: "ok", feedback: "Korrekt, wirkt aber etwas kurz angebunden. Ein »gracias« dazu ist netter." },
          { es: "Sí, mucho gracias.", quality: "wrong", feedback: "»Gracias« ist weiblich und Plural: »muchas gracias«." },
        ],
      },
    ],
    closing: "¡Gracias a usted! Ahora le llevo todo a la mesa.",
    closingDe: "Danke Ihnen! Ich bringe Ihnen gleich alles an den Tisch.",
    vocab: [
      { es: "un cortado", de: "Espresso mit etwas Milch" },
      { es: "para servir / para llevar", de: "zum Hieressen / zum Mitnehmen" },
      { es: "¿Hay …?", de: "Gibt es …?" },
      { es: "un trozo de", de: "ein Stück" },
      { es: "al tiro", de: "sofort (Chile)" },
      { es: "pagar con tarjeta", de: "mit Karte zahlen" },
      { es: "la propina", de: "das Trinkgeld" },
    ],
  },

  // ─────────────────────────── A1: Presentarse ───────────────────────────
  {
    scenarioId: "presentarse",
    steps: [
      {
        npc: "¡Hola! Soy Camila, amiga de Diego. ¿Cómo te llamas?",
        npcDe: "Hallo! Ich bin Camila, eine Freundin von Diego. Wie heißt du?",
        task: "Sag deinen Namen (z. B. Jonas) und dass es dich freut.",
        options: [
          { es: "Hola, me llamo Jonas. Mucho gusto.", quality: "best", feedback: "Perfekt: »me llamo« + »mucho gusto« ist die Standard-Vorstellung." },
          { es: "Mi nombre es Jonas.", quality: "ok", feedback: "Korrekt, klingt auf einem Asado aber etwas förmlich. Lockerer: »Me llamo Jonas« oder »Soy Jonas«." },
          { es: "Hola, yo llamo Jonas.", quality: "wrong", feedback: "»Llamarse« ist reflexiv: »me llamo Jonas«. »Yo llamo« heißt »ich rufe«." },
        ],
      },
      {
        npc: "Mucho gusto, Jonas. ¿De dónde eres?",
        npcDe: "Freut mich, Jonas. Woher kommst du?",
        task: "Sag, dass du aus Deutschland kommst, aus Hamburg.",
        options: [
          { es: "Soy de Alemania, de Hamburgo.", quality: "best", feedback: "Genau: Herkunft mit »ser de«." },
          { es: "Vengo de Alemania.", quality: "ok", feedback: "Verständlich, aber auf »¿De dónde eres?« antwortet man meist mit »Soy de …«." },
          { es: "Estoy de Alemania, de Hamburgo.", quality: "wrong", feedback: "Herkunft drückt man mit »ser« aus: »Soy de Alemania«." },
        ],
      },
      {
        npc: "¡Qué bacán! ¿Y qué haces aquí en Chile?",
        npcDe: "Wie cool (»bacán« = cool, toll)! Und was machst du hier in Chile?",
        task: "Sag, dass du hier in einer Softwarefirma arbeitest.",
        options: [
          { es: "Trabajo aquí, en una empresa de software.", quality: "best", feedback: "Sehr gut und klar." },
          { es: "Trabajo. Software.", quality: "ok", feedback: "Man versteht dich, aber das ist sehr abgehackt. Besser: »Trabajo en una empresa de software.«" },
          { es: "Trabajo en un empresa de software.", quality: "wrong", feedback: "»Empresa« ist weiblich: »una empresa«." },
        ],
      },
      {
        npc: "¿Y te gusta Santiago?",
        npcDe: "Und gefällt dir Santiago?",
        task: "Sag, dass es dir sehr gefällt, aber das chilenische Spanisch schwierig ist.",
        options: [
          { es: "¡Me gusta mucho! Pero el español chileno es difícil.", quality: "best", feedback: "Perfekt – und jede Chilenin wird lachen und zustimmen." },
          { es: "Sí, me gusta. Español chileno es difícil.", quality: "ok", feedback: "Fast richtig: Vor Sprachen als Subjekt steht der Artikel: »el español chileno«." },
          { es: "Sí, yo gusto mucho Santiago.", quality: "wrong", feedback: "»Gustar« funktioniert wie »gefallen«: »Me gusta mucho Santiago«." },
        ],
      },
      {
        npc: "Jajaja, sí, po. Hablamos muy rápido, ¿cachai?",
        npcDe: "Hahaha, ja, eben (»po« verstärkt nur, wie »halt/eben«). Wir sprechen sehr schnell, verstehst du? (»¿cachai?« = kapiert?, verstehst du?)",
        task: "Sag, dass du ein bisschen verstehst, und bitte sie, langsamer zu sprechen.",
        options: [
          { es: "Sí, un poco. ¿Puedes hablar más lento?", quality: "best", feedback: "Super! »Más lento« (oder »más despacio«) = langsamer." },
          { es: "Sí, un poco. ¿Puede hablar más despacio?", quality: "ok", feedback: "Grammatisch korrekt, aber »puede« (usted) ist unter Gleichaltrigen auf einem Asado zu förmlich. Besser: »¿Puedes …?«" },
          { es: "Sí, entendo un poco. ¿Puedes hablar más lento?", quality: "wrong", feedback: "»Entender« ist ein e→ie-Verb: »entiendo«." },
        ],
      },
      {
        npc: "¡Claro! Oye, ¿quieres un choripán? Está recién hecho.",
        npcDe: "Klar! Hör mal, willst du ein Choripán (Brötchen mit Chorizo)? Ist frisch gemacht.",
        task: "Nimm an und frag, ob es Pebre (chilenische Salsa) gibt.",
        options: [
          { es: "¡Sí, gracias! ¿Hay pebre?", quality: "best", feedback: "Perfekt – Choripán mit Pebre ist ein Klassiker." },
          { es: "Sí. Y pebre.", quality: "ok", feedback: "Verständlich, klingt aber wie ein Befehl. Als Frage: »¿Hay pebre?«" },
          { es: "¡Sí, gracias! ¿Está pebre?", quality: "wrong", feedback: "»Gibt es …?« = »¿Hay …?«. »¿Está …?« fragt, wo etwas ist." },
        ],
      },
      {
        npc: "Sí, ahí está, en la mesa. ¿Y para tomar? ¿Una cerveza, un jugo?",
        npcDe: "Ja, da steht er, auf dem Tisch. Und zu trinken? Ein Bier, einen Saft?",
        task: "Bitte um ein Bier und bedanke dich bei Camila.",
        options: [
          { es: "Una cerveza, por favor. ¡Gracias, Camila!", quality: "best", feedback: "Freundlich und richtig." },
          { es: "Cerveza.", quality: "ok", feedback: "Wird verstanden, ist aber sehr knapp. Mit »una … por favor« klingt es netter." },
          { es: "Un cerveza, por favor.", quality: "wrong", feedback: "»Cerveza« ist weiblich: »una cerveza«." },
        ],
      },
    ],
    closing: "¡Salud! Bienvenido a Chile, Jonas.",
    closingDe: "Prost! Willkommen in Chile, Jonas.",
    vocab: [
      { es: "me llamo …", de: "ich heiße …" },
      { es: "mucho gusto", de: "freut mich" },
      { es: "¿De dónde eres?", de: "Woher kommst du?" },
      { es: "bacán", de: "cool, toll (Chile)" },
      { es: "¿cachai?", de: "verstehst du? (Chile)" },
      { es: "más lento", de: "langsamer" },
      { es: "el choripán", de: "Brötchen mit Chorizo" },
      { es: "¡Salud!", de: "Prost!" },
    ],
  },

  // ───────────────────────────── A1: Feria ─────────────────────────────
  {
    scenarioId: "feria",
    steps: [
      {
        npc: "¡Buenos días! ¿Qué le doy?",
        npcDe: "Guten Morgen! Was darf's sein?",
        task: "Grüße die Verkäuferin (»casera«) und frag, was die Avocados kosten.",
        options: [
          { es: "Buenos días, casera. ¿A cuánto están las paltas?", quality: "best", feedback: "Perfekt! »¿A cuánto están …?« ist die typische Marktfrage, und »casera« ist die freundliche Anrede auf der Feria." },
          { es: "Paltas, ¿cuánto?", quality: "ok", feedback: "Man versteht dich, aber es ist sehr knapp. Besser: »¿A cuánto están las paltas?«" },
          { es: "Buenos días. ¿Cuánto es los paltas?", quality: "wrong", feedback: "»Palta« ist weiblich, und bei Plural braucht das Verb Plural: »¿Cuánto cuestan las paltas?«" },
        ],
      },
      {
        npc: "Las paltas, a tres lucas el kilo. Están buenísimas.",
        npcDe: "Die Avocados (»palta« = Avocado in Chile) – 3.000 Pesos das Kilo (»luca« = 1.000 Pesos). Sie sind super.",
        task: "Nimm ein Kilo.",
        options: [
          { es: "Ya, deme un kilo, por favor.", quality: "best", feedback: "Sehr natürlich: »deme« = geben Sie mir." },
          { es: "Quiero un kilo.", quality: "ok", feedback: "Korrekt, aber etwas direkt. Mit »deme … por favor« klingt es freundlicher." },
          { es: "Ya, un kilo de paltas maduro.", quality: "wrong", feedback: "Das Adjektiv richtet sich nach »paltas«: »un kilo de paltas maduras«." },
        ],
      },
      {
        npc: "¿Para hoy o para el fin de semana?",
        npcDe: "Für heute oder fürs Wochenende? (gemeint: wie reif sie sein sollen)",
        task: "Sag, dass du sie für heute brauchst.",
        options: [
          { es: "Para hoy, por favor.", quality: "best", feedback: "Genau: »para« für den Zweck/Zeitpunkt." },
          { es: "Hoy.", quality: "ok", feedback: "Verständlich, aber knapp. Besser: »Para hoy, por favor.«" },
          { es: "Por hoy, por favor.", quality: "wrong", feedback: "Hier braucht man »para« (für wann): »para hoy«. »Por hoy« heißt eher »für heute (reicht's)«." },
        ],
      },
      {
        npc: "Ya, aquí tiene. ¿Algo más?",
        npcDe: "Okay, bitte schön. Noch etwas?",
        task: "Bestelle noch ein halbes Kilo Tomaten.",
        options: [
          { es: "Sí, medio kilo de tomates, por favor.", quality: "best", feedback: "Perfekt: »medio kilo« = ein halbes Kilo (ohne »un«!)." },
          { es: "Tomates también.", quality: "ok", feedback: "Verständlich, aber die Menge fehlt. Besser: »medio kilo de tomates«." },
          { es: "Sí, media kilo de tomates.", quality: "wrong", feedback: "»Kilo« ist männlich: »medio kilo«." },
        ],
      },
      {
        npc: "Listo. ¿Y fruta? Tengo frutillas muy dulces.",
        npcDe: "Fertig. Und Obst? Ich habe sehr süße Erdbeeren (»frutilla« = Erdbeere in Chile).",
        task: "Frag, ob du eine probieren darfst.",
        options: [
          { es: "¿Puedo probar una?", quality: "best", feedback: "Sehr gut – höflich und richtig." },
          { es: "Quiero probar.", quality: "ok", feedback: "Korrekt, klingt aber eher wie eine Forderung. Als Frage: »¿Puedo probar una?«" },
          { es: "¿Puedo probar uno?", quality: "wrong", feedback: "»Frutilla« ist weiblich, also »una«." },
        ],
      },
      {
        npc: "¡Claro, pruebe no más! La bandeja está a dos lucas.",
        npcDe: "Klar, probieren Sie ruhig (»no más« = ruhig, einfach)! Die Schale kostet 2.000 Pesos.",
        task: "Sag, dass sie lecker sind, und nimm eine Schale.",
        options: [
          { es: "¡Qué ricas! Una bandeja, por favor.", quality: "best", feedback: "Perfekt: »¡Qué ricas!« = Wie lecker! (»ricas« passt zu »frutillas«)." },
          { es: "Bien. Una bandeja.", quality: "ok", feedback: "Korrekt, aber wenig herzlich. Auf der Feria lobt man gern: »¡Qué ricas!«" },
          { es: "¡Qué rico! Uno bandeja, por favor.", quality: "wrong", feedback: "»Bandeja« ist weiblich: »una bandeja«." },
        ],
      },
      {
        npc: "Ya, son seis lucas en total.",
        npcDe: "Okay, das sind insgesamt 6.000 Pesos.",
        task: "Gib einen 10.000er-Schein und frag, ob sie Wechselgeld hat.",
        options: [
          { es: "Aquí tiene. ¿Tiene vuelto de diez mil?", quality: "best", feedback: "Sehr gut: »el vuelto« = Wechselgeld in Chile." },
          { es: "Tengo diez mil.", quality: "ok", feedback: "Verständlich, aber du fragst nicht direkt. Besser: »¿Tiene vuelto de diez mil?«" },
          { es: "Aquí tiene. ¿Tiene vuelto de diez mil lucas?", quality: "wrong", feedback: "Vorsicht: »diez mil lucas« wären 10 Millionen Pesos! Richtig: »diez mil« oder »diez lucas«." },
        ],
      },
    ],
    closing: "Sí, aquí tiene: cuatro lucas de vuelto. ¡Que le vaya bien!",
    closingDe: "Ja, bitte: 4.000 Pesos zurück. Machen Sie's gut! (»Que le vaya bien« = typischer Abschiedsgruß)",
    vocab: [
      { es: "la palta", de: "die Avocado (Chile)" },
      { es: "la luca", de: "1.000 Pesos (Chile)" },
      { es: "¿A cuánto están …?", de: "Wie viel kosten …? (Markt)" },
      { es: "deme …", de: "geben Sie mir …" },
      { es: "medio kilo", de: "ein halbes Kilo" },
      { es: "la frutilla", de: "die Erdbeere (Chile)" },
      { es: "el vuelto", de: "das Wechselgeld" },
      { es: "casero / casera", de: "freundliche Anrede auf dem Markt" },
    ],
  },

  // ───────────────────────────── A1: Metro ─────────────────────────────
  {
    scenarioId: "metro",
    steps: [
      {
        npc: "Hola. ¿Te puedo ayudar en algo?",
        npcDe: "Hallo. Kann ich dir irgendwie helfen?",
        task: "Sag ja und frag, wo die Metro-Station ist.",
        options: [
          { es: "Sí, gracias. ¿Dónde está la estación de metro?", quality: "best", feedback: "Perfekt: Ort → »estar«." },
          { es: "Metro, ¿dónde?", quality: "ok", feedback: "Man versteht dich, aber ein ganzer Satz ist höflicher: »¿Dónde está el metro?«" },
          { es: "Sí, gracias. ¿Dónde es la estación de metro?", quality: "wrong", feedback: "Für den Ort von Dingen benutzt man »estar«: »¿Dónde está …?«" },
        ],
      },
      {
        npc: "La estación Baquedano está a dos cuadras. Sigue derecho y dobla a la derecha.",
        npcDe: "Die Station Baquedano ist zwei Blocks entfernt (»cuadra« = Häuserblock). Geh geradeaus (»derecho«) und bieg rechts ab (»a la derecha«).",
        task: "Wiederhole zur Sicherheit: geradeaus und dann rechts?",
        options: [
          { es: "¿Derecho y después a la derecha?", quality: "best", feedback: "Super – genau so fragt man nach. Merke: »derecho« = geradeaus, »a la derecha« = rechts." },
          { es: "¿Recto y a la derecha?", quality: "ok", feedback: "Korrekt, aber in Chile sagt man meist »derecho« statt »recto«." },
          { es: "¿Derecho y después a la derecho?", quality: "wrong", feedback: "»Rechts« heißt »a la derecha« (weiblich). »Derecho« bedeutet geradeaus." },
        ],
      },
      {
        npc: "Exacto. ¿Tienes tarjeta Bip!?",
        npcDe: "Genau. Hast du eine Tarjeta Bip! (die Metro-/Buskarte in Santiago)?",
        task: "Sag, dass du keine hast, und frag, wo du eine kaufen kannst.",
        options: [
          { es: "No, no tengo. ¿Dónde puedo comprar una?", quality: "best", feedback: "Perfekt – höflich und vollständig." },
          { es: "No. ¿Dónde la compro?", quality: "ok", feedback: "Korrekt, aber sehr knapp. Etwas höflicher: »¿Dónde puedo comprar una?«" },
          { es: "No, yo no tener. ¿Dónde comprar?", quality: "wrong", feedback: "Die Verben müssen konjugiert werden: »No tengo. ¿Dónde puedo comprar una?«" },
        ],
      },
      {
        npc: "En la boletería de la estación. Cuesta como mil quinientos pesos y después la cargas.",
        npcDe: "Am Ticketschalter (»boletería«) der Station. Sie kostet ungefähr 1.500 Pesos und danach lädst du sie auf (»cargar«).",
        task: "Frag, wie viel eine Fahrt kostet.",
        options: [
          { es: "¿Y cuánto cuesta un viaje?", quality: "best", feedback: "Sehr gut: »un viaje« = eine Fahrt." },
          { es: "¿Cuánto es el metro?", quality: "ok", feedback: "Verständlich, aber ungenau. Genauer: »¿Cuánto cuesta un viaje?«" },
          { es: "¿Y cuánto cuestan un viaje?", quality: "wrong", feedback: "»Un viaje« ist Singular, also »cuesta«." },
        ],
      },
      {
        npc: "Depende de la hora. En hora punta, unos ochocientos pesos.",
        npcDe: "Kommt auf die Uhrzeit an. Zur Hauptverkehrszeit (»hora punta«) etwa 800 Pesos.",
        task: "Frag, ob du mit der Metro zum Cerro Santa Lucía kommst.",
        options: [
          { es: "¿Puedo ir al cerro Santa Lucía en metro?", quality: "best", feedback: "Perfekt: »ir en metro« = mit der Metro fahren, »a + el = al«." },
          { es: "¿Metro va Santa Lucía?", quality: "ok", feedback: "Man versteht es, aber Artikel und Präposition fehlen: »¿El metro va a Santa Lucía?«" },
          { es: "¿Puedo ir a el cerro Santa Lucía con el metro?", quality: "wrong", feedback: "»a + el« wird zu »al«, und Verkehrsmittel stehen mit »en«: »ir al cerro en metro«." },
        ],
      },
      {
        npc: "Sí, toma la Línea 1, dirección San Pablo. Son solo dos estaciones.",
        npcDe: "Ja, nimm die Linie 1 Richtung San Pablo. Es sind nur zwei Stationen.",
        task: "Bedanke dich herzlich.",
        options: [
          { es: "¡Muchas gracias! Muy amable.", quality: "best", feedback: "Herzlich und natürlich: »muy amable« = sehr nett." },
          { es: "Gracias.", quality: "ok", feedback: "Korrekt, aber etwas knapp nach so viel Hilfe." },
          { es: "¡De nada! Muy amable.", quality: "wrong", feedback: "»De nada« ist die Antwort auf »gracias«. Du willst dich bedanken: »¡Muchas gracias!«" },
        ],
      },
    ],
    closing: "¡De nada! Que te vaya bien.",
    closingDe: "Gern geschehen! Mach's gut.",
    vocab: [
      { es: "la estación de metro", de: "die Metro-Station" },
      { es: "la cuadra", de: "der Häuserblock" },
      { es: "seguir derecho", de: "geradeaus gehen" },
      { es: "doblar a la derecha", de: "rechts abbiegen" },
      { es: "la tarjeta Bip!", de: "Fahrkarte für Metro und Bus in Santiago" },
      { es: "la boletería", de: "der Ticketschalter" },
      { es: "cargar la tarjeta", de: "die Karte aufladen" },
      { es: "la hora punta", de: "die Hauptverkehrszeit" },
    ],
  },

  // ───────────────────────────── A2: Hostal ─────────────────────────────
  {
    scenarioId: "hostal",
    steps: [
      {
        npc: "¡Hola! ¿Cómo estás? ¿Tienes una reserva?",
        npcDe: "Hallo! Wie geht's? Hast du eine Reservierung?",
        task: "Sag, dass du eine Reservierung für drei Nächte hast, auf den Namen Becker.",
        options: [
          { es: "Hola. Sí, tengo una reserva para tres noches, a nombre de Becker.", quality: "best", feedback: "Perfekt: »a nombre de« = auf den Namen." },
          { es: "Sí, reserva Becker. Tres noches.", quality: "ok", feedback: "Verständlich, aber abgehackt. Besser als ganzer Satz: »Tengo una reserva a nombre de Becker.«" },
          { es: "Sí, tengo una reserva por tres noches en el nombre de Becker.", quality: "wrong", feedback: "Richtig ist »para tres noches« und »a nombre de Becker«." },
        ],
      },
      {
        npc: "A ver… Becker… Uy, no te encuentro en el sistema. ¿Cuándo hiciste la reserva?",
        npcDe: "Mal sehen … Becker … Oh, ich finde dich nicht im System. Wann hast du die Reservierung gemacht?",
        task: "Sag, dass du sie letzte Woche online gemacht hast.",
        options: [
          { es: "La hice la semana pasada, por internet.", quality: "best", feedback: "Sehr gut: abgeschlossene Handlung → »hice« (pretérito indefinido)." },
          { es: "En internet, la semana pasada.", quality: "ok", feedback: "Verständlich; üblicher ist aber »por internet«, und ein ganzer Satz wirkt besser." },
          { es: "La hacía la semana pasada por internet.", quality: "wrong", feedback: "Für eine einmalige, abgeschlossene Handlung nimmt man das Indefinido: »La hice«." },
        ],
      },
      {
        npc: "¿Tienes el correo de confirmación?",
        npcDe: "Hast du die Bestätigungsmail?",
        task: "Sag ja und dass du sie auf dem Handy hast.",
        options: [
          { es: "Sí, aquí lo tengo en el celular. Mira.", quality: "best", feedback: "Perfekt: »el correo« → »lo«, und in Chile sagt man »celular«." },
          { es: "Sí, en mi móvil.", quality: "ok", feedback: "Verständlich, aber »móvil« ist Spanien. In Chile: »el celular«." },
          { es: "Sí, aquí la tengo en el celular.", quality: "wrong", feedback: "»Correo« ist männlich, das Pronomen ist also »lo«: »aquí lo tengo«." },
        ],
      },
      {
        npc: "Ah, ya veo. Reservaste para el próximo mes, no para hoy.",
        npcDe: "Ah, ich sehe. Du hast für nächsten Monat reserviert, nicht für heute.",
        task: "Reagiere überrascht und frag, ob es für heute ein freies Zimmer gibt.",
        options: [
          { es: "¡Uy, qué mala suerte! ¿Tienes una pieza libre para hoy?", quality: "best", feedback: "Super: »la pieza« ist das chilenische Wort für Zimmer." },
          { es: "Oh no. ¿Hay una habitación libre hoy?", quality: "ok", feedback: "Korrekt und verständlich; in Chile sagt man aber meist »pieza« statt »habitación«." },
          { es: "¡Uy! ¿Está una pieza libre para hoy?", quality: "wrong", feedback: "»Gibt es …?« heißt »¿Hay …?«: »¿Hay una pieza libre?«" },
        ],
      },
      {
        npc: "Me queda una pieza doble con baño privado. Cuesta cuarenta lucas la noche.",
        npcDe: "Ich habe noch ein Doppelzimmer mit eigenem Bad. Es kostet 40.000 Pesos (»luca« = 1.000 Pesos) pro Nacht.",
        task: "Sag, dass das etwas teuer für dich ist, und frag nach etwas Günstigerem.",
        options: [
          { es: "Es un poco caro para mí. ¿Tienes algo más barato?", quality: "best", feedback: "Höflich und klar." },
          { es: "Es demasiado caro.", quality: "ok", feedback: "Korrekt, aber direkt – und du fragst nicht nach einer Alternative." },
          { es: "Es un poco caro para mí. ¿Tienes algo más barata?", quality: "wrong", feedback: "»Algo« ist neutral, das Adjektiv bleibt männlich: »algo más barato«." },
        ],
      },
      {
        npc: "Hay una cama en el dormitorio compartido: quince lucas, con desayuno incluido.",
        npcDe: "Es gibt ein Bett im Schlafsaal: 15.000 Pesos, Frühstück inklusive.",
        task: "Nimm das Bett und frag, um wie viel Uhr es Frühstück gibt.",
        options: [
          { es: "Perfecto, me quedo con la cama. ¿A qué hora es el desayuno?", quality: "best", feedback: "Sehr gut: »me quedo con …« = ich nehme …; Zeit eines Ereignisses → »ser«." },
          { es: "Ya, la cama. ¿Desayuno a qué hora?", quality: "ok", feedback: "Verständlich, aber abgehackt. Besser: »¿A qué hora es el desayuno?«" },
          { es: "Perfecto, me quedo con la cama. ¿A qué hora está el desayuno?", quality: "wrong", feedback: "Für Zeitpunkte von Ereignissen benutzt man »ser«: »¿A qué hora es el desayuno?«" },
        ],
      },
      {
        npc: "De ocho a diez y media. Aquí tienes la llave. Tu cama es la número cuatro.",
        npcDe: "Von acht bis halb elf. Hier ist dein Schlüssel. Dein Bett ist Nummer vier.",
        task: "Bedanke dich und frag nach dem WLAN-Passwort.",
        options: [
          { es: "¡Gracias! ¿Y cuál es la clave del wifi?", quality: "best", feedback: "Perfekt: »la clave« = das Passwort, und »¿Cuál es …?« fragt nach einer konkreten Angabe." },
          { es: "Gracias. ¿Hay wifi?", quality: "ok", feedback: "Korrekt, aber du fragst nicht nach dem Passwort." },
          { es: "¡Gracias! ¿Qué es la clave del wifi?", quality: "wrong", feedback: "»¿Qué es …?« fragt nach einer Definition. Nach dem konkreten Passwort fragt man mit »¿Cuál es la clave?«" },
        ],
      },
    ],
    closing: "La clave está en la pared, al lado de la cocina. ¡Que disfrutes Valparaíso!",
    closingDe: "Das Passwort hängt an der Wand neben der Küche. Viel Spaß in Valparaíso!",
    vocab: [
      { es: "la reserva", de: "die Reservierung" },
      { es: "a nombre de", de: "auf den Namen" },
      { es: "la pieza", de: "das Zimmer (Chile)" },
      { es: "el baño privado", de: "das eigene Bad" },
      { es: "el dormitorio compartido", de: "der Schlafsaal" },
      { es: "con desayuno incluido", de: "mit Frühstück inklusive" },
      { es: "la llave", de: "der Schlüssel" },
      { es: "la clave del wifi", de: "das WLAN-Passwort" },
    ],
  },

  // ─────────────────────────── A2: Restaurante ───────────────────────────
  {
    scenarioId: "restaurante",
    steps: [
      {
        npc: "Buenas tardes. ¿Mesa para cuántas personas?",
        npcDe: "Guten Tag. Ein Tisch für wie viele Personen?",
        task: "Sag: für eine Person, und frag, ob es ein Tagesmenü gibt.",
        options: [
          { es: "Para una persona. ¿Tienen menú del día?", quality: "best", feedback: "Perfekt: »para« + Anzahl, und »¿Tienen …?« an das Restaurant gerichtet." },
          { es: "Uno. ¿Hay menú?", quality: "ok", feedback: "Verständlich, aber knapp. Besser: »Para una persona. ¿Tienen menú del día?«" },
          { es: "Por una persona. ¿Tienen menú del día?", quality: "wrong", feedback: "»Für eine Person« = »para una persona«." },
        ],
      },
      {
        npc: "Sí. Hoy tenemos de entrada ensalada chilena o sopaipillas, y de fondo cazuela o pastel de choclo.",
        npcDe: "Ja. Heute gibt es als Vorspeise Ensalada chilena (Tomaten-Zwiebel-Salat) oder Sopaipillas (frittierte Kürbisfladen), und als Hauptgericht (»plato de fondo«) Cazuela (Eintopf) oder Pastel de choclo (Maisauflauf).",
        task: "Frag, was in der Cazuela drin ist.",
        options: [
          { es: "¿Qué lleva la cazuela?", quality: "best", feedback: "Sehr natürlich: »¿Qué lleva …?« = Was ist drin?" },
          { es: "¿Qué hay en la cazuela?", quality: "ok", feedback: "Verständlich und korrekt; bei Gerichten sagt man aber meist »¿Qué lleva …?«" },
          { es: "¿Qué es en la cazuela?", quality: "wrong", feedback: "»Ser« passt hier nicht. Richtig: »¿Qué lleva la cazuela?« oder »¿Qué hay en la cazuela?«" },
        ],
      },
      {
        npc: "Lleva carne de vacuno, papas, zapallo y choclo. Es muy rica.",
        npcDe: "Rindfleisch, Kartoffeln (»papa«), Kürbis (»zapallo«) und Mais (»choclo«). Sie ist sehr lecker.",
        task: "Bestelle Sopaipillas als Vorspeise und Pastel de choclo als Hauptgericht.",
        options: [
          { es: "Entonces, de entrada las sopaipillas y de fondo el pastel de choclo, por favor.", quality: "best", feedback: "Perfekt bestellt – mit »de entrada« und »de fondo«." },
          { es: "Quiero sopaipillas y pastel de choclo.", quality: "ok", feedback: "Korrekt, aber etwas direkt. Höflicher: »… por favor« oder »¿Me trae …?«" },
          { es: "De entrada los sopaipillas y de fondo la pastel de choclo.", quality: "wrong", feedback: "Falsches Geschlecht: »las sopaipillas« (weiblich) und »el pastel« (männlich)." },
        ],
      },
      {
        npc: "Muy bien. ¿Y para tomar?",
        npcDe: "Sehr gut. Und zu trinken?",
        task: "Frag, ob sie frischen Saft haben.",
        options: [
          { es: "¿Tienen jugo natural?", quality: "best", feedback: "Genau: »jugo natural« = frisch gepresster Saft." },
          { es: "¿Tienen zumo natural?", quality: "ok", feedback: "Man versteht dich, aber »zumo« sagt man in Spanien. In Chile: »jugo«." },
          { es: "¿Tienen jugo natural fresca?", quality: "wrong", feedback: "»Jugo« ist männlich: »jugo natural fresco« – oder einfach »jugo natural«." },
        ],
      },
      {
        npc: "Sí, tenemos de frambuesa y de piña.",
        npcDe: "Ja, wir haben Himbeere und Ananas.",
        task: "Nimm einen Ananassaft ohne Zucker.",
        options: [
          { es: "Uno de piña sin azúcar, por favor.", quality: "best", feedback: "Perfekt – und klug: In Chile wird Saft oft gesüßt." },
          { es: "Piña. Sin azúcar.", quality: "ok", feedback: "Verständlich, aber abgehackt. Besser: »Uno de piña sin azúcar, por favor.«" },
          { es: "Una de piña sin azúcar, por favor.", quality: "wrong", feedback: "Gemeint ist »el jugo«, also »uno de piña«." },
        ],
      },
      {
        npc: "¿Qué tal estuvo todo?",
        npcDe: "Wie war alles?",
        task: "Sag, dass alles lecker war und dir die Sopaipillas sehr geschmeckt haben.",
        options: [
          { es: "¡Todo muy rico! Me gustaron mucho las sopaipillas.", quality: "best", feedback: "Sehr gut: Plural-Subjekt → »me gustaron«." },
          { es: "Rico, gracias.", quality: "ok", feedback: "Freundlich, aber knapp. Ein konkretes Lob freut die Bedienung mehr." },
          { es: "¡Todo muy rico! Me gustó mucho las sopaipillas.", quality: "wrong", feedback: "»Las sopaipillas« ist Plural, also »me gustaron«." },
        ],
      },
      {
        npc: "Qué bueno. ¿Le traigo algo más? ¿Un postre, un cafecito?",
        npcDe: "Wie schön. Darf ich Ihnen noch etwas bringen? Ein Dessert, einen Kaffee?",
        task: "Lehne ab und bitte um die Rechnung.",
        options: [
          { es: "No, gracias. ¿Me trae la cuenta, por favor?", quality: "best", feedback: "Perfekt und höflich." },
          { es: "La cuenta.", quality: "ok", feedback: "Wird verstanden, wirkt aber unhöflich. Besser mit »por favor« oder als Frage." },
          { es: "No, gracias. ¿Me trae el cuento, por favor?", quality: "wrong", feedback: "»El cuento« ist eine Geschichte! Die Rechnung ist »la cuenta«." },
        ],
      },
    ],
    closing: "Al tiro se la traigo. Son doce mil pesos; la propina es aparte.",
    closingDe: "Ich bringe sie Ihnen sofort (»al tiro« = sofort). Das macht 12.000 Pesos; Trinkgeld ist extra.",
    vocab: [
      { es: "el menú del día", de: "das Tagesmenü" },
      { es: "de entrada", de: "als Vorspeise" },
      { es: "el plato de fondo", de: "das Hauptgericht (Chile)" },
      { es: "¿Qué lleva …?", de: "Was ist in …?" },
      { es: "el choclo", de: "der Mais (Chile)" },
      { es: "el zapallo", de: "der Kürbis" },
      { es: "el jugo natural", de: "frischer Saft" },
      { es: "la cuenta", de: "die Rechnung" },
    ],
  },

  // ───────────────────────────── A2: Farmacia ─────────────────────────────
  {
    scenarioId: "farmacia",
    steps: [
      {
        npc: "Buenas tardes. ¿En qué le puedo ayudar?",
        npcDe: "Guten Tag. Wie kann ich Ihnen helfen?",
        task: "Sag, dass du Halsschmerzen hast.",
        options: [
          { es: "Buenas tardes. Me duele la garganta.", quality: "best", feedback: "Perfekt: »me duele …« = mir tut … weh." },
          { es: "Tengo un problema con la garganta.", quality: "ok", feedback: "Korrekt, aber ungenau. Klarer: »Me duele la garganta.«" },
          { es: "Buenas tardes. Me duelo la garganta.", quality: "wrong", feedback: "»Doler« funktioniert wie »gustar«: »me duele la garganta«." },
        ],
      },
      {
        npc: "¿Desde cuándo se siente así?",
        npcDe: "Seit wann fühlen Sie sich so?",
        task: "Sag, dass es seit vorgestern so ist und du gestern Abend Fieber hattest.",
        options: [
          { es: "Desde anteayer. Y anoche tuve fiebre.", quality: "best", feedback: "Sehr gut: »anteayer« = vorgestern, »anoche« = gestern Abend, »tuve« = ich hatte." },
          { es: "Dos días. Ayer fiebre.", quality: "ok", feedback: "Man versteht dich, aber es fehlen Verben. Besser: »Desde anteayer. Y anoche tuve fiebre.«" },
          { es: "Desde anteayer. Y anoche tengo fiebre.", quality: "wrong", feedback: "»Anoche« ist Vergangenheit: »anoche tuve fiebre«." },
        ],
      },
      {
        npc: "¿Cuánta fiebre tuvo? ¿Se tomó la temperatura?",
        npcDe: "Wie hoch war das Fieber? Haben Sie Fieber gemessen?",
        task: "Sag, dass du 38,5 Grad hattest.",
        options: [
          { es: "Sí, tuve treinta y ocho y medio.", quality: "best", feedback: "Genau so sagt man es: »treinta y ocho y medio«." },
          { es: "Treinta y ocho coma cinco.", quality: "ok", feedback: "Verständlich, aber bei Fieber sagt man meist »treinta y ocho y medio«." },
          { es: "Sí, tenía treinta y ocho años y medio.", quality: "wrong", feedback: "Hoppla – »años« sind Lebensjahre! Richtig: »treinta y ocho grados y medio« oder kurz »treinta y ocho y medio«." },
        ],
      },
      {
        npc: "Ya. Le recomiendo paracetamol para la fiebre y estas pastillas para la garganta.",
        npcDe: "Gut. Ich empfehle Ihnen Paracetamol gegen das Fieber und diese Tabletten für den Hals.",
        task: "Frag, wie oft du das Paracetamol nehmen sollst.",
        options: [
          { es: "¿Cada cuántas horas lo tomo?", quality: "best", feedback: "Perfekt: »cada cuántas horas« = alle wie viel Stunden." },
          { es: "¿Cuántas veces tomo?", quality: "ok", feedback: "Verständlich, aber das Objekt fehlt: »¿Cuántas veces al día lo tomo?«" },
          { es: "¿Cuántas veces al día lo tomar?", quality: "wrong", feedback: "Das Verb muss konjugiert werden: »¿Cuántas veces al día lo tomo?«" },
        ],
      },
      {
        npc: "Una pastilla cada ocho horas, después de comer. Máximo tres al día.",
        npcDe: "Eine Tablette alle acht Stunden, nach dem Essen. Höchstens drei pro Tag.",
        task: "Frag, ob du dafür ein Rezept brauchst.",
        options: [
          { es: "¿Necesito receta para esto?", quality: "best", feedback: "Sehr gut: »la receta« = das Rezept." },
          { es: "¿Receta?", quality: "ok", feedback: "Wird verstanden, ist aber sehr knapp." },
          { es: "¿Necesito una recepta?", quality: "wrong", feedback: "Falscher Freund: Auf Spanisch heißt es »receta«, nicht »recepta«." },
        ],
      },
      {
        npc: "No, no necesita receta. Pero si en tres días sigue con fiebre, vaya al médico.",
        npcDe: "Nein, Sie brauchen kein Rezept. Aber wenn Sie in drei Tagen noch Fieber haben, gehen Sie zum Arzt.",
        task: "Bedanke dich und frag, was alles zusammen kostet.",
        options: [
          { es: "Ya, muchas gracias. ¿Cuánto es todo?", quality: "best", feedback: "Perfekt: »¿Cuánto es todo?« = Was macht das zusammen?" },
          { es: "Ok. ¿Cuánto cuesta?", quality: "ok", feedback: "Verständlich, aber »todo« fehlt – und ein »gracias« wäre netter." },
          { es: "Ya, muchas gracias. ¿Cuánto son todo?", quality: "wrong", feedback: "»Todo« ist Singular: »¿Cuánto es todo?«" },
        ],
      },
    ],
    closing: "Son siete mil doscientos pesos. ¡Que se mejore!",
    closingDe: "Das macht 7.200 Pesos. Gute Besserung!",
    vocab: [
      { es: "me duele la garganta", de: "mir tut der Hals weh" },
      { es: "la fiebre", de: "das Fieber" },
      { es: "anteayer", de: "vorgestern" },
      { es: "anoche", de: "gestern Abend / letzte Nacht" },
      { es: "la pastilla", de: "die Tablette" },
      { es: "cada ocho horas", de: "alle acht Stunden" },
      { es: "la receta", de: "das Rezept" },
      { es: "¡Que se mejore!", de: "Gute Besserung! (usted)" },
    ],
  },

  // ─────────────────────────── A2: Fin de semana ───────────────────────────
  {
    scenarioId: "fin-de-semana",
    steps: [
      {
        npc: "¡Hola! ¿Cómo estás? ¿Qué tal tu fin de semana?",
        npcDe: "Hallo! Wie geht's? Wie war dein Wochenende?",
        task: "Sag, dass es sehr gut war und du im Cajón del Maipo warst.",
        options: [
          { es: "¡Muy bien! Fui al Cajón del Maipo.", quality: "best", feedback: "Perfekt: »fui« = ich bin gefahren/war (Indefinido von »ir«)." },
          { es: "Bien, bien. Cajón del Maipo.", quality: "ok", feedback: "Verständlich, aber ohne Verb. Besser: »Fui al Cajón del Maipo.«" },
          { es: "¡Muy bien! Voy al Cajón del Maipo.", quality: "wrong", feedback: "Das Wochenende ist vorbei – Vergangenheit: »Fui al Cajón del Maipo«." },
        ],
      },
      {
        npc: "¡Qué bacán! ¿Con quién fuiste?",
        npcDe: "Wie cool (»bacán« = cool)! Mit wem warst du da?",
        task: "Sag, dass du mit deiner Partnerin / deinem Partner und zwei Freunden dort warst.",
        options: [
          { es: "Fui con mi pareja y dos amigos.", quality: "best", feedback: "Sehr gut. In Chile sagt man auch »mi polola / mi pololo« (feste Freundin / fester Freund)." },
          { es: "Mi pareja y dos amigos.", quality: "ok", feedback: "Korrekt und im Gespräch üblich, aber ein ganzer Satz übt mehr: »Fui con …«" },
          { es: "Fue con mi pareja y dos amigos.", quality: "wrong", feedback: "»Fue« ist er/sie. Für »ich« heißt es »fui«." },
        ],
      },
      {
        npc: "¿Y qué hicieron allá?",
        npcDe: "Und was habt ihr dort gemacht? (»ustedes« = ihr in Lateinamerika)",
        task: "Sag, dass ihr viel gewandert seid und abends ein Asado gemacht habt.",
        options: [
          { es: "Caminamos mucho y en la noche hicimos un asado.", quality: "best", feedback: "Perfekt: »caminamos«, »hicimos« – und »en la noche« ist typisch lateinamerikanisch." },
          { es: "Caminamos mucho y en la noche hacimos un asado.", quality: "ok", feedback: "Fast richtig! »Hacer« ist unregelmäßig: »hicimos«." },
          { es: "Caminábamos mucho y en la noche hacíamos un asado.", quality: "wrong", feedback: "Das Imperfekt klingt nach »früher immer«. Für ein konkretes Wochenende: »caminamos«, »hicimos«." },
        ],
      },
      {
        npc: "¡Qué envidia! Yo me quedé en la casa, estaba muy cansado. ¿Hizo frío allá?",
        npcDe: "Wie beneidenswert! Ich bin zu Hause geblieben, ich war sehr müde. War es kalt dort?",
        task: "Sag, dass es tagsüber warm, aber nachts sehr kalt war.",
        options: [
          { es: "En el día hizo calor, pero en la noche hizo mucho frío.", quality: "best", feedback: "Sehr gut: Wetter mit »hacer«: »hizo calor / hizo frío«." },
          { es: "En el día, calor. En la noche, mucho frío.", quality: "ok", feedback: "Verständlich, aber ohne Verben. Übe lieber »hizo calor / hizo frío«." },
          { es: "En el día fue caliente, pero en la noche fue mucho frío.", quality: "wrong", feedback: "Wetter drückt man mit »hacer« aus: »hizo calor«, »hizo frío«. »Caliente« benutzt man für Dinge (heißer Kaffee)." },
        ],
      },
      {
        npc: "Típico de la cordillera, po. ¿Y vas a volver?",
        npcDe: "Typisch für die Berge (»la cordillera« = die Anden), eben (»po« verstärkt nur). Und fährst du wieder hin?",
        task: "Sag, dass du im Sommer wieder hinfahren willst.",
        options: [
          { es: "¡Sí! Quiero volver en el verano.", quality: "best", feedback: "Perfekt – und denk dran: In Chile ist Sommer von Dezember bis Februar." },
          { es: "Sí, en verano vuelvo.", quality: "ok", feedback: "Verständlich, aber »Quiero volver« drückt den Wunsch klarer aus." },
          { es: "¡Sí! Quiero a volver en el verano.", quality: "wrong", feedback: "Nach »querer« kommt der Infinitiv direkt, ohne »a«: »Quiero volver«." },
        ],
      },
      {
        npc: "Oye, hay café en la cocina. ¿Vamos por uno antes de la reunión?",
        npcDe: "Hör mal, in der Küche gibt's Kaffee. Holen wir uns einen vor dem Meeting?",
        task: "Sag ja und frag, um wie viel Uhr das Meeting ist.",
        options: [
          { es: "¡Ya, vamos! ¿A qué hora es la reunión?", quality: "best", feedback: "Sehr gut: »ya« = okay, und Uhrzeit eines Termins mit »ser«." },
          { es: "Sí. ¿Cuándo es la reunión?", quality: "ok", feedback: "Korrekt, aber weniger genau als »¿A qué hora …?«" },
          { es: "¡Ya, vamos! ¿A qué hora es el reunión?", quality: "wrong", feedback: "Wörter auf »-ión« sind weiblich: »la reunión«." },
        ],
      },
    ],
    closing: "A las diez. ¡Vamos, que sin café no funciono!",
    closingDe: "Um zehn. Los, ohne Kaffee funktioniere ich nicht!",
    vocab: [
      { es: "¿Qué tal tu fin de semana?", de: "Wie war dein Wochenende?" },
      { es: "fui / fuiste", de: "ich war, ging / du warst, gingst" },
      { es: "hicimos un asado", de: "wir haben gegrillt" },
      { es: "en la noche", de: "abends, nachts (Lateinamerika)" },
      { es: "hizo calor / hizo frío", de: "es war warm / kalt" },
      { es: "la cordillera", de: "die Anden, das Gebirge" },
      { es: "¡Qué envidia!", de: "Wie beneidenswert!" },
      { es: "la reunión", de: "das Meeting, die Besprechung" },
    ],
  },

  // ─────────────────────────── A2: Familia del pololo ───────────────────────────
  {
    scenarioId: "familia-pololo",
    steps: [
      {
        npc: "¡Hola! Pasa, pasa. Yo soy Carmen, la mamá de Nico. ¡Por fin te conocemos!",
        npcDe: "Hallo! Komm rein, komm rein. Ich bin Carmen, Nicos Mama. Endlich lernen wir dich kennen!",
        task: "Begrüße sie höflich und gib ihr die Blumen, die du mitgebracht hast.",
        options: [
          { es: "Mucho gusto, señora Carmen. Le traje estas flores.", quality: "best", feedback: "Perfekt: höflich mit »señora« und »le« (usted) beim ersten Treffen." },
          { es: "Hola, Carmen. Flores para ti.", quality: "ok", feedback: "Verständlich, aber beim ersten Treffen etwas zu locker. Besser zuerst »señora« und »usted«." },
          { es: "Mucho gusto, señora Carmen. Le traí estas flores.", quality: "wrong", feedback: "»Traer« ist unregelmäßig: »traje« (ich habe gebracht)." },
        ],
      },
      {
        npc: "¡Ay, qué lindas, gracias! Pero trátame de tú, no más. ¿Te costó llegar?",
        npcDe: "Oh, wie schön, danke! Aber duz mich ruhig (»no más« = ruhig, einfach). War es schwer herzufinden?",
        task: "Sag, dass es leicht war: Du bist mit der Metro und dann mit dem Bus gekommen.",
        options: [
          { es: "No, fue fácil. Vine en metro y después en micro.", quality: "best", feedback: "Super: »vine« (von »venir«) und »la micro« = der Stadtbus in Chile." },
          { es: "No, fue fácil. Vine en metro y después en autobús.", quality: "ok", feedback: "Korrekt, aber in Chile sagt man »micro« statt »autobús«." },
          { es: "No, fue fácil. Vení en metro y después en micro.", quality: "wrong", feedback: "»Venir« ist unregelmäßig: »vine«, nicht »vení«." },
        ],
      },
      {
        npc: "¡Qué bueno! Siéntate. ¿Quieres algo para tomar? ¿Un pisco sour, un jugo?",
        npcDe: "Wie schön! Setz dich. Möchtest du etwas trinken? Einen Pisco Sour, einen Saft?",
        task: "Nimm einen Pisco Sour und sag, dass du ihn noch nie probiert hast.",
        options: [
          { es: "Un pisco sour, gracias. ¡Nunca lo he probado!", quality: "best", feedback: "Sehr gut! (In Chile hört man auch oft »Nunca lo probé«.)" },
          { es: "Pisco sour. Gracias.", quality: "ok", feedback: "Korrekt, aber du sagst nicht, dass es dein erster ist – das wäre ein schöner Gesprächsanlass." },
          { es: "Un pisco sour, gracias. ¡Nunca no lo he probado!", quality: "wrong", feedback: "Steht »nunca« vor dem Verb, fällt »no« weg: »Nunca lo he probado« (oder »No lo he probado nunca«)." },
        ],
      },
      {
        npc: "¿En serio? ¡Te va a encantar! ¿Y tu familia vive en Alemania?",
        npcDe: "Echt? Der wird dir super schmecken! Und deine Familie lebt in Deutschland?",
        task: "Sag, dass deine Eltern in München wohnen und du eine Schwester hast.",
        options: [
          { es: "Sí, mis papás viven en Múnich. Y tengo una hermana.", quality: "best", feedback: "Perfekt: »mis papás« = meine Eltern, so sagt man es in Chile." },
          { es: "Sí, mis padres viven en Múnich. Tengo una hermana.", quality: "ok", feedback: "Korrekt, aber »padres« klingt etwas formeller. In Chile sagt man meist »mis papás«." },
          { es: "Sí, mis papás vive en Múnich. Y tengo una hermana.", quality: "wrong", feedback: "»Mis papás« ist Plural: »viven«." },
        ],
      },
      {
        npc: "¡Qué lejos! Bueno, a la mesa. Hice charquicán. ¿Te sirvo?",
        npcDe: "Wie weit weg! Also, zu Tisch. Ich habe Charquicán gemacht (Eintopf aus Kürbis, Kartoffeln und Fleisch). Soll ich dir auftun?",
        task: "Sag ja, gerne, und dass es sehr gut riecht.",
        options: [
          { es: "¡Sí, gracias! Huele muy rico.", quality: "best", feedback: "Perfekt: »huele rico« = riecht lecker." },
          { es: "Sí. Tiene buen olor.", quality: "ok", feedback: "Korrekt, aber etwas steif. Natürlicher: »¡Huele muy rico!«" },
          { es: "¡Sí, gracias! Ole muy rico.", quality: "wrong", feedback: "»Oler« ist unregelmäßig: »huele«." },
        ],
      },
      {
        npc: "¿Y? ¿Te gustó el charquicán?",
        npcDe: "Und? Hat dir das Charquicán geschmeckt?",
        task: "Sag, dass es dir super geschmeckt hat, und mach ihr ein Kompliment.",
        options: [
          { es: "¡Me encantó! Cocinas muy bien, Carmen.", quality: "best", feedback: "Sehr gut – und du duzt sie jetzt, wie sie es wollte." },
          { es: "Sí, estuvo bueno.", quality: "ok", feedback: "Korrekt, klingt aber etwas lauwarm. Ein Kompliment an die Köchin kommt besser an." },
          { es: "¡Me encanté! Cocinas muy bien, Carmen.", quality: "wrong", feedback: "»Encantar« funktioniert wie »gustar«: »me encantó« (das Essen hat mich begeistert)." },
        ],
      },
      {
        npc: "¡Ay, gracias! Más tarde tomamos once. ¿Te quedas?",
        npcDe: "Oh, danke! Später gibt's »once« (chilenische Nachmittagsmahlzeit mit Tee, Brot und Palta). Bleibst du?",
        task: "Sag gern zu und biete an, beim Abwasch zu helfen.",
        options: [
          { es: "¡Claro, me quedo! ¿Te ayudo a lavar la loza?", quality: "best", feedback: "Perfekt – »lavar la loza« ist chilenisch für abwaschen. Das kommt sehr gut an!" },
          { es: "Sí. ¿Puedo ayudar?", quality: "ok", feedback: "Korrekt und nett, aber etwas knapp." },
          { es: "¡Claro, me quedo! ¿Te ayudo lavar la loza?", quality: "wrong", feedback: "Nach »ayudar« kommt »a«: »¿Te ayudo a lavar la loza?«" },
        ],
      },
    ],
    closing: "¡No, no, tú eres la visita! Siéntate no más. Nico, ¡sírvele otro pisco sour!",
    closingDe: "Nein, nein, du bist der Gast! Bleib ruhig sitzen. Nico, schenk noch einen Pisco Sour ein!",
    vocab: [
      { es: "el pololo / la polola", de: "fester Freund / feste Freundin (Chile)" },
      { es: "trátame de tú", de: "duz mich" },
      { es: "la micro", de: "der Stadtbus (Chile)" },
      { es: "mis papás", de: "meine Eltern" },
      { es: "huele rico", de: "es riecht lecker" },
      { es: "me encantó", de: "es hat mir super gefallen" },
      { es: "tomar once", de: "chilenische Nachmittagsmahlzeit" },
      { es: "lavar la loza", de: "abwaschen (Chile)" },
    ],
  },
];
