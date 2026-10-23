import type { LessonContent } from "../types";

export const LESSONS_B1: LessonContent[] = [
  // ───────────────────────── futuro-simple ─────────────────────────
  {
    topicId: "futuro-simple",
    explanation: [
      "Das Futuro simple ist leicht zu bilden: An den ganzen Infinitiv hängst du die Endungen -é, -ás, -á, -emos, -án – für -ar, -er und -ir gleich: hablaré, comerás, vivirá, viajaremos, saldrán.",
      "• Unregelmäßige Stämme (Endungen bleiben gleich): tener → tendr-, salir → saldr-, venir → vendr-, poner → pondr-, poder → podr-, saber → sabr-, querer → querr-, hacer → har-, decir → dir-, haber → habr-.",
      "• Gebrauch: Vorhersagen (Mañana lloverá), Versprechen (Te llamaré) und Vermutungen über die Gegenwart: ¿Dónde estará Pedro? – Wo ist Pedro wohl?",
      "In Chile sagt man für feste Pläne im Alltag meist ir a + Infinitiv (Voy a viajar al sur). Das Futuro klingt etwas formeller – oder es drückt eben eine Vermutung aus.",
    ],
    examples: [
      { es: "Según el pronóstico, mañana lloverá en Santiago.", de: "Laut Wetterbericht wird es morgen in Santiago regnen." },
      { es: "El próximo año viviremos en Valparaíso.", de: "Nächstes Jahr werden wir in Valparaíso wohnen." },
      { es: "Te prometo que llegaré a tiempo a la reunión.", de: "Ich verspreche dir, dass ich pünktlich zum Meeting komme." },
      { es: "¿Qué hora será? – Serán las ocho.", de: "Wie spät ist es wohl? – Es wird wohl acht Uhr sein." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Mañana ___ a Puerto Montt en bus.",
        options: ["viajaré", "viajé", "viajaba"],
        answer: "viajaré",
        explanation: "„Mañana“ verweist auf die Zukunft, also Futuro: viajaré. Viajé und viajaba sind Vergangenheitsformen.",
      },
      {
        type: "choice",
        prompt: "Welche Futuro-Form von „tener“ (yo) ist richtig?",
        options: ["teneré", "tendré", "tenré", "tendría"],
        answer: "tendré",
        explanation: "Tener hat den unregelmäßigen Stamm tendr-: tendré. Tendría ist Condicional.",
      },
      {
        type: "gap",
        prompt: "Cuando sea grande, mi hija ___ veterinaria. (ser)",
        answer: "será",
        accept: ["va a ser"],
        explanation: "Eine Vorhersage über die Zukunft: será (ser ist im Futuro regelmäßig).",
      },
      {
        type: "gap",
        prompt: "Según el pronóstico, mañana ___ mucho en el sur. (llover)",
        answer: "lloverá",
        accept: ["va a llover"],
        explanation: "Wettervorhersage = Futuro: lloverá (3. Person Singular).",
      },
      {
        type: "choice",
        prompt: "Pedro antwortet nicht. Was drückt „Estará en el trabajo.“ aus?",
        options: ["eine Vermutung", "einen Befehl", "eine abgeschlossene Handlung"],
        answer: "eine Vermutung",
        explanation: "Das Futuro kann eine Vermutung über die Gegenwart ausdrücken: „Er ist wohl bei der Arbeit.“",
      },
      {
        type: "gap",
        prompt: "Dentro de diez años, en Chile todos ___ autos eléctricos. (tener)",
        answer: "tendrán",
        accept: ["van a tener"],
        explanation: "Vorhersage für „todos“ (3. Person Plural) mit unregelmäßigem Stamm tendr-: tendrán.",
      },
      {
        type: "build",
        prompt: "Ich werde dir die Wahrheit sagen.",
        answer: "Te diré la verdad.",
        explanation: "Decir hat den Futuro-Stamm dir-: diré. Das Pronomen te steht vor dem Verb.",
      },
      {
        type: "build",
        prompt: "Wir werden in einer Wohnung nah am Meer wohnen.",
        answer: "Viviremos en un departamento cerca del mar.",
        explanation: "Vivir + -emos = viviremos. In Chile heißt die Wohnung „departamento“; cerca de + el = cerca del.",
      },
    ],
  },

  // ───────────────────────── condicional ─────────────────────────
  {
    topicId: "condicional",
    explanation: [
      "Das Condicional („würde …“) bildest du wie das Futuro: Infinitiv + Endungen -ía, -ías, -ía, -íamos, -ían: hablaría, comerías, viviríamos.",
      "• Die unregelmäßigen Stämme sind dieselben wie im Futuro: tendría, saldría, vendría, pondría, podría, sabría, querría, haría, diría, habría.",
      "• Höflichkeit: ¿Podría ayudarme? / Me gustaría un café.",
      "• Ratschläge: Yo que tú (= an deiner Stelle), hablaría con el dueño.",
      "• Hypothesen: ¿Qué harías tú en mi lugar?",
      "In Chile bestellt und bittet man gern sehr höflich: ¿Me podría traer…? oder ¿Me daría…? – das klingt freundlich, nicht übertrieben.",
    ],
    examples: [
      { es: "¿Me podría traer la cuenta, por favor?", de: "Könnten Sie mir bitte die Rechnung bringen?" },
      { es: "Me gustaría arrendar un departamento en Ñuñoa.", de: "Ich würde gern eine Wohnung in Ñuñoa mieten." },
      { es: "Yo que tú, llevaría ropa de lluvia a Puerto Varas.", de: "An deiner Stelle würde ich Regenkleidung nach Puerto Varas mitnehmen." },
      { es: "Con más tiempo, haríamos un viaje a la Patagonia.", de: "Mit mehr Zeit würden wir eine Reise nach Patagonien machen." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Me ___ conocer el desierto de Atacama.",
        options: ["gustaría", "gustarías", "gustaríamos"],
        answer: "gustaría",
        explanation: "Bei gustar richtet sich das Verb nach dem, was gefällt (conocer = Singular): me gustaría.",
      },
      {
        type: "choice",
        prompt: "Du möchtest höflich bitten: „___ abrir la ventana, por favor?“",
        options: ["¿Podría", "¿Pude", "¿Podía"],
        answer: "¿Podría",
        explanation: "Das Condicional podría macht die Bitte höflich. Pude und podía sind Vergangenheitsformen.",
      },
      {
        type: "gap",
        prompt: "Yo que tú, ___ con la dueña del departamento. (hablar)",
        answer: "hablaría",
        explanation: "„Yo que tú“ leitet einen Ratschlag ein und verlangt das Condicional: hablaría.",
      },
      {
        type: "gap",
        prompt: "¿Qué ___ tú en mi lugar? (hacer)",
        answer: "harías",
        explanation: "Hypothetische Frage („an meiner Stelle“) → Condicional. Hacer hat den Stamm har-: harías.",
      },
      {
        type: "choice",
        prompt: "Welche Condicional-Form von „salir“ (ellos) ist richtig?",
        options: ["salirían", "saldrían", "saldrán", "salerían"],
        answer: "saldrían",
        explanation: "Salir hat den Stamm saldr-: saldrían. Saldrán ist Futuro.",
      },
      {
        type: "gap",
        prompt: "Mis amigos dicen que en tu lugar ellos no ___ ese trabajo. (aceptar)",
        answer: "aceptarían",
        explanation: "„En tu lugar“ = hypothetisch → Condicional, 3. Person Plural: aceptarían.",
      },
      {
        type: "build",
        prompt: "Wir würden gern im Süden leben.",
        answer: "Nos gustaría vivir en el sur.",
        explanation: "Me/nos gustaría + Infinitiv = „ich/wir würde(n) gern …“.",
      },
      {
        type: "build",
        prompt: "Könnten Sie mir bitte die Rechnung bringen?",
        answer: "¿Me podría traer la cuenta, por favor?",
        explanation: "Höfliche Bitte mit podría (usted). Das Pronomen me steht vor dem konjugierten Verb.",
      },
    ],
  },

  // ───────────────────────── subjuntivo-formacion ─────────────────────────
  {
    topicId: "subjuntivo-formacion",
    explanation: [
      "Der Presente de subjuntivo kommt von der yo-Form des Präsens: -o weg, dann die „Gegen-Endung“ anhängen. -ar → e: hable, hables, hable, hablemos, hablen. -er/-ir → a: coma, comas …, viva, vivas …",
      "• Unregelmäßige yo-Formen bleiben erhalten: tengo → tenga, hago → haga, digo → diga, salgo → salga, vengo → venga, conozco → conozca.",
      "• Ganz unregelmäßig: ser → sea, ir → vaya, saber → sepa, estar → esté, haber → haya, dar → dé.",
      "• Stammwechsel wie im Präsens (pueda, quiera, vuelva), aber nicht bei nosotros: podamos, queramos. Ausnahme -ir: dormir → durmamos.",
      "• Rechtschreibung: buscar → busque, llegar → llegue, empezar → empiece.",
    ],
    examples: [
      { es: "Quiero que hables con el conserje del edificio.", de: "Ich möchte, dass du mit dem Hausmeister des Gebäudes sprichst." },
      { es: "Es importante que lleguemos temprano al aeropuerto.", de: "Es ist wichtig, dass wir früh am Flughafen ankommen." },
      { es: "Ojalá que haga buen tiempo en Pucón.", de: "Hoffentlich ist das Wetter in Pucón gut." },
      { es: "Mi jefa quiere que esté en la oficina a las nueve.", de: "Meine Chefin will, dass ich um neun im Büro bin." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Welche Form ist der Subjuntivo von „hablar“ (yo)?",
        options: ["hablo", "hable", "habla"],
        answer: "hable",
        explanation: "-ar-Verben bekommen im Subjuntivo ein -e: hable.",
      },
      {
        type: "choice",
        prompt: "Ojalá que mañana ___ sol.",
        options: ["hace", "haga", "hará", "hizo"],
        answer: "haga",
        explanation: "Nach ojalá steht der Subjuntivo. Hago → haga.",
      },
      {
        type: "gap",
        prompt: "Quiero que tú ___ a la fiesta. (venir)",
        answer: "vengas",
        explanation: "Aus der yo-Form vengo wird venga, für tú: vengas.",
      },
      {
        type: "gap",
        prompt: "Es importante que nosotros ___ temprano. (salir)",
        answer: "salgamos",
        explanation: "Salgo → salga, für nosotros: salgamos.",
      },
      {
        type: "choice",
        prompt: "Welche Form ist der Subjuntivo von „ir“ (ellos)?",
        options: ["van", "vayan", "vayen", "iban"],
        answer: "vayan",
        explanation: "Ir ist ganz unregelmäßig: vaya, vayas, vaya, vayamos, vayan.",
      },
      {
        type: "gap",
        prompt: "Espero que el bus ___ a tiempo. (llegar)",
        answer: "llegue",
        explanation: "Nach espero que folgt Subjuntivo; bei llegar wird g zu gu, damit der Laut bleibt: llegue.",
      },
      {
        type: "build",
        prompt: "Ich hoffe, dass du Zeit hast.",
        answer: "Espero que tengas tiempo.",
        explanation: "Tengo → tenga, für tú: tengas.",
      },
      {
        type: "build",
        prompt: "Es ist wichtig, dass ihr pünktlich seid.",
        answer: "Es importante que ustedes sean puntuales.",
        explanation: "„Ihr“ ist in Lateinamerika ustedes. Ser → sea, Plural: sean; puntuales im Plural.",
      },
    ],
  },

  // ───────────────────────── subjuntivo-deseos ─────────────────────────
  {
    topicId: "subjuntivo-deseos",
    explanation: [
      "Nach Ausdrücken des Wünschens, Hoffens und Fühlens steht im Nebensatz mit que der Subjuntivo – wenn das Subjekt wechselt.",
      "• Wunsch/Bitte: quiero que, prefiero que, necesito que, te pido que + Subjuntivo.",
      "• Hoffnung: espero que, ojalá (que) + Subjuntivo: Ojalá que no llueva.",
      "• Gefühl: me alegra que, me molesta que, me da pena que, tengo miedo de que + Subjuntivo.",
      "• Gleiches Subjekt → Infinitiv: Quiero viajar (ich will reisen) – aber: Quiero que viajes (ich will, dass du reist).",
      "In Chile hört man ojalá ständig, auch allein als Antwort: ¿Vienes al asado? – ¡Ojalá!",
    ],
    examples: [
      { es: "Ojalá que no llueva el fin de semana en Valdivia.", de: "Hoffentlich regnet es am Wochenende in Valdivia nicht." },
      { es: "Mi polola quiere que conozca a su familia el domingo.", de: "Meine Freundin möchte, dass ich am Sonntag ihre Familie kennenlerne." },
      { es: "Me alegra que te guste vivir en Santiago.", de: "Es freut mich, dass es dir gefällt, in Santiago zu leben." },
      { es: "Espero que el arriendo no suba este año.", de: "Ich hoffe, dass die Miete dieses Jahr nicht steigt." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Espero que ___ un buen viaje.",
        options: ["tienes", "tengas", "tener"],
        answer: "tengas",
        explanation: "Espero que + Subjektwechsel → Subjuntivo: tengas.",
      },
      {
        type: "choice",
        prompt: "„Ich möchte nach Torres del Paine fahren.“ – Welche Übersetzung ist richtig?",
        options: ["Quiero ir a Torres del Paine.", "Quiero que voy a Torres del Paine.", "Quiero que vaya yo a Torres del Paine."],
        answer: "Quiero ir a Torres del Paine.",
        explanation: "Gleiches Subjekt (ich will – ich fahre) → Infinitiv, kein que-Satz.",
      },
      {
        type: "gap",
        prompt: "Ojalá que mis papás ___ para Navidad. (venir)",
        answer: "vengan",
        explanation: "Nach ojalá steht der Subjuntivo: vengo → venga, Plural: vengan.",
      },
      {
        type: "gap",
        prompt: "Me alegra que tú ___ aquí. (estar)",
        answer: "estés",
        explanation: "Gefühl (me alegra que) → Subjuntivo. Estar: esté, estés … (mit Akzent).",
      },
      {
        type: "gap",
        prompt: "Mi jefe quiere que nosotros ___ el informe hoy. (terminar)",
        answer: "terminemos",
        explanation: "Wunsch mit Subjektwechsel → Subjuntivo: terminemos.",
      },
      {
        type: "choice",
        prompt: "Me molesta que los vecinos ___ música tan fuerte.",
        options: ["ponen", "pongan", "poner", "pondrán"],
        answer: "pongan",
        explanation: "Me molesta que (Gefühl) → Subjuntivo. Pongo → ponga, Plural: pongan.",
      },
      {
        type: "build",
        prompt: "Ich hoffe, dass dir Chile gefällt.",
        answer: "Espero que te guste Chile.",
        explanation: "Espero que + Subjuntivo: gusta → guste.",
      },
      {
        type: "build",
        prompt: "Meine Freundin (polola) möchte, dass ich ihre Eltern kennenlerne.",
        answer: "Mi polola quiere que conozca a sus papás.",
        explanation: "Subjektwechsel → Subjuntivo: conozco → conozca. Vor Personen steht a. In Chile sagt man papás für Eltern.",
      },
    ],
  },

  // ───────────────────────── subjuntivo-duda ─────────────────────────
  {
    topicId: "subjuntivo-duda",
    explanation: [
      "Wenn du etwas bezweifelst, verneinst oder nur für möglich hältst, steht im que-Satz der Subjuntivo.",
      "• Zweifel: dudo que, no estoy seguro de que + Subjuntivo.",
      "• Verneinte Meinung: no creo que, no pienso que, no es verdad que + Subjuntivo: No creo que llegue a tiempo.",
      "• Möglichkeit: es posible que, puede que, es probable que + Subjuntivo.",
      "• Aber: Bejahte Meinung oder Gewissheit → Indikativ: Creo que llega a las ocho. Es verdad que es caro. Estoy seguro de que viene.",
    ],
    examples: [
      { es: "No creo que el arriendo en Providencia sea barato.", de: "Ich glaube nicht, dass die Miete in Providencia günstig ist." },
      { es: "Es posible que lleguemos tarde por el taco.", de: "Es ist möglich, dass wir wegen des Staus (taco) zu spät kommen." },
      { es: "Dudo que mi jefe me dé vacaciones en febrero.", de: "Ich bezweifle, dass mein Chef mir im Februar Urlaub gibt." },
      { es: "Creo que la micro pasa cada diez minutos.", de: "Ich glaube, dass der Bus (micro) alle zehn Minuten kommt." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "No creo que Pedro ___ hoy.",
        options: ["viene", "venga", "venir"],
        answer: "venga",
        explanation: "Verneinte Meinung (no creo que) → Subjuntivo: venga.",
      },
      {
        type: "choice",
        prompt: "Creo que el supermercado ___ abierto hasta las diez.",
        options: ["está", "esté", "estar"],
        answer: "está",
        explanation: "Bejahtes creo que drückt eine Meinung aus → Indikativ: está.",
      },
      {
        type: "gap",
        prompt: "Dudo que ellos ___ la verdad. (saber)",
        answer: "sepan",
        explanation: "Dudo que → Subjuntivo. Saber ist unregelmäßig: sepa, Plural: sepan.",
      },
      {
        type: "gap",
        prompt: "Es posible que mañana ___ en Santiago. (llover)",
        answer: "llueva",
        explanation: "Es posible que → Subjuntivo. Llover hat Stammwechsel o → ue: llueva.",
      },
      {
        type: "choice",
        prompt: "Welcher Ausdruck verlangt den Indikativ?",
        options: ["No creo que", "Dudo que", "Estoy seguro de que", "Es posible que"],
        answer: "Estoy seguro de que",
        explanation: "Gewissheit → Indikativ. Zweifel, Verneinung und Möglichkeit → Subjuntivo.",
      },
      {
        type: "gap",
        prompt: "No es verdad que el departamento ___ caro. (ser)",
        answer: "sea",
        explanation: "No es verdad que verneint eine Aussage → Subjuntivo: sea.",
      },
      {
        type: "build",
        prompt: "Ich glaube nicht, dass das Hostel sauber ist.",
        answer: "No creo que el hostal esté limpio.",
        explanation: "No creo que + Subjuntivo: esté. Für einen Zustand benutzt man estar.",
      },
      {
        type: "build",
        prompt: "Es ist möglich, dass wir den Bus (micro) verpassen.",
        answer: "Es posible que perdamos la micro.",
        explanation: "Es posible que + Subjuntivo: perdamos. Einen Bus verpassen = perder la micro (in Chile ist micro feminin).",
      },
    ],
  },

  // ───────────────────────── imperativo-negativo ─────────────────────────
  {
    topicId: "imperativo-negativo",
    explanation: [
      "Der verneinte Imperativ verwendet immer die Formen des Presente de subjuntivo – auch für tú: no hables, no comas, no vengas.",
      "• Formen: tú no hables · usted no hable · ustedes no hablen · nosotros no hablemos.",
      "• Pronomen stehen vor dem Verb, nicht angehängt: dímelo → no me lo digas, siéntate → no te sientes.",
      "• Häufige unregelmäßige Formen: no vayas, no seas, no hagas, no pongas, no digas, no salgas.",
      "Im chilenischen Alltag hörst du ständig: ¡No te preocupes! oder scherzhaft ¡No seas fome! (Sei kein Langweiler!).",
    ],
    examples: [
      { es: "No te preocupes, yo pago la cuenta.", de: "Mach dir keine Sorgen, ich zahle die Rechnung." },
      { es: "No dejes tu mochila sola en la micro.", de: "Lass deinen Rucksack im Bus nicht unbeaufsichtigt." },
      { es: "No le digas nada a la Cami todavía.", de: "Sag Cami noch nichts." },
      { es: "Señora, no se olvide de firmar el contrato.", de: "Vergessen Sie nicht, den Vertrag zu unterschreiben, gnädige Frau." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "¡No ___ tarde a la reunión! (tú)",
        options: ["llegas", "llegues", "llega"],
        answer: "llegues",
        explanation: "Verneinter Imperativ = Subjuntivo: no llegues (mit gu).",
      },
      {
        type: "choice",
        prompt: "Wie sagt man „Sag es mir nicht!“ (tú)?",
        options: ["¡No dímelo!", "¡No me lo digas!", "¡No me lo dices!", "¡No lo me digas!"],
        answer: "¡No me lo digas!",
        explanation: "Beim verneinten Imperativ stehen die Pronomen vor dem Verb (indirektes zuerst), das Verb im Subjuntivo.",
      },
      {
        type: "gap",
        prompt: "No ___ fome, ven al carrete. (ser)",
        answer: "seas",
        explanation: "Ser im Subjuntivo: sea, für tú: no seas.",
      },
      {
        type: "gap",
        prompt: "Señor, no ___ aquí, por favor. (fumar)",
        answer: "fume",
        explanation: "Usted-Form im verneinten Imperativ: no fume.",
      },
      {
        type: "gap",
        prompt: "Chicos, no ___ la ventana, hace frío. (abrir)",
        answer: "abran",
        explanation: "Mehrere Personen → ustedes: no abran.",
      },
      {
        type: "choice",
        prompt: "„Setz dich nicht dorthin!“ (tú)",
        options: ["¡No te sientes ahí!", "¡No siéntate ahí!", "¡No te sientas ahí!"],
        answer: "¡No te sientes ahí!",
        explanation: "Sentarse → Subjuntivo: te sientes. „No te sientas“ ist Indikativ (du setzt dich nicht).",
      },
      {
        type: "build",
        prompt: "Mach dir keine Sorgen um das Geld!",
        answer: "¡No te preocupes por la plata!",
        explanation: "Preocuparse → no te preocupes. In Chile sagt man plata für Geld.",
      },
      {
        type: "build",
        prompt: "Lass deinen Rucksack nicht im Bus (micro).",
        answer: "No dejes tu mochila en la micro.",
        explanation: "Dejar → no dejes (tú). Micro ist in Chile der Stadtbus.",
      },
    ],
  },

  // ───────────────────────── pluscuamperfecto ─────────────────────────
  {
    topicId: "pluscuamperfecto",
    explanation: [
      "Das Pluscuamperfecto entspricht dem deutschen Plusquamperfekt: Es beschreibt, was vor einem anderen Ereignis in der Vergangenheit schon passiert war.",
      "• Bildung: había, habías, había, habíamos, habían + Partizip (hablado, comido, vivido).",
      "• Unregelmäßige Partizipien: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto.",
      "• Das Partizip ändert sich nie: Ella había comido. Ellos habían comido.",
      "• Typische Signalwörter: ya, todavía no, nunca antes: Cuando llegué, la micro ya había salido.",
    ],
    examples: [
      { es: "Cuando llegamos al terminal, el bus ya había salido.", de: "Als wir am Busbahnhof ankamen, war der Bus schon abgefahren." },
      { es: "Nunca había probado un completo antes de vivir en Chile.", de: "Ich hatte noch nie einen Completo probiert, bevor ich in Chile lebte." },
      { es: "Mi pololo ya había reservado la cabaña en Pucón.", de: "Mein Freund hatte die Hütte in Pucón schon reserviert." },
      { es: "Me dijeron que el dueño ya había arrendado el departamento.", de: "Man sagte mir, dass der Besitzer die Wohnung schon vermietet hatte." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Cuando llegué al cine, la película ya ___.",
        options: ["había empezado", "ha empezado", "empieza"],
        answer: "había empezado",
        explanation: "Der Film begann vor meiner Ankunft (Vergangenheit) → Pluscuamperfecto.",
      },
      {
        type: "choice",
        prompt: "Wie lautet das Partizip von „escribir“?",
        options: ["escribido", "escrito", "escribiado"],
        answer: "escrito",
        explanation: "Escribir hat ein unregelmäßiges Partizip: escrito.",
      },
      {
        type: "gap",
        prompt: "Antes de ese viaje, nosotros nunca ___ visto un glaciar. (haber)",
        answer: "habíamos",
        explanation: "Vorzeitigkeit in der Vergangenheit: habíamos + Partizip.",
      },
      {
        type: "gap",
        prompt: "Cuando llamé a Diego, él ya ___ de la oficina. (salir)",
        answer: "había salido",
        explanation: "Er ging, bevor ich anrief → había salido.",
      },
      {
        type: "gap",
        prompt: "Cuando me fui de Chile, todavía no ___ la Patagonia. (conocer)",
        answer: "había conocido",
        explanation: "Bis zu jenem Zeitpunkt in der Vergangenheit noch nicht → Pluscuamperfecto, 1. Person: había conocido.",
      },
      {
        type: "choice",
        prompt: "„Sie hatten das Fenster geöffnet.“ – Welche Übersetzung ist richtig?",
        options: ["Habían abrido la ventana.", "Habían abierto la ventana.", "Han abierto la ventana.", "Habían abierta la ventana."],
        answer: "Habían abierto la ventana.",
        explanation: "Abrir hat das unregelmäßige Partizip abierto, und das Partizip bleibt unverändert auf -o.",
      },
      {
        type: "build",
        prompt: "Der Bus (micro) war schon abgefahren.",
        answer: "La micro ya había salido.",
        explanation: "Ya + había + Partizip: Die Handlung war schon abgeschlossen.",
      },
      {
        type: "build",
        prompt: "Ich hatte noch nie Mote con huesillo probiert.",
        answer: "Nunca había probado mote con huesillo.",
        explanation: "Nunca steht vor había; probar → probado. Mote con huesillo ist ein typisch chilenisches Sommergetränk.",
      },
    ],
  },

  // ───────────────────────── relativos ─────────────────────────
  {
    topicId: "relativos",
    explanation: [
      "Relativsätze geben genauere Informationen zu einer Person oder Sache. Das häufigste Relativpronomen ist que – für Personen und Sachen: El colega que vive en Viña …",
      "• quien/quienes: nur für Personen, vor allem nach Präpositionen: la amiga con quien trabajo.",
      "• donde: für Orte: el barrio donde vivo.",
      "• lo que = „was“, bezieht sich auf eine ganze Idee: No entiendo lo que dices. Todo lo que …",
      "• el/la/los/las que: nach Präpositionen (la casa en la que vivimos) oder als „derjenige, der“: El que llegó tarde fue Juan.",
    ],
    examples: [
      { es: "El colega que me ayudó es de Concepción.", de: "Der Kollege, der mir geholfen hat, ist aus Concepción." },
      { es: "El hostal donde nos quedamos en Chiloé era muy acogedor.", de: "Das Hostel, in dem wir auf Chiloé übernachtet haben, war sehr gemütlich." },
      { es: "No entiendo lo que dice mi suegra cuando habla rápido.", de: "Ich verstehe nicht, was meine Schwiegermutter sagt, wenn sie schnell spricht." },
      { es: "La amiga con quien arriendo el departamento es profesora.", de: "Die Freundin, mit der ich die Wohnung miete, ist Lehrerin." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "El departamento ___ arrendamos tiene vista al mar.",
        options: ["que", "quien", "lo que"],
        answer: "que",
        explanation: "Bezug auf eine Sache als Objekt ohne Präposition → que.",
      },
      {
        type: "choice",
        prompt: "No entiendo ___ quieres decir.",
        options: ["lo que", "quien", "el que"],
        answer: "lo que",
        explanation: "„Was“ im Sinne einer ganzen Idee → lo que.",
      },
      {
        type: "gap",
        prompt: "Este es el barrio ___ crecí.",
        answer: "donde",
        accept: ["en el que", "en que", "en el cual"],
        explanation: "Bei Orten benutzt man donde (oder en el que).",
      },
      {
        type: "gap",
        prompt: "La persona con ___ hablé ayer es mi nueva jefa.",
        answer: "quien",
        accept: ["la que"],
        explanation: "Nach einer Präposition und bei Personen: con quien (oder con la que).",
      },
      {
        type: "gap",
        prompt: "Todo ___ me contaste es verdad.",
        answer: "lo que",
        explanation: "Todo lo que = alles, was.",
      },
      {
        type: "choice",
        prompt: "Welcher Satz ist korrekt?",
        options: [
          "Los amigos con quienes salimos son de Valparaíso.",
          "Los amigos con quien salimos son de Valparaíso.",
          "Los amigos con lo que salimos son de Valparaíso.",
        ],
        answer: "Los amigos con quienes salimos son de Valparaíso.",
        explanation: "Quien richtet sich nach der Zahl: Bei amigos (Plural) heißt es quienes.",
      },
      {
        type: "build",
        prompt: "Ich verstehe nicht, was du sagst.",
        answer: "No entiendo lo que dices.",
        explanation: "„Was“ als ganze Aussage → lo que.",
      },
      {
        type: "build",
        prompt: "Das Restaurant, in dem wir gegessen haben, war teuer.",
        answer: "El restaurante donde comimos era caro.",
        explanation: "Ort → donde. In Lateinamerika steht für abgeschlossene Handlungen meist das Pretérito: comimos.",
      },
    ],
  },

  // ───────────────────────── estilo-indirecto ─────────────────────────
  {
    topicId: "estilo-indirecto",
    explanation: [
      "In der indirekten Rede gibst du wieder, was jemand gesagt hat. Personen und Pronomen passen sich an: „Estoy cansado“ → Dice que está cansado.",
      "• Einleitung im Präsens (dice que): Die Zeitform bleibt gleich.",
      "• Einleitung in der Vergangenheit (dijo que): Zeitverschiebung – presente → imperfecto (estoy → estaba), pretérito → pluscuamperfecto (perdí → había perdido), futuro → condicional (iré → iría).",
      "• Fragen: Ja/Nein-Fragen mit si (Me preguntó si tenía hambre), sonst mit dem Fragewort (Me preguntó dónde vivía).",
      "Im chilenischen Alltag erzählt man so ständig weiter: Y me dijo que … y yo le dije que …",
    ],
    examples: [
      { es: "Mi jefa dice que la reunión es a las diez.", de: "Meine Chefin sagt, dass das Meeting um zehn ist." },
      { es: "Camila me dijo que estaba en el sur con su familia.", de: "Camila sagte mir, dass sie mit ihrer Familie im Süden war." },
      { es: "El dueño nos dijo que nos devolvería la garantía en marzo.", de: "Der Vermieter sagte uns, dass er uns die Kaution (garantía) im März zurückgeben würde." },
      { es: "Mi suegra me preguntó si me gustaba la cazuela.", de: "Meine Schwiegermutter fragte mich, ob mir die Cazuela schmeckt." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "„Tengo hambre.“ → Pedro dice que ___ hambre.",
        options: ["tiene", "tenía", "tengo"],
        answer: "tiene",
        explanation: "Einleitung im Präsens (dice) → keine Zeitverschiebung, nur die Person ändert sich: tiene.",
      },
      {
        type: "choice",
        prompt: "„Tengo hambre.“ → Pedro dijo que ___ hambre.",
        options: ["tenía", "tuvo", "tengo"],
        answer: "tenía",
        explanation: "Einleitung in der Vergangenheit (dijo) → presente wird zu imperfecto: tenía.",
      },
      {
        type: "gap",
        prompt: "„¿Vives en Santiago?“ → Me preguntó ___ vivía en Santiago.",
        answer: "si",
        explanation: "Ja/Nein-Fragen werden in der indirekten Rede mit si („ob“) eingeleitet – ohne Akzent.",
      },
      {
        type: "gap",
        prompt: "„Estoy cansada.“ → Mi polola me dijo que ___ cansada. (estar)",
        answer: "estaba",
        explanation: "Dijo que → presente wird zu imperfecto: estaba.",
      },
      {
        type: "gap",
        prompt: "„Iré a la playa.“ → Ana dijo que ___ a la playa. (ir)",
        answer: "iría",
        explanation: "Dijo que → futuro wird zu condicional: iría.",
      },
      {
        type: "choice",
        prompt: "„Perdí las llaves.“ → Juan contó que ___ las llaves.",
        options: ["había perdido", "pierde", "perdería"],
        answer: "había perdido",
        explanation: "Contó que (Vergangenheit) → pretérito wird zu pluscuamperfecto: había perdido.",
      },
      {
        type: "build",
        prompt: "Sie fragte mich, ob ich Hunger hatte.",
        answer: "Me preguntó si tenía hambre.",
        explanation: "Indirekte Ja/Nein-Frage mit si; tengo wird nach preguntó zu tenía.",
      },
      {
        type: "build",
        prompt: "Mein Chef sagt, dass das Büro geschlossen ist.",
        answer: "Mi jefe dice que la oficina está cerrada.",
        explanation: "Einleitung im Präsens → keine Zeitverschiebung. Cerrada passt sich an oficina (feminin) an.",
      },
    ],
  },

  // ───────────────────────── por-para ─────────────────────────
  {
    topicId: "por-para",
    explanation: [
      "Por und para heißen oft beide „für“, haben aber verschiedene Aufgaben.",
      "• por: Grund (por la lluvia), Weg/Bewegung durch (por el centro), Tausch/Preis (por diez lucas), Zeitraum (por dos semanas), Mittel (por teléfono), Dank (gracias por …).",
      "• para: Ziel/Richtung (para Valparaíso), Zweck (para aprender), Empfänger (para ti), Frist (para el lunes), Meinung (para mí).",
      "Merkhilfe: por schaut zurück auf den Grund, para schaut nach vorn auf das Ziel.",
      "Chile-Tipp: Una luca sind 1.000 Pesos – Lo compré por cinco lucas = für 5.000 Pesos.",
    ],
    examples: [
      { es: "Gracias por la invitación a tomar once.", de: "Danke für die Einladung zur Once (Nachmittagsmahlzeit)." },
      { es: "Este regalo es para tu mamá.", de: "Dieses Geschenk ist für deine Mutter." },
      { es: "Caminamos por el cerro Santa Lucía.", de: "Wir sind über den Hügel Santa Lucía spaziert." },
      { es: "Tengo que terminar el informe para el viernes.", de: "Ich muss den Bericht bis Freitag fertig machen." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Este regalo es ___ ti.",
        options: ["por", "para", "de"],
        answer: "para",
        explanation: "Empfänger → para.",
      },
      {
        type: "choice",
        prompt: "Gracias ___ tu ayuda.",
        options: ["por", "para", "a"],
        answer: "por",
        explanation: "Dank (für den Grund) → gracias por.",
      },
      {
        type: "gap",
        prompt: "Compré esta chaqueta ___ veinte lucas.",
        answer: "por",
        explanation: "Tausch/Preis → por.",
      },
      {
        type: "gap",
        prompt: "Estudio español ___ vivir en Chile.",
        answer: "para",
        explanation: "Zweck (um zu …) → para.",
      },
      {
        type: "gap",
        prompt: "No fuimos a la playa ___ la lluvia.",
        answer: "por",
        explanation: "Grund (wegen) → por.",
      },
      {
        type: "choice",
        prompt: "„Wir fahren morgen nach Valparaíso los.“ – Welche Übersetzung ist richtig?",
        options: ["Mañana salimos para Valparaíso.", "Mañana salimos por Valparaíso.", "Mañana salimos de Valparaíso."],
        answer: "Mañana salimos para Valparaíso.",
        explanation: "Ziel/Richtung → para. Por Valparaíso hieße „durch Valparaíso“, de Valparaíso „aus Valparaíso“.",
      },
      {
        type: "build",
        prompt: "Wir sind durch das Zentrum von Santiago gelaufen.",
        answer: "Caminamos por el centro de Santiago.",
        explanation: "Bewegung durch einen Ort → por.",
      },
      {
        type: "build",
        prompt: "Ich muss den Bericht bis morgen abgeben.",
        answer: "Tengo que entregar el informe para mañana.",
        explanation: "Frist (bis spätestens) → para.",
      },
    ],
  },

  // ───────────────────────── pronombres-combinados ─────────────────────────
  {
    topicId: "pronombres-combinados",
    explanation: [
      "Kommen ein indirektes (me, te, le, nos, les) und ein direktes Objektpronomen (lo, la, los, las) zusammen, steht das indirekte zuerst: Me lo das. Te la mando.",
      "• le/les + lo/la/los/las wird zu se: Le doy el libro → Se lo doy (nie „le lo“).",
      "• Stellung: vor dem konjugierten Verb (se lo digo); angehängt an Infinitiv und bejahten Imperativ, oft mit Akzent: voy a decírselo, dámelo.",
      "• Da se mehrdeutig ist, kann man präzisieren: Se lo di a ella.",
      "In Lateinamerika (auch in Chile) hört man oft se los dije statt se lo dije, wenn „ihnen“ gemeint ist. Im Standard schreibt man se lo.",
    ],
    examples: [
      { es: "¿El contrato? Se lo mando mañana a la dueña.", de: "Der Vertrag? Ich schicke ihn morgen der Vermieterin." },
      { es: "¿Me prestas tu cargador? – Sí, te lo presto.", de: "Leihst du mir dein Ladegerät? – Ja, ich leihe es dir." },
      { es: "Mi abuela hizo empanadas y me las trajo.", de: "Meine Oma hat Empanadas gemacht und sie mir gebracht." },
      { es: "Las fotos del viaje se las voy a mostrar a mis papás.", de: "Die Fotos von der Reise werde ich meinen Eltern zeigen." },
    ],
    exercises: [
      {
        type: "choice",
        prompt: "Le doy el libro a Ana. → ___ doy.",
        options: ["Le lo", "Se lo", "Lo le", "Se la"],
        answer: "Se lo",
        explanation: "Le + lo wird zu se lo (el libro = maskulin).",
      },
      {
        type: "choice",
        prompt: "¿Me prestas la bici? – Sí, ___ presto.",
        options: ["te la", "la te", "te lo", "se la"],
        answer: "te la",
        explanation: "Indirektes Pronomen zuerst (te), dann direktes: la bici → la.",
      },
      {
        type: "gap",
        prompt: "¿Le diste las llaves al conserje? – Sí, ___ las di.",
        answer: "se",
        explanation: "Le + las → se las.",
      },
      {
        type: "gap",
        prompt: "¿Me puedes explicar la tarea? – Sí, ___ explico ahora.",
        answer: "te la",
        explanation: "Für dich (te) + la tarea (la) → te la explico.",
      },
      {
        type: "gap",
        prompt: "Quiero regalarle este libro a mi suegra. Voy a ___ mañana. (dar)",
        answer: "dárselo",
        explanation: "Am Infinitiv werden die Pronomen angehängt: dar + se + lo = dárselo (mit Akzent).",
      },
      {
        type: "choice",
        prompt: "Wie sagt man „Gib es mir!“ (tú)?",
        options: ["¡Dámelo!", "¡Me lo da!", "¡Dalo me!", "¡Dámelos!"],
        answer: "¡Dámelo!",
        explanation: "Beim bejahten Imperativ werden die Pronomen angehängt: da + me + lo = dámelo.",
      },
      {
        type: "build",
        prompt: "Ich schicke es dir morgen.",
        answer: "Te lo mando mañana.",
        explanation: "Indirekt (te) vor direkt (lo), beide vor dem konjugierten Verb.",
      },
      {
        type: "build",
        prompt: "Ich werde es ihm heute Abend sagen.",
        answer: "Se lo voy a decir esta noche.",
        explanation: "Le + lo → se lo; die Pronomen können vor dem konjugierten Verb stehen (oder: voy a decírselo).",
      },
    ],
  },
];
