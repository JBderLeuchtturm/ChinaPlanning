/* Reise: Argentinien & Uruguay. Preise in US-Dollar (wegen der Inflation in Argentinien), Richtwerte Stand 2025/26 – vor Ort prüfen. */
(window.TRIPS = window.TRIPS || []).push({
  id: 'argentina',
  name: 'Argentinien & Uruguay',
  title: 'Zwei Wochen Argentinien & Uruguay',
  lede: 'Tango und Steaks in Buenos Aires, die donnernden Iguazú-Fälle, der Perito-Moreno-Gletscher in Patagonien – und mit der Fähre rüber nach Uruguay. Unter „Tage“ liegt schon ein fertiger Plan. Ihr tauscht nur noch aus, was euch nicht passt, und schickt ihn euch per Link.',
  routeLede: 'Direktflug mit Lufthansa nach Buenos Aires. Von dort mit Inlandsflügen in den Dschungel und nach Patagonien, am Ende mit der Fähre über den Río de la Plata nach Uruguay.',
  seal: 'A',
  sealFmt: 'Día {n}',
  lang: 'es',
  script: 'alpha',
  font: { family: 'Noto Serif Display', weight: 900, fallback: "'Noto Serif', Georgia, serif" },
  locFont: "system-ui, 'Segoe UI', Roboto, 'Noto Sans', sans-serif",
  taxiAsk: 'Por favor, lléveme a esta dirección',
  currency: { label: 'US-$', rate: 1.12, rateLabel: '1 € in US-Dollar' },
  maps: [
    { label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query={q}%20{cityName}' }
  ],
  theme: {
    light: { ticket: '#F5E8BD', ink: '#6B4E0A', line: '#E2CD85' },
    dark: { ticket: '#3A3216', ink: '#EBD27E', line: '#5E5126' }
  },
  budget: {
    flight: [900, 1400], flightLabel: 'Flug Frankfurt – Buenos Aires (Lufthansa), hin und zurück',
    hotel: [['Budget', 45], ['Mittelklasse', 90], ['Komfort', 180]],
    food: [['Sparsam', 25], ['Normal', 40], ['Schlemmen', 70]],
    extra: 180, extraLabel: 'Taxi, SIM, Trinkgeld, Souvenirs',
    transportLabel: 'Inlandsflüge, Fähren und Busse aus eurem Plan'
  },
  warnings: {
    after: [],
    holidays: [
      { name: 'die Lufthansa-Pause (25.10.–11.11.2026)', from: '2026-10-25', to: '2026-11-11', text: 'Lufthansa setzt den Direktflug wegen Bauarbeiten am Flughafen Ezeiza aus – in dieser Zeit z. B. über Rom oder Madrid fliegen.' },
      { name: 'den Karneval in Montevideo (ca. Ende Januar bis Anfang März)', from: '01-20', to: '03-05', text: 'Der längste Karneval der Welt mit Candombe-Trommeln – ein Erlebnis, Unterkünfte früh buchen.' }
    ],
    seasons: [
      { months: [6, 7, 8], text: 'Winter auf der Südhalbkugel: In El Calafate ist es kalt und manche Touren pausieren. Buenos Aires und Iguazú gehen gut.' },
      { months: [12, 1, 2], text: 'Hochsommer: In Buenos Aires und Iguazú heiß und schwül, in Patagonien Hochsaison – früh buchen.' }
    ]
  },

  cities: {
    fra: { name: 'Unterwegs', loc: 'Frankfurt', py: 'Frankfurt' },
    ba: {
      name: 'Buenos Aires', loc: 'Buenos Aires', py: 'Buenos Aires', color: ['#1F5E9E', '#7DB2EA'],
      why: `Das Paris Südamerikas: Prachtboulevards, Tangobars, Steakhäuser, ein Friedhof wie eine Stadt – und Nächte, die erst um 1 Uhr beginnen.`,
      stay: `Palermo (Cafés, Bars, sicher) oder Recoleta (elegant). San Telmo ist charmant, abends aber unruhiger.`,
      stayTip: `Abendessen gibt es ab 21 Uhr, Clubs öffnen um 2. Mittagsschlaf einplanen!`,
      move: `U-Bahn (Subte) und Busse mit der SUBE-Karte, dazu Uber und Cabify.`,
      arrive: `Vom Flughafen Ezeiza (EZE) mit Transferbus oder Uber ca. 45–60 Min. in die Stadt.`,
      prices: [['Budget', '35–60 €'], ['Mittelklasse', '70–130 €'], ['Komfort', 'ab 170 €']]
    },
    igu: {
      name: 'Iguazú', loc: 'Iguazú', py: 'Puerto Iguazú', color: ['#2E7D3F', '#6FCB82'],
      why: `Rund 275 Wasserfälle auf fast 3 km Breite im Dschungel an der Grenze zu Brasilien. Am „Teufelsschlund“ stürzen Wassermassen donnernd in die Tiefe.`,
      stay: `Im Ort Puerto Iguazú, viele Hotels mit Pool.`,
      stayTip: `Es ist schwül – ein Zimmer mit Klimaanlage lohnt sich.`,
      move: `Busse fahren regelmäßig vom Ort zum Nationalpark.`,
      arrive: `Flug ab Buenos Aires ca. 2 Std. nach Puerto Iguazú (IGR).`,
      prices: [['Budget', '30–55 €'], ['Mittelklasse', '60–110 €'], ['Komfort', 'ab 150 €']]
    },
    cal: {
      name: 'Patagonien', loc: 'El Calafate', py: 'El Calafate', color: ['#1C7A73', '#5CC7BE'],
      why: `Gletscher, Gipfel und endlose Steppe: Der Perito-Moreno-Gletscher kalbt vor euren Augen, El Chaltén ist die Wanderhauptstadt des Landes.`,
      stay: `In El Calafate am Lago Argentino, für Wanderer zusätzlich El Chaltén.`,
      stayTip: `El Chaltén liegt 3 Std. entfernt – als lange Tagestour oder besser mit 1–2 Nächten.`,
      move: `Touren und Busse zum Gletscher und nach El Chaltén.`,
      arrive: `Flug ab Buenos Aires ca. 3 Std. nach El Calafate (FTE).`,
      prices: [['Budget', '45–75 €'], ['Mittelklasse', '90–160 €'], ['Komfort', 'ab 220 €']]
    },
    col: {
      name: 'Colonia', loc: 'Colonia', py: 'Colonia del Sacramento', color: ['#B0532A', '#EE9566'],
      why: `Portugiesisches Kolonialstädtchen in Uruguay mit Kopfsteinpflaster, Oldtimern und Sonnenuntergängen über dem Río de la Plata.`,
      stay: `In der Altstadt (Barrio Histórico) oder direkt am Wasser.`,
      stayTip: `Tagsüber voller Tagesausflügler, abends wunderbar ruhig – deshalb dort übernachten.`,
      move: `Alles zu Fuß, Golfcarts und Fahrräder zum Mieten.`,
      arrive: `Fähre ab Buenos Aires ca. 1–1,5 Std.`,
      prices: [['Budget', '40–70 €'], ['Mittelklasse', '80–140 €'], ['Komfort', 'ab 170 €']]
    },
    mvd: {
      name: 'Montevideo', loc: 'Montevideo', py: 'Montevideo', color: ['#7A3F98', '#C58BE0'],
      why: `Entspannte Hauptstadt Uruguays: 22 km Uferpromenade, Grillhallen im Hafenmarkt, Candombe-Trommeln und Mate an jeder Ecke.`,
      stay: `Ciudad Vieja (Altstadt, nah am Hafen) oder Pocitos (Strand, ruhig).`,
      stayTip: `Die Altstadt ist tagsüber lebendig, nachts leer – Pocitos ist abends angenehmer.`,
      move: `Busse und Uber, die Rambla entlang mit dem Leihrad.`,
      arrive: `Bus ab Colonia ca. 2,5 Std.`,
      prices: [['Budget', '40–65 €'], ['Mittelklasse', '80–130 €'], ['Komfort', 'ab 160 €']]
    },
    any: { name: 'Überall', loc: '', py: '' }
  },

  /* c = Ort, cat = Kategorien, v = Verrückt-Faktor 0–3, d = Dauer in Std., p = Preis p. P. in US-Dollar,
     pt = Preistext, w = übliche Tageszeit (0 Früh … 5 Ganztags), closed/only = Wochentage (0 = So) */
  activities: [
    // ---------- Transfers ----------
    { id: 't-fra-eze', c: 'fra', t: 'Flug Frankfurt → Buenos Aires', cat: ['transport'], v: 0, d: 14, p: 0, pt: 'hin und zurück ca. 900–1.400 €', w: 4, mode: 'flug', dshort: '14 Std.', taxi: false,
      desc: `Direktflug mit Lufthansa in ca. 14 Std. über Nacht. Argentinien liegt je nach Jahreszeit 4–5 Std. hinter Deutschland.`,
      tip: `Vom 25.10. bis 11.11.2026 pausiert der Direktflug wegen Bauarbeiten in Ezeiza – dann über Rom oder Madrid.` },
    { id: 't-ba-igu', c: 'igu', t: 'Flug Buenos Aires → Iguazú', cat: ['transport'], v: 0, d: 3.5, p: 90, pt: 'ca. 60–150 US-$', w: 1, mode: 'flug', dshort: '2 Std.', taxi: false,
      desc: `Ab dem Stadtflughafen Aeroparque (AEP) in ca. 2 Std. nach Puerto Iguazú.`,
      tip: `Aeroparque liegt mitten in der Stadt, ca. 20 Min. mit Uber.` },
    { id: 't-igu-cal', c: 'cal', t: 'Flug Iguazú → El Calafate', cat: ['transport'], v: 0, d: 6, p: 150, pt: 'ca. 100–250 US-$', w: 1, mode: 'flug', dshort: '5 Std.', taxi: false,
      desc: `Vom Dschungel ins Eis – meist mit Umstieg in Buenos Aires, ca. 5–6 Std.`,
      tip: `Gepäck bei Billigfliegern (Flybondi, JetSMART) dazubuchen.` },
    { id: 't-cal-ba', c: 'ba', t: 'Flug El Calafate → Buenos Aires', cat: ['transport'], v: 0, d: 3.5, p: 110, pt: 'ca. 70–180 US-$', w: 1, mode: 'flug', dshort: '3 Std.', taxi: false,
      desc: `Zurück in die Hauptstadt, ca. 3 Std.`,
      tip: `Am Abend noch zur Milonga – Buenos Aires schläft nicht.` },
    { id: 't-ba-col', c: 'col', t: 'Fähre Buenos Aires → Colonia', loc: 'Terminal Buquebus', cat: ['transport'], v: 0, d: 2, p: 60, pt: 'ca. 40–80 US-$', w: 1, mode: 'schiff', dshort: '1¼ Std.',
      desc: `Schnellfähre über den Río de la Plata nach Uruguay, ca. 1–1,5 Std. Die Grenzkontrolle beider Länder ist schon im Hafen.`,
      tip: `Online buchen, Pass bereithalten, 1,5 Std. vorher am Terminal sein.` },
    { id: 't-col-mvd', c: 'mvd', t: 'Bus Colonia → Montevideo', loc: 'Terminal de Colonia', cat: ['transport'], v: 0, d: 2.5, p: 15, pt: 'ca. 12–20 US-$', w: 1, mode: 'bus', dshort: '2½ Std.',
      desc: `Bequeme Fernbusse durch flaches Weideland, Ankunft am Busbahnhof Tres Cruces.`,
      tip: `Busse fahren etwa stündlich, Tickets am Terminal.` },
    { id: 't-mvd-ba', c: 'ba', t: 'Fähre Montevideo → Buenos Aires', loc: 'Puerto de Montevideo', cat: ['transport'], v: 0, d: 3, p: 80, pt: 'ca. 60–110 US-$', w: 1, mode: 'schiff', dshort: '2¼ Std.',
      desc: `Direktfähre in gut 2 Std. – oder günstiger mit Bus und Fähre über Colonia.`,
      tip: `Am Fährterminal in Montevideo die letzten Pesos für Alfajores ausgeben.` },
    { id: 't-eze-fra', c: 'fra', t: 'Rückflug Buenos Aires → Frankfurt', cat: ['transport'], v: 0, d: 13, p: 0, pt: 'im Flugpreis enthalten', w: 3, mode: 'flug', dshort: '13 Std.', taxi: false,
      desc: `Nachtflug mit Lufthansa, Ankunft am nächsten Tag.`,
      tip: `Ezeiza liegt weit draußen: 3 Std. vor Abflug da sein und Stau einplanen.` },

    // ---------- Buenos Aires ----------
    { id: 'ba-plaza', c: 'ba', t: 'Plaza de Mayo & Casa Rosada', loc: 'Plaza de Mayo', cat: ['klassiker', 'kultur'], v: 0, d: 1.5, p: 0, w: 3,
      desc: `Der rosa Präsidentenpalast mit dem Balkon von Evita, davor der Platz der großen Proteste.`,
      tip: `Donnerstags um 15:30 Uhr drehen hier seit 1977 die Mütter der Verschwundenen ihre Runden.` },
    { id: 'ba-ateneo', c: 'ba', t: 'El Ateneo Grand Splendid', loc: 'El Ateneo Grand Splendid', cat: ['klassiker', 'kultur'], v: 0, d: 1, p: 0, w: 3,
      desc: `Eine Buchhandlung in einem alten Theater – mit Café auf der Bühne.`,
      tip: `Liegt in Recoleta, gut mit dem Friedhof kombinierbar.` },
    { id: 'ba-parrilla', c: 'ba', t: 'Steak in der Parrilla', loc: 'Parrilla', cat: ['essen', 'klassiker'], v: 0, d: 2, p: 45, pt: 'ca. 30–60 US-$ mit Wein', w: 4, taxi: false,
      desc: `Bife de chorizo, Ojo de bife und Chorizo vom Holzkohlegrill, dazu Malbec. Argentiniens Religion.`,
      tip: `Don Julio in Palermo ist berühmt (lange vorher reservieren), aber jede gute Nachbarschafts-Parrilla lohnt.` },
    { id: 'ba-recoleta', c: 'ba', t: 'Friedhof Recoleta', loc: 'Cementerio de la Recoleta', cat: ['klassiker', 'kultur'], v: 1, d: 2, p: 15, pt: 'ca. 15 US-$', w: 1,
      desc: `Eine Stadt der Toten mit Marmorpalästen, Engeln und dem Grab von Evita Perón.`,
      tip: `Am Eingang einen Plan nehmen – sonst verläuft man sich.` },
    { id: 'ba-palermo', c: 'ba', t: 'Palermo Soho', loc: 'Palermo Soho', cat: ['chill', 'nacht'], v: 0, d: 3, p: 0, w: 3,
      desc: `Boutiquen, Street Art, Craft-Bier und versteckte Bars.`,
      tip: `Die Bars füllen sich erst ab Mitternacht.` },
    { id: 'ba-tango', c: 'ba', t: 'Tango-Show', loc: 'Tango Show', cat: ['kultur', 'nacht'], v: 1, d: 3, p: 100, pt: 'mit Abendessen ca. 70–150 US-$', w: 4, taxi: false,
      desc: `Profitänzer, Orchester, Abendessen – touristisch, aber beeindruckend.`,
      tip: `Ursprünglicher: eine Milonga besuchen, wo Einheimische tanzen.` },
    { id: 'ba-santelmo', c: 'ba', t: 'Sonntagsmarkt in San Telmo', loc: 'Feria de San Telmo', cat: ['klassiker', 'kultur'], v: 0, d: 3, p: 0, w: 1, only: [0],
      desc: `Kilometerlanger Flohmarkt mit Antiquitäten, Siphonflaschen, Straßentango und Empanada-Ständen.`,
      tip: `Nur sonntags. Den überdachten Mercado de San Telmo nebenan nicht verpassen.` },
    { id: 'ba-caminito', c: 'ba', t: 'La Boca & Caminito', loc: 'Caminito', cat: ['klassiker'], v: 0, d: 2, p: 0, w: 3,
      desc: `Bunte Wellblechhäuser im alten Hafenviertel, Tangotänzer auf der Straße und das Stadion „La Bombonera“.`,
      tip: `Auf den belebten Touristenstraßen bleiben und am späten Nachmittag wieder fahren – die Nebenstraßen sind unsicher.` },
    { id: 'ba-milonga', c: 'ba', t: 'Milonga: Tanzabend mit Locals', loc: 'La Catedral Club', cat: ['kultur', 'verrueckt', 'nacht'], v: 2, d: 3, p: 10, w: 4,
      desc: `Hier tanzen Porteños jeden Alters bis 3 Uhr morgens. Vorher gibt es oft eine Stunde für Anfänger.`,
      tip: `Einfach zuschauen ist auch erlaubt – aber probiert es.` },
    { id: 'ba-boca', c: 'ba', t: 'Fußballspiel der Boca Juniors', loc: 'La Bombonera', cat: ['verrueckt'], v: 3, d: 5, p: 150, pt: 'mit Agentur ca. 100–250 US-$', w: 4,
      desc: `Die „Pralinenschachtel“ bebt – wörtlich. Eines der verrücktesten Stadionerlebnisse der Welt.`,
      tip: `Normale Tickets gibt es nur für Vereinsmitglieder. Touristen gehen sicher mit Agenturen, die Abholung und Begleitung organisieren.` },
    { id: 'ba-colon', c: 'ba', t: 'Teatro Colón', loc: 'Teatro Colón', cat: ['kultur'], v: 0, d: 1.5, p: 30, pt: 'Führung ca. 30 US-$', w: 3,
      desc: `Eines der besten Opernhäuser der Welt mit fast perfekter Akustik. Führungen täglich.`,
      tip: `Wer kann: eine Aufführung besuchen, auch die günstigen Plätze oben sind ein Erlebnis.` },
    { id: 'ba-pizza', c: 'ba', t: 'Pizza auf Porteño-Art', loc: 'Pizzería Güerrín', cat: ['essen', 'verrueckt'], v: 1, d: 1, p: 15, w: 4,
      desc: `Dicke Käsepizza, im Stehen gegessen, mit einer Scheibe Fainá (Kichererbsenfladen) obendrauf.`,
      tip: `Die alten Pizzerien an der Avenida Corrientes sind Institutionen.` },
    { id: 'ba-helado', c: 'ba', t: 'Eis in der Heladería', loc: 'Heladería', cat: ['essen', 'chill'], v: 0, d: 0.5, p: 5, w: 3, taxi: false,
      desc: `Argentiniens Eis ist italienisch geprägt und grandios. Pflicht: Dulce de leche granizado.`,
      tip: `Das Eis wird bis spät nachts nach Hause geliefert – die Locals lieben das.` },
    { id: 'ba-tigre', c: 'ba', t: 'Delta von Tigre', loc: 'Tigre', cat: ['ausflug', 'natur'], v: 0, d: 6, p: 20, w: 5,
      desc: `Labyrinth aus Flussarmen mit Stelzenhäusern, mit dem Zug in ca. 1 Std. erreichbar. Bootstouren durchs Delta.`,
      tip: `Mit dem Wassertaxi zu einem Restaurant im Delta fahren.` },

    // ---------- Iguazú ----------
    { id: 'igu-triple', c: 'igu', t: 'Dreiländereck', loc: 'Hito Tres Fronteras', cat: ['chill'], v: 0, d: 1, p: 0, w: 4,
      desc: `Aussichtspunkt, an dem Argentinien, Brasilien und Paraguay zusammentreffen – zum Sonnenuntergang.`,
      tip: `Am Abend gibt es dort manchmal Wasserspiele und Musik.` },
    { id: 'igu-garganta', c: 'igu', t: 'Teufelsschlund (Garganta del Diablo)', loc: 'Garganta del Diablo', cat: ['klassiker', 'natur'], v: 1, d: 6, p: 45, pt: 'Parkeintritt ca. 40–50 US-$', w: 5,
      desc: `Ein Steg führt über den Fluss direkt an die Kante des größten Falls – Gischt, Regenbogen, Donnern.`,
      tip: `Zur Öffnung da sein und mit der Parkbahn zuerst zum Teufelsschlund fahren.` },
    { id: 'igu-boat', c: 'igu', t: 'Bootsfahrt unter die Fälle', loc: 'Gran Aventura', cat: ['verrueckt'], v: 3, d: 2, p: 80, pt: 'ca. 70–100 US-$', w: 3,
      desc: `Mit dem Schlauchboot direkt in den Wasservorhang – ihr werdet bis auf die Unterhose nass.`,
      tip: `Wechselkleidung und wasserdichte Hülle fürs Handy.` },
    { id: 'igu-brazil', c: 'igu', t: 'Brasilianische Seite', loc: 'Foz do Iguaçu', cat: ['klassiker', 'natur'], v: 1, d: 5, p: 25, pt: 'ca. 20–30 US-$ Eintritt', w: 1,
      desc: `Von Brasilien aus seht ihr das ganze Panorama der Fälle. Grenzübertritt mit Bus oder Taxi.`,
      tip: `Pass mitnehmen. Deutsche brauchen für Brasilien kein Visum.` },
    { id: 'igu-birds', c: 'igu', t: 'Parque das Aves', loc: 'Parque das Aves', cat: ['natur'], v: 0, d: 2.5, p: 30, w: 3,
      desc: `Vogelpark auf der brasilianischen Seite mit Tukanen und Aras in begehbaren Volieren.`,
      tip: `Liegt direkt neben dem Eingang zum brasilianischen Nationalpark.` },
    { id: 'igu-moon', c: 'igu', t: 'Vollmond-Tour an die Fälle', loc: 'Paseo Luna Llena', cat: ['verrueckt', 'natur'], v: 2, d: 2, p: 60, w: 4,
      desc: `An wenigen Nächten im Monat geht es im Mondlicht zum Teufelsschlund – mit Mondregenbogen, wenn ihr Glück habt.`,
      tip: `Nur rund um Vollmond, sehr begrenzte Plätze.` },

    // ---------- Patagonien ----------
    { id: 'cal-flamingos', c: 'cal', t: 'Laguna Nimez', loc: 'Reserva Laguna Nimez', cat: ['natur', 'chill'], v: 0, d: 1.5, p: 10, w: 4,
      desc: `Vogelschutzgebiet am Ortsrand mit Flamingos und Schwarzhalsschwänen.`,
      tip: `Gut für den Ankunftsabend.` },
    { id: 'cal-moreno', c: 'cal', t: 'Perito-Moreno-Gletscher', loc: 'Glaciar Perito Moreno', cat: ['klassiker', 'natur'], v: 1, d: 7, p: 45, pt: 'Parkeintritt ca. 40–50 US-$', w: 5,
      desc: `Eine 60 m hohe Eiswand, von der immer wieder Brocken krachend in den See stürzen. Stege führen bis auf wenige hundert Meter heran.`,
      tip: `Geduld: hinsetzen und aufs Kalben warten – der Knall ist irre.` },
    { id: 'cal-icetrek', c: 'cal', t: 'Eiswanderung auf dem Gletscher', loc: 'Minitrekking Perito Moreno', cat: ['verrueckt', 'natur'], v: 2, d: 8, p: 250, pt: 'ca. 200–300 US-$', w: 5,
      desc: `Mit Steigeisen über blaue Spalten – zum Schluss Whisky mit Gletschereis.`,
      tip: `Altersgrenze und Fitness beachten, früh buchen.` },
    { id: 'cal-estancia', c: 'cal', t: 'Estancia-Besuch mit Asado', loc: 'Estancia', cat: ['kultur', 'essen'], v: 1, d: 5, p: 120, w: 3,
      desc: `Auf einer Schaffarm Gauchos beim Scheren und Hüten zusehen, dann Lamm vom Feuer.`,
      tip: `Viele Estancias holen euch im Hotel ab.` },
    { id: 'cal-glaciarium', c: 'cal', t: 'Glaciarium mit Eisbar', loc: 'Glaciarium', cat: ['kultur', 'verrueckt'], v: 1, d: 2, p: 25, w: 1,
      desc: `Museum über Gletscher – mit einer Bar aus Eis bei −10 °C.`,
      tip: `Gut für einen windigen Tag.` },
    { id: 'cal-chalten', c: 'cal', t: 'Wanderung zum Fitz Roy', loc: 'Laguna de los Tres', cat: ['natur', 'verrueckt'], v: 2, d: 14, p: 0, w: 5,
      desc: `Die Königsetappe von El Chaltén: rund 20 km zur Lagune unter dem Fitz Roy, das letzte Stück steil. Einer der berühmtesten Bergblicke der Welt.`,
      tip: `El Chaltén liegt 3 Std. von El Calafate – besser dort übernachten als alles an einem Tag.` },
    { id: 'cal-boat', c: 'cal', t: 'Bootsfahrt zu den Gletschern', loc: 'Lago Argentino', cat: ['natur'], v: 1, d: 8, p: 150, w: 5,
      desc: `Zwischen Eisbergen zu den Gletschern Upsala und Spegazzini, die man nur vom Wasser aus sieht.`,
      tip: `Bei Sturm fällt die Fahrt aus – Puffer einplanen.` },

    // ---------- Colonia ----------
    { id: 'col-barrio', c: 'col', t: 'Barrio Histórico', loc: 'Barrio Histórico', cat: ['klassiker', 'kultur'], v: 0, d: 3, p: 0, w: 3,
      desc: `UNESCO-Altstadt mit Kopfsteingassen, Stadttor, Leuchtturm und alten Autos als Blumenkübel.`,
      tip: `Auf den Leuchtturm steigen – der Blick über die Dächer lohnt sich.` },
    { id: 'col-sunset', c: 'col', t: 'Sonnenuntergang am Río de la Plata', loc: 'Puerto de Colonia', cat: ['chill'], v: 0, d: 1, p: 0, w: 4,
      desc: `Der Fluss ist so breit, dass er wie ein Meer aussieht – die Sonne versinkt im Wasser.`,
      tip: `Mit einem Glas Tannat-Wein auf der Hafenmauer.` },
    { id: 'col-golfcart', c: 'col', t: 'Mit dem Golfcart die Küste entlang', loc: 'Real de San Carlos', cat: ['verrueckt', 'chill'], v: 1, d: 2, p: 40, w: 1,
      desc: `Golfcarts sind hier ein Verkehrsmittel – damit zur verlassenen Stierkampfarena Real de San Carlos.`,
      tip: `Mietstationen gibt es in der Altstadt.` },

    // ---------- Montevideo ----------
    { id: 'mvd-rambla', c: 'mvd', t: 'Rambla mit dem Leihrad', loc: 'Rambla de Montevideo', cat: ['chill'], v: 0, d: 3, p: 0, w: 4,
      desc: `22 km Uferpromenade, auf der halb Montevideo joggt, angelt und Mate trinkt.`,
      tip: `Bis zum Montevideo-Schriftzug in Pocitos zum Sonnenuntergang.` },
    { id: 'mvd-viejo', c: 'mvd', t: 'Ciudad Vieja & Plaza Independencia', loc: 'Ciudad Vieja', cat: ['klassiker', 'kultur'], v: 0, d: 2, p: 0, w: 1,
      desc: `Altstadt mit Art-déco-Palästen, dem Palacio Salvo und dem Teatro Solís.`,
      tip: `Tagsüber erkunden, nachts ist es hier sehr leer.` },
    { id: 'mvd-mercado', c: 'mvd', t: 'Mercado del Puerto', loc: 'Mercado del Puerto', cat: ['klassiker', 'essen'], v: 1, d: 2, p: 40, w: 2,
      desc: `Alte Markthalle voller Grills, auf denen Fleischberge über Holz brutzeln. Dazu „Medio y Medio“, halb Sekt, halb Weißwein.`,
      tip: `An die Theke setzen und dem Grillmeister zuschauen.` },
    { id: 'mvd-andes', c: 'mvd', t: 'Museo Andes 1972', loc: 'Museo Andes 1972', cat: ['kultur'], v: 1, d: 1.5, p: 15, w: 3,
      desc: `Museum über den Flugzeugabsturz in den Anden, bei dem 16 Rugbyspieler 72 Tage überlebten.`,
      tip: `Bewegend – auch ohne den Film „Die Schneegesellschaft“ gesehen zu haben.` },
    { id: 'mvd-candombe', c: 'mvd', t: 'Candombe-Trommeln', loc: 'Barrio Sur', cat: ['kultur', 'verrueckt'], v: 2, d: 1.5, p: 0, w: 4, only: [0],
      desc: `Afro-uruguayische Trommelgruppen ziehen am Sonntagabend durch die Viertel Barrio Sur und Palermo – einfach mitlaufen.`,
      tip: `Meist sonntags ab dem frühen Abend. Fragt in der Unterkunft nach der Route.` },
    { id: 'mvd-centenario', c: 'mvd', t: 'Estadio Centenario', loc: 'Estadio Centenario', cat: ['kultur'], v: 0, d: 1.5, p: 10, w: 3,
      desc: `Hier fand 1930 das erste WM-Finale statt – Uruguay gewann. Mit Fußballmuseum.`,
      tip: `Für Fußballfans Pflicht.` },
    { id: 'mvd-wine', c: 'mvd', t: 'Tannat-Weingut', loc: 'Bodega Bouza', cat: ['essen', 'ausflug'], v: 0, d: 4, p: 60, w: 3,
      desc: `Uruguays Rebsorte ist Tannat – Weingüter wie Bouza liegen ca. 30 Min. vor der Stadt.`,
      tip: `Mit Mittagessen auf dem Weingut buchen.` },
    { id: 'mvd-punta', c: 'mvd', t: 'Ausflug Punta del Este', loc: 'Punta del Este', cat: ['ausflug', 'chill'], v: 0, d: 10, p: 30, w: 5,
      desc: `Uruguays Badeort mit der Hand-Skulptur im Sand und dem weißen Künstlerhaus Casapueblo.`,
      tip: `Ca. 2 Std. mit dem Bus. Im Sommer voll, sonst ruhig.` },

    // ---------- Überall ----------
    { id: 'any-mate', c: 'any', t: 'Mate trinken', loc: 'Mate', cat: ['kultur', 'chill'], v: 1, d: 0.5, p: 0, w: 3, taxi: false,
      desc: `Bitterer Tee aus einer Kalebasse mit Metallhalm, der im Kreis weitergereicht wird.`,
      tip: `„Gracias“ heißt beim Mate: Ich will keinen mehr.` },
    { id: 'any-chivito', c: 'any', t: 'Chivito: Uruguays Mega-Sandwich', loc: 'Chivito', cat: ['essen', 'verrueckt'], v: 1, d: 1, p: 15, w: 2, taxi: false,
      desc: `Steak, Schinken, Käse, Ei, Speck und Salat – alles in einem Brötchen. Uruguays Nationalgericht.`,
      tip: `Am besten in Uruguay, in Argentinien eher selten.` },
    { id: 'any-dulce', c: 'any', t: 'Dulce de leche & Alfajores', loc: 'Alfajor', cat: ['essen'], v: 0, d: 0.5, p: 3, w: 3, taxi: false,
      desc: `Karamellcreme auf allem – am besten in Alfajores, Doppelkeksen mit Schokoüberzug.`,
      tip: `Havanna und Cachafaz sind Klassiker, gute Mitbringsel.` },
    { id: 'any-fernet', c: 'any', t: 'Fernet con Coca', loc: 'Fernet con Coca', cat: ['essen', 'nacht', 'verrueckt'], v: 2, d: 1, p: 6, w: 4, taxi: false,
      desc: `Bitterer Kräuterlikör mit Cola – Argentiniens inoffizielles Nationalgetränk. Man liebt oder hasst ihn.`,
      tip: `In jeder Bar zu haben, oft riesig gemischt.` },
    { id: 'any-empanadas', c: 'any', t: 'Empanadas probieren', loc: 'Empanadas', cat: ['essen'], v: 0, d: 0.5, p: 5, w: 2, taxi: false,
      desc: `Jede Region hat ihre Füllung: Rind, Huhn, Käse und Zwiebel, Mais. Gebacken oder frittiert.`,
      tip: `Die mit dem eingeprägten Muster am Rand verraten die Füllung – fragt nach.` }
  ],

  /* Vorgeschlagener Plan: [Aktivität, Tageszeit] */
  defaultPlan: [
    { city: 'fra', items: [['t-fra-eze', 4]] },
    { city: 'ba', items: [['ba-plaza', 3], ['ba-ateneo', 3], ['ba-parrilla', 4]] },
    { city: 'ba', items: [['ba-recoleta', 1], ['ba-palermo', 3], ['ba-tango', 4]] },
    { city: 'ba', items: [['ba-santelmo', 1], ['ba-caminito', 3], ['ba-milonga', 4]] },
    { city: 'igu', items: [['t-ba-igu', 1], ['igu-triple', 4]] },
    { city: 'igu', items: [['igu-garganta', 5], ['igu-boat', 3]] },
    { city: 'cal', items: [['t-igu-cal', 1], ['cal-flamingos', 4]] },
    { city: 'cal', items: [['cal-moreno', 5], ['any-fernet', 4]] },
    { city: 'cal', items: [['cal-glaciarium', 1], ['cal-estancia', 3]] },
    { city: 'ba', items: [['t-cal-ba', 1], ['ba-colon', 3], ['ba-pizza', 4]] },
    { city: 'col', items: [['t-ba-col', 1], ['col-barrio', 3], ['col-sunset', 4]] },
    { city: 'mvd', items: [['col-golfcart', 1], ['t-col-mvd', 3], ['mvd-rambla', 4]] },
    { city: 'mvd', items: [['mvd-viejo', 1], ['mvd-mercado', 2], ['mvd-andes', 3], ['mvd-candombe', 4]] },
    { city: 'ba', items: [['t-mvd-ba', 1], ['ba-helado', 3], ['any-mate', 3]] },
    { city: 'fra', items: [['t-eze-fra', 3]] }
  ],

  tickets: {
    't-fra-eze': { from: ['Frankfurt', 'FRA'], to: ['Buenos Aires', 'Ezeiza (EZE)'], label: 'Flug' },
    't-ba-igu': { from: ['Buenos Aires', 'Aeroparque (AEP)'], to: ['Iguazú', 'IGR'], label: 'Flug' },
    't-igu-cal': { from: ['Iguazú', 'IGR'], to: ['El Calafate', 'FTE'], label: 'Flug, 1 Umstieg' },
    't-cal-ba': { from: ['El Calafate', 'FTE'], to: ['Buenos Aires', 'Aeroparque (AEP)'], label: 'Flug' },
    't-ba-col': { from: ['Buenos Aires', 'Fährhafen'], to: ['Colonia', 'Uruguay'], label: 'Fähre' },
    't-col-mvd': { from: ['Colonia', 'Busbahnhof'], to: ['Montevideo', 'Tres Cruces'], label: 'Bus' },
    't-mvd-ba': { from: ['Montevideo', 'Fährhafen'], to: ['Buenos Aires', 'Fährhafen'], label: 'Fähre' },
    't-eze-fra': { from: ['Buenos Aires', 'Ezeiza (EZE)'], to: ['Frankfurt', 'FRA'], label: 'Flug' }
  },

  /* Ø Tageshöchstwerte in °C, gerundet */
  weather: {
    ba: [30, 29, 27, 23, 19, 16, 15, 17, 19, 22, 25, 28],
    igu: [33, 32, 31, 28, 24, 22, 22, 24, 26, 29, 31, 32],
    cal: [19, 18, 16, 12, 7, 4, 4, 6, 9, 13, 16, 18],
    col: [29, 28, 26, 22, 18, 15, 14, 16, 18, 21, 24, 27],
    mvd: [28, 27, 25, 22, 18, 15, 14, 16, 18, 20, 23, 26]
  },

  prep: [
    { id: 'p-flug', off: -150, t: 'Langstreckenflug buchen', d: 'Lufthansa fliegt direkt. Vom 25.10. bis 11.11.2026 pausiert die Verbindung wegen Bauarbeiten in Ezeiza.' },
    { id: 'p-pass', off: -120, t: 'Reisepass prüfen', d: 'Für die ganze Reise gültig. Deutsche brauchen weder für Argentinien noch für Uruguay oder einen Abstecher nach Brasilien ein Visum.' },
    { id: 'p-domestic', off: -90, t: 'Inlandsflüge buchen', d: 'Aerolíneas Argentinas, Flybondi oder JetSMART. Iguazú → El Calafate meist mit Umstieg.' },
    { id: 'p-hotel', off: -90, t: 'Hotels buchen', d: 'In El Calafate und in der Karnevalszeit in Montevideo besonders früh.' },
    { id: 'p-ins', off: -30, t: 'Auslandskrankenversicherung', d: 'Private Kliniken sind gut, aber teuer.' },
    { id: 'p-ferry', off: -30, t: 'Fähren nach Uruguay buchen', d: 'Buquebus oder Colonia Express, online günstiger.' },
    { id: 'p-icetrek', off: -30, t: 'Eiswanderung oder Gletschertour buchen', d: 'Die Minitrekking-Touren auf dem Perito Moreno sind in der Saison schnell voll.' },
    { id: 'p-money', off: -14, t: 'Geld-Strategie klären', d: 'Kreditkarte für die meisten Zahlungen, dazu neue, saubere US-Dollar-Scheine als Reserve. Die Regeln in Argentinien ändern sich oft – kurz vorher prüfen.' },
    { id: 'p-esim', off: -14, t: 'eSIM besorgen', d: 'Eine Daten-eSIM für Argentinien und Uruguay.' },
    { id: 'p-apps', off: -14, t: 'Apps installieren', d: 'Uber, Cabify, Google Maps, WhatsApp (läuft hier alles drüber), Übersetzer mit Spanisch.' },
    { id: 'p-boca', off: -14, t: 'Boca-Spiel über Agentur buchen', d: 'Nur, wenn während eurer Reise ein Heimspiel ist – Spielplan prüfen.' },
    { id: 'p-elefand', off: -10, t: 'In Elefand eintragen', d: 'Die Krisenvorsorgeliste des Auswärtigen Amts.' },
    { id: 'p-addr', off: -2, t: 'Hoteladressen speichern', d: 'Unter „Tage“ beim Hotel eintragen – dann gibt es dafür eine Taxi-Karte.' }
  ],

  packing: [
    'Reisepass (plus Foto davon in der Cloud)',
    'Zwei Kreditkarten (Visa und Mastercard)',
    'Neue, saubere US-Dollar-Scheine als Reserve',
    'Reiseadapter Typ I für Argentinien',
    'Leichte Sommerkleidung für Iguazú',
    'Warme, winddichte Jacke für Patagonien',
    'Regenponcho für die Gischt in Iguazú',
    'Wanderschuhe',
    'Mückenschutz',
    'Sonnencreme LSF 50 und Sonnenbrille',
    'Etwas Schickes für Tango und Abendessen',
    'Wasserdichte Handyhülle',
    'Reiseapotheke',
    'Kleiner Tagesrucksack'
  ],

  phrases: [
    ['Hola', 'ola', 'Hallo'],
    ['Gracias', 'grassias', 'Danke'],
    ['¿Cuánto sale?', 'kuanto sale?', 'Was kostet das? (argentinisch)'],
    ['La cuenta, por favor', 'la kuenta, por fawor', 'Die Rechnung, bitte'],
    ['¿Dónde está el baño?', 'donde esta el banjo?', 'Wo ist die Toilette?'],
    ['Por favor, lléveme a esta dirección', 'por fawor, scheweme a esta direksion', 'Bitte fahren Sie mich hierhin'],
    ['Una mesa para dos', 'una mesa para dos', 'Ein Tisch für zwei'],
    ['Somos de Alemania', 'somos de alemanja', 'Wir kommen aus Deutschland'],
    ['¿Puedo pagar con tarjeta?', 'puedo pagar kon tarcheta?', 'Kann ich mit Karte zahlen?'],
    ['Jugoso, por favor', 'chugoso, por fawor', 'Das Steak bitte medium'],
    ['¡Salud!', 'salud!', 'Prost!'],
    ['¡Qué rico!', 'ke riko!', 'Lecker!'],
    ['Re lindo', 're lindo', 'Total schön (argentinisch)'],
    ['¡Che!', 'tsche!', 'He, du! (argentinisch, unter Freunden)']
  ],

  tips: [
    { id: 'visum', title: 'Einreise & Visum', html: `
      <p>Deutsche dürfen <strong>bis zu 90 Tage ohne Visum</strong> nach Argentinien und nach Uruguay. Auch für einen Abstecher auf die brasilianische Seite von Iguazú braucht ihr kein Visum.</p>
      <ul>
        <li>Pass für die ganze Reise gültig.</li>
        <li>Auf der Fähre nach Uruguay sind beide Grenzkontrollen schon im Abfahrtshafen.</li>
      </ul>
      <p><a href="https://www.auswaertiges-amt.de" target="_blank" rel="noopener">Auswärtiges Amt</a> – dort unter „Reise- und Sicherheitshinweise“ Argentinien und Uruguay wählen.</p>` },
    { id: 'geld', title: 'Geld & Bezahlen', html: `
      <p>Argentinien hat eine hohe Inflation – deshalb stehen die Preise hier in US-Dollar. Die Regeln rund um Wechselkurse ändern sich oft, kurz vor der Reise prüfen.</p>
      <ul>
        <li>Mit ausländischer Kreditkarte zahlt man inzwischen meist zu einem fairen Kurs. Das ist der einfachste Weg.</li>
        <li>Neue, saubere US-Dollar-Scheine als Reserve mitnehmen und nur in offiziellen Wechselstuben tauschen.</li>
        <li>Nie auf der Straße bei „Cambio“-Rufern tauschen – Falschgeld!</li>
        <li>Automaten in Argentinien haben hohe Gebühren und niedrige Limits.</li>
        <li>In Uruguay zahlt man in Pesos oder Dollar, Karten gehen fast überall.</li>
        <li>Trinkgeld: ca. 10 % im Restaurant, am besten in bar.</li>
      </ul>` },
    { id: 'unterwegs', title: 'Unterwegs', html: `
      <ul>
        <li>Riesige Entfernungen: Inlandsflüge sparen Tage. In Buenos Aires gibt es zwei Flughäfen – Ezeiza (international) und Aeroparque (Inland, mitten in der Stadt).</li>
        <li>In Buenos Aires: SUBE-Karte für U-Bahn und Bus, dazu Uber und Cabify.</li>
        <li>Fähren nach Uruguay: Buquebus, Colonia Express, Seacat.</li>
        <li>Fernbusse in Uruguay sind pünktlich und bequem.</li>
      </ul>` },
    { id: 'internet', title: 'Internet & Apps', html: `
      <ul>
        <li>Nichts ist gesperrt. WhatsApp ist das Kommunikationsmittel Nummer eins – Restaurants, Hotels, Touren.</li>
        <li>Daten-eSIM für beide Länder, in Patagonien teils kein Netz.</li>
        <li>Uber und Cabify funktionieren in den großen Städten.</li>
      </ul>
      <p>Diese Seite funktioniert nach dem ersten Öffnen auch offline.</p>` },
    { id: 'essen', title: 'Essen & Trinken', html: `
      <ul>
        <li>Fleisch ist Kultur: Asado, Bife de chorizo, Milanesa, Choripán. Vegetarier finden in Buenos Aires aber genug.</li>
        <li>Abendessen nicht vor 21 Uhr – vorher sind die Restaurants leer.</li>
        <li>Steak bestellen: „jugoso“ (medium-rare), „a punto“ (medium), „cocido“ (durch).</li>
        <li>Getränke: Malbec, Fernet con Coca, Mate. In Uruguay: Tannat und Medio y Medio.</li>
        <li>Leitungswasser in Buenos Aires und Montevideo ist meist trinkbar.</li>
      </ul>` },
    { id: 'knigge', title: 'Alltag & Knigge', html: `
      <ul>
        <li>Zur Begrüßung gibt es einen Wangenkuss – in Argentinien auch unter Männern, die sich kennen.</li>
        <li>Die Falklandinseln heißen hier „Malvinas“ – das Thema ist sensibel.</li>
        <li>Pünktlichkeit wird locker gesehen, außer bei Touren und Flügen.</li>
      </ul>` },
    { id: 'sicherheit', title: 'Sicherheit', html: `
      <p>Argentinien und Uruguay gehören zu den sichereren Ländern Südamerikas. Kleinkriminalität ist in Buenos Aires aber verbreitet.</p>
      <ul>
        <li>Handys werden gern im Vorbeifahren vom Roller aus geklaut – nicht am Straßenrand aufs Handy schauen.</li>
        <li><strong>Senf-Trick:</strong> Jemand bespritzt euch „versehentlich“, ein Helfer putzt – und ein Dritter klaut. Weitergehen!</li>
        <li>La Boca nur auf den Touristenstraßen, Constitución und Retiro nachts meiden.</li>
        <li>Nachts Uber statt zu Fuß.</li>
        <li>In Montevideo ist die Altstadt nachts leer – dann lieber in Pocitos sein.</li>
      </ul>` },
    { id: 'wetter', title: 'Reisezeit & Wetter', html: `
      <p><strong>Beste Zeit: Oktober bis April.</strong> Dann ist Patagonien zugänglich. Buenos Aires ist im Frühling (Oktober, November) und Herbst (März bis Mai) am schönsten.</p>
      <ul>
        <li>Dezember bis Februar ist es in Buenos Aires und Iguazú heiß und schwül.</li>
        <li>In Patagonien ist es auch im Sommer kühl und sehr windig.</li>
        <li>Iguazú führt nach Regen am meisten Wasser – dann ist es am spektakulärsten.</li>
      </ul>
      <div id="weather-table"></div>` },
    { id: 'notfall', title: 'Notfall', html: `
      <ul>
        <li>Argentinien: Polizei <strong>911</strong>, Rettung <strong>107</strong>, Feuerwehr <strong>100</strong>. Uruguay: Notruf <strong>911</strong>.</li>
        <li>Deutsche Botschaft Buenos Aires: <a href="tel:+541147782500">+54 11 4778 2500</a>.</li>
        <li>Deutsche Botschaft Montevideo: <a href="tel:+59829025222">+598 2902 5222</a>.</li>
        <li><a href="https://krisenvorsorgeliste.diplo.de" target="_blank" rel="noopener">Elefand – Krisenvorsorgeliste</a> des Auswärtigen Amts.</li>
      </ul>` }
  ]
});
