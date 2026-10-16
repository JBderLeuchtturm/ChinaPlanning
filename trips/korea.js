/* Reise: Südkorea. Preise sind Richtwerte pro Person in Won (Stand 2025/26) – vor Ort prüfen. */
(window.TRIPS = window.TRIPS || []).push({
  id: 'korea',
  name: 'Südkorea',
  title: 'Zwei Wochen Südkorea',
  lede: 'Seoul, die Königsstadt Gyeongju, Busan am Meer und die Vulkaninsel Jeju – mit KTX und Inlandsflug ab Frankfurt. Unter „Tage“ liegt schon ein fertiger Plan. Ihr tauscht nur noch aus, was euch nicht passt, und schickt ihn euch per Link.',
  routeLede: 'Direktflug nach Seoul und zurück. Dazwischen fahrt ihr mit dem KTX in den Süden und springt per Flieger nach Jeju und wieder nach Seoul.',
  seal: '길',
  sealFmt: '{n}일차',
  lang: 'ko',
  font: { family: 'Noto Serif KR', weight: 900, fallback: "'AppleMyungjo', 'Batang', serif" },
  locFont: "'Apple SD Gothic Neo', 'Malgun Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', sans-serif",
  taxiAsk: '여기로 가 주세요',
  currency: { label: 'Won', rate: 1580, rateLabel: '1 € in Won' },
  maps: [
    { label: 'Naver Map', url: 'https://map.naver.com/p/search/{q}' },
    { label: 'KakaoMap', url: 'https://map.kakao.com/?q={q}' },
    { label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query={q}' }
  ],
  theme: {
    light: { ticket: '#D9ECE4', ink: '#1F5A49', line: '#A6CDBE' },
    dark: { ticket: '#173A31', ink: '#ACDCCB', line: '#2C5E50' }
  },
  budget: {
    flight: [700, 1100], flightLabel: 'Flug Frankfurt – Seoul, hin und zurück',
    hotel: [['Budget', 50], ['Mittelklasse', 95], ['Komfort', 180]],
    food: [['Sparsam', 25], ['Normal', 40], ['Schlemmen', 65]],
    extra: 150, extraLabel: 'U-Bahn, Taxi, eSIM, Souvenirs'
  },
  warnings: {
    after: [{ date: '2026-12-31', text: 'Die K-ETA-Befreiung für Deutsche gilt laut aktuellem Stand bis 31.12.2026. Prüft vor dem Buchen, ob ihr danach eine K-ETA (online, kostenpflichtig) braucht.' }],
    holidays: [
      { name: 'Chuseok, das koreanische Erntedankfest', from: '2026-09-23', to: '2026-09-28' },
      { name: 'Seollal, das koreanische Neujahr', from: '2027-02-05', to: '2027-02-10' },
      { name: 'Chuseok, das koreanische Erntedankfest', from: '2027-09-13', to: '2027-09-17' },
      { name: 'Seollal, das koreanische Neujahr', from: '2028-01-24', to: '2028-01-30' },
      { name: 'Chuseok, das koreanische Erntedankfest', from: '2028-10-01', to: '2028-10-05' }
    ],
    holidayText: 'Dann fährt ganz Korea zur Familie – KTX-Tickets sind schnell weg, viele Läden und Restaurants haben zu.',
    seasons: [
      { months: [6, 7], text: 'Regenzeit (Jangma) etwa Ende Juni bis Ende Juli: viel Regen, schwül um 30 °C.' },
      { months: [8, 9], text: 'Spätsommer: heiß und schwül, Taifune möglich – vor allem im Süden und auf Jeju fallen dann Flüge und Fähren aus.' },
      { months: [12, 1, 2], text: 'Winter: In Seoul oft unter 0 °C, trocken und windig. Dafür wenig los und günstig.' }
    ]
  },

  cities: {
    fra: { name: 'Unterwegs', loc: '프랑크푸르트', py: 'Frankfurt' },
    sel: {
      name: 'Seoul', loc: '서울', py: 'Seoul', color: ['#2B4C9B', '#86A5EC'],
      why: `Paläste neben Wolkenkratzern, Märkte bis spät in die Nacht, K-Pop, Hanok-Gassen und Berge mitten in der Stadt. Seoul ist schnell, sicher und läuft rund um die Uhr.`,
      stay: `Myeongdong oder Jongno (Paläste, Insadong, sehr zentral) – oder Hongdae, wenn ihr abends ausgehen wollt.`,
      stayTip: `Ein, zwei Nächte in einem Hanok-Gästehaus (traditionelles Holzhaus) rund um Bukchon oder Ikseon-dong sind ein Erlebnis.`,
      move: `Die U-Bahn ist perfekt: englisch beschildert, billig, alle paar Minuten. Mit T-money- oder WOWPASS-Karte zahlt ihr auch Bus und Taxi.`,
      arrive: `Vom Flughafen Incheon mit dem AREX-Zug zur Seoul Station (Express ca. 45 Min.) oder mit dem Limousinen-Bus direkt zu vielen Hotels.`,
      prices: [['Budget', '40–70 €'], ['Mittelklasse', '80–150 €'], ['Komfort', 'ab 180 €']]
    },
    gj: {
      name: 'Gyeongju', loc: '경주', py: 'Gyeongju', color: ['#946217', '#E0B35E'],
      why: `Die alte Hauptstadt des Silla-Reichs: grasbewachsene Königsgräber mitten in der Stadt, Tempel aus dem 8. Jahrhundert und ein beleuchteter Palastteich. Ein Freilichtmuseum.`,
      stay: `Rund um Hwangnidan-gil und die Grabhügel von Daereungwon – von dort ist fast alles zu Fuß oder per Leihrad erreichbar.`,
      stayTip: `Viele Unterkünfte sind kleine Hanok-Pensionen. Abends ist die Stadt ruhig, dafür sind die Wege kurz.`,
      move: `Leihräder und E-Bikes sind ideal, die Stadt ist flach. Zum Tempel Bulguksa fahren Busse (ca. 30–40 Min.) oder Taxis.`,
      arrive: `Der KTX hält in Singyeongju, ca. 20–30 Min. mit Bus oder Taxi vom Zentrum.`,
      prices: [['Budget', '30–55 €'], ['Mittelklasse', '60–110 €'], ['Komfort', 'ab 140 €']]
    },
    bs: {
      name: 'Busan', loc: '부산', py: 'Busan', color: ['#0D7480', '#4EC3CF'],
      why: `Koreas Hafenstadt mit Stränden, Bergen, bunten Hangdörfern und dem größten Fischmarkt des Landes. Entspannter als Seoul, mit Meerblick fast überall.`,
      stay: `Haeundae (Strand, Hochhäuser, abends viel los) oder Seomyeon (zentral, gut angebunden). Nampo-dong liegt nah an Jagalchi und Gamcheon.`,
      stayTip: `Ein Zimmer mit Meerblick in Haeundae oder Gwangalli lohnt sich – samstags seht ihr von dort die Drohnenshow.`,
      move: `U-Bahn mit vier Linien, dazu Busse und Taxis. Busan ist hügelig und weitläufig, Wege dauern länger als gedacht.`,
      arrive: `Der KTX endet an der Busan Station. Von dort U-Bahn Linie 1 nach Nampo oder Seomyeon, nach Haeundae ca. 45 Min.`,
      prices: [['Budget', '35–60 €'], ['Mittelklasse', '70–130 €'], ['Komfort', 'ab 160 €']]
    },
    jj: {
      name: 'Jeju', loc: '제주', py: 'Jeju', color: ['#C2571A', '#F29A5E'],
      why: `Vulkaninsel mit Kraterbergen, Lavahöhlen, schwarzen Stränden, Teefeldern und den Haenyeo – Taucherinnen, die ohne Sauerstoff nach Muscheln tauchen.`,
      stay: `Eine Nacht an der Ostküste bei Seongsan (für den Sonnenaufgang), die zweite in Jeju-Stadt nahe dem Flughafen.`,
      stayTip: `Jeju erkundet man am besten mit dem Mietwagen. Dafür braucht ihr einen Internationalen Führerschein – fragt beim Vermieter, welche Version er akzeptiert.`,
      move: `Mietwagen ist am flexibelsten. Ohne: Busse (langsam) oder ein Taxi für einen Tag chartern (ca. 150.000–200.000 Won).`,
      arrive: `Flug ab Busan oder Seoul ca. 1 Std. Der Flughafen liegt direkt bei Jeju-Stadt.`,
      prices: [['Budget', '35–60 €'], ['Mittelklasse', '70–130 €'], ['Komfort', 'ab 160 €']]
    },
    any: { name: 'Überall', loc: '', py: '' }
  },

  /* c = Ort, cat = Kategorien, v = Verrückt-Faktor 0–3, d = Dauer in Std., p = Preis p. P. in Won,
     pt = Preistext, w = übliche Tageszeit (0 Früh … 5 Ganztags), closed/only = Wochentage (0 = So) */
  activities: [
    // ---------- Transfers ----------
    { id: 't-fra-icn', c: 'fra', t: 'Flug Frankfurt → Seoul', cat: ['transport'], v: 0, d: 12, p: 0, pt: 'hin und zurück ca. 700–1.100 €', w: 4, mode: 'flug', dshort: '11½ Std.', taxi: false,
      desc: `Direktflug ca. 11,5 Std. nach Incheon (z. B. Lufthansa oder Korean Air). Abends los, am nächsten Nachmittag da. Korea ist 7 Std. (Sommerzeit) bzw. 8 Std. (Winterzeit) voraus.`,
      tip: `Im Flieger schlafen, nach der Landung bis abends durchhalten. Am Flughafen gleich eine T-money- oder WOWPASS-Karte holen.` },
    { id: 't-sel-gj', c: 'gj', t: 'KTX Seoul → Gyeongju', loc: '서울역', cat: ['transport'], v: 0, d: 2.5, p: 49000, pt: 'ca. 49.000 Won', w: 1, mode: 'zug', dshort: '2 Std.',
      desc: `Hochgeschwindigkeitszug von der Seoul Station nach Singyeongju, ca. 2 Std. 10 Min.`,
      tip: `Die KTX-Sitze sind fest eingebaut, die Hälfte fährt rückwärts. Wer das nicht mag, achtet beim Buchen auf die Fahrtrichtung.`,
      book: 'Korail-App, Verkauf ca. 1 Monat vorher' },
    { id: 't-gj-bs', c: 'bs', t: 'KTX Gyeongju → Busan', loc: '신경주역', cat: ['transport'], v: 0, d: 1, p: 11000, pt: 'ca. 11.000 Won', w: 1, mode: 'zug', dshort: '30 Min.',
      desc: `Von Singyeongju zur Busan Station in ca. 30 Min.`,
      tip: `Alternative: Fernbusse ab dem Busterminal in Gyeongju nach Busan, ca. 1 Std., ohne Umweg zum KTX-Bahnhof.`,
      book: 'Korail-App' },
    { id: 't-bs-jj', c: 'jj', t: 'Flug Busan → Jeju', cat: ['transport'], v: 0, d: 2.5, p: 70000, pt: 'ca. 40.000–100.000 Won', w: 1, mode: 'flug', dshort: '1 Std.', taxi: false,
      desc: `Ab Gimhae (PUS) ca. 1 Std. nach Jeju (CJU). Viele Billigflieger, mehrmals pro Stunde.`,
      tip: `Pass mitnehmen, auch bei Inlandsflügen. Am Flughafen Jeju gleich den Mietwagen abholen.` },
    { id: 't-jj-sel', c: 'sel', t: 'Flug Jeju → Seoul', cat: ['transport'], v: 0, d: 2.5, p: 70000, pt: 'ca. 40.000–120.000 Won', w: 1, mode: 'flug', dshort: '1 Std.', taxi: false,
      desc: `Jeju–Seoul ist eine der meistgeflogenen Strecken der Welt: Flüge fast im Viertelstundentakt, ca. 1 Std. 10 Min.`,
      tip: `Ihr landet in Gimpo (GMP), nicht in Incheon. Von dort mit der U-Bahn ca. 30–40 Min. in die Stadt.` },
    { id: 't-icn-fra', c: 'fra', t: 'Rückflug Seoul → Frankfurt', cat: ['transport'], v: 0, d: 14, p: 0, pt: 'im Flugpreis enthalten', w: 1, mode: 'flug', dshort: '14 Std.', taxi: false,
      desc: `Direktflug ab Incheon, ca. 14 Std. Dank Zeitverschiebung landet ihr am selben Tag.`,
      tip: `Incheon ist riesig: 3 Std. vorher da sein. Der AREX-Express ab Seoul Station braucht ca. 45 Min.` },

    // ---------- Seoul ----------
    { id: 'sel-gyeongbok', c: 'sel', t: 'Gyeongbokgung mit Wachwechsel', loc: '경복궁', cat: ['klassiker', 'kultur'], v: 0, d: 2.5, p: 3000, pt: '3.000 Won (im Hanbok gratis)', w: 1, closed: [2],
      desc: `Der größte Königspalast der Joseon-Dynastie vor den Bergen im Norden. Am Haupttor ist zweimal täglich Wachwechsel in bunten Uniformen.`,
      tip: `Dienstags geschlossen. Wachwechsel meist um 10 und 14 Uhr. Das Volkskundemuseum auf dem Gelände ist gratis.` },
    { id: 'sel-hanbok', c: 'sel', t: 'Im Hanbok durch die Paläste', loc: '한복 대여', cat: ['verrueckt', 'kultur'], v: 2, d: 3, p: 25000, pt: 'Verleih ca. 15.000–30.000 Won', w: 1, taxi: false,
      desc: `Traditionelle Gewänder leihen, frisieren lassen und damit gratis in die Paläste. Machen auch viele Koreaner – Männer genauso.`,
      tip: `Verleihläden gibt es direkt vor Gyeongbokgung. Klassischen Hanbok wählen, „Fusion“-Modelle zählen nicht für den freien Eintritt.` },
    { id: 'sel-changdeok', c: 'sel', t: 'Changdeokgung & Geheimer Garten', loc: '창덕궁', cat: ['klassiker', 'kultur', 'natur'], v: 0, d: 2.5, p: 8000, pt: '3.000 Won + Garten 5.000 Won', w: 1, closed: [1],
      desc: `UNESCO-Palast, der sich in die Hügel schmiegt, dahinter der Huwon: ein königlicher Garten mit Pavillons und Teichen.`,
      tip: `Montags geschlossen. In den Garten kommt man nur mit Führung, die englischen Termine sind schnell ausgebucht.`,
      book: 'Gartenführung online reservieren' },
    { id: 'sel-bukchon', c: 'sel', t: 'Bukchon Hanok Village', loc: '북촌한옥마을', cat: ['klassiker', 'kultur'], v: 0, d: 1.5, p: 0, w: 1,
      desc: `Hügeliges Viertel voller traditioneller Holzhäuser zwischen den Palästen, mit Blick auf die Hochhäuser.`,
      tip: `Hier wohnen Menschen: In den Kerngassen dürfen Touristen nur von 10 bis 17 Uhr rein, sonst drohen 100.000 Won Bußgeld. Leise sein.` },
    { id: 'sel-insadong', c: 'sel', t: 'Insadong & Ikseon-dong', loc: '인사동', cat: ['kultur', 'chill'], v: 0, d: 2, p: 0, w: 3,
      desc: `Teehäuser, Kunsthandwerk und Galerien in Insadong, nebenan die engen Hanok-Gassen von Ikseon-dong mit hippen Cafés.`,
      tip: `Ssamziegil ist ein spiralförmiges Haus voller kleiner Läden – gut für Souvenirs.` },
    { id: 'sel-gwangjang', c: 'sel', t: 'Gwangjang-Markt', loc: '광장시장', cat: ['essen', 'klassiker'], v: 1, d: 2, p: 20000, w: 4,
      desc: `Seouls ältester Markt mit Garküchen: Bindaetteok (Mungbohnen-Pfannkuchen), Mayak-Gimbap, Tteokbokki und Yukhoe, rohes Rindfleisch.`,
      tip: `Abends am schönsten. An einen vollen Stand setzen und auf das zeigen, was die anderen essen.` },
    { id: 'sel-myeongdong', c: 'sel', t: 'Streetfood in Myeongdong', loc: '명동', cat: ['essen', 'nacht'], v: 1, d: 2, p: 20000, w: 4,
      desc: `Ab dem späten Nachmittag rollen die Stände an: Hotteok, Eierbrot, Tornado-Kartoffeln, Hummer mit Käse. Dazu Kosmetikläden ohne Ende.`,
      tip: `Preise sind touristisch, aber fair. Olive Young ist DER Laden für koreanische Kosmetik.` },
    { id: 'sel-namsan', c: 'sel', t: 'N Seoul Tower bei Sonnenuntergang', loc: 'N서울타워', cat: ['klassiker', 'nacht'], v: 0, d: 2, p: 26000, pt: 'Aussichtsdeck ca. 21.000–26.000 Won', w: 4,
      desc: `Der Fernsehturm auf dem Namsan mit Blick über die ganze Stadt und Tausenden Liebesschlössern am Zaun.`,
      tip: `Hoch per Seilbahn oder zu Fuß (ca. 30 Min.). Die Terrasse unten ist gratis und fast genauso gut.` },
    { id: 'sel-dmz', c: 'sel', t: 'DMZ: an der Grenze zu Nordkorea', loc: 'DMZ', cat: ['ausflug', 'kultur', 'verrueckt'], v: 2, d: 8, p: 80000, pt: 'Tour ca. 60.000–100.000 Won', w: 5, taxi: false,
      desc: `Die am stärksten bewachte Grenze der Welt: ein nordkoreanischer Infiltrationstunnel, der Blick vom Observatorium nach Nordkorea, der Geisterbahnhof Dorasan.`,
      tip: `Nur mit organisierter Tour möglich. Touren können kurzfristig ausfallen, wenn die Lage angespannt ist. Fotografieren ist teils verboten.`,
      book: 'Tour vorab buchen, Passdaten werden gebraucht' },
    { id: 'sel-hongdae', c: 'sel', t: 'Hongdae am Abend', loc: '홍대', cat: ['nacht'], v: 1, d: 3, p: 30000, w: 4,
      desc: `Studentenviertel mit Straßenmusikern, K-Pop-Tanzgruppen auf der Straße, Clubs und unzähligen Bars.`,
      tip: `Freitag und Samstag ist am meisten los. Danach weiter ins Noraebang.` },
    { id: 'sel-hangang', c: 'sel', t: 'Ramyeon am Han-Fluss', loc: '반포한강공원', cat: ['chill', 'essen', 'verrueckt'], v: 1, d: 2, p: 8000, w: 4,
      desc: `Koreanisches Ritual: im Convenience Store Instantnudeln in der Kochmaschine zubereiten und am Flussufer picknicken.`,
      tip: `Im Banpo-Park sprüht von Frühling bis Herbst abends die Regenbogen-Fontäne von der Brücke.` },
    { id: 'sel-seongsu', c: 'sel', t: 'Seongsu-dong', loc: '성수동', cat: ['chill', 'kultur'], v: 0, d: 3, p: 0, w: 3,
      desc: `Alte Fabriken voller Concept Stores, Pop-up-Läden und Cafés – das Brooklyn von Seoul.`,
      tip: `Pop-ups wechseln wöchentlich. Am Wochenende stehen Schlangen vor den angesagten Läden.` },
    { id: 'sel-lotte', c: 'sel', t: 'Lotte World Tower, 123. Stock', loc: '롯데월드타워', cat: ['klassiker', 'verrueckt'], v: 1, d: 2, p: 31000, pt: 'ca. 31.000 Won', w: 3,
      desc: `Mit 555 m das höchste Gebäude Koreas. Der Aufzug fährt in einer Minute nach oben, oben wartet ein Glasboden.`,
      tip: `Für Mutige: die „Sky Bridge Tour“ über das Dach (extra Ticket). Unten liegt der Freizeitpark Lotte World.` },
    { id: 'sel-starfield', c: 'sel', t: 'Starfield Library im COEX', loc: '별마당도서관', cat: ['chill'], v: 0, d: 1, p: 0, w: 3,
      desc: `Zwei riesige Bücherwände mitten in einem Einkaufszentrum – das bekannteste Fotomotiv in Gangnam.`,
      tip: `Gegenüber liegt der Tempel Bongeunsa, eine ruhige Ecke zwischen den Bürotürmen.` },
    { id: 'sel-bbq', c: 'sel', t: 'Korean BBQ mit Soju', loc: '삼겹살', cat: ['essen', 'klassiker'], v: 1, d: 2, p: 30000, pt: 'ca. 20.000–35.000 Won', w: 4, taxi: false,
      desc: `Samgyeopsal (Schweinebauch) am Tisch grillen, mit Salat, Knoblauch und Kimchi einwickeln. Dazu Soju und Bier.`,
      tip: `Meist erst ab zwei Portionen bestellbar – zu zweit perfekt. „Somaek“ heißt Soju im Bier.` },
    { id: 'sel-chimaek', c: 'sel', t: 'Chimaek: Fried Chicken & Bier', loc: '치맥', cat: ['essen', 'nacht'], v: 0, d: 1.5, p: 25000, w: 4, taxi: false,
      desc: `Doppelt frittiertes, knuspriges Hähnchen mit Bier – Koreas liebstes Feierabendessen.`,
      tip: `Halb „Yangnyeom“ (süß-scharf glasiert), halb klassisch bestellen.` },
    { id: 'sel-noraebang', c: 'sel', t: 'Noraebang (Karaoke)', loc: '노래방', cat: ['verrueckt', 'nacht'], v: 2, d: 2, p: 15000, pt: 'ca. 15.000–30.000 Won pro Stunde und Raum', w: 4, taxi: false,
      desc: `Eigener Raum mit Tamburin, Discolicht und riesiger Songliste. Pflichtprogramm.`,
      tip: `Coin-Noraebang sind Mini-Kabinen, bezahlt wird pro Song. Perfekt für zwischendurch.` },
    { id: 'sel-jjimjil', c: 'sel', t: 'Jjimjilbang: Nacht in der Sauna', loc: '찜질방', cat: ['verrueckt', 'chill'], v: 2, d: 3, p: 15000, pt: 'ca. 10.000–20.000 Won', w: 4, taxi: false,
      desc: `24-Stunden-Badehaus mit heißen Becken, Saunaräumen bei 60–90 °C, Eisraum, Snackbar und Schlafsälen auf dem Boden.`,
      tip: `Im Bad nackt (nach Geschlecht getrennt), im Gemeinschaftsbereich in der ausgegebenen Kleidung. Unbedingt probieren: geröstete Eier und Sikhye, süßer Reistrank.` },
    { id: 'sel-pcbang', c: 'sel', t: 'PC-Bang (Gaming-Café)', loc: 'PC방', cat: ['verrueckt'], v: 1, d: 2, p: 3000, pt: 'ca. 1.500–2.500 Won pro Stunde', w: 4, taxi: false,
      desc: `Hunderte High-End-PCs, Gamer mit Headset, Essen per Klick an den Platz. Koreas E-Sport-Kultur live.`,
      tip: `Ramyeon und Snacks direkt am Platz bestellen.` },
    { id: 'sel-kpop', c: 'sel', t: 'K-Pop-Tanzkurs', loc: 'K-POP 댄스', cat: ['verrueckt', 'kultur'], v: 2, d: 2, p: 50000, pt: 'ca. 40.000–70.000 Won', w: 3, taxi: false,
      desc: `Eine Choreo aus einem aktuellen K-Pop-Hit lernen, am Ende wird ein Video gedreht. Kein Vorwissen nötig.`,
      tip: `Kurse für Touristen gibt es auf Klook oder Trip.com. Bequeme Schuhe mitnehmen.` },
    { id: 'sel-ihwa', c: 'sel', t: 'Ihwa-Wandmalereien & Stadtmauer', loc: '이화벽화마을', cat: ['kultur', 'chill', 'natur'], v: 0, d: 2, p: 0, w: 3,
      desc: `Bemaltes Hangdorf am Naksan, darüber verläuft die alte Stadtmauer mit Abendblick über Seoul.`,
      tip: `Zum Sonnenuntergang auf der Mauer Richtung Dongdaemun laufen.` },
    { id: 'sel-ddp', c: 'sel', t: 'Dongdaemun Design Plaza bei Nacht', loc: '동대문디자인플라자', cat: ['kultur', 'nacht'], v: 0, d: 1.5, p: 0, w: 4,
      desc: `Zaha Hadids silbernes Raumschiff, nachts beleuchtet. Rundherum Großmärkte, die bis in den Morgen offen haben.`,
      tip: `Die Mode-Großmärkte öffnen teils erst um 20 Uhr – Nachtshopping wie nirgendwo sonst.` },
    { id: 'sel-sannakji', c: 'sel', t: 'Lebender Oktopus (Sannakji)', loc: '노량진수산시장', cat: ['essen', 'verrueckt'], v: 3, d: 2, p: 40000, pt: 'ca. 30.000–50.000 Won', w: 2,
      desc: `Im Fischmarkt Noryangjin Oktopus aussuchen und kleinschneiden lassen – die Stücke bewegen sich noch auf dem Teller.`,
      tip: `Gut kauen! Die Saugnäpfe haften, also nicht in großen Stücken schlucken. Oben im Markt bereiten Restaurants euren Fisch zu.` },
    { id: 'sel-cheonggye', c: 'sel', t: 'Abendspaziergang am Cheonggyecheon', loc: '청계천', cat: ['chill'], v: 0, d: 1, p: 0, w: 4,
      desc: `Ein freigelegter Bach mitten durch die Innenstadt, abends beleuchtet – perfekt zum Ankommen.`,
      tip: `Startet am Gwanghwamun-Platz mit der Statue von König Sejong.` },
    { id: 'sel-bukhansan', c: 'sel', t: 'Wanderung auf den Bukhansan', loc: '북한산', cat: ['natur', 'ausflug'], v: 1, d: 6, p: 0, w: 5,
      desc: `Granitgipfel am Stadtrand mit Blick über ganz Seoul. Am Wochenende in voller Wanderausrüstung unterwegs: die Koreaner.`,
      tip: `Die letzten Meter zum Gipfel Baegundae sind steil und mit Seilen gesichert. Unter der Woche gehen, feste Schuhe.` },
    { id: 'sel-suwon', c: 'sel', t: 'Festung Hwaseong in Suwon', loc: '수원화성', cat: ['ausflug', 'kultur'], v: 0, d: 6, p: 1000, w: 5,
      desc: `UNESCO-Festungsmauer, 5,7 km lang rund um die Altstadt, ca. 1 Std. von Seoul.`,
      tip: `Abends ist die Mauer beleuchtet. Suwon ist für Brathähnchen bekannt – die Chicken Street besuchen.` },
    { id: 'sel-nami', c: 'sel', t: 'Nami-Insel', loc: '남이섬', cat: ['ausflug', 'natur', 'chill'], v: 0, d: 7, p: 16000, w: 5,
      desc: `Bewaldete Flussinsel mit Baumalleen, bekannt aus der Serie „Winter Sonata“. Im Herbst bunt, im Frühling grün.`,
      tip: `Wer mag, fliegt per Zipline auf die Insel statt mit der Fähre.` },
    { id: 'sel-lotteworld', c: 'sel', t: 'Lotte World (Freizeitpark)', loc: '롯데월드', cat: ['ausflug', 'verrueckt'], v: 1, d: 7, p: 62000, w: 5,
      desc: `Einer der größten Indoor-Freizeitparks der Welt, dazu ein Außenbereich auf einer Insel im See.`,
      tip: `Junge Koreaner kommen in Schuluniform – Kostüme kann man vor Ort leihen.` },

    // ---------- Gyeongju ----------
    { id: 'gj-bulguksa', c: 'gj', t: 'Bulguksa & Seokguram', loc: '불국사', cat: ['klassiker', 'kultur'], v: 0, d: 4, p: 0, pt: 'gratis', w: 1,
      desc: `Koreas berühmtester Tempel aus dem 8. Jahrhundert und oben im Berg die Grotte mit dem steinernen Buddha – beides UNESCO-Welterbe.`,
      tip: `Ein Shuttlebus fährt von Bulguksa hoch zur Seokguram-Grotte. Früh kommen, mittags sind Schulklassen da.` },
    { id: 'gj-tumuli', c: 'gj', t: 'Königsgräber Daereungwon', loc: '대릉원', cat: ['klassiker', 'kultur'], v: 0, d: 1.5, p: 0, pt: 'gratis oder kleiner Eintritt', w: 3,
      desc: `Riesige grasbewachsene Grabhügel der Silla-Könige mitten im Zentrum. In das Cheonmachong-Grab kann man hineingehen.`,
      tip: `Der Fotospot ist die Magnolie zwischen zwei Hügeln – im Frühling bildet sich eine Schlange.` },
    { id: 'gj-cheomseong', c: 'gj', t: 'Sternwarte Cheomseongdae', loc: '첨성대', cat: ['kultur'], v: 0, d: 0.5, p: 0, w: 3,
      desc: `Die älteste erhaltene Sternwarte Ostasiens aus dem 7. Jahrhundert, abends beleuchtet.`,
      tip: `Liegt zwischen den Grabhügeln und dem Wolji-Teich – alles gut zu Fuß verbunden.` },
    { id: 'gj-wolji', c: 'gj', t: 'Donggung-Palast & Wolji-Teich bei Nacht', loc: '동궁과 월지', cat: ['klassiker', 'nacht'], v: 0, d: 1.5, p: 3000, w: 4,
      desc: `Rekonstruierte Palastpavillons spiegeln sich nachts im Teich – eines der schönsten Abendbilder Koreas.`,
      tip: `Zur blauen Stunde kommen, ab 19 Uhr wird es voll.` },
    { id: 'gj-hwangnidan', c: 'gj', t: 'Hwangnidan-gil', loc: '황리단길', cat: ['chill', 'essen'], v: 0, d: 2, p: 0, w: 3,
      desc: `Hanok-Häuser mit Cafés, Bäckereien und kleinen Läden – das Ausgehviertel von Gyeongju.`,
      tip: `Gyeongju-Brot (Hwangnam-ppang) probieren: kleine Küchlein mit roter Bohnenpaste.` },
    { id: 'gj-bike', c: 'gj', t: 'Mit dem Rad durch die Silla-Stadt', loc: '경주', cat: ['chill', 'natur'], v: 0, d: 3, p: 10000, w: 3, taxi: false,
      desc: `Gräber, Pagoden, Reisfelder und Seen – die Stadt ist flach und perfekt für Radtouren.`,
      tip: `Leih- und E-Bikes gibt es überall im Zentrum. Im Osten liegt der Bomun-See mit Uferweg.` },
    { id: 'gj-yangdong', c: 'gj', t: 'Dorf Yangdong', loc: '양동마을', cat: ['kultur', 'ausflug'], v: 0, d: 3, p: 4000, w: 3,
      desc: `UNESCO-Dorf mit über 150 traditionellen Häusern, in denen noch Familien leben.`,
      tip: `Ca. 40 Min. mit Bus oder Taxi. Ruhig und kaum Touristen.` },
    { id: 'gj-ssambap', c: 'gj', t: 'Ssambap-Essen', loc: '쌈밥', cat: ['essen'], v: 0, d: 1.5, p: 15000, w: 2, taxi: false,
      desc: `Gyeongjus Spezialität: ein Dutzend Beilagen und Salatblätter zum Einwickeln, dazu Reis und Bulgogi.`,
      tip: `Die Ssambap-Straße liegt direkt neben den Grabhügeln.` },
    { id: 'gj-golgulsa', c: 'gj', t: 'Kampfkunst im Tempel Golgulsa', loc: '골굴사', cat: ['verrueckt', 'kultur'], v: 2, d: 3, p: 0, pt: 'Vorführung gratis, Kurse extra', w: 3,
      desc: `Höhlentempel, in dem Mönche Sunmudo trainieren – eine buddhistische Kampfkunst. Mit Vorführungen und Mitmachkursen.`,
      tip: `Liegt ca. 40 Min. östlich. Die Vorführungen sind meist nachmittags, Zeiten vorher prüfen.` },

    // ---------- Busan ----------
    { id: 'bs-gamcheon', c: 'bs', t: 'Gamcheon Culture Village', loc: '감천문화마을', cat: ['klassiker', 'kultur'], v: 0, d: 2, p: 0, w: 3,
      desc: `Bunte Häuser stapeln sich den Hang hinauf, dazwischen Kunst in den Gassen.`,
      tip: `Mit dem Minibus hochfahren, zu Fuß runterlaufen. Am Eingang gibt es eine Stempelkarte für die Kunststationen.` },
    { id: 'bs-jagalchi', c: 'bs', t: 'Fischmarkt Jagalchi', loc: '자갈치시장', cat: ['klassiker', 'essen', 'verrueckt'], v: 2, d: 2, p: 40000, w: 4,
      desc: `Koreas größter Fischmarkt: unten Fisch aussuchen, oben im Restaurant zubereiten lassen.`,
      tip: `Auch hier gibt es lebenden Oktopus. Preise vorher fragen und ruhig handeln.` },
    { id: 'bs-biff', c: 'bs', t: 'BIFF-Platz & Ssiat-Hotteok', loc: 'BIFF광장', cat: ['essen'], v: 0, d: 1, p: 5000, w: 4,
      desc: `Streetfood-Gasse am Platz des Filmfestivals. Der Klassiker: Ssiat-Hotteok, Pfannkuchen gefüllt mit Zucker und Kernen.`,
      tip: `Gegenüber liegt der Gukje-Markt – riesig und unübersichtlich, gut zum Stöbern.` },
    { id: 'bs-yonggungsa', c: 'bs', t: 'Tempel Haedong Yonggungsa', loc: '해동용궁사', cat: ['klassiker', 'kultur', 'natur'], v: 0, d: 2, p: 0, w: 0,
      desc: `Einer der wenigen Tempel direkt am Meer, auf Felsen über der Brandung.`,
      tip: `Zum Sonnenaufgang leer und magisch, ab Mittag voll.` },
    { id: 'bs-skycapsule', c: 'bs', t: 'Sky Capsule an der Küste', loc: '해운대 블루라인파크', cat: ['verrueckt', 'klassiker'], v: 1, d: 1.5, p: 18000, pt: 'ca. 30.000–40.000 Won pro Kapsel', w: 1,
      desc: `Bunte Mini-Gondeln fahren auf einer Schiene in 10 m Höhe an der Küste entlang, darunter fährt die Strandbahn.`,
      tip: `Eine Kapsel ist für 2–4 Personen, der Preis gilt pro Kapsel. Oft ausverkauft.`,
      book: 'Online vorab buchen' },
    { id: 'bs-haeundae', c: 'bs', t: 'Haeundae Beach', loc: '해운대해수욕장', cat: ['chill'], v: 0, d: 2, p: 0, w: 3,
      desc: `Busans bekanntester Strand vor Hochhauskulisse, abends Straßenkünstler an der Promenade.`,
      tip: `Im Sommer voll, außerhalb der Saison herrlich zum Spazieren.` },
    { id: 'bs-xsky', c: 'bs', t: 'Busan X the Sky', loc: '부산엑스더스카이', cat: ['klassiker'], v: 0, d: 1.5, p: 27000, w: 4,
      desc: `Aussichtsdeck im 100. Stock über Haeundae, mit Glasboden. An klaren Tagen sieht man bis zu den japanischen Tsushima-Inseln.`,
      tip: `Zum Sonnenuntergang hoch.` },
    { id: 'bs-drone', c: 'bs', t: 'Drohnenshow in Gwangalli', loc: '광안리해수욕장', cat: ['nacht', 'verrueckt'], v: 1, d: 1.5, p: 0, w: 4, only: [6],
      desc: `Jeden Samstag malen Hunderte Drohnen Bilder in den Himmel über der beleuchteten Gwangan-Brücke. Gratis.`,
      tip: `Nur samstags. Oktober bis Februar meist um 19 und 21 Uhr, März bis September um 20 und 22 Uhr. Fällt bei Wind aus.` },
    { id: 'bs-spaland', c: 'bs', t: 'Spa Land im Centum City', loc: '스파랜드 센텀시티', cat: ['chill', 'verrueckt'], v: 1, d: 3, p: 25000, pt: 'ca. 20.000–25.000 Won', w: 3,
      desc: `Edles Jjimjilbang in einem der größten Kaufhäuser der Welt: Thermalbecken, Themensaunen, Fußbad.`,
      tip: `Aufenthalt ist zeitlich begrenzt (ca. 4 Std.). Danach im Kaufhaus Shinsegae Centum City bummeln.` },
    { id: 'bs-huinnyeoul', c: 'bs', t: 'Huinnyeoul & Taejongdae', loc: '흰여울문화마을', cat: ['natur', 'chill'], v: 0, d: 3, p: 0, w: 1,
      desc: `Weißes Klippendorf über dem Meer mit Küstenweg, danach die Steilküste von Taejongdae mit Leuchtturm.`,
      tip: `Taejongdae mit dem Danubi-Bähnchen erkunden.` },
    { id: 'bs-gukbap', c: 'bs', t: 'Dwaeji-Gukbap', loc: '돼지국밥', cat: ['essen'], v: 0, d: 1, p: 11000, w: 2, taxi: false,
      desc: `Milchige Schweinefleischsuppe mit Reis – Busans Nationalgericht, oft rund um die Uhr.`,
      tip: `Mit Garnelenpaste, Lauch und Chili selbst abschmecken. Gegen Kater unschlagbar.` },
    { id: 'bs-milmyeon', c: 'bs', t: 'Milmyeon (kalte Nudeln)', loc: '밀면', cat: ['essen'], v: 0, d: 1, p: 10000, w: 2, taxi: false,
      desc: `Busans Version der kalten Nudeln in eisiger Brühe – im Sommer das Beste.`,
      tip: `„Bibim“ ist die scharfe Version ohne Brühe.` },
    { id: 'bs-oryukdo', c: 'bs', t: 'Oryukdo Skywalk', loc: '오륙도 스카이워크', cat: ['natur', 'verrueckt'], v: 1, d: 1, p: 0, w: 1,
      desc: `Glassteg 35 m über den Klippen mit Blick auf fünf Felsinseln im Meer.`,
      tip: `Kurz, aber spektakulär. Danach den Küstenweg Igidae entlanglaufen.` },
    { id: 'bs-songdo', c: 'bs', t: 'Songdo-Seilbahn über dem Meer', loc: '송도해상케이블카', cat: ['verrueckt'], v: 1, d: 1.5, p: 20000, pt: 'ca. 17.000–22.000 Won', w: 3,
      desc: `Gondel mit Glasboden direkt über das Meer zum Songdo-Park.`,
      tip: `Die „Crystal Cabin“ mit Glasboden wählen.` },

    // ---------- Jeju ----------
    { id: 'jj-seongsan', c: 'jj', t: 'Sonnenaufgang am Seongsan Ilchulbong', loc: '성산일출봉', cat: ['klassiker', 'natur'], v: 1, d: 2.5, p: 5000, w: 0,
      desc: `Ein Krater, der wie eine Krone aus dem Meer ragt. Wer früh hochsteigt (ca. 25 Min.), sieht die Sonne aus dem Ozean steigen.`,
      tip: `Öffnet vor Sonnenaufgang, die Zeiten wechseln mit der Jahreszeit. Am Vorabend an der Ostküste übernachten.` },
    { id: 'jj-haenyeo', c: 'jj', t: 'Haenyeo-Taucherinnen', loc: '해녀', cat: ['kultur', 'verrueckt'], v: 1, d: 1, p: 0, w: 1,
      desc: `Frauen, oft über 70, die ohne Atemgerät nach Seeigeln und Muscheln tauchen. UNESCO-Kulturerbe. Am Seongsan gibt es Vorführungen.`,
      tip: `Danach frischen Seeigel oder Abalone direkt am Strand essen.` },
    { id: 'jj-manjanggul', c: 'jj', t: 'Lavahöhle Manjanggul', loc: '만장굴', cat: ['natur'], v: 0, d: 1.5, p: 4000, w: 3,
      desc: `Ein Tunnel, den flüssige Lava in den Fels gefressen hat, mit einer der größten Lavasäulen der Welt. UNESCO-Welterbe.`,
      tip: `Seit Mai 2026 nach Umbau wieder offen, aber nur ein Teilstück. Drinnen kühl, Jacke mitnehmen. Jeden ersten Mittwoch im Monat geschlossen.` },
    { id: 'jj-udo', c: 'jj', t: 'Insel Udo mit dem E-Bike', loc: '우도', cat: ['natur', 'chill'], v: 0, d: 5, p: 10000, pt: 'Fähre ca. 10.000 Won + Leihrad', w: 5,
      desc: `Kleine Insel vor Jeju mit weißen Stränden, Leuchtturm und Erdnuss-Eis. Am besten mit E-Bike oder Roller.`,
      tip: `Fähre ab Seongsan, ca. 15 Min. Bei Sturm fällt sie aus.` },
    { id: 'jj-hallasan', c: 'jj', t: 'Gipfelwanderung Hallasan', loc: '한라산', cat: ['natur', 'verrueckt'], v: 2, d: 9, p: 0, pt: 'gratis', w: 5,
      desc: `Koreas höchster Berg (1.950 m), ein Vulkan mit Kratersee. 9–10 Std. hoch und runter.`,
      tip: `Sehr früh starten, die Wege werden am Mittag für den Aufstieg gesperrt.`,
      book: 'Gipfelrouten vorab online reservieren' },
    { id: 'jj-blackpork', c: 'jj', t: 'Schwarzes Schwein vom Grill', loc: '흑돼지', cat: ['essen', 'klassiker'], v: 0, d: 2, p: 35000, w: 4, taxi: false,
      desc: `Jejus Spezialität: dickes Bauchfleisch vom schwarzen Schwein, gegrillt und in Sardellensoße gedippt.`,
      tip: `Die „Black Pork Street“ in Jeju-Stadt hat die größte Auswahl.` },
    { id: 'jj-osulloc', c: 'jj', t: 'Teefelder von Osulloc', loc: '오설록 티뮤지엄', cat: ['chill'], v: 0, d: 1.5, p: 0, w: 3,
      desc: `Grüntee-Plantagen im Westen der Insel mit Museum und Matcha-Eis.`,
      tip: `Bei Sonnenschein ein Spaziergang zwischen den Teereihen.` },
    { id: 'jj-loveland', c: 'jj', t: 'Jeju Loveland', loc: '제주러브랜드', cat: ['verrueckt'], v: 3, d: 1.5, p: 12000, w: 3,
      desc: `Ein Skulpturenpark rund ums Thema Sex – einst für Paare in den Flitterwochen gedacht. Völlig absurd.`,
      tip: `Ab 18. Liegt nahe dem Flughafen, passt gut an den An- oder Abreisetag.` },
    { id: 'jj-waterfall', c: 'jj', t: 'Wasserfälle Cheonjiyeon & Jeongbang', loc: '천지연폭포', cat: ['natur'], v: 0, d: 2, p: 2000, w: 3,
      desc: `Jeongbang stürzt direkt ins Meer, Cheonjiyeon liegt in einer üppigen Schlucht und ist abends beleuchtet.`,
      tip: `Beide liegen bei Seogwipo im Süden der Insel.` },
    { id: 'jj-olle', c: 'jj', t: 'Wanderung auf dem Olle-Weg', loc: '제주올레길', cat: ['natur', 'chill'], v: 0, d: 5, p: 0, w: 5,
      desc: `Jejus Küstenwanderweg in über 20 Etappen. Etappe 7 bei Seogwipo gilt als die schönste.`,
      tip: `Mit dem Bus zurück zum Start, die Etappen sind gut ausgeschildert.` },
    { id: 'jj-hyeopjae', c: 'jj', t: 'Strand Hyeopjae', loc: '협재해수욕장', cat: ['chill', 'natur'], v: 0, d: 2, p: 0, w: 3,
      desc: `Türkisfarbenes Wasser, weißer Sand und Blick auf die Insel Biyangdo.`,
      tip: `Im Sommer Badestrand, sonst perfekt für den Sonnenuntergang.` },
    { id: 'jj-tangerine', c: 'jj', t: 'Mandarinen selbst pflücken', loc: '감귤 체험', cat: ['chill'], v: 0, d: 1.5, p: 10000, w: 3, taxi: false,
      desc: `Jeju ist berühmt für seine Mandarinen. Von etwa November bis Januar kann man auf Plantagen selbst pflücken.`,
      tip: `Nur in der Saison. Außerhalb gibt es Mandarinensaft und -schokolade überall.` },

    // ---------- Überall ----------
    { id: 'any-convenience', c: 'any', t: 'Abendessen im Convenience Store', loc: '편의점', cat: ['essen', 'verrueckt'], v: 1, d: 1, p: 8000, w: 4, taxi: false,
      desc: `GS25, CU und 7-Eleven sind in Korea kleine Restaurants: Instantnudeln, Dosirak, Triangel-Gimbap, Bananenmilch – mit Tischen und Heißwasser.`,
      tip: `Bananenmilch aus der kleinen bauchigen Flasche ist Kult.` },
    { id: 'any-soju', c: 'any', t: 'Soju-Runde mit Anju', loc: '소주', cat: ['essen', 'nacht', 'verrueckt'], v: 1, d: 2, p: 25000, w: 4, taxi: false,
      desc: `Soju-Flasche schütteln, Boden abklopfen, einschenken lassen. Dazu Anju – Snacks wie Pajeon oder Fischkuchen-Suppe.`,
      tip: `Nie das eigene Glas selbst füllen, man schenkt sich gegenseitig ein. Beim Trinken vor Älteren den Kopf leicht wegdrehen.` },
    { id: 'any-beauty', c: 'any', t: 'Koreanische Kosmetik & Gesichtsbehandlung', loc: '올리브영', cat: ['chill', 'verrueckt'], v: 1, d: 2, p: 60000, pt: 'Einkauf nach Lust, Behandlung ab ca. 60.000 Won', w: 3,
      desc: `Seoul ist die Welthauptstadt der Hautpflege: Sheet-Masks stapelweise kaufen oder eine Gesichtsbehandlung im Spa buchen.`,
      tip: `Ab 15.000 Won pro Einkauf gibt es die Mehrwertsteuer in vielen Läden direkt an der Kasse zurück – Pass zeigen.` },
    { id: 'any-tteokbokki', c: 'any', t: 'Tteokbokki-Buffet', loc: '떡볶이', cat: ['essen'], v: 1, d: 1.5, p: 12000, w: 2, taxi: false,
      desc: `Reiskuchen in scharf-süßer Soße. In Buffet-Ketten wie Dookki kocht man sich am Tisch so viel, wie man will.`,
      tip: `Am Ende Reis in die Restsoße geben und anbraten lassen.` },
    { id: 'any-hanokstay', c: 'any', t: 'Nacht im Hanok', loc: '한옥스테이', cat: ['kultur', 'chill'], v: 1, d: 1, p: 50000, pt: 'ca. 60.000–150.000 Won pro Zimmer', w: 4, taxi: false,
      desc: `Schlafen auf der beheizten Bodenmatte (Ondol) in einem traditionellen Holzhaus mit Innenhof.`,
      tip: `Gibt es in Seoul, Gyeongju und Jeonju. Für empfindliche Rücken: Es ist hart.` },
    { id: 'any-templestay', c: 'any', t: 'Templestay im Kloster', loc: '템플스테이', cat: ['kultur', 'chill'], v: 1, d: 6, p: 80000, pt: 'ca. 50.000–100.000 Won', w: 5, taxi: false,
      desc: `Eine Nacht im buddhistischen Kloster: Meditation, 108 Verbeugungen, Morgengebet um 4 Uhr und vegetarisches Tempelessen.`,
      tip: `Es gibt auch kurze Programme ohne Übernachtung in Seoul, etwa im Jogyesa oder Bongeunsa.`,
      book: 'Online auf templestay.com' },
    { id: 'any-cafe', c: 'any', t: 'Themencafé', loc: '카페', cat: ['verrueckt', 'chill'], v: 1, d: 1, p: 8000, w: 3, taxi: false,
      desc: `Korea ist verrückt nach Cafés: Bäckerei-Paläste, Comic-Cafés, Brettspiel-Cafés, Cafés, die aussehen wie Zeichentrick.`,
      tip: `Auf Naver Map nach „카페“ suchen und nach Bewertungen sortieren.` }
  ],

  /* Vorgeschlagener Plan: [Aktivität, Tageszeit] */
  defaultPlan: [
    { city: 'fra', items: [['t-fra-icn', 4]] },
    { city: 'sel', items: [['sel-cheonggye', 3], ['sel-myeongdong', 4]] },
    { city: 'sel', items: [['sel-hanbok', 1], ['sel-gyeongbok', 1], ['sel-bukchon', 3], ['sel-insadong', 3], ['sel-gwangjang', 4]] },
    { city: 'sel', items: [['sel-dmz', 5], ['sel-bbq', 4], ['sel-noraebang', 4]] },
    { city: 'sel', items: [['sel-changdeok', 1], ['sel-ihwa', 3], ['sel-ddp', 4], ['sel-chimaek', 4]] },
    { city: 'sel', items: [['sel-lotte', 1], ['sel-starfield', 1], ['sel-seongsu', 3], ['sel-hangang', 4], ['sel-jjimjil', 4]] },
    { city: 'gj', items: [['t-sel-gj', 1], ['gj-tumuli', 3], ['gj-cheomseong', 3], ['gj-hwangnidan', 3], ['gj-wolji', 4]] },
    { city: 'gj', items: [['gj-bulguksa', 1], ['gj-ssambap', 2], ['gj-bike', 3]] },
    { city: 'bs', items: [['t-gj-bs', 1], ['bs-gamcheon', 3], ['bs-biff', 3], ['bs-jagalchi', 4]] },
    { city: 'bs', items: [['bs-yonggungsa', 0], ['bs-skycapsule', 1], ['bs-haeundae', 3], ['bs-xsky', 4], ['bs-drone', 4]] },
    { city: 'bs', items: [['bs-huinnyeoul', 1], ['bs-gukbap', 2], ['bs-spaland', 3], ['any-soju', 4]] },
    { city: 'jj', items: [['t-bs-jj', 1], ['jj-manjanggul', 3], ['jj-blackpork', 4]] },
    { city: 'jj', items: [['jj-seongsan', 0], ['jj-haenyeo', 1], ['jj-udo', 3]] },
    { city: 'sel', items: [['t-jj-sel', 1], ['any-beauty', 3], ['sel-namsan', 4]] },
    { city: 'fra', items: [['t-icn-fra', 1]] }
  ],

  tickets: {
    't-fra-icn': { from: ['프랑크푸르트', 'Frankfurt (FRA)'], to: ['인천', 'Seoul-Incheon (ICN)'], label: 'Flug' },
    't-sel-gj': { from: ['서울역', 'Seoul Station'], to: ['신경주', 'Singyeongju'], label: 'KTX' },
    't-gj-bs': { from: ['신경주', 'Singyeongju'], to: ['부산역', 'Busan Station'], label: 'KTX' },
    't-bs-jj': { from: ['김해', 'Busan-Gimhae (PUS)'], to: ['제주', 'Jeju (CJU)'], label: 'Flug' },
    't-jj-sel': { from: ['제주', 'Jeju (CJU)'], to: ['김포', 'Seoul-Gimpo (GMP)'], label: 'Flug' },
    't-icn-fra': { from: ['인천', 'Incheon (ICN)'], to: ['프랑크푸르트', 'Frankfurt (FRA)'], label: 'Flug' }
  },

  /* Ø Tageshöchstwerte in °C, gerundet */
  weather: {
    sel: [2, 5, 11, 18, 24, 27, 29, 30, 26, 20, 12, 4],
    gj: [6, 9, 14, 21, 25, 28, 30, 31, 27, 22, 15, 8],
    bs: [8, 10, 14, 19, 23, 26, 28, 30, 27, 23, 17, 11],
    jj: [9, 10, 13, 18, 22, 25, 29, 30, 27, 22, 17, 12]
  },

  prep: [
    { id: 'p-pass', off: -120, t: 'Reisepass prüfen', d: 'Muss für die ganze Reise gültig sein. Deutsche dürfen bis zu 90 Tage ohne Visum bleiben.' },
    { id: 'p-flug', off: -120, t: 'Flug Frankfurt – Seoul buchen', d: 'Direktflüge z. B. mit Lufthansa oder Korean Air, hin und zurück ab Incheon.' },
    { id: 'p-hotel', off: -60, t: 'Hotels buchen', d: 'Für zwei Betten „Twin“ wählen, „Double“ ist ein Bett. Booking, Agoda oder die koreanische App Yanolja.' },
    { id: 'p-jeju', off: -45, t: 'Flüge nach und ab Jeju buchen', d: 'Busan → Jeju und Jeju → Seoul-Gimpo, z. B. mit Korean Air, Jeju Air oder T’way.' },
    { id: 'p-keta', off: -45, t: 'Einreiseregeln checken', d: 'Die K-ETA-Befreiung für Deutsche gilt laut aktuellem Stand bis 31.12.2026. Bei späterer Reise prüfen, ob ihr eine K-ETA braucht.' },
    { id: 'p-idp', off: -45, t: 'Internationalen Führerschein beantragen', d: 'Für den Mietwagen auf Jeju. Beim Bürgeramt, dauert ein paar Tage.' },
    { id: 'p-ins', off: -30, t: 'Auslandskrankenversicherung', d: 'Die gesetzliche Kasse zahlt in Korea nichts. Kostet meist ca. 10–25 € im Jahr.' },
    { id: 'p-ktx', off: -30, t: 'KTX-Tickets kaufen', d: 'Seoul → Gyeongju → Busan. Der Verkauf startet ca. 1 Monat vorher in der Korail-App.' },
    { id: 'p-car', off: -30, t: 'Mietwagen auf Jeju reservieren', d: 'Abholung am Flughafen Jeju. Vollkasko ohne Selbstbeteiligung wählen.' },
    { id: 'p-dmz', off: -14, t: 'DMZ-Tour buchen', d: 'Plätze sind begrenzt, die Passdaten werden vorab gebraucht.' },
    { id: 'p-esim', off: -14, t: 'eSIM besorgen', d: 'In Korea ist nichts gesperrt. Eine Daten-eSIM reicht, WLAN gibt es fast überall.' },
    { id: 'p-apps', off: -14, t: 'Apps installieren', d: 'Naver Map oder KakaoMap, Kakao T oder Uber (Taxi), Papago (Übersetzer), Korail.' },
    { id: 'p-elefand', off: -10, t: 'In Elefand eintragen', d: 'Die Krisenvorsorgeliste des Auswärtigen Amts, damit die Botschaft euch im Notfall erreicht.' },
    { id: 'p-garden', off: -7, t: 'Geheimen Garten reservieren', d: 'Die Führungen in Changdeokgung sind schnell ausgebucht.' },
    { id: 'p-arrival', off: -3, t: 'Einreisekarte vorbereiten', d: 'Ohne K-ETA füllt ihr eine Einreisekarte aus – auf Papier im Flugzeug oder vorab online als e-Arrival Card.' },
    { id: 'p-cash', off: -2, t: 'Etwas Bargeld besorgen', d: 'Ein paar Zehntausend Won für Märkte und Streetfood. Automaten mit „Global ATM“ nehmen deutsche Karten.' },
    { id: 'p-addr', off: -2, t: 'Hoteladressen auf Koreanisch speichern', d: 'Unter „Tage“ beim Hotel eintragen – dann gibt es dafür eine Taxi-Karte.' }
  ],

  packing: [
    'Reisepass (plus Foto davon in der Cloud)',
    'Zwei Kreditkarten (Visa und Mastercard)',
    'Internationaler Führerschein für Jeju',
    'Handy, Ladekabel, Kopfhörer',
    'Kein Adapter nötig: Korea hat die gleichen Steckdosen wie Deutschland',
    'Bequeme Schuhe zum schnellen Ausziehen – Seoul ist hügelig',
    'Socken ohne Löcher (Schuhe aus in Restaurants und Hanoks)',
    'Regenjacke, im Sommer leichte Kleidung',
    'Desinfektionsgel und Taschentücher',
    'Reiseapotheke: Magen, Schmerzmittel, Pflaster',
    'Ohrstöpsel und Schlafmaske',
    'Sonnencreme und Sonnenbrille',
    'Kleiner Tagesrucksack',
    'Badehose für Strand und Spa Land',
    'Platz im Koffer für Kosmetik-Einkäufe'
  ],

  phrases: [
    ['안녕하세요', 'annyeonghaseyo', 'Hallo'],
    ['감사합니다', 'gamsahamnida', 'Danke'],
    ['이거 얼마예요?', 'igeo eolmayeyo?', 'Was kostet das?'],
    ['이거 주세요', 'igeo juseyo', 'Das hier, bitte'],
    ['맵지 않게 해 주세요', 'maepji anke hae juseyo', 'Bitte nicht scharf'],
    ['두 명이에요', 'du myeong-ieyo', 'Wir sind zwei Personen'],
    ['계산해 주세요', 'gyesanhae juseyo', 'Die Rechnung, bitte'],
    ['화장실 어디예요?', 'hwajangsil eodiyeyo?', 'Wo ist die Toilette?'],
    ['여기로 가 주세요', 'yeogiro ga juseyo', 'Bitte fahren Sie hierhin'],
    ['카드 돼요?', 'kadeu dwaeyo?', 'Kann ich mit Karte zahlen?'],
    ['물 주세요', 'mul juseyo', 'Wasser, bitte'],
    ['저희는 독일 사람이에요', 'jeohuineun dogil saramieyo', 'Wir sind Deutsche'],
    ['건배!', 'geonbae!', 'Prost!'],
    ['맛있어요!', 'masisseoyo!', 'Lecker!']
  ],

  tips: [
    { id: 'visum', title: 'Einreise & Visum', html: `
      <p>Deutsche dürfen <strong>bis zu 90 Tage ohne Visum</strong> nach Südkorea. Die sonst nötige elektronische Reisegenehmigung <strong>K-ETA</strong> ist für Deutsche laut aktuellem Stand bis <strong>31.12.2026</strong> ausgesetzt. Reist ihr später, vor dem Buchen prüfen.</p>
      <ul>
        <li>Pass mindestens für die ganze Reise gültig.</li>
        <li>Ohne K-ETA füllt ihr eine Einreisekarte aus: auf Papier im Flugzeug oder vorab online als e-Arrival Card.</li>
        <li>Wer freiwillig eine K-ETA beantragt (kostenpflichtig), spart sich die Einreisekarte.</li>
        <li>Bei der Einreise werden Fingerabdrücke und ein Foto genommen.</li>
      </ul>
      <p><a href="https://www.k-eta.go.kr" target="_blank" rel="noopener">Offizielle K-ETA-Seite</a></p>` },
    { id: 'geld', title: 'Geld & Bezahlen', html: `
      <p>Korea zahlt mit Karte – fast überall, auch bei kleinen Beträgen. Visa und Mastercard funktionieren meist problemlos.</p>
      <ul>
        <li><strong>T-money</strong> oder <strong>WOWPASS</strong>: Prepaid-Karte für U-Bahn, Bus, Taxi und Convenience Stores. WOWPASS ist eine Geldwechsel- und Bezahlkarte für Touristen in einem.</li>
        <li>Etwas Bargeld für Märkte und Streetfood. Automaten mit dem Schild „Global ATM“ nehmen deutsche Karten.</li>
        <li>Faustregel: 1 € ≈ 1.580 Won. Den Kurs könnt ihr unter „Route“ anpassen.</li>
        <li>In vielen Läden gibt es die Mehrwertsteuer ab 15.000 Won pro Einkauf direkt an der Kasse zurück – Pass zeigen.</li>
        <li>Trinkgeld ist in Korea nicht üblich.</li>
      </ul>` },
    { id: 'internet', title: 'Internet & Apps', html: `
      <p>In Korea ist nichts gesperrt, das Netz ist extrem schnell und WLAN gibt es fast überall, sogar in der U-Bahn.</p>
      <ul>
        <li><strong>Naver Map</strong> oder <strong>KakaoMap</strong> zum Navigieren (mit englischer Oberfläche). Google Maps zeigt in Korea nur Bus und Bahn gut, Fußwege kaum.</li>
        <li><strong>Kakao T</strong> fürs Taxi, alternativ funktioniert die normale <strong>Uber</strong>-App.</li>
        <li><strong>Papago</strong> übersetzt Koreanisch besser als Google, auch per Kamera für Speisekarten.</li>
        <li><strong>Korail</strong> für KTX-Tickets.</li>
        <li>Eine Daten-eSIM reicht. Für viele koreanische Apps braucht man keine koreanische Nummer mehr.</li>
      </ul>
      <p>Diese Seite funktioniert nach dem ersten Öffnen auch offline.</p>` },
    { id: 'zug', title: 'KTX & Bahn', html: `
      <p>Der KTX fährt mit bis zu 300 km/h – Seoul nach Busan in rund 2,5 Std.</p>
      <ul>
        <li>Tickets in der Korail-App oder auf letskorail.com, Verkauf ca. 1 Monat vorher. Am Wochenende früh buchen.</li>
        <li>Es gibt keine Sperren am Bahnsteig. Das Ticket wird im Zug kontrolliert, aufs Handy laden reicht.</li>
        <li>Die Sitze sind fest eingebaut, die Hälfte fährt rückwärts.</li>
        <li>Der Korea Rail Pass lohnt sich bei nur zwei Zugfahrten meist nicht.</li>
        <li>Alternative ab Gangnam: der SRT ab Bahnhof Suseo nach Busan.</li>
      </ul>` },
    { id: 'flug', title: 'Inlandsflüge', html: `
      <ul>
        <li>Nach Jeju und zurück fliegt man in Korea wie andere Bus fahren: viele Verbindungen, oft günstig.</li>
        <li>Pass auch bei Inlandsflügen dabeihaben. 1 Std. vorher am Flughafen reicht meist.</li>
        <li>Powerbanks dürfen nicht ins Gepäckfach über dem Sitz, sondern müssen bei euch bleiben.</li>
        <li>Rückflug von Jeju nach Gimpo – der internationale Abflug ist in Incheon. Zwischen beiden liegt ca. 1 Std. Fahrt.</li>
      </ul>` },
    { id: 'hotel', title: 'Hotels', html: `
      <ul>
        <li>Zu zweit: <strong>Twin</strong> = zwei Betten, <strong>Double</strong> = ein großes Bett.</li>
        <li>Neben Booking und Agoda ist <strong>Yanolja</strong> die große koreanische Buchungs-App.</li>
        <li>Verrückt, aber üblich: <strong>Love Motels</strong> sind oft sauber, groß und günstig – mit Mood-Licht und Riesen-Badewanne.</li>
        <li>Hanok-Gästehäuser: auf dem Boden schlafen, oft geteiltes Bad.</li>
        <li>Die Hoteladresse auf Koreanisch unter „Tage“ beim Hotel eintragen. Dann zeigt ihr sie dem Taxifahrer als Karte.</li>
      </ul>
      <p>Die besten Gegenden pro Stadt stehen unter „Route“.</p>` },
    { id: 'essen', title: 'Essen & Trinken', html: `
      <ul>
        <li><strong>Banchan</strong> – die vielen kleinen Beilagen – sind gratis und werden nachgefüllt.</li>
        <li>BBQ und Eintöpfe gibt es oft erst ab zwei Portionen.</li>
        <li>Wasser holt man sich meist selbst am Spender, Besteck liegt in der Schublade am Tisch.</li>
        <li>Bestellt wird oft per Tablet am Tisch. Papago-Kamera hilft bei koreanischen Karten.</li>
        <li>Schärfe: Vieles ist scharf. „맵지 않게“ heißt „nicht scharf“ (siehe Sprachführer).</li>
        <li><strong>Seoul</strong>: BBQ, Fried Chicken, Marktessen. <strong>Busan</strong>: Fisch, Dwaeji-Gukbap, Milmyeon. <strong>Jeju</strong>: schwarzes Schwein, Meeresfrüchte von den Haenyeo.</li>
      </ul>` },
    { id: 'knigge', title: 'Alltag & Knigge', html: `
      <ul>
        <li>Schuhe aus in Wohnungen, Hanoks und vielen Restaurants mit Bodensitzen.</li>
        <li>Mit beiden Händen geben und nehmen, vor allem bei Älteren.</li>
        <li>In der U-Bahn leise sein. Die farbigen Sitze sind für Ältere und Schwangere.</li>
        <li>Mülleimer sind selten – Müll mitnehmen.</li>
        <li>Lieferroller fahren auch über Gehwege. Augen auf!</li>
      </ul>` },
    { id: 'sicherheit', title: 'Sicherheit', html: `
      <p>Südkorea ist eines der sichersten Reiseländer der Welt. Taschen bleiben im Café liegen, Handys werden zurückgebracht.</p>
      <ul>
        <li>Taxis über Kakao T oder Uber rufen, dann gibt es keine Preisdiskussion.</li>
        <li>Die Spannungen mit Nordkorea spürt man im Alltag nicht. Bei DMZ-Touren den Anweisungen folgen.</li>
        <li>In Ausgehvierteln am Wochenende sehr voll – bei Gedränge Abstand halten.</li>
      </ul>` },
    { id: 'wetter', title: 'Reisezeit & Wetter', html: `
      <p><strong>Beste Zeit: April bis Juni und September bis November.</strong> Kirschblüte etwa Anfang April, Herbstlaub Ende Oktober bis Anfang November. Meiden: Chuseok und Seollal, wenn ganz Korea unterwegs ist.</p>
      <ul>
        <li>Regenzeit (Jangma) etwa Ende Juni bis Ende Juli, danach heiß und schwül.</li>
        <li>Taifune vor allem im August und September, besonders im Süden und auf Jeju.</li>
        <li>Winter: In Seoul trocken und bitterkalt, Jeju bleibt milder.</li>
      </ul>
      <div id="weather-table"></div>` },
    { id: 'notfall', title: 'Notfall', html: `
      <ul>
        <li>Polizei <strong>112</strong>, Feuerwehr und Rettung <strong>119</strong>.</li>
        <li>Touristen-Hotline <strong>1330</strong>: rund um die Uhr, auch auf Englisch – hilft auch beim Übersetzen.</li>
        <li>Deutsche Botschaft Seoul: <a href="tel:+8227484114">+82 2 748 4114</a>.</li>
        <li><a href="https://krisenvorsorgeliste.diplo.de" target="_blank" rel="noopener">Elefand – Krisenvorsorgeliste</a> des Auswärtigen Amts.</li>
        <li>Apotheke heißt 약국 (yakguk). Große Krankenhäuser in Seoul haben internationale Abteilungen.</li>
      </ul>` }
  ]
});
