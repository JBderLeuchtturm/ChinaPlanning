/* Reise: Mongolei. Preise sind Richtwerte pro Person in Tögrög (Stand 2025/26) – vor Ort prüfen. */
(window.TRIPS = window.TRIPS || []).push({
  id: 'mongolia',
  name: 'Mongolei',
  title: 'Zwei Wochen Mongolei',
  lede: 'Steppe, Wüste, Jurten: Mit Fahrer und Geländewagen von Ulaanbaatar in die Wüste Gobi, durchs Orkhon-Tal und zu den letzten Wildpferden der Welt. Unter „Tage“ liegt schon ein fertiger Plan. Ihr tauscht nur noch aus, was euch nicht passt, und schickt ihn euch per Link.',
  routeLede: 'Direktflug mit MIAT nach Ulaanbaatar, dann rund 2.000 km Rundfahrt im Geländewagen mit Fahrer und Guide. Asphalt gibt es nur auf Teilstrecken.',
  seal: 'М',
  sealFmt: 'Өдөр {n}',
  lang: 'mn',
  script: 'alpha',
  font: { family: 'Noto Serif Display', weight: 900, fallback: "'Noto Serif', Georgia, serif" },
  locFont: "system-ui, 'Segoe UI', Roboto, 'Noto Sans', sans-serif",
  taxiAsk: 'Энд хүргэж өгнө үү',
  currency: { label: 'Tögrög', rate: 4000, rateLabel: '1 € in Tögrög' },
  maps: [
    { label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query={q}' }
  ],
  theme: {
    light: { ticket: '#E3EBCF', ink: '#4A5A1A', line: '#C5D3A0' },
    dark: { ticket: '#2C3320', ink: '#CBDB9A', line: '#4A5530' }
  },
  budget: {
    flight: [600, 1000], flightLabel: 'Flug Frankfurt – Ulaanbaatar (MIAT), hin und zurück',
    hotel: [['Einfaches Camp', 40], ['Gutes Camp', 90], ['Komfort-Lodge', 180]],
    food: [['Sparsam', 15], ['Normal', 25], ['Schlemmen', 45]],
    extra: 150, extraLabel: 'Trinkgeld, SIM, Kaschmir, Souvenirs',
    transportLabel: 'Fahrer, Guide und Transfers aus eurem Plan'
  },
  warnings: {
    after: [{ date: '2026-12-31', text: 'Die Visumfreiheit für Deutsche (30 Tage) ist laut einigen Quellen bis Ende 2026 befristet. Prüft vor dem Buchen, ob sie verlängert wurde.' }],
    holidays: [
      { name: 'das Naadam-Fest (11.–15. Juli)', from: '07-10', to: '07-16', text: 'Ringen, Bogenschießen und Pferderennen – ein Highlight, aber Flüge, Hotels und Fahrer sind dann teuer und früh ausgebucht.' }
    ],
    seasons: [
      { months: [10, 11, 12, 1, 2, 3, 4], text: 'Außerhalb der Saison ist es eisig, bis −30 °C in Ulaanbaatar. Die meisten Jurtencamps in der Gobi haben von Oktober bis April geschlossen.' },
      { months: [7, 8], text: 'Juli und August sind Hauptsaison mit gelegentlichen Gewittern. Pisten können nach Regen schlammig werden.' }
    ]
  },

  cities: {
    fra: { name: 'Unterwegs', loc: 'Франкфурт', py: 'Frankfurt' },
    ub: {
      name: 'Ulaanbaatar', loc: 'Улаанбаатар', py: 'Ulaanbaatar', color: ['#2C4F9E', '#89A8EC'],
      why: `Chaotische Hauptstadt zwischen Sowjet-Plattenbauten, Glastürmen, Klöstern und Jurtenvierteln. Hier startet jede Tour – und hier gibt es Kaschmir zu fairen Preisen.`,
      stay: `Rund um den Sükhbaatar-Platz – zentral, zu Fuß zu Museen, Restaurants und Klöstern.`,
      stayTip: `Der Verkehr ist berüchtigt: lieber zentral wohnen und laufen, statt im Stau zu stehen.`,
      move: `Im Zentrum zu Fuß, sonst Taxi per App (UBCab). Busse sind voll und langsam.`,
      arrive: `Der neue Flughafen Chinggis Khaan (UBN) liegt ca. 50 km südlich, mit dem Taxi ca. 1 Std. Viele Touranbieter holen euch ab.`,
      prices: [['Budget', '30–50 €'], ['Mittelklasse', '60–110 €'], ['Komfort', 'ab 150 €']]
    },
    ter: {
      name: 'Terelj', loc: 'Тэрэлж', py: 'Tereldsch', color: ['#2E7D4F', '#6CC98F'],
      why: `Nationalpark eine Stunde von der Hauptstadt: Granitfelsen, Lärchenwälder, Flüsse – die erste Nacht in der Jurte.`,
      stay: `Jurtencamps im Tal, viele mit Vollpension.`,
      stayTip: `Gut zur Eingewöhnung: Wenn euch Jurte und Plumpsklo nicht gefallen, merkt ihr es hier und nicht mitten in der Gobi.`,
      move: `Mit Fahrer ab Ulaanbaatar ca. 1,5 Std., im Park zu Fuß oder zu Pferd.`,
      arrive: `Unterwegs liegt die 40 m hohe Dschingis-Khan-Reiterstatue.`,
      prices: [['Einfaches Camp', '35–60 €'], ['Gutes Camp', '70–120 €'], ['Lodge', 'ab 150 €']],
      priceNote: 'pro Jurte und Nacht, meist mit Essen'
    },
    gobi: {
      name: 'Gobi', loc: 'Говь', py: 'Gobi', color: ['#B5651D', '#F0A35E'],
      why: `Keine Sandwüste wie die Sahara, sondern Steppe, Felsschluchten und rote Klippen voller Dinosaurierknochen – und dann plötzlich 300 m hohe Dünen.`,
      stay: `Jurtencamps an den Stationen: Tsagaan Suvarga, Yolyn Am, Khongoryn Els, Bayanzag, Ongi.`,
      stayTip: `Duschen gibt es nicht überall jeden Tag. Feuchttücher und Stirnlampe gehören ins Handgepäck.`,
      move: `Nur mit Geländewagen und Fahrer: Tagesetappen von 4–8 Std. über Pisten.`,
      arrive: `Ab Ulaanbaatar ca. 8–9 Std. Fahrt bis zur ersten Station – oder Inlandsflug nach Dalanzadgad.`,
      prices: [['Einfaches Camp', '35–60 €'], ['Gutes Camp', '70–130 €'], ['Lodge', 'ab 150 €']],
      priceNote: 'pro Jurte und Nacht, meist mit Essen'
    },
    ork: {
      name: 'Orkhon-Tal', loc: 'Орхон', py: 'Orchon', color: ['#7A3F98', '#C58BE0'],
      why: `UNESCO-Kulturlandschaft: Kharkhorin, die Hauptstadt des Mongolenreichs, das Kloster Erdene Zuu, ein Wasserfall in der Steppe und Nomadenfamilien an jedem Hang.`,
      stay: `Jurtencamps bei Kharkhorin und am Orkhon-Wasserfall.`,
      stayTip: `Im Orkhon-Tal leben viele Nomadenfamilien – eine Nacht bei einer Familie ist hier leicht zu organisieren.`,
      move: `Mit Fahrer. Von Kharkhorin zum Wasserfall sind es schlechte Pisten, ca. 3 Std.`,
      arrive: `Von der Gobi über das Kloster Ongi, ca. 6–7 Std. Fahrt.`,
      prices: [['Einfaches Camp', '35–60 €'], ['Gutes Camp', '70–120 €'], ['Lodge', 'ab 140 €']],
      priceNote: 'pro Jurte und Nacht, meist mit Essen'
    },
    khu: {
      name: 'Khustai', loc: 'Хустай', py: 'Chustai', color: ['#9A6A12', '#E2B65C'],
      why: `Nationalpark, in dem die Przewalski-Pferde wieder frei leben – die letzten echten Wildpferde der Welt.`,
      stay: `Das Jurtencamp am Parkeingang.`,
      stayTip: `Die Pferde sieht man am besten in der Abenddämmerung, wenn sie zum Trinken herunterkommen.`,
      move: `Mit Fahrer, im Park auf Pisten.`,
      arrive: `Ca. 2 Std. von Ulaanbaatar.`,
      prices: [['Jurte', '40–70 €'], ['Jurte mit Essen', '70–110 €'], ['Komfort', 'ab 120 €']],
      priceNote: 'pro Jurte und Nacht'
    },
    any: { name: 'Überall', loc: '', py: '' }
  },

  /* c = Ort, cat = Kategorien, v = Verrückt-Faktor 0–3, d = Dauer in Std., p = Preis p. P. in Tögrög,
     pt = Preistext, w = übliche Tageszeit (0 Früh … 5 Ganztags), closed/only = Wochentage (0 = So) */
  activities: [
    // ---------- Transfers ----------
    { id: 't-fra-ub', c: 'fra', t: 'Flug Frankfurt → Ulaanbaatar', cat: ['transport'], v: 0, d: 9, p: 0, pt: 'hin und zurück ca. 600–1.000 €', w: 4, mode: 'flug', dshort: '8½ Std.', taxi: false,
      desc: `Direktflug mit MIAT Mongolian Airlines in ca. 8,5 Std. zum Flughafen Chinggis Khaan. Die Mongolei ist 6 Std. (Sommerzeit) bzw. 7 Std. (Winterzeit) voraus.`,
      tip: `MIAT ist die einzige Airline mit Direktflug, im Sommer fast täglich. Alternativ mit Umstieg in Istanbul oder Peking.` },
    { id: 't-ub-ter', c: 'ter', t: 'Fahrt in den Terelj-Nationalpark', loc: 'Тэрэлж', cat: ['transport'], v: 0, d: 2, p: 0, pt: 'mit eurem Fahrer', w: 1, mode: 'auto', dshort: '1½ Std.',
      desc: `Raus aus der Stadt nach Osten, über Asphalt bis ins Tal von Terelj.`,
      tip: `Den Fahrer schon für diesen Tag buchen – dann lernt ihr ihn vor der langen Gobi-Tour kennen.` },
    { id: 't-tour', c: 'gobi', t: 'Rundreise mit Fahrer & Guide', loc: 'Жолооч', cat: ['transport'], v: 1, d: 9, p: 3200000, pt: 'ca. 650–1.000 € p. P. für 10 Tage (Auto, Sprit, Fahrer, Guide)', w: 1, mode: 'auto', dshort: '8 Std.',
      desc: `Im Geländewagen (oft ein russischer UAZ-Bus oder Land Cruiser) mit Fahrer und englischsprachigem Guide in die Gobi. Erste Etappe: ca. 8 Std. bis Tsagaan Suvarga.`,
      tip: `Über einen Anbieter vor Ort buchen, Bewertungen lesen. Klären, ob Camps, Essen und Eintritte im Preis sind.`,
      book: '2–4 Monate vorher, für Juli früher' },
    { id: 't-gobi-ork', c: 'ork', t: 'Fahrt Gobi → Kharkhorin', loc: 'Хархорин', cat: ['transport'], v: 0, d: 7, p: 0, pt: 'im Tourpreis', w: 1, mode: 'auto', dshort: '7 Std.',
      desc: `Vom Kloster Ongi nach Norden – die Wüste wird zur grünen Steppe.`,
      tip: `Unterwegs anhalten, wenn ihr Nomaden seht – Guides fragen gern, ob ihr in die Jurte dürft.` },
    { id: 't-ork-khu', c: 'khu', t: 'Fahrt Orkhon-Tal → Khustai', loc: 'Хустай', cat: ['transport'], v: 0, d: 6, p: 0, pt: 'im Tourpreis', w: 1, mode: 'auto', dshort: '6 Std.',
      desc: `Zurück Richtung Hauptstadt, große Teile auf Asphalt.`,
      tip: `Mittags Stopp an den Sanddünen Elsen Tasarkhai – eine Mini-Gobi mitten in der Steppe.` },
    { id: 't-khu-ub', c: 'ub', t: 'Fahrt Khustai → Ulaanbaatar', loc: 'Улаанбаатар', cat: ['transport'], v: 0, d: 2, p: 0, pt: 'im Tourpreis', w: 1, mode: 'auto', dshort: '2 Std.',
      desc: `Letzte Etappe zurück in die Stadt.`,
      tip: `Trinkgeld für Fahrer und Guide vorbereiten: In der Mongolei üblich, ca. 5–10 % des Tourpreises.` },
    { id: 't-ub-fra', c: 'fra', t: 'Rückflug Ulaanbaatar → Frankfurt', cat: ['transport'], v: 0, d: 9, p: 0, pt: 'im Flugpreis enthalten', w: 1, mode: 'flug', dshort: '9 Std.', taxi: false,
      desc: `Direktflug mit MIAT, ca. 9 Std. Dank Zeitverschiebung landet ihr am selben Tag.`,
      tip: `3 Std. vorher am Flughafen sein – die Fahrt dorthin kann im Stau über eine Stunde dauern.` },

    // ---------- Ulaanbaatar ----------
    { id: 'ub-gandan', c: 'ub', t: 'Kloster Gandan', loc: 'Гандантэгчинлэн хийд', cat: ['klassiker', 'kultur'], v: 0, d: 1.5, p: 5000, w: 0,
      desc: `Das wichtigste buddhistische Kloster des Landes mit einer 26 m hohen goldenen Buddha-Statue. Morgens singen die Mönche.`,
      tip: `Gegen 9 Uhr kommen, dann laufen die Gebete. Im Uhrzeigersinn um Tempel und Gebetsmühlen gehen.` },
    { id: 'ub-square', c: 'ub', t: 'Sükhbaatar-Platz', loc: 'Сүхбаатарын талбай', cat: ['klassiker'], v: 0, d: 1, p: 0, w: 3,
      desc: `Riesiger Platz vor dem Regierungspalast mit der Statue von Dschingis Khan auf seinem Thron.`,
      tip: `Abends treffen sich hier Familien, Skater und Brautpaare.` },
    { id: 'ub-choijin', c: 'ub', t: 'Choijin-Lama-Tempelmuseum', loc: 'Чойжин ламын сүм', cat: ['kultur'], v: 0, d: 1, p: 10000, w: 3,
      desc: `Kleiner Tempelkomplex mitten zwischen Hochhäusern, voller Masken, Thangkas und Statuen.`,
      tip: `Liegt gleich beim Sükhbaatar-Platz.` },
    { id: 'ub-museum', c: 'ub', t: 'Dschingis-Khan-Nationalmuseum', loc: 'Чингис хааны үндэсний музей', cat: ['kultur'], v: 0, d: 2.5, p: 30000, pt: 'ca. 25.000–30.000 Tögrög', w: 1,
      desc: `Großes neues Museum zur Geschichte des Mongolenreichs – von den Hunnen bis zu den Khanen.`,
      tip: `Wer nur Zeit für ein Museum hat: dieses.` },
    { id: 'ub-throat', c: 'ub', t: 'Kehlgesang-Show Tumen Ekh', loc: 'Түмэн Эх', cat: ['kultur', 'nacht', 'verrueckt'], v: 1, d: 1.5, p: 30000, pt: 'ca. 25.000–35.000 Tögrög', w: 4,
      desc: `Khöömii – Kehlgesang mit zwei Tönen gleichzeitig –, Pferdekopfgeige, Masken und Schlangenmenschen. Gänsehaut garantiert.`,
      tip: `Im Sommer fast jeden Abend. Kurz und perfekt am Ankunftstag.` },
    { id: 'ub-zaisan', c: 'ub', t: 'Zaisan-Denkmal', loc: 'Зайсан толгой', cat: ['klassiker'], v: 0, d: 1, p: 0, w: 4,
      desc: `Sowjetisches Denkmal auf einem Hügel im Süden mit Rundblick über die Stadt.`,
      tip: `Zum Sonnenuntergang die rund 300 Stufen hoch.` },
    { id: 'ub-winter', c: 'ub', t: 'Winterpalast des Bogd Khan', loc: 'Богд хааны ордон', cat: ['kultur'], v: 1, d: 1.5, p: 10000, w: 3,
      desc: `Palast des letzten Herrschers der Mongolei voller kurioser Geschenke – darunter eine Jurte aus 150 Schneeleopardenfellen.`,
      tip: `Liegt auf dem Weg zum Zaisan-Denkmal.` },
    { id: 'ub-market', c: 'ub', t: 'Narantuul-Markt („Schwarzmarkt“)', loc: 'Нарантуул зах', cat: ['verrueckt'], v: 1, d: 2, p: 0, w: 1,
      desc: `Riesiger Markt mit allem: Jurtenteile, Sättel, Deel-Mäntel, Filzstiefel, Ersatzteile.`,
      tip: `Taschendiebe! Wertsachen am Körper, nur wenig Geld dabeihaben.` },
    { id: 'ub-cashmere', c: 'ub', t: 'Kaschmir einkaufen', loc: 'Говь кашемир', cat: ['chill'], v: 0, d: 2, p: 0, pt: 'Pullover ab ca. 300.000 Tögrög', w: 3,
      desc: `Mongolei heißt Kaschmir: In den Fabrikläden gibt es Pullover, Schals und Decken deutlich günstiger als bei uns.`,
      tip: `Der Fabrikladen von Gobi hat eine Outlet-Ecke mit Restposten.` },
    { id: 'ub-buuz', c: 'ub', t: 'Buuz & Khuushuur', loc: 'Бууз', cat: ['essen'], v: 0, d: 1, p: 10000, w: 2, taxi: false,
      desc: `Gedämpfte Teigtaschen (Buuz) und frittierte Fladen (Khuushuur) mit Hammel – das Fastfood der Mongolen.`,
      tip: `In kleinen Kantinen („Guanz“) gibt es ein Mittagessen für wenige Euro.` },

    // ---------- Terelj ----------
    { id: 'ter-statue', c: 'ter', t: 'Dschingis-Khan-Reiterstatue', loc: 'Чингис хааны морьт хөшөө', cat: ['klassiker', 'verrueckt'], v: 1, d: 1.5, p: 20000, pt: 'ca. 20.000 Tögrög', w: 1,
      desc: `40 m hoher Edelstahl-Dschingis auf einem Pferd. Mit dem Aufzug geht es hoch, bis in den Kopf des Pferdes.`,
      tip: `Liegt auf dem Weg nach Terelj, ca. 1 Std. östlich der Stadt.` },
    { id: 'ter-turtle', c: 'ter', t: 'Schildkrötenfelsen & Ariyabal-Kloster', loc: 'Мэлхий хад', cat: ['natur', 'kultur'], v: 0, d: 3, p: 0, w: 3,
      desc: `Ein Granitfelsen, der wie eine Schildkröte aussieht, und ein kleines Meditationskloster am Hang mit 108 Stufen.`,
      tip: `Vom Kloster aus der schönste Blick über das Tal.` },
    { id: 'ter-hike', c: 'ter', t: 'Wanderung durchs Terelj-Tal', loc: 'Тэрэлж', cat: ['natur', 'chill'], v: 0, d: 4, p: 0, w: 1,
      desc: `Wiesen, Lärchen, bizarre Felsen und Herden – einfache Wege ohne Markierung.`,
      tip: `Mit dem Camp absprechen, wohin ihr geht. Das Netz ist lückenhaft.` },

    // ---------- Gobi ----------
    { id: 'gobi-tsagaan', c: 'gobi', t: 'Tsagaan Suvarga: weiße Klippen', loc: 'Цагаан суварга', cat: ['natur'], v: 0, d: 2, p: 0, w: 4,
      desc: `Erodierte Kalksteinklippen in Weiß, Rosa und Orange, die wie eine Ruinenstadt aussehen. Am schönsten zum Sonnenuntergang.`,
      tip: `Nicht zu nah an die Abbruchkante – der Boden ist bröckelig.` },
    { id: 'gobi-yolyn', c: 'gobi', t: 'Yolyn Am: die Eisschlucht', loc: 'Ёлын ам', cat: ['natur'], v: 0, d: 3, p: 5000, w: 1,
      desc: `Enge Schlucht im Gebirge, in der oft bis in den Sommer Eis liegt. Mit Geiern, Steinböcken und Pfeifhasen.`,
      tip: `Das Eis schmilzt meist im Juli. Am Eingang kann man Pferde leihen.` },
    { id: 'gobi-khongor', c: 'gobi', t: 'Singende Dünen Khongoryn Els', loc: 'Хонгорын элс', cat: ['klassiker', 'natur', 'verrueckt'], v: 2, d: 4, p: 0, w: 3,
      desc: `Bis zu 300 m hohe Sanddünen auf über 100 km Länge. Der Aufstieg ist brutal – oben „singen“ die Dünen, wenn man herunterrutscht.`,
      tip: `Zum Sonnenuntergang hoch, ca. 1 Std. Barfuß geht es leichter. Wasser mitnehmen.` },
    { id: 'gobi-camel', c: 'gobi', t: 'Kamelritt an den Dünen', loc: 'Тэмээ унах', cat: ['verrueckt', 'natur'], v: 2, d: 2, p: 40000, pt: 'ca. 30.000–50.000 Tögrög', w: 1,
      desc: `Auf zweihöckrigen Baktrischen Kamelen durch die Dünenlandschaft, geführt von der Nomadenfamilie nebenan.`,
      tip: `Zwischen den Höckern sitzt man erstaunlich bequem. Lange Hose!` },
    { id: 'gobi-bayanzag', c: 'gobi', t: 'Flaming Cliffs Bayanzag', loc: 'Баянзаг', cat: ['klassiker', 'natur'], v: 1, d: 2, p: 5000, w: 4,
      desc: `Rote Klippen, an denen in den 1920ern die ersten Dinosaurier-Eier der Welt gefunden wurden. Im Abendlicht glühen sie.`,
      tip: `Fossilien liegen manchmal noch herum – mitnehmen ist streng verboten.` },
    { id: 'gobi-ongi', c: 'gobi', t: 'Ruinen des Klosters Ongi', loc: 'Онгийн хийд', cat: ['kultur'], v: 0, d: 1.5, p: 5000, w: 3,
      desc: `Einst eines der größten Klöster des Landes, 1939 zerstört – heute Ruinen am Fluss, ein Teil wird wieder aufgebaut.`,
      tip: `Einer der Mönche erzählt oft die Geschichte, der Guide übersetzt.` },
    { id: 'gobi-stars', c: 'gobi', t: 'Sternenhimmel über der Wüste', loc: 'Од', cat: ['natur', 'chill'], v: 0, d: 1, p: 0, w: 4, taxi: false,
      desc: `Kein Licht weit und breit: Die Milchstraße spannt sich klar über den ganzen Himmel.`,
      tip: `Reisedatum nach Neumond planen. Warme Jacke – nachts wird es auch im Sommer kalt.` },

    // ---------- Orkhon-Tal ----------
    { id: 'ork-erdene', c: 'ork', t: 'Kloster Erdene Zuu', loc: 'Эрдэнэ Зуу хийд', cat: ['klassiker', 'kultur'], v: 0, d: 2, p: 10000, pt: 'ca. 5.000–15.000 Tögrög', w: 1,
      desc: `Das älteste erhaltene buddhistische Kloster der Mongolei (1585), umgeben von einer Mauer mit 108 weißen Stupas – gebaut aus den Steinen der alten Hauptstadt Karakorum.`,
      tip: `Mit Führung lohnt es sich: Die Tempel sind voller Geschichten.` },
    { id: 'ork-museum', c: 'ork', t: 'Kharkhorum-Museum', loc: 'Хархорум музей', cat: ['kultur'], v: 0, d: 1, p: 15000, w: 3,
      desc: `Kleines, gutes Museum zur alten Reichshauptstadt Karakorum mit einem Stadtmodell.`,
      tip: `Direkt neben dem Kloster.` },
    { id: 'ork-phallic', c: 'ork', t: 'Phallus-Felsen von Kharkhorin', loc: 'Эрийн чулуу', cat: ['verrueckt'], v: 2, d: 0.5, p: 0, w: 3,
      desc: `Ein steinerner Phallus, der die Mönche des Klosters an die Keuschheit erinnern sollte. Mongolischer Humor.`,
      tip: `Kurzer Fotostopp am Ortsrand.` },
    { id: 'ork-waterfall', c: 'ork', t: 'Orkhon-Wasserfall', loc: 'Улаан цутгалан', cat: ['natur'], v: 0, d: 2, p: 0, w: 1,
      desc: `20 m hoher Wasserfall in einer Basaltschlucht – mitten in der weiten Steppe völlig überraschend.`,
      tip: `Nach Regen spektakulär, im trockenen Frühsommer manchmal fast versiegt.` },
    { id: 'ork-tsenkher', c: 'ork', t: 'Heiße Quellen Tsenkher', loc: 'Цэнхэрийн халуун рашаан', cat: ['chill'], v: 0, d: 3, p: 15000, pt: 'Bad im Camp ca. 10.000–20.000 Tögrög', w: 4,
      desc: `Natürliche heiße Quellen im Wald, die Camps leiten das Wasser in Außenbecken. Nach Tagen auf Pisten ein Traum.`,
      tip: `Liegt ca. 4 Std. vom Wasserfall entfernt – passt mit einem Extra-Tag in die Route.` },

    // ---------- Khustai ----------
    { id: 'khu-takhi', c: 'khu', t: 'Przewalski-Pferde (Takhi)', loc: 'Тахь', cat: ['klassiker', 'natur'], v: 1, d: 3, p: 30000, pt: 'Parkeintritt ca. 25.000–30.000 Tögrög', w: 4,
      desc: `Die einzigen echten Wildpferde der Welt waren in freier Natur ausgestorben und wurden hier ab 1992 wieder angesiedelt. Heute leben über 400 im Park.`,
      tip: `Abends kommen die Herden zum Trinken. Fernglas mitnehmen, Abstand halten.` },
    { id: 'khu-dunes', c: 'khu', t: 'Dünen Elsen Tasarkhai', loc: 'Элсэн тасархай', cat: ['natur', 'verrueckt'], v: 1, d: 1.5, p: 0, w: 2,
      desc: `Ein langer Sandstreifen mitten in der grünen Steppe – die „Mini-Gobi“, oft mit Kamelen davor.`,
      tip: `Liegt an der Straße zwischen Kharkhorin und Ulaanbaatar.` },

    // ---------- Überall ----------
    { id: 'any-horse', c: 'any', t: 'Ausritt in der Steppe', loc: 'Морь унах', cat: ['natur', 'verrueckt'], v: 1, d: 2, p: 40000, pt: 'ca. 30.000–50.000 Tögrög pro Stunde', w: 3, taxi: false,
      desc: `Mongolische Pferde sind klein, zäh und halbwild. Ein Ritt durch die Täler mit Nomaden als Führer.`,
      tip: `Steigt von links auf. Viele Pferde gehen nur auf „Tschu!“ los – fragt den Führer nach dem Kommando.` },
    { id: 'any-homestay', c: 'any', t: 'Nacht bei einer Nomadenfamilie', loc: 'Малчин айлд хонох', cat: ['kultur', 'verrueckt'], v: 2, d: 2, p: 60000, pt: 'ca. 50.000–80.000 Tögrög p. P. inkl. Essen', w: 4, taxi: false,
      desc: `Statt im Touristencamp in der Gästejurte einer Familie schlafen: abends die Tiere einsammeln, morgens beim Melken helfen.`,
      tip: `Über euren Guide organisieren. Gastgeschenke nicht vergessen: Süßigkeiten, Obst, Fotos von zu Hause.` },
    { id: 'any-airag', c: 'any', t: 'Airag: vergorene Stutenmilch', loc: 'Айраг', cat: ['essen', 'verrueckt'], v: 3, d: 0.5, p: 0, w: 3, taxi: false,
      desc: `Leicht alkoholisch, sauer und spritzig. Nomaden reichen sie Gästen in großen Schalen – ganz ablehnen ist unhöflich.`,
      tip: `Kleine Schlucke nehmen, der Magen muss sich daran gewöhnen.` },
    { id: 'any-khorkhog', c: 'any', t: 'Khorkhog: Hammel mit heißen Steinen', loc: 'Хорхог', cat: ['essen', 'verrueckt'], v: 2, d: 2, p: 50000, pt: 'oft im Camp bestellbar', w: 4, taxi: false,
      desc: `Hammelfleisch gart mit glühenden Steinen im verschlossenen Milchkessel. Die heißen Steine reicht man sich danach von Hand zu Hand – das soll Glück bringen.`,
      tip: `Am Vortag beim Camp bestellen.` },
    { id: 'any-archery', c: 'any', t: 'Bogenschießen ausprobieren', loc: 'Сур харваа', cat: ['kultur', 'verrueckt'], v: 1, d: 1, p: 20000, w: 3, taxi: false,
      desc: `Eine der drei Männerkünste des Naadam. Viele Camps haben Bögen und zeigen euch, wie es geht.`,
      tip: `Die Ziele sind kleine Lederzylinder am Boden – treffen ist schwerer als es aussieht.` },
    { id: 'any-vodka', c: 'any', t: 'Mongolischer Wodka mit Ritual', loc: 'Архи', cat: ['essen', 'nacht'], v: 1, d: 1, p: 15000, w: 4, taxi: false,
      desc: `Wodka gehört zu jedem Besuch. Das Ritual: Ringfinger eintauchen und je einen Tropfen in den Himmel, in die Luft und auf die eigene Stirn schnippen.`,
      tip: `Man darf nippen und das Glas zurückgeben.` },
    { id: 'any-naadam', c: 'ub', t: 'Naadam-Fest', loc: 'Наадам', cat: ['klassiker', 'kultur', 'verrueckt'], v: 2, d: 6, p: 100000, pt: 'Stadion ca. 50.000–300.000 Tögrög', w: 5,
      desc: `Das größte Fest des Jahres (11.–15. Juli): Ringen, Pferderennen mit Kinderjockeys über 30 km und Bogenschießen.`,
      tip: `Nur im Juli. Die Eröffnung im Stadion braucht Tickets, die Rennen draußen sind gratis. Kleinere Naadams auf dem Land sind ursprünglicher.` },
    { id: 'any-eagle', c: 'any', t: 'Adlerjäger in Bayan-Ölgii', loc: 'Баян-Өлгий', cat: ['ausflug', 'verrueckt'], v: 2, d: 72, pt: 'Inlandsflug ca. 300–500 €', w: 5, taxi: false,
      desc: `Im äußersten Westen jagen kasachische Nomaden mit Steinadlern. Anfang Oktober gibt es das Golden Eagle Festival.`,
      tip: `Nur mit Inlandsflug (ca. 3,5 Std.) und mehreren Extra-Tagen.` },
    { id: 'any-khovsgol', c: 'any', t: 'Khövsgöl-See', loc: 'Хөвсгөл нуур', cat: ['ausflug', 'natur'], v: 1, d: 96, pt: 'Inlandsflug + Camp', w: 5, taxi: false,
      desc: `Riesiger, glasklarer Bergsee im Norden an der Grenze zu Sibirien, mit Rentiernomaden in der Taiga.`,
      tip: `Inlandsflug nach Mörön, dann ca. 3 Std. Fahrt. Braucht mindestens 4 Tage extra.` }
  ],

  /* Vorgeschlagener Plan: [Aktivität, Tageszeit] */
  defaultPlan: [
    { city: 'fra', items: [['t-fra-ub', 4]] },
    { city: 'ub', items: [['ub-square', 3], ['ub-choijin', 3], ['ub-throat', 4], ['ub-buuz', 4]] },
    { city: 'ter', items: [['ub-gandan', 0], ['t-ub-ter', 1], ['ter-statue', 1], ['ter-turtle', 3], ['any-horse', 3]] },
    { city: 'gobi', items: [['t-tour', 1], ['gobi-tsagaan', 4]] },
    { city: 'gobi', items: [['gobi-yolyn', 1], ['gobi-stars', 4]] },
    { city: 'gobi', items: [['gobi-khongor', 3]] },
    { city: 'gobi', items: [['gobi-camel', 1], ['any-archery', 3], ['any-khorkhog', 4]] },
    { city: 'gobi', items: [['gobi-bayanzag', 4]] },
    { city: 'gobi', items: [['gobi-ongi', 3], ['any-airag', 3]] },
    { city: 'ork', items: [['t-gobi-ork', 1], ['ork-erdene', 3], ['ork-phallic', 3]] },
    { city: 'ork', items: [['ork-waterfall', 1], ['any-homestay', 4]] },
    { city: 'khu', items: [['t-ork-khu', 1], ['khu-dunes', 2], ['khu-takhi', 4]] },
    { city: 'ub', items: [['t-khu-ub', 1], ['ub-winter', 3], ['ub-zaisan', 4]] },
    { city: 'ub', items: [['ub-museum', 1], ['ub-market', 1], ['ub-cashmere', 3], ['any-vodka', 4]] },
    { city: 'fra', items: [['t-ub-fra', 1]] }
  ],

  tickets: {
    't-fra-ub': { from: ['Франкфурт', 'Frankfurt (FRA)'], to: ['Улаанбаатар', 'Chinggis Khaan (UBN)'], label: 'Flug' },
    't-ub-ter': { from: ['Улаанбаатар', 'Ulaanbaatar'], to: ['Тэрэлж', 'Terelj'], label: 'Fahrer' },
    't-tour': { from: ['Улаанбаатар', 'Ulaanbaatar'], to: ['Говь', 'Gobi'], label: 'Geländewagen' },
    't-gobi-ork': { from: ['Онги', 'Kloster Ongi'], to: ['Хархорин', 'Kharkhorin'], label: 'Geländewagen' },
    't-ork-khu': { from: ['Орхон', 'Orkhon-Tal'], to: ['Хустай', 'Khustai'], label: 'Geländewagen' },
    't-khu-ub': { from: ['Хустай', 'Khustai'], to: ['Улаанбаатар', 'Ulaanbaatar'], label: 'Geländewagen' },
    't-ub-fra': { from: ['Улаанбаатар', 'Chinggis Khaan (UBN)'], to: ['Франкфурт', 'Frankfurt (FRA)'], label: 'Flug' }
  },

  /* Ø Tageshöchstwerte in °C, gerundet */
  weather: {
    ub: [-16, -11, -1, 8, 16, 21, 23, 21, 15, 6, -5, -14],
    ter: [-17, -13, -3, 6, 14, 19, 21, 19, 13, 4, -7, -15],
    gobi: [-9, -4, 4, 13, 20, 26, 28, 26, 20, 11, 1, -7],
    ork: [-13, -9, 0, 9, 16, 21, 22, 20, 15, 7, -3, -11],
    khu: [-14, -10, -1, 8, 15, 20, 22, 20, 14, 5, -5, -12]
  },

  prep: [
    { id: 'p-flug', off: -150, t: 'Flug mit MIAT buchen', d: 'Direktflug Frankfurt – Ulaanbaatar. Für Juli (Naadam) besonders früh.' },
    { id: 'p-pass', off: -120, t: 'Reisepass prüfen', d: 'Muss bei Einreise noch 6 Monate gültig sein. Deutsche dürfen bis zu 30 Tage ohne Visum bleiben.' },
    { id: 'p-tour', off: -120, t: 'Tour mit Fahrer und Guide buchen', d: 'Anbieter vor Ort vergleichen, Bewertungen lesen. Klären: Auto, Sprit, Camps, Essen, Eintritte, Englisch des Guides.' },
    { id: 'p-hotel', off: -60, t: 'Hotel in Ulaanbaatar buchen', d: 'Für Anfang und Ende der Reise. Die Camps organisiert meist der Touranbieter.' },
    { id: 'p-vacc', off: -60, t: 'Impfungen beim Hausarzt checken', d: 'Standardimpfungen, Hepatitis A, für Reiter und Landreisen Tollwut erwägen.' },
    { id: 'p-visa', off: -45, t: 'Einreiseregeln prüfen', d: 'Die Visumfreiheit ist laut einigen Quellen bis Ende 2026 befristet. Beim Auswärtigen Amt nachsehen.' },
    { id: 'p-ins', off: -30, t: 'Auslandskrankenversicherung mit Rücktransport', d: 'In der Steppe ist das nächste gute Krankenhaus weit weg. Ein Rücktransport muss abgedeckt sein.' },
    { id: 'p-esim', off: -14, t: 'eSIM oder lokale SIM', d: 'In Ortschaften gibt es Netz, in der Gobi oft tagelang nicht. Unitel und Mobicom haben die beste Abdeckung.' },
    { id: 'p-offline', off: -7, t: 'Offline-Karten laden', d: 'Google Maps und Maps.me für die ganze Route offline speichern.' },
    { id: 'p-elefand', off: -10, t: 'In Elefand eintragen', d: 'Die Krisenvorsorgeliste des Auswärtigen Amts.' },
    { id: 'p-cash', off: -7, t: 'Bargeld einplanen', d: 'Außerhalb von Ulaanbaatar geht fast nur Bargeld. In der Stadt abheben oder Euro wechseln.' },
    { id: 'p-gifts', off: -3, t: 'Gastgeschenke kaufen', d: 'Süßigkeiten, Obst, Postkarten aus Deutschland – für Nomadenfamilien.' },
    { id: 'p-addr', off: -2, t: 'Hoteladresse auf Mongolisch speichern', d: 'Unter „Tage“ beim Hotel eintragen – dann gibt es dafür eine Taxi-Karte.' }
  ],

  packing: [
    'Reisepass (plus Foto davon in der Cloud)',
    'Bargeld in Euro oder Dollar, saubere Scheine',
    'Leichter Schlafsack oder Inlett für die Jurten',
    'Stirnlampe',
    'Große Powerbank – Strom gibt es in Camps oft nur abends',
    'Kfz-Ladekabel für den Geländewagen',
    'Feuchttücher, Toilettenpapier, Desinfektionsgel',
    'Warme Jacke, Mütze, Handschuhe – Nächte sind kalt',
    'Sonnencreme, Sonnenbrille, Hut',
    'Halstuch gegen Staub',
    'Feste Schuhe und lange Hose zum Reiten',
    'Reiseapotheke: Magen, Durchfall, Reisekrankheit',
    'Wasserfilterflasche',
    'Ohrstöpsel',
    'Gastgeschenke für Nomadenfamilien'
  ],

  phrases: [
    ['Сайн байна уу', 'sain baina uu', 'Hallo'],
    ['Баярлалаа', 'bayarlalaa', 'Danke'],
    ['Хэд вэ?', 'khed ve?', 'Wie viel kostet das?'],
    ['Энэ', 'ene', 'Das hier'],
    ['Үгүй, баярлалаа', 'ügüi, bayarlalaa', 'Nein, danke'],
    ['Бид Германаас ирсэн', 'bid Germanaas irsen', 'Wir kommen aus Deutschland'],
    ['Жорлон хаана байна?', 'jorlon khaana baina?', 'Wo ist die Toilette?'],
    ['Энд хүргэж өгнө үү', 'end khürgej ögnö üü', 'Bitte fahren Sie mich hierhin'],
    ['Нохой хорь!', 'nokhoi khor!', 'Haltet den Hund fest! (ruft man vor einer fremden Jurte)'],
    ['Амттай!', 'amttai!', 'Lecker!'],
    ['Эрүүл мэндийн төлөө!', 'erüül mendiin tölöö!', 'Prost – auf die Gesundheit!'],
    ['Сайхан амраарай', 'saikhan amraarai', 'Erholt euch gut – zum Abschied']
  ],

  tips: [
    { id: 'visum', title: 'Einreise & Visum', html: `
      <p>Deutsche dürfen laut den meisten Quellen <strong>bis zu 30 Tage ohne Visum</strong> in die Mongolei. Einige Quellen nennen eine Befristung bis Ende 2026 – vor dem Buchen beim Auswärtigen Amt prüfen.</p>
      <ul>
        <li>Der Pass muss bei Einreise noch 6 Monate gültig sein.</li>
        <li>Wer länger als 30 Tage bleibt, braucht ein Visum und muss sich registrieren.</li>
        <li>Rückflugticket und Tourbestätigung griffbereit haben.</li>
      </ul>
      <p><a href="https://www.auswaertiges-amt.de" target="_blank" rel="noopener">Auswärtiges Amt</a> – dort unter „Reise- und Sicherheitshinweise“ die Mongolei wählen.</p>` },
    { id: 'geld', title: 'Geld & Bezahlen', html: `
      <ul>
        <li>Die Währung ist der Tögrög (₮). Faustregel: 1 € ≈ 4.000 Tögrög. Den Kurs könnt ihr unter „Route“ anpassen.</li>
        <li>In Ulaanbaatar gehen Karten in Hotels, Supermärkten und vielen Restaurants. Auf dem Land fast nur Bargeld.</li>
        <li>Automaten gibt es in Ulaanbaatar und in den Provinzhauptstädten – nicht in der Steppe.</li>
        <li>Trinkgeld für Fahrer und Guide ist üblich: ca. 5–10 % des Tourpreises am Ende.</li>
      </ul>` },
    { id: 'unterwegs', title: 'Unterwegs in der Steppe', html: `
      <p>Öffentlicher Verkehr bringt euch kaum zu den Highlights. Fast alle Reisenden buchen einen <strong>Geländewagen mit Fahrer und Guide</strong>.</p>
      <ul>
        <li>Tagesetappen von 4–8 Std. über Pisten – rüttelig, staubig, aber spektakulär.</li>
        <li>Toilette heißt oft: hinter dem nächsten Hügel. In Camps gibt es Plumpsklos, manchmal Duschen.</li>
        <li>Pläne ändern sich: Regen, Pannen, gesperrte Pisten. Ein Puffertag hilft.</li>
        <li>Bei Reisekrankheit vorne sitzen und Tabletten mitnehmen.</li>
      </ul>` },
    { id: 'jurte', title: 'Zu Gast in der Jurte', html: `
      <ul>
        <li>Nicht auf die Türschwelle treten – das bringt Unglück.</li>
        <li>In der Jurte im Uhrzeigersinn bewegen, nicht zwischen den beiden Mittelstützen durchgehen.</li>
        <li>Angebotenes mit der rechten Hand (oder beiden) annehmen und zumindest probieren.</li>
        <li>Füße nicht in Richtung Ofen oder Hausaltar strecken.</li>
        <li>Vor einer fremden Jurte „Нохой хорь!“ rufen: Haltet den Hund fest!</li>
      </ul>` },
    { id: 'internet', title: 'Internet & Apps', html: `
      <ul>
        <li>Nichts ist gesperrt. SIM-Karten von Unitel oder Mobicom gibt es am Flughafen.</li>
        <li>Rechnet in der Gobi mit Tagen ohne Netz – Familie vorher informieren.</li>
        <li>Offline-Karten laden (Google Maps, Maps.me). Taxi in Ulaanbaatar per UBCab-App.</li>
      </ul>
      <p>Diese Seite funktioniert nach dem ersten Öffnen auch offline.</p>` },
    { id: 'essen', title: 'Essen & Trinken', html: `
      <ul>
        <li>Hammel, Hammel, Hammel: Buuz, Khuushuur, Tsuivan (gebratene Nudeln), Khorkhog.</li>
        <li>Vegetarisch ist auf dem Land sehr schwierig – vorher mit dem Touranbieter klären.</li>
        <li>Milchtee (Süütei Tsai) ist salzig. Airag ist vergorene Stutenmilch, Aaruul getrockneter Quark.</li>
        <li>In Ulaanbaatar gibt es gute internationale Restaurants und Craft-Bier.</li>
        <li>Leitungswasser nicht trinken. Wasser abkochen oder filtern.</li>
      </ul>` },
    { id: 'sicherheit', title: 'Sicherheit & Gesundheit', html: `
      <ul>
        <li>Die Mongolei ist für Reisende sicher. In Ulaanbaatar gibt es Taschendiebe, vor allem auf Märkten und in Bussen.</li>
        <li>Nachts Gruppen betrunkener Männer meiden.</li>
        <li>Hunde bei Jurten können aggressiv sein – nie allein auf eine Jurte zugehen.</li>
        <li>Medizinische Versorgung auf dem Land ist schwach: Versicherung mit Rücktransport ist Pflicht.</li>
        <li>Der Verkehr in der Stadt ist chaotisch. Auf Zebrastreifen nicht verlassen.</li>
      </ul>` },
    { id: 'wetter', title: 'Reisezeit & Wetter', html: `
      <p><strong>Beste Zeit: Juni bis September.</strong> Im Juli ist Naadam – ein Highlight, aber alles ist teurer und voll. Ab Oktober schließen die meisten Camps.</p>
      <ul>
        <li>Große Unterschiede zwischen Tag und Nacht: mittags 30 °C in der Gobi, nachts unter 10 °C.</li>
        <li>Im Winter ist Ulaanbaatar die kälteste Hauptstadt der Welt – und hat dann starken Smog.</li>
      </ul>
      <div id="weather-table"></div>` },
    { id: 'notfall', title: 'Notfall', html: `
      <ul>
        <li>Polizei <strong>102</strong>, Rettung <strong>103</strong>, Feuerwehr <strong>101</strong>.</li>
        <li>Deutsche Botschaft Ulaanbaatar: <a href="tel:+97611323325">+976 11 323325</a>.</li>
        <li><a href="https://krisenvorsorgeliste.diplo.de" target="_blank" rel="noopener">Elefand – Krisenvorsorgeliste</a> des Auswärtigen Amts.</li>
        <li>Euer Guide ist im Notfall der wichtigste Kontakt – Nummer im Handy speichern.</li>
      </ul>` }
  ]
});
