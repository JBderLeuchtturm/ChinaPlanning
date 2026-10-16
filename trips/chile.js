/* Reise: Chile. Preise sind Richtwerte pro Person in chilenischen Pesos (Stand 2025/26) – vor Ort prüfen. */
(window.TRIPS = window.TRIPS || []).push({
  id: 'chile',
  name: 'Chile',
  title: 'Zwei Wochen Chile',
  lede: 'Vom trockensten Ort der Welt bis zu den Granittürmen Patagoniens: Atacama-Wüste, Torres del Paine, Vulkane und Seen im Süden und die bunten Hügel von Valparaíso. Unter „Tage“ liegt schon ein fertiger Plan. Ihr tauscht nur noch aus, was euch nicht passt, und schickt ihn euch per Link.',
  routeLede: 'Mit einem Umstieg nach Santiago, dann mit Inlandsflügen 4.000 km von Nord nach Süd. Chile ist so lang wie Europa breit.',
  seal: 'C',
  sealFmt: 'Día {n}',
  lang: 'es',
  script: 'alpha',
  font: { family: 'Noto Serif Display', weight: 900, fallback: "'Noto Serif', Georgia, serif" },
  locFont: "system-ui, 'Segoe UI', Roboto, 'Noto Sans', sans-serif",
  taxiAsk: 'Por favor, lléveme a esta dirección',
  currency: { label: 'CLP', rate: 1100, rateLabel: '1 € in chilenischen Pesos' },
  maps: [
    { label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query={q}%20{cityName}%20Chile' }
  ],
  theme: {
    light: { ticket: '#F2DFD2', ink: '#8A3B1B', line: '#E2BBA3' },
    dark: { ticket: '#3A2418', ink: '#F2B897', line: '#5E3A28' }
  },
  budget: {
    flight: [900, 1400], flightLabel: 'Flug Frankfurt – Santiago mit Umstieg, hin und zurück',
    hotel: [['Budget', 45], ['Mittelklasse', 95], ['Komfort', 200]],
    food: [['Sparsam', 25], ['Normal', 40], ['Schlemmen', 70]],
    extra: 200, extraLabel: 'Taxi, SIM, Trinkgeld, Souvenirs',
    transportLabel: 'Inlandsflüge, Busse und Touren aus eurem Plan'
  },
  warnings: {
    after: [],
    holidays: [
      { name: 'die Fiestas Patrias (um den 18. September)', from: '09-16', to: '09-20', text: 'Chiles Nationalfeiertage mit Volksfesten, Cueca-Tanz und Asado überall – schön, aber vieles hat zu und Busse sind voll.' },
      { name: 'die chilenischen Sommerferien (Januar und Februar)', from: '01-01', to: '02-28', text: 'Hochsaison in Patagonien: Unterkünfte und Parktickets für Torres del Paine sehr früh buchen.' }
    ],
    seasons: [
      { months: [5, 6, 7, 8, 9], text: 'Winter auf der Südhalbkugel: In Torres del Paine ist es kalt, viele Wege und Hütten sind zu, Flüge nach Puerto Natales gibt es kaum. Die Atacama geht immer – nachts aber unter 0 °C.' },
      { months: [11, 12, 1, 2, 3], text: 'Beste Zeit für Patagonien – aber rechnet mit Sturm: Windböen über 100 km/h sind dort normal.' }
    ]
  },

  cities: {
    fra: { name: 'Unterwegs', loc: 'Frankfurt', py: 'Frankfurt' },
    scl: {
      name: 'Santiago', loc: 'Santiago', py: 'Santiago de Chile', color: ['#1F5E9E', '#7DB2EA'],
      why: `Moderne Hauptstadt vor den schneebedeckten Anden: Märkte, Viertel voller Wandbilder und Weinberge direkt vor der Tür.`,
      stay: `Lastarria oder Bellavista (Cafés, Bars, zentral) – oder Providencia (ruhiger, sehr sicher).`,
      stayTip: `Abends lieber per Uber zurück als lange durch leere Straßen laufen.`,
      move: `Moderne, günstige Metro, dazu Uber, Cabify und DiDi.`,
      arrive: `Vom Flughafen mit Transferbus oder Uber ca. 30–45 Min. ins Zentrum.`,
      prices: [['Budget', '40–70 €'], ['Mittelklasse', '80–140 €'], ['Komfort', 'ab 180 €']]
    },
    valpo: {
      name: 'Valparaíso', loc: 'Valparaíso', py: 'Valparaíso', color: ['#A03B7A', '#E486C2'],
      why: `Hafenstadt auf über 40 Hügeln: bunte Häuser, alte Standseilbahnen, Street Art an jeder Wand und das Haus des Dichters Pablo Neruda.`,
      stay: `Auf den Hügeln Cerro Alegre oder Cerro Concepción – sicher und mit Ausblick.`,
      stayTip: `In der Unterstadt am Hafen nachts nicht herumlaufen.`,
      move: `Zu Fuß, mit den Ascensores (Standseilbahnen) und alten Trolleybussen.`,
      arrive: `Ab Santiago ca. 1,5–2 Std. mit dem Bus.`,
      prices: [['Budget', '35–60 €'], ['Mittelklasse', '70–120 €'], ['Komfort', 'ab 150 €']]
    },
    atac: {
      name: 'Atacama', loc: 'San Pedro', py: 'San Pedro de Atacama', color: ['#C05A1E', '#F29A62'],
      why: `Die trockenste Wüste der Welt: Salzseen mit Flamingos, Geysire bei Sonnenaufgang, ein Mondtal und einer der klarsten Sternenhimmel der Erde.`,
      stay: `Im Wüstenort San Pedro de Atacama, in Hostals und Lodges aus Lehm.`,
      stayTip: `San Pedro liegt auf 2.400 m, Touren gehen bis 4.300 m: die ersten Tage langsam machen und viel trinken.`,
      move: `Die Highlights erreicht man mit organisierten Touren, Leihrädern oder Mietwagen.`,
      arrive: `Flug nach Calama, dann ca. 1,5 Std. mit dem Transferbus nach San Pedro.`,
      prices: [['Budget', '40–70 €'], ['Mittelklasse', '90–160 €'], ['Komfort', 'ab 250 €']]
    },
    pat: {
      name: 'Patagonien', loc: 'Torres del Paine', py: 'Puerto Natales', color: ['#1C7A73', '#5CC7BE'],
      why: `Granittürme, türkise Seen, Gletscher und Guanakos – einer der schönsten Nationalparks der Welt.`,
      stay: `In Puerto Natales (günstiger, Tagestouren) oder in Hütten und Lodges im Park.`,
      stayTip: `Refugios und Campingplätze im Park sind im Sommer Monate vorher ausgebucht.`,
      move: `Busse von Puerto Natales zum Park, im Park Katamaran und Shuttles.`,
      arrive: `Flug nach Puerto Natales (nur im Sommer) oder Punta Arenas, dann Bus.`,
      prices: [['Budget', '45–80 €'], ['Mittelklasse', '100–180 €'], ['Komfort', 'ab 300 €']]
    },
    pv: {
      name: 'Seenregion', loc: 'Puerto Varas', py: 'Puerto Varas', color: ['#4E7A2B', '#9BCB6E'],
      why: `Kegelvulkane über Seen, Wasserfälle und Holzhäuser deutscher Einwanderer – mit Kuchen wie bei Oma.`,
      stay: `In Puerto Varas am Llanquihue-See mit Blick auf den Vulkan Osorno.`,
      stayTip: `Kuchen heißt hier tatsächlich „Kuchen“ – die Siedler kamen im 19. Jahrhundert aus Deutschland.`,
      move: `Mietwagen oder Touren zu Vulkan, Wasserfällen und zur Insel Chiloé.`,
      arrive: `Flug nach Puerto Montt, dann ca. 25 Min. nach Puerto Varas.`,
      prices: [['Budget', '40–65 €'], ['Mittelklasse', '80–140 €'], ['Komfort', 'ab 180 €']]
    },
    any: { name: 'Überall', loc: '', py: '' }
  },

  /* c = Ort, cat = Kategorien, v = Verrückt-Faktor 0–3, d = Dauer in Std., p = Preis p. P. in CLP,
     pt = Preistext, w = übliche Tageszeit (0 Früh … 5 Ganztags), closed/only = Wochentage (0 = So) */
  activities: [
    // ---------- Transfers ----------
    { id: 't-fra-scl', c: 'fra', t: 'Flug Frankfurt → Santiago', cat: ['transport'], v: 0, d: 17, p: 0, pt: 'hin und zurück ca. 900–1.400 €', w: 4, mode: 'flug', dshort: '17 Std.', taxi: false,
      desc: `Kein Direktflug: mit einem Umstieg, z. B. in Madrid, Paris oder São Paulo, insgesamt ca. 16–20 Std. Chile liegt je nach Jahreszeit 4–6 Std. hinter Deutschland.`,
      tip: `Keine Lebensmittel einpacken: Chile kontrolliert bei der Einreise streng und verhängt Bußgelder für Obst, Wurst oder Käse.` },
    { id: 't-scl-valpo', c: 'valpo', t: 'Bus Santiago → Valparaíso', loc: 'Terminal Alameda', cat: ['transport'], v: 0, d: 2, p: 5000, pt: 'ca. 4.000–7.000 CLP', w: 1, mode: 'bus', dshort: '1½ Std.',
      desc: `Busse von Turbus und Pullman fahren oft und günstig ab dem Terminal Alameda.`,
      tip: `Unterwegs liegt das Weintal Casablanca – mit Mietwagen lohnt sich ein Stopp.` },
    { id: 't-valpo-cja', c: 'atac', t: 'Flug Santiago → Calama', cat: ['transport'], v: 0, d: 5, p: 70000, pt: 'ca. 50.000–120.000 CLP', w: 1, mode: 'flug', dshort: '2 Std.', taxi: false,
      desc: `Von Valparaíso zurück zum Flughafen Santiago (ca. 1,5 Std.), dann 2 Std. nach Calama und mit dem Transfer nach San Pedro.`,
      tip: `Billigflieger wie Sky und JetSMART berechnen Gepäck extra – beim Buchen gleich dazubuchen.` },
    { id: 't-cja-pnt', c: 'pat', t: 'Flug Calama → Puerto Natales', cat: ['transport'], v: 0, d: 8, p: 150000, pt: 'ca. 100.000–250.000 CLP', w: 1, mode: 'flug', dshort: '6 Std.', taxi: false,
      desc: `Mit Umstieg in Santiago in den äußersten Süden – rund 3.500 km Luftlinie.`,
      tip: `Puerto Natales wird nur im Sommer angeflogen, sonst nach Punta Arenas und ca. 3 Std. Bus.` },
    { id: 't-pnt-pmc', c: 'pv', t: 'Flug Patagonien → Puerto Montt', cat: ['transport'], v: 0, d: 4, p: 90000, pt: 'ca. 60.000–150.000 CLP', w: 1, mode: 'flug', dshort: '2½ Std.', taxi: false,
      desc: `Nach Norden in die Seenregion – je nach Saison direkt oder mit Umstieg in Punta Arenas oder Santiago.`,
      tip: `Bei klarem Wetter seht ihr unterwegs das Südliche Eisfeld.` },
    { id: 't-pmc-scl', c: 'scl', t: 'Flug Puerto Montt → Santiago', cat: ['transport'], v: 0, d: 3, p: 60000, pt: 'ca. 40.000–100.000 CLP', w: 1, mode: 'flug', dshort: '2 Std.', taxi: false,
      desc: `Zurück in die Hauptstadt, ca. 1 Std. 45 Min.`,
      tip: `Danach eine letzte Nacht in Santiago – Langstreckenflüge gehen meist nachmittags oder abends.` },
    { id: 't-scl-fra', c: 'fra', t: 'Rückflug Santiago → Frankfurt', cat: ['transport'], v: 0, d: 17, p: 0, pt: 'im Flugpreis enthalten', w: 3, mode: 'flug', dshort: '17 Std.', taxi: false,
      desc: `Mit Umstieg zurück nach Frankfurt, Ankunft am nächsten Tag.`,
      tip: `Pisco und chilenischen Wein gibt es im Duty-free günstig.` },

    // ---------- Santiago ----------
    { id: 'scl-sancristobal', c: 'scl', t: 'Cerro San Cristóbal', loc: 'Cerro San Cristóbal', cat: ['klassiker'], v: 0, d: 2.5, p: 5000, pt: 'Bahn ca. 3.000–6.000 CLP', w: 3,
      desc: `Stadtberg mit Marienstatue, hoch per Standseilbahn oder Gondel – Blick über die Stadt auf die Anden.`,
      tip: `Oben Mote con huesillo trinken: Pfirsichsaft mit Weizen und getrocknetem Pfirsich.` },
    { id: 'scl-lastarria', c: 'scl', t: 'Lastarria & Bellavista', loc: 'Barrio Lastarria', cat: ['chill', 'nacht'], v: 0, d: 3, p: 0, w: 4,
      desc: `Künstlerviertel mit Cafés, Kinos, Bars und Weinbars – abends der beste Ort für Pisco Sour.`,
      tip: `In Bellavista liegt auch La Chascona, eines der Häuser von Pablo Neruda.` },
    { id: 'scl-centro', c: 'scl', t: 'Plaza de Armas & Mercado Central', loc: 'Mercado Central', cat: ['klassiker', 'essen'], v: 0, d: 2.5, p: 15000, w: 1,
      desc: `Die Altstadt rund um Kathedrale und Plaza de Armas, dazu die Markthalle mit Fischrestaurants unter einem gusseisernen Dach aus Großbritannien.`,
      tip: `Lieber eines der kleinen Lokale am Rand als die Schlepper-Restaurants in der Mitte.` },
    { id: 'scl-memory', c: 'scl', t: 'Museo de la Memoria', loc: 'Museo de la Memoria y los Derechos Humanos', cat: ['kultur'], v: 0, d: 2, p: 0, pt: 'gratis', w: 3, closed: [1],
      desc: `Bewegendes Museum über die Militärdiktatur 1973–1990.`,
      tip: `Montags geschlossen. Audioguide auf Englisch nehmen.` },
    { id: 'scl-sky', c: 'scl', t: 'Sky Costanera', loc: 'Sky Costanera', cat: ['klassiker'], v: 0, d: 1.5, p: 20000, pt: 'ca. 18.000–22.000 CLP', w: 4,
      desc: `Aussichtsdeck auf 300 m im höchsten Gebäude Lateinamerikas.`,
      tip: `Zum Sonnenuntergang, wenn die Anden rosa leuchten.` },
    { id: 'scl-terremoto', c: 'scl', t: 'Terremoto in La Piojera', loc: 'La Piojera', cat: ['essen', 'verrueckt', 'nacht'], v: 3, d: 1.5, p: 4000, w: 4,
      desc: `Das „Erdbeben“: süßer Weißwein mit Ananas-Eis und Grenadine. In der Kultkneipe La Piojera. Nach dem zweiten kommt das „Nachbeben“.`,
      tip: `Wirkt stärker, als es schmeckt.` },
    { id: 'scl-vega', c: 'scl', t: 'La Vega Central', loc: 'La Vega Central', cat: ['essen'], v: 1, d: 1.5, p: 3000, w: 0,
      desc: `Riesiger Obst- und Gemüsemarkt, laut und bunt – mit billigen Garküchen.`,
      tip: `Wertsachen eng am Körper tragen.` },
    { id: 'scl-wine', c: 'scl', t: 'Weingut im Maipo-Tal', loc: 'Viña Concha y Toro', cat: ['essen', 'ausflug'], v: 1, d: 5, p: 35000, pt: 'Tour mit Verkostung ca. 25.000–50.000 CLP', w: 3,
      desc: `Weinberge am Stadtrand – mit Carménère und dem Keller des „Casillero del Diablo“.`,
      tip: `Mit der Metro bis Las Mercedes und dann kurz mit dem Taxi.` },
    { id: 'scl-completo', c: 'scl', t: 'Completo & Sopaipillas', loc: 'Completo', cat: ['essen', 'verrueckt'], v: 1, d: 0.5, p: 3500, w: 2, taxi: false,
      desc: `Chiles Hotdog, begraben unter Avocado, Tomate und Mayo. Dazu frittierte Kürbisfladen vom Straßenstand.`,
      tip: `Die Imbisskette Dominó ist ein Klassiker.` },
    { id: 'scl-cajon', c: 'scl', t: 'Cajón del Maipo', loc: 'Cajón del Maipo', cat: ['natur', 'ausflug'], v: 1, d: 10, p: 50000, pt: 'Tour ca. 40.000–70.000 CLP', w: 5,
      desc: `Andenschlucht 1,5 Std. von Santiago: der türkise Stausee El Yeso, heiße Quellen und Wanderungen zum Gletscher El Morado.`,
      tip: `Die Straße ist rau – eine Tour ist einfacher als selbst fahren.` },

    // ---------- Valparaíso ----------
    { id: 'valpo-cerros', c: 'valpo', t: 'Cerro Alegre & Concepción', loc: 'Cerro Alegre', cat: ['klassiker', 'kultur'], v: 0, d: 3, p: 0, w: 1,
      desc: `Steile Gassen voller Wandbilder, Treppen in Regenbogenfarben und Aussichtsterrassen über dem Hafen.`,
      tip: `Paseo Gervasoni und Paseo Atkinson haben die schönsten Blicke.` },
    { id: 'valpo-ascensor', c: 'valpo', t: 'Fahrt mit den Ascensores', loc: 'Ascensor Reina Victoria', cat: ['verrueckt'], v: 1, d: 1, p: 300, pt: 'ca. 100–300 CLP pro Fahrt', w: 3,
      desc: `Über hundert Jahre alte Standseilbahnen ruckeln die Hügel hinauf.`,
      tip: `Bargeld in Münzen bereithalten.` },
    { id: 'valpo-tour', c: 'valpo', t: 'Street-Art-Rundgang', loc: 'Plaza Sotomayor', cat: ['kultur'], v: 0, d: 2.5, p: 10000, pt: 'auf Trinkgeldbasis', w: 1,
      desc: `Geführte Runde durch die Wandbilder – die Guides arbeiten für Trinkgeld.`,
      tip: `Treffpunkt meist an der Plaza Sotomayor, vorher online anmelden.` },
    { id: 'valpo-neruda', c: 'valpo', t: 'La Sebastiana (Haus von Neruda)', loc: 'La Sebastiana', cat: ['kultur'], v: 0, d: 1.5, p: 8000, w: 3, closed: [1],
      desc: `Das verwinkelte Haus des Nobelpreisträgers voller Schiffskitsch, mit Blick über die Bucht.`,
      tip: `Montags geschlossen.` },
    { id: 'valpo-chorrillana', c: 'valpo', t: 'Chorrillana essen', loc: 'J. Cruz', cat: ['essen', 'verrueckt'], v: 1, d: 1.5, p: 12000, w: 4,
      desc: `Ein Berg Pommes mit Rindfleisch, Zwiebeln und Spiegeleiern – zum Teilen. Angeblich in Valparaíso erfunden.`,
      tip: `Eine Portion reicht locker für zwei.` },
    { id: 'valpo-vina', c: 'valpo', t: 'Viña del Mar', loc: 'Viña del Mar', cat: ['chill'], v: 0, d: 3, p: 0, w: 3,
      desc: `Die schicke Nachbarstadt mit Strand, Blumenuhr und Casino, 15 Min. mit der Vorortbahn.`,
      tip: `Im Sommer voll, sonst angenehm zum Spazieren.` },

    // ---------- Atacama ----------
    { id: 'atac-luna', c: 'atac', t: 'Valle de la Luna', loc: 'Valle de la Luna', cat: ['klassiker', 'natur'], v: 1, d: 4, p: 10000, w: 4,
      desc: `Salzkrusten, Sanddünen und zerklüftete Felsen wie auf dem Mond. Zum Sonnenuntergang färbt sich alles rot.`,
      tip: `Mit dem Rad selbst hin oder per Tour. Eintritt vorab online reservieren.` },
    { id: 'atac-tatio', c: 'atac', t: 'Geysire El Tatio', loc: 'Géiseres del Tatio', cat: ['klassiker', 'natur', 'verrueckt'], v: 2, d: 6, p: 45000, pt: 'Tour ca. 35.000–60.000 CLP', w: 0,
      desc: `Eines der höchsten Geysirfelder der Welt auf 4.300 m. Abfahrt um 4:30 Uhr, bei −10 °C dampfen die Fontänen in der Morgensonne.`,
      tip: `Sehr warm anziehen. Im Thermalbecken kann man danach baden – Badehose drunter!` },
    { id: 'atac-cejar', c: 'atac', t: 'Schweben in der Laguna Cejar', loc: 'Laguna Cejar', cat: ['verrueckt', 'natur'], v: 2, d: 4, p: 35000, pt: 'Tour ca. 30.000–45.000 CLP', w: 3,
      desc: `Salziger als das Tote Meer: Man treibt wie ein Korken. Danach Sonnenuntergang an den Ojos del Salar.`,
      tip: `Nicht tauchen und keine Augen reiben – das Salz brennt.` },
    { id: 'atac-lagoons', c: 'atac', t: 'Altiplano-Lagunen & Flamingos', loc: 'Lagunas Altiplánicas', cat: ['natur'], v: 1, d: 9, p: 55000, pt: 'Tour ca. 45.000–70.000 CLP', w: 5,
      desc: `Tiefblaue Lagunen Miscanti und Miñiques auf 4.100 m, dazu Flamingos in der Salzwüste Salar de Atacama.`,
      tip: `Erst nach ein, zwei Tagen in San Pedro machen – wegen der Höhe.` },
    { id: 'atac-stars', c: 'atac', t: 'Sternenbeobachtung', loc: 'Tour astronómico', cat: ['natur', 'verrueckt'], v: 1, d: 2.5, p: 35000, w: 4,
      desc: `Einer der klarsten Himmel der Erde – mit Teleskopen Saturnringe, Nebel und die Magellanschen Wolken sehen.`,
      tip: `Rund um Vollmond lohnt es sich weniger – Termin danach wählen.` },
    { id: 'atac-sandboard', c: 'atac', t: 'Sandboarden im Todestal', loc: 'Valle de la Muerte', cat: ['verrueckt'], v: 2, d: 3, p: 25000, w: 1,
      desc: `Mit dem Brett die Dünen hinunter. Zurück hoch muss man laufen.`,
      tip: `Früh am Morgen, bevor es heiß wird.` },
    { id: 'atac-rainbow', c: 'atac', t: 'Valle del Arcoíris', loc: 'Valle del Arcoíris', cat: ['natur'], v: 1, d: 5, p: 30000, w: 1,
      desc: `Hügel in Rot, Grün, Gelb und Violett, dazu Felszeichnungen in Yerbas Buenas.`,
      tip: `Halbtagestour, gut mit dem Sonnenuntergang im Mondtal kombinierbar.` },
    { id: 'atac-uyuni', c: 'atac', t: 'Salar de Uyuni (Bolivien)', loc: 'Salar de Uyuni', cat: ['ausflug', 'verrueckt'], v: 2, d: 72, pt: 'Tour ca. 200–350 €', w: 5, taxi: false,
      desc: `Die größte Salzwüste der Welt liegt in Bolivien – Touren über 3–4 Tage starten in San Pedro.`,
      tip: `Grenzübertritt, einfache Unterkünfte auf über 4.000 m, eisige Nächte. Braucht 3–4 Extra-Tage.` },

    // ---------- Patagonien ----------
    { id: 'pat-natales', c: 'pat', t: 'Puerto Natales am Fjord', loc: 'Puerto Natales', cat: ['chill'], v: 0, d: 2, p: 0, w: 4,
      desc: `Kleiner Hafenort am Fjord Última Esperanza mit Outdoor-Läden, Craft-Bier und Lammbraten.`,
      tip: `Hier Ausrüstung leihen, falls etwas fehlt.` },
    { id: 'pat-park', c: 'pat', t: 'Panoramatour Torres del Paine', loc: 'Parque Nacional Torres del Paine', cat: ['klassiker', 'natur'], v: 0, d: 10, p: 49000, pt: 'Parkticket ca. 34.000–49.000 CLP + Tour', w: 5,
      desc: `Rundfahrt durch den Park: Salto Grande, Lago Pehoé, die Cuernos und Guanakos am Straßenrand.`,
      tip: `Das Parkticket gibt es nur online im Voraus, im Dezember und Januar schnell ausverkauft.`,
      book: 'Parkticket auf pasesparques.cl' },
    { id: 'pat-torres', c: 'pat', t: 'Wanderung zur Base de las Torres', loc: 'Mirador Base Las Torres', cat: ['klassiker', 'natur', 'verrueckt'], v: 2, d: 10, p: 0, pt: 'im Parkticket', w: 5,
      desc: `Der Klassiker: 20 km und rund 900 Höhenmeter zu den drei Granittürmen über einem Gletschersee. Die letzte Stunde geht über Geröll.`,
      tip: `Früh starten. Wind und Wetter wechseln stündlich – Schichten mitnehmen.` },
    { id: 'pat-grey', c: 'pat', t: 'Grey-Gletscher per Boot', loc: 'Glaciar Grey', cat: ['natur'], v: 1, d: 4, p: 95000, pt: 'ca. 80.000–110.000 CLP', w: 3,
      desc: `Mit dem Katamaran zwischen Eisbergen bis an die Abbruchkante des Grey-Gletschers.`,
      tip: `Bei Sturm fällt das Boot aus – Puffer einplanen.` },
    { id: 'pat-wtrek', c: 'pat', t: 'W-Trek (4–5 Tage)', loc: 'Circuito W', cat: ['natur', 'verrueckt'], v: 2, d: 96, pt: 'Hütten ca. 100–250 € pro Nacht', w: 5, taxi: false,
      desc: `Der berühmte Mehrtages-Trek durch den Park, mit Übernachtungen in Hütten oder Zelten.`,
      tip: `Hütten und Zeltplätze Monate vorher buchen. Braucht 4–5 Tage im Park.` },
    { id: 'pat-milodon', c: 'pat', t: 'Milodon-Höhle', loc: 'Cueva del Milodón', cat: ['natur', 'verrueckt'], v: 1, d: 2, p: 10000, w: 1,
      desc: `Riesige Höhle, in der Reste eines ausgestorbenen Riesenfaultiers gefunden wurden – davor steht eine lebensgroße Figur.`,
      tip: `Liegt nur 25 km von Puerto Natales.` },
    { id: 'pat-cordero', c: 'pat', t: 'Patagonisches Lamm vom Feuer', loc: 'Cordero al palo', cat: ['essen', 'klassiker'], v: 1, d: 2, p: 25000, w: 4, taxi: false,
      desc: `Ein ganzes Lamm am Kreuz, stundenlang neben dem offenen Feuer gegart.`,
      tip: `Dazu ein Calafate Sour – Pisco Sour mit Beeren aus Patagonien.` },
    { id: 'pat-puma', c: 'pat', t: 'Puma-Tracking', loc: 'Puma tracking', cat: ['natur', 'verrueckt'], v: 2, d: 8, p: 220000, pt: 'ca. 150.000–300.000 CLP', w: 0,
      desc: `Mit spezialisierten Guides auf Pumasuche – Torres del Paine hat eine der höchsten Pumadichten der Welt.`,
      tip: `Beste Chancen im Herbst und Winter, früh am Morgen.` },
    { id: 'pat-penguins', c: 'pat', t: 'Pinguine bei Punta Arenas', loc: 'Isla Magdalena', cat: ['ausflug', 'natur'], v: 1, d: 8, p: 80000, w: 5,
      desc: `Zehntausende Magellanpinguine auf einer Insel in der Magellanstraße.`,
      tip: `Nur etwa Oktober bis März, ab Punta Arenas.` },

    // ---------- Seenregion ----------
    { id: 'pv-kuchen', c: 'pv', t: 'Kuchen in Frutillar', loc: 'Frutillar', cat: ['essen', 'kultur'], v: 1, d: 3, p: 8000, w: 3,
      desc: `Deutsch geprägtes Dorf am See mit Holzhäusern, einem Konzerthaus auf Pfählen im Wasser und Kuchen wie bei Oma.`,
      tip: `Das Freilichtmuseum der deutschen Einwanderer liegt oben im Ort.` },
    { id: 'pv-osorno', c: 'pv', t: 'Vulkan Osorno', loc: 'Volcán Osorno', cat: ['klassiker', 'natur'], v: 1, d: 5, p: 25000, pt: 'Sessellift ca. 20.000–30.000 CLP', w: 1,
      desc: `Der perfekte Kegelvulkan: per Straße und Sessellift bis zur Schneegrenze, unten Lavafelder und Blick über die Seen.`,
      tip: `Nur bei klarem Wetter hochfahren – sonst seht ihr nur Wolken.` },
    { id: 'pv-petrohue', c: 'pv', t: 'Saltos del Petrohué', loc: 'Saltos del Petrohué', cat: ['natur'], v: 0, d: 2, p: 8000, w: 3,
      desc: `Türkises Wasser schießt über schwarzen Lavafels, dahinter der Vulkan Osorno.`,
      tip: `Liegt auf dem Weg zum Lago Todos los Santos.` },
    { id: 'pv-lake', c: 'pv', t: 'Lago Todos los Santos', loc: 'Lago Todos los Santos', cat: ['natur', 'chill'], v: 0, d: 3, p: 30000, w: 3,
      desc: `Smaragdgrüner See zwischen drei Vulkanen, mit Bootsfahrt ab Petrohué.`,
      tip: `Bei gutem Wetter einer der schönsten Orte Chiles.` },
    { id: 'pv-curanto', c: 'pv', t: 'Curanto: Erdofen-Essen', loc: 'Curanto', cat: ['essen', 'verrueckt'], v: 2, d: 2, p: 15000, w: 4,
      desc: `Muscheln, Fleisch, Würste und Kartoffelfladen, auf heißen Steinen in einem Erdloch gegart und mit Blättern abgedeckt.`,
      tip: `Ursprünglich von der Insel Chiloé – dort am authentischsten.` },
    { id: 'pv-chiloe', c: 'pv', t: 'Insel Chiloé', loc: 'Castro', cat: ['ausflug', 'kultur'], v: 1, d: 10, p: 30000, w: 5,
      desc: `Holzkirchen (UNESCO), bunte Stelzenhäuser in Castro und Legenden von Geisterschiffen.`,
      tip: `Mit der Fähre über den Kanal von Chacao, als lange Tagestour oder mit Übernachtung.` },
    { id: 'pv-rafting', c: 'pv', t: 'Rafting auf dem Petrohué', loc: 'Río Petrohué', cat: ['verrueckt', 'natur'], v: 2, d: 4, p: 40000, w: 3,
      desc: `Wildwasser vor Vulkankulisse – auch für Anfänger geeignet.`,
      tip: `Neoprenanzug wird gestellt, das Wasser ist eiskalt.` },

    // ---------- Überall ----------
    { id: 'any-pisco', c: 'any', t: 'Pisco Sour', loc: 'Pisco Sour', cat: ['essen', 'nacht'], v: 1, d: 1, p: 6000, w: 4, taxi: false,
      desc: `Traubenschnaps mit Limette, Zucker und Eiweiß. Chile und Peru streiten, wer ihn erfunden hat.`,
      tip: `Vorsicht: Die Gläser sind groß und der Pisco stark.` },
    { id: 'any-empanada', c: 'any', t: 'Empanadas de pino', loc: 'Empanada de pino', cat: ['essen'], v: 0, d: 0.5, p: 3000, w: 2, taxi: false,
      desc: `Gefüllte Teigtaschen mit Hackfleisch, Zwiebeln, Ei und Olive – frisch aus dem Ofen.`,
      tip: `Sonntags kaufen Familien sie massenweise in Bäckereien.` },
    { id: 'any-once', c: 'any', t: 'Once: chilenische Teezeit', loc: 'Once', cat: ['essen', 'kultur'], v: 0, d: 1.5, p: 8000, w: 3, taxi: false,
      desc: `Am frühen Abend Tee oder Kaffee mit Brot, Avocado, Käse und Kuchen – oft statt Abendessen.`,
      tip: `Mit Chilenen „tomar once“ ist eine schöne Einladung.` }
  ],

  /* Vorgeschlagener Plan: [Aktivität, Tageszeit] */
  defaultPlan: [
    { city: 'fra', items: [['t-fra-scl', 4]] },
    { city: 'scl', items: [['scl-sancristobal', 3], ['scl-lastarria', 4], ['any-pisco', 4]] },
    { city: 'scl', items: [['scl-centro', 1], ['scl-memory', 3], ['scl-sky', 4], ['scl-terremoto', 4]] },
    { city: 'valpo', items: [['t-scl-valpo', 1], ['valpo-cerros', 3], ['valpo-ascensor', 3], ['valpo-chorrillana', 4]] },
    { city: 'atac', items: [['t-valpo-cja', 1], ['atac-luna', 4]] },
    { city: 'atac', items: [['atac-tatio', 0], ['atac-cejar', 3]] },
    { city: 'atac', items: [['atac-lagoons', 5], ['atac-stars', 4]] },
    { city: 'pat', items: [['t-cja-pnt', 1], ['pat-natales', 4]] },
    { city: 'pat', items: [['pat-park', 5]] },
    { city: 'pat', items: [['pat-torres', 5]] },
    { city: 'pat', items: [['pat-milodon', 1], ['pat-cordero', 4]] },
    { city: 'pv', items: [['t-pnt-pmc', 1], ['pv-kuchen', 3]] },
    { city: 'pv', items: [['pv-osorno', 1], ['pv-petrohue', 3], ['pv-lake', 3], ['pv-curanto', 4]] },
    { city: 'scl', items: [['t-pmc-scl', 1], ['scl-completo', 2], ['scl-wine', 3]] },
    { city: 'fra', items: [['t-scl-fra', 3]] }
  ],

  tickets: {
    't-fra-scl': { from: ['Frankfurt', 'FRA'], to: ['Santiago', 'SCL'], label: 'Flug, 1 Umstieg' },
    't-scl-valpo': { from: ['Santiago', 'Terminal Alameda'], to: ['Valparaíso', 'Busbahnhof'], label: 'Bus' },
    't-valpo-cja': { from: ['Santiago', 'SCL'], to: ['Calama', 'CJC'], label: 'Flug' },
    't-cja-pnt': { from: ['Calama', 'CJC'], to: ['Puerto Natales', 'PNT'], label: 'Flug, 1 Umstieg' },
    't-pnt-pmc': { from: ['Puerto Natales', 'PNT'], to: ['Puerto Montt', 'PMC'], label: 'Flug' },
    't-pmc-scl': { from: ['Puerto Montt', 'PMC'], to: ['Santiago', 'SCL'], label: 'Flug' },
    't-scl-fra': { from: ['Santiago', 'SCL'], to: ['Frankfurt', 'FRA'], label: 'Flug, 1 Umstieg' }
  },

  /* Ø Tageshöchstwerte in °C, gerundet */
  weather: {
    scl: [30, 30, 28, 23, 19, 15, 15, 17, 19, 23, 26, 29],
    valpo: [22, 22, 21, 19, 17, 15, 15, 15, 16, 17, 19, 21],
    atac: [28, 27, 27, 25, 22, 20, 20, 22, 23, 25, 26, 27],
    pat: [15, 15, 13, 10, 7, 4, 4, 5, 8, 11, 13, 15],
    pv: [22, 22, 20, 16, 13, 11, 10, 11, 13, 15, 18, 20]
  },

  prep: [
    { id: 'p-flug', off: -180, t: 'Langstreckenflug buchen', d: '8–9 Monate vorher ist oft am günstigsten. Hin und zurück über Santiago.' },
    { id: 'p-pass', off: -120, t: 'Reisepass prüfen', d: 'Muss für die ganze Reise gültig sein. Deutsche dürfen bis zu 90 Tage ohne Visum bleiben.' },
    { id: 'p-paine', off: -120, t: 'Torres del Paine: Unterkunft und Parkticket', d: 'Hotels und Hütten in der Hochsaison 4–6 Monate vorher. Das Parkticket gibt es online auf pasesparques.cl.' },
    { id: 'p-domestic', off: -120, t: 'Inlandsflüge buchen', d: 'LATAM, Sky oder JetSMART. Gepäck bei Billigfliegern dazubuchen.' },
    { id: 'p-hotel', off: -90, t: 'Restliche Hotels buchen', d: 'In San Pedro und Puerto Varas gibt es viele kleine Lodges – früh sind die besten frei.' },
    { id: 'p-ins', off: -30, t: 'Auslandskrankenversicherung', d: 'Private Kliniken sind gut, aber teuer.' },
    { id: 'p-tours', off: -14, t: 'Touren in der Atacama reservieren', d: 'Geysire, Lagunen, Sterne – bei kleinen Anbietern mit guten Bewertungen.' },
    { id: 'p-esim', off: -14, t: 'eSIM besorgen', d: 'Eine Daten-eSIM oder Entel vor Ort. In Patagonien oft kein Netz.' },
    { id: 'p-apps', off: -14, t: 'Apps installieren', d: 'Uber, Cabify, Google Maps offline, Übersetzer mit Spanisch.' },
    { id: 'p-elefand', off: -10, t: 'In Elefand eintragen', d: 'Die Krisenvorsorgeliste des Auswärtigen Amts.' },
    { id: 'p-cash', off: -2, t: 'Etwas Bargeld', d: 'Pesos am Automaten holen – viele Automaten berechnen ausländischen Karten eine hohe Gebühr, also lieber seltener und mehr abheben.' },
    { id: 'p-addr', off: -2, t: 'Hoteladressen speichern', d: 'Unter „Tage“ beim Hotel eintragen – dann gibt es dafür eine Taxi-Karte.' },
    { id: 'p-food', off: -1, t: 'Keine Lebensmittel einpacken', d: 'Chile kontrolliert bei der Einreise streng: Obst, Wurst, Käse und Honig nicht mitnehmen oder deklarieren.' }
  ],

  packing: [
    'Reisepass (plus Foto davon in der Cloud)',
    'Zwei Kreditkarten (Visa und Mastercard)',
    'Eurostecker passen meist, ein Adapter schadet nicht',
    'Eingelaufene Wanderschuhe',
    'Winddichte Jacke und Regenhose für Patagonien',
    'Fleece oder Daunenjacke – Geysire bei −10 °C',
    'Mütze und Handschuhe',
    'Sonnencreme LSF 50 und Sonnenbrille',
    'Badehose (Geysir-Becken, Laguna Cejar)',
    'Trinkflasche',
    'Reiseapotheke: Höhenkopfschmerz, Magen, Blasenpflaster',
    'Stirnlampe',
    'Tagesrucksack mit Regenhülle',
    'Ein paar Brocken Spanisch'
  ],

  phrases: [
    ['Hola', 'ola', 'Hallo'],
    ['Gracias', 'grassias', 'Danke'],
    ['¿Cuánto cuesta?', 'kuanto kuesta?', 'Was kostet das?'],
    ['La cuenta, por favor', 'la kuenta, por fawor', 'Die Rechnung, bitte'],
    ['¿Dónde está el baño?', 'donde esta el banjo?', 'Wo ist die Toilette?'],
    ['Por favor, lléveme a esta dirección', 'por fawor, jeweme a esta direksion', 'Bitte fahren Sie mich hierhin'],
    ['Una mesa para dos', 'una mesa para dos', 'Ein Tisch für zwei'],
    ['Somos de Alemania', 'somos de alemanja', 'Wir kommen aus Deutschland'],
    ['¿Se puede pagar con tarjeta?', 'se puede pagar kon tarcheta?', 'Kann ich mit Karte zahlen?'],
    ['Sin picante, por favor', 'sin pikante, por fawor', 'Nicht scharf, bitte'],
    ['¡Salud!', 'salud!', 'Prost!'],
    ['¡Qué rico!', 'ke riko!', 'Lecker!'],
    ['¿Cachai?', 'katschai?', 'Verstehst du? (typisch chilenisch)'],
    ['¡Bacán!', 'bakan!', 'Super! (chilenisch)']
  ],

  tips: [
    { id: 'visum', title: 'Einreise & Visum', html: `
      <p>Deutsche dürfen <strong>bis zu 90 Tage ohne Visum</strong> nach Chile.</p>
      <ul>
        <li>Pass für die ganze Reise gültig. Bei der Einreise bekommt ihr eine Touristenkarte (PDI) – gut aufheben, sie spart Steuer im Hotel.</li>
        <li><strong>Lebensmittelkontrolle:</strong> Chile ist streng. Keine frischen Lebensmittel mitnehmen, die Erklärung ehrlich ausfüllen – sonst drohen hohe Bußgelder.</li>
      </ul>
      <p><a href="https://www.auswaertiges-amt.de" target="_blank" rel="noopener">Auswärtiges Amt</a> – dort unter „Reise- und Sicherheitshinweise“ Chile wählen.</p>` },
    { id: 'geld', title: 'Geld & Bezahlen', html: `
      <ul>
        <li>Die Währung ist der chilenische Peso (CLP). Faustregel: 1 € ≈ 1.100 CLP. Den Kurs könnt ihr unter „Route“ anpassen.</li>
        <li>Karten gehen fast überall, auch kontaktlos.</li>
        <li>Automaten berechnen ausländischen Karten oft eine hohe Gebühr – seltener und mehr abheben.</li>
        <li><strong>Hotel-Tipp:</strong> Ausländische Touristen müssen auf Hotelrechnungen keine 19 % Mehrwertsteuer zahlen, wenn sie mit ausländischer Karte oder in Dollar zahlen und Pass plus Touristenkarte zeigen.</li>
        <li>Im Restaurant wird gefragt, ob 10 % Trinkgeld („propina“) auf die Rechnung sollen – das ist üblich.</li>
      </ul>` },
    { id: 'unterwegs', title: 'Unterwegs', html: `
      <ul>
        <li>Die Entfernungen sind riesig: Inlandsflüge mit LATAM, Sky oder JetSMART sparen Tage.</li>
        <li>Fernbusse sind komfortabel, nachts mit „Cama“-Liegesitzen.</li>
        <li>In Santiago: Metro mit der bip!-Karte, dazu Uber, Cabify und DiDi.</li>
        <li>In Patagonien und der Atacama fahren Touren- und Shuttlebusse – Mietwagen ist flexibler, aber teuer.</li>
      </ul>` },
    { id: 'internet', title: 'Internet & Apps', html: `
      <ul>
        <li>Nichts ist gesperrt. WhatsApp ist das wichtigste Kommunikationsmittel – auch für Hotels und Touren.</li>
        <li>Daten-eSIM oder lokale SIM (Entel hat die beste Abdeckung im Süden).</li>
        <li>In Torres del Paine und in der Wüste gibt es oft kein Netz – Offline-Karten laden.</li>
      </ul>
      <p>Diese Seite funktioniert nach dem ersten Öffnen auch offline.</p>` },
    { id: 'essen', title: 'Essen & Trinken', html: `
      <ul>
        <li>Empanadas, Completos, Pastel de choclo (Mais-Auflauf), Cazuela (Eintopf), viel Fisch und Meeresfrüchte.</li>
        <li>Getränke: Pisco Sour, Carménère-Rotwein, Mote con huesillo.</li>
        <li>Abendessen gibt es spät, ab ca. 21 Uhr. Am frühen Abend: „Once“ mit Brot und Tee.</li>
        <li>Leitungswasser ist in den Städten meist trinkbar, in der Atacama lieber Flaschenwasser.</li>
      </ul>` },
    { id: 'knigge', title: 'Alltag & Knigge', html: `
      <ul>
        <li>Zur Begrüßung gibt es unter Bekannten einen Wangenkuss, Männer untereinander Handschlag.</li>
        <li>Chilenisches Spanisch ist schnell und voller Slang – nachfragen ist okay.</li>
        <li>Pünktlichkeit wird locker gesehen, Touren starten aber pünktlich.</li>
      </ul>` },
    { id: 'sicherheit', title: 'Sicherheit', html: `
      <p>Chile gilt als eines der sichersten Reiseländer Südamerikas. Taschendiebstahl ist trotzdem häufig.</p>
      <ul>
        <li>In Santiago im Zentrum und in der Metro, in Valparaíso in der Unterstadt am Hafen auf Wertsachen achten.</li>
        <li>Handy nicht offen am Straßenrand halten – es wird gern im Vorbeigehen entrissen.</li>
        <li>Demonstrationen meiden.</li>
        <li>Chile hat viele Erdbeben: Tsunami-Evakuierungsschilder an der Küste beachten.</li>
        <li>In Patagonien: Wind und Wetter nicht unterschätzen, nur auf markierten Wegen gehen.</li>
      </ul>` },
    { id: 'wetter', title: 'Reisezeit & Wetter', html: `
      <p><strong>Beste Zeit: November bis März</strong> – dann ist Sommer auf der Südhalbkugel und Patagonien zugänglich. Die Atacama geht das ganze Jahr.</p>
      <ul>
        <li>Januar und Februar sind Hauptsaison, teuer und voll.</li>
        <li>In der Atacama ist es tagsüber warm, nachts sehr kalt.</li>
        <li>Patagonien: vier Jahreszeiten an einem Tag, viel Wind.</li>
      </ul>
      <div id="weather-table"></div>` },
    { id: 'notfall', title: 'Notfall', html: `
      <ul>
        <li>Polizei (Carabineros) <strong>133</strong>, Rettung <strong>131</strong>, Feuerwehr <strong>132</strong>.</li>
        <li>Deutsche Botschaft Santiago: <a href="tel:+56224632500">+56 2 2463 2500</a>.</li>
        <li><a href="https://krisenvorsorgeliste.diplo.de" target="_blank" rel="noopener">Elefand – Krisenvorsorgeliste</a> des Auswärtigen Amts.</li>
      </ul>` }
  ]
});
