import type { Dialogue } from "../types";

/** Scripted dialogues for the B1–C1 scenarios (Chilean Spanish). */
export const DIALOGUES_ADVANCED: Dialogue[] = [
  // ───────────────────────────── B1 ─────────────────────────────
  {
    scenarioId: "arriendo",
    steps: [
      {
        npc: "Hola, buenas tardes. ¿Usted viene a ver el departamento? Soy Carolina, la corredora. Pase nomás.",
        npcDe: "Hallo, guten Tag. Kommen Sie, um die Wohnung anzusehen? Ich bin Carolina, die Maklerin. Kommen Sie ruhig rein (nomás = ruhig, einfach).",
        task: "Begrüße sie, sag, dass du wegen der Anzeige kommst, und frag, wie groß die Wohnung ist.",
        options: [
          { es: "Buenas tardes, sí, vengo por el aviso que vi en internet. ¿Cuántos metros cuadrados tiene el departamento?", quality: "best", feedback: "Sehr gut: höflich und konkret. „Aviso“ ist in Chile das übliche Wort für Anzeige." },
          { es: "Hola. ¿Qué tan grande es?", quality: "ok", feedback: "Verständlich, aber sehr knapp. Stell dich kurz vor und frag konkret nach den „metros cuadrados“." },
          { es: "Buenas tardes, sí, estoy la persona que llamó por el aviso.", quality: "wrong", feedback: "Bei Identität steht „ser“, nicht „estar“: „Sí, soy la persona que llamó por el aviso.“" },
        ],
      },
      {
        npc: "Tiene 55 metros cuadrados, dos dormitorios y un baño. Además, tiene logia y estacionamiento. Lo bueno es que queda a cinco cuadras del metro Irarrázaval.",
        npcDe: "Sie hat 55 Quadratmeter, zwei Schlafzimmer und ein Bad. Außerdem gibt es eine Logia (kleiner Wasch- und Hauswirtschaftsraum) und einen Parkplatz. Das Gute ist, dass sie fünf Blocks von der Metro Irarrázaval entfernt liegt.",
        task: "Frag nach der Miete und ob die Gastos comunes (Nebenkosten der Wohnanlage) inklusive sind.",
        options: [
          { es: "¡Qué bueno! ¿Y cuánto es el arriendo? ¿Los gastos comunes están incluidos?", quality: "best", feedback: "Perfekt: „arriendo“ ist das chilenische Wort für Miete, und „incluido“ als Zustand steht mit „estar“." },
          { es: "¿Cuánto es el alquiler? ¿Y los gastos comunes?", quality: "ok", feedback: "Verständlich, aber „alquiler“ klingt nach Spanien. In Chile sagt man „el arriendo“." },
          { es: "¿Cuánto es el arriendo? ¿Los gastos comunes son incluidos?", quality: "wrong", feedback: "„Inklusive sein“ ist ein Zustand → „estar“: „¿Los gastos comunes están incluidos?“" },
        ],
      },
      {
        npc: "El arriendo es de 480 mil pesos y los gastos comunes no están incluidos; son más o menos 70 lucas al mes.",
        npcDe: "Die Miete beträgt 480.000 Pesos, und die Gastos comunes sind nicht inklusive; sie liegen bei ungefähr 70 Lucas im Monat (lucas = tausend Pesos, umgangssprachlich).",
        task: "Frag, was die Gastos comunes genau abdecken, z. B. ob Warmwasser oder Heizung dabei ist.",
        options: [
          { es: "Ya, entiendo. ¿Y qué cubren los gastos comunes? ¿Incluyen el agua caliente o la calefacción?", quality: "best", feedback: "Sehr gut: neutral und präzise gefragt." },
          { es: "¿Y por qué son tan caros los gastos comunes?", quality: "ok", feedback: "Verständlich, aber klingt vorwurfsvoll. Frag lieber neutral: „¿Qué cubren los gastos comunes?“" },
          { es: "Ya, entiendo. ¿Y qué cubren los gastos comunes? ¿Incluyen la agua caliente?", quality: "wrong", feedback: "„Agua“ ist feminin, aber vor betontem a- steht „el“: „el agua caliente“." },
        ],
      },
      {
        npc: "Cubren el conserje, el aseo de los espacios comunes y el agua caliente. Ahora, para arrendarlo piden un mes de garantía, un mes de adelanto y un aval con liquidaciones de sueldo.",
        npcDe: "Sie decken den Concierge, die Reinigung der Gemeinschaftsflächen und das Warmwasser ab. Um sie zu mieten, verlangt man eine Monatsmiete Kaution (mes de garantía), eine Monatsmiete im Voraus und einen Bürgen (aval) mit Gehaltsabrechnungen.",
        task: "Erkläre, dass du erst seit Kurzem in Chile bist und keinen Aval hast. Frag, ob es eine Alternative gäbe, z. B. zwei Monate Kaution.",
        options: [
          { es: "El problema es que llegué hace poco a Chile y no tengo aval. ¿Habría alguna alternativa, por ejemplo, pagar dos meses de garantía?", quality: "best", feedback: "Sehr gut: Du erklärst die Lage und machst mit dem höflichen Konditional „habría“ einen Vorschlag." },
          { es: "No tengo aval. ¿Qué hago?", quality: "ok", feedback: "Verständlich, aber abrupt. Erkläre kurz warum und schlag selbst eine Lösung vor." },
          { es: "El problema es que no tengo aval. ¿Hay alguna alternativa si pagaría dos meses de garantía?", quality: "wrong", feedback: "Nach „si“ steht nie das Konditional. Richtig: „… si pago dos meses de garantía?“" },
        ],
      },
      {
        npc: "Mmm, déjeme consultarlo con la dueña. A veces acepta dos meses de garantía si el arrendatario tiene contrato de trabajo. ¿Usted trabaja con contrato?",
        npcDe: "Hmm, lassen Sie mich das mit der Eigentümerin klären. Manchmal akzeptiert sie zwei Monatsmieten Kaution, wenn der Mieter einen Arbeitsvertrag hat. Arbeiten Sie mit Vertrag?",
        task: "Sag, dass du seit zwei Monaten einen unbefristeten Vertrag hast und Gehaltsabrechnungen zeigen kannst.",
        options: [
          { es: "Sí, trabajo con contrato indefinido desde hace dos meses y le puedo mostrar mis liquidaciones de sueldo.", quality: "best", feedback: "Perfekt: „contrato indefinido“ und „liquidaciones de sueldo“ sind genau die Begriffe, die Vermieter hören wollen." },
          { es: "Sí, tengo contrato. Tengo papeles del sueldo.", quality: "ok", feedback: "Verständlich, aber vage. Besser: „contrato indefinido“ und „liquidaciones de sueldo“." },
          { es: "Sí, estoy trabajando con contrato indefinido desde dos meses.", quality: "wrong", feedback: "Für eine Dauer bis heute sagt man „desde hace dos meses“ (nicht „desde dos meses“)." },
        ],
      },
      {
        npc: "Perfecto, eso ayuda harto. Le voy a escribir a la dueña hoy mismo. ¿Tiene alguna otra pregunta sobre el depto?",
        npcDe: "Perfekt, das hilft sehr (harto = viel, sehr). Ich schreibe der Eigentümerin noch heute. Haben Sie noch eine Frage zur Wohnung (depto = kurz für departamento)?",
        task: "Frag, ob Haustiere erlaubt sind – du hast eine Katze.",
        options: [
          { es: "Sí, una última cosa: tengo un gato. ¿Se permiten mascotas en el edificio?", quality: "best", feedback: "Sehr gut: „¿Se permiten mascotas?“ ist die übliche Formulierung." },
          { es: "¿Puedo traer mi gato?", quality: "ok", feedback: "Verständlich, aber knapp. „¿Se permiten mascotas en el edificio?“ klingt beim Mietgespräch natürlicher." },
          { es: "Sí, tengo un gato. ¿Es posible que lo traigo?", quality: "wrong", feedback: "Nach „es posible que“ steht der Subjuntivo: „¿Es posible que lo traiga?“" },
        ],
      },
      {
        npc: "El reglamento del edificio permite mascotas pequeñas, así que no habría problema. Si le interesa, le mando el contrato por correo para que lo revise con calma.",
        npcDe: "Die Hausordnung erlaubt kleine Haustiere, es gäbe also kein Problem. Wenn Sie Interesse haben, schicke ich Ihnen den Vertrag per Mail, damit Sie ihn in Ruhe durchsehen.",
        task: "Bedank dich, sag, dass dir die Wohnung gefällt, und bitte sie, dir Bescheid zu geben, sobald die Eigentümerin antwortet.",
        options: [
          { es: "Muchas gracias, el depto me gusta harto. Avíseme apenas le responda la dueña, por favor.", quality: "best", feedback: "Sehr gut: „apenas“ (sobald) + Subjuntivo für ein zukünftiges Ereignis." },
          { es: "Gracias, me gusta. Mándeme un mensaje.", quality: "ok", feedback: "Verständlich, aber unklar wann. Besser: „Avíseme apenas le responda la dueña.“" },
          { es: "Muchas gracias, me interesa mucho. Avíseme cuando la dueña le responde.", quality: "wrong", feedback: "Bei zukünftigen Ereignissen steht nach „cuando“ der Subjuntivo: „cuando la dueña le responda“." },
        ],
      },
    ],
    closing: "¡Ya, perfecto! Le escribo apenas sepa algo. Que le vaya bien.",
    closingDe: "Okay, perfekt! Ich schreibe Ihnen, sobald ich etwas weiß. Alles Gute.",
    vocab: [
      { es: "el arriendo", de: "die Miete" },
      { es: "los gastos comunes", de: "Nebenkosten der Wohnanlage" },
      { es: "el mes de garantía", de: "Monatsmiete als Kaution" },
      { es: "el aval", de: "der Bürge" },
      { es: "la liquidación de sueldo", de: "die Gehaltsabrechnung" },
      { es: "el contrato indefinido", de: "unbefristeter Vertrag" },
      { es: "las lucas", de: "tausend Pesos (ugs.)" },
      { es: "apenas + Subjuntivo", de: "sobald" },
    ],
  },
  {
    scenarioId: "banco",
    steps: [
      {
        npc: "Buenos días, bienvenidos a BancoEstado. ¿En qué le puedo ayudar?",
        npcDe: "Guten Morgen, willkommen bei der BancoEstado. Wie kann ich Ihnen helfen?",
        task: "Sag höflich, dass du eine CuentaRUT eröffnen möchtest.",
        options: [
          { es: "Buenos días. Quisiera abrir una CuentaRUT, por favor.", quality: "best", feedback: "Perfekt: „quisiera“ ist die höfliche Form für Wünsche." },
          { es: "Hola, quiero una CuentaRUT.", quality: "ok", feedback: "Verständlich, aber etwas direkt. Höflicher: „Quisiera abrir una CuentaRUT.“" },
          { es: "Buenos días. Quiero que usted me abre una CuentaRUT.", quality: "wrong", feedback: "Nach „quiero que“ steht der Subjuntivo: „que me abra“. Noch natürlicher: „Quisiera abrir una CuentaRUT.“" },
        ],
      },
      {
        npc: "Claro. ¿Usted viene del extranjero? ¿Tiene RUT y cédula de identidad chilena?",
        npcDe: "Natürlich. Sind Sie Ausländer? Haben Sie einen RUT (chilenische Steuer- und Identitätsnummer) und einen chilenischen Personalausweis?",
        task: "Sag, dass du schon einen RUT hast, aber dein Carnet noch in Bearbeitung ist und du nur den Pass hast.",
        options: [
          { es: "Sí, soy de Alemania. Ya tengo RUT, pero mi carnet todavía está en trámite. Por ahora solo tengo el pasaporte.", quality: "best", feedback: "Sehr gut: „estar en trámite“ (in Bearbeitung sein) ist genau der richtige Ausdruck." },
          { es: "Tengo RUT, carnet no. Pasaporte sí.", quality: "ok", feedback: "Verständlich, aber Telegrammstil. Bilde ganze Sätze mit „pero“ und „todavía“." },
          { es: "Sí, soy de Alemania. Ya tengo RUT, pero mi carnet todavía es en trámite.", quality: "wrong", feedback: "„En trámite“ ist ein vorübergehender Zustand → „está en trámite“." },
        ],
      },
      {
        npc: "Ya. Para la CuentaRUT necesitamos la cédula vigente, así que con el pasaporte todavía no se puede. Pero apenas le entreguen el carnet, puede abrirla en línea en cinco minutos.",
        npcDe: "Okay. Für die CuentaRUT brauchen wir den gültigen Ausweis, mit dem Pass geht es also noch nicht. Aber sobald Sie den Carnet bekommen, können Sie es in fünf Minuten online eröffnen.",
        task: "Reagiere enttäuscht und frag, ob es bis dahin eine andere Möglichkeit gibt – dein Arbeitgeber muss dir das Gehalt überweisen.",
        options: [
          { es: "¡Qué lata! ¿Y hay alguna otra opción mientras tanto? Mi empleador necesita una cuenta para depositarme el sueldo.", quality: "best", feedback: "Sehr gut: „¡Qué lata!“ (wie ärgerlich) ist typisch chilenisch, und du erklärst dein Problem klar." },
          { es: "Pero necesito una cuenta ahora.", quality: "ok", feedback: "Verständlich, klingt aber fordernd. Frag lieber nach Alternativen: „¿Hay alguna otra opción mientras tanto?“" },
          { es: "¡Qué lata! ¿Hay otra opción hasta que me entregan el carnet?", quality: "wrong", feedback: "„Hasta que“ mit Bezug auf die Zukunft verlangt den Subjuntivo: „hasta que me entreguen el carnet“." },
        ],
      },
      {
        npc: "Mientras tanto, su empleador le puede pagar con vale vista. ¿Usted ya tiene su contrato de trabajo firmado?",
        npcDe: "In der Zwischenzeit kann Ihr Arbeitgeber Sie mit einem Vale Vista bezahlen (bankbestätigter Scheck, in Chile üblich). Haben Sie Ihren Arbeitsvertrag schon unterschrieben?",
        task: "Sag, dass du ihn letzte Woche unterschrieben hast, und frag, ob du ihn mitbringen sollst, wenn du mit dem Carnet kommst.",
        options: [
          { es: "Sí, lo firmé la semana pasada. ¿Quiere que lo traiga cuando venga con el carnet?", quality: "best", feedback: "Sehr gut: „quiere que“ + Subjuntivo und „cuando“ + Subjuntivo für die Zukunft." },
          { es: "Sí, lo he firmado la semana pasada. ¿Lo traigo?", quality: "ok", feedback: "Verständlich, aber mit „la semana pasada“ nimmt man in Chile das Indefinido: „lo firmé“." },
          { es: "Sí, lo firmé la semana pasada. ¿Quiere que lo traigo cuando vengo con el carnet?", quality: "wrong", feedback: "Zweimal Subjuntivo nötig: „¿Quiere que lo traiga cuando venga con el carnet?“" },
        ],
      },
      {
        npc: "Sería ideal, sí. Para una cuenta corriente le pedirían también liquidaciones de sueldo, pero para la CuentaRUT basta con el carnet. ¿Le interesa también la app para hacer transferencias?",
        npcDe: "Das wäre ideal, ja. Für ein Girokonto (cuenta corriente) würde man auch Gehaltsabrechnungen verlangen, aber für die CuentaRUT reicht der Carnet. Interessiert Sie auch die App für Überweisungen?",
        task: "Sag ja und frag, ob das Konto Gebühren hat (Kontoführung oder Überweisungen).",
        options: [
          { es: "Sí, me interesa. ¿Y la cuenta tiene algún costo de mantención o comisión por transferencia?", quality: "best", feedback: "Perfekt: „costo de mantención“ ist der chilenische Begriff für Kontoführungsgebühr." },
          { es: "Sí. ¿Es gratis?", quality: "ok", feedback: "Verständlich, aber vage. Frag konkret nach „costo de mantención“ und „comisiones“." },
          { es: "Sí, me interesa. Pero no quiero que me cobran comisiones.", quality: "wrong", feedback: "Nach „no quiero que“ steht der Subjuntivo: „que me cobren“." },
        ],
      },
      {
        npc: "No tiene costo de mantención. Las transferencias por la app son gratis, pero si saca plata en un cajero de otro banco, le cobran una comisión. Ojo con eso.",
        npcDe: "Es gibt keine Kontoführungsgebühr. Überweisungen per App sind kostenlos, aber wenn Sie an einem Automaten einer anderen Bank Geld abheben (plata = Geld), zahlen Sie eine Gebühr. Achtung damit (ojo = Vorsicht).",
        task: "Bedank dich und sag, dass du wiederkommst, sobald du den Carnet hast.",
        options: [
          { es: "Perfecto, muchas gracias por la información. Entonces vuelvo apenas tenga el carnet.", quality: "best", feedback: "Sehr gut: „apenas tenga“ – Subjuntivo nach „apenas“ für die Zukunft." },
          { es: "Ya, bacán, gracias. Chao.", quality: "ok", feedback: "„Bacán“ (super) ist sehr umgangssprachlich – bei einer Bankangestellten eher unpassend. Besser: „Perfecto, muchas gracias.“" },
          { es: "Perfecto, muchas gracias. Entonces vuelvo apenas tengo el carnet.", quality: "wrong", feedback: "Nach „apenas“ mit Zukunftsbezug steht der Subjuntivo: „apenas tenga el carnet“." },
        ],
      },
      {
        npc: "De nada. ¿Quiere que le anote los requisitos en un papel para que no se le olvide nada?",
        npcDe: "Gern geschehen. Soll ich Ihnen die Voraussetzungen auf einen Zettel schreiben, damit Sie nichts vergessen?",
        task: "Nimm das Angebot dankend an.",
        options: [
          { es: "Sí, por favor, se lo agradecería mucho.", quality: "best", feedback: "Perfekt: „Se lo agradecería“ = Ich wäre Ihnen sehr dankbar." },
          { es: "Sí, anótelo.", quality: "ok", feedback: "Grammatisch richtig, aber der nackte Imperativ wirkt schroff. Ergänze „por favor“ oder „se lo agradecería“." },
          { es: "Sí, por favor, me lo agradecería mucho.", quality: "wrong", feedback: "„Me lo agradecería“ hieße „Sie wären mir dankbar“. Richtig: „Se lo agradecería“ (ich wäre Ihnen dankbar)." },
        ],
      },
    ],
    closing: "Aquí tiene. ¡Que le vaya súper bien con el trámite del carnet!",
    closingDe: "Bitte sehr. Viel Erfolg mit dem Ausweisantrag!",
    vocab: [
      { es: "la CuentaRUT", de: "Basiskonto der BancoEstado (Kontonummer = RUT)" },
      { es: "la cédula de identidad / el carnet", de: "der Personalausweis" },
      { es: "estar en trámite", de: "in Bearbeitung sein" },
      { es: "el costo de mantención", de: "die Kontoführungsgebühr" },
      { es: "el cajero (automático)", de: "der Geldautomat" },
      { es: "la plata", de: "das Geld (ugs.)" },
      { es: "¡Qué lata!", de: "Wie ärgerlich! / Wie blöd!" },
      { es: "vigente", de: "gültig" },
    ],
  },
  {
    scenarioId: "primer-dia",
    steps: [
      {
        npc: "¡Hola! Tú debes ser la persona nueva, ¿cierto? Soy Paula, la jefa del área de marketing. ¿Cómo estás? ¿Te costó llegar?",
        npcDe: "Hallo! Du musst die neue Person sein, oder? Ich bin Paula, die Leiterin der Marketingabteilung. Wie geht's dir? War es schwer herzufinden?",
        task: "Begrüße sie, sag, dass die Anreise problemlos war, und dass du dich auf die Arbeit freust.",
        options: [
          { es: "¡Mucho gusto, Paula! No, para nada, vine en metro. Tengo muchas ganas de empezar.", quality: "best", feedback: "Sehr gut: freundlich, natürlich und mit Begeisterung." },
          { es: "Hola, sí, todo bien, gracias.", quality: "ok", feedback: "Höflich, aber sehr knapp für den ersten Tag. Zeig etwas Begeisterung: „Tengo muchas ganas de empezar.“" },
          { es: "¡Mucho gusto, Paula! Vine en metro. Estoy muy excitado de empezar aquí.", quality: "wrong", feedback: "Falscher Freund! „Excitado“ heißt sexuell erregt. Sag „Estoy muy contento/a“ oder „Tengo muchas ganas de empezar“." },
        ],
      },
      {
        npc: "¡Qué bueno! Mira, te presento al equipo. Él es Diego, que ve las redes sociales, y ella es la Cata, que se encarga de los clientes. Cualquier duda, les puedes preguntar a ellos.",
        npcDe: "Wie schön! Schau, ich stelle dir das Team vor. Das ist Diego, er kümmert sich um Social Media, und das ist Cata (in Chile oft mit Artikel vor dem Vornamen; Cata = Catalina), sie betreut die Kunden. Bei Fragen kannst du dich an die beiden wenden.",
        task: "Begrüße die beiden locker und sag, dass du hoffst, dass ihr gut zusammenarbeitet.",
        options: [
          { es: "¡Hola, Diego! ¡Hola, Cata! Qué bueno conocerlos. Espero que trabajemos bien juntos.", quality: "best", feedback: "Perfekt: locker im Ton und „espero que“ + Subjuntivo." },
          { es: "Buenos días, señor Diego y señora Catalina. Es un placer.", quality: "ok", feedback: "Korrekt, aber unter Kolleginnen und Kollegen in Chile viel zu förmlich. Man duzt sich im Büro meist." },
          { es: "¡Hola, Diego! ¡Hola, Cata! Qué bueno conocerlos. Espero que trabajamos bien juntos.", quality: "wrong", feedback: "Nach „espero que“ steht der Subjuntivo: „Espero que trabajemos bien juntos.“" },
        ],
      },
      {
        npc: "Ahora, lo práctico: la jornada es de nueve a seis y almorzamos a la una. La empresa te da colación en el casino del edificio, así que no tienes que traer comida, ¿cachai?",
        npcDe: "Jetzt das Praktische: Die Arbeitszeit ist von neun bis sechs, und um eins essen wir zu Mittag. Die Firma gibt dir Colación (Mittagessen bzw. Essenszuschuss) in der Kantine des Gebäudes (casino = Kantine), du musst also kein Essen mitbringen, verstehst du (¿cachai? = verstehst du?, sehr chilenisch)?",
        task: "Sag, dass du verstanden hast, und frag, ob man auch einige Tage von zu Hause arbeiten kann.",
        options: [
          { es: "Sí, cacho. ¿Y es posible trabajar algunos días desde la casa?", quality: "best", feedback: "Sehr gut: „cacho“ (ich verstehe) ist die passende chilenische Antwort auf „¿cachai?“." },
          { es: "Ok. ¿Y home office?", quality: "ok", feedback: "Verständlich, aber kein ganzer Satz. Besser: „¿Es posible trabajar algunos días desde la casa?“" },
          { es: "Sí, cacho. ¿Y está posible trabajar algunos días desde la casa?", quality: "wrong", feedback: "„Posible“ steht mit „ser“: „¿Es posible trabajar…?“" },
        ],
      },
      {
        npc: "Sí, después de los tres meses de prueba puedes hacer home office los viernes. Esta semana me gustaría que revisaras la estrategia de redes y que me dieras tu opinión el viernes.",
        npcDe: "Ja, nach den drei Monaten Probezeit kannst du freitags im Homeoffice arbeiten. Diese Woche hätte ich gern, dass du dir die Social-Media-Strategie anschaust und mir am Freitag deine Meinung sagst.",
        task: "Sag zu und frag, wo du die Unterlagen zur Strategie findest.",
        options: [
          { es: "Dale, me parece bien. ¿Dónde puedo encontrar los documentos de la estrategia?", quality: "best", feedback: "Perfekt: „Dale“ ist die typische lockere Zustimmung in Chile." },
          { es: "Sí. ¿Dónde están las cosas?", quality: "ok", feedback: "Verständlich, aber zu vage. Sag genau, was du suchst: „los documentos de la estrategia“." },
          { es: "Dale, me parece bien. ¿Dónde son los documentos de la estrategia?", quality: "wrong", feedback: "Für den Ort von Dingen benutzt man „estar“: „¿Dónde están los documentos?“" },
        ],
      },
      {
        npc: "Están en la carpeta compartida del Drive; le voy a pedir al Diego que te dé acceso. Ah, y otra cosa: el lunes hay reunión de equipo a las diez. ¿Te parece si te presentas ahí brevemente?",
        npcDe: "Sie sind im geteilten Drive-Ordner; ich bitte Diego, dir Zugriff zu geben. Ach, und noch etwas: Am Montag ist um zehn Teammeeting. Wäre es okay, wenn du dich dort kurz vorstellst?",
        task: "Sag zu und frag, wie lange du ungefähr sprechen sollst.",
        options: [
          { es: "Claro, no hay problema. ¿Cuánto rato quieres que hable, más o menos?", quality: "best", feedback: "Sehr gut: „quieres que“ + Subjuntivo, und „cuánto rato“ ist sehr chilenisch für „wie lange“." },
          { es: "Uf, no me gusta hablar en público, pero ya.", quality: "ok", feedback: "Ehrlich, wirkt am ersten Tag aber unmotiviert. Sag lieber zu und frag nach Details." },
          { es: "Claro, no hay problema. ¿Cuánto tiempo quieres que hablo?", quality: "wrong", feedback: "Nach „quieres que“ steht der Subjuntivo: „¿Cuánto tiempo quieres que hable?“" },
        ],
      },
      {
        npc: "Unos cinco minutos nomás: quién eres, de dónde vienes y qué hacías antes. Nada muy formal, la gente aquí es súper buena onda.",
        npcDe: "Nur etwa fünf Minuten (nomás = nur, einfach): wer du bist, woher du kommst und was du vorher gemacht hast. Nichts Förmliches, die Leute hier sind super nett (buena onda = sympathisch, nett).",
        task: "Probe einen Satz: Du hast vier Jahre im Marketing in Deutschland gearbeitet, bevor du nach Chile gekommen bist.",
        options: [
          { es: "Perfecto. Puedo contar que trabajé cuatro años en marketing en Alemania antes de venir a Chile.", quality: "best", feedback: "Perfekt: Indefinido für einen abgeschlossenen Zeitraum und „antes de“ + Infinitiv." },
          { es: "Perfecto. Puedo contar que trabajaba cuatro años en marketing en Alemania.", quality: "ok", feedback: "Verständlich, aber für einen abgeschlossenen Zeitraum mit Dauer nimmt man das Indefinido: „trabajé cuatro años“." },
          { es: "Perfecto. Puedo contar que trabajé cuatro años en Alemania antes de que vine a Chile.", quality: "wrong", feedback: "Bei gleichem Subjekt: „antes de venir“. „Antes de que“ verlangt immer den Subjuntivo." },
        ],
      },
      {
        npc: "¡Bacán! Eso les va a interesar harto. Bueno, te dejo para que te instales. Si necesitas algo, mi oficina está al fondo del pasillo.",
        npcDe: "Super (bacán = toll)! Das wird sie sehr interessieren (harto = sehr, viel). Gut, ich lasse dich jetzt in Ruhe ankommen. Wenn du etwas brauchst, mein Büro ist am Ende des Flurs.",
        task: "Bedank dich für den Empfang und sag, dass du dich meldest, falls etwas ist.",
        options: [
          { es: "Muchas gracias por la bienvenida, Paula. Cualquier cosa, te aviso.", quality: "best", feedback: "Sehr gut: „Cualquier cosa, te aviso“ ist eine typisch chilenische Wendung." },
          { es: "Muchas gracias por la bienvenida, señora. Cualquier cosa, le aviso.", quality: "ok", feedback: "Korrekt, aber zu förmlich – Paula duzt dich, also kannst du sie auch duzen." },
          { es: "Muchas gracias para la bienvenida, Paula.", quality: "wrong", feedback: "Man bedankt sich „por“ etwas: „Gracias por la bienvenida.“" },
        ],
      },
    ],
    closing: "De nada. ¡Que tengas un muy buen primer día!",
    closingDe: "Gern. Ich wünsche dir einen richtig guten ersten Tag!",
    vocab: [
      { es: "la jornada", de: "die Arbeitszeit / der Arbeitstag" },
      { es: "la colación", de: "Mittagessen / Essenszuschuss (Chile)" },
      { es: "el casino", de: "die Kantine (Chile)" },
      { es: "los meses de prueba", de: "die Probezeit" },
      { es: "¿cachai? / cacho", de: "verstehst du? / ich verstehe (Chile)" },
      { es: "buena onda", de: "nett, sympathisch" },
      { es: "bacán", de: "super, toll (Chile)" },
      { es: "cualquier cosa, te aviso", de: "wenn was ist, sag ich Bescheid" },
    ],
  },
  {
    scenarioId: "viaje-sur",
    steps: [
      {
        npc: "Oye, ¿y al final cuándo vamos al sur? Yo pensaba ir en febrero, pero el Nico dice que en febrero está todo lleno y carísimo.",
        npcDe: "Sag mal, wann fahren wir denn nun in den Süden? Ich dachte an Februar, aber Nico sagt, im Februar ist alles voll und sehr teuer.",
        task: "Schlag vor, im März zu fahren, weil dann weniger los ist und das Wetter noch gut ist.",
        options: [
          { es: "¿Y si vamos en marzo? Hay menos gente y todavía hace buen tiempo.", quality: "best", feedback: "Perfekt: „¿Y si vamos…?“ ist die natürliche Art, etwas vorzuschlagen." },
          { es: "Febrero es malo. Marzo.", quality: "ok", feedback: "Verständlich, aber Telegrammstil. Begründe deinen Vorschlag kurz." },
          { es: "¿Y si iríamos en marzo? Hay menos gente.", quality: "wrong", feedback: "Nach „si“ steht nie das Konditional. Richtig: „¿Y si vamos en marzo?“" },
        ],
      },
      {
        npc: "Me tinca. Marzo puede ser. ¿Y qué quieres hacer allá? Yo me muero por ir a Chiloé a comer curanto.",
        npcDe: "Gefällt mir (me tinca = ich hab ein gutes Gefühl dabei). März könnte gehen. Und was willst du dort machen? Ich will unbedingt nach Chiloé, Curanto essen (Gericht aus Meeresfrüchten, Fleisch und Kartoffeln, im Erdloch gegart).",
        task: "Sag, dass du Chiloé toll findest, aber auch ein paar Tage in Puerto Varas bleiben möchtest, um den Vulkan Osorno zu sehen.",
        options: [
          { es: "¡Chiloé me encanta! Pero también me gustaría quedarme unos días en Puerto Varas para ver el volcán Osorno.", quality: "best", feedback: "Sehr gut: „me gustaría“ formuliert deinen Wunsch freundlich, „para“ drückt den Zweck aus." },
          { es: "Chiloé está bien. Pero yo quiero Puerto Varas y el volcán.", quality: "ok", feedback: "Verständlich, aber etwas fordernd. Mit „me gustaría“ klingt es freundlicher." },
          { es: "¡Chiloé me encanta! Pero también me gustaría quedarme unos días en Puerto Varas por ver el volcán Osorno.", quality: "wrong", feedback: "Für den Zweck („um zu“) steht „para“: „para ver el volcán“." },
        ],
      },
      {
        npc: "Ya, pero el Nico no tiene auto y los buses allá son lentos. ¿Arrendamos un auto en Puerto Montt o nos movemos en bus?",
        npcDe: "Okay, aber Nico hat kein Auto und die Busse dort sind langsam. Mieten wir in Puerto Montt ein Auto oder fahren wir Bus?",
        task: "Sag, dass es besser wäre, ein Auto zu mieten, damit ihr flexibler seid.",
        options: [
          { es: "Yo creo que sería mejor arrendar un auto para que podamos movernos con más libertad.", quality: "best", feedback: "Sehr gut: „para que“ + Subjuntivo und „arrendar“ ist das chilenische Wort für mieten." },
          { es: "Auto, porque el bus es fome.", quality: "ok", feedback: "„Fome“ (langweilig) ist schön chilenisch, aber die Antwort ist zu knapp. Bilde einen ganzen Satz." },
          { es: "Yo creo que sería mejor arrendar un auto para que podemos movernos con más libertad.", quality: "wrong", feedback: "Nach „para que“ steht immer der Subjuntivo: „para que podamos“." },
        ],
      },
      {
        npc: "Sí, tienes razón. Pero ojo, que hay que tomar el transbordador para cruzar a Chiloé y con auto sale más caro. Además, yo no manejo, así que tendrías que manejar tú o el Nico.",
        npcDe: "Ja, du hast recht. Aber Achtung, man muss die Fähre nehmen, um nach Chiloé überzusetzen, und mit Auto wird es teurer (salir caro = teuer kommen). Außerdem fahre ich nicht Auto (manejar = Auto fahren), also müsstest du oder Nico fahren.",
        task: "Sag, dass du gern fährst, solange ihr euch Benzin und Fähre teilt.",
        options: [
          { es: "No tengo problema en manejar, siempre que compartamos los gastos de bencina y del transbordador.", quality: "best", feedback: "Perfekt: „siempre que“ (solange) + Subjuntivo, und „bencina“ ist das chilenische Wort für Benzin." },
          { es: "Yo manejo, pero ustedes pagan la gasolina.", quality: "ok", feedback: "Verständlich, aber etwas schroff. Und in Chile heißt Benzin „bencina“." },
          { es: "No tengo problema en manejar, siempre que compartimos los gastos de bencina.", quality: "wrong", feedback: "„Siempre que“ im Sinne von „solange / unter der Bedingung“ verlangt den Subjuntivo: „siempre que compartamos“." },
        ],
      },
      {
        npc: "¡Obvio! Dividimos todo por tres. ¿Y dónde dormimos? Yo cacho que lo más barato sería un hostal.",
        npcDe: "Klar! Wir teilen alles durch drei. Und wo schlafen wir? Ich glaube (cacho que = ich glaube, ich schätze), am billigsten wäre ein Hostal.",
        task: "Schlag stattdessen eine Cabaña (Holzhütte) in Frutillar am See vor und sag, dass ihr bei früher Buchung sicher etwas Günstiges findet.",
        options: [
          { es: "¿Qué tal una cabaña en Frutillar, frente al lago? Si reservamos con tiempo, seguro encontramos algo barato.", quality: "best", feedback: "Sehr gut: „¿Qué tal…?“ als Vorschlag und ein korrekter realer Bedingungssatz." },
          { es: "Hostal no, porfa. Mejor una cabaña en Frutillar.", quality: "ok", feedback: "Verständlich, lehnt den Vorschlag aber schroff ab. Mach lieber einen Gegenvorschlag mit „¿Qué tal…?“ und begründe ihn." },
          { es: "¿Qué tal una cabaña en Frutillar? Si reservamos con tiempo, seguro encontramos algo barata.", quality: "wrong", feedback: "„Algo“ ist neutral, das Adjektiv bleibt maskulin: „algo barato“." },
        ],
      },
      {
        npc: "¡Bacán! Frutillar es precioso. Lo único es que el Nico quiere ir también a Torres del Paine, pero eso queda lejísimo.",
        npcDe: "Super (bacán = toll)! Frutillar ist wunderschön. Das Einzige ist, dass Nico auch nach Torres del Paine will, aber das liegt extrem weit weg.",
        task: "Sag, dass du Torres del Paine auch gern sehen würdest, aber vorschlägst, es für eine andere Reise aufzuheben.",
        options: [
          { es: "A mí también me encantaría conocer Torres del Paine, pero queda demasiado lejos. Propongo que lo dejemos para otro viaje.", quality: "best", feedback: "Perfekt: „propongo que“ + Subjuntivo und „quedar lejos“ für die Lage." },
          { es: "Torres del Paine es demasiado lejos. Otro viaje.", quality: "ok", feedback: "Verständlich, aber für die Lage sagt man „queda / está lejos“, nicht „es lejos“. Außerdem sehr knapp." },
          { es: "A mí también me encantaría conocer Torres del Paine, pero propongo que lo dejamos para otro viaje.", quality: "wrong", feedback: "Nach „propongo que“ steht der Subjuntivo: „propongo que lo dejemos“." },
        ],
      },
      {
        npc: "Sí, igual tienes razón. Ya, entonces le escribo al Nico y armamos un grupo de WhatsApp para organizarnos. ¿Te parece?",
        npcDe: "Ja, eigentlich hast du recht. Okay, dann schreibe ich Nico und wir machen eine WhatsApp-Gruppe, um uns zu organisieren. Passt dir das?",
        task: "Stimm zu und biete an, dich um die Cabaña zu kümmern und Optionen in die Gruppe zu schicken.",
        options: [
          { es: "¡Dale! Yo me encargo de buscar la cabaña y les mando opciones al grupo.", quality: "best", feedback: "Sehr gut: „encargarse de“ (sich kümmern um) und „les“ für „euch“ – in Lateinamerika gibt es kein vosotros." },
          { es: "Ok. Busco cabaña.", quality: "ok", feedback: "Verständlich, aber knapp. Besser: „Yo me encargo de buscar la cabaña.“" },
          { es: "¡Dale! Yo me encargo de buscar la cabaña y os mando opciones.", quality: "wrong", feedback: "„Os“ (vosotros) benutzt man in Chile nicht. Richtig: „les mando opciones“." },
        ],
      },
    ],
    closing: "¡Perfecto! Va a ser un viaje inolvidable. ¡Qué ganas de que llegue marzo!",
    closingDe: "Perfekt! Das wird eine unvergessliche Reise. Ich freu mich so, dass es bald März ist!",
    vocab: [
      { es: "me tinca", de: "gefällt mir / hab ein gutes Gefühl (Chile)" },
      { es: "el curanto", de: "Erdofen-Gericht aus Chiloé" },
      { es: "arrendar un auto", de: "ein Auto mieten" },
      { es: "el transbordador", de: "die Fähre" },
      { es: "manejar", de: "Auto fahren" },
      { es: "la bencina", de: "das Benzin (Chile)" },
      { es: "la cabaña", de: "die (Holz-)Hütte" },
      { es: "quedar lejos", de: "weit weg liegen" },
    ],
  },

  // ───────────────────────────── B2 ─────────────────────────────
  {
    scenarioId: "entrevista",
    steps: [
      {
        npc: "Buenos días, gracias por venir. Tome asiento, por favor. Para empezar, cuénteme un poco sobre usted y su trayectoria profesional.",
        npcDe: "Guten Morgen, danke fürs Kommen. Setzen Sie sich bitte. Erzählen Sie mir zu Beginn ein wenig über sich und Ihren beruflichen Werdegang.",
        task: "Fasse deinen Werdegang zusammen: sechs Jahre Projektmanagement in einer Logistikfirma in Hamburg, mit internationalen Teams.",
        options: [
          { es: "Con mucho gusto. Durante seis años trabajé en gestión de proyectos en una empresa de logística en Hamburgo, donde coordinaba equipos internacionales.", quality: "best", feedback: "Sehr gut: präzise, mit Indefinido für den abgeschlossenen Zeitraum und Imperfecto für die wiederkehrende Tätigkeit." },
          { es: "Bueno, nací en Alemania, fui al colegio, después a la universidad y luego trabajé.", quality: "ok", feedback: "Grammatisch korrekt, aber zu weit ausgeholt. Konzentrier dich auf die relevante Berufserfahrung." },
          { es: "Durante seis años trabajé en gestión de proyectos en Hamburgo, donde era responsable para equipos internacionales.", quality: "wrong", feedback: "Es heißt „responsable de“: „era responsable de equipos internacionales“." },
        ],
      },
      {
        npc: "Muy interesante. ¿Y por qué decidió venirse a Chile y postular a este cargo en particular?",
        npcDe: "Sehr interessant. Und warum haben Sie sich entschieden, nach Chile zu kommen und sich gerade auf diese Stelle zu bewerben?",
        task: "Erkläre: Deine Partnerin bzw. dein Partner ist aus Chile, und dich reizt, dass die Firma auf nachhaltige Logistik setzt.",
        options: [
          { es: "Mi pareja es chilena, así que decidimos establecernos aquí. Además, me atrae mucho que la empresa apueste por la logística sostenible.", quality: "best", feedback: "Perfekt: „me atrae que“ + Subjuntivo und eine klare, professionelle Motivation." },
          { es: "Porque mi polola es chilena y necesito una pega.", quality: "ok", feedback: "Ehrlich, aber zu umgangssprachlich fürs Bewerbungsgespräch („polola“, „pega“), und es klingt, als ginge es dir nur um irgendeinen Job." },
          { es: "Mi pareja es chilena, así que decidimos establecernos aquí. Además, me atrae mucho que la empresa apuesta por la logística sostenible.", quality: "wrong", feedback: "Nach „me atrae que“ (Bewertung) steht der Subjuntivo: „que la empresa apueste“." },
        ],
      },
      {
        npc: "Entiendo. Ahora, ¿cuál diría usted que es su mayor fortaleza? Y, si me permite, ¿qué aspecto le gustaría mejorar todavía?",
        npcDe: "Verstehe. Was würden Sie sagen, ist Ihre größte Stärke? Und wenn Sie erlauben: Welchen Aspekt würden Sie gern noch verbessern?",
        task: "Nenne Organisation als Stärke und als Verbesserungsfeld dein Fachspanisch – du nimmst schon Unterricht.",
        options: [
          { es: "Diría que mi mayor fortaleza es la organización. Lo que me gustaría mejorar es mi español técnico, aunque ya estoy tomando clases para perfeccionarlo.", quality: "best", feedback: "Sehr gut: ehrlich, konkret und mit einer Lösung – genau das wollen Personaler hören." },
          { es: "No tengo debilidades. Bueno, quizás que soy demasiado perfeccionista.", quality: "ok", feedback: "Sprachlich korrekt, aber ein Klischee. Besser eine echte Schwäche nennen und zeigen, wie du daran arbeitest." },
          { es: "Mi mayor fortaleza es la organización. Y me gustaría mejorar mi español técnico; a veces me siento un poco embarazado en las reuniones.", quality: "wrong", feedback: "Falscher Freund: „embarazado/a“ heißt schwanger! Gemeint ist „inseguro/a“ oder „avergonzado/a“." },
        ],
      },
      {
        npc: "Valoro la honestidad. Cuénteme de una situación difícil con un cliente y cómo la resolvió.",
        npcDe: "Ich schätze Ehrlichkeit. Erzählen Sie mir von einer schwierigen Situation mit einem Kunden und wie Sie sie gelöst haben.",
        task: "Erzähle: Ein Projekt war im Verzug, der Kunde verärgert; du hast mit ihm gesprochen und einen neuen Zeitplan vorgeschlagen, den er akzeptierte.",
        options: [
          { es: "Una vez un proyecto venía atrasado y el cliente estaba molesto. Me reuní con él, le expliqué la situación con transparencia y le propuse un nuevo cronograma, que finalmente aceptó.", quality: "best", feedback: "Perfekt: klare Struktur (Situation – Handlung – Ergebnis) und sauberer Wechsel zwischen Imperfecto und Indefinido." },
          { es: "Una vez hubo un problema con un cliente, pero lo resolví.", quality: "ok", feedback: "Korrekt, aber viel zu vage. Erzähle konkret, was du getan hast und was dabei herauskam." },
          { es: "Una vez un proyecto estaba atrasado y el cliente era molesto. Me reuní con él y le propuse un nuevo cronograma.", quality: "wrong", feedback: "„Ser molesto“ heißt „lästig sein“. Für „verärgert“ als Zustand: „el cliente estaba molesto“." },
        ],
      },
      {
        npc: "Muy bien. Le comento que el cargo es con contrato indefinido, período de prueba de tres meses y modalidad híbrida. ¿Tiene alguna pregunta para nosotros?",
        npcDe: "Sehr gut. Zur Info: Die Stelle ist unbefristet, mit drei Monaten Probezeit und hybridem Arbeitsmodell. Haben Sie Fragen an uns?",
        task: "Frag, wie das Team zusammengesetzt ist und was die größten Herausforderungen wären, falls sie dich einstellen.",
        options: [
          { es: "Sí, me gustaría saber cómo está compuesto el equipo y cuáles serían los principales desafíos si me contrataran.", quality: "best", feedback: "Sehr gut: irrealer Bedingungssatz korrekt – „si“ + Subjuntivo Imperfecto, Hauptsatz im Konditional." },
          { es: "No, ninguna pregunta. Todo claro.", quality: "ok", feedback: "Verständlich, wirkt aber desinteressiert. Stell immer mindestens eine Frage zum Team oder zu den Aufgaben." },
          { es: "Sí, me gustaría saber cuáles serían los principales desafíos si me contratarían.", quality: "wrong", feedback: "Nach „si“ steht nie das Konditional. Richtig: „si me contrataran“." },
        ],
      },
      {
        npc: "El equipo es de cinco personas y el gran desafío es implementar el nuevo sistema de seguimiento antes de fin de año. ¿Y cuáles serían sus expectativas de renta?",
        npcDe: "Das Team besteht aus fünf Personen, und die große Herausforderung ist, das neue Tracking-System bis Jahresende einzuführen. Und was wären Ihre Gehaltsvorstellungen (renta = Gehalt, in Chile üblich)?",
        task: "Nenne etwa 2,2 Millionen Pesos brutto und zeig dich offen, über das Gesamtpaket zu sprechen.",
        options: [
          { es: "Considerando mi experiencia y el mercado, esperaría una renta bruta de alrededor de 2,2 millones, aunque me gustaría conversar el paquete completo.", quality: "best", feedback: "Perfekt: begründet, mit höflichem Konditional, und du lässt Verhandlungsspielraum." },
          { es: "No sé, ¿cuánto pagan ustedes?", quality: "ok", feedback: "Verständlich, aber ausweichend. Nenne lieber einen begründeten Betrag." },
          { es: "Esperaría alrededor de 2,2 millones brutos, a menos que el paquete incluye otros beneficios.", quality: "wrong", feedback: "Nach „a menos que“ steht immer der Subjuntivo: „a menos que el paquete incluya…“." },
        ],
      },
      {
        npc: "Perfecto, lo tendremos en cuenta. Estamos terminando las entrevistas esta semana, así que le avisaremos a más tardar el próximo viernes.",
        npcDe: "Perfekt, wir berücksichtigen das. Wir schließen die Gespräche diese Woche ab und melden uns spätestens nächsten Freitag.",
        task: "Bedank dich für die Zeit und sag, dass du auf ihre Antwort wartest und hoffst, mit ihnen zu arbeiten.",
        options: [
          { es: "Muchas gracias por su tiempo. Quedo a la espera de su respuesta y espero que podamos trabajar juntos.", quality: "best", feedback: "Sehr gut: „Quedo a la espera de…“ ist eine elegante, professionelle Formel." },
          { es: "Gracias. Chao.", quality: "ok", feedback: "Zu knapp und informell für ein Bewerbungsgespräch." },
          { es: "Muchas gracias por su tiempo. Espero que me llaman pronto.", quality: "wrong", feedback: "Nach „espero que“ steht der Subjuntivo: „Espero que me llamen pronto.“" },
        ],
      },
    ],
    closing: "Gracias a usted. Que tenga un muy buen día.",
    closingDe: "Ich danke Ihnen. Einen schönen Tag noch.",
    vocab: [
      { es: "la trayectoria profesional", de: "der berufliche Werdegang" },
      { es: "postular a un cargo", de: "sich auf eine Stelle bewerben" },
      { es: "la fortaleza", de: "die Stärke" },
      { es: "el cronograma", de: "der Zeitplan" },
      { es: "el período de prueba", de: "die Probezeit" },
      { es: "la modalidad híbrida", de: "hybrides Arbeitsmodell" },
      { es: "las expectativas de renta", de: "die Gehaltsvorstellungen" },
      { es: "quedar a la espera de", de: "warten auf (formell)" },
    ],
  },
  {
    scenarioId: "tramite",
    steps: [
      {
        npc: "Buenos días. Número 47, ¿cierto? ¿Qué trámite viene a hacer?",
        npcDe: "Guten Morgen. Nummer 47, richtig? Welchen Behördengang möchten Sie erledigen?",
        task: "Sag, dass du deine Cédula de identidad für Ausländer beantragen möchtest.",
        options: [
          { es: "Buenos días. Vengo a solicitar mi cédula de identidad para extranjeros.", quality: "best", feedback: "Perfekt: „solicitar“ ist das richtige Verb für einen Antrag." },
          { es: "Hola, necesito un carnet.", quality: "ok", feedback: "Verständlich, aber vage. Sag genau: „la cédula de identidad para extranjeros“." },
          { es: "Buenos días. Vengo a aplicar para mi cédula de identidad.", quality: "wrong", feedback: "„Aplicar“ ist ein Anglizismus (to apply). Richtig: „solicitar la cédula“." },
        ],
      },
      {
        npc: "Muy bien. Necesito su pasaporte, la resolución de su visa y el certificado de registro de la PDI.",
        npcDe: "Sehr gut. Ich brauche Ihren Pass, den Visumsbescheid und die Registrierungsbescheinigung der PDI (Policía de Investigaciones, u. a. zuständig für Ausländer).",
        task: "Gib Pass und Bescheid ab und sag, dass du das PDI-Zertifikat nicht dabeihast, weil du dachtest, es sei nicht nötig.",
        options: [
          { es: "Aquí tiene el pasaporte y la resolución. El certificado de la PDI no lo traje, porque pensé que no era necesario.", quality: "best", feedback: "Sehr gut: Nach bejahtem „pensé que“ steht der Indikativ – korrekt." },
          { es: "Aquí. El de la PDI no lo tengo.", quality: "ok", feedback: "Verständlich, aber sehr knapp und ohne Erklärung." },
          { es: "Aquí tiene el pasaporte y la resolución. El certificado no lo traje, porque no pensé que era necesario.", quality: "wrong", feedback: "Nach verneintem „no pensé que“ steht der Subjuntivo: „no pensé que fuera necesario“." },
        ],
      },
      {
        npc: "Lamentablemente, sin ese certificado no puedo ingresar la solicitud. Es un requisito obligatorio.",
        npcDe: "Leider kann ich ohne diese Bescheinigung den Antrag nicht aufnehmen. Das ist eine Pflichtvoraussetzung.",
        task: "Frag höflich, ob es eine Möglichkeit gäbe, es heute trotzdem zu machen, wenn du das Zertifikat online herunterlädst und auf dem Handy zeigst.",
        options: [
          { es: "Entiendo. ¿Habría alguna posibilidad de hacerlo hoy si lo descargo en línea y se lo muestro en el celular?", quality: "best", feedback: "Perfekt: höfliches Konditional „habría“ und ein realer Bedingungssatz mit Präsens." },
          { es: "Pero esperé dos horas. ¡Esto no puede ser!", quality: "ok", feedback: "Verständlicher Frust, aber wer Beamte anfährt, bekommt selten Hilfe. Frag lieber höflich nach einer Lösung." },
          { es: "Entiendo. ¿Sería posible que lo descargo en línea y se lo muestro en el celular?", quality: "wrong", feedback: "„Sería posible que“ verlangt den Subjuntivo Imperfecto: „que lo descargara y se lo mostrara“." },
        ],
      },
      {
        npc: "Si lo tiene en PDF, me lo puede enviar a este correo y lo imprimimos aquí. Pero tiene que ser el certificado vigente, no el comprobante de solicitud.",
        npcDe: "Wenn Sie es als PDF haben, können Sie es an diese Mailadresse schicken und wir drucken es hier aus. Aber es muss die gültige Bescheinigung sein, nicht die Antragsbestätigung.",
        task: "Bedank dich, sag, dass du sofort suchst, und frag, ob sie deinen Platz freihält, bis du es gefunden hast.",
        options: [
          { es: "¡Muchas gracias! Lo busco al tiro. ¿Me guarda el turno hasta que lo encuentre?", quality: "best", feedback: "Sehr gut: „al tiro“ (sofort) ist typisch chilenisch, und „hasta que“ + Subjuntivo für die Zukunft." },
          { es: "Ya, lo busco. Espere.", quality: "ok", feedback: "Verständlich, aber der Imperativ „Espere“ klingt gegenüber der Beamtin schroff." },
          { es: "¡Muchas gracias! Lo busco al tiro. ¿Me guarda el turno hasta que lo encuentro?", quality: "wrong", feedback: "„Hasta que“ mit Zukunftsbezug verlangt den Subjuntivo: „hasta que lo encuentre“." },
        ],
      },
      {
        npc: "Sí, no se preocupe. Siéntese ahí y cuando lo tenga, se acerca directamente a mi módulo.",
        npcDe: "Ja, keine Sorge. Setzen Sie sich dorthin, und wenn Sie es haben, kommen Sie direkt an meinen Schalter.",
        task: "Ein paar Minuten später: Sag, dass du es gerade geschickt hast, und frag, ob die Mail angekommen ist.",
        options: [
          { es: "Listo, se lo acabo de enviar. ¿Le llegó el correo?", quality: "best", feedback: "Perfekt: „acabar de“ + Infinitiv = gerade eben etwas getan haben." },
          { es: "Lo he mandado ahora. ¿Llegó?", quality: "ok", feedback: "Verständlich, aber in Chile sagt man eher „se lo acabo de enviar“ oder „ya se lo mandé“." },
          { es: "Listo, se lo acabé de enviar. ¿Le llegó el correo?", quality: "wrong", feedback: "Für „gerade eben“ steht „acabar de“ im Präsens: „se lo acabo de enviar“." },
        ],
      },
      {
        npc: "Sí, aquí está todo. Ahora le tomo la foto y la huella, y después paga en caja. La cédula estaría lista en unos diez días hábiles.",
        npcDe: "Ja, jetzt ist alles da. Ich mache jetzt das Foto und den Fingerabdruck, und danach zahlen Sie an der Kasse. Der Ausweis wäre in etwa zehn Werktagen fertig.",
        task: "Frag, ob jemand anderes die Cédula für dich abholen könnte, falls du dann verreist wärst.",
        options: [
          { es: "Perfecto. Y si yo estuviera de viaje, ¿podría retirarla otra persona por mí?", quality: "best", feedback: "Sehr gut: irrealer Bedingungssatz mit „si“ + Subjuntivo Imperfecto, und „retirar“ ist das übliche Wort für abholen." },
          { es: "¿Mi pareja puede buscar el carnet?", quality: "ok", feedback: "Verständlich, aber „buscar“ kann hier wie „suchen“ klingen. Für Dokumente abholen sagt man „retirar“." },
          { es: "Perfecto. Y si yo estaría de viaje, ¿podría retirarla otra persona?", quality: "wrong", feedback: "Nach „si“ nie Konditional. Richtig: „si yo estuviera de viaje“." },
        ],
      },
      {
        npc: "Sí, con un poder simple firmado por usted y una fotocopia de su pasaporte. Además, le llega un correo cuando esté lista.",
        npcDe: "Ja, mit einer einfachen Vollmacht, von Ihnen unterschrieben, und einer Kopie Ihres Passes. Außerdem bekommen Sie eine Mail, wenn er fertig ist.",
        task: "Bedank dich herzlich: Ohne sie hättest du an einem anderen Tag wiederkommen müssen.",
        options: [
          { es: "Muchísimas gracias, de verdad. Si no fuera por usted, habría tenido que volver otro día.", quality: "best", feedback: "Perfekt: „Si no fuera por usted…“ ist eine elegante Dankesformel." },
          { es: "Gracias, eres muy amable.", quality: "ok", feedback: "Nett, aber bei einer Beamtin passt „usted“ besser: „Es usted muy amable.“" },
          { es: "Muchísimas gracias. Si no sería por usted, tendría que volver otro día.", quality: "wrong", feedback: "Nach „si“ nie Konditional: „Si no fuera por usted, habría tenido que volver otro día.“" },
        ],
      },
    ],
    closing: "No hay de qué. Para eso estamos. ¡Que le vaya bien!",
    closingDe: "Keine Ursache. Dafür sind wir da. Alles Gute!",
    vocab: [
      { es: "solicitar", de: "beantragen" },
      { es: "la cédula de identidad para extranjeros", de: "Ausweis für Ausländer" },
      { es: "el requisito", de: "die Voraussetzung" },
      { es: "vigente", de: "gültig" },
      { es: "al tiro", de: "sofort (Chile)" },
      { es: "retirar", de: "abholen (Dokumente, Pakete)" },
      { es: "el poder simple", de: "einfache Vollmacht" },
      { es: "los días hábiles", de: "die Werktage" },
    ],
  },
  {
    scenarioId: "reunion",
    steps: [
      {
        npc: "Matías: Bueno, ya revisamos los números del trimestre. ¿Alguien tiene algún otro tema antes de cerrar?",
        npcDe: "Matías: Gut, die Quartalszahlen haben wir durch. Hat noch jemand ein Thema, bevor wir schließen?",
        task: "Sag, dass du einen Vorschlag hast, wie man die Bearbeitung von Kundenanfragen verbessern kann.",
        options: [
          { es: "Sí, me gustaría proponer algo para mejorar la atención de las consultas de clientes, si tienen cinco minutos.", quality: "best", feedback: "Sehr gut: höflich eingeleitet, und du fragst nach Zeit." },
          { es: "Sí. Tengo una idea. Es buena.", quality: "ok", feedback: "Verständlich, aber holprig und etwas unbeholfen. Kündige kurz an, worum es geht." },
          { es: "Sí, me gustaría hacer una sugestión para mejorar las consultas de clientes.", quality: "wrong", feedback: "Falscher Freund: „sugestión“ ist Suggestion (Beeinflussung). Vorschlag heißt „sugerencia“ oder „propuesta“." },
        ],
      },
      {
        npc: "Matías: Dale, cuéntanos.",
        npcDe: "Matías: Klar, erzähl.",
        task: "Erkläre das Problem: Kunden warten im Schnitt drei Tage auf eine Antwort, und die meisten Fragen wiederholen sich.",
        options: [
          { es: "Me di cuenta de que los clientes esperan en promedio tres días por una respuesta, y la mayoría de las consultas se repiten.", quality: "best", feedback: "Perfekt: „darse cuenta de que“ (merken, feststellen) und eine klare Problembeschreibung mit Zahl." },
          { es: "Los clientes esperan mucho. Es malo.", quality: "ok", feedback: "Verständlich, aber zu vage. Nenne konkrete Daten, um zu überzeugen." },
          { es: "Realicé que los clientes esperan en promedio tres días por una respuesta.", quality: "wrong", feedback: "Falscher Freund: „realizar“ heißt durchführen. „Merken / realisieren“ ist „darse cuenta de que“." },
        ],
      },
      {
        npc: "Matías: Ya, ¿y qué propones?",
        npcDe: "Matías: Okay, und was schlägst du vor?",
        task: "Schlag vor, eine FAQ-Seite und Antwortvorlagen zu erstellen, damit das Team Zeit spart.",
        options: [
          { es: "Propongo que armemos una página de preguntas frecuentes y plantillas de respuesta, para que el equipo ahorre tiempo.", quality: "best", feedback: "Sehr gut: zweimal Subjuntivo – nach „propongo que“ und „para que“." },
          { es: "Hacer FAQ y plantillas.", quality: "ok", feedback: "Verständlich, aber kein ganzer Satz und ohne Begründung." },
          { es: "Propongo que armamos una página de preguntas frecuentes, para que el equipo ahorra tiempo.", quality: "wrong", feedback: "Beide Nebensätze brauchen den Subjuntivo: „que armemos“ und „para que ahorre“." },
        ],
      },
      {
        npc: "Catalina: Mmm, no sé. Me preocupa que las respuestas suenen muy robóticas. Los clientes valoran el trato personal.",
        npcDe: "Catalina: Hmm, ich weiß nicht. Ich habe Sorge, dass die Antworten zu roboterhaft klingen. Die Kunden schätzen den persönlichen Umgang.",
        task: "Geh auf den Einwand ein: Du verstehst die Sorge, aber die Vorlagen wären nur eine Basis, die jeder anpassen kann.",
        options: [
          { es: "Entiendo tu preocupación. Sin embargo, las plantillas serían solo una base; cada uno podría adaptarlas según el cliente.", quality: "best", feedback: "Perfekt: Du nimmst den Einwand ernst und entkräftest ihn mit „sin embargo“." },
          { es: "No, no es verdad. No van a ser robóticas.", quality: "ok", feedback: "Verständlich, aber du wischst den Einwand weg. Zeig erst Verständnis, dann argumentiere." },
          { es: "Entiendo tu preocupación. Sin embargo, no creo que las respuestas van a sonar robóticas.", quality: "wrong", feedback: "Nach „no creo que“ steht der Subjuntivo: „no creo que vayan a sonar robóticas“." },
        ],
      },
      {
        npc: "Catalina: Puede ser… Pero ¿quién va a tener tiempo para hacer todo eso? Ya andamos con harta pega.",
        npcDe: "Catalina: Kann sein … Aber wer soll Zeit haben, das alles zu machen? Wir haben jetzt schon viel Arbeit (harta pega = viel Arbeit, Chile).",
        task: "Biete an, die erste Version selbst zu machen, solange du dafür ein paar Stunden pro Woche bekommst.",
        options: [
          { es: "Yo me ofrezco para hacer una primera versión, siempre que pueda dedicarle unas horas a la semana.", quality: "best", feedback: "Sehr gut: konstruktives Angebot mit Bedingung – „siempre que“ + Subjuntivo." },
          { es: "Lo hago yo, pero necesito tiempo.", quality: "ok", feedback: "Verständlich, aber unkonkret. Sag, wie viel Zeit du brauchst." },
          { es: "Yo me ofrezco para hacer una primera versión, siempre que puedo dedicarle unas horas a la semana.", quality: "wrong", feedback: "„Siempre que“ als Bedingung verlangt den Subjuntivo: „siempre que pueda“." },
        ],
      },
      {
        npc: "Matías: Me parece razonable. ¿Cuándo crees que podrías tener algo para mostrar?",
        npcDe: "Matías: Klingt vernünftig. Wann meinst du, könntest du etwas zum Zeigen haben?",
        task: "Sag, dass du in zwei Wochen einen Entwurf hättest und ihr nach dem Test messen könnt, ob die Antwortzeiten sinken.",
        options: [
          { es: "En dos semanas podría tener un borrador. Una vez que lo probemos, podemos medir si bajan los tiempos de respuesta.", quality: "best", feedback: "Perfekt: „una vez que“ + Subjuntivo für die Zukunft und ein messbares Ziel." },
          { es: "En dos semanas, más o menos. Ojalá.", quality: "ok", feedback: "Verständlich, wirkt aber unsicher. Mach eine klare Zusage und nenne, wie ihr den Erfolg messt." },
          { es: "En dos semanas podría tener un borrador. Una vez que lo probamos, medimos los tiempos de respuesta.", quality: "wrong", feedback: "„Una vez que“ mit Zukunftsbezug verlangt den Subjuntivo: „una vez que lo probemos“." },
        ],
      },
      {
        npc: "Matías: Perfecto. Hagamos una prueba piloto de un mes y lo vemos en la próxima reunión. Buena idea, ¿ah?",
        npcDe: "Matías: Perfekt. Machen wir einen Pilottest von einem Monat und schauen es uns im nächsten Meeting an. Gute Idee, oder?",
        task: "Bedank dich für die Unterstützung und bitte Catalina, die erste Version durchzusehen, weil sie die Kunden gut kennt.",
        options: [
          { es: "Gracias por el apoyo. Cata, me encantaría que revisaras la primera versión, ya que conoces bien a los clientes.", quality: "best", feedback: "Sehr gut: Du holst die Kritikerin ins Boot – und „me encantaría que“ + Subjuntivo Imperfecto ist korrekt." },
          { es: "Gracias. Cata, revisa tú.", quality: "ok", feedback: "Verständlich, aber der Imperativ klingt wie ein Befehl. Bitte sie höflich darum." },
          { es: "Gracias por el apoyo. Cata, me encantaría que revisas la primera versión.", quality: "wrong", feedback: "Nach „me encantaría que“ steht der Subjuntivo Imperfecto: „que revisaras“." },
        ],
      },
    ],
    closing: "Catalina: ¡Obvio! Con gusto le echo una mirada. Me convenciste.",
    closingDe: "Catalina: Klar! Ich schaue gern drüber. Du hast mich überzeugt.",
    vocab: [
      { es: "la propuesta / la sugerencia", de: "der Vorschlag" },
      { es: "darse cuenta de que", de: "merken, feststellen" },
      { es: "la plantilla", de: "die Vorlage" },
      { es: "armar", de: "aufbauen, erstellen (Chile)" },
      { es: "sin embargo", de: "jedoch" },
      { es: "harta pega", de: "viel Arbeit (Chile)" },
      { es: "el borrador", de: "der Entwurf" },
      { es: "la prueba piloto", de: "der Pilottest" },
    ],
  },

  // ───────────────────────────── C1 ─────────────────────────────
  {
    scenarioId: "sueldo",
    steps: [
      {
        npc: "Bueno, como le adelantamos por correo, nos encantaría que se sumara al equipo. La oferta es de 2,4 millones brutos mensuales, con contrato indefinido. ¿Qué le parece?",
        npcDe: "Also, wie wir Ihnen schon per Mail angedeutet haben, würden wir uns sehr freuen, wenn Sie zum Team stoßen. Das Angebot liegt bei 2,4 Millionen brutto im Monat, unbefristet. Was meinen Sie?",
        task: "Bedank dich, zeig Begeisterung für die Stelle, aber sag, dass du angesichts deiner Erfahrung auf etwas mehr gehofft hattest.",
        options: [
          { es: "Le agradezco mucho la oferta y el proyecto me entusiasma. Dicho eso, considerando mi experiencia, esperaba una cifra algo más alta.", quality: "best", feedback: "Sehr gut: erst Wertschätzung, dann mit „Dicho eso…“ elegant zum Einwand – typisches C1-Verhandlungsspanisch." },
          { es: "Es muy poco. Quiero más.", quality: "ok", feedback: "Verständlich, aber viel zu direkt. So verspielst du Sympathie in der Verhandlung." },
          { es: "Le agradezco la oferta. Sin embargo, esperaba que la cifra sea algo más alta.", quality: "wrong", feedback: "Zeitenfolge: Nach „esperaba que“ (Vergangenheit) steht der Subjuntivo Imperfecto: „que la cifra fuera algo más alta“." },
        ],
      },
      {
        npc: "Entiendo. ¿Qué cifra tenía en mente? Le adelanto que nuestro margen no es muy amplio.",
        npcDe: "Verstehe. Welche Summe hatten Sie im Kopf? Ich sage Ihnen gleich, dass unser Spielraum nicht sehr groß ist.",
        task: "Nenne 2,8 Millionen und begründe es mit Gehaltsstudien für vergleichbare Positionen.",
        options: [
          { es: "Pensaba en unos 2,8 millones. Según los estudios de remuneraciones que he revisado, es lo que se paga en el mercado por un cargo de este nivel.", quality: "best", feedback: "Perfekt: konkrete Zahl, sachlich mit Marktdaten begründet." },
          { es: "Unos 2,8 millones, porque en Alemania ganaba mucho más.", quality: "ok", feedback: "Sprachlich korrekt, aber das deutsche Gehaltsniveau ist hier kein gutes Argument. Argumentiere mit dem chilenischen Markt." },
          { es: "Pensaba en unos 2,8 millones. No es que quiero pedir demasiado, pero es lo que paga el mercado.", quality: "wrong", feedback: "„No es que“ verlangt den Subjuntivo: „No es que quiera pedir demasiado…“." },
        ],
      },
      {
        npc: "Mire, 2,8 se nos escapa del presupuesto. Podríamos llegar a 2,6, y además tenemos un bono anual por desempeño. ¿Le hace sentido?",
        npcDe: "Schauen Sie, 2,8 sprengt unser Budget. Wir könnten auf 2,6 gehen, und zusätzlich gibt es einen jährlichen Leistungsbonus. Ergibt das für Sie Sinn (hacer sentido = Sinn ergeben, in Chile sehr verbreitet)?",
        task: "Schlag einen Kompromiss vor: 2,6 könntest du annehmen, wenn du zwei Tage pro Woche von zu Hause arbeiten kannst.",
        options: [
          { es: "Podría aceptar los 2,6, siempre y cuando pudiera trabajar dos días a la semana desde la casa.", quality: "best", feedback: "Sehr gut: „siempre y cuando“ + Subjuntivo Imperfecto passt zum hypothetischen Konditional „podría“." },
          { es: "Ok, 2,6. Pero también quiero home office dos días.", quality: "ok", feedback: "Verständlich, aber „quiero“ klingt fordernd. Formuliere die Bedingung mit „siempre y cuando“." },
          { es: "Podría aceptar los 2,6 si me darían dos días de teletrabajo.", quality: "wrong", feedback: "Nach „si“ nie Konditional: „si me dieran dos días de teletrabajo“." },
        ],
      },
      {
        npc: "El teletrabajo lo tenemos regulado: la política general es un día a la semana. Ahora, si su jefatura lo aprueba, podríamos hacer una excepción después del período de prueba.",
        npcDe: "Telearbeit ist bei uns geregelt: Grundsätzlich ist es ein Tag pro Woche. Wenn Ihre Vorgesetzten (jefatura) zustimmen, könnten wir aber nach der Probezeit eine Ausnahme machen.",
        task: "Nimm das als Ausgangspunkt an, aber bitte darum, es schriftlich in einem Vertragsanhang festzuhalten.",
        options: [
          { es: "Me parece un buen punto de partida. Eso sí, preferiría que quedara por escrito en un anexo del contrato, para evitar malentendidos.", quality: "best", feedback: "Perfekt: „Eso sí“ (allerdings) leitet höflich die Bedingung ein; „preferiría que“ + Subjuntivo Imperfecto." },
          { es: "Ok, pero escríbalo en el contrato.", quality: "ok", feedback: "Verständlich, aber der Imperativ wirkt misstrauisch. Formuliere es als Wunsch: „Preferiría que quedara por escrito.“" },
          { es: "Me parece un buen punto de partida. Eso sí, preferiría que queda por escrito en el contrato.", quality: "wrong", feedback: "Nach „preferiría que“ steht der Subjuntivo Imperfecto: „que quedara por escrito“." },
        ],
      },
      {
        npc: "Es razonable; lo vemos con el área legal. Otra cosa: ¿usted cotiza en Fonasa o piensa contratar una Isapre? Lo pregunto porque la empresa cubre parte del plan de salud.",
        npcDe: "Das ist vernünftig; wir klären das mit der Rechtsabteilung. Noch etwas: Zahlen Sie in Fonasa ein (staatliche Krankenversicherung) oder wollen Sie eine Isapre abschließen (private Krankenversicherung)? Ich frage, weil die Firma einen Teil des Gesundheitsplans übernimmt.",
        task: "Sag, dass du noch abwägst und wahrscheinlich bei Fonasa bleibst – es sei denn, der Arbeitgeberanteil ist bedeutend. Frag nach dem genauen Anteil.",
        options: [
          { es: "Todavía lo estoy evaluando. Probablemente me quede en Fonasa, a menos que el aporte de la empresa sea significativo. ¿Me podría precisar cuánto cubre?", quality: "best", feedback: "Sehr gut: „a menos que“ + Subjuntivo und eine präzise Nachfrage." },
          { es: "No sé. ¿Qué es mejor?", quality: "ok", feedback: "Verständlich, aber du gibst die Verhandlungsposition ab. Frag gezielt nach dem Anteil der Firma." },
          { es: "Todavía lo estoy evaluando. Probablemente me quede en Fonasa, a menos que el aporte de la empresa es significativo.", quality: "wrong", feedback: "„A menos que“ verlangt immer den Subjuntivo: „a menos que el aporte sea significativo“." },
        ],
      },
      {
        npc: "La empresa cubre el 50 % del plan, con un tope de 3 UF mensuales. Y le cuento que también hay aguinaldo en Fiestas Patrias y en Navidad.",
        npcDe: "Die Firma übernimmt 50 % des Plans, bis maximal 3 UF im Monat (UF = Unidad de Fomento, inflationsindexierte Rechnungseinheit). Und es gibt außerdem eine Sonderzahlung (aguinaldo) zum Nationalfeiertag im September und zu Weihnachten.",
        task: "Sag, dass das Paket damit attraktiv wird und du spätestens Montag antwortest, sobald du das Angebot schriftlich hast.",
        options: [
          { es: "Con eso, el paquete se vuelve bastante atractivo. Apenas me haga llegar la propuesta final por escrito, le doy una respuesta a más tardar el lunes.", quality: "best", feedback: "Perfekt: Du sicherst dir das schriftliche Angebot, bevor du zusagst – „apenas“ + Subjuntivo." },
          { es: "Bueno, acepto. ¿Cuándo empiezo?", quality: "ok", feedback: "Sprachlich korrekt, aber du sagst zu, bevor das Angebot schriftlich vorliegt – damit verschenkst du Spielraum." },
          { es: "Con eso, el paquete se vuelve bastante atractivo. Apenas me manda la propuesta por escrito, le doy una respuesta.", quality: "wrong", feedback: "„Apenas“ mit Zukunftsbezug verlangt den Subjuntivo: „Apenas me mande la propuesta…“." },
        ],
      },
      {
        npc: "Perfecto, se la envío hoy mismo. Le confieso que nos costó convencer a gerencia, pero estamos convencidos de que usted vale la pena.",
        npcDe: "Perfekt, ich schicke es Ihnen noch heute. Ich gestehe, es war nicht leicht, die Geschäftsführung zu überzeugen, aber wir sind überzeugt, dass Sie es wert sind.",
        task: "Bedank dich elegant und sag, dass du alles tun wirst, damit sie die Entscheidung nicht bereuen.",
        options: [
          { es: "Se lo agradezco de verdad. Haré todo lo posible para que no se arrepientan de la decisión.", quality: "best", feedback: "Sehr gut: souverän und bescheiden – „para que“ + Subjuntivo." },
          { es: "Gracias, no se van a arrepentir: soy el mejor en lo que hago.", quality: "ok", feedback: "Verständlich, aber zu großspurig. In Chile kommt Bescheidenheit besser an." },
          { es: "Se lo agradezco de verdad. Haré todo lo posible para que no se arrepienten.", quality: "wrong", feedback: "Nach „para que“ steht immer der Subjuntivo: „para que no se arrepientan“." },
        ],
      },
    ],
    closing: "Eso esperamos. Quedo atenta a su respuesta. ¡Que tenga un buen fin de semana!",
    closingDe: "Das hoffen wir. Ich warte auf Ihre Antwort. Ein schönes Wochenende!",
    vocab: [
      { es: "bruto / líquido", de: "brutto / netto" },
      { es: "dicho eso", de: "davon abgesehen, allerdings" },
      { es: "el bono por desempeño", de: "der Leistungsbonus" },
      { es: "siempre y cuando", de: "vorausgesetzt, dass" },
      { es: "el anexo de contrato", de: "der Vertragsanhang" },
      { es: "Fonasa / la Isapre", de: "staatliche / private Krankenversicherung" },
      { es: "el tope", de: "die Obergrenze" },
      { es: "el aguinaldo", de: "Sonderzahlung (Fiestas Patrias, Weihnachten)" },
    ],
  },
  {
    scenarioId: "sobremesa",
    steps: [
      {
        npc: "Oye, ¿y qué opinái de Chile, ahora que llevai un año acá? Y trátame de tú nomás, mira que ya eres de la familia.",
        npcDe: "Sag mal, was hältst du von Chile, jetzt wo du schon ein Jahr hier bist? (opinái, llevai = chilenischer Voseo für opinas, llevas) Und duz mich ruhig (nomás = ruhig, einfach), du gehörst ja schon zur Familie.",
        task: "Sag, dass es dir sehr gefällt, besonders wie herzlich die Leute sind, auch wenn dich manches noch überrascht.",
        options: [
          { es: "La verdad es que me ha encantado. Lo que más valoro es lo cariñosa que es la gente, aunque hay cosas que todavía me sorprenden.", quality: "best", feedback: "Sehr gut: „lo + Adjektiv + que“ ist eine elegante C1-Struktur, und das Adjektiv passt sich korrekt an „la gente“ an." },
          { es: "Chile es bonito. La gente es simpática.", quality: "ok", feedback: "Korrekt, aber für C1 sehr einfach. Zeig mehr Nuancen und persönliche Eindrücke." },
          { es: "La verdad es que me ha encantado. Lo que más valoro es lo cariñoso que es la gente.", quality: "wrong", feedback: "Bei „lo + Adjektiv + que“ richtet sich das Adjektiv nach dem Bezugswort: „la gente“ ist feminin → „lo cariñosa que es la gente“." },
        ],
      },
      {
        npc: "¿Y qué es lo que te sorprende? Dime con confianza, no me voy a picar.",
        npcDe: "Und was überrascht dich? Sag's ruhig offen, ich bin nicht gleich eingeschnappt (picarse = beleidigt sein).",
        task: "Sag diplomatisch, dass dich überrascht, wie flexibel man hier mit Uhrzeiten umgeht – in Deutschland ruft man dich schon nach fünf Minuten an.",
        options: [
          { es: "Bueno, que los horarios sean tan flexibles. En Alemania, si quedas a las ocho, a las ocho y cinco ya te están llamando.", quality: "best", feedback: "Perfekt: „que + Subjuntivo“ als Antwort auf „¿qué te sorprende?“ und eine humorvolle Gegenüberstellung." },
          { es: "Que los chilenos siempre llegan tarde.", quality: "ok", feedback: "Verständlich, aber eine pauschale Verallgemeinerung – beim Schwiegervater undiplomatisch. Formuliere es vorsichtiger." },
          { es: "Bueno, me sorprende que los horarios son tan flexibles.", quality: "wrong", feedback: "Nach „me sorprende que“ steht der Subjuntivo: „me sorprende que los horarios sean tan flexibles“." },
        ],
      },
      {
        npc: "¡Ja, ja! Es que acá la hora es referencial, po. Pero allá en Alemania todo funciona como reloj, ¿o no? Eso sí que lo envidio.",
        npcDe: "Haha! Hier ist die Uhrzeit eben nur ein Richtwert (po = Verstärkungswort, etwa „halt“, „eben“). Aber in Deutschland läuft doch alles wie ein Uhrwerk, oder? Darum beneide ich euch wirklich.",
        task: "Relativiere mit Humor: Nicht alles läuft perfekt – die Deutsche Bahn zum Beispiel ist oft verspätet.",
        options: [
          { es: "No creas que es tan así. La Deutsche Bahn, por ejemplo, se atrasa más de lo que uno se imaginaría.", quality: "best", feedback: "Sehr gut: „No creas que…“ ist eine natürliche Art zu widersprechen, und „más de lo que“ ist korrekt." },
          { es: "No, en Alemania no todo es perfecto. El tren es malo.", quality: "ok", feedback: "Verständlich, aber sehr simpel für C1. Bring mehr Nuance und Humor hinein." },
          { es: "No creo que todo funciona tan bien; la Deutsche Bahn, por ejemplo, se atrasa muchísimo.", quality: "wrong", feedback: "Nach „no creo que“ steht der Subjuntivo: „No creo que todo funcione tan bien.“" },
        ],
      },
      {
        npc: "¿En serio? Yo tenía la idea de que allá todo era impecable. Pero dime una cosa: ¿ustedes se quedarían en Chile para siempre o te tira volver a Alemania?",
        npcDe: "Echt? Ich dachte, dort sei alles tadellos. Aber sag mal: Würdet ihr für immer in Chile bleiben, oder zieht es dich zurück nach Deutschland?",
        task: "Antworte nuanciert: Wenn es nur von euch abhinge, würdet ihr bleiben – solange ihr beide gute Arbeit habt.",
        options: [
          { es: "Si de nosotros dependiera, nos quedaríamos. Eso sí, todo depende de que los dos tengamos una buena pega.", quality: "best", feedback: "Perfekt: irrealer Bedingungssatz, „depender de que“ + Subjuntivo und „pega“ (Arbeit) im passenden lockeren Ton." },
          { es: "No sé. Tal vez sí, tal vez no.", quality: "ok", feedback: "Verständlich, aber ausweichend. Bei so einer persönlichen Frage erwartet er eine echte Antwort." },
          { es: "Si de nosotros dependería, nos quedaríamos, siempre que los dos tengamos una buena pega.", quality: "wrong", feedback: "Nach „si“ nie Konditional: „Si de nosotros dependiera, nos quedaríamos.“" },
        ],
      },
      {
        npc: "Me alegra escuchar eso. Aunque la Javi siempre dice que allá hay más seguridad y que la salud pública funciona mejor. ¿Será tan así?",
        npcDe: "Das freut mich zu hören. Wobei Javi (Javiera) immer sagt, dass es dort sicherer ist und das öffentliche Gesundheitssystem besser funktioniert. Ob das wirklich so ist?",
        task: "Gib ihm teilweise recht, aber erwähne, dass das System durch hohe Steuern und Abgaben bezahlt wird.",
        options: [
          { es: "En parte sí, pero no es gratis: allá uno paga harto en impuestos y cotizaciones. Todo tiene su precio.", quality: "best", feedback: "Sehr gut: differenzierte Antwort, und „cotizaciones“ (Sozialabgaben) ist genau der richtige Begriff." },
          { es: "Sí, Alemania es mejor en eso.", quality: "ok", feedback: "Verständlich, aber undifferenziert – und es klingt, als würdest du Chile abwerten." },
          { es: "En parte sí, pero el sistema allá no es gratis: uno lo paga con los impuestos, que son bastante altas.", quality: "wrong", feedback: "„Impuestos“ ist maskulin, also „que son bastante altos“." },
        ],
      },
      {
        npc: "Bueno, en todas partes se cuecen habas, como dicen. Lo importante es que ustedes dos estén bien. ¿Cachái?",
        npcDe: "Na ja, überall wird nur mit Wasser gekocht (wörtlich: überall kocht man Bohnen), wie man sagt. Wichtig ist, dass es euch beiden gut geht. Verstehst du? (cachái = Voseo-Form von cachar, verstehen)",
        task: "Stimm ihm herzlich zu und sag, dass sie dir vom ersten Tag an das Gefühl gegeben haben, zu Hause zu sein.",
        options: [
          { es: "Cacho perfecto. Y la verdad es que ustedes me han hecho sentir como en casa desde el primer día.", quality: "best", feedback: "Perfekt: „Cacho“ greift sein „¿cachái?“ auf, und „hacer sentir como en casa“ ist idiomatisch." },
          { es: "Sí, entiendo. Ustedes son muy amables conmigo.", quality: "ok", feedback: "Korrekt und höflich, aber etwas förmlich und flach für diesen herzlichen Moment." },
          { es: "Cacho perfecto. Ustedes me han hecho sentir como a casa desde el primer día.", quality: "wrong", feedback: "Die feste Wendung lautet „sentirse como en casa“, nicht „como a casa“." },
        ],
      },
      {
        npc: "¡Así me gusta! Oye, ¿y si nos tomamos un bajativo? Tengo un pisco reservado que estaba guardando para una ocasión especial.",
        npcDe: "So gefällt mir das! Sag mal, wollen wir einen Digestif trinken (bajativo)? Ich habe einen Reserva-Pisco, den ich für einen besonderen Anlass aufgehoben habe.",
        task: "Nimm mit Humor an, aber sag, dass du nur ein kleines Glas willst, weil du morgen früh aufstehen musst.",
        options: [
          { es: "¡Cómo decirle que no a eso! Pero uno chiquitito nomás, que mañana me toca madrugar.", quality: "best", feedback: "Sehr gut: humorvoll, mit chilenischer Verkleinerungsform „chiquitito“ und „me toca madrugar“ (ich muss früh raus)." },
          { es: "Sí, pero poco.", quality: "ok", feedback: "Verständlich, aber sehr knapp für so eine herzliche Einladung." },
          { es: "No, gracias. El pisco es peruano, ¿no?", quality: "wrong", feedback: "Heikles Thema! Chile und Peru streiten über die Herkunft des Pisco – beim chilenischen Schwiegervater ein Fettnäpfchen. Nimm die Einladung lieber an." },
        ],
      },
    ],
    closing: "¡Salud! Por el nuevo integrante de la familia.",
    closingDe: "Prost! Auf das neue Familienmitglied.",
    vocab: [
      { es: "la sobremesa", de: "das gemütliche Beisammensitzen nach dem Essen" },
      { es: "tratar de tú", de: "duzen" },
      { es: "picarse", de: "eingeschnappt sein" },
      { es: "funcionar como reloj", de: "wie ein Uhrwerk laufen" },
      { es: "las cotizaciones", de: "die Sozialabgaben" },
      { es: "en todas partes se cuecen habas", de: "überall wird nur mit Wasser gekocht" },
      { es: "el bajativo", de: "der Digestif" },
      { es: "madrugar", de: "früh aufstehen" },
    ],
  },
];
