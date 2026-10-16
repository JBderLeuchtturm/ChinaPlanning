/* Reise: Aserbaidschan. Preise sind Richtwerte pro Person in Manat (Stand 2025/26) – vor Ort prüfen. */
(window.TRIPS = window.TRIPS || []).push({
  id: 'azerbaijan',
  name: 'Aserbaidschan',
  title: 'Zwei Wochen Aserbaidschan',
  lede: 'Flammentürme und Altstadt in Baku, brennende Berge und Schlammvulkane, ein uraltes Bergdorf im Kaukasus und eine Nacht in der Karawanserei von Scheki. Unter „Tage“ liegt schon ein fertiger Plan. Ihr tauscht nur noch aus, was euch nicht passt, und schickt ihn euch per Link.',
  routeLede: 'Direktflug nach Baku, dann mit Bus, Fahrer und Zug in den Norden und Westen. Die Landgrenzen sind bis auf die Bahn nach Georgien geschlossen – ihr reist per Flugzeug ein und aus.',
  seal: 'Ə',
  sealFmt: 'Gün {n}',
  lang: 'az',
  script: 'alpha',
  font: { family: 'Noto Serif Display', weight: 900, fallback: "'Noto Serif', Georgia, serif" },
  locFont: "system-ui, 'Segoe UI', Roboto, 'Noto Sans', sans-serif",
  taxiAsk: 'Zəhmət olmasa, məni bura aparın',
  currency: { label: 'Manat', rate: 1.9, rateLabel: '1 € in Manat' },
  maps: [
    { label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query={q}%20{cityName}' }
  ],
  theme: {
    light: { ticket: '#F3DDE1', ink: '#87203F', line: '#E0B5BF' },
    dark: { ticket: '#3A1C26', ink: '#F0B9C8', line: '#5E2F3E' }
  },
  budget: {
    flight: [250, 500], flightLabel: 'Flug Frankfurt – Baku, hin und zurück',
    hotel: [['Budget', 35], ['Mittelklasse', 70], ['Komfort', 140]],
    food: [['Sparsam', 20], ['Normal', 30], ['Schlemmen', 55]],
    extra: 120, extraLabel: 'E-Visum, Taxi, SIM, Souvenirs',
    transportLabel: 'Busse, Fahrer und Zug aus eurem Plan'
  },
  warnings: {
    after: [],
    holidays: [
      { name: 'Novruz, das Frühlingsfest (um den 20. März)', from: '03-19', to: '03-25', text: 'Ein schönes Fest mit Feuer, Süßigkeiten und Familienbesuchen – Behörden und manche Museen haben dann zu.' }
    ],
    seasons: [
      { months: [7, 8], text: 'Hochsommer: In Baku und Gəncə oft über 30 °C, in den Bergen angenehmer.' },
      { months: [12, 1, 2], text: 'Winter: Baku ist mild, aber stürmisch. Bergdörfer wie Xınalıq sind oft verschneit und schwer erreichbar.' }
    ]
  },

  cities: {
    fra: { name: 'Unterwegs', loc: 'Frankfurt', py: 'Frankfurt' },
    baku: {
      name: 'Baku', loc: 'Bakı', py: 'Bakı', color: ['#1F5E9E', '#7DB2EA'],
      why: `Ölboom-Metropole am Kaspischen Meer: eine mittelalterliche Altstadt mit Karawansereien, darüber die Flammentürme und Zaha Hadids geschwungenes Kulturzentrum.`,
      stay: `In oder direkt an der Altstadt (İçərişəhər) oder an der Strandpromenade – fast alles ist zu Fuß erreichbar.`,
      stayTip: `Boutique-Hotels in der Altstadt mit Dachterrasse sind nicht teuer und wunderschön.`,
      move: `Metro (sehr billig, sowjetische Prachtstationen) mit der BakıKart, dazu Bolt-Taxis per App.`,
      arrive: `Vom Flughafen mit dem Aeroexpress-Bus oder Bolt ca. 25–30 Min. in die Stadt.`,
      prices: [['Budget', '30–55 €'], ['Mittelklasse', '60–110 €'], ['Komfort', 'ab 140 €']]
    },
    quba: {
      name: 'Quba & Xınalıq', loc: 'Quba', py: 'Quba', color: ['#2E7D4F', '#6CC98F'],
      why: `Apfelgärten, Teppichweber und das Dorf der Bergjuden. Dahinter, auf 2.300 m, liegt Xınalıq – eines der ältesten bewohnten Dörfer der Welt, mit eigener Sprache.`,
      stay: `Pensionen in Quba – und eine Nacht im Homestay direkt in Xınalıq.`,
      stayTip: `In Xınalıq gibt es einfache Gästezimmer bei Familien, mit Abendessen. Unbedingt eine Nacht oben bleiben.`,
      move: `Nach Xınalıq mit Taxi oder Fahrer über eine Bergstraße, ca. 1,5 Std. ab Quba.`,
      arrive: `Ab Baku ca. 2,5–3 Std. mit Bus oder Fahrer.`,
      prices: [['Budget', '25–45 €'], ['Mittelklasse', '50–90 €'], ['Komfort', 'ab 100 €']]
    },
    sheki: {
      name: 'Scheki', loc: 'Şəki', py: 'Şəki', color: ['#B0532A', '#EE9566'],
      why: `Seidenstraßen-Städtchen am Fuß des Kaukasus mit dem Palast der Khane voller Buntglasfenster, einer Karawanserei als Hotel und den besten Süßigkeiten des Landes.`,
      stay: `In der Karawanserei (Yuxarı Karvansaray) oder in Pensionen in der Altstadt.`,
      stayTip: `Die Karawanserei ist einfach, aber einmalig: Schlafen in einer Herberge aus dem 18. Jahrhundert.`,
      move: `Die Altstadt zu Fuß, ins Umland mit Taxi.`,
      arrive: `Ab Quba mit Fahrer ca. 6–7 Std. (mit Stopps), ab Baku mit Bus ca. 5 Std.`,
      prices: [['Budget', '25–45 €'], ['Mittelklasse', '45–80 €'], ['Komfort', 'ab 100 €']]
    },
    ganja: {
      name: 'Gandscha', loc: 'Gəncə', py: 'Gəncə', color: ['#7A3F98', '#C58BE0'],
      why: `Die zweitgrößte Stadt des Landes mit dem Mausoleum des Dichters Nizami, einem Haus aus Flaschen und dem Bergsee Göygöl. Von hier geht es ins Ölbad nach Naftalan.`,
      stay: `Rund um den Zentralplatz, Hotels sind hier günstig.`,
      stayTip: `Gəncə ist ruhiger als Baku – gut zum Durchatmen vor der Rückfahrt.`,
      move: `Taxi im Ort, nach Göygöl ca. 45 Min., nach Naftalan ca. 1 Std.`,
      arrive: `Ab Scheki ca. 3 Std. mit Bus, zurück nach Baku mit dem Zug.`,
      prices: [['Budget', '25–40 €'], ['Mittelklasse', '45–75 €'], ['Komfort', 'ab 90 €']]
    },
    any: { name: 'Überall', loc: '', py: '' }
  },

  /* c = Ort, cat = Kategorien, v = Verrückt-Faktor 0–3, d = Dauer in Std., p = Preis p. P. in Manat,
     pt = Preistext, w = übliche Tageszeit (0 Früh … 5 Ganztags), closed/only = Wochentage (0 = So) */
  activities: [
    // ---------- Transfers ----------
    { id: 't-fra-gyd', c: 'fra', t: 'Flug Frankfurt → Baku', cat: ['transport'], v: 0, d: 5, p: 0, pt: 'hin und zurück ca. 250–500 €', w: 4, mode: 'flug', dshort: '5 Std.', taxi: false,
      desc: `Direktflug mit AZAL in ca. 5 Std., alternativ mit Umstieg in Istanbul. Baku ist 2 Std. (Sommerzeit) bzw. 3 Std. (Winterzeit) voraus.`,
      tip: `Das E-Visum (ASAN) vorher online beantragen und ausgedruckt dabeihaben.` },
    { id: 't-baku-quba', c: 'quba', t: 'Bus Baku → Quba', loc: 'Bakı Beynəlxalq Avtovağzal', cat: ['transport'], v: 0, d: 3, p: 6, pt: 'Bus ca. 4–6 Manat, Fahrer ca. 60–80 Manat', w: 1, mode: 'bus', dshort: '3 Std.',
      desc: `Vom großen Busbahnhof in Baku in den Norden, vorbei am Felsberg Beşbarmaq.`,
      tip: `Mit eigenem Fahrer könnt ihr am Beşbarmaq-Berg halten, wo Pilger Wünsche in die Felsen legen.` },
    { id: 't-quba-sheki', c: 'sheki', t: 'Fahrt Quba → Scheki', loc: 'Lahıc', cat: ['transport'], v: 0, d: 6, p: 90, pt: 'Fahrer ca. 150–200 Manat pro Auto', w: 1, mode: 'auto', dshort: '6 Std.',
      desc: `Quer durchs Land über Şamaxı und das Kupferschmiede-Dorf Lahıc – ein langer, aber schöner Tag.`,
      tip: `Öffentlich müsstet ihr über Baku zurück. Den Fahrer über die Pension in Quba organisieren.` },
    { id: 't-sheki-ganja', c: 'ganja', t: 'Bus Scheki → Gandscha', loc: 'Şəki avtovağzalı', cat: ['transport'], v: 0, d: 3, p: 6, pt: 'ca. 5–7 Manat', w: 1, mode: 'bus', dshort: '3 Std.',
      desc: `Mit Bus oder Marschrutka über Land, vorbei an Haselnussplantagen.`,
      tip: `Abfahrt am Busbahnhof Scheki, mehrmals am Tag.` },
    { id: 't-ganja-baku', c: 'baku', t: 'Zug Gandscha → Baku', loc: 'Gəncə vağzalı', cat: ['transport'], v: 0, d: 5, p: 20, pt: 'ca. 10–30 Manat je nach Klasse', w: 1, mode: 'zug', dshort: '4½ Std.',
      desc: `Moderne Stadler-Züge verbinden Gəncə und Baku in ca. 4,5–5 Std. – die bequemste Fahrt im Land.`,
      tip: `Tickets online bei der Staatsbahn ADY oder am Bahnhof, im Sommer vorher kaufen.` },
    { id: 't-gyd-fra', c: 'fra', t: 'Rückflug Baku → Frankfurt', cat: ['transport'], v: 0, d: 5.5, p: 0, pt: 'im Flugpreis enthalten', w: 1, mode: 'flug', dshort: '5½ Std.', taxi: false,
      desc: `Direktflug, viele Abflüge sind nachts oder frühmorgens.`,
      tip: `Kaviar nur mit Zertifikat aus offiziellen Läden und in kleiner Menge mitnehmen – der Zoll prüft.` },

    // ---------- Baku ----------
    { id: 'baku-icheri', c: 'baku', t: 'Altstadt İçərişəhər', loc: 'İçərişəhər', cat: ['klassiker', 'kultur'], v: 0, d: 3, p: 0, w: 1,
      desc: `UNESCO-Altstadt hinter Festungsmauern: enge Gassen, Hammams, Karawansereien und Teppichhändler.`,
      tip: `Früh morgens oder abends ist es am schönsten.` },
    { id: 'baku-maiden', c: 'baku', t: 'Jungfrauenturm', loc: 'Qız qalası', cat: ['klassiker', 'kultur'], v: 0, d: 1, p: 15, pt: 'ca. 15 Manat', w: 1,
      desc: `Rätselhafter runder Turm, mindestens aus dem 12. Jahrhundert. Oben ein Blick über Altstadt und Bucht.`,
      tip: `Die Legende vom Mädchen, das vom Turm sprang, gibt es in vielen Versionen – den Guide fragen.` },
    { id: 'baku-shirvanshah', c: 'baku', t: 'Palast der Schirwanschahs', loc: 'Şirvanşahlar sarayı', cat: ['kultur'], v: 0, d: 1.5, p: 15, pt: 'ca. 15 Manat', w: 3,
      desc: `Palastkomplex der Herrscher von Schirwan mit Moschee, Mausoleum und Badehaus aus dem 15. Jahrhundert.`,
      tip: `Liegt am höchsten Punkt der Altstadt.` },
    { id: 'baku-flame', c: 'baku', t: 'Flame Towers bei Nacht', loc: 'Alov qüllələri', cat: ['klassiker', 'nacht'], v: 1, d: 1.5, p: 1, w: 4,
      desc: `Drei Glastürme in Flammenform, die nachts als lodernde LED-Feuer leuchten.`,
      tip: `Mit der Standseilbahn hoch zum Gedenkpark – von dort der beste Blick über die Bucht.` },
    { id: 'baku-food', c: 'baku', t: 'Plov, Dolma & Qutab', loc: 'Azərbaycan mətbəxi', cat: ['essen', 'klassiker'], v: 0, d: 2, p: 30, w: 4, taxi: false,
      desc: `Safran-Plov mit Trockenfrüchten, Dolma in Weinblättern, Qutab – dünne gefüllte Fladen mit Kräutern oder Fleisch.`,
      tip: `Lokale direkt in der Altstadt sind teurer – ein paar Straßen weiter ist es günstiger und authentischer.` },
    { id: 'baku-gobustan', c: 'baku', t: 'Gobustan & Schlammvulkane', loc: 'Qobustan', cat: ['klassiker', 'natur', 'verrueckt'], v: 2, d: 5, p: 20, pt: 'Eintritt ca. 10 Manat + Fahrer', w: 5,
      desc: `Felszeichnungen aus der Steinzeit (UNESCO), daneben blubbernde graue Schlammvulkane, die kalten Schlamm spucken.`,
      tip: `Zu den Vulkanen fahren alte Lada-Taxis über die Piste – Preis am Parkplatz aushandeln.` },
    { id: 'baku-boulevard', c: 'baku', t: 'Promenade am Kaspischen Meer', loc: 'Dənizkənarı Milli Park', cat: ['chill'], v: 0, d: 2, p: 0, w: 4,
      desc: `Kilometerlange Promenade mit Teehäusern, Riesenrad und einem Mini-Venedig mit Gondeln.`,
      tip: `Abends mit Blick auf die leuchtenden Flame Towers.` },
    { id: 'baku-heydar', c: 'baku', t: 'Heydar Aliyev Center', loc: 'Heydər Əliyev Mərkəzi', cat: ['klassiker', 'kultur'], v: 0, d: 2, p: 15, pt: 'Ausstellung ca. 15–20 Manat', w: 1, closed: [1],
      desc: `Zaha Hadids weißes, geschwungenes Kulturzentrum ohne eine einzige gerade Linie. Allein von außen sehenswert.`,
      tip: `Montags geschlossen. Von außen ist es jederzeit sehenswert.` },
    { id: 'baku-carpet', c: 'baku', t: 'Teppichmuseum', loc: 'Xalça Muzeyi', cat: ['kultur'], v: 0, d: 1.5, p: 10, w: 3, closed: [1],
      desc: `Ein Museum in Form eines eingerollten Teppichs – drinnen Jahrhunderte Teppichkunst.`,
      tip: `Montags geschlossen. Liegt direkt an der Promenade.` },
    { id: 'baku-yanardag', c: 'baku', t: 'Yanar Dağ: der brennende Berg', loc: 'Yanar Dağ', cat: ['verrueckt', 'natur'], v: 2, d: 1.5, p: 10, w: 4,
      desc: `Aus dem Hang strömt Erdgas und brennt seit Jahrzehnten ohne Pause – sogar bei Regen.`,
      tip: `Abends hin, dann leuchtet das Feuer am stärksten.` },
    { id: 'baku-ateshgah', c: 'baku', t: 'Feuertempel Ateşgah', loc: 'Atəşgah', cat: ['kultur'], v: 0, d: 1.5, p: 10, w: 4,
      desc: `Tempel indischer Feueranbeter aus dem 17. Jahrhundert mit Flamme im Innenhof.`,
      tip: `Gut mit Yanar Dağ am selben Abend kombinierbar.` },
    { id: 'baku-metro', c: 'baku', t: 'Sowjetische Metrostationen', loc: 'Bakı Metropoliteni', cat: ['verrueckt', 'kultur'], v: 1, d: 1, p: 1, w: 1,
      desc: `Marmor, Mosaike und Kronleuchter: Stationen wie Nizami oder 28 May sind kleine Paläste.`,
      tip: `Für die Metro braucht ihr die BakıKart. Beim Fotografieren zurückhaltend sein.` },
    { id: 'baku-hammam', c: 'baku', t: 'Altes Hammam', loc: 'Hamam', cat: ['chill', 'verrueckt'], v: 1, d: 2, p: 30, pt: 'ca. 20–40 Manat', w: 3,
      desc: `Dampfbad unter Kuppeln, mit Peeling und Massage – manche Hammams in der Altstadt sind Jahrhunderte alt.`,
      tip: `Es gibt getrennte Zeiten oder Tage für Männer und Frauen.` },
    { id: 'baku-tea', c: 'baku', t: 'Teehaus mit Murabba', loc: 'Çayxana', cat: ['essen', 'chill'], v: 0, d: 1.5, p: 15, w: 4,
      desc: `Schwarzer Tee aus tulpenförmigen Gläsern, dazu Konfitüren aus Quitte, Feige oder grünen Walnüssen.`,
      tip: `Zucker legt man in den Mund und trinkt den Tee hindurch – wie die Einheimischen.` },
    { id: 'baku-bazaar', c: 'baku', t: 'Təzə Bazar', loc: 'Təzə Bazar', cat: ['essen'], v: 1, d: 1.5, p: 0, w: 1,
      desc: `Markt mit Granatäpfeln, Kaviar, Gewürzen, Kräuterbergen und Tandir-Brot.`,
      tip: `Probieren lassen – Händler sind großzügig.` },
    { id: 'baku-mugham', c: 'baku', t: 'Mugham-Konzert', loc: 'Muğam Mərkəzi', cat: ['kultur', 'nacht'], v: 1, d: 2, p: 20, w: 4,
      desc: `Improvisierte klassische Musik mit Tar, Kamancha und eindringlichem Gesang – UNESCO-Kulturerbe.`,
      tip: `Im Mugham-Zentrum an der Promenade gibt es regelmäßig Konzerte.` },

    // ---------- Quba & Xınalıq ----------
    { id: 'quba-red', c: 'quba', t: 'Qırmızı Qəsəbə: Dorf der Bergjuden', loc: 'Qırmızı Qəsəbə', cat: ['kultur'], v: 0, d: 1.5, p: 5, w: 3,
      desc: `Eine der letzten rein jüdischen Siedlungen außerhalb Israels, mit Synagogen und einem Museum der Bergjuden.`,
      tip: `Liegt direkt gegenüber von Quba auf der anderen Flussseite.` },
    { id: 'quba-carpet', c: 'quba', t: 'Teppichweberei', loc: 'Xalça emalatxanası', cat: ['kultur'], v: 0, d: 1, p: 0, w: 3,
      desc: `Quba ist für seine Knüpfteppiche bekannt. In kleinen Werkstätten kann man den Weberinnen zuschauen.`,
      tip: `Wer kauft: Ausfuhr-Zertifikat für den Teppich verlangen.` },
    { id: 'quba-xinaliq', c: 'quba', t: 'Bergdorf Xınalıq', loc: 'Xınalıq', cat: ['klassiker', 'kultur', 'natur'], v: 1, d: 6, p: 0, w: 5,
      desc: `Steinhäuser übereinander am Hang auf 2.300 m, eine eigene Sprache, die nur hier gesprochen wird, und ringsum Kaukasusgipfel.`,
      tip: `Mit Fahrer ab Quba. Übernachtung bei einer Familie ist das Erlebnis.` },
    { id: 'quba-hike', c: 'quba', t: 'Wanderung bei Xınalıq', loc: 'Xınalıq', cat: ['natur'], v: 0, d: 3, p: 0, w: 3,
      desc: `Wege zu Hirtenweiden, einem kleinen Feuertempel am Hang und Aussichtspunkten auf die Gipfel.`,
      tip: `Einen Jungen aus dem Dorf als Führer fragen – die Wege sind kaum markiert.` },

    // ---------- Scheki ----------
    { id: 'sheki-lahij', c: 'sheki', t: 'Kupferschmiede von Lahıc', loc: 'Lahıc', cat: ['kultur'], v: 0, d: 2, p: 0, w: 3,
      desc: `Bergdorf mit Kopfsteinpflaster, in dem Handwerker seit Jahrhunderten Kupfer hämmern.`,
      tip: `Liegt auf dem Weg von Quba nach Scheki – Stopp mit dem Fahrer einplanen.` },
    { id: 'sheki-caravan', c: 'sheki', t: 'Nacht in der Karawanserei', loc: 'Yuxarı Karvansaray', cat: ['klassiker', 'verrueckt'], v: 1, d: 1, p: 40, pt: 'ca. 60–100 Manat pro Zimmer', w: 4,
      desc: `Eine echte Seidenstraßen-Herberge aus dem 18. Jahrhundert mit Innenhof und Arkaden – heute ein Hotel.`,
      tip: `Einfache Zimmer, aber die Atmosphäre im Innenhof am Abend ist unbezahlbar.` },
    { id: 'sheki-palace', c: 'sheki', t: 'Palast der Khane von Scheki', loc: 'Şəki xan sarayı', cat: ['klassiker', 'kultur'], v: 0, d: 1, p: 10, w: 1,
      desc: `Kleiner Sommerpalast aus dem 18. Jahrhundert, über und über bemalt, mit Fenstern aus Tausenden bunten Glasstücken – ohne Nägel und Leim gebaut.`,
      tip: `Innen ist Fotografieren verboten.` },
    { id: 'sheki-halva', c: 'sheki', t: 'Piti & Scheki-Halva', loc: 'Piti', cat: ['essen', 'klassiker'], v: 1, d: 1.5, p: 15, w: 2,
      desc: `Piti: Lammeintopf mit Kichererbsen im Tontopf, in zwei Gängen gegessen. Danach die klebrig-süße Scheki-Halva.`,
      tip: `Erst die Brühe über Brotstücke gießen und essen, dann den Rest im Topf zerdrücken.` },
    { id: 'sheki-kish', c: 'sheki', t: 'Albanische Kirche in Kiş', loc: 'Kiş məbədi', cat: ['kultur'], v: 0, d: 2, p: 5, w: 3,
      desc: `Eine der ältesten Kirchen des Kaukasus im Bergdorf Kiş, wenige Kilometer von Scheki.`,
      tip: `Bergauf zu Fuß ca. 1 Std., oder Taxi.` },
    { id: 'sheki-gabala', c: 'sheki', t: 'Seilbahn Tufandağ in Qəbələ', loc: 'Tufandağ', cat: ['natur', 'ausflug'], v: 1, d: 4, p: 30, w: 1,
      desc: `Seilbahn auf fast 2.000 m mit Blick über den Kaukasus – im Sommer zum Wandern, im Winter zum Skifahren.`,
      tip: `Qəbələ liegt ca. 1,5 Std. von Scheki.` },
    { id: 'sheki-silk', c: 'sheki', t: 'Seidentücher (Kəlağayı)', loc: 'Kəlağayı', cat: ['kultur', 'chill'], v: 0, d: 1, p: 0, w: 3,
      desc: `Scheki war eine Seidenstadt. Die bedruckten Seidentücher sind UNESCO-Kulturerbe.`,
      tip: `Echte Seide fühlt sich kühl an – billige Kopien sind Polyester.` },

    // ---------- Gandscha ----------
    { id: 'ganja-nizami', c: 'ganja', t: 'Mausoleum des Nizami', loc: 'Nizami Gəncəvi məqbərəsi', cat: ['kultur'], v: 0, d: 1, p: 0, w: 3,
      desc: `Grabmal des persischen Nationaldichters Nizami (12. Jahrhundert) in einem Park am Stadtrand.`,
      tip: `Ruhiger Ort, gut am Ankunftsnachmittag.` },
    { id: 'ganja-bottle', c: 'ganja', t: 'Flaschenhaus', loc: 'Butulka evi', cat: ['verrueckt'], v: 2, d: 0.5, p: 0, w: 3,
      desc: `Ein Wohnhaus, dessen Fassade aus Zehntausenden Glasflaschen besteht – gebaut zum Gedenken an einen verschollenen Bruder.`,
      tip: `Von außen anschauen, es ist ein Privathaus.` },
    { id: 'ganja-naftalan', c: 'ganja', t: 'Naftalan: Bad im Rohöl', loc: 'Naftalan', cat: ['verrueckt'], v: 3, d: 4, p: 60, pt: 'Bad ca. 40–80 Manat', w: 1,
      desc: `Kurort, in dem man in warmem, schwarzem Heilöl badet – angeblich gut für Haut und Gelenke. Wohl das seltsamste Wellness-Erlebnis der Welt.`,
      tip: `Nur ca. 10 Minuten Badezeit, danach wird man abgeschabt und abgeduscht. Alte Badehose mitnehmen.` },
    { id: 'ganja-goygol', c: 'ganja', t: 'Bergsee Göygöl', loc: 'Göygöl', cat: ['natur', 'chill'], v: 0, d: 4, p: 5, w: 3,
      desc: `Türkisblauer Bergsee im Nationalpark, entstanden bei einem Erdbeben im 12. Jahrhundert.`,
      tip: `Picknick mitnehmen, am See gibt es nur wenig.` },

    // ---------- Überall ----------
    { id: 'any-nard', c: 'any', t: 'Nərd spielen', loc: 'Nərd', cat: ['kultur', 'chill'], v: 1, d: 1.5, p: 0, w: 4, taxi: false,
      desc: `Backgammon ist Volkssport: In jedem Teehaus klappern die Würfel. Mitspielen ist erwünscht – wenn ihr schnell genug seid.`,
      tip: `Einheimische spielen in irrem Tempo. Einfach zuschauen und fragen.` },
    { id: 'any-kebab', c: 'any', t: 'Lyulya-Kebab vom Grill', loc: 'Lülə kabab', cat: ['essen'], v: 0, d: 1.5, p: 15, w: 4, taxi: false,
      desc: `Gewürztes Hackfleisch am Spieß über Holzkohle, mit Lavash, Zwiebeln, Sumach und Granatapfelsoße (Narşərab).`,
      tip: `Dazu Ayran oder Kompott bestellen.` },
    { id: 'any-wine', c: 'any', t: 'Aserbaidschanischer Wein', loc: 'Şərab', cat: ['essen'], v: 0, d: 2, p: 25, w: 3, taxi: false,
      desc: `Im Weinbaugebiet um Şamaxı und İsmayıllı gibt es Weingüter mit Verkostungen – kaum bekannt, oft gut.`,
      tip: `Lässt sich mit der Fahrt Quba → Scheki verbinden.` },
    { id: 'any-caviar', c: 'any', t: 'Kaviar probieren', loc: 'Kürü', cat: ['essen', 'verrueckt'], v: 1, d: 0.5, p: 50, pt: 'ab ca. 30 Manat für eine kleine Portion', w: 4, taxi: false,
      desc: `Das Kaspische Meer ist die Heimat des Störs. In guten Restaurants gibt es Kaviar mit Blini und Butter.`,
      tip: `Nur in offiziellen Läden kaufen – auf Märkten ist vieles gefälscht oder illegal.` }
  ],

  /* Vorgeschlagener Plan: [Aktivität, Tageszeit] */
  defaultPlan: [
    { city: 'fra', items: [['t-fra-gyd', 4]] },
    { city: 'baku', items: [['baku-icheri', 1], ['baku-maiden', 1], ['baku-shirvanshah', 3], ['baku-flame', 4], ['baku-food', 4]] },
    { city: 'baku', items: [['baku-gobustan', 5], ['baku-boulevard', 4]] },
    { city: 'baku', items: [['baku-heydar', 1], ['baku-carpet', 3], ['baku-yanardag', 4], ['baku-ateshgah', 4]] },
    { city: 'baku', items: [['baku-metro', 1], ['baku-bazaar', 1], ['baku-hammam', 3], ['any-nard', 4]] },
    { city: 'quba', items: [['t-baku-quba', 1], ['quba-red', 3], ['quba-carpet', 3]] },
    { city: 'quba', items: [['quba-xinaliq', 5], ['quba-hike', 3]] },
    { city: 'sheki', items: [['t-quba-sheki', 1], ['sheki-lahij', 3], ['sheki-caravan', 4]] },
    { city: 'sheki', items: [['sheki-palace', 1], ['sheki-halva', 2], ['sheki-kish', 3]] },
    { city: 'sheki', items: [['sheki-gabala', 1], ['sheki-silk', 3], ['any-kebab', 4]] },
    { city: 'ganja', items: [['t-sheki-ganja', 1], ['ganja-nizami', 3], ['ganja-bottle', 3]] },
    { city: 'ganja', items: [['ganja-naftalan', 1], ['ganja-goygol', 3]] },
    { city: 'baku', items: [['t-ganja-baku', 1], ['baku-tea', 4]] },
    { city: 'baku', items: [['any-caviar', 2], ['baku-mugham', 4]] },
    { city: 'fra', items: [['t-gyd-fra', 1]] }
  ],

  tickets: {
    't-fra-gyd': { from: ['Frankfurt', 'FRA'], to: ['Bakı', 'Heydər Əliyev (GYD)'], label: 'Flug' },
    't-baku-quba': { from: ['Bakı', 'Busbahnhof'], to: ['Quba', 'Busbahnhof'], label: 'Bus' },
    't-quba-sheki': { from: ['Quba', 'über Lahıc'], to: ['Şəki', 'Altstadt'], label: 'Fahrer' },
    't-sheki-ganja': { from: ['Şəki', 'Busbahnhof'], to: ['Gəncə', 'Busbahnhof'], label: 'Bus' },
    't-ganja-baku': { from: ['Gəncə', 'Bahnhof'], to: ['Bakı', 'Hauptbahnhof'], label: 'Zug' },
    't-gyd-fra': { from: ['Bakı', 'Heydər Əliyev (GYD)'], to: ['Frankfurt', 'FRA'], label: 'Flug' }
  },

  /* Ø Tageshöchstwerte in °C, gerundet */
  weather: {
    baku: [7, 7, 10, 16, 22, 27, 30, 30, 26, 20, 14, 10],
    quba: [3, 4, 8, 15, 20, 24, 27, 27, 22, 16, 10, 5],
    sheki: [5, 7, 12, 18, 23, 27, 30, 29, 25, 18, 11, 7],
    ganja: [7, 8, 13, 19, 24, 29, 32, 31, 27, 20, 13, 8]
  },

  prep: [
    { id: 'p-pass', off: -90, t: 'Reisepass prüfen', d: 'Am besten noch 6 Monate über die Reise hinaus gültig.' },
    { id: 'p-flug', off: -90, t: 'Flug buchen', d: 'Direkt mit AZAL ab Frankfurt oder mit Umstieg in Istanbul.' },
    { id: 'p-hotel', off: -60, t: 'Hotels buchen', d: 'Die Karawanserei in Scheki früh anfragen, sie hat nur wenige Zimmer.' },
    { id: 'p-ins', off: -30, t: 'Auslandskrankenversicherung', d: 'Die gesetzliche Kasse zahlt in Aserbaidschan nichts.' },
    { id: 'p-driver', off: -30, t: 'Fahrer für Quba → Scheki organisieren', d: 'Über die Pension in Quba oder eine Agentur in Baku.' },
    { id: 'p-visa', off: -21, t: 'E-Visum (ASAN) beantragen', d: 'Online auf evisa.gov.az, 30 Tage, Gebühr ca. 25 US-$. Dauert bis zu 3 Werktage – ausgedruckt mitnehmen.' },
    { id: 'p-train', off: -14, t: 'Zugticket Gəncə → Baku kaufen', d: 'Online bei der Staatsbahn ADY, im Sommer früh ausgebucht.' },
    { id: 'p-esim', off: -14, t: 'SIM oder eSIM', d: 'Azercell oder Bakcell am Flughafen, oder eine Daten-eSIM.' },
    { id: 'p-apps', off: -14, t: 'Apps installieren', d: 'Bolt (Taxi), Google Maps, Übersetzer mit Aserbaidschanisch und Russisch.' },
    { id: 'p-elefand', off: -10, t: 'In Elefand eintragen', d: 'Die Krisenvorsorgeliste des Auswärtigen Amts.' },
    { id: 'p-cash', off: -3, t: 'Etwas Bargeld', d: 'Für Busse, Märkte und Dörfer. In Baku zahlt man meist mit Karte.' },
    { id: 'p-addr', off: -2, t: 'Adressen auf Aserbaidschanisch speichern', d: 'Unter „Tage“ beim Hotel eintragen – dann gibt es dafür eine Taxi-Karte.' }
  ],

  packing: [
    'Reisepass und ausgedrucktes E-Visum',
    'Zwei Kreditkarten (Visa und Mastercard)',
    'Kein Adapter nötig: gleiche Steckdosen wie bei uns',
    'Bequeme Schuhe für Kopfsteinpflaster',
    'Warme Jacke für Xınalıq – auch im Sommer kühl',
    'Windjacke für Baku, die „Stadt der Winde“',
    'Tuch oder lange Hose für Moscheen',
    'Sonnencreme und Sonnenbrille',
    'Alte Badehose für Hammam und Naftalan',
    'Reiseapotheke',
    'Powerbank',
    'Kleiner Tagesrucksack'
  ],

  phrases: [
    ['Salam', 'salam', 'Hallo'],
    ['Sağ olun', 'sagh olun', 'Danke'],
    ['Çox sağ olun', 'tschoch sagh olun', 'Vielen Dank'],
    ['Neçəyədir?', 'netschejedir?', 'Was kostet das?'],
    ['Bunu istəyirəm', 'bunu istejirem', 'Das hätte ich gern'],
    ['Hesab, zəhmət olmasa', 'hesab, sächmät olmasa', 'Die Rechnung, bitte'],
    ['Tualet haradadır?', 'tualet haradadyr?', 'Wo ist die Toilette?'],
    ['Zəhmət olmasa, məni bura aparın', 'sächmät olmasa, mäni bura aparyn', 'Bitte fahren Sie mich hierhin'],
    ['Biz Almaniyadanıq', 'bis almanijadanyk', 'Wir kommen aus Deutschland'],
    ['Çay, zəhmət olmasa', 'tschai, sächmät olmasa', 'Tee, bitte'],
    ['Yox, sağ olun', 'joch, sagh olun', 'Nein, danke'],
    ['Çox dadlıdır!', 'tschoch dadlydyr!', 'Sehr lecker!'],
    ['Sağlığınıza!', 'saghlyghynysa!', 'Prost – auf eure Gesundheit!']
  ],

  tips: [
    { id: 'visum', title: 'Einreise & Visum', html: `
      <p>Deutsche brauchen ein <strong>E-Visum (ASAN)</strong>: online auf evisa.gov.az, 30 Tage, eine Einreise, ca. 25 US-$. Es kommt nach bis zu 3 Werktagen per E-Mail, gegen Aufpreis schneller.</p>
      <ul>
        <li>Die Landgrenzen sind geschlossen – nur die Bahnverbindung nach Georgien fährt seit Mai 2026 wieder. Ein- und Ausreise also per Flugzeug.</li>
        <li>Hotels melden euch automatisch an. Wer privat wohnt und länger als 15 Tage bleibt, muss sich selbst registrieren.</li>
        <li>Reisen in die Region Karabach und ins Grenzgebiet zu Armenien nur nach aktueller Prüfung der Hinweise des Auswärtigen Amts – dort gibt es Minen.</li>
      </ul>
      <p><a href="https://evisa.gov.az" target="_blank" rel="noopener">Offizielles E-Visum-Portal</a></p>` },
    { id: 'geld', title: 'Geld & Bezahlen', html: `
      <ul>
        <li>Die Währung ist der Manat (AZN). Faustregel: 1 € ≈ 1,9 Manat. Den Kurs könnt ihr unter „Route“ anpassen.</li>
        <li>In Baku zahlt man fast überall mit Karte, auf dem Land und in Bussen bar.</li>
        <li>Automaten gibt es in allen Städten.</li>
        <li>Trinkgeld ca. 10 %, manchmal ist ein Service-Aufschlag schon auf der Rechnung.</li>
      </ul>` },
    { id: 'unterwegs', title: 'Unterwegs', html: `
      <ul>
        <li>In Baku: Metro und Busse mit der aufladbaren BakıKart, Taxis per Bolt.</li>
        <li>Überland: Busse ab dem großen Busbahnhof in Baku, günstig und häufig.</li>
        <li>Züge: Baku–Gəncə, Baku–Qəbələ und nach Georgien. Tickets bei der Staatsbahn ADY.</li>
        <li>Für Strecken ohne gute Verbindung (Quba → Scheki) einen Fahrer nehmen.</li>
        <li>Taxis ohne App: Preis vor der Fahrt ausmachen.</li>
      </ul>` },
    { id: 'internet', title: 'Internet & Apps', html: `
      <ul>
        <li>Nichts Wichtiges ist gesperrt. SIM-Karten von Azercell oder Bakcell gibt es am Flughafen.</li>
        <li><strong>Bolt</strong> für Taxis, <strong>Google Maps</strong> für Wege.</li>
        <li>Junge Leute sprechen oft Englisch, ältere eher Russisch.</li>
      </ul>
      <p>Diese Seite funktioniert nach dem ersten Öffnen auch offline.</p>` },
    { id: 'essen', title: 'Essen & Trinken', html: `
      <ul>
        <li>Plov, Dolma, Qutab, Piti, Kebabs, Dushbara (Mini-Teigtaschen in Brühe) und viel frisches Gemüse und Kräuter.</li>
        <li>Tee ist Ritual: in tulpenförmigen Gläsern, mit Konfitüre (Murabba) und Süßem.</li>
        <li>Alkohol ist überall erhältlich, auch guter Wein und Cognac.</li>
        <li>Leitungswasser lieber nicht trinken.</li>
      </ul>` },
    { id: 'knigge', title: 'Alltag & Knigge', html: `
      <ul>
        <li>Mehrheitlich muslimisch, aber sehr säkular. In Moscheen Schultern und Knie bedecken, Frauen ein Kopftuch.</li>
        <li>Die Gastfreundschaft ist enorm – Einladungen zum Tee sind ernst gemeint.</li>
        <li>Politik (Regierung, Armenien, Karabach) im Gespräch lieber meiden.</li>
        <li>Regierungs- und Militärgebäude nicht fotografieren.</li>
      </ul>` },
    { id: 'sicherheit', title: 'Sicherheit', html: `
      <ul>
        <li>Baku ist sehr sicher, auch nachts. Kriminalität gegen Touristen ist selten.</li>
        <li>Taxis ohne Taxameter: Preis vorher vereinbaren oder Bolt nutzen.</li>
        <li>In ehemaligen Konfliktgebieten nie die Straße verlassen – Minengefahr.</li>
        <li>Der Verkehr ist ruppig, auf Zebrastreifen aufpassen.</li>
      </ul>` },
    { id: 'wetter', title: 'Reisezeit & Wetter', html: `
      <p><strong>Beste Zeit: April bis Juni und September bis Oktober.</strong> Dann ist es in Baku warm, aber nicht heiß, und die Bergdörfer sind erreichbar.</p>
      <ul>
        <li>Juli und August sind in Baku und Gəncə heiß, im Kaukasus angenehm.</li>
        <li>Baku ist windig – der Name wird oft mit „Stadt der Winde“ übersetzt.</li>
        <li>Im Winter sind Bergstraßen nach Xınalıq oft gesperrt.</li>
      </ul>
      <div id="weather-table"></div>` },
    { id: 'notfall', title: 'Notfall', html: `
      <ul>
        <li>Allgemeiner Notruf <strong>112</strong>, Polizei <strong>102</strong>, Rettung <strong>103</strong>, Feuerwehr <strong>101</strong>.</li>
        <li>Deutsche Botschaft Baku: <a href="tel:+994124654100">+994 12 465 4100</a>.</li>
        <li><a href="https://krisenvorsorgeliste.diplo.de" target="_blank" rel="noopener">Elefand – Krisenvorsorgeliste</a> des Auswärtigen Amts.</li>
      </ul>` }
  ]
});
